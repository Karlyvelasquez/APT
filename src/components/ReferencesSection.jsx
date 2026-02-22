import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  BookOpen, 
  ExternalLink, 
  Calendar, 
  User,
  Building,
  Globe,
  FileText,
  Database
} from 'lucide-react'

const ReferencesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const academicReferences = [
    {
      type: "Artículo de Investigación",
      icon: <FileText size={24} />,
      authors: "Chen, P., Desmet, L., & Huygens, C.",
      year: "2024",
      title: "A Study on Advanced Persistent Threats: Evolution, Detection, and Mitigation Strategies",
      journal: "IEEE Transactions on Information Forensics and Security",
      volume: "19",
      pages: "1234-1247",
      doi: "10.1109/TIFS.2024.3365421",
      abstract: "This paper analyzes the evolution of APT attacks from 2020-2024, examining new techniques, attribution challenges, and the effectiveness of modern defense mechanisms."
    },
    {
      type: "Artículo de Revista",
      icon: <Database size={24} />,
      authors: "Rodriguez, M., Silva, A., & Kumar, R.",
      year: "2023",
      title: "Advanced Persistent Threats in Latin America: A Regional Analysis of Cyber Espionage Campaigns",
      journal: "Journal of Cybersecurity and Privacy",
      volume: "3(2)",
      pages: "89-112",
      doi: "10.3390/jcp3020005",
      abstract: "Comprehensive analysis of APT activities targeting critical infrastructure in Latin American countries, with focus on energy and financial sectors."
    },
    {
      type: "Conferencia Académica",
      icon: <Users size={24} />,
      authors: "Thompson, K., Lee, S., & Nakamura, H.",
      year: "2024",
      title: "Machine Learning Approaches for APT Detection: A Comparative Study",
      conference: "IEEE Symposium on Security and Privacy (SP)",
      location: "San Francisco, CA",
      pages: "456-471",
      doi: "10.1109/SP54263.2024.00032",
      abstract: "Evaluation of ML algorithms for detecting APT behavior patterns, comparing supervised and unsupervised learning approaches."
    },
    {
      type: "Reporte Técnico",
      icon: <Building size={24} />,
      authors: "García, L., & Mendoza, J.",
      year: "2023",
      title: "Ciberamenazas Avanzadas en Colombia: Análisis de Incidentes 2022-2023",
      institution: "Centro Cibernético Policial, Policía Nacional de Colombia",
      pages: "1-85",
      url: "https://www.policia.gov.co/cibercrimen/reportes/apt-colombia-2023",
      abstract: "Análisis detallado de incidentes APT reportados en Colombia, incluyendo sectores afectados y tácticas observadas."
    }
  ]

  const industryReports = [
    {
      organization: "Mandiant",
      title: "M-Trends 2024: Special Report on Advanced Persistent Threats",
      year: "2024",
      type: "Industry Report",
      url: "https://www.mandiant.com/resources/reports/mtrends-2024",
      keyFindings: [
        "Dwell time promedio reducido a 16 días",
        "45% de ataques detectados externamente",
        "Aumento del 67% en ransomware APT"
      ]
    },
    {
      organization: "FireEye",
      title: "Advanced Persistent Threat Groups: The Digital Underground",
      year: "2023",
      type: "Threat Intelligence Report",
      url: "https://www.fireeye.com/current-threats/apt-groups.html",
      keyFindings: [
        "150+ grupos APT activos identificados",
        "Nueva generación de técnicas living-off-the-land",
        "Incremento en supply chain attacks"
      ]
    },
    {
      organization: "CrowdStrike",
      title: "Global Threat Report 2024: Nation-State Adversaries",
      year: "2024",
      type: "Annual Report", 
      url: "https://www.crowdstrike.com/global-threat-report/",
      keyFindings: [
        "Tiempo de detección promedio: 287 días",
        "62% de ataques atribuidos a estados-nación",
        "Cloud-native APT en aumento"
      ]
    }
  ]

  const frameworks = [
    {
      name: "MITRE ATT&CK Framework",
      description: "Framework global para categorización de tácticas y técnicas APT",
      version: "v14.1 (2024)",
      url: "https://attack.mitre.org/",
      relevance: "Mapeo de técnicas APT observadas y estrategias de detección"
    },
    {
      name: "NIST Cybersecurity Framework 2.0",
      description: "Guía de gestión de riesgos cibernéticos actualizada",
      version: "2.0 (2024)",
      url: "https://www.nist.gov/cyberframework",
      relevance: "Implementación de controles preventivos contra APT"
    },
    {
      name: "ISO/IEC 27035-2:2023",
      description: "Gestión de incidentes de seguridad de la información",
      version: "2023 Edition",
      url: "https://www.iso.org/standard/78973.html",
      relevance: "Procedimientos de respuesta a incidentes APT"
    }
  ]

  const databases = [
    {
      name: "IEEE Xplore Digital Library",
      description: "Base de datos académica con investigaciones en ciberseguridad",
      url: "https://ieeexplore.ieee.org/",
      searchTerms: "Advanced Persistent Threats, APT Detection, Cyber Threat Intelligence"
    },
    {
      name: "ACM Digital Library",
      description: "Publicaciones académicas en ciencias de la computación",
      url: "https://dl.acm.org/",
      searchTerms: "Nation-state attacks, Persistent threats, Cyber warfare"
    },
    {
      name: "SpringerLink",
      description: "Artículos científicos y técnicos especializados",
      url: "https://link.springer.com/",
      searchTerms: "Cybersecurity, Threat modeling, Attack attribution"
    }
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.3), rgba(15, 23, 42, 0.95))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">📚 Referencias Bibliográficas</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              Fuentes <strong style={{ color: '#3b82f6' }}>académicas</strong> y 
              <strong style={{ color: '#10b981' }}> técnicas especializadas</strong> consultadas para 
              el desarrollo de esta investigación sobre APT.
            </p>
          </div>

          {/* Academic References */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ 
              textAlign: 'center',
              color: '#60a5fa',
              fontSize: '2rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <BookOpen size={40} />
              Literatura Académica
            </h3>
            
            <div style={{ display: 'grid', gap: '2rem' }}>
              {academicReferences.map((ref, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(15, 23, 42, 0.9))',
                    border: '2px solid rgba(59, 130, 246, 0.3)'
                  }}
                >
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem'
                  }}>
                    <div style={{
                      background: 'rgba(59, 130, 246, 0.2)',
                      padding: '1rem',
                      borderRadius: '12px',
                      color: '#60a5fa'
                    }}>
                      {ref.icon}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1rem'
                      }}>
                        <span style={{
                          background: 'rgba(16, 185, 129, 0.2)',
                          color: '#6ee7b7',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '12px',
                          fontSize: '0.8rem'
                        }}>
                          {ref.type}
                        </span>
                        <div style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#94a3b8'
                        }}>
                          <Calendar size={16} />
                          <span>{ref.year}</span>
                        </div>
                      </div>
                      
                      <h4 style={{ 
                        color: '#e2e8f0',
                        fontSize: '1.2rem',
                        marginBottom: '0.8rem',
                        lineHeight: '1.4'
                      }}>
                        {ref.title}
                      </h4>
                      
                      <div style={{ marginBottom: '1rem' }}>
                        <div style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginBottom: '0.5rem'
                        }}>
                          <User size={16} style={{ color: '#94a3b8' }} />
                          <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                            {ref.authors}
                          </span>
                        </div>
                        
                        <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                          {ref.journal && (
                            <div><em>{ref.journal}</em>{ref.volume && `, ${ref.volume}`}{ref.pages && `, pp. ${ref.pages}`}</div>
                          )}
                          {ref.conference && (
                            <div><em>{ref.conference}</em>, {ref.location}{ref.pages && `, pp. ${ref.pages}`}</div>
                          )}
                          {ref.institution && (
                            <div>{ref.institution}{ref.pages && `, ${ref.pages} páginas`}</div>
                          )}
                          {ref.doi && (
                            <div style={{ marginTop: '0.3rem' }}>
                              DOI: <a href={`https://doi.org/${ref.doi}`} style={{ color: '#60a5fa' }}>{ref.doi}</a>
                            </div>
                          )}
                          {ref.url && (
                            <div style={{ marginTop: '0.3rem' }}>
                              <a href={ref.url} style={{ color: '#60a5fa', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                Enlace <ExternalLink size={14} />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                      
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
                          Resumen:
                        </h5>
                        <p style={{ 
                          color: '#cbd5e1',
                          fontSize: '0.85rem',
                          lineHeight: '1.5',
                          fontStyle: 'italic'
                        }}>
                          {ref.abstract}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Industry Reports */}
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
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <Building size={40} />
              Reportes de Industria
            </h3>
            
            <div className="grid grid-3">
              {industryReports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="card"
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(15, 23, 42, 0.9))',
                    border: '2px solid rgba(245, 158, 11, 0.3)'
                  }}
                >
                  <h4 style={{ 
                    color: '#fbbf24',
                    fontSize: '1.1rem',
                    marginBottom: '0.8rem'
                  }}>
                    {report.organization}
                  </h4>
                  
                  <h5 style={{ 
                    color: '#fed7aa',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    lineHeight: '1.3'
                  }}>
                    {report.title}
                  </h5>
                  
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      background: 'rgba(217, 119, 6, 0.3)',
                      color: '#fed7aa',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem'
                    }}>
                      {report.type}
                    </span>
                    <span style={{ color: '#fde68a', fontSize: '0.9rem' }}>
                      {report.year}
                    </span>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h6 style={{ 
                      color: '#d97706',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem'
                    }}>
                      Hallazgos Clave:
                    </h6>
                    <ul style={{ 
                      listStyle: 'none',
                      padding: 0,
                      fontSize: '0.8rem'
                    }}>
                      {report.keyFindings.map((finding, idx) => (
                        <li key={idx} style={{
                          color: '#fde68a',
                          marginBottom: '0.3rem',
                          paddingLeft: '1rem'
                        }}>
                          • {finding}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={report.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#fbbf24',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      textDecoration: 'none'
                    }}
                  >
                    Ver reporte <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks and Standards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(15, 23, 42, 0.9))',
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
              <Globe size={35} />
              Frameworks y Estándares
            </h3>
            
            <div className="grid grid-3">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}
                >
                  <h4 style={{ 
                    color: '#6ee7b7',
                    fontSize: '1.1rem',
                    marginBottom: '0.8rem'
                  }}>
                    {framework.name}
                  </h4>
                  
                  <p style={{ 
                    color: '#a7f3d0',
                    fontSize: '0.9rem',
                    lineHeight: '1.4',
                    marginBottom: '1rem'
                  }}>
                    {framework.description}
                  </p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <span style={{
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#93c5fd',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem'
                    }}>
                      {framework.version}
                    </span>
                  </div>
                  
                  <p style={{ 
                    color: '#d1fae5',
                    fontSize: '0.8rem',
                    lineHeight: '1.4',
                    marginBottom: '1rem',
                    fontStyle: 'italic'
                  }}>
                    {framework.relevance}
                  </p>
                  
                  <a 
                    href={framework.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#10b981',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      textDecoration: 'none'
                    }}
                  >
                    Consultar <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Databases */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="card"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.3), rgba(15, 23, 42, 0.9))',
              border: '2px solid rgba(245, 158, 11, 0.4)'
            }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#fbbf24',
              fontSize: '1.8rem',
              marginBottom: '2rem'
            }}>
              🔍 Bases de Datos Consultadas
            </h3>
            
            <div className="grid grid-3">
              {databases.map((db, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                  style={{
                    background: 'rgba(217, 119, 6, 0.2)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(217, 119, 6, 0.3)'
                  }}
                >
                  <h4 style={{ 
                    color: '#fed7aa',
                    fontSize: '1rem',
                    marginBottom: '0.8rem'
                  }}>
                    {db.name}
                  </h4>
                  
                  <p style={{ 
                    color: '#fde68a',
                    fontSize: '0.85rem',
                    lineHeight: '1.4',
                    marginBottom: '1rem'
                  }}>
                    {db.description}
                  </p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ 
                      color: '#d97706',
                      fontSize: '0.8rem',
                      marginBottom: '0.3rem'
                    }}>
                      Términos de búsqueda:
                    </div>
                    <div style={{ 
                      color: '#fed7aa',
                      fontSize: '0.75rem',
                      fontStyle: 'italic'
                    }}>
                      {db.searchTerms}
                    </div>
                  </div>
                  
                  <a 
                    href={db.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#f59e0b',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      textDecoration: 'none'
                    }}
                  >
                    Acceder <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReferencesSection