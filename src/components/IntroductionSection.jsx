import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Computer, Users, Clock, Crosshair } from 'lucide-react'

const IntroductionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const aptComponents = [
    {
      icon: <Computer size={50} />,
      title: "Advanced",
      subtitle: "Avanzado",
      description: "Utilizan técnicas sofisticadas y herramientas de última generación para comprometer sistemas"
    },
    {
      icon: <Clock size={50} />,
      title: "Persistent", 
      subtitle: "Persistente",
      description: "Mantienen acceso prolongado y continuo a los sistemas comprometidos durante meses o años"
    },
    {
      icon: <Crosshair size={50} />,
      title: "Threat",
      subtitle: "Amenaza", 
      description: "Representan un peligro real y significativo para la seguridad de la información"
    }
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(45deg, rgba(30, 64, 175, 0.1), rgba(15, 23, 42, 0.9))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">🔍 ¿Qué son las APT?</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Las <strong style={{ color: '#ef4444' }}>Advanced Persistent Threats (APT)</strong> son 
              ataques cibernéticos prolongados y sigilosos, generalmente patrocinados por 
              <strong style={{ color: '#3b82f6' }}> estados-nación</strong> o 
              <strong style={{ color: '#3b82f6' }}> grupos organizados</strong>, dirigidos a 
              objetivos específicos de alto valor.
            </p>
          </div>

          <div className="grid grid-3" style={{ marginBottom: '3rem' }}>
            {aptComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="card"
                style={{ textAlign: 'center' }}
              >
                <div style={{ 
                  color: '#ef4444',
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {component.icon}
                </div>
                <h3 style={{ 
                  color: '#60a5fa', 
                  fontSize: '1.6rem',
                  marginBottom: '0.5rem'
                }}>
                  {component.title}
                </h3>
                <h4 style={{ 
                  color: '#94a3b8', 
                  fontSize: '1.2rem',
                  marginBottom: '1rem',
                  fontStyle: 'italic'
                }}>
                  {component.subtitle}
                </h4>
                <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                  {component.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="card"
            style={{ 
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(239, 68, 68, 0.3)'
            }}
          >
            <h3 style={{ 
              color: '#fca5a5', 
              fontSize: '1.5rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <Users size={30} />
              Características Clave
            </h3>
            <ul className="feature-list">
              <li>🎯 <strong>Objetivo específico:</strong> Dirigidos a organizaciones o individuos particulares</li>
              <li>🕐 <strong>Duración prolongada:</strong> Permanecen ocultos durante meses o años</li>
              <li>🔧 <strong>Herramientas sofisticadas:</strong> Malware personalizado y técnicas avanzadas</li>
              <li>💰 <strong>Recursos abundantes:</strong> Financiamiento significativo y equipos especializados</li>
              <li>🎭 <strong>Sigilo extremo:</strong> Evitan la detección mediante técnicas de evasión</li>
              <li>💎 <strong>Datos valiosos:</strong> Buscan información confidencial, propiedad intelectual o secretos</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroductionSection