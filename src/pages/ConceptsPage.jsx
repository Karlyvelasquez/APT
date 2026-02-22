import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Target, Users, Eye, Zap, Globe, Server, Lock, AlertTriangle, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Activity, Search, Database, Network } from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'

export default function ConceptsPage() {
  const navigate = useNavigate()
  const [expandedConcept, setExpandedConcept] = useState(null)

  const toggleConcept = (index) => {
    setExpandedConcept(expandedConcept === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <Shield className="h-10 w-10 text-primary-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gradient">Conceptos APT</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Fundamentos Teóricos</p>
                </div>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/presentation')}
                className="btn-secondary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </button>
              <button 
                onClick={() => navigate('/examples')}
                className="btn-secondary"
              >
                Siguiente: Ejemplos
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-6 py-3 rounded-full mb-8">
              <Target className="h-5 w-5" />
              <span className="font-medium">Conceptos Fundamentales</span>
            </div>
            
            <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
              Fundamentos Técnicos de las APT
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprende los conceptos esenciales, terminología técnica y marcos teóricos que definen las Advanced Persistent Threats
            </p>
          </div>
        </div>
      </section>

      {/* Definition Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
                Definición Técnica
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <strong>Advanced Persistent Threat (APT):</strong> Un conjunto de procesos informáticos sigilosos y continuos, 
                  orquestados por seres humanos que se dirigen a una entidad específica para lograr objetivos particulares.
                </p>
                <p>
                  El término <strong>"Advanced"</strong> se refiere al uso de técnicas sofisticadas y herramientas personalizadas. 
                  <strong>"Persistent"</strong> indica la naturaleza continua y prolongada del ataque. 
                  <strong>"Threat"</strong> enfatiza el nivel de riesgo que representa para la organización objetivo.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Características Clave</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4" />
                  </div>
                  <span>Objetivos específicos y bien definidos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Eye className="h-4 w-4" />
                  </div>
                  <span>Operaciones sigilosas y de bajo perfil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Activity className="h-4 w-4" />
                  </div>
                  <span>Persistencia a largo plazo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4" />
                  </div>
                  <span>Respaldadas por recursos significativos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APT Lifecycle */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Activity className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Ciclo de Vida de un Ataque APT
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Las APT siguen un proceso metodológico y estructurado que se desarrolla en fases específicas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: 1,
                title: "Reconocimiento",
                description: "Recopilación de inteligencia sobre el objetivo, identificación de vulnerabilidades y vectores de ataque potenciales.",
                icon: Search,
                color: "blue",
                details: ["OSINT (Open Source Intelligence)", "Ingeniería social", "Escaneo de redes", "Análisis de empleados"]
              },
              {
                phase: 2,
                title: "Acceso Inicial",
                description: "Compromiso inicial del sistema objetivo a través de técnicas como phishing, explotación de vulnerabilidades o supply chain attacks.",
                icon: Lock,
                color: "yellow",
                details: ["Spear phishing", "Watering hole attacks", "Explotación de 0-days", "Supply chain compromise"]
              },
              {
                phase: 3,
                title: "Establecimiento",
                description: "Instalación de malware persistente, creación de backdoors y establecimiento de canales de comunicación seguros.",
                icon: Server,
                color: "orange",
                details: ["Instalación de backdoors", "Persistencia del sistema", "C2 communications", "Evasión de detección"]
              },
              {
                phase: 4,
                title: "Escalación y Lateral",
                description: "Elevación de privilegios y movimiento lateral a través de la red para acceder a sistemas y datos críticos.",
                icon: Network,
                color: "red",
                details: ["Privilege escalation", "Lateral movement", "Credential harvesting", "Network mapping"]
              }
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="card p-6 h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${phase.color}-500 text-white rounded-full mb-4`}>
                    <phase.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`text-sm bg-${phase.color}-100 dark:bg-${phase.color}-900/30 text-${phase.color}-700 dark:text-${phase.color}-300 px-2 py-1 rounded-full`}>
                      Fase {phase.phase}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {phase.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {phase.description}
                  </p>
                  
                  <button 
                    onClick={() => toggleConcept(i)}
                    className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                  >
                    Ver detalles
                    {expandedConcept === i ? (
                      <ChevronUp className="ml-1 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedConcept === i && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <ul className="space-y-2">
                        {phase.details.map((detail, j) => (
                          <li key={j} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Connector arrow */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actor Types */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Tipos de Actores APT
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Las APT son ejecutadas por diferentes tipos de actores con motivaciones y capacidades variadas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                type: "Nation-State Actors",
                title: "Actores Estatales",
                description: "Grupos patrocinados por gobiernos que buscan ventajas geopolíticas, espionaje industrial o sabotaje.",
                examples: ["APT1 (China)", "Fancy Bear (Rusia)", "Lazarus (Corea del Norte)", "APT29 (Rusia)"],
                motivations: ["Espionaje político", "Robo de PI", "Sabotaje", "Ventaja militar"],
                color: "red",
                icon: Globe
              },
              {
                type: "Cybercriminals",
                title: "Ciberdelincuentes",
                description: "Grupos organizados que buscan principalmente beneficios financieros a través de actividades ilícitas.",
                examples: ["FIN7", "Carbanak", "Silence", "Magecart"],
                motivations: ["Ganancia financiera", "Fraude bancario", "Ransomware", "Criptominería"],
                color: "yellow",
                icon: Target
              },
              {
                type: "Hacktivists",
                title: "Hacktivistas",
                description: "Individuos o grupos que usan ataques cibernéticos para promover agendas políticas o sociales.",
                examples: ["Anonymous", "LulzSec", "Syrian Electronic Army", "Gaza Cybergang"],
                motivations: ["Activismo político", "Protesta social", "Ideología", "Justicia"],
                color: "green",
                icon: Shield
              }
            ].map((actor, i) => (
              <div key={i} className="card p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${actor.color}-100 dark:bg-${actor.color}-900/30 text-${actor.color}-600 rounded-xl mb-6`}>
                  <actor.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {actor.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {actor.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ejemplos Conocidos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {actor.examples.map((example, j) => (
                      <span key={j} className={`text-xs bg-${actor.color}-100 dark:bg-${actor.color}-900/30 text-${actor.color}-700 dark:text-${actor.color}-300 px-2 py-1 rounded-full`}>
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Motivaciones:</h4>
                  <ul className="space-y-1">
                    {actor.motivations.map((motivation, j) => (
                      <li key={j} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className={`w-2 h-2 bg-${actor.color}-500 rounded-full mr-2`}></div>
                        {motivation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APT vs Other Attacks */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <AlertTriangle className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              APT vs. Otros Tipos de Ataques
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comparación entre las características de APT y otros vectores de ataque cibernético
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-6 text-gray-900 dark:text-white font-semibold">Característica</th>
                  <th className="text-center p-6 text-green-600 font-semibold">APT</th>
                  <th className="text-center p-6 text-blue-600 font-semibold">Malware Tradicional</th>
                  <th className="text-center p-6 text-yellow-600 font-semibold">Ataques Oportunistas</th>
                  <th className="text-center p-6 text-red-600 font-semibold">Script Kiddies</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    characteristic: "Duración",
                    apt: "Meses/Años",
                    malware: "Días/Semanas", 
                    opportunistic: "Horas/Días",
                    script: "Minutos/Horas"
                  },
                  {
                    characteristic: "Objetivo",
                    apt: "Específico y dirigido",
                    malware: "Amplio espectro",
                    opportunistic: "Oportunidad",
                    script: "Aleatorio"
                  },
                  {
                    characteristic: "Sofisticación",
                    apt: "Muy alta",
                    malware: "Variable",
                    opportunistic: "Media",
                    script: "Baja"
                  },
                  {
                    characteristic: "Recursos",
                    apt: "Extensos",
                    malware: "Moderados",
                    opportunistic: "Limitados",
                    script: "Mínimos"
                  },
                  {
                    characteristic: "Detección",
                    apt: "Muy difícil",
                    malware: "Moderada",
                    opportunistic: "Fácil",
                    script: "Muy fácil"
                  }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="p-6 font-medium text-gray-900 dark:text-white">{row.characteristic}</td>
                    <td className="p-6 text-center text-green-700 dark:text-green-300">{row.apt}</td>
                    <td className="p-6 text-center text-blue-700 dark:text-blue-300">{row.malware}</td>
                    <td className="p-6 text-center text-yellow-700 dark:text-yellow-300">{row.opportunistic}</td>
                    <td className="p-6 text-center text-red-700 dark:text-red-300">{row.script}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <h2 className="text-2xl font-bold mb-2">Conceptos Fundamentales Cubiertos</h2>
              <p className="text-green-100">Ahora exploremos ejemplos reales de ataques APT en la historia</p>
            </div>
            
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button 
                onClick={() => navigate('/presentation')}
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-green-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Presentación
              </button>
              
              <button 
                onClick={() => navigate('/examples')}
                className="btn-primary bg-white text-green-600 hover:bg-green-50"
              >
                Ejemplos Reales
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}