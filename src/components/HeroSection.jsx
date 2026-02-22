import React from 'react'
import { motion } from 'framer-motion'
import { Shield, AlertTriangle, Zap } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="section" style={{ 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 70%, #dc2626 100%)',
      position: 'relative'
    }}>
      <div className="section-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <Shield size={80} className="text-blue-400" style={{ marginRight: '1rem' }} />
            <AlertTriangle size={80} className="text-red-500" style={{ marginRight: '1rem' }} />
            <Zap size={80} className="text-yellow-400" />
          </div>
          
          <h1 className="heading" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            APT
          </h1>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '300',
            color: '#e2e8f0',
            marginBottom: '2rem'
          }}>
            Advanced Persistent Threats
          </h2>
          
          <div style={{
            background: 'rgba(30, 64, 175, 0.2)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            marginBottom: '3rem'
          }}>
            <h3 style={{ 
              fontSize: '1.8rem',
              color: '#60a5fa',
              marginBottom: '1rem'
            }}>
              Electiva de Profundización II
            </h3>
            <p style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
              Presentado por:
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem'
            }}>
              <div className="card">
                <h4 style={{ color: '#3b82f6', fontSize: '1.4rem' }}>
                  Karly Velásquez Acosta
                </h4>
              </div>
              <div className="card">
                <h4 style={{ color: '#3b82f6', fontSize: '1.4rem' }}>
                  Mateo Botero Echeverri
                </h4>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ fontSize: '1.2rem', color: '#94a3b8' }}
          >
            📆 Febrero 2026
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection