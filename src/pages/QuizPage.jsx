export default function QuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Quiz Interactivo</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Quiz sobre APT en desarrollo...</p>
        <div className="mt-8">
          <a 
            href="https://kahoot.it" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Abrir Kahoot
          </a>
        </div>
      </div>
    </div>
  )
}