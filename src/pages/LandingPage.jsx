import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Shield, AlertTriangle, Zap, Target, Eye, BookOpen, Users, Clock, Globe, FileText, ChevronDown, ArrowRight } from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'

export default function LandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Shield className="h-10 w-10 text-primary-600" />
              <div>
                <h1 className={`text-2xl font-bold transition-colors ${scrolled ? 'text-gradient' : 'text-white'}`}>
                  APT Presentation
                </h1>
                <p className={`text-xs transition-colors ${scrolled ? 'text-gray-600 dark:text-gray-400' : 'text-white/90'}`}>
                  {t('hero.course')}
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a 
                href="#concepts" 
                className={`transition ${scrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400' : 'text-white hover:text-blue-200'}`}
              >
                {t('nav.concepts')}
              </a>
              <a 
                href="#examples" 
                className={`transition ${scrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400' : 'text-white hover:text-blue-200'}`}
              >
                {t('nav.examples')}
              </a>
              <a 
                href="#prevention" 
                className={`transition ${scrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400' : 'text-white hover:text-blue-200'}`}
              >
                {t('nav.prevention')}
              </a>
              <a 
                href="#quiz" 
                className={`transition ${scrolled ? 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400' : 'text-white hover:text-blue-200'}`}
              >
                {t('nav.quiz')}
              </a>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-primary-800/60 to-danger-900/70 z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/30">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Ciberseguridad Avanzada | {t('hero.course')}</span>
              </div>
              
              <h1 className="heading-xl mb-6 text-white drop-shadow-lg">
                {t('hero.title')} <span className="text-blue-200">{t('hero.subtitle')}</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 drop-shadow-md">
                {t('hero.description')}
              </p>
              
              <div className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-white/90 mb-4">{t('hero.authors')}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-primary-600/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary-400/30">
                    <p className="text-white font-semibold">Karly Velásquez Acosta</p>
                  </div>
                  <div className="bg-primary-600/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-primary-400/30">
                    <p className="text-white font-semibold">Mateo Botero Echeverri</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/presentation')}
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  {t('hero.startButton')}
                </button>
                <button 
                  onClick={() => navigate('/quiz')}
                  className="btn-secondary inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
                >
                  <Target className="mr-2 h-5 w-5" />
                  {t('nav.quiz')}
                </button>
                <button
                  onClick={() => navigate('/answers')}
                  className="btn-secondary inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Respuestas Quiz
                </button>
                <button 
                  onClick={() => navigate('/references')}
                  className="btn-secondary inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  {t('nav.references')}
                </button>
              </div>
            </div>
            
            {/* Floating Icons Animation */}
            <div className="relative animate-float">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-glow">
                  <Shield className="h-12 w-12 text-blue-300 mx-auto" />
                  <p className="text-white text-center mt-2 text-sm">Advanced</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-glow" style={{ animationDelay: '0.5s' }}>
                  <AlertTriangle className="h-12 w-12 text-yellow-300 mx-auto" />
                  <p className="text-white text-center mt-2 text-sm">Persistent</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 animate-glow" style={{ animationDelay: '1s' }}>
                  <Zap className="h-12 w-12 text-red-300 mx-auto" />
                  <p className="text-white text-center mt-2 text-sm">Threat</p>
                </div>
              </div>
              
              {/* Scroll indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <ChevronDown className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Target className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              {t('objectives.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('objectives.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Eye, 
                title: t('objectives.identify.title'), 
                desc: t('objectives.identify.description'),
                color: 'bg-blue-500'
              },
              { 
                icon: BookOpen, 
                title: t('objectives.analyze.title'), 
                desc: t('objectives.analyze.description'),
                color: 'bg-green-500'
              },
              { 
                icon: Shield, 
                title: t('objectives.implement.title'), 
                desc: t('objectives.implement.description'),
                color: 'bg-yellow-500'
              },
              { 
                icon: Target, 
                title: t('objectives.evaluate.title'), 
                desc: t('objectives.evaluate.description'),
                color: 'bg-red-500'
              }
            ].map((obj, i) => (
              <div key={i} className="card p-6 text-center group hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${obj.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  <obj.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {obj.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/concepts')}
              className="btn-primary"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explorar Conceptos APT
            </button>
          </div>
        </div>
      </section>

      {/* Quick Access Navigation */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Navega por el Contenido
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explora cada sección de nuestra presentación sobre APT
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Conceptos Fundamentales',
                description: 'Comprende qué son las APT y sus características',
                icon: BookOpen,
                path: '/concepts',
                color: 'primary'
              },
              {
                title: 'Ejemplos Reales',
                description: 'Casos de estudio de ataques APT documentados',
                icon: Globe,
                path: '/examples',
                color: 'green'
              },
              {
                title: 'Estrategias de Prevención',
                description: 'Métodos para protegerse contra amenazas APT',
                icon: Shield,
                path: '/prevention',
                color: 'yellow'
              }
            ].map((section, i) => (
              <div 
                key={i} 
                className="card p-8 cursor-pointer group"
                onClick={() => navigate(section.path)}
              >
                <section.icon className={`h-12 w-12 text-${section.color}-600 mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {section.description}
                </p>
                <ArrowRight className="h-5 w-5 text-primary-600 group-hover:translate-x-2 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-primary-400" />
                <span className="text-xl font-bold">APT Presentation</span>
              </div>
              <p className="text-gray-400">
                Una exposición completa sobre Advanced Persistent Threats para Electiva de Profundización II.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/concepts')} className="text-gray-400 hover:text-white transition">Conceptos</button></li>
                <li><button onClick={() => navigate('/examples')} className="text-gray-400 hover:text-white transition">Ejemplos</button></li>
                <li><button onClick={() => navigate('/prevention')} className="text-gray-400 hover:text-white transition">Prevención</button></li>
                <li><button onClick={() => navigate('/quiz')} className="text-gray-400 hover:text-white transition">Quiz</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Autores</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Karly Velásquez Acosta</li>
                <li>Mateo Botero Echeverri</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Electiva de Profundización II</li>
                <li>Febrero 2026</li>
                <li>Universidad Autónoma Latinoamericana</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 APT Presentation. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}