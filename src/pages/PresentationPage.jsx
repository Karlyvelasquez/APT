import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, AlertTriangle, Target, Users, Globe, TrendingUp, Clock, ArrowRight, ArrowLeft, ChevronDown, BookOpen } from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'

export default function PresentationPage() {
  const navigate = useNavigate()
  const [expandedSection, setExpandedSection] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center space-x-3 hover:opacity-80 transition"
              >
                <Shield className="h-10 w-10 text-primary-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gradient">APT Presentation</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Advanced Persistent Threats</p>
                </div>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/concepts')}
                className="btn-secondary"
              >
                Siguiente: Conceptos
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full mb-8">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Electiva de Profundización II • Ciberseguridad</span>
            </div>
            
            <h1 className="heading-xl text-gray-900 dark:text-white mb-6">
              Advanced Persistent Threats
            </h1>
            
            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Una exposición completa sobre las amenazas cibernéticas más sofisticadas y persistentes que enfrentan las organizaciones modernas
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <Users className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Presentado por</h3>
                <p className="text-gray-600 dark:text-gray-300">Karly Velásquez Acosta</p>
                <p className="text-gray-600 dark:text-gray-300">Mateo Botero Echeverri</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <BookOpen className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Información Académica</h3>
                <p className="text-gray-600 dark:text-gray-300">Universidad Autónoma Latinoamericana</p>
                <p className="text-gray-600 dark:text-gray-300">Febrero 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
                ¿Qué son las APT?
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  Las <strong>Advanced Persistent Threats (APT)</strong> representan una de las formas más sofisticadas y peligrosas de ciberataques en la actualidad.
                </p>
                <p>
                  A diferencia de los ataques tradicionales que buscan resultados inmediatos, las APT son campañas prolongadas y sigilosas diseñadas para infiltrarse en sistemas específicos y mantener acceso durante períodos extensos.
                </p>
                <p>
                  Estas amenazas combinan técnicas avanzadas, recursos considerables y persistencia a largo plazo para lograr objetivos específicos, típicamente relacionados con espionaje, robo de información o sabotaje.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
                <Target className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Dirigidas</h3>
                <p className="text-blue-100">Ataques específicos contra organizaciones o individuos seleccionados</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-6 rounded-2xl text-white">
                <Clock className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Persistentes</h3>
                <p className="text-orange-100">Mantienen acceso durante meses o años sin ser detectadas</p>
              </div>
              
              <div className="bg-gradient-to-br from-red-500 to-pink-500 p-6 rounded-2xl text-white">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Avanzadas</h3>
                <p className="text-pink-100">Utilizan técnicas sofisticadas y herramientas personalizadas</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-6 rounded-2xl text-white">
                <AlertTriangle className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Amenazas</h3>
                <p className="text-indigo-100">Causan daños significativos a la seguridad y operaciones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <TrendingUp className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Estadísticas Clave sobre APT
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Los números revelan la magnitud y el impacto de las amenazas persistentes avanzadas a nivel global
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "287",
                label: "Días promedio",
                description: "Tiempo que una APT permanece sin detectar en la red",
                color: "text-red-600",
                bgColor: "bg-red-100 dark:bg-red-900/30"
              },
              {
                number: "67%",
                label: "De empresas",
                description: "Han sido víctimas de al menos un ataque APT en los últimos dos años",
                color: "text-orange-600",
                bgColor: "bg-orange-100 dark:bg-orange-900/30"
              },
              {
                number: "$4.45M",
                label: "Costo promedio",
                description: "Pérdida financiera promedio por incidente de seguridad APT",
                color: "text-yellow-600",
                bgColor: "bg-yellow-100 dark:bg-yellow-900/30"
              },
              {
                number: "40+",
                label: "Grupos APT",
                description: "Grupos conocidos activos a nivel mundial según Mandiant",
                color: "text-blue-600",
                bgColor: "bg-blue-100 dark:bg-blue-900/30"
              }
            ].map((stat, i) => (
              <div key={i} className="card p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-full mb-4`}>
                  <span className={`text-2xl font-bold ${stat.color}`}>{stat.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Globe className="h-16 w-16 text-primary-600 mx-auto mb-4" />  
            <h2 className="heading-lg text-gray-900 dark:text-white mb-4">
              Evolución Histórica de las APT
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Un recorrido por los hitos más importantes en el desarrollo de las amenazas persistentes avanzadas
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-primary-600 h-full rounded-full"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "1996",
                  title: "Moonlight Maze",
                  description: "Uno de los primeros casos documentados de APT, atribuido a actores estatales rusos que infiltraron sistemas militares y gubernamentales estadounidenses.",
                  side: "left"
                },
                {
                  year: "2006",
                  title: "Acuñación del Término",
                  description: "La Fuerza Aérea de EE.UU. acuña oficialmente el término 'Advanced Persistent Threat' para describir ataques sofisticados y prolongados.",
                  side: "right"
                },
                {
                  year: "2010",
                  title: "Stuxnet",
                  description: "El malware Stuxnet marca un hito al ser el primer caso conocido de ciberarma diseñada para atacar infraestructura física industrial.",
                  side: "left"
                },
                {
                  year: "2013",  
                  title: "APT1 Exposé",
                  description: "Mandiant publica el primer informe detallado sobre un grupo APT específico (APT1/Comment Crew), exponiendo sus operaciones al público.",
                  side: "right"
                },
                {
                  year: "2020",
                  title: "Era Moderna",
                  description: "Las APT evolucionan con técnicas de IA, ataques a la cadena de suministro y campañas masivas como SolarWinds.",
                  side: "left"
                }
              ].map((event, i) => (
                <div key={i} className={`flex items-center ${event.side === 'right' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${event.side === 'right' ? 'pl-8' : 'pr-8'}`}>
                    <div className={`card p-6 ${event.side === 'right' ? 'text-right' : ''}`}>
                      <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 border-4 border-white dark:border-gray-900 rounded-full"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section bg-primary-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <h2 className="text-2xl font-bold mb-2">¿Listo para profundizar?</h2>
              <p className="text-primary-100">Continuemos explorando los conceptos fundamentales de las APT</p>
            </div>
            
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button 
                onClick={() => navigate('/')}
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </button>
              
              <button 
                onClick={() => navigate('/concepts')}
                className="btn-primary bg-white text-primary-600 hover:bg-primary-50"
              >
                Conceptos Fundamentales
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}