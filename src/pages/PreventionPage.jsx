import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Lock, Eye, Users, Layers, Database, Network, AlertTriangle, CheckCircle, ArrowRight, ArrowLeft, ChevronDown, ChevronUp, Server, Zap, Target, Globe, Activity, Search } from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'

export default function PreventionPage() {
  const navigate = useNavigate()
  const [activeFramework, setActiveFramework] = useState('nist')
  const [expandedStrategy, setExpandedStrategy] = useState(null)

  const frameworks = {
    nist: {
      name: "NIST Cybersecurity Framework",
      description: "Marco integral para la gestión y reducción de riesgos cibernéticos",
      functions: [
        {
          id: "identify",
          name: "Identificar",
          description: "Desarrollar comprensión organizacional para gestionar riesgos cibernéticos",
          controls: [
            "Gestión de activos y inventario",
            "Evaluación de vulnerabilidades",
            "Análisis de riesgos regulares",
            "Políticas y procedimientos de seguridad"
          ],
          icon: Search,
          color: "blue"
        },
        {
          id: "protect",
          name: "Proteger", 
          description: "Implementar salvaguardas apropiadas para limitar el impacto de eventos",
          controls: [
            "Control de acceso y gestión de identidades",
            "Concienciación y entrenamiento",
            "Protección de datos",
            "Mantenimiento de sistemas"
          ],
          icon: Shield,
          color: "green"
        },
        {
          id: "detect",
          name: "Detectar",
          description: "Desarrollar e implementar actividades apropiadas para identificar eventos",
          controls: [
            "Monitoreo continuo",
            "Procesos de detección", 
            "SIEM y análisis de logs",
            "Threat intelligence"
          ],
          icon: Eye,
          color: "yellow"
        },
        {
          id: "respond",
          name: "Responder",
          description: "Desarrollar e implementar actividades apropiadas para actuar ante eventos",
          controls: [
            "Planificación de respuesta",
            "Comunicaciones de respuesta",
            "Análisis forense",
            "Mitigación y contención"
          ],
          icon: Zap,
          color: "orange"
        },
        {
          id: "recover",
          name: "Recuperar",
          description: "Desarrollar e implementar actividades para mantener planes de resiliencia",
          controls: [
            "Planificación de recuperación",
            "Mejoras en recuperación", 
            "Comunicaciones de recuperación",
            "Lecciones aprendidas"
          ],
          icon: Activity,
          color: "purple"
        }
      ]
    },
    mitre: {
      name: "MITRE ATT&CK Framework",
      description: "Base de conocimiento de tácticas y técnicas adversarias basada en observaciones del mundo real"
    },
    iso: {
      name: "ISO 27001/27002",
      description: "Estándar internacional para sistemas de gestión de seguridad de la información"
    }
  }

  const preventionStrategies = [
    {
      category: "Arquitectura de Seguridad",
      icon: Layers,
      color: "blue",
      strategies: [
        {
          name: "Zero Trust Architecture",
          description: "Modelo de seguridad que no confía en nadie por defecto, dentro o fuera de la red organizacional.",
          implementation: [
            "Verificar explícitamente todas las conexiones",
            "Usar acceso con menor privilegio",
            "Asumir que hay brechas de seguridad"
          ],
          benefits: ["Reduce superficie de ataque", "Limita movimiento lateral", "Mejora visibilidad"]
        },
        {
          name: "Defensa en Profundidad",
          description: "Estrategia multicapa que usa múltiples mecanismos de seguridad para proteger información.",
          implementation: [
            "Perímetro de red seguro",
            "Segmentación de red",
            "Controles de endpoint",
            "Monitoreo y respuesta"
          ],
          benefits: ["Redundancia de controles", "Detección temprana", "Contención de amenazas"]
        },
        {
          name: "Micro-segmentación",
          description: "División de la red en zonas pequeñas para mantener acceso separado a diferentes partes.",
          implementation: [
            "Políticas granulares de firewall",
            "VLANs y subredes separadas",
            "Controles de acceso basados en roles"
          ],
          benefits: ["Limita propagación", "Mejora control", "Facilita monitoreo"]
        }
      ]
    },
    {
      category: "Tecnologías de Detección",
      icon: Eye, 
      color: "green",
      strategies: [
        {
          name: "EDR/XDR Solutions",
          description: "Herramientas avanzadas de detección y respuesta en endpoints y múltiples vectores.",
          implementation: [
            "Monitoreo comportamental",
            "Análisis de anomalías",
            "Respuesta automatizada",
            "Threat hunting proactivo"
          ],
          benefits: ["Detección avanzada", "Respuesta rápida", "Visibilidad completa"]
        },
        {
          name: "SIEM/SOAR Integration",
          description: "Correlación de eventos de seguridad con orquestación y respuesta automatizada.",
          implementation: [
            "Agregación de logs centralizados",
            "Reglas de correlación",
            "Playbooks automatizados",
            "Integración con threat intel"
          ],
          benefits: ["Correlación efectiva", "Respuesta coordinada", "Reducción de falsos positivos"]
        },
        {
          name: "Deception Technology",
          description: "Uso de señuelos y trampas para detectar y analizar actividad maliciosa.",
          implementation: [
            "Honeypots y honeynets",
            "Señuelos de credenciales",
            "Archivos trampa",
            "Servicios falsos"
          ],
          benefits: ["Detección temprana", "Inteligencia sobre atacantes", "Bajo número de falsos positivos"]
        }
      ]
    },
    {
      category: "Gestión de Identidades",
      icon: Users,
      color: "yellow", 
      strategies: [
        {
          name: "Privileged Access Management",
          description: "Control y monitoreo de acceso a cuentas y recursos críticos de la organización.",
          implementation: [
            "Bóvedas de credenciales",
            "Rotación automática de passwords",
            "Acceso just-in-time",
            "Sesiones grabadas"
          ],
          benefits: ["Reduce riesgo de credenciales", "Auditoría completa", "Control granular"]
        },
        {
          name: "Multi-Factor Authentication",
          description: "Verificación de identidad usando múltiples factores de autenticación.",
          implementation: [
            "Algo que sabes (password)",
            "Algo que tienes (token)",
            "Algo que eres (biometría)",
            "Contextual (ubicación, dispositivo)"
          ],
          benefits: ["Reduce compromiso de cuentas", "Cumplimiento regulatorio", "Mejor UX con SSO"]
        },
        {
          name: "Identity Governance",
          description: "Gestión del ciclo de vida de identidades y control de acceso basado en roles.",
          implementation: [
            "Provisionamiento/desprovisionamiento automático",
            "Revisiones de acceso regulares",
            "Segregación de funciones",
            "Análisis de comportamiento de usuarios"
          ],
          benefits: ["Cumplimiento automático", "Reducción de riesgo interno", "Eficiencia operacional"]
        }
      ]
    },
    {
      category: "Preparación Organizacional",
      icon: Users,
      color: "purple",
      strategies: [
        {
          name: "Security Awareness Training",
          description: "Educación continua del personal sobre amenazas y mejores prácticas de seguridad.",
          implementation: [
            "Entrenamiento regular y actualizado",
            "Simulacros de phishing",
            "Reportes de incidentes",
            "Cultura de seguridad"
          ],
          benefits: ["Reduce factor humano", "Detección colaborativa", "Respuesta más rápida"]
        },
        {
          name: "Incident Response Planning",
          description: "Preparación organizacional para responder efectivamente a incidentes de seguridad.",
          implementation: [
            "Playbooks documentados",
            "Equipos de respuesta entrenados",
            "Ejercicios de mesa regulares",
            "Comunicaciones de crisis"
          ],
          benefits: ["Respuesta coordinada", "Reducción de impacto", "Mejora continua"]
        },
        {
          name: "Threat Intelligence",
          description: "Recopilación y análisis de información sobre amenazas actuales y emergentes.",
          implementation: [
            "Feeds de inteligencia externos",
            "Análisis de IOCs",
            "Threat hunting proactivo",
            "Compartición de información"
          ],
          benefits: ["Detección proactiva", "Contexto de amenazas", "Defensa informada"]
        }
      ]
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
                  <h1 className="text-2xl font-bold text-gradient">Prevención APT</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Estrategias de Protección</p>
                </div>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/examples')}
                className="btn-secondary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </button>
              <button 
                onClick={() => navigate('/references')}
                className="btn-secondary"
              >
                Siguiente: Referencias
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
              <Shield className="h-5 w-5" />
              <span className="font-medium">Estrategias de Protección y Prevención</span>
            </div>
            
            <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
              Prevención contra Ataques APT
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Estrategias, marcos de trabajo y mejores prácticas para proteger organizaciones contra amenazas persistentes avanzadas
            </p>
          </div>
        </div>
      </section>

      {/* NIST Framework Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Target className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Marco NIST de Ciberseguridad
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Framework integral para identificar, proteger, detectar, responder y recuperarse de amenazas cibernéticas
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-6">
            {frameworks.nist.functions.map((func, i) => (
              <div key={i} className="card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${func.color}-100 dark:bg-${func.color}-900/30 text-${func.color}-600 rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                  <func.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {func.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {func.description}
                </p>
                
                <div className="space-y-2">
                  {func.controls.map((control, j) => (
                    <div key={j} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <div className={`w-2 h-2 bg-${func.color}-500 rounded-full mr-2 flex-shrink-0`}></div>
                      {control}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Layers className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Estrategias de Prevención Específicas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Implementaciones técnicas y organizacionales para crear defensas robustas contra APT
            </p>
          </div>
          
          <div className="space-y-12">
            {preventionStrategies.map((category, i) => (
              <div key={i}>
                <div className="flex items-center mb-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-600 rounded-xl mr-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.strategies.map((strategy, j) => (
                    <div key={j} className="card p-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {strategy.name}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {strategy.description}
                      </p>
                      
                      <button 
                        onClick={() => setExpandedStrategy(expandedStrategy === `${i}-${j}` ? null : `${i}-${j}`)}
                        className="text-primary-600 hover:text-primary-700 font-medium flex items-center mb-4"
                      >
                        Ver detalles
                        {expandedStrategy === `${i}-${j}` ? (
                          <ChevronUp className="ml-1 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </button>
                      
                      {expandedStrategy === `${i}-${j}` && (
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Implementación:</h5>
                            <ul className="space-y-1">
                              {strategy.implementation.map((item, k) => (
                                <li key={k} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Beneficios:</h5>
                            <ul className="space-y-1">
                              {strategy.benefits.map((benefit, k) => (
                                <li key={k} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                  <div className={`w-2 h-2 bg-${category.color}-500 rounded-full mr-2 mt-2 flex-shrink-0`}></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Globe className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Hoja de Ruta de Implementación
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Guía paso a paso para implementar defensas contra APT en la organización
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-primary-600 h-full rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  phase: "Fase 1: Evaluación",
                  duration: "1-2 meses",
                  description: "Evaluación inicial de postura de seguridad y identificación de gaps críticos",
                  tasks: [
                    "Auditoría de seguridad completa",
                    "Identificación de activos críticos", 
                    "Evaluación de vulnerabilidades",
                    "Análisis de riesgos inicial"
                  ],
                  color: "blue"
                },
                {
                  phase: "Fase 2: Fundaciones",
                  duration: "2-3 meses", 
                  description: "Establecimiento de controles básicos de seguridad y marcos de trabajo",
                  tasks: [
                    "Implementación de controles básicos",
                    "Políticas y procedimientos",
                    "Entrenamiento inicial del personal",
                    "Herramientas de monitoreo básico"
                  ],
                  color: "green"
                },
                {
                  phase: "Fase 3: Detección",
                  duration: "3-4 meses",
                  description: "Implementación de capacidades avanzadas de detección y monitoreo",
                  tasks: [
                    "SIEM/SOAR deployment",
                    "EDR en endpoints críticos",
                    "Threat intelligence feeds",
                    "Procedimientos de hunting"
                  ],
                  color: "yellow"
                },
                {
                  phase: "Fase 4: Respuesta",
                  duration: "2-3 meses",
                  description: "Desarrollo de capacidades de respuesta a incidentes y recuperación",
                  tasks: [
                    "Playbooks de respuesta",
                    "Ejercicios de mesa",
                    "Automatización de respuesta",
                    "Planes de continuidad"
                  ],
                  color: "orange"
                },
                {
                  phase: "Fase 5: Optimización",
                  duration: "Continuo",
                  description: "Mejora continua basada en threat landscape y lecciones aprendidas",
                  tasks: [
                    "Optimización de reglas",
                    "Threat hunting avanzado",
                    "Análisis de métricas",
                    "Actualización de defensas"
                  ],
                  color: "purple"
                }
              ].map((phase, i) => (
                <div key={i} className={`flex items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`w-full lg:w-1/2 ${i % 2 === 1 ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className={`card p-6 ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-block bg-${phase.color}-100 dark:bg-${phase.color}-900/30 text-${phase.color}-700 dark:text-${phase.color}-300 px-3 py-1 rounded-full text-sm font-semibold ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                          {phase.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {phase.phase}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {phase.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {phase.tasks.map((task, j) => (
                          <li key={j} className={`flex items-center text-sm text-gray-600 dark:text-gray-400 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                            <CheckCircle className={`h-4 w-4 text-${phase.color}-500 flex-shrink-0 ${i % 2 === 1 ? 'lg:order-2 lg:ml-2 lg:mr-0' : 'mr-2'}`} />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 border-4 border-white dark:border-gray-900 rounded-full hidden lg:block"></div>
                  
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <h2 className="text-2xl font-bold mb-2">Estrategias de Prevención Completadas</h2>
              <p className="text-green-100">Revisemos las fuentes y referencias académicas</p>
            </div>
            
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button 
                onClick={() => navigate('/examples')}
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-green-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ejemplos
              </button>
              
              <button 
                onClick={() => navigate('/references')}
                className="btn-primary bg-white text-green-600 hover:bg-green-50"
              >
                Referencias
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}