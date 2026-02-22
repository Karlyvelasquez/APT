import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Eye, 
  Users, 
  BookOpen, 
  AlertTriangle,
  Lock,
  Network,
  Activity,
  CheckCircle,
  XCircle
} from 'lucide-react'

const PreventionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const preventionStrategies = [
    {
      category: "Defensa Técnica",
      icon: <Lock size={40} />,
      color: "#3b82f6",
      strategies: [
        {
          title: "Segmentación de Red",
          description: "Aislar sistemas críticos y limitar movimiento lateral",
          implementation: "Zero Trust, microsegmentación, VLANs"
        },
        {
          title: "Multi-Factor Authentication",
          description: "Implementar MFA robusto en todos los accesos críticos",
          implementation: "FIDO2, authenticators físicos, biometría"
        },
        {
          title: "Endpoint Detection & Response",
          description: "Monitoreo avanzado de endpoints y respuesta automática",
          implementation: "EDR/XDR, behavioral analysis, sandboxing"
        },
        {
          title: "Gestión de Vulnerabilidades",
          description: "Identificación y parcheo proactivo de vulnerabilidades",
          implementation: "Vulnerability scanning, patch management, zero-day protection"
        }
      ]
    },
    {
      category: "Detección y Monitoreo",
      icon: <Eye size={40} />,
      color: "#10b981",
      strategies: [
        {
          title: "SIEM/SOAR Integration",
          description: "Correlación avanzada de eventos y respuesta automatizada",
          implementation: "Log aggregation, threat intelligence feeds, playbooks"
        },
        {
          title: "Network Traffic Analysis",
          description: "Análisis de comportamiento de tráfico y detección de anomalías",
          implementation: "DPI, flow analysis, machine learning detection"
        },
        {
          title: "Threat Intelligence",
          description: "Inteligencia proactiva de amenazas y IOCs",
          implementation: "MITRE ATT&CK, IOC feeds, threat hunting"
        },
        {
          title: "Honeypots y Deception",
          description: "Sistemas señuelo para detectar intrusiones tempranas",
          implementation: "Decoy systems, canary tokens, deception networks"
        }
      ]
    },
    {
      category: "Factor Humano",
      icon: <Users size={40} />,
      color: "#f59e0b",
      strategies: [
        {
          title: "Awareness Training",
          description: "Capacitación continua en ciberseguridad para empleados",
          implementation: "Phishing simulation, security awareness, incident reporting"
        },
        {
          title: "Insider Threat Program",
          description: "Detección y prevención de amenazas internas",
          implementation: "User behavior analytics, access reviews, psychological screening"
        },
        {
          title: "Incident Response Team",
          description: "Equipo especializado en respuesta a incidentes APT",
          implementation: "CSIRT, forensics capabilities, communication plans"
        },
        {
          title: "Security Culture",
          description: "Cultura organizacional enfocada en seguridad",
          implementation: "Leadership engagement, security metrics, reward programs"
        }
      ]
    },
    {
      category: "Governance y Gestión",
      icon: <BookOpen size={40} />,
      color: "#ef4444",
      strategies: [
        {
          title: "Cyber Risk Assessment",
          description: "Evaluación continua de riesgos cibernéticos",
          implementation: "Risk frameworks, threat modeling, impact analysis"
        },
        {
          title: "Supply Chain Security",
          description: "Seguridad en la cadena de suministro tecnológica",
          implementation: "Vendor assessment, SBOMs, third-party monitoring"
        },
        {
          title: "Business Continuity",
          description: "Planes de continuidad ante incidentes APT",
          implementation: "BCP/DRP, backup strategies, crisis communication"
        },
        {
          title: "Compliance Management",
          description: "Cumplimiento de marcos regulatorios de ciberseguridad",
          implementation: "ISO 27001, NIST, SOC 2, industry standards"
        }
      ]
    }
  ]

  const bestPractices = [
    {
      practice: "Implementar Zero Trust Architecture",
      description: "Never trust, always verify - verificar cada acceso independientemente",
      priority: "Alta",
      difficulty: "Alta"
    },
    {
      practice: "Realizar Threat Hunting Proactivo", 
      description: "Búsqueda activa de amenazas antes de que causen daño",
      priority: "Alta",
      difficulty: "Media"
    },
    {
      practice: "Mantener Inventario de Activos Actualizado",
      description: "Conocer todos los activos para protegerlos adecuadamente",
      priority: "Media",
      difficulty: "Baja"
    },
    {
      practice: "Ejercicios de Red Team/Blue Team",
      description: "Simulacros regulares de ataques APT para evaluar defensas",
      priority: "Alta",
      difficulty: "Alta"
    },
    {
      practice: "Backup y Recovery Resiliente",
      description: "Copias de seguridad inmutables y planes de recuperación probados",
      priority: "Alta",
      difficulty: "Media"
    },
    {
      practice: "Threat Intelligence Sharing",
      description: "Compartir e intercambiar inteligencia de amenazas con la industria",
      priority: "Media",
      difficulty: "Baja"
    }
  ]

  const commonMistakes = [
    "Dependencia excesiva en herramientas de signature-based detection",
    "Falta de segmentación de red y privilegios excesivos",  
    "Tiempo de respuesta a incidentes demasiado lento",
    "Capacitación de seguridad inadecuada para empleados",
    "Monitoreo insuficiente de terceros y proveedores",
    "Planes de respuesta a incidentes desactualizados o no probados"
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(15, 23, 42, 0.9))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">🛡️ Prevención y Mitigación</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              La defensa contra APT requiere un enfoque <strong style={{ color: '#10b981' }}>multidimensional</strong> 
              que combine <strong style={{ color: '#3b82f6' }}>tecnología avanzada</strong>, 
              <strong style={{ color: '#f59e0b' }}>capacitación humana</strong> y 
              <strong style={{ color: '#ef4444' }}>governance sólida</strong>.
            </p>
          </div>

          {/* Prevention Strategies by Category */}
          {preventionStrategies.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: categoryIndex % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.3 }}
              style={{ marginBottom: '4rem' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                gap: '1rem'
              }}>
                <div style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 style={{ 
                  color: category.color,
                  fontSize: '2rem'
                }}>
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-2">
                {category.strategies.map((strategy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.3 + index * 0.1 }}
                    className="card"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}15, rgba(15, 23, 42, 0.8))`,
                      border: `2px solid ${category.color}40`
                    }}
                  >
                    <h4 style={{ 
                      color: category.color,
                      fontSize: '1.3rem',
                      marginBottom: '1rem'
                    }}>
                      {strategy.title}
                    </h4>
                    
                    <p style={{ 
                      color: '#e2e8f0',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}>
                      {strategy.description}
                    </p>
                    
                    <div style={{
                      background: 'rgba(30, 64, 175, 0.1)',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(30, 64, 175, 0.3)'
                    }}>
                      <h5 style={{ 
                        color: '#93c5fd', 
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem'
                      }}>
                        Implementación:
                      </h5>
                      <p style={{ 
                        color: '#cbd5e1', 
                        fontSize: '0.85rem',
                        lineHeight: '1.5'
                      }}>
                        {strategy.implementation}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Best Practices */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ marginBottom: '4rem' }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#6ee7b7',
              fontSize: '2rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle size={40} />
              Mejores Prácticas
            </h3>
            
            <div className="grid grid-2">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="prevention-step"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(15, 23, 42, 0.8))',
                    border: '2px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <div className="step-number" style={{ background: '#10b981' }}>
                    {index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ 
                      color: '#6ee7b7',
                      fontSize: '1.1rem',
                      marginBottom: '0.5rem'
                    }}>
                      {practice.practice}
                    </h4>
                    <p style={{ 
                      color: '#a7f3d0',
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                      marginBottom: '0.8rem'
                    }}>
                      {practice.description}
                    </p>
                    <div style={{ 
                      display: 'flex',
                      gap: '1rem'
                    }}>
                      <span style={{
                        background: practice.priority === 'Alta' ? '#ef444450' : '#f59e0b50',
                        color: practice.priority === 'Alta' ? '#fca5a5' : '#fed7aa',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '8px',
                        fontSize: '0.8rem'
                      }}>
                        Prioridad: {practice.priority}
                      </span>
                      <span style={{
                        background: practice.difficulty === 'Alta' ? '#8b5cf650' : 
                                  practice.difficulty === 'Media' ? '#f59e0b50' : '#10b98150',
                        color: practice.difficulty === 'Alta' ? '#c4b5fd' : 
                               practice.difficulty === 'Media' ? '#fed7aa' : '#a7f3d0',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '8px',
                        fontSize: '0.8rem'
                      }}>
                        Dificultad: {practice.difficulty}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Common Mistakes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(239, 68, 68, 0.4)'
            }}
          >
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem',
              gap: '0.5rem'
            }}>
              <XCircle size={40} style={{ color: '#fca5a5' }} />
              <h3 style={{ 
                color: '#fca5a5',
                fontSize: '1.8rem'
              }}>
                Errores Comunes a Evitar
              </h3>
            </div>
            
            <div className="grid grid-2">
              {commonMistakes.map((mistake, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    background: 'rgba(220, 38, 38, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(220, 38, 38, 0.3)',
                    marginBottom: '1rem'
                  }}
                >
                  <AlertTriangle size={24} style={{ 
                    color: '#fca5a5', 
                    marginRight: '1rem',
                    flexShrink: 0
                  }} />
                  <span style={{ 
                    color: '#fecaca',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    {mistake}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Implementation Roadmap */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(59, 130, 246, 0.4)',
              textAlign: 'center',
              marginTop: '3rem'
            }}
          >
            <Activity size={50} style={{ color: '#60a5fa', marginBottom: '1rem' }} />
            <h3 style={{ 
              color: '#93c5fd',
              fontSize: '1.8rem',
              marginBottom: '1rem'
            }}>
              Implementación Exitosa
            </h3>
            <p style={{ 
              color: '#dbeafe',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}>
              La defensa efectiva contra APT no es un proyecto sino un <strong>proceso continuo</strong> 
              que requiere <strong>inversión sostenida</strong>, <strong>colaboración interdisciplinaria</strong> 
              y <strong>adaptación constante</strong> a las nuevas amenazas. El éxito se mide no solo 
              por la prevención de ataques, sino por la <strong>capacidad de respuesta rápida</strong> 
              y <strong>recuperación resiliente</strong>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PreventionSection