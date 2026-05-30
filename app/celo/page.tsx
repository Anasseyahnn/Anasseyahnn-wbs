"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Globe, ArrowLeft, ExternalLink, ChevronRight, Copy, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/footer"

const tableOfContents = [
  { id: "mcp", title: "MCP Protocol", titleEs: "Protocolo MCP" },
  { id: "vibe-coding", title: "Vibe Coding on Celo", titleEs: "Vibe Coding en Celo" },
  { id: "builders-funnel", title: "Celo Builders Funnel", titleEs: "Celo Builders Funnel" },
  { id: "proof-of-ship", title: "Proof of Ship", titleEs: "Proof of Ship" },
  { id: "farcaster", title: "Mini App for Farcaster", titleEs: "Mini App para Farcaster" },
  { id: "minipay", title: "Mini App for MiniPay", titleEs: "Mini App para MiniPay" },
  { id: "buildathon", title: "Latam Buildathon 2026", titleEs: "Latam Buildathon 2026" },
  { id: "miniplay", title: "Success Case: MiniPlay", titleEs: "Caso de Exito: MiniPlay" },
]

const usefulLinks = [
  { url: "https://docs.celo.org/tooling/testnets/celo-sepolia", label: "Celo Sepolia Testnet Docs" },
  { url: "https://faucet.celo.org/celo-sepolia", label: "Celo Sepolia Faucet" },
  { url: "https://sepolia.celoscan.io/", label: "Celo Sepolia Explorer" },
  { url: "https://docs.celo.org/build-on-celo/build-with-ai/mcp", label: "Celo MCP Documentation" },
  { url: "https://github.com/sodofi/vibe-code-prompts", label: "Vibe Code Prompts (GitHub)" },
]

function CodeBlock({ code, language = "text" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 border-b border-white/10">
        <span className="text-xs text-white/50 font-mono">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-white/80 whitespace-pre-wrap">{code}</pre>
    </div>
  )
}

export default function CeloPage() {
  const { language, setLanguage } = useLanguage()
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-4 py-2">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 border border-white/15">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg sm:text-xl font-bold text-white">
              Arturo Grande
            </Link>
            
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="hidden md:inline-flex items-center space-x-2 text-white/75 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span>{language === "en" ? "Back to Home" : "Volver al Inicio"}</span>
              </Link>
              
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors glass px-3 py-2 rounded-lg"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language === "en" ? "ES" : "EN"}</span>
              </button>

              <Link
                href="/"
                className="md:hidden text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
              >
                <ArrowLeft size={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/icons/celo-logo.png"
              alt="Celo Logo"
              width={120}
              height={120}
              className="rounded-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FCFF52] to-[#35D07F] bg-clip-text text-transparent">
            Celo Argentina
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            {language === "en" 
              ? "Resources, guides and tools to build on Celo blockchain in Argentina"
              : "Recursos, guias y herramientas para construir en la blockchain de Celo en Argentina"
            }
          </p>
        </div>
      </section>

      {/* v0 Promo Code Box */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#FCFF52] bg-gradient-to-r from-[#FCFF52]/10 to-[#35D07F]/10 p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FCFF52]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#35D07F]/20 rounded-full blur-3xl" />
            <div className="relative z-10 text-center">
              <p className="text-lg text-white/80 mb-3">
                {language === "en" ? "Workshop Code - Get $10 v0 Credits" : "Codigo del Taller - Obtene $10 de Creditos v0"}
              </p>
              <div className="inline-block bg-black/50 border border-[#FCFF52] rounded-xl px-8 py-4 mb-4">
                <p className="text-4xl md:text-5xl font-bold font-mono tracking-wider text-[#FCFF52]">BUILDATHON-V0</p>
              </div>
              <p className="text-sm text-white/60">
                {language === "en" 
                  ? "Valid for 200 builders. Can be redeemed once per individual."
                  : "Valido para 200 builders. Se puede canjear una vez por persona."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-white/90">
            {language === "en" ? "Useful Links" : "Links Utiles"}
          </h2>
          <div className="flex flex-wrap gap-3">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#35D07F]/50 transition-all text-sm text-white/80 hover:text-white"
              >
                {link.label}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white/90">
              {language === "en" ? "Table of Contents" : "Indice de Contenidos"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {tableOfContents.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === item.id
                      ? "bg-[#35D07F]/20 border border-[#35D07F]/50 text-[#35D07F]"
                      : "hover:bg-white/5 text-white/70 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-mono text-white/40">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{language === "en" ? item.title : item.titleEs}</span>
                  <ChevronRight size={16} className="opacity-50" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-20">
          
          {/* MCP Protocol */}
          <section id="mcp" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">🔌</span>
              {language === "en" ? "Model Context Protocol (MCP)" : "Protocolo de Contexto de Modelo (MCP)"}
            </h2>
            <div className="space-y-6 text-white/75 leading-relaxed">
              <p>
                {language === "en"
                  ? "The Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to Large Language Models (LLMs). It was developed by Anthropic, the AI company behind Claude, with the goal of solving the challenge of consistently and efficiently connecting AI models with various data sources and tools."
                  : "El Model Context Protocol (MCP) es un protocolo abierto que estandariza como las aplicaciones proporcionan contexto a los Modelos de Lenguaje Extenso (LLMs). Fue desarrollado por Anthropic, la empresa de IA detras de Claude, con el objetivo de resolver el desafio de conectar de manera consistente y eficiente los modelos de IA con diversas fuentes de datos y herramientas."
                }
              </p>
              <p>
                {language === "en"
                  ? "This makes Claude natively compatible with all MCP servers. OpenAI has announced its compatibility with the MCP standard, ensuring broad adoption across major AI platforms."
                  : "Esto hace que Claude sea nativamente compatible con todos los servidores MCP. OpenAI ha anunciado su compatibilidad con el estandar MCP, garantizando una adopcion amplia en las principales plataformas de IA."
                }
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                {language === "en" ? "Why MCP?" : "Por que MCP?"}
              </h3>
              <p>{language === "en" ? "MCP helps you build agents and complex workflows over LLMs by providing:" : "MCP te ayuda a construir agentes y flujos de trabajo complejos sobre LLMs al proporcionar:"}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{language === "en" ? "A growing list of pre-built integrations your LLM can use directly" : "Una lista creciente de integraciones preconstruidas que tu LLM puede usar directamente"}</li>
                <li>{language === "en" ? "Flexibility to switch between different LLM providers and platforms" : "Flexibilidad para cambiar entre distintos proveedores y plataformas de LLM"}</li>
                <li>{language === "en" ? "Best practices to protect your data within your own infrastructure" : "Buenas practicas para proteger tus datos dentro de tu propia infraestructura"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                {language === "en" ? "Core Architecture" : "Arquitectura Central"}
              </h3>
              <p>{language === "en" ? "MCP follows a client-server architecture, where a host application can connect to multiple servers." : "MCP sigue una arquitectura cliente-servidor, donde una aplicacion host puede conectarse a multiples servidores."}</p>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-4">
                <h4 className="font-semibold text-white mb-3">{language === "en" ? "Components:" : "Componentes:"}</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-[#35D07F]">MCP Hosts:</strong> {language === "en" ? "Programs like Claude Desktop, IDEs, or AI tools that access data through MCP" : "Programas como Claude Desktop, IDEs o herramientas de IA que acceden a datos mediante MCP"}</li>
                  <li><strong className="text-[#35D07F]">MCP Clients:</strong> {language === "en" ? "Protocol clients that maintain 1:1 connections with servers" : "Clientes de protocolo que mantienen conexiones 1:1 con los servidores"}</li>
                  <li><strong className="text-[#35D07F]">MCP Servers:</strong> {language === "en" ? "Lightweight programs that expose specific capabilities through the standard MCP protocol" : "Programas ligeros que exponen capacidades especificas mediante el protocolo estandar MCP"}</li>
                  <li><strong className="text-[#35D07F]">{language === "en" ? "Local Data Sources:" : "Fuentes de datos locales:"}</strong> {language === "en" ? "Files, databases, and services on your computer that MCP servers can securely access" : "Archivos, bases de datos y servicios de tu computadora a los que los servidores MCP pueden acceder de forma segura"}</li>
                  <li><strong className="text-[#35D07F]">{language === "en" ? "Remote Services:" : "Servicios remotos:"}</strong> {language === "en" ? "External systems available on the Internet (e.g., through APIs) that MCP servers can connect to" : "Sistemas externos disponibles en Internet (por ejemplo, a traves de APIs) a los que los servidores MCP pueden conectarse"}</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Celo MCP Server</h3>
              <p>
                {language === "en"
                  ? "The Celo MCP Server is a Model Context Protocol (MCP) server that provides full access to the Celo blockchain. This powerful tool allows AI assistants and development environments to interact directly with Celo blockchain data, execute token operations, manage NFTs, handle smart contract interactions, process transactions, and participate in governance operations."
                  : "El Celo MCP Server es un servidor del Model Context Protocol (MCP) que proporciona acceso completo a la blockchain de Celo. Esta potente herramienta permite que asistentes de inteligencia artificial y entornos de desarrollo interactuen directamente con los datos de la blockchain de Celo, ejecuten operaciones con tokens, gestionen NFTs, manejen interacciones con contratos inteligentes, procesen transacciones y participen en operaciones de gobernanza."
                }
              </p>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-6">
                <h4 className="font-semibold text-white mb-3">{language === "en" ? "Key Features" : "Caracteristicas principales"}</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>{language === "en" ? "Blockchain data access:" : "Acceso a datos de la blockchain:"}</strong> {language === "en" ? "Real-time access to blocks, transactions, and account information" : "Acceso en tiempo real a bloques, transacciones e informacion de cuentas"}</li>
                  <li>• <strong>{language === "en" ? "Token operations:" : "Operaciones con tokens:"}</strong> {language === "en" ? "Full support for ERC20 tokens and Celo stablecoins (cUSD, cEUR, cREAL)" : "Soporte completo para tokens ERC20 y stablecoins de Celo (cUSD, cEUR, cREAL)"}</li>
                  <li>• <strong>{language === "en" ? "NFT management:" : "Gestion de NFTs:"}</strong> {language === "en" ? "Compatible with ERC721 and ERC1155 standards, including metadata fetching" : "Compatibilidad con los estandares ERC721 y ERC1155, incluyendo obtencion de metadatos"}</li>
                  <li>• <strong>{language === "en" ? "Smart contract interaction:" : "Interaccion con contratos inteligentes:"}</strong> {language === "en" ? "Function calls, gas estimation, and ABI management" : "Llamadas a funciones, estimacion de gas y gestion de ABIs"}</li>
                  <li>• <strong>{language === "en" ? "Transaction management:" : "Gestion de transacciones:"}</strong> {language === "en" ? "Gas estimation, EIP-1559 support, and transaction simulation" : "Estimacion de gas, soporte para EIP-1559 y simulacion de transacciones"}</li>
                  <li>• <strong>{language === "en" ? "Governance operations:" : "Operaciones de gobernanza:"}</strong> {language === "en" ? "Access to Celo governance proposals and voting data" : "Acceso a propuestas de gobernanza de Celo y datos de votacion"}</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-6">
                <h4 className="font-semibold text-white mb-3">{language === "en" ? "Prerequisites" : "Requisitos previos"}</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Python 3.11 {language === "en" ? "or higher" : "o superior"}</li>
                  <li>• Git v2.38 {language === "en" ? "or higher" : "o superior"}</li>
                  <li>• {language === "en" ? "An MCP-compatible IDE (e.g., Cursor or Claude Desktop)" : "Un IDE compatible con MCP (por ejemplo, Cursor o Claude Desktop)"}</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Composer Kit MCP Server</h3>
              <p>
                {language === "en"
                  ? "The Composer Kit MCP Server is a Model Context Protocol (MCP) server that provides full access to the documentation, examples, and usage guides for Composer Kit UI components. This powerful tool allows AI assistants and development environments to access the complete library of Composer Kit React components, designed to build web3 applications on the Celo blockchain."
                  : "El Composer Kit MCP Server es un servidor del Model Context Protocol (MCP) que proporciona acceso completo a la documentacion, ejemplos y guias de uso de los componentes de interfaz de usuario (UI components) de Composer Kit. Esta potente herramienta permite que asistentes de inteligencia artificial y entornos de desarrollo accedan a la biblioteca completa de componentes React de Composer Kit, disenada para construir aplicaciones web3 sobre la blockchain de Celo."
                }
              </p>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-6">
                <h4 className="font-semibold text-white mb-3">{language === "en" ? "Key Features" : "Caracteristicas principales"}</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>{language === "en" ? "Component library access:" : "Acceso a la biblioteca de componentes:"}</strong> {language === "en" ? "Complete documentation for all Composer Kit UI components" : "Documentacion completa de todos los componentes UI de Composer Kit"}</li>
                  <li>• <strong>{language === "en" ? "Code examples:" : "Ejemplos de codigo:"}</strong> {language === "en" ? "Ready-to-use code snippets and implementation patterns" : "Fragmentos de codigo listos para usar y patrones de implementacion"}</li>
                  <li>• <strong>{language === "en" ? "Semantic search:" : "Busqueda semantica:"}</strong> {language === "en" ? "Find components by functionality or use case" : "Encuentra componentes por funcionalidad o caso de uso"}</li>
                  <li>• <strong>{language === "en" ? "Celo Composer integration:" : "Integracion con Celo Composer:"}</strong> {language === "en" ? "Guides for template management and project creation" : "Guias para gestion de plantillas y creacion de proyectos"}</li>
                  <li>• <strong>{language === "en" ? "Step-by-step guides:" : "Guias paso a paso:"}</strong> {language === "en" ? "Complete tutorials for development and deployment" : "Tutoriales completos para desarrollo y despliegue"}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Vibe Coding */}
          <section id="vibe-coding" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">🎨</span>
              {language === "en" ? "Vibe Coding on Celo" : "Vibe Coding en Celo"}
            </h2>
            <div className="space-y-6 text-white/75 leading-relaxed">
              <p className="text-lg">
                {language === "en"
                  ? "Learn how to build an app on Celo (updated for Celo Sepolia Testnet) and deploy to Vercel."
                  : "Aprende como construir una app en Celo (actualizada para Celo Sepolia Testnet) y desplegarla en Vercel."
                }
              </p>

              <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <iframe
                  src="https://www.youtube.com/embed/T8817Rdtsdg"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Configuration" : "Configuracion"}</h3>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>{language === "en" ? "Go to Celo Docs -> Celo MCP and install the MCP Server in Cursor following the instructions" : "Ir a Celo Docs -> Celo MCP e instalar el MCP Server dentro de Cursor siguiendo las instrucciones"}</li>
                <li>{language === "en" ? "Use Claude-4-Sonnet inside Cursor" : "Usar Claude-4-Sonnet dentro de Cursor"}</li>
                <li>{language === "en" ? "Add Celo Sepolia Testnet network (replaces Alfajores) in MetaMask" : "Agregar la red Celo Sepolia Testnet (reemplaza a Alfajores) en MetaMask"}</li>
                <li>{language === "en" ? "Get test tokens from the faucets" : "Conseguir tokens de prueba en los faucets"}</li>
              </ol>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-6 font-mono text-sm">
                <p className="text-white/50 mb-2">{language === "en" ? "// Celo Sepolia Network Config" : "// Config Red Celo Sepolia"}</p>
                <p><span className="text-[#35D07F]">Network Name:</span> Celo Sepolia Testnet</p>
                <p><span className="text-[#35D07F]">New RPC URL:</span> https://rpc.ankr.com/celo_sepolia</p>
                <p><span className="text-[#35D07F]">Chain ID:</span> 11142220</p>
                <p><span className="text-[#35D07F]">Currency Symbol:</span> CELO</p>
                <p><span className="text-[#35D07F]">Block Explorer URL:</span> https://celo-sepolia.blockscout.com</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mt-4">
                <p className="text-yellow-400 text-sm">
                  <strong>{language === "en" ? "Note:" : "Nota:"}</strong> {language === "en" ? "This testnet starts from a clean state, so you'll need to redeploy your contracts and update configurations." : "Esta testnet parte de un estado limpio, por lo tanto tendras que volver a desplegar tus contratos y actualizar las configuraciones."}
                </p>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Prompts (keep in English)" : "Prompts (dejar en ingles)"}</h3>
              
              <h4 className="font-semibold text-white mt-6 mb-3">Prompt 1: Build ERC-20 minting app</h4>
              <CodeBlock 
                language="prompt"
                code={`Create app in Cursor to allow users to mint an ERC20

Build a Celo dApp using the Celo Composer starter and the Composer UI Kit component library.

The app let users to connect their wallet address and lets them claim 10 tokens. The user can only claim the 10 tokens once if that wallet address has never claimed tokens before.

The app should use Hardhat for smart contract development, deploy an example ERC20 contract on Celo Sepolia, and include a simple front end that connects a wallet and lets users mint 10 token and view their token balance.

Use @celo/react-components (Composer Kit) to design the UI. Make sure the UI is mobile-friendly.

Use the following layout:
- A ConnectWallet button using Composer Kit
- An input to specify that they want to mint one token
- A button to mint the token (calls contract function)
- A display of current token balance

Integrate everything using Wagmi (for React hooks), Viem (for client), and Hardhat for contracts.

Make the folder structure compatible with the Celo Composer layout.`}
              />
              
              <div className="bg-white/5 rounded-xl p-4 mt-4 border border-white/10">
                <p className="text-sm text-white/70"><strong>Use Cases:</strong> Faucet dApp, Reward / Reputation System, Game or Loyalty Points, Token Airdrop / Claim Portal</p>
              </div>

              <h4 className="font-semibold text-white mt-8 mb-3">Prompt 2: Add Self Protocol for human verification</h4>
              <p className="text-sm text-white/60 mb-3">{language === "en" ? "Add Self Protocol docs to Cursor context by clicking @ -> Docs -> Add new doc -> then pasting the link to the documentation." : "Agrega la documentacion de Self Protocol al contexto de Cursor haciendo clic en @ -> Docs -> Add new doc -> y pegando el link a la documentacion."}</p>
              <CodeBlock 
                language="prompt"
                code={`I want to use Self Protocol so that the user has to prove they are human before they can claim the token.

Frontend Requirements:
- Replace existing claim button with "Verify Humanity to Claim 10 Tokens"
- Follow the Self documentation quickstart guide to implement QRCodeGenerator react component
- CRITICAL: Use default import for QRCodeGenerator: import QRCodeGenerator from '@selfxyz/qrcode';
- CRITICAL: Use shorter scope name (max 10 characters) like 'my-app' to avoid BigInt size errors
- CRITICAL: Use shorter RPC endpoint like 'https://rpc.ankr.com/celo_sepolia'
- On button click, display Self Protocol QR code for verification request
- Poll for verification status or handle verification response
- Update button to "Claim 10 Tokens" once verification succeeds
- Update composer-kit identity UI component to show valid human checkmark on identity card

Backend Requirements:
- Implement Self Protocol backend SDK integration (following their quickstart pattern)
- CRITICAL: The verification logic should only require result.isValidDetails.isValidProof to be true, NOT result.isValid
- CRITICAL: Use direct 3-letter ISO country codes like "IRN" and "PRK" instead of countryCodes.IRN constants
- CRITICAL: Use the same shorter scope name as frontend (e.g., 'my-app') to ensure consistency
- CRITICAL: Use the same shorter RPC endpoint as frontend (e.g., 'https://rpc.ankr.com/celo_sepolia')
- Create endpoint to initiate verification request
- Create endpoint to verify submitted proofs
- Return verification status to frontend
- Ensure proof validation before allowing token claims

Expected Flow:
User clicks verify button → QR code displayed → User scans with Self app → Backend validates proof (only checking cryptographic validity) → UI updates to show verified status → User can claim tokens`}
              />

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Environment Variables" : "Variables de Entorno"}</h3>
              <p>{language === "en" ? "Once you successfully run the prompt, it's essential to review the .env.template and modify it with your environment variables:" : "Una vez que ejecutamos correctamente el prompt es fundamental revisar el .env.template y modificarlo con nuestras variables de entorno:"}</p>
              
              <div className="space-y-4 mt-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">1. MNEMONIC</h5>
                  <p className="text-sm">{language === "en" ? "Your seed phrase (12 or 24 words) that generates all your wallet addresses. Used to sign transactions or deploy contracts from Hardhat." : "Tu frase semilla (seed phrase) de 12 o 24 palabras que genera todas las direcciones de tu wallet. Se usa para firmar transacciones o desplegar contratos desde Hardhat."}</p>
                  <p className="text-yellow-400 text-sm mt-2">{language === "en" ? "Recommended: use a different wallet than your main wallet. Never upload it to GitHub!" : "Recomendable: usar una wallet diferente a tu wallet principal. Nunca la subas a GitHub!"}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">2. PRIVATE_KEY</h5>
                  <p className="text-sm">{language === "en" ? "The private key of the account from which you'll deploy contracts or sign transactions. In MetaMask: Click on your account -> Settings -> Security and Privacy -> Export Private Key." : "La clave privada (private key) de la cuenta desde la que vas a desplegar contratos o firmar transacciones. En MetaMask: Clic en tu cuenta -> Configuracion -> Seguridad y privacidad -> Exportar clave privada."}</p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">3. CELOSCAN_API_KEY</h5>
                  <p className="text-sm">{language === "en" ? "A CeloScan API key that allows you to automatically verify contracts on the explorer. Get it at:" : "Una clave de API de CeloScan que te permite verificar contratos automaticamente en el explorador. Obtenla en:"} <a href="https://celoscan.io/myapikey" target="_blank" rel="noopener noreferrer" className="text-[#35D07F] hover:underline">celoscan.io/myapikey</a></p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Deploy to Vercel (step by step for beginners)" : "Deploy a Vercel (paso a paso para principiantes)"}</h3>
              
              <h4 className="font-semibold text-white mt-6 mb-3">{language === "en" ? "0) Checklist before uploading" : "0) Checklist antes de subir"}</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{language === "en" ? "Run locally: npm run dev (or pnpm run dev) works" : "Corre local: npm run dev (o pnpm run dev) funciona"}</li>
                <li>{language === "en" ? "There's a build script in package.json" : "Hay script de build en package.json"}</li>
                <li>{language === "en" ? "Ignore secrets: in .gitignore add .env, .env.local, .env.*.local (never upload keys to repo)" : "Ignorar secretos: en .gitignore agrega .env, .env.local, .env.*.local (nunca subas claves al repo)"}</li>
              </ul>

              <h4 className="font-semibold text-white mt-6 mb-3">{language === "en" ? "1) Create the repo on GitHub" : "1) Crear el repo en GitHub"}</h4>
              <p>{language === "en" ? "Go to github.com -> New repository. Put a name (e.g., mi-dapp-celo), leave it empty (no README or .gitignore), and create it." : "Entra a github.com -> New repository. Pon un nombre (ej: mi-dapp-celo), dejalo vacio (sin README ni .gitignore), y crealo."}</p>

              <h4 className="font-semibold text-white mt-6 mb-3">{language === "en" ? "2) Upload the project to GitHub from Cursor" : "2) Subir el proyecto a GitHub desde Cursor"}</h4>
              <p className="mb-2"><strong>{language === "en" ? "Option A (Cursor GUI):" : "Opcion A (GUI de Cursor):"}</strong></p>
              <ol className="list-decimal list-inside space-y-1 ml-4 text-sm">
                <li>{language === "en" ? "Open your project in Cursor" : "Abri tu proyecto en Cursor"}</li>
                <li>{language === "en" ? "Open Source Control (branch icon)" : "Abri Source Control (icono de ramita)"}</li>
                <li>{language === "en" ? "Click Initialize Repository (if not already a repo)" : "Click en Initialize Repository (si aun no es repo)"}</li>
                <li>{language === "en" ? "Publish to GitHub -> log in -> choose account/org -> repo name -> Publish" : "Publish to GitHub -> logueate -> elegi la cuenta/org -> nombre del repo -> Publish"}</li>
              </ol>

              <p className="mb-2 mt-4"><strong>{language === "en" ? "Option B (Terminal):" : "Opcion B (Terminal):"}</strong></p>
              <CodeBlock 
                language="bash"
                code={`git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USER/mi-dapp-celo.git
git push -u origin main`}
              />

              <h4 className="font-semibold text-white mt-6 mb-3">{language === "en" ? "3) Configure environment variables in Vercel (security)" : "3) Configurar variables de entorno en Vercel (seguridad)"}</h4>
              <p>{language === "en" ? "Your secrets should not go in the repo. They are loaded in Vercel. Go to vercel.com, log in, click Add New -> Project -> Import the GitHub repo. In the import screen, at the bottom is Environment Variables - add your keys there." : "Tus secretos no deben ir al repo. Se cargan en Vercel. Anda a vercel.com, logueate, click Add New -> Project -> Import el repo de GitHub. En la pantalla de importacion, abajo esta Environment Variables - agrega tus claves ahi."}</p>

              <h4 className="font-semibold text-white mt-6 mb-3">{language === "en" ? "4) Import the repo in Vercel and deploy" : "4) Importar el repo en Vercel y desplegar"}</h4>
              <p>{language === "en" ? "Vercel usually auto-detects the framework (Next.js/Vite). Click Deploy, wait for the build to finish, and you'll get a URL like https://mi-dapp-celo.vercel.app" : "Vercel suele detectar el framework automaticamente (Next.js/Vite). Click Deploy, espera a que termine la build, y te da una URL tipo https://mi-dapp-celo.vercel.app"}</p>
            </div>
          </section>

          {/* Builders Funnel */}
          <section id="builders-funnel" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">📈</span>
              Celo Builders Funnel
            </h2>
            <div className="space-y-6 text-white/75 leading-relaxed">
              <p>
                {language === "en"
                  ? "The Celo Builders Funnel is a strategic guide designed by the Celo Foundation to structure how to attract, support, and scale projects within the ecosystem. Its purpose is to create a constant flow of new developers and startups that not only experiment with Celo but grow and become sustainable projects with funding, users, and real traction."
                  : "El Celo Builders Funnel es una guia estrategica disenada por la Celo Foundation para estructurar como atraer, acompanar y escalar proyectos dentro del ecosistema. Su proposito es crear un flujo constante de nuevos desarrolladores y startups que no solo experimenten con Celo, sino que crezcan y se conviertan en proyectos sostenibles con financiamiento, usuarios y traccion real."
                }
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gradient-to-br from-[#FCFF52]/10 to-transparent rounded-xl p-6 border border-[#FCFF52]/20">
                  <div className="text-2xl mb-3">🌱</div>
                  <h4 className="font-semibold text-white mb-2">1. Grow Awareness</h4>
                  <p className="text-sm">{language === "en" ? "Attract and onboard new builders and projects that start building on Celo" : "Atraer y onboardear nuevos builders y proyectos que comiencen a construir sobre Celo"}</p>
                </div>
                <div className="bg-gradient-to-br from-[#35D07F]/10 to-transparent rounded-xl p-6 border border-[#35D07F]/20">
                  <div className="text-2xl mb-3">🛠</div>
                  <h4 className="font-semibold text-white mb-2">2. Support Builders</h4>
                  <p className="text-sm">{language === "en" ? "Retain active builders and help their projects grow in users, features, and visibility" : "Retener a los builders activos y ayudar a que sus proyectos crezcan en usuarios, funcionalidades y visibilidad"}</p>
                </div>
                <div className="bg-gradient-to-br from-[#5EA33B]/10 to-transparent rounded-xl p-6 border border-[#5EA33B]/20">
                  <div className="text-2xl mb-3">🚀</div>
                  <h4 className="font-semibold text-white mb-2">3. Scale Projects</h4>
                  <p className="text-sm">{language === "en" ? "Connect the most solid projects with accelerators, funds, and strategic partners" : "Conectar los proyectos mas solidos con aceleradoras, fondos y partners estrategicos"}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Grow Awareness</h3>
              <p><strong>{language === "en" ? "Objective:" : "Objetivo:"}</strong> {language === "en" ? "Attract and onboard new builders and projects that start building on Celo. The focus is on visibility and first conversion: getting developers interested, registered, and deploying their first contract." : "Atraer y onboardear nuevos builders y proyectos que comiencen a construir sobre Celo. El foco esta en la visibilidad y la primera conversion: lograr que los desarrolladores se interesen, se registren y desplieguen su primer contrato."}</p>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h5 className="font-semibold text-white mb-2">{language === "en" ? "Main Touchpoints:" : "Principales Touchpoints:"}</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>{language === "en" ? "Tutorials and guides with concrete CTAs" : "Tutoriales y guias con llamadas a la accion concretas (CTA)"}</li>
                  <li>{language === "en" ? "Hackathons (online and IRL) oriented to integrate new projects" : "Hackathons (online e IRL) orientadas a integrar nuevos proyectos"}</li>
                  <li>{language === "en" ? "Buildathons and code jams where teams learn by doing" : "Buildathons y code jams donde los equipos aprenden haciendo"}</li>
                  <li>{language === "en" ? "Developer events and workshops" : "Eventos y workshops para developers"}</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h5 className="font-semibold text-white mb-2">{language === "en" ? "KPIs to measure:" : "KPIs a medir:"}</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>{language === "en" ? "Number of builder contacts collected (through Lemonade Social or forms)" : "Numero de builder contacts recolectados (a traves de Lemonade Social o formularios)"}</li>
                  <li>{language === "en" ? "Number of open source repositories on GitHub with Celo code" : "Numero de repositorios open source en GitHub con codigo sobre Celo"}</li>
                  <li>{language === "en" ? "Number of smart contracts deployed on Celo network" : "Numero de contratos inteligentes desplegados en la red Celo"}</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Support Builders</h3>
              <p><strong>{language === "en" ? "Objective:" : "Objetivo:"}</strong> {language === "en" ? "Retain active builders and help their projects grow in users, features, and visibility. The focus is converting occasional builders into active, sustainable projects within the ecosystem." : "Retener a los builders activos y ayudar a que sus proyectos crezcan en usuarios, funcionalidades y visibilidad. El foco es convertir builders eventuales en proyectos activos y sostenibles dentro del ecosistema."}</p>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h5 className="font-semibold text-white mb-2">{language === "en" ? "Main Touchpoints:" : "Principales Touchpoints:"}</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Proof-of-Ship:</strong> {language === "en" ? "Monthly rewards program for developers with constant activity and deployments" : "Programa mensual de recompensas para desarrolladores con actividad y despliegues constantes"}</li>
                  <li><strong>CeloPG:</strong> {language === "en" ? "Governance platform for retroactive and quadratic funding" : "Plataforma de gobernanza para retroactive y quadratic funding"}</li>
                  <li><strong>{language === "en" ? "Regional incubators:" : "Incubadoras regionales:"}</strong> CeLatam, Celo Africa DAO</li>
                  <li><strong>Celo Camp:</strong> {language === "en" ? "Global accelerator program for growth-stage projects" : "Programa acelerador global para proyectos en etapa de crecimiento"}</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Scale Projects</h3>
              <p><strong>{language === "en" ? "Objective:" : "Objetivo:"}</strong> {language === "en" ? "Identify the most solid projects and connect them with accelerators, funds, and strategic partners to scale their impact and funding." : "Identificar los proyectos mas solidos y conectarlos con aceleradoras, fondos y partners estrategicos para escalar su impacto y financiamiento."}</p>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h5 className="font-semibold text-white mb-2">{language === "en" ? "Main Touchpoints:" : "Principales Touchpoints:"}</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Prezenti Grants:</strong> {language === "en" ? "Funding program for outstanding projects" : "Programa de financiamiento para proyectos destacados"}</li>
                  <li><strong>Celo Camp Accelerator:</strong> {language === "en" ? "Especially Batch 10 - Build for MiniPay" : "Especialmente el Batch 10 - Build for MiniPay"}</li>
                  <li><strong>Verda Ventures:</strong> {language === "en" ? "Fund oriented to projects with market potential" : "Fondo orientado a proyectos con potencial de mercado"}</li>
                  <li><strong>CxAI, Celo Bloom:</strong> {language === "en" ? "Programs supporting TGEs (Token Generation Events)" : "Programas de soporte a TGEs (Token Generation Events)"}</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mt-6">
                <h5 className="font-semibold text-red-400 mb-2">{language === "en" ? "What is NOT part of the funnel:" : "Que NO es parte del funnel:"}</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-300">
                  <li>{language === "en" ? "Organizing hackathons or events not aligned with Celo or that don't generate active builders" : "Organizar hackathons o eventos que no esten alineados a Celo o que no generen builders activos"}</li>
                  <li>{language === "en" ? "Working independently without reporting data, metrics, or impact tracking" : "Trabajar de manera independiente sin reportar datos, metricas ni seguimiento de impacto"}</li>
                  <li>{language === "en" ? "Promoting activities without including Celo's strategic programs, tools, or verticals" : "Promocionar actividades sin incluir los programas, herramientas o verticales estrategicos de Celo"}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Proof of Ship */}
          <section id="proof-of-ship" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">⛵</span>
              Celo Proof of Ship
            </h2>
            <div className="space-y-6 text-white/75 leading-relaxed">
              <p className="text-lg">
                {language === "en"
                  ? "Monthly rewards program for active builders on Celo"
                  : "Programa de recompensas mensuales para builders activos en Celo"
                }
              </p>
              <p>
                {language === "en"
                  ? "Proof-of-Ship is a monthly contest that rewards developers who actively build on Celo. Prizes are automatically calculated from the project profile's impact metrics on Karma GAP, and can be claimed each month from the platform."
                  : "Proof-of-Ship es un concurso mensual que recompensa a los desarrolladores que construyen activamente en Celo. Los premios se calculan automaticamente a partir de las metricas de impacto del perfil del proyecto en Karma GAP, y pueden reclamarse cada mes desde la plataforma."
                }
              </p>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-4">{language === "en" ? "Prerequisites" : "Requisitos previos"}</h4>
                <ul className="space-y-2 text-sm">
                  <li>• {language === "en" ? "A Celo-compatible wallet (Rabby, Rainbow, or MetaMask)" : "Una wallet compatible con Celo (Rabby, Rainbow o MetaMask)"}</li>
                  <li>• {language === "en" ? "CELO tokens to pay for transactions" : "Tokens CELO para pagar las transacciones"}</li>
                  <li>• {language === "en" ? "If you don't have tokens, Karma platform will sponsor your first 5 transactions" : "Si no tenes tokens, la plataforma Karma patrocinara tus primeras 5 transacciones"}</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Step by Step Guide" : "Guia Paso a Paso"}</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Step 1: Create your project profile" : "Paso 1: Crear tu perfil de proyecto"}</h5>
                  <p className="text-sm">{language === "en" ? "Access Karma GAP and add your project to the Celo Proof of Ship program. This profile is onchain and only created once. You can use it later to apply to future funding rounds or programs." : "Accede a Karma GAP y agrega tu proyecto al programa Celo Proof of Ship. Este perfil es onchain y solo se crea una vez. Podras usarlo mas adelante para aplicar a futuras rondas o programas de financiamiento."}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Step 1.1: Add your contact information" : "Paso 1.1: Agregar tu informacion de contacto"}</h5>
                  <p className="text-sm">{language === "en" ? "During the project creation or update flow, add your contact details. This allows organizers to communicate with you for important updates or announcements." : "Durante el flujo de creacion o actualizacion del proyecto, agrega tus datos de contacto. Esto permitira que los organizadores se comuniquen contigo para actualizaciones o anuncios importantes."}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Step 2: Submit your project to Proof of Ship" : "Paso 2: Enviar tu proyecto al programa Proof of Ship"}</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>{language === "en" ? "In your project profile, open the Grants tab" : "En el perfil de tu proyecto, abri la pestana Grants"}</li>
                    <li>{language === "en" ? "Click Add Funding -> Join Funding Program" : "Hace clic en Add Funding -> Join Funding Program"}</li>
                    <li>{language === "en" ? "Select Community: Celo, Program: Proof of Ship" : "Selecciona Comunidad: Celo, Programa: Proof of Ship"}</li>
                    <li>{language === "en" ? "Choose tracks you want to participate in (can be multiple)" : "Elige los tracks en los que queres participar (pueden ser varios)"}</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Step 3: Add technical information" : "Paso 3: Agregar informacion tecnica"}</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>{language === "en" ? "Links to your GitHub repositories" : "Enlaces a tus repositorios de GitHub"}</li>
                    <li>{language === "en" ? "Deployed contract addresses" : "Direcciones de contratos desplegados"}</li>
                    <li>{language === "en" ? "Payout address (where you'll receive rewards)" : "Payout address (direccion donde recibiras recompensas)"}</li>
                    <li>{language === "en" ? "Your Divvi Profile ID (if your project uses Divvi Protocol)" : "Tu Divvi Profile ID (si tu proyecto usa Divvi Protocol)"}</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Step 4: Update milestones" : "Paso 4: Actualizar milestones"}</h5>
                  <p className="text-sm">{language === "en" ? "As you progress, mark your milestones as completed. This helps demonstrate progress and keep your status updated within the program." : "A medida que avances, marca tus milestones como completados. Esto ayuda a demostrar progreso y mantener actualizado tu estado dentro del programa."}</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h5 className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Step 5: Final project submission" : "Paso 5: Envio final del proyecto"}</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>{language === "en" ? "Mark the grant as complete" : "Marca el grant como completo"}</li>
                    <li>{language === "en" ? "Upload visual resources (logo, screenshots, etc.)" : "Subi los recursos visuales (logo, capturas de pantalla, etc.)"}</li>
                    <li>{language === "en" ? "Add a short video (max 4 minutes) explaining your work" : "Agrega un video corto (max. 4 minutos) explicando tu trabajo"}</li>
                    <li>{language === "en" ? "Add a presentation (max 10 slides) summarizing the project" : "Agrega una presentacion (max. 10 diapositivas) que resuma el proyecto"}</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://gap.karma.global/celo/proof-of-ship"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#35D07F] text-black font-semibold hover:bg-[#35D07F]/90 transition-colors mt-4"
              >
                {language === "en" ? "Join Proof of Ship" : "Unirse a Proof of Ship"}
                <ExternalLink size={18} />
              </a>
            </div>
          </section>

          {/* Farcaster Mini App */}
          <section id="farcaster" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">🟣</span>
              {language === "en" ? "Mini App for Farcaster" : "Mini App para Farcaster"}
            </h2>
            <div className="space-y-6 text-white/75 leading-relaxed">
              <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <iframe
                  src="https://www.youtube.com/embed/I9ux9FXgVVw"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Tools Used</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>ChatGPT:</strong> {language === "en" ? "Design and generate prompt (meta-prompting)" : "Disenar y generar prompt (meta-prompting)"}</li>
                <li><strong>v0:</strong> {language === "en" ? "Create the front end" : "Crear el front end"}</li>
                <li><strong>Cursor:</strong> {language === "en" ? "Build the final app" : "Construir la app final"}</li>
                <li><strong>Farcaster:</strong> {language === "en" ? "Get users and receive feedback" : "Obtener users y recibir feedback"}</li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-4">
                <a href="https://miniapps.farcaster.xyz/docs/getting-started" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm">
                  Farcaster Miniapps Docs <ExternalLink size={14} />
                </a>
                <a href="https://farcaster.xyz/~/developers/mini-apps/manifest" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm">
                  Manifest Tool <ExternalLink size={14} />
                </a>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Prompts</h3>
              
              <h4 className="font-semibold text-white mt-6 mb-3">{language === "en" ? "Design app with ChatGPT:" : "Disenar app con ChatGPT:"}</h4>
              <p className="text-sm mb-3">{language === "en" ? "Paste the following prompt in ChatGPT, then paste the result in v0:" : "Pega el siguiente prompt en ChatGPT para luego pegar el resultado en v0:"}</p>
              <CodeBlock 
                language="prompt"
                code={`NOTE: make this mobile compatible and responsive.

I want you to create a lightweight environmental awareness quiz app. The quiz should be timed and only be 10 questions. At the end it will have a button that says "See Eco Score" and it will generate the user's environmental awareness score.

For the UI, use a clean UI that mirrors simple quiz apps. Don't include images in the questions.

After the quiz is completed, include a button that lets users see which answers they got wrong, which one is the right answer, and a short eco tip per question. Finally, explain how the Eco Score was calculated.

I want you to create a prompt for v0 with an in-depth explanation for what I want to build. No need to code the app, just create a detailed prompt.`}
              />

              <h4 className="font-semibold text-white mt-6 mb-3">{language === "en" ? "Creating Onchain Interactions:" : "Creando Interacciones Onchain:"}</h4>
              <p className="text-sm mb-3">{language === "en" ? "Open the Farcaster documentation and click 'Ask with ChatGPT' in the top right corner:" : "Abri la documentacion de Farcaster y hace clic en 'Ask with ChatGPT' en la esquina superior derecha:"}</p>
              <CodeBlock 
                language="prompt"
                code={`I want you to create a prompt to Cursor to explain how to set up a wagmi connector and add the React hook into my environmental awareness quiz app.

The desired goal is that once the user completes the test and hits "See Eco Score", it requires users to pay 0.1 CELO to my wallet to reveal their final score.

I want you to use the Farcaster SDK and it must be compatible with a Farcaster miniapp with a farcaster file.`}
              />

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Deploy your mini app on Farcaster" : "Deploy de tu mini app en Farcaster"}</h3>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>{language === "en" ? "Paste your prompt in Cursor and follow the steps until your app is ready to deploy" : "Pega tu prompt en Cursor y segui los pasos hasta tener tu app lista para desplegar"}</li>
                <li>{language === "en" ? "Prepare the domain with Vercel - upload your code to GitHub (Cursor can do this automatically)" : "Prepara el dominio con Vercel - subi tu codigo a GitHub (Cursor puede hacerlo automaticamente)"}</li>
                <li>{language === "en" ? "Connect Vercel with your repo and deploy" : "Conecta Vercel con tu repo y despliega"}</li>
                <li>{language === "en" ? "Configure the Farcaster Manifest - copy the domain and paste it in the Manifest miniapp tool" : "Configura el Manifest de Farcaster - copia ese dominio y pegalo en la tool de Manifest miniapp"}</li>
                <li>{language === "en" ? "Add icon and cover image (optional but recommended)" : "Agrega icono y portada (opcional pero recomendado)"}</li>
                <li>{language === "en" ? "Associate the app with your Farcaster account by scanning a QR with your phone" : "Asocia la app con tu cuenta de Farcaster escaneando un QR con tu celular"}</li>
              </ol>
            </div>
          </section>

          {/* MiniPay Mini App */}
          <section id="minipay" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">💚</span>
              {language === "en" ? "Mini App for MiniPay" : "Mini App para MiniPay"}
            </h2>
            <div className="space-y-6 text-white/75 leading-relaxed">
              <h3 className="text-xl font-semibold text-white mb-4">Tools Used</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>ChatGPT:</strong> {language === "en" ? "Design and generate prompt (meta-prompting)" : "Disenar y generar prompt (meta-prompting)"}</li>
                <li><strong>v0:</strong> {language === "en" ? "Create the front end" : "Crear el front end"}</li>
                <li><strong>MiniPay:</strong> {language === "en" ? "Connect wallet, Balance Display, onchain transfers, and user acquisition" : "Connect wallet, Balance Display, transferencias onchain y adquisicion de users"}</li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-4">
                <a href="https://docs.minipay.xyz/getting-started/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm">
                  MiniPay Docs <ExternalLink size={14} />
                </a>
                <a href="https://v0-mini-pay-coffee-app.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm">
                  Demo App <ExternalLink size={14} />
                </a>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "What are we building?" : "Que vamos a construir?"}</h3>
              <p>
                {language === "en"
                  ? "A platform to support creators with crypto, simply and directly. It works like a digital 'coffee' on blockchain: a community can buy a creator a coffee using USDC on Celo Sepolia Testnet through MiniPay. When making a donation, exclusive content is automatically unlocked for donors, creating a closer and more sustainable relationship between creators and their community."
                  : "Una plataforma para apoyar a creadores con cripto, de forma simple y directa. Funciona como un 'cafecito' digital sobre blockchain: una comunidad puede invitarle un cafe a un creador usando USDC en Celo Sepolia Testnet a traves de MiniPay. Al hacer una donacion, se desbloquea automaticamente contenido exclusivo para los donadores, creando una relacion mas cercana y sostenible entre creadores y su comunidad."
                }
              </p>

              <h4 className="font-semibold text-white mt-6 mb-3">Prompt for v0</h4>
              <CodeBlock 
                language="prompt"
                code={`Build a MiniPay Portfolio MiniApp for buying a creator a coffee using USDC on Celo Sepolia testnet.

Tech Stack:
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- wagmi v2 for Web3 interactions
- viem for blockchain utilities
- @tanstack/react-query for data fetching

Design Requirements:
- Dark theme with black background (#000) and zinc accents
- Space Grotesk font for headings
- Mobile-first responsive design
- Clean, minimal UI with rounded corners

Core Features:

1. Wallet Connection (MiniPay Detection)
- Auto-detect MiniPay wallet using window.ethereum?.isMiniPay
- Auto-connect when MiniPay is detected
- Display wallet address truncated (0x1234...5678)
- Show "Connected via MiniPay" badge when connected

2. USDC Balance Display
- Show connected wallet's USDC balance above the connection status
- USDC contract address on Celo Sepolia: 0x01C5C0122039549AD1493B8220cABEdD739BC44E
- Format balance with 6 decimals (USDC standard)

3. Creator Profile Card
- Creator avatar image (circular with border)
- Creator name and Twitter/X handle with link
- Role/title description
- Short bio text

4. Buy Coffee Button
- Send 0.01 USDC to creator's wallet address
- Amount: 10000 (0.01 USDC with 6 decimals)
- Show "Confirm in wallet..." while waiting
- Show success message with coffee emoji animation after transaction

5. Exclusive Content (Donation-Gated Video)
- Check if connected wallet has previously donated
- If user has donated: show unlocked YouTube video embed
- If user has NOT donated: show blurred video with lock icon`}
              />

              <h4 className="font-semibold text-white mt-6 mb-3">Wagmi Configuration</h4>
              <CodeBlock 
                language="typescript"
                code={`import { createConfig, http } from "wagmi"
import { injected } from "wagmi/connectors"

const celoSepolia = {
  id: 11142220,
  name: "Celo Sepolia Testnet",
  nativeCurrency: { decimals: 18, name: "CELO", symbol: "CELO" },
  rpcUrls: {
    default: { http: ["https://forno.celo-sepolia.celo-testnet.org"] },
  },
  blockExplorers: {
    default: { name: "CeloScan", url: "https://sepolia.celoscan.io" },
  },
  testnet: true,
}

export const config = createConfig({
  chains: [celoSepolia],
  connectors: [injected()],
  transports: {
    [celoSepolia.id]: http("https://forno.celo-sepolia.celo-testnet.org"),
  },
})`}
              />

              <h4 className="font-semibold text-white mt-6 mb-3">Contract Constants</h4>
              <CodeBlock 
                language="typescript"
                code={`export const USDC_ADDRESS = "0x01C5C0122039549AD1493B8220cABEdD739BC44E"
export const CELO_SEPOLIA_CHAIN_ID = 11142220
export const CREATOR_ADDRESS = "YOUR_WALLET_ADDRESS_HERE"`}
              />

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mt-6">
                <h5 className="font-semibold text-yellow-400 mb-2">{language === "en" ? "Critical Implementation Notes" : "Notas Criticas de Implementacion"}</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-300">
                  <li><strong>Chain ID:</strong> Celo Sepolia chain ID is 11142220, NOT 44787 or 84532</li>
                  <li><strong>RPC URL:</strong> Must use https://forno.celo-sepolia.celo-testnet.org</li>
                  <li><strong>USDC Decimals:</strong> USDC uses 6 decimals, so 0.01 USDC = 10000 in raw units</li>
                  <li><strong>MiniPay Quirks:</strong> wagmi&apos;s useAccount may return isConnected: false even when connected - always implement fallback</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "What MiniPay looks for in official MiniApps (DO's)" : "Que buscan en las MiniApps oficiales de MiniPay (DO's)"}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-[#35D07F]">
                <li>{language === "en" ? "Simple and clear flow - easy to understand and use from the first moment" : "Flujo simple y claro - facil de entender y usar desde el primer momento"}</li>
                <li>{language === "en" ? "Recommended use cases: Games, X-to-earn models, gift cards, service payments, practical utilities" : "Casos de uso recomendados: Juegos, modelos X-to-earn, gift cards, pagos de servicios, utilidades practicas"}</li>
                <li>{language === "en" ? "Mobile-first design" : "Diseno mobile-first"}</li>
                <li>{language === "en" ? "RWA (Real World Assets) - use cases connected with the real world" : "RWA (Real World Assets) - casos de uso conectados con el mundo real"}</li>
                <li>{language === "en" ? "Exclusive use of stablecoins: only cUSD, USDT, and USDC" : "Uso exclusivo de stablecoins: solo cUSD, USDT y USDC"}</li>
                <li>{language === "en" ? "Incentive mechanisms: daily rewards, rankings, leaderboards, achievements" : "Mecanismos de incentivo: recompensas diarias, rankings, leaderboards, logros"}</li>
                <li>{language === "en" ? "Own visual identity - develop your own visual theme" : "Identidad visual propia - desarrollar un tema visual propio"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "What MiniPay does NOT look for (DON'Ts)" : "Que NO buscan en las MiniApps (DON'Ts)"}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-red-400">
                <li>{language === "en" ? "DeFi applications - require too much regulatory work" : "Aplicaciones DeFi - requieren mucho trabajo regulatorio"}</li>
                <li>{language === "en" ? "Complex flows - experience must be simple and direct" : "Flujos complejos - la experiencia debe ser simple y directa"}</li>
                <li>{language === "en" ? "Landing pages - no MiniApps that are just informational pages" : "Landing pages - no quieren MiniApps que sean solo paginas informativas"}</li>
                <li>{language === "en" ? "Using other tokens - only the mentioned stablecoins" : "Usar otros tokens - solo las stablecoins mencionadas"}</li>
                <li>{language === "en" ? "Generic AI-style design - avoid standard, boring layouts" : "Diseno generico estilo IA - evitar layouts estandar y aburridos"}</li>
                <li>{language === "en" ? "Gambling or randomization - no chance mechanics allowed" : "Gambling o randomizacion - no se permiten mecanicas de azar"}</li>
              </ul>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdLy4HNe7ZMYeh951CboDHdhAfapPh5rJDI3SYGAvob63goSw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#35D07F] text-black font-semibold hover:bg-[#35D07F]/90 transition-colors mt-6"
              >
                {language === "en" ? "Submit your MiniApp to MiniPay" : "Envia tu MiniApp a MiniPay"}
                <ExternalLink size={18} />
              </a>
            </div>
          </section>

          {/* Latam Buildathon */}
          <section id="buildathon" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              Latam Buildathon 2026
            </h2>
            <div className="space-y-6 text-white/75 leading-relaxed">
              <p>
                {language === "en"
                  ? "A hackathon for Latin American builders (developers, designers, founders, PMs) where the goal is to build and launch a real product in a few weeks, with mentoring, feedback, and visibility."
                  : "Una hackathon para builders de Latinoamerica (developers, designers, founders, PMs) donde el objetivo es construir y lanzar un producto real en pocas semanas, con mentoring, feedback y visibilidad."
                }
              </p>

              <a
                href="https://latamhubs.lat/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm"
              >
                latamhubs.lat <ExternalLink size={14} />
              </a>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Key Dates" : "Fechas clave"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <p className="text-[#35D07F] font-semibold mb-1">{language === "en" ? "Pre-registration" : "Pre-registro"}</p>
                  <p className="text-sm">18 dic 2025 - 16 ene 2026</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <p className="text-[#35D07F] font-semibold mb-1">Buildathon</p>
                  <p className="text-sm">19 ene - 27 feb 2026</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <p className="text-[#35D07F] font-semibold mb-1">{language === "en" ? "Winners announced" : "Anuncio de ganadores"}</p>
                  <p className="text-sm">6 mar 2026</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Objective" : "Objetivo"}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{language === "en" ? "Go from idea to deployed demo" : "Pasar de idea a demo deployado"}</li>
                <li>{language === "en" ? "Build in public" : "Construir en publico"}</li>
                <li>{language === "en" ? "Receive feedback from mentors and judges" : "Recibir feedback de mentores y jueces"}</li>
                <li>{language === "en" ? "Connect with builders from all of LATAM" : "Conectar con builders de toda LATAM"}</li>
                <li>{language === "en" ? "Gain visibility within the ecosystem" : "Ganar visibilidad dentro del ecosistema"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "What you need to deliver" : "Que tenes que entregar"}</h3>
              <p>{language === "en" ? "A link to your project on Karma Gap, which must include:" : "Un link a tu proyecto en Karma Gap, que debe incluir:"}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>{language === "en" ? "GitHub Repository" : "Repositorio GitHub"}</li>
                <li>{language === "en" ? "Deployed demo (on Celo Mainnet)" : "Demo deployada (en Celo Mainnet)"}</li>
                <li>Video demo</li>
                <li>{language === "en" ? "Presentation (deck)" : "Presentacion (deck)"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Main Rules" : "Reglas principales"}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{language === "en" ? "The project must be deployed on Celo Mainnet" : "El proyecto debe estar deployado en Celo Mainnet"}</li>
                <li>{language === "en" ? "The GitHub repo must be empty before 01/19/2026 (only README, LICENSE, and .gitignore allowed)" : "El repo de GitHub debe estar vacio antes del 19/01/2026 (solo README, LICENSE y .gitignore permitidos)"}</li>
                <li>{language === "en" ? "The demo must be public and accessible online" : "La demo debe ser publica y accesible online"}</li>
                <li>{language === "en" ? "Submission is done via form with link to Karma Gap" : "La entrega se hace via formulario con link a Karma Gap"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Available Tracks" : "Tracks disponibles"}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-[#FCFF52]/10 to-transparent rounded-xl p-4 border border-[#FCFF52]/20">
                  <p className="font-semibold text-white">Open Track ({language === "en" ? "recommended" : "recomendado"})</p>
                  <p className="text-sm mt-1">{language === "en" ? "Total freedom to build any idea" : "Libertad total para construir cualquier idea"}</p>
                </div>
                <div className="bg-gradient-to-br from-[#35D07F]/10 to-transparent rounded-xl p-4 border border-[#35D07F]/20">
                  <p className="font-semibold text-white">MiniApps (Farcaster / MiniPay)</p>
                  <p className="text-sm mt-1">{language === "en" ? "Create and launch a MiniApp" : "Crear y lanzar una MiniApp"}</p>
                </div>
                <div className="bg-gradient-to-br from-[#5EA33B]/10 to-transparent rounded-xl p-4 border border-[#5EA33B]/20">
                  <p className="font-semibold text-white">Human.Tech</p>
                  <p className="text-sm mt-1">{language === "en" ? "Use the Human.Tech stack (WaaP / Human Passport)" : "Usar el stack de Human.Tech (WaaP / Human Passport)"}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Who can participate" : "Quienes pueden participar"}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{language === "en" ? "Builders from LATAM (living in LATAM)" : "Builders de LATAM (vivir en LATAM)"}</li>
                <li>{language === "en" ? "You can participate solo or in a team" : "Podes participar solo o en equipo"}</li>
                <li>{language === "en" ? "Teams must have at least 50% LATAM members" : "Los equipos deben tener al menos 50% de miembros de LATAM"}</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">{language === "en" ? "Evaluation Criteria" : "Criterios de evaluacion"}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{language === "en" ? "Project impact" : "Impacto del proyecto"}</li>
                <li>{language === "en" ? "Quality of execution" : "Calidad de ejecucion"}</li>
                <li>{language === "en" ? "Demo clarity" : "Claridad del demo"}</li>
                <li>{language === "en" ? "Product level and craft" : "Nivel de producto y craft"}</li>
                <li>{language === "en" ? "Bonus for shipping end-to-end and good narrative" : "Bonus por shipping end-to-end y buena narrativa"}</li>
              </ul>

              <div className="bg-[#35D07F]/10 border border-[#35D07F]/30 rounded-xl p-4 mt-6">
                <h5 className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Conditions to participate in the v0 track" : "Condiciones para participar del track de v0"}</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>{language === "en" ? "Your project must have 'Show v0 branding' activated, displaying the v0 badge on your deployed site's frontend" : "Tu proyecto debe tener activado el 'Show v0 branding', mostrando el badge de v0 en el frontend de tu sitio deployado en Vercel"}</li>
                  <li>{language === "en" ? "Your project must be published as a public template in the official v0 directory" : "Tu proyecto debe estar publicado como public template en el directorio oficial de v0"}: <a href="https://v0.app/templates" target="_blank" rel="noopener noreferrer" className="text-[#35D07F] hover:underline">v0.app/templates</a></li>
                </ul>
                <p className="text-sm mt-2 text-white/60">{language === "en" ? "This way we encourage open source, template reuse, and collective learning within the builder community." : "De esta forma fomentamos el open source, la reutilizacion de templates y el aprendizaje colectivo dentro de la comunidad builder."}</p>
              </div>
            </div>
          </section>

          {/* MiniPlay Success Case */}
          <section id="miniplay" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              {language === "en" ? "Success Case: MiniPlay" : "Caso de Exito: MiniPlay"}
            </h2>
            <div className="space-y-6 text-white/75 leading-relaxed">
              <div className="bg-gradient-to-r from-[#35D07F]/10 to-[#FCFF52]/10 rounded-xl p-6 border border-[#35D07F]/30">
                <p className="text-lg font-semibold text-white mb-2">
                  {language === "en" ? "A pioneering experiment in AI-assisted development, solo entrepreneurship, and rapid iteration at scale." : "Un experimento pionero en desarrollo asistido por IA, emprendimiento en solitario y iteracion rapida a escala."}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#35D07F]">146K+</p>
                    <p className="text-sm text-white/60">{language === "en" ? "users" : "usuarios"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#35D07F]">4.2M+</p>
                    <p className="text-sm text-white/60">{language === "en" ? "games played" : "partidas jugadas"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#35D07F]">1</p>
                    <p className="text-sm text-white/60">{language === "en" ? "developer" : "desarrollador"}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#35D07F]">40+</p>
                    <p className="text-sm text-white/60">{language === "en" ? "days" : "dias"}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                {language === "en" ? "The Foundation" : "La Base"}
              </h3>
              <p>
                {language === "en"
                  ? "MiniPlay was not the first application. Not even close to the hundredth. After more than 15 years building fintech and impact products, I spent over a year leveraging AI and creating different - sometimes strange - applications, learning and accumulating knowledge with each experiment."
                  : "MiniPlay no fue la primera aplicacion. Ni siquiera fue la numero cien. Despues de mas de 15 anos construyendo productos fintech y de impacto, pase mas de un ano aprovechando la IA y creando diferentes - y a veces extranas - aplicaciones, aprendiendo y acumulando conocimiento con cada experimento."
                }
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-center">
                  <p className="text-lg font-bold text-white">15+</p>
                  <p className="text-xs text-white/60">{language === "en" ? "years in fintech" : "anos en fintech"}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">280+</p>
                  <p className="text-xs text-white/60">{language === "en" ? "apps in 2025" : "apps en 2025"}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">Top 0.1%</p>
                  <p className="text-xs text-white/60">{language === "en" ? "builders on Replit" : "builders en Replit"}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-white">8</p>
                  <p className="text-xs text-white/60">{language === "en" ? "days to launch" : "dias al lanzamiento"}</p>
                </div>
              </div>
              <p className="text-sm text-white/60">
                {language === "en"
                  ? "On December 10, 2025 the concept of MiniPlay was born. By December 18 it was live on MiniPay. This speed is achieved when the number of experiments is reduced and quality distribution is focused, channeling everything learned in more than 280 tests into a single ambitious project."
                  : "El 10 de diciembre de 2025 nacio el concepto de MiniPlay. El 18 de diciembre ya estaba en vivo en MiniPay. Esta velocidad se logra cuando se reduce la cantidad de experimentos y se enfoca la calidad de distribucion, canalizando todo lo aprendido en mas de 280 pruebas hacia un solo proyecto ambicioso."
                }
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                {language === "en" ? "What Was at Stake" : "Lo Que Estaba en Juego"}
              </h3>
              <p className="font-semibold text-white/90">
                {language === "en" ? "No team. No funding. No safety net." : "Sin equipo. Sin financiamiento. Sin red de seguridad."}
              </p>
              <p>
                {language === "en"
                  ? "After more than 15 years building startups, this was not just another project. It was a personal question: Can I really build something that scales?"
                  : "Despues de mas de 15 anos construyendo startups, esto no era solo otro proyecto. Era una pregunta personal: Realmente puedo construir algo que escale?"
                }
              </p>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="font-semibold text-white mb-3">{language === "en" ? "MiniPlay was different. I bet everything:" : "MiniPlay fue diferente. Aposte todo:"}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <li>• 25+ {language === "en" ? "cognitive games (brain games)" : "juegos cognitivos (brain games)"}</li>
                  <li>• {language === "en" ? "Blockchain payments" : "Pagos blockchain"}</li>
                  <li>• {language === "en" ? "Achievements system" : "Sistema de logros"}</li>
                  <li>• {language === "en" ? "Daily quests" : "Misiones diarias"}</li>
                  <li>• {language === "en" ? "XP economy" : "Economia de XP"}</li>
                  <li>• {language === "en" ? "All built solo" : "Todo construido en solitario"}</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                {language === "en" ? "The Journey" : "El Camino"}
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Week 1 - December 10-18: 8 days to launch" : "Semana 1 - 10 al 18 de diciembre: 8 dias hasta el lanzamiento"}</p>
                  <p className="text-sm">{language === "en" ? "December 10: just an idea. December 18: live on MiniPay with 25+ games, XP economy, achievements, and blockchain check-ins." : "10 de diciembre: solo una idea. 18 de diciembre: en vivo en MiniPay con 25+ juegos, economia de XP, logros y check-ins en blockchain."}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Weeks 2-3: 0 to 100,000 users - The Explosion" : "Semanas 2-3: 0 a 100.000 usuarios - La Explosion"}</p>
                  <p className="text-sm">{language === "en" ? "Problems detected: on-chain sync failures, verification timeouts, pending payments, duplicate prize claims. Every assumption about scaling was tested. Late nights became the norm." : "Problemas detectados: sincronizacion on-chain fallando, timeouts de verificacion, pagos pendientes, reclamos de premios duplicados. Cada suposicion sobre escalar fue puesta a prueba. Las madrugadas se volvieron habituales."}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Weeks 4-5: 9 Layers - Trust Engineering" : "Semanas 4-5: 9 Capas - Ingenieria de Confianza"}</p>
                  <p className="text-sm">{language === "en" ? "The solution was not patches, but architecture: 9-layer duplicate prevention system, background scanners, atomic transactions, advisory locks, verification fallbacks, automated refunds." : "La solucion no fueron parches, sino arquitectura: sistema de prevencion de duplicados de 9 capas, scanners en background, transacciones atomicas, advisory locks, fallbacks de verificacion, reembolsos automatizados."}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-[#35D07F] mb-2">{language === "en" ? "Week 6: Brain Score - The CPI Bet" : "Semana 6: Brain Score - La Apuesta del CPI"}</p>
                  <p className="text-sm">{language === "en" ? "Safe path: just launch games. Real bet: measure cognitive growth. Diversity rewards, inactivity decay, learning curve analysis, multidimensional model (speed, memory, logic, focus, social)." : "Camino seguro: lanzar solo juegos. Apuesta real: medir crecimiento cognitivo. Recompensas por diversidad, decaimiento por inactividad, analisis de curvas de aprendizaje, modelo multidimensional (velocidad, memoria, logica, foco, social)."}</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                {language === "en" ? "Lessons Learned" : "Lecciones Aprendidas"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white mb-2">{language === "en" ? "Scaling Under Pressure" : "Escalar Bajo Presion"}</p>
                  <ul className="text-sm space-y-1">
                    <li>• {language === "en" ? "Database optimization" : "Optimizacion de base de datos"}</li>
                    <li>• Caching</li>
                    <li>• Rate limiting</li>
                    <li>• Graceful degradation</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white mb-2">{language === "en" ? "Community at Scale" : "Comunidad a Escala"}</p>
                  <ul className="text-sm space-y-1">
                    <li>• {language === "en" ? "Telegram management" : "Gestion de Telegram"}</li>
                    <li>• Bug reports</li>
                    <li>• Feature requests</li>
                    <li>• {language === "en" ? "Transparent communication" : "Comunicacion transparente"}</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white mb-2">{language === "en" ? "Production Security" : "Seguridad en Produccion"}</p>
                  <ul className="text-sm space-y-1">
                    <li>• Race conditions</li>
                    <li>• {language === "en" ? "Duplicate transactions" : "Transacciones duplicadas"}</li>
                    <li>• Exploits</li>
                    <li>• {language === "en" ? "9-layer protection system" : "Sistema de proteccion de 9 capas"}</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white mb-2">Unit Economics</p>
                  <ul className="text-sm space-y-1">
                    <li>• {language === "en" ? "Profitability per user/interaction" : "Rentabilidad por usuario/interaccion"}</li>
                    <li>• {language === "en" ? "Growth without sustainability is a countdown" : "Crecer sin sustentabilidad es una cuenta regresiva"}</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                {language === "en" ? "The Future: Multi-Agent Architecture" : "El Futuro: Arquitectura Multi-Agente"}
              </h3>
              <p>
                {language === "en"
                  ? "A single developer operating as a team of 20 people through AI agents:"
                  : "Un solo desarrollador operando como un equipo de 20 personas mediante agentes de IA:"
                }
              </p>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <ul className="space-y-2 text-sm">
                  <li>• <strong>{language === "en" ? "Support Agent:" : "Agente de soporte:"}</strong> {language === "en" ? "24/7 attention" : "atencion 24/7"}</li>
                  <li>• <strong>{language === "en" ? "QA Agent:" : "Agente de QA:"}</strong> {language === "en" ? "Automated testing" : "Testing automatico"}</li>
                  <li>• <strong>{language === "en" ? "Analytics Agent:" : "Agente de analitica:"}</strong> {language === "en" ? "Real-time metrics monitoring" : "Monitoreo de metricas en tiempo real"}</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#35D07F]/20 to-[#FCFF52]/20 rounded-xl p-6 border border-[#35D07F]/30 mt-6">
                <p className="text-center text-white/90">
                  {language === "en"
                    ? "MiniPlay proves that the model works. Built by one person with AI assistance. Validated by 146,000+ users. Evolving every day."
                    : "MiniPlay demuestra que el modelo funciona. Construido por una persona con asistencia de IA. Validado por 146.000+ usuarios. Evoluciona todos los dias."
                  }
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://miniplay.studio/innovation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#35D07F] hover:bg-[#2db86d] text-black font-semibold transition-all"
                  >
                    {language === "en" ? "Read Full Article" : "Leer Articulo Completo"}
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="text-2xl">💡</span>
              {language === "en" ? "Tips from Viral (AI Specialist at Celo)" : "Tips de Viral (AI Specialist en Celo)"}
            </h2>
            <div className="space-y-4 text-white/75 leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Importance of adding test cases in code (not as relevant for v0 apps)" : "Importancia de agregar test cases en el codigo (aunque no es tan relevante para apps hechas con v0)"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Use GPT-4.5 or Claude to generate the first v0 prompt (METAPROMPTING)" : "Usar GPT-4.5 o Claude para generar el primer prompt de v0 (METAPROMPTING)"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Explore the v0 templates directory for inspiration and reusable components:" : "Explorar el directorio de templates de v0 para inspiracion y componentes reutilizables:"} <a href="https://v0.app/templates/components" target="_blank" rel="noopener noreferrer" className="text-[#35D07F] hover:underline">v0.app/templates/components</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Best free Agent IDE: Antigravity" : "Mejor Agent IDE gratuito: Antigravity"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Best paid Agent IDE (2x better results): Claude Code" : "Mejor Agent IDE pago (resultados 2x mejores): Claude Code"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Use Nano Banana to generate graphic assets:" : "Usar Nano Banana para generar assets graficos:"} <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#35D07F] hover:underline">gemini.google.com</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Use Claude or ChatGPT to generate copy and landing page content" : "Usar Claude o ChatGPT para generar el copy y contenido de landing pages"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Start by taking design inspiration - my favorite is" : "Empezar tomando inspiracion de diseno - mi favorito es"} <a href="https://21st.dev" target="_blank" rel="noopener noreferrer" className="text-[#35D07F] hover:underline">21st.dev</a></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Other visual inspiration sources: Dribbble, Behance" : "Otras fuentes de inspiracion visual: Dribbble, Behance"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#35D07F]">•</span>
                  <span>{language === "en" ? "Good place to learn about new vibe coding tools:" : "Buen lugar para aprender sobre nuevas herramientas de vibe coding:"} <a href="https://www.reddit.com/r/vibecoding/" target="_blank" rel="noopener noreferrer" className="text-[#35D07F] hover:underline">r/vibecoding</a></span>
                </li>
              </ul>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
