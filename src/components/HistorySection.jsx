import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Globe, Zap, AlertTriangle } from 'lucide-react'

const HistorySection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const timeline = [
    {
      year: "1996",
      event: "Moonlight Maze",
      description: "Uno de los primeros APT documentados. Atacantes rusos infiltraron sistemas del gobierno estadounidense durante varios años.",
      impact: "Estableció el patrón de ataques estatales prolongados"
    },
    {
      year: "2003",
      event: "Acuñación del término 'APT'",
      description: "La Fuerza Aérea de Estados Unidos acuña oficialmente el término 'Advanced Persistent Threat'.",
      impact: "Formalización del concepto en la industria de ciberseguridad"
    },
    {
      year: "2010",
      event: "Stuxnet",
      description: "Primer malware conocido diseñado específicamente para dañar infraestructura crítica (centrifugadoras nucleares iraníes).",
      impact: "Demostró el potencial destructivo de APT en infraestructura física"
    },
    {
      year: "2013",
      event: "APT1 (Comment Crew)",
      description: "Mandiant publica reporte detallado sobre el grupo APT1 del Ejército Popular de Liberación de China.",
      impact: "Primera exposición pública masiva de un grupo APT específico"
    },
    {
      year: "2014",
      event: "Sony Pictures",
      description: "Ataque atribuido a Corea del Norte que comprometió completamente la red corporativa de Sony.",
      impact: "Mostró cómo APT puede causar daños reputacionales y financieros masivos"
    },
    {
      year: "2016",
      event: "Interferencia Electoral",
      description: "APT28 y APT29 (grupos rusos) interfieren en elecciones estadounidenses mediante campañas de desinformación.",
      impact: "Expansión de APT hacia operaciones de influencia política"
    },
    {
      year: "2020-2024",
      event: "Era COVID y Actual",
      description: "Proliferación masiva de APT aprovechando trabajo remoto, ataques a cadenas de suministro y ransomware estatal.",
      impact: "Evolución hacia ataques más sofisticados y frecuentes"
    }
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 64, 175, 0.1))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">📚 Historia y Antecedentes</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              La evolución de las APT refleja la creciente sofisticación de la 
              <strong style={{ color: '#ef4444' }}> guerra cibernética</strong> y el 
              <strong style={{ color: '#3b82f6' }}> espionaje digital</strong> en el siglo XXI.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50px',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(to bottom, #3b82f6, #ef4444)',
              zIndex: 1
            }} />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="timeline-item"
                style={{ marginBottom: '2.5rem' }}
              >
                <div className="card" style={{
                  background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(15, 23, 42, 0.8))',
                  border: '2px solid rgba(59, 130, 246, 0.3)'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '1rem',
                    gap: '1rem'
                  }}>
                    <Calendar size={24} style={{ color: '#60a5fa' }} />
                    <span style={{ 
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#ef4444'
                    }}>
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 style={{ 
                    color: '#60a5fa',
                    fontSize: '1.4rem',
                    marginBottom: '1rem'
                  }}>
                    {item.event}
                  </h3>
                  
                  <p style={{ 
                    color: '#e2e8f0',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {item.description}
                  </p>
                  
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.1)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(239, 68, 68, 0.3)'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <Zap size={20} style={{ color: '#fca5a5' }} />
                      <strong style={{ color: '#fca5a5' }}>Impacto:</strong>
                    </div>
                    <p style={{ color: '#fecaca' }}>
                      {item.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              textAlign: 'center'
            }}
          >
            <Globe size={40} style={{ color: '#34d399', marginBottom: '1rem' }} />
            <h3 style={{ color: '#6ee7b7', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Tendencia Actual
            </h3>
            <p style={{ color: '#d1fae5', fontSize: '1.2rem', lineHeight: '1.6' }}>
              En 2024, se reporta un <strong>aumento del 40%</strong> en actividades APT, 
              con mayor sofisticación en técnicas de evasión, uso de IA para automatización 
              de ataques, y expansión hacia sectores críticos como salud, energía y finanzas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HistorySection