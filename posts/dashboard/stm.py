import streamlit as st
import pickle as pickle 
import pandas as pd
import plotly.graph_objects as go
import numpy as np


# obtenion de la table de donnees et netoyage
def get_clean_data():
    data = pd.read_csv("c:/Users/Yahnn/Documents/GitHub/Anasseyahnn/posts/dashboard/data.csv")
    
    # supression des colonnes id et unnamaed
    data = data.drop(["id","Unnamed: 32"], axis = 1)
    
    # recoage de la varible cible en  et 1
    data["diagnosis"] = data["diagnosis"].map({"M":1, "B":0})
    
    return data


###################################### Sidebar #########
def add_sidebar():
    st.sidebar.header("Cellule de Mesures des Nuclei")
    
    data = get_clean_data()
    
    
    slider_labels = [
        ("Radius (mean)","radius_mean"),
        ("Texture (mean)", "texture_mean"),
        ("Perimeter (mean)", "perimeter_mean"),
        ("Area (mean)","area_mean"),
        ("Smoothness (mean)","smoothness_mean"),
        ("Compactness (mean)", "compactness_mean"),
        ("Concavity (mean)","concavity_mean"),
        ("Concave points (mean)","concave points_mean"),
        ("Symmetry (mean)","symmetry_mean"),
        ("Fractal dimension (mean)","fractal_dimension_mean"),
        ("Radius (se)","radius_se"),
        ("Texture (se)","texture_se"),
        ("Perimeter (se)","perimeter_se"),
        ("Area (se)","area_se"),
        ("Smoothness (se)", "smoothness_se"),
        ("Compactness (se)", "compactness_se"),
        ("Concavity (se)","concavity_se"),
        ("Concave points (se)","concave points_se"),
        ("Symmetry (se)","symmetry_se"), 
        ("Fractal dimension (se)","fractal_dimension_se"),
        ("Radius (worst)","radius_worst"),
        ("Texture (worst)","texture_worst"),
        ("Perimeter (worst)","perimeter_worst"),
        ("Area (worst)","area_worst"),
        ("Smoothness (worst)","smoothness_worst"),
        ("Compactness (worst)","compactness_worst"),
        ("Concavity (worst)","concavity_worst"),
        ("Concave points (worst)","concave points_worst"),
        ("Symmetry (worst)","symmetry_worst"),
        ("Fractal dimension (worst)","fractal_dimension_worst"),
        
    ]
    
    # bouble for pour ajouter ces elements et leurs valeurs
    
    # dictionnaire des donnees pour la prediction
    input_dict = {}
    
    for label, key in slider_labels:
        input_dict[key] = st.sidebar.slider(
            label, 
            min_value=float(0),
            max_value=float(data[key].max()),
            value = float(data[key].mean())
        )
        
        
    return input_dict
############################## fin sidebar ############# 


############################# valeur du cercle #########
def get_scladed_values(input_dict):
    data = get_clean_data()
    
    X = data.drop(["diagnosis"], axis = 1)
    
    scaled_dict = {}
    
    for key, value in input_dict.items():
        max_val = X[key].max()
        min_val = X[key].min()
        scaled_value = (value - min_val) / (max_val - min_val)
        scaled_dict[key] = scaled_value
        
    return scaled_dict 


