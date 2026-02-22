import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Eye, 
  Clock, 
  Target, 
  Layers, 
  Zap, 
  Lock,
  Users,
  Database,
  Network,
  Shield
} from 'lucide-react'

const CharacteristicsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const mainCharacteristics = [
    {
      icon: <Eye size={40} />,
      title: "Sigilo y Evasión",
      description: "Operan de manera sigilosa para evitar detección durante largos períodos",
      details: [
        "Técnicas de living-off-the-land",
        "Cifrado de comunicaciones",
        "Uso de herramientas legítimas del sistema",
        "Borrado de logs y evidencias"
      ]
    },
    {
      icon: <Clock size={40} />,
      title: "Persistencia Temporal",
      description: "Mantienen acceso continuo a sistemas comprometidos durante meses o años",
      details: [
        "Múltiples backdoors",
        "Actualizaciones remotas de malware",
        "Redundancia en puntos de acceso",
        "Monitoreo continuo de objetivos"
      ]
    },
    {
      icon: <Target size={40} />,
      title: "Objetivos Específicos",
      description: "Dirigidos a organizaciones, sectores o individuos particulares de alto valor",
      details: [
        "Investigación previa extensiva",
        "Personalización de ataques",
        "Análisis de vulnerabilidades específicas",
        "Adaptación a infraestructura objetivo"
      ]
    },
    {
      icon: <Layers size={40} />,
      title: "Operaciones Multi-Etapa",
      description: "Ejecutan campañas complejas con múltiples fases y objetivos intermedios",
      details: [
        "Reconocimiento inicial",
        "Infiltración y escalación",
        "Movimiento lateral",
        "Exfiltración de datos"
      ]
    }
  ]

  const technicalFeatures = [
    {
      icon: <Lock size={30} />,
      title: "Malware Personalizado",
      description: "Desarrollo de herramientas específicas para cada objetivo"
    },
    {
      icon: <Network size={30} />,
      title: "Infraestructura Robusta",
      description: "Redes de servidores C&C distribuidas globalmente"
    },
    {
      icon: <Users size={30} />,
      title: "Equipos Especializados",
      description: "Grupos organizados con roles específicos y expertise técnico"
    },
    {
      icon: <Database size={30} />,
      title: "Inteligencia Avanzada",
      description: "Recolección y análisis profundo de información de objetivos"
    }
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(45deg, rgba(239, 68, 68, 0.1), rgba(15, 23, 42, 0.9))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">🔧 Características de las APT</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              Las APT se distinguen por su 
              <strong style={{ color: '#ef4444' }}> sofisticación técnica</strong>, 
              <strong style={{ color: '#3b82f6' }}> planificación estratégica</strong> y 
              <strong style={{ color: '#10b981' }}> recursos abundantes</strong>.
            </p>
          </div>

          {/* Características principales */}
          <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
            {mainCharacteristics.map((characteristic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card"
              >
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  gap: '1rem'
                }}>
                  <div style={{ 
                    color: '#ef4444',
                    background: 'rgba(239, 68, 68, 0.1)',
                    padding: '0.8rem',
                    borderRadius: '12px'
                  }}>
                    {characteristic.icon}
                  </div>
                  <h3 style={{ 
                    color: '#60a5fa',
                    fontSize: '1.4rem'
                  }}>
                    {characteristic.title}
                  </h3>
                </div>
                
                <p style={{ 
                  color: '#e2e8f0',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {characteristic.description}
                </p>
                
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {characteristic.details.map((detail, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.8rem',
                      padding: '0.5rem',
                      background: 'rgba(30, 64, 175, 0.1)',
                      borderRadius: '6px'
                    }}>
                      <Zap size={16} style={{ 
                        color: '#fbbf24', 
                        marginRight: '0.8rem',
                        flexShrink: 0
                      }} />
                      <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Características técnicas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#60a5fa',
              fontSize: '2rem',
              marginBottom: '2rem'
            }}>
              Aspectos Técnicos Avanzados
            </h3>
            
            <div className="grid grid-2">
              {technicalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                  className="card"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(15, 23, 42, 0.8))',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div style={{ 
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '0.8rem',
                    borderRadius: '8px'
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 style={{ 
                      color: '#6ee7b7',
                      fontSize: '1.2rem',
                      marginBottom: '0.5rem'
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{ color: '#d1fae5', fontSize: '0.95rem' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Diferenciación con otras amenazas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.3), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(245, 158, 11, 0.4)',
              marginTop: '3rem'
            }}
          >
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              gap: '0.5rem'
            }}>
              <Shield size={30} style={{ color: '#f59e0b' }} />
              <h3 style={{ 
                color: '#fbbf24',
                fontSize: '1.5rem'
              }}>
                Diferencias con Otras Amenazas
              </h3>
            </div>
            
            <div className="grid grid-3">
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ color: '#ef4444', marginBottom: '1rem' }}>APT</h4>
                <ul style={{ color: '#fecaca', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <li>• Objetivos específicos</li>
                  <li>• Larga duración</li>
                  <li>• Recursos abundantes</li>
                  <li>• Sigilo avanzado</li>
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ color: '#f59e0b', marginBottom: '1rem' }}>Malware Común</h4>
                <ul style={{ color: '#fed7aa', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <li>• Ataques masivos</li>
                  <li>• Efectos inmediatos</li>
                  <li>• Recursos limitados</li>
                  <li>• Fácil detección</li>
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ color: '#10b981', marginBottom: '1rem' }}>Ransomware</h4>
                <ul style={{ color: '#a7f3d0', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <li>• Ganancia inmediata</li>
                  <li>• Efectos visibles</li>
                  <li>• Operaciones cortas</li>
                  <li>• Impacto evidente</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CharacteristicsSection