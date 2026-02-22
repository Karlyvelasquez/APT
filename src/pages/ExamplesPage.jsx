import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Globe, Zap, Factory, Building, Users, Calendar, Target, AlertTriangle, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, ExternalLink, Award, TrendingDown, Lock, Server, Database, ShieldCheck, KeyRound, Network, MonitorSmartphone } from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'
import epm1 from '../image/1.png'
import epm2 from '../image/2.png'
import epm3 from '../image/3.png'

export default function ExamplesPage() {
  const navigate = useNavigate()
  const [selectedCase, setSelectedCase] = useState(0)

  const caseStudies = [
    {
      name: "Stuxnet",
      year: "2010",
      target: "Instalaciones nucleares iraníes", 
      attribution: "EE.UU. / Israel",
      severity: "Extremo",
      type: "Sabotaje de infraestructura",
      description: "Primera ciberarma conocida diseñada específicamente para atacar sistemas de control industrial (SCADA). Causó daño físico a las centrifugadoras nucleares iraníes.",
      timeline: [
        "2005-2007: Desarrollo inicial del malware",
        "2008-2009: Primeras infiltraciones en Natanz", 
        "2010: Descubrimiento público del malware",
        "2012: Publicación de detalles técnicos completos"
      ],
      techniques: [
        "Explotación de 4 vulnerabilidades 0-day",
        "Certificados digitales robados",
        "Rootkits avanzados para Windows",
        "Payloads específicos para PLCs Siemens"
      ],
      impact: [
        "~1,000 centrifugadoras dañadas",
        "Retraso del programa nuclear iraní",
        "Establecimiento de precedente en guerra cibernética",
        "Escalada en capacidades ofensivas estatales"
      ],
      lessons: [
        "Sistemas aislados no son inmunes",
        "Importancia de la seguridad en OT/ICS",
        "Necesidad de monitoreo físico y lógico",
        "Riesgos de proliferación de ciberarmas"
      ],
      color: "red"
    },
    {
      name: "APT1 (Comment Crew)",
      year: "2006-2013", 
      target: "141 organizaciones en 20 sectores",
      attribution: "Unidad 61398 del EPL (China)",
      severity: "Alto",
      type: "Espionaje económico",
      description: "Primera campaña APT ampliamente documentada y expuesta públicamente. Mandiant reveló operaciones masivas de espionaje cibernético por parte del ejército chino.",
      timeline: [
        "2006: Inicio de operaciones documentadas",
        "2011: Escalada de actividades", 
        "2013: Exposición pública por Mandiant",
        "2014: Acusaciones formales de EE.UU."
      ],
      techniques: [
        "Spear phishing masivo",
        "Backdoors personalizados (WEBC2, BISCUIT)",
        "Robo de credenciales",
        "Exfiltración de terabytes de datos"
      ],
      impact: [
        "Terabytes de propiedad intelectual robada",
        "Ventaja competitiva para empresas chinas",
        "Pérdidas económicas multimillonarias",
        "Cambio en políticas de ciberseguridad"
      ],
      lessons: [
        "Necesidad de threat intelligence",
        "Importancia de compartir información",
        "Detección basada en comportamiento",
        "Respuesta coordinada internacional"
      ],
      color: "yellow"
    },
    {
      name: "SolarWinds (SUNBURST)",
      year: "2019-2020",
      target: "18,000+ organizaciones globales", 
      attribution: "APT29 / Cozy Bear (Rusia)",
      severity: "Extremo",
      type: "Supply chain compromise",
      description: "Sofisticado ataque a la cadena de suministro que comprometió el software Orion de SolarWinds, afectando a miles de organizaciones incluyendo agencias gubernamentales.",
      timeline: [
        "Mar 2020: Primera inserción del backdoor",
        "Jun 2020: Distribución masiva via actualizaciones",
        "Dic 2020: Descubrimiento por FireEye",
        "Ene 2021: Respuesta y remediación masiva"
      ],
      techniques: [
        "Comprometimiento de build environment",
        "Backdoor en actualizaciones legítimas",
        "Técnicas de evasión avanzadas",
        "Movimiento lateral selectivo"
      ],
      impact: [
        "Compromiso de 9 agencias federales",
        "Acceso a Microsoft, FireEye, otros",
        "Pérdidas estimadas en $100+ billones",
        "Crisis de confianza en supply chain"
      ],
      lessons: [
        "Seguridad en desarrollo de software",
        "Verificación de integridad crítica",
        "Monitoreo de supply chain",
        "Respuesta rápida y coordinada"
      ],
      color: "blue"
    },
    {
      name: "Equation Group",
      year: "2001-2015",
      target: "Objetivos de alto valor global",
      attribution: "NSA (EE.UU.)",
      severity: "Extremo", 
      type: "Espionaje de inteligencia",
      description: "Grupo APT más sofisticado conocido, con herramientas de nivel de agencia de inteligencia. Expuesto por Kaspersky Lab como operación de la NSA.",
      timeline: [
        "2001: Primeras actividades detectadas",
        "2008: Desarrollo de STUXNET relacionado",
        "2015: Exposición por Kaspersky Lab",
        "2016-2017: Filtración de herramientas por Shadow Brokers"
      ],
      techniques: [
        "Firmware persistence (HDD/SSD)",
        "Múltiples vulnerabilidades 0-day",
        "Herramientas de clase mundial",
        "Técnicas de atribución falsa"
      ],
      impact: [
        "Espionaje en 42+ países",
        "Compromiso de infraestructura crítica",
        "Desarrollo de capacidades offensive",
        "Establecimiento de estándares APT"
      ],
      lessons: [
        "Sofisticación técnica extrema posible",
        "Importancia de firmware security",
        "Riesgos de herramientas filtradas",
        "Necesidad de defensa en profundidad"
      ],
      color: "purple"
    },
    {
      name: "NotPetya",
      year: "2017",
      target: "Ucrania y organizaciones globales",
      attribution: "Sandworm Team (Rusia)", 
      severity: "Extremo",
      type: "Ataque destructivo",
      description: "Ataque cibernético destructivo disfrazado como ransomware. Causó daños masivos especialmente en Ucrania pero se extendió globalmente causando pérdidas billonarias.",
      timeline: [
        "Jun 27, 2017: Lanzamiento inicial",
        "Jun 27-30: Propagación global",
        "Jul 2017: Análisis forense inicial", 
        "Feb 2018: Atribución oficial a Rusia"
      ],
      techniques: [
        "Comprometimiento de software fiscal ucraniano",
        "Explotación de EternalBlue (NSA leak)",
        "Wiper destructivo disfrazado",
        "Propagación lateral masiva"
      ],
      impact: [
        "$10+ billones en daños globales",
        "Maersk: $300M en pérdidas",
        "FedEx: $400M en pérdidas", 
        "Infraestructura ucraniana severamente afectada"
      ],
      lessons: [
        "Riesgos de herramientas filtradas",
        "Importancia de parches de seguridad",
        "Segmentación de red crítica",
        "Respaldo y recuperación robustos"
      ],
      color: "orange"
    },
    {
      name: "EPM - Diciembre de 2022",
      year: "2022",
      target: "Más de 120 municipios afectados",
      attribution: "BlackCat / ALPHV",
      severity: "Extremo",
      type: "Ransomware como Servicio (RaaS)",
      description: "BlackCat (ALPHV) atacó a Empresas Públicas de Medellín (EPM), afectando la infraestructura tecnológica de más de 120 municipios. Actúan exactamente como una APT.",
      isCustomEPM: true,
      color: "emerald"
    }
  ]

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
                  <h1 className="text-2xl font-bold text-gradient">Ejemplos APT</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Casos de Estudio Reales</p>
                </div>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/concepts')}
                className="btn-secondary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </button>
              <button 
                onClick={() => navigate('/prevention')}
                className="btn-secondary"
              >
                Siguiente: Prevención
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
            <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-6 py-3 rounded-full mb-8">
              <Globe className="h-5 w-5" />
              <span className="font-medium">Casos de Estudio Documentados</span>
            </div>
            
            <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
              Ejemplos Reales de Ataques APT
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Análisis detallado de los ataques APT más significativos e impactantes de la historia reciente
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Selector */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-8 text-center">
              Selecciona un Caso de Estudio
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {caseStudies.map((study, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCase(i)}
                  className={`p-4 rounded-xl border-2 transition text-left ${
                    selectedCase === i 
                      ? `border-${study.color}-500 bg-${study.color}-50 dark:bg-${study.color}-900/20` 
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">{study.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full bg-${study.color}-100 dark:bg-${study.color}-900/30 text-${study.color}-700 dark:text-${study.color}-300`}>
                      {study.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{study.target}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{study.type}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Case Study Detail */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          {(() => {
            const study = caseStudies[selectedCase]

            {/* Custom EPM Case Study Rendering */}
            if (study.isCustomEPM) {
              return (
                <div>
                  {/* ====== PARTE 1: BlackCat - Más de 120 municipios ====== */}
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white mb-12">
                    <div className="flex items-center space-x-2 mb-4">
                      <Award className="h-6 w-6" />
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Caso de Estudio</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-2">EPM — Diciembre de 2022</h2>
                    <p className="text-xl text-emerald-100 mb-1">BlackCat · Más de 120 municipios</p>
                  </div>

                  {/* Imagen 1 + Descripción */}
                  <div className="card p-8 mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <AlertTriangle className="mr-3 h-6 w-6 text-red-500" />
                      1ᵃ Parte — El Atacante
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <img src={epm1} alt="BlackCat / ALPHV" className="rounded-xl shadow-lg w-full object-cover" />
                      <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        <p>
                          El ataque fue perpetrado por un grupo conocido como <strong className="text-red-500">BlackCat</strong> (también llamado <strong>ALPHV</strong>). Estos grupos operan bajo un modelo de <em>'Ransomware como Servicio'</em> (RaaS).
                        </p>
                        <p>
                          Actúan <strong className="text-yellow-500">exactamente como una APT</strong>: reconocimiento prolongado, movimiento lateral sigiloso y exfiltración masiva antes de detonar el ransomware.
                        </p>
                      </div>
                    </div>

                    {/* Video YouTube */}
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <ExternalLink className="mr-2 h-5 w-5 text-blue-500" />
                        Video de referencia
                      </h4>
                      <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/qBy1aHUwyl0?start=18"
                          title="EPM BlackCat Attack"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>

                  {/* ====== PARTE 2: Cadena del Ataque ====== */}
                  <div className="card p-8 mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                      <Zap className="mr-3 h-6 w-6 text-yellow-500" />
                      2ᵃ Parte — Cadena del Ataque
                    </h3>

                    {/* Flow diagram */}
                    <div className="grid md:grid-cols-4 gap-6 mb-10">
                      {/* Infección */}
                      <div className="relative bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 rounded-xl p-5 text-center">
                        <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">Infección</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Acceso inicial a la red de EPM mediante técnicas de ingeniería social y/o explotación de vulnerabilidades.</p>
                        <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                      </div>

                      {/* Movimiento lateral */}
                      <div className="relative bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-xl p-5 text-center">
                        <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                          <Network className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">Movimiento Lateral y Reconocimiento</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Se movieron lateralmente por la red, buscando la información más valiosa.</p>
                        <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                      </div>

                      {/* Exfiltración */}
                      <div className="relative bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-700 rounded-xl p-5 text-center">
                        <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                          <Database className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Exfiltración</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Extrajeron sigilosamente cerca de <strong>15 Terabytes</strong> de información confidencial.</p>
                        <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                      </div>

                      {/* Secuestro */}
                      <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-xl p-5 text-center">
                        <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                          <Lock className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-2">Secuestro</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Una vez que tuvieron los datos, ejecutaron el ransomware que contagió el <strong>25%</strong> de la infraestructura de EPM, incluyendo servidores y estaciones de trabajo.</p>
                      </div>
                    </div>

                    {/* Imagen 2 */}
                    <img src={epm2} alt="Cadena del ataque EPM" className="rounded-xl shadow-lg w-full object-cover" />
                  </div>

                  {/* ====== PARTE 3: Solución Actual ====== */}
                  <div className="card p-8 mb-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                      <ShieldCheck className="mr-3 h-6 w-6 text-emerald-500" />
                      Solución Actual
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                      {/* Punto 1 — Contención */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 text-lg font-bold">1</div>
                        <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">Contención Inmediata</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">Lo primero que hizo el equipo de ingeniería fue evitar que el ransomware siguiera avanzando.</p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <Server className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <span><strong>Aislamiento Total</strong></span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <MonitorSmartphone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <span><strong>Apagado Preventivo</strong></span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <KeyRound className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <span><strong>Bloqueo de Credenciales</strong></span>
                          </li>
                        </ul>
                      </div>

                      {/* Punto 2 — Reconstrucción */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                        <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 text-lg font-bold">2</div>
                        <h4 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-3">Reconstrucción</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">EPM no pagó el rescate (según fuentes oficiales), por lo que tuvieron que reconstruir.</p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <Target className="h-4 w-4 text-amber-500 flex-shrink-0" />
                            <span><strong>Análisis Forense</strong></span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <Database className="h-4 w-4 text-amber-500 flex-shrink-0" />
                            <span><strong>Restauración desde Backups</strong></span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <Shield className="h-4 w-4 text-amber-500 flex-shrink-0" />
                            <span><strong>Desinfección de Endpoints</strong></span>
                          </li>
                        </ul>
                      </div>

                      {/* Punto 3 — Zero Trust */}
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6">
                        <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 text-lg font-bold">3</div>
                        <h4 className="text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-3">Arquitectura Zero Trust</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">Para que no vuelva a pasar, EPM cambió su arquitectura de seguridad basándose en el modelo Zero Trust.</p>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <KeyRound className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                            <span><strong>MFA Obligatorio</strong></span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <Network className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                            <span><strong>Microsegmentación</strong></span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                            <ShieldCheck className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                            <span><strong>Implementación de EDR/XDR</strong></span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Imagen 3 */}
                    <img src={epm3} alt="Solución Zero Trust EPM" className="rounded-xl shadow-lg w-full object-cover" />
                  </div>
                </div>
              )
            }

            return (
              <div>
                {/* Case Header */}
                <div className={`bg-gradient-to-r from-${study.color}-500 to-${study.color}-600 rounded-2xl p-8 text-white mb-12`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-2 mb-4">
                        <Award className="h-6 w-6" />
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Caso de Estudio</span>
                      </div>
                      <h2 className="text-4xl font-bold mb-4">{study.name}</h2>
                      <p className="text-xl text-white/90 mb-6">{study.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <Calendar className="h-5 w-5 mb-2" />
                        <p className="text-sm text-white/80">Período</p>
                        <p className="font-semibold">{study.year}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <Target className="h-5 w-5 mb-2" />
                        <p className="text-sm text-white/80">Objetivo</p>
                        <p className="font-semibold text-sm">{study.target}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <Users className="h-5 w-5 mb-2" />
                        <p className="text-sm text-white/80">Atribución</p>
                        <p className="font-semibold text-sm">{study.attribution}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                        <AlertTriangle className="h-5 w-5 mb-2" />
                        <p className="text-sm text-white/80">Severidad</p>
                        <p className="font-semibold">{study.severity}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Timeline */}
                  <div className="card p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                      Timeline del Ataque
                    </h3>
                    <div className="space-y-4">
                      {study.timeline.map((event, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <p className="text-gray-600 dark:text-gray-300">{event}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Techniques */}
                  <div className="card p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Zap className="mr-3 h-6 w-6 text-yellow-600" />
                      Técnicas Utilizadas
                    </h3>
                    <div className="space-y-3">
                      {study.techniques.map((technique, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                          <p className="text-gray-600 dark:text-gray-300">{technique}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="card p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <TrendingDown className="mr-3 h-6 w-6 text-red-600" />
                      Impacto y Consecuencias
                    </h3>
                    <div className="space-y-3">
                      {study.impact.map((impact, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p className="text-gray-600 dark:text-gray-300">{impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lessons Learned */}
                  <div className="card p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                      <Shield className="mr-3 h-6 w-6 text-green-600" />
                      Lecciones Aprendidas
                    </h3>
                    <div className="space-y-3">
                      {study.lessons.map((lesson, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                          <p className="text-gray-600 dark:text-gray-300">{lesson}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Estadísticas de Casos Documentados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Análisis cuantitativo del impacto de los principales ataques APT de la última década
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "$100B+",
                label: "Daños SolarWinds",
                description: "Pérdidas económicas estimadas del ataque a la cadena de suministro",
                color: "text-blue-600",
                bgColor: "bg-blue-100 dark:bg-blue-900/30"
              },
              {
                number: "18,000+",
                label: "Orgs Afectadas",
                description: "Organizaciones comprometidas en el ataque SolarWinds",
                color: "text-red-600", 
                bgColor: "bg-red-100 dark:bg-red-900/30"
              },
              {
                number: "1,000",
                label: "Centrifugadoras",
                description: "Equipos industriales físicamente dañados por Stuxnet",
                color: "text-yellow-600",
                bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
              },
              {
                number: "141",
                label: "Empresas APT1",
                description: "Organizaciones comprometidas por Comment Crew en 7 años",
                color: "text-green-600",
                bgColor: "bg-green-100 dark:bg-green-900/30"
              }
            ].map((stat, i) => (
              <div key={i} className="card p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4`}>
                  <span className={`text-lg font-bold ${stat.color}`}>{stat.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section bg-orange-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <h2 className="text-2xl font-bold mb-2">Casos de Estudio Analizados</h2>
              <p className="text-orange-100">Ahora aprendamos cómo protegernos contra estas amenazas</p>
            </div>
            
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button 
                onClick={() => navigate('/concepts')}
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-orange-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Conceptos
              </button>
              
              <button 
                onClick={() => navigate('/prevention')}
                className="btn-primary bg-white text-orange-600 hover:bg-orange-50"
              >
                Estrategias de Prevención
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}