############################# grahique circulaire ######
def get_radar_chart(input_data):
    
    # ajout de la fonction get_scaled_values
    input_data = get_scladed_values(input_data)
    
    categories = ['Raduis','Texture','Perimeter', 'Area',
                 'Smoothness', 'Compactness',
                 'Concavity', 'Concave Point',
                 'Symetry', 'Fractal Dimension']

    fig = go.Figure()
    
    fig.add_trace(go.Scatterpolar(
          r = [
              input_data['radius_mean'],input_data['texture_mean'],input_data['perimeter_mean'],
              input_data['area_mean'], input_data['smoothness_mean'], input_data['compactness_mean'],
              input_data['concavity_mean'], input_data['concave points_mean'], input_data['symmetry_mean'],
              input_data['fractal_dimension_mean']
              ],
          theta=categories,
          fill='toself',
          name='Mean Value'
    ))
    fig.add_trace(go.Scatterpolar(
          r = [
              input_data['radius_se'],input_data['texture_se'],input_data['perimeter_se'],
              input_data['area_se'], input_data['smoothness_se'], input_data['compactness_se'],
              input_data['concavity_se'], input_data['concave points_se'], input_data['symmetry_se'],
              input_data['fractal_dimension_se']
              ],
          theta=categories,
          fill='toself',
          name='Standard Error'
    ))
    
    
    fig.add_trace(go.Scatterpolar(
          r = [
              input_data['radius_worst'],input_data['texture_worst'],input_data['perimeter_worst'],
              input_data['area_worst'], input_data['smoothness_worst'], input_data['compactness_worst'],
              input_data['concavity_worst'], input_data['concave points_worst'], input_data['symmetry_worst'],
              input_data['fractal_dimension_worst']
              
              ],
          theta=categories,
          fill='toself',
          name='Worst Value'
    ))
    

    fig.update_layout(
      polar=dict(
        radialaxis=dict(
          visible=True,
          range=[0, 1]
        )),
      showlegend=True
    )
    
    return fig

############################# Predictions ##############
def add_predictions(input_data):
    model = pickle.load(open("c:/Users/Yahnn/Documents/GitHub/Anasseyahnn/posts/dashboard/model.pkl", "rb"))
    scaler = pickle.load(open("c:/Users/Yahnn/Documents/GitHub/Anasseyahnn/posts/dashboard/scaler.pkl", "rb"))
    
    input_array = np.array(list(input_data.values())).reshape(1,-1) # pour le resultat sur une ligne
    
    # standardisation des donnees
    input_array_scaled = scaler.transform(input_array)
    
    # prediction des donnees
    prediction = model.predict(input_array_scaled)
    
    st.subheader("Prédiction")
    st.write("La prediction est : ")
    
    # diagnostic 
    if prediction[0] == 0:
        st.write("<span class='diagnosis benign'>Tumeur Benigne</span>", unsafe_allow_html=True)
    else:
        st.write("<span class='diagnosis malicious'>Tumeur Maligne</span>",unsafe_allow_html=True)
    
    
    
    st.write("Probabilite de tumeur benigne", model.predict_proba(input_array_scaled)[0][0])
    st.write("Probabilite de tumeur maligne", model.predict_proba(input_array_scaled)[0][1])
    
    
    st.write("Cette application a été développée dans le but de fournir une estimation basée sur des données cliniques entrées par l'utilisateur. Les résultats fournis par cette application ne remplacent en aucun cas l'avis médical professionnel.")
    
    
    

########################################################
def main():
    st.set_page_config(
        page_title="Cancer Breast",
        page_icon= "female-doctor",
        layout='wide',
        initial_sidebar_state='expanded'
    )
    
    with open("c:/Users/Yahnn/Documents/GitHub/Anasseyahnn/posts/dashboard/style.css") as f:
        st.markdown("<style>{}</style>".format(f.read()), unsafe_allow_html=True)
    
    
    input_data = add_sidebar()
    
    
    with st.container():
        st.title("Diagnostic Du Cancer Breast")
        st.write("L'application 'Diagnostic du Cancer du Sein Predictor' est un outil convivial basé sur Streamlit qui permet aux utilisateurs de prédire le diagnostic d'une tumeur mammaire (maligne ou benigne) en utilisant des données cliniques. Cette application s'appuie sur un modèle pré-entraîné de machine learning pour fournir des prédictions fiables et rapides.")
      
    # repartition de la largeur des colonnes
    col1, col2 = st.columns([4,1])
    
    with col1 :
        radar_chart = get_radar_chart(input_data) # pour les graphiques radar
        st.plotly_chart(radar_chart)
    with col2 :
        add_predictions(input_data)
        

if __name__ == '__main__':
    main()
