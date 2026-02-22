import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Globe, 
  Shield,
  AlertTriangle,
  Building,
  Users
} from 'lucide-react'

const StatisticsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const globalStats = [
    {
      icon: <TrendingUp size={40} />,
      number: "40%",
      label: "Aumento en 2024",
      description: "Incremento de actividades APT reportadas",
      color: "#ef4444"
    },
    {
      icon: <DollarSign size={40} />,
      number: "$4.45M",
      label: "Costo Promedio",
      description: "Pérdida económica por incidente APT",
      color: "#f59e0b"
    },
    {
      icon: <Clock size={40} />,
      number: "287 días",
      label: "Tiempo Promedio",
      description: "Para detectar un ataque APT",
      color: "#3b82f6"
    },
    {
      icon: <Globe size={40} />,
      number: "150+",
      label: "Grupos Activos",
      description: "Organizaciones APT identificadas mundialmente",
      color: "#10b981"
    }
  ]

  const sectorStats = [
    { sector: "Gobierno", percentage: 28, attacks: 342 },
    { sector: "Servicios Financieros", percentage: 22, attacks: 268 },
    { sector: "Tecnología", percentage: 18, attacks: 219 },
    { sector: "Salud", percentage: 12, attacks: 146 },
    { sector: "Energía", percentage: 10, attacks: 122 },
    { sector: "Educación", percentage: 6, attacks: 73 },
    { sector: "Otros", percentage: 4, attacks: 48 }
  ]

  const colombiaStats = [
    {
      title: "Incidentes Reportados 2023-2024",
      value: "156",
      growth: "+45%",
      icon: <AlertTriangle size={30} />
    },
    {
      title: "Sectores Más Afectados",
      value: "Financiero",
      subtitle: "Gobierno, Petróleo",
      icon: <Building size={30} />
    },
    {
      title: "Pérdidas Estimadas",
      value: "$89M COP",
      growth: "+23%",
      icon: <DollarSign size={30} />
    },
    {
      title: "Tiempo Promedio Detección",
      value: "312 días",
      subtitle: "25 días más que el promedio global",
      icon: <Clock size={30} />
    }
  ]

  const regionComparison = [
    { region: "América del Norte", incidents: 1249, growth: "+32%" },
    { region: "Europa", incidents: 987, growth: "+28%" },
    { region: "Asia-Pacífico", incidents: 1456, growth: "+52%" },
    { region: "América Latina", incidents: 234, growth: "+67%" },
    { region: "Medio Oriente", incidents: 189, growth: "+41%" },
    { region: "África", incidents: 98, growth: "+89%" }
  ]

  return (
    <section className="section" style={{ 
      background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(15, 23, 42, 0.9))'
    }}>
      <div className="section-content" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading">📊 Estadísticas Globales</h2>
          
          <div className="text" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8' }}>
              Los datos revelan el <strong style={{ color: '#ef4444' }}>crecimiento exponencial</strong> y 
              el <strong style={{ color: '#10b981' }}>impacto devastador</strong> de las amenazas APT a nivel mundial.
            </p>
          </div>

          {/* Global Statistics */}
          <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="stat-card card"
              >
                <div style={{ 
                  color: stat.color,
                  marginBottom: '1rem'
                }}>
                  {stat.icon}
                </div>
                <div className="stat-number" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <h3 style={{ 
                  color: '#60a5fa',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem'
                }}>
                  {stat.label}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sector Distribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="card"
            style={{ marginBottom: '3rem' }}
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#60a5fa',
              fontSize: '1.6rem',
              marginBottom: '2rem'
            }}>
              📈 Distribución por Sectores (2024)
            </h3>
            
            <div style={{ display: 'grid', gap: '1rem' }}>
              {sectorStats.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  background: 'rgba(30, 64, 175, 0.1)',
                  borderRadius: '8px'
                }}>
                  <div>
                    <span style={{ 
                      color: '#e2e8f0',
                      fontSize: '1.1rem',
                      fontWeight: '500'
                    }}>
                      {item.sector}
                    </span>
                    <div style={{ 
                      color: '#94a3b8',
                      fontSize: '0.9rem'
                    }}>
                      {item.attacks} ataques reportados
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.5)',
                      borderRadius: '10px',
                      height: '20px',
                      width: '200px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 1 + (index * 0.1) }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, #3b82f6, #ef4444)`,
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                    <span style={{ 
                      color: '#60a5fa',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      minWidth: '50px'
                    }}>
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Colombia Specific */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
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
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              🇨🇴 Contexto en Colombia
            </h3>
            
            <div className="grid grid-2">
              {colombiaStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 1.4 + (index * 0.1) }}
                  style={{
                    background: 'rgba(217, 119, 6, 0.1)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(217, 119, 6, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div style={{ color: '#f59e0b' }}>
                    {stat.icon}
                  </div>
                  <div>
                    <h4 style={{ 
                      color: '#fed7aa',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.title}
                    </h4>
                    <div style={{ 
                      color: '#fbbf24',
                      fontSize: '1.4rem',
                      fontWeight: 'bold'
                    }}>
                      {stat.value}
                      {stat.growth && (
                        <span style={{ 
                          fontSize: '0.8rem',
                          color: '#ef4444',
                          marginLeft: '0.5rem'
                        }}>
                          {stat.growth}
                        </span>
                      )}
                    </div>
                    {stat.subtitle && (
                      <div style={{ 
                        color: '#fed7aa',
                        fontSize: '0.8rem'
                      }}>
                        {stat.subtitle}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Regional Comparison */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="card"
          >
            <h3 style={{ 
              textAlign: 'center',
              color: '#60a5fa',
              fontSize: '1.6rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              🌍 Comparación Regional 2024
            </h3>
            
            <div className="grid grid-3">
              {regionComparison.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 1.8 + (index * 0.1) }}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '12px',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}
                >
                  <h4 style={{ 
                    color: '#93c5fd',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                  }}>
                    {region.region}
                  </h4>
                  <div style={{ 
                    color: '#3b82f6',
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    {region.incidents}
                  </div>
                  <div style={{ 
                    color: '#ef4444',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {region.growth}
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

export default StatisticsSection