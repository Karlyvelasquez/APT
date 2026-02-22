import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Brain, 
  ExternalLink, 
  Users, 
  Trophy,
  Clock,
  Target,
  CheckCircle
} from 'lucide-react'

const QuizSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const quizPreview = [
    {
      question: "¿Cuál es la principal diferencia entre un malware común y una APT?",
      difficulty: "Básico"
    },
    {
      question: "¿Qué grupo APT fue responsable del ataque a SolarWinds en 2020?",
      difficulty: "Intermedio"
    },
    {
      question: "¿Cuántos días en promedio permanece sin detectar un ataque APT?",
      difficulty: "Intermedio"
    },
    {
      question: "¿Qué técnica de Zero Trust es más efectiva contra movimiento lateral APT?",
      difficulty: "Avanzado"
    },
    {
      question: "¿Cuál fue el primer malware APT dirigido a infraestructura física?",
      difficulty: "Básico"
    }
  ]

  const quizStats = [
    {
      icon: <Target size={30} />,
      label: "Preguntas",
      value: "5",
      description: "Cubriendo todos los aspectos de APT"
    },
    {
      icon: <Clock size={30} />,
      label: "Duración",
      value: "10 min",
      description: "Tiempo estimado para completar"
    },
    {
      icon: <Users size={30} />,
      label: "Participantes",
      value: "Todos",
      description: "Abierto para toda la audiencia"
    },
    {
      icon: <Trophy size={30} />,
      label: "Dificultad",
      value: "Mixta",
      description: "Básico, intermedio y avanzado"
    }
  ]

  const instructions = [
    "Abrir el enlace de Kahoot en dispositivo móvil o navegador",
    "Ingresar el código PIN que se proporcionará en clase",
    "Escribir tu nombre o apodo para identificarte",
    "Esperar a que todos se conecten para comenzar",
    "Responder cada pregunta en el tiempo límite establecido",
    "Ver tu posición en el ranking al final de cada pregunta"
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(45deg, rgba(139, 69, 19, 0.3), rgba(15, 23, 42, 0.9))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">🧠 Evaluación Interactiva</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              Pon a prueba tus conocimientos sobre <strong style={{ color: '#ef4444' }}>Advanced Persistent Threats</strong> 
              con nuestro <strong style={{ color: '#f59e0b' }}>quiz interactivo</strong> en Kahoot.
            </p>
          </div>

          {/* Quiz Statistics */}
          <div className="grid grid-2" style={{ marginBottom: '3rem' }}>
            {quizStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="stat-card card"
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(15, 23, 42, 0.8))',
                  border: '2px solid rgba(245, 158, 11, 0.4)'
                }}
              >
                <div style={{ 
                  color: '#f59e0b',
                  marginBottom: '1rem'
                }}>
                  {stat.icon}
                </div>
                <div className="stat-number" style={{ color: '#fbbf24', fontSize: '2.5rem' }}>
                  {stat.value}
                </div>
                <h3 style={{ 
                  color: '#fed7aa',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem'
                }}>
                  {stat.label}
                </h3>
                <p style={{ color: '#fde68a', fontSize: '0.9rem' }}>
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quiz Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(59, 130, 246, 0.4)',
              marginBottom: '3rem'
            }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#60a5fa',
              fontSize: '1.8rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <Brain size={35} />
              Vista Previa de Preguntas
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem' }}>
              {quizPreview.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    background: 'rgba(30, 64, 175, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(30, 64, 175, 0.3)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                      background: '#3b82f6',
                      color: 'white',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </span>
                    <span style={{ 
                      color: '#e2e8f0',
                      fontSize: '1rem',
                      lineHeight: '1.4'
                    }}>
                      {item.question}
                    </span>
                  </div>
                  <span style={{
                    background: item.difficulty === 'Básico' ? '#10b98150' : 
                              item.difficulty === 'Intermedio' ? '#f59e0b50' : '#ef444450',
                    color: item.difficulty === 'Básico' ? '#a7f3d0' : 
                           item.difficulty === 'Intermedio' ? '#fed7aa' : '#fca5a5',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    whiteSpace: 'nowrap'
                  }}>
                    {item.difficulty}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Instructions */}
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
              fontSize: '1.6rem',
              marginBottom: '2rem'
            }}>
              📋 Instrucciones para Participar
            </h3>
            
            <div style={{ 
              display: 'grid',
              gap: '1rem'
            }}>
              {instructions.map((instruction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <div style={{
                    background: '#10b981',
                    color: 'white',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </div>
                  <span style={{ 
                    color: '#d1fae5',
                    fontSize: '1rem',
                    lineHeight: '1.5'
                  }}>
                    {instruction}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kahoot Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            style={{ textAlign: 'center' }}
          >
            <div className="card" style={{
              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.4), rgba(15, 23, 42, 0.8))',
              border: '3px solid rgba(245, 158, 11, 0.6)',
              display: 'inline-block',
              padding: '2rem 3rem'
            }}>
              <h3 style={{ 
                color: '#fbbf24',
                fontSize: '1.8rem',
                marginBottom: '1.5rem'
              }}>
                🎮 ¡Listos para el Desafío!
              </h3>
              
              <p style={{ 
                color: '#fde68a',
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                El código PIN del quiz será proporcionado durante la presentación en vivo.
                <br />
                ¡Mantente atento para participar!
              </p>
              
              <a 
                href="https://kahoot.it" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(45deg, #f59e0b, #d97706)',
                  fontSize: '1.2rem',
                  padding: '1rem 2rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  textDecoration: 'none'
                }}
              >
                <Brain size={24} />
                Abrir Kahoot
                <ExternalLink size={20} />
              </a>
              
              <div style={{ 
                marginTop: '1.5rem',
                fontSize: '0.9rem',
                color: '#fed7aa'
              }}>
                💡 Tip: Abre el enlace ahora y ten listo tu dispositivo
              </div>
            </div>
          </motion.div>

          {/* Encouragement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.2), rgba(15, 23, 42, 0.8))',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              textAlign: 'center',
              marginTop: '3rem'
            }}
          >
            <CheckCircle size={50} style={{ color: '#10b981', marginBottom: '1rem' }} />
            <h3 style={{ 
              color: '#6ee7b7',
              fontSize: '1.5rem',
              marginBottom: '1rem'
            }}>
              ¿Por qué Participar?
            </h3>
            <div className="grid grid-3" style={{ textAlign: 'left' }}>
              <div>
                <h4 style={{ color: '#93c5fd', marginBottom: '0.5rem' }}>🏆 Competencia Amigable</h4>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                  Compite con tus compañeros en tiempo real
                </p>
              </div>
              <div>
                <h4 style={{ color: '#93c5fd', marginBottom: '0.5rem' }}>📚 Refuerza Aprendizaje</h4>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                  Consolida los conceptos de APT aprendidos
                </p>
              </div>
              <div>
                <h4 style={{ color: '#93c5fd', marginBottom: '0.5rem' }}>🎯 Feedback Inmediato</h4>
                <p style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>
                  Conoce las respuestas correctas al instante
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuizSection