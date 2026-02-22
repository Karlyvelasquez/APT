import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Shield, BookOpen } from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'

export default function ReferencesPage() {
  const navigate = useNavigate()

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
                  <h1 className="text-2xl font-bold text-gradient">Referencias</h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Fuentes Académicas</p>
                </div>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/prevention')}
                className="btn-secondary"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </button>
              <button
                onClick={() => navigate('/quiz')}
                className="btn-secondary"
              >
                Siguiente: Quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-28 pb-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-6 py-3 rounded-full mb-8">
            <BookOpen className="h-5 w-5" />
            <span className="font-medium">Bibliografía y Fuentes</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Referencias Académicas</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Fuentes y bibliografía utilizadas en la presentación</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Bibliografía</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Mandiant.</strong> (2024). <em>Advanced Persistent Threat Groups</em>. 
                FireEye Threat Intelligence. 
                <a href="https://www.mandiant.com/resources/apt-groups" className="text-blue-600 hover:underline ml-1">
                  https://www.mandiant.com/resources/apt-groups
                </a>
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NIST.</strong> (2023). <em>Cybersecurity Framework 2.0</em>. 
                National Institute of Standards and Technology. 
                <a href="https://www.nist.gov/cybersecurity" className="text-blue-600 hover:underline ml-1">
                  https://www.nist.gov/cybersecurity
                </a>
              </p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>MITRE.</strong> (2024). <em>ATT&CK Framework - Enterprise Tactics</em>. 
                MITRE Corporation. 
                <a href="https://attack.mitre.org/" className="text-blue-600 hover:underline ml-1">
                  https://attack.mitre.org/
                </a>
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ColCERT.</strong> (2024). <em>Reporte de Ciberseguridad Colombia</em>. 
                Centro Cibernético Policíal. 
                <a href="https://www.policia.gov.co/contenido/centro-cibernetico-policial" className="text-blue-600 hover:underline ml-1">
                  https://www.policia.gov.co/contenido/centro-cibernetico-policial
                </a>
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Artículos Académicos</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>González-Manzano, L., de Fuentes, J. M., Lombardi, F. &amp; Ramos, C.</strong> (2023). <em>A technical characterization of APTs by leveraging public resources</em>. International Journal of Information Security, 22, 1567–1584. <a href="https://doi.org/10.1007/s10207-023-00706-" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/s10207-023-00706-</a>
                  <br />
                  <a href="https://unaulaedu-my.sharepoint.com/:b:/g/personal/karly_velasquez0845_unaula_edu_co/IQBoqRkVTlYAR72m8aOmHPkFAdeXEjyD3U20GCeg8CJ3FNY?e=89mDJY" className="inline-flex items-center mt-1 text-sm text-purple-600 dark:text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">📄 Abrir PDF</a>
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Che Mat, N. I., Jamil, N., Yusoff, Y. &amp; Mat Kiah, M. L.</strong> <em>A systematic literature review on advanced persistent threat behaviors and its detection strategy</em>.
                  <br />
                  <a href="https://unaulaedu-my.sharepoint.com/:b:/g/personal/karly_velasquez0845_unaula_edu_co/IQBw9jwle3orQ6o67YSGlrdMAapu3p94c864hPl0hhT9MX8?e=GKJMGu" className="inline-flex items-center mt-1 text-sm text-teal-600 dark:text-teal-400 hover:underline" target="_blank" rel="noopener noreferrer">📄 Abrir PDF</a>
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Rot, A. &amp; Olszewski, B.</strong> <em>Advanced Persistent Threats Attacks in Cyberspace. Threats, Vulnerabilities, Methods of Protection</em>. Wroclaw University of Economics / University of Wroclaw.
                  <br />
                  <a href="https://unaulaedu-my.sharepoint.com/:b:/g/personal/karly_velasquez0845_unaula_edu_co/IQDctdEUB1ELTZbVh6vfSBRPAT3eWlXJmQBxXV1Pw0rtSoc?e=1VDCSR" className="inline-flex items-center mt-1 text-sm text-orange-600 dark:text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">📄 Abrir PDF</a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recursos Adicionales</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>SANS Institute - APT Detection and Response</li>
              <li>Carnegie Mellon CERT - Advanced Persistent Threats</li>
              <li>Kaspersky Threat Intelligence - APT Reports</li>
              <li>CrowdStrike Intelligence - Nation-State Actors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <section className="section bg-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div>
              <h2 className="text-2xl font-bold mb-2">Referencias Revisadas</h2>
              <p className="text-indigo-100">Ahora pongamos a prueba tus conocimientos sobre APT</p>
            </div>
            
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button 
                onClick={() => navigate('/prevention')}
                className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-indigo-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Prevención
              </button>
              
              <button 
                onClick={() => navigate('/quiz')}
                className="btn-primary bg-white text-indigo-600 hover:bg-indigo-50"
              >
                Quiz Interactivo
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}