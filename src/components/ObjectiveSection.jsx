import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Eye, BookOpen, Shield } from 'lucide-react'

const ObjectiveSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const objectives = [
    {
      icon: <Eye size={40} />,
      title: "Identificar",
      description: "Las diferentes amenazas APT y sus características distintivas"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Analizar",
      description: "El funcionamiento, origen y evolución de las amenazas persistentes avanzadas"
    },
    {
      icon: <Shield size={40} />,
      title: "Implementar",
      description: "Estrategias de prevención y mitigación contra ataques APT"
    },
    {
      icon: <Target size={40} />,
      title: "Evaluar",
      description: "El impacto de APT en organizaciones colombianas e internacionales"
    }
  ]

  return (
    <section className="section" style={{ background: 'rgba(15, 23, 42, 0.9)' }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">🎯 Objetivos</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p>
              Esta presentación tiene como propósito profundizar en el conocimiento de las 
              <strong style={{ color: '#ef4444' }}> Amenazas Persistentes Avanzadas (APT)</strong>, 
              analizando su impacto en la ciberseguridad moderna.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '2rem' }}>
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                <div style={{ 
                  color: '#3b82f6',
                  background: 'rgba(59, 130, 246, 0.1)',
                  padding: '1rem',
                  borderRadius: '12px'
                }}>
                  {objective.icon}
                </div>
                <div>
                  <h3 style={{ 
                    color: '#60a5fa', 
                    fontSize: '1.4rem',
                    marginBottom: '0.5rem'
                  }}>
                    {objective.title}
                  </h3>
                  <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                    {objective.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ObjectiveSection