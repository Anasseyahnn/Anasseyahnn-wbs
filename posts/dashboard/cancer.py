
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import pickle as pickle



# obtenion de la table de donnees et netoyage
def get_clean_data():
    data = pd.read_csv("c:/Users/Yahnn/Documents/GitHub/Anasseyahnn/posts/dashboard/data.csv")
    
    # supression des colonnes id et unnamaed
    data = data.drop(["id","Unnamed: 32"], axis = 1)
    
    # recoage de la varible cible en  et 1
    data["diagnosis"] = data["diagnosis"].map({"M":1, "B":0})
    
    return data

# Sudivision en caracteristique et cible 
def creat_model(data):
    X = data.drop("diagnosis", axis =1)
    y = data["diagnosis"]
    
    # sdndardisation des données 
    scaler = StandardScaler()
    X = scaler.fit_transform(X)
    
    # decoupage des données
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
        )
    
    # Entrainement du modele sur les donnees test
    model = LogisticRegression()
    model.fit(X_train, y_train)
    
    #test modele
    y_pred = model.predict(X_test)
    print('Accurency de modèle est', accuracy_score(y_test, y_pred))
    print("Rapport de classification: \n",classification_report(y_test, y_pred))
    
    return model, scaler


    

# lecture 

def main():
    data = get_clean_data()
    
    model, scaler = creat_model(data)
    
    # utilisation de pickle pour enregistrer le modele
    with open('model.pkl', 'wb') as f:
        pickle.dump(model, f)
        
    with open('scaler.pkl', 'wb') as f:
        pickle.dump(scaler, f)
    

if __name__ == '__main__':
    main()
