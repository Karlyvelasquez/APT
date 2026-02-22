import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CheckCircle, 
  TrendingUp, 
  Globe, 
  Users,
  Lightbulb,
  ArrowRight,
  Shield,
  AlertTriangle
} from 'lucide-react'

const ConclusionsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const keyFindings = [
    {
      icon: <TrendingUp size={30} />,
      title: "Crecimiento Exponencial",
      finding: "Las APT han aumentado un 40% en 2024, consolidándose como la amenaza más sofisticada del panorama cibernético actual.",
      implication: "Las organizaciones deben priorizar la ciberseguridad como un componente estratégico fundamental."
    },
    {
      icon: <Globe size={30} />,
      title: "Impacto Geopolítico",
      finding: "Las APT han trascendido el crimen cibernético para convertirse en herramientas de guerra híbrida y espionaje estatal.",
      implication: "La ciberseguridad es ahora un asunto de seguridad nacional que requiere cooperación internacional."
    },
    {
      icon: <Users size={30} />,
      title: "Factor Humano Crítico",
      finding: "El 85% de ataques APT exitosos explotan vulnerabilidades humanas a través de ingeniería social avanzada.",
      implication: "La capacitación y concienciación del personal son tan importantes como las soluciones tecnológicas."
    },
    {
      icon: <Shield size={30} />,
      title: "Defensa Multicapa", 
      finding: "Los enfoques de seguridad tradicionales son insuficientes; se requieren estrategias de Zero Trust y defense in depth.",
      implication: "La transformación hacia arquitecturas de seguridad modernas ya no es opcional sino imperativa."
    }
  ]

  const futureOutlook = [
    {
      trend: "IA y Machine Learning",
      description: "Los atacantes usarán IA para automatizar y personalizar ataques a escala masiva",
      timeline: "2025-2027",
      impact: "Alto"
    },
    {
      trend: "Quantum Computing Threats",
      description: "La computación cuántica amenazará los sistemas criptográficos actuales",
      timeline: "2030+",
      impact: "Crítico"
    },
    {
      trend: "Supply Chain Attacks",
      description: "Incremento de ataques a proveedores y cadenas de suministro tecnológico",
      timeline: "2024-2026",
      impact: "Alto"
    },
    {
      trend: "IoT y Edge Computing",
      description: "Expansión de superficies de ataque debido a dispositivos IoT y edge computing",
      timeline: "2024-2028",
      impact: "Medio-Alto"
    }
  ]

  const actionableInsights = [
    "Implementar Zero Trust Architecture debe ser una prioridad organizacional inmediata",
    "Invertir en threat hunting proactivo y threat intelligence compartida",
    "Desarrollar capacidades internas de respuesta a incidentes especializadas en APT",
    "Establecer programas continuos de awareness y training para empleados",
    "Crear partnerships estratégicos para compartir inteligencia de amenazas",
    "Implementar ejercicios regulares de red team/blue team y tabletop exercises"
  ]

  const colombianContext = [
    {
      challenge: "Brecha de Talento",
      description: "Escasez de profesionales especializados en threat hunting y incident response",
      recommendation: "Invertir en educación y certificaciones especializadas en ciberseguridad"
    },
    {
      challenge: "Coordinación Sectorial",
      description: "Falta de información compartida entre sectores críticos",
      recommendation: "Fortalecer el CSIRT nacional y crear CTI sharing platforms"
    },
    {
      challenge: "Modernización Tecnológica",
      description: "Infrastructure legacy vulnerable a ataques APT avanzados",
      recommendation: "Desarrollar roadmaps de modernización con enfoque security-first"
    }
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(15, 23, 42, 0.95))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">🎯 Conclusiones</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8' }}>
              Las <strong style={{ color: '#ef4444' }}>Amenazas Persistentes Avanzadas</strong> representan 
              uno de los <strong style={{ color: '#3b82f6' }}>desafíos más complejos</strong> de la 
              ciberseguridad moderna, requiriendo respuestas <strong style={{ color: '#10b981' }}>innovadoras 
              y colaborativas</strong>.
            </p>
          </div>

          {/* Key Findings */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ 
              textAlign: 'center',
              color: '#60a5fa',
              fontSize: '2rem',
              marginBottom: '2rem'
            }}>
              📋 Hallazgos Principales
            </h3>
            
            <div className="grid grid-2">
              {keyFindings.map((finding, index) => (
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
                      color: '#3b82f6',
                      background: 'rgba(59, 130, 246, 0.1)',
                      padding: '0.8rem',
                      borderRadius: '12px'
                    }}>
                      {finding.icon}
                    </div>
                    <h4 style={{ 
                      color: '#60a5fa',
                      fontSize: '1.3rem'
                    }}>
                      {finding.title}
                    </h4>
                  </div>
                  
                  <div style={{
                    background: 'rgba(30, 64, 175, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(30, 64, 175, 0.3)',
                    marginBottom: '1rem'
                  }}>
                    <p style={{ 
                      color: '#e2e8f0',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      {finding.finding}
                    </p>
                  </div>
                  
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <Lightbulb size={18} style={{ color: '#6ee7b7' }} />
                      <strong style={{ color: '#6ee7b7', fontSize: '0.9rem' }}>Implicación:</strong>
                    </div>
                    <p style={{ 
                      color: '#a7f3d0',
                      lineHeight: '1.6',
                      fontSize: '0.95rem'
                    }}>
                      {finding.implication}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Future Outlook */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ marginBottom: '4rem' }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#fbbf24',
              fontSize: '2rem',
              marginBottom: '2rem'
            }}>
              🔮 Perspectivas Futuras
            </h3>
            
            <div className="grid grid-2">
              {futureOutlook.map((outlook, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="card"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(15, 23, 42, 0.8))',
                    border: '2px solid rgba(245, 158, 11, 0.3)'
                  }}
                >
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <h4 style={{ 
                      color: '#fbbf24',
                      fontSize: '1.2rem'
                    }}>
                      {outlook.trend}
                    </h4>
                    <span style={{
                      background: outlook.impact === 'Crítico' ? '#ef444450' : 
                                 outlook.impact === 'Alto' ? '#f59e0b50' : '#10b98150',
                      color: outlook.impact === 'Crítico' ? '#fca5a5' : 
                             outlook.impact === 'Alto' ? '#fed7aa' : '#a7f3d0',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}>
                      {outlook.impact}
                    </span>
                  </div>
                  
                  <p style={{ 
                    color: '#fed7aa',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {outlook.description}
                  </p>
                  
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: '#d97706', fontSize: '0.9rem' }}>
                      Timeline:
                    </span>
                    <span style={{ 
                      background: 'rgba(217, 119, 6, 0.3)',
                      color: '#fed7aa',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem'
                    }}>
                      {outlook.timeline}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Actionable Insights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              marginBottom: '3rem'
            }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#6ee7b7',
              fontSize: '1.8rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle size={40} />
              Recomendaciones Estratégicas
            </h3>
            
            <div style={{ 
              display: 'grid',
              gap: '1rem'
            }}>
              {actionableInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.2rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <ArrowRight size={20} style={{ 
                    color: '#10b981', 
                    marginRight: '1rem',
                    flexShrink: 0
                  }} />
                  <span style={{ 
                    color: '#d1fae5',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {insight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Colombian Context */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(252, 211, 77, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(252, 211, 77, 0.4)',
              marginBottom: '3rem'
            }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#fbbf24',
              fontSize: '1.8rem',
              marginBottom: '2rem'
            }}>
              🇨🇴 Contexto Colombiano
            </h3>
            
            <div className="grid grid-3">
              {colombianContext.map((context, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                  style={{
                    background: 'rgba(217, 119, 6, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(217, 119, 6, 0.3)'
                  }}
                >
                  <h4 style={{ 
                    color: '#fed7aa',
                    fontSize: '1.1rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <AlertTriangle size={20} />
                    {context.challenge}
                  </h4>
                  
                  <p style={{ 
                    color: '#fde68a',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    marginBottom: '1rem'
                  }}>
                    {context.description}
                  </p>
                  
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    padding: '0.8rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    <p style={{ 
                      color: '#a7f3d0',
                      fontSize: '0.85rem',
                      lineHeight: '1.5'
                    }}>
                      <strong>Recomendación:</strong> {context.recommendation}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.3), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(245, 158, 11, 0.5)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ 
              color: '#fbbf24',
              fontSize: '1.8rem',
              marginBottom: '1.5rem'
            }}>
              💡 Reflexión Final
            </h3>
            <p style={{ 
              color: '#fde68a',
              fontSize: '1.2rem',
              lineHeight: '1.8',
              marginBottom: '1rem'
            }}>
              Las APT no son simplemente una amenaza tecnológica, sino un <strong>reflejo de las tensiones geopolíticas</strong> 
              del mundo moderno. Su naturaleza evolutiva requiere que las organizaciones adopten una 
              <strong> mentalidad de mejora continua</strong> en ciberseguridad.
            </p>
            <p style={{ 
              color: '#fed7aa',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}>
              La <strong>colaboración</strong>, la <strong>inversión</strong> en capacidades humanas y tecnológicas, 
              y la <strong>adaptación constante</strong> son las claves para enfrentar exitosamente 
              este desafío del siglo XXI.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConclusionsSection