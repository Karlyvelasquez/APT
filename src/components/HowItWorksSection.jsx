import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Search, 
  Mail, 
  Upload, 
  ArrowRight, 
  Users, 
  Database,
  Download,
  Trash2,
  Activity
} from 'lucide-react'

const HowItWorksSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const phases = [
    {
      phase: 1,
      icon: <Search size={40} />,
      title: "Reconocimiento",
      duration: "Semanas a Meses",
      description: "Investigación exhaustiva del objetivo para identificar vulnerabilidades y crear estrategias personalizadas",
      activities: [
        "OSINT (Open Source Intelligence)",
        "Análisis de empleados clave (LinkedIn, redes sociales)",
        "Mapeo de infraestructura de red",
        "Identificación de proveedores y socios",
        "Análisis de amenazas específicas del sector"
      ],
      color: "#3b82f6"
    },
    {
      phase: 2,
      icon: <Mail size={40} />,
      title: "Infiltración Inicial",
      duration: "Días a Semanas",
      description: "Obtención del primer punto de acceso mediante técnicas de ingeniería social o explotación de vulnerabilidades",
      activities: [
        "Spear phishing personalizado",
        "Watering hole attacks",
        "Explotación de vulnerabilidades zero-day",
        "Supply chain attacks",
        "Compromiso de credenciales"
      ],
      color: "#f59e0b"
    },
    {
      phase: 3,
      icon: <Upload size={40} />,
      title: "Establecimiento",
      duration: "Horas a Días",
      description: "Instalación de backdoors y herramientas persistentes para mantener acceso continuo al sistema",
      activities: [
        "Instalación de RAT (Remote Access Trojans)",
        "Creación de cuentas de usuario ocultas",
        "Modificación de servicios del sistema",
        "Establecimiento de comunicación C&C",
        "Instalación de rootkits"
      ],
      color: "#ef4444"
    },
    {
      phase: 4,
      icon: <Users size={40} />,
      title: "Escalación y Movimiento Lateral",
      duration: "Días a Semanas",
      description: "Obtención de privilegios elevados y expansión del acceso a través de la red organizacional",
      activities: [
        "Escalación de privilegios",
        "Harvesting de credenciales",
        "Pass-the-hash attacks",
        "Exploración de Active Directory",
        "Compromiso de servidores críticos"
      ],
      color: "#8b5cf6"
    },
    {
      phase: 5,
      icon: <Database size={40} />,
      title: "Recolección de Datos",
      duration: "Semanas a Meses",
      description: "Identificación, acceso y preparación de información valiosa para exfiltración",
      activities: [
        "Mapeo de bases de datos",
        "Acceso a sistemas de archivos",
        "Identificación de propiedad intelectual",
        "Recolección de emails corporativos",
        "Documentación de procesos críticos"
      ],
      color: "#10b981"
    },
    {
      phase: 6,
      icon: <Download size={40} />,
      title: "Exfiltración",
      duration: "Días a Meses",
      description: "Transferencia sigilosa de datos valiosos hacia infraestructura controlada por los atacantes",
      activities: [
        "Cifrado de datos robados",
        "Transferencia en pequeños paquetes",
        "Uso de canales legítimos (cloud storage)",
        "Tunneling a través de protocolos comunes",
        "Eliminación de rastros de transferencia"
      ],
      color: "#f97316"
    },
    {
      phase: 7,
      icon: <Trash2 size={40} />,
      title: "Mantenimiento/Limpieza",
      duration: "Continuo",
      description: "Preservación del acceso continuo y eliminación de evidencias para evitar detección",
      activities: [
        "Actualización de malware",
        "Rotación de infraestructura C&C",
        "Borrado de logs del sistema",
        "Mantenimiento de backdoors",
        "Adaptación a nuevas medidas de seguridad"
      ],
      color: "#6b7280"
    }
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 64, 175, 0.2))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">⚙️ ¿Cómo Funcionan las APT?</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              Las APT ejecutan campañas altamente <strong style={{ color: '#ef4444' }}>estructuradas</strong> y 
              <strong style={{ color: '#3b82f6' }}> metodológicas</strong> que pueden extenderse durante años.
            </p>
          </div>

          {/* Cycle Overview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(59, 130, 246, 0.4)',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            <Activity size={50} style={{ color: '#60a5fa', marginBottom: '1rem' }} />
            <h3 style={{ color: '#93c5fd', fontSize: '1.6rem', marginBottom: '1rem' }}>
              Ciclo de Vida APT
            </h3>
            <p style={{ color: '#dbeafe', fontSize: '1.1rem', lineHeight: '1.6' }}>
              Un ataque APT típico sigue un patrón de <strong>7 fases interconectadas</strong>, 
              cada una diseñada para maximizar el sigilo y la efectividad del ataque.
            </p>
          </motion.div>

          {/* Phases */}
          <div>
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ 
                  marginBottom: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem'
                }}
              >
                {/* Phase number and icon */}
                <div style={{ 
                  minWidth: '120px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${phase.color}, ${phase.color}90)`,
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'white'
                  }}>
                    {phase.icon}
                  </div>
                  <div style={{
                    background: phase.color,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}>
                    Fase {phase.phase}
                  </div>
                </div>

                {/* Arrow */}
                {index < phases.length - 1 && (
                  <ArrowRight 
                    size={30} 
                    style={{ 
                      color: '#60a5fa',
                      minWidth: '30px'
                    }} 
                  />
                )}

                {/* Content */}
                <div className="card" style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <h3 style={{ 
                      color: phase.color,
                      fontSize: '1.4rem'
                    }}>
                      {phase.title}
                    </h3>
                    <span style={{
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#93c5fd',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {phase.duration}
                    </span>
                  </div>
                  
                  <p style={{ 
                    color: '#e2e8f0',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {phase.description}
                  </p>
                  
                  <div>
                    <h4 style={{ 
                      color: '#94a3b8',
                      fontSize: '1rem',
                      marginBottom: '0.8rem'
                    }}>
                      Actividades Típicas:
                    </h4>
                    <ul style={{ 
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '0.5rem',
                      listStyle: 'none',
                      padding: 0
                    }}>
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} style={{
                          background: 'rgba(30, 64, 175, 0.1)',
                          padding: '0.5rem 0.8rem',
                          borderRadius: '6px',
                          color: '#cbd5e1',
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <span style={{ 
                            color: phase.color, 
                            marginRight: '0.5rem',
                            fontSize: '0.8rem'
                          }}>
                            ▸
                          </span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ 
              color: '#fca5a5',
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              🔄 Naturaleza Cíclica
            </h3>
            <p style={{ 
              color: '#fecaca', 
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}>
              Las APT no son ataques lineales, sino <strong>ciclos continuos</strong> donde los 
              atacantes pueden volver a fases anteriores, mantener presencia dormida durante meses, 
              y reactivar operaciones según objetivos estratégicos. Esta persistencia los convierte 
              en una de las amenazas más <strong>desafiantes de detectar y neutralizar</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection