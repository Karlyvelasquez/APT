import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DarkModeToggle from '../components/DarkModeToggle'

export default function AnswersPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [authorized, setAuthorized] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === '123') {
      setAuthorized(true)
      setError('')
    } else {
      setError('Contraseña incorrecta')
    }
  }

  const questions = [
    {
      q: '¿Qué significa la "P" en "APT"?',
      options: ['Predictiva', 'Pública', 'Persistente', 'Privada'],
      answer: 'Persistente'
    },
    {
      q: '¿Cuál es el tiempo promedio que una APT permanece sin ser detectada (estadística presentada)?',
      options: ['30 días', '287 días', '7 días', '1000 días'],
      answer: '287 días'
    },
    {
      q: '¿Cuál es la Fase 1 del ciclo de vida de un ataque APT según la presentación?',
      options: ['Acceso Inicial', 'Establecimiento', 'Escalación y Movimiento Lateral', 'Reconocimiento'],
      answer: 'Reconocimiento'
    },
    {
      q: '¿Qué tipo de actor APT suele estar patrocinado por gobiernos?',
      options: ['Ciberdelincuentes', 'Hacktivistas', 'Actores estatales', 'Script kiddies'],
      answer: 'Actores estatales'
    },
    {
      q: '¿Qué marco propone las funciones "Identificar / Proteger / Detectar / Responder / Recuperar"?',
      options: ['MITRE ATT&CK', 'ISO 27001', 'NIST Cybersecurity Framework', 'COBIT'],
      answer: 'NIST Cybersecurity Framework'
    },
    {
      q: '¿Qué estrategia de prevención se basa en "no confiar en nadie por defecto"?',
      options: ['Defensa en Profundidad', 'Micro-segmentación', 'Zero Trust Architecture', 'Deception Technology'],
      answer: 'Zero Trust Architecture'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <nav className="fixed w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button onClick={() => navigate('/')} className="flex items-center space-x-3 hover:opacity-80 transition">
                <span className="text-2xl font-bold">Respuestas APT</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => navigate('/quiz')} className="btn-secondary">Volver al Quiz</button>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 max-w-4xl mx-auto px-4">
        {!authorized ? (
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Acceso a respuestas</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Introduce la contraseña para ver las respuestas.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-800"
              />
              {error && <div className="text-sm text-red-600">{error}</div>}
              <div className="flex justify-end">
                <button type="submit" className="btn-primary">Ver respuestas</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Respuestas (contraseña verificada)</h1>
              <ul className="space-y-4">
                {questions.map((item, i) => (
                  <li key={i} className="p-4 border rounded-md">
                    <div className="font-semibold mb-2">{i + 1}. {item.q}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.options.map((opt, j) => (
                        <div key={j} className={`p-2 rounded ${opt === item.answer ? 'bg-green-100 text-green-800' : 'bg-gray-50 dark:bg-gray-800'}`}>
                          {String.fromCharCode(65 + j)}: {opt}
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">Respuesta correcta: <strong>{item.answer}</strong></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between">
              <button onClick={() => { setAuthorized(false); setPassword('') }} className="btn-secondary">Cerrar respuestas</button>
              <button onClick={() => navigate('/')} className="btn-primary">Volver al inicio</button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
