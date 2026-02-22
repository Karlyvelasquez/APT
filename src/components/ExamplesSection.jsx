import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Flag, 
  Zap, 
  Target, 
  Calendar,
  DollarSign,
  Users,
  Globe,
  AlertTriangle
} from 'lucide-react'

const ExamplesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const aptGroups = [
    {
      name: "APT1 (Comment Crew)",
      country: "🇨🇳 China",
      period: "2006-2013",
      description: "Primer grupo APT públicamente expuesto por Mandiant. Vinculado al Ejército Popular de Liberación de China.",
      targets: ["Empresas estadounidenses", "Propiedad intelectual", "Secretos comerciales"],
      impact: "141 organizaciones comprometidas en 20 industrias",
      techniques: ["Spear phishing", "Backdoors personalizados", "Exfiltración masiva de datos"],
      color: "#ef4444"
    },
    {
      name: "APT28 (Fancy Bear)",
      country: "🇷🇺 Rusia",
      period: "2008-Presente",
      description: "Grupo vinculado al GRU (inteligencia militar rusa). Especializado en operaciones de influencia política.",
      targets: ["Gobiernos occidentales", "Organizaciones militares", "Sistemas electorales"],
      impact: "Interferencia en elecciones de múltiples países",
      techniques: ["Zero-day exploits", "Living off the land", "Campañas de desinformación"],
      color: "#3b82f6"
    },
    {
      name: "APT29 (Cozy Bear)",
      country: "🇷🇺 Rusia", 
      period: "2008-Presente",
      description: "Asociado al SVR (inteligencia exterior rusa). Enfocado en espionaje de largo plazo.",
      targets: ["Agencias gubernamentales", "Think tanks", "Organizaciones de salud"],
      impact: "Compromiso de SolarWinds afectando 18,000+ organizaciones",
      techniques: ["Supply chain attacks", "Steganografía", "Herramientas de administración legítimas"],
      color: "#8b5cf6"
    },
    {
      name: "Lazarus Group",
      country: "🇰🇵 Corea del Norte",
      period: "2009-Presente", 
      description: "Grupo multifacético involucrado en espionaje, sabotaje y crimen financiero.",
      targets: ["Bancos internacionales", "Exchanges de criptomonedas", "Estudios de entretenimiento"],
      impact: "Robo de $1.7B+ en criptomonedas y operaciones bancarias",
      techniques: ["Destructive malware", "Cryptocurrency theft", "Nation-state ransomware"],
      color: "#f59e0b"
    },
    {
      name: "APT40 (Leviathan)",
      country: "🇨🇳 China",
      period: "2013-Presente",
      description: "Especializado en espionaje marítimo y robo de propiedad intelectual relacionada con el mar.",
      targets: ["Industria marítima", "Universidades", "Organizaciones de investigación"],
      impact: "Compromiso de tecnologías de defensa naval y investigación oceánica",
      techniques: ["Web shells", "Credential harvesting", "Maritime-focused espionage"],
      color: "#10b981"
    },
    {
      name: "APT33 (Elfin)",
      country: "🇮🇷 Irán",
      period: "2013-Presente",
      description: "Enfocado en sectores de aviación y energía con vínculos al gobierno iraní.",
      targets: ["Industria petrolera", "Sector aeroespacial", "Organizaciones gubernamentales"],
      impact: "Compromiso de infraestructura crítica energética",
      techniques: ["Watering hole attacks", "Spear phishing", "Custom backdoors"],
      color: "#f97316"
    }
  ]

  const notableAttacks = [
    {
      name: "Stuxnet",
      year: "2010",
      perpetrator: "USA/Israel (presuntamente)",
      target: "Instalaciones nucleares iraníes",
      impact: "Destrucción física de 1,000+ centrifugadoras",
      significance: "Primer ciberarma dirigido a infraestructura física",
      icon: <Zap size={30} />
    },
    {
      name: "SolarWinds",
      year: "2020",
      perpetrator: "APT29 (Rusia)",
      target: "18,000+ organizaciones globales",
      impact: "Compromiso de agencias gubernamentales de EE.UU.",
      significance: "Mayor ataque de cadena de suministro de la historia",
      icon: <Globe size={30} />
    },
    {
      name: "OPM Breach",
      year: "2015",
      perpetrator: "APT1 (China presuntamente)",
      target: "Oficina de Gestión de Personal de EE.UU.",
      impact: "22.1M registros de personal federal robados",
      significance: "Mayor robo de datos gubernamentales de EE.UU.",
      icon: <Users size={30} />
    },
    {
      name: "Sony Pictures",
      year: "2014",
      perpetrator: "Lazarus Group (Corea del Norte)",
      target: "Sony Pictures Entertainment",
      impact: "$100M+ en pérdidas, emails ejecutivos filtrados",
      significance: "Primer ataque APT con objetivo de censura",
      icon: <AlertTriangle size={30} />
    }
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.2), rgba(15, 23, 42, 0.9))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">🎯 Ejemplos Destacados</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              Casos emblemáticos que han definido el panorama de las 
              <strong style={{ color: '#ef4444' }}> amenazas persistentes avanzadas</strong> y 
              su <strong style={{ color: '#f59e0b' }}>impacto geopolítico</strong>.
            </p>
          </div>

          {/* Major APT Groups */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ 
              textAlign: 'center',
              color: '#60a5fa',
              fontSize: '2rem',
              marginBottom: '2rem'
            }}>
              🏴‍☠️ Grupos APT Prominentes
            </h3>
            
            <div className="grid grid-2">
              {aptGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card"
                  style={{
                    border: `2px solid ${group.color}40`,
                    background: `linear-gradient(135deg, ${group.color}10, rgba(15, 23, 42, 0.9))`
                  }}
                >
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <h3 style={{ 
                        color: group.color,
                        fontSize: '1.4rem',
                        marginBottom: '0.5rem'
                      }}>
                        {group.name}
                      </h3>
                      <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{ color: '#cbd5e1', fontSize: '1rem' }}>
                          {group.country}
                        </span>
                        <span style={{ 
                          background: 'rgba(59, 130, 246, 0.2)',
                          color: '#93c5fd',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '10px',
                          fontSize: '0.8rem'
                        }}>
                          {group.period}
                        </span>
                      </div>
                    </div>
                    <Flag size={24} style={{ color: group.color }} />
                  </div>
                  
                  <p style={{ 
                    color: '#e2e8f0',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {group.description}
                  </p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      Objetivos Principales:
                    </h4>
                    <div style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {group.targets.map((target, idx) => (
                        <span key={idx} style={{
                          background: 'rgba(30, 64, 175, 0.2)',
                          color: '#cbd5e1',
                          padding: '0.3rem 0.6rem',
                          borderRadius: '6px',
                          fontSize: '0.8rem'
                        }}>
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ 
                    background: `${group.color}20`,
                    padding: '1rem',
                    borderRadius: '8px',
                    border: `1px solid ${group.color}40`,
                    marginBottom: '1rem'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <Target size={16} style={{ color: group.color }} />
                      <strong style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>Impacto:</strong>
                    </div>
                    <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                      {group.impact}
                    </p>
                  </div>
                  
                  <div>
                    <h4 style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      Técnicas Características:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {group.techniques.map((technique, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '0.3rem'
                        }}>
                          <span style={{ 
                            color: group.color, 
                            marginRight: '0.5rem',
                            fontSize: '0.8rem'
                          }}>
                            ▸
                          </span>
                          <span style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>
                            {technique}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Notable Attacks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#fbbf24',
              fontSize: '2rem',
              marginBottom: '2rem'
            }}>
              💥 Ataques Emblemáticos
            </h3>
            
            <div className="grid grid-2">
              {notableAttacks.map((attack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                  className="card"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(15, 23, 42, 0.8))',
                    border: '2px solid rgba(245, 158, 11, 0.3)'
                  }}
                >
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <h3 style={{ 
                        color: '#fbbf24',
                        fontSize: '1.3rem'
                      }}>
                        {attack.name}
                      </h3>
                      <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}>
                        <Calendar size={16} style={{ color: '#fed7aa' }} />
                        <span style={{ color: '#fed7aa', fontSize: '0.9rem' }}>
                          {attack.year}
                        </span>
                      </div>
                    </div>
                    <div style={{ color: '#f59e0b' }}>
                      {attack.icon}
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ color: '#fed7aa', fontSize: '0.9rem' }}>
                      <strong>Perpetrador:</strong> {attack.perpetrator}
                    </p>
                    <p style={{ color: '#fed7aa', fontSize: '0.9rem' }}>
                      <strong>Objetivo:</strong> {attack.target}
                    </p>
                  </div>
                  
                  <div style={{
                    background: 'rgba(220, 38, 38, 0.2)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(220, 38, 38, 0.3)',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      <DollarSign size={16} style={{ color: '#fca5a5' }} />
                      <strong style={{ color: '#fca5a5', fontSize: '0.9rem' }}>Impacto:</strong>
                    </div>
                    <p style={{ color: '#fecaca', fontSize: '0.9rem' }}>
                      {attack.impact}
                    </p>
                  </div>
                  
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    <h4 style={{ 
                      color: '#6ee7b7', 
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem'
                    }}>
                      Significado Histórico:
                    </h4>
                    <p style={{ color: '#a7f3d0', fontSize: '0.85rem' }}>
                      {attack.significance}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExamplesSection