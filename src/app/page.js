import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🏠</span>
          <span className="text-white text-2xl font-bold">CasaLog</span>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Registrarse
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-8 py-24">
        <h1 className="text-white text-5xl font-bold mb-6">
          El expediente técnico de tu hogar
        </h1>
        <p className="text-blue-100 text-xl max-w-2xl mb-10">
          Documenta todos los servicios, reparaciones y características de tu casa y auto.
          Como un expediente clínico, pero para tu patrimonio.
        </p>
        <Link
          href="/register"
          className="bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-100 transition"
        >
          Comenzar gratis →
        </Link>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-24 max-w-6xl mx-auto">
        <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-white">
          <div className="text-4xl mb-4">📋</div>
          <h3 className="text-xl font-bold mb-2">Historial completo</h3>
          <p className="text-blue-100">Registra cada servicio con fecha, costo, técnico y descripción detallada.</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-white">
          <div className="text-4xl mb-4">🔧</div>
          <h3 className="text-xl font-bold mb-2">Directorio de técnicos</h3>
          <p className="text-blue-100">Guarda tus técnicos de confianza y encuentra nuevos cuando los necesites.</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-white">
          <div className="text-4xl mb-4">🚗</div>
          <h3 className="text-xl font-bold mb-2">Casa y auto</h3>
          <p className="text-blue-100">Un solo lugar para el historial técnico de todos tus bienes.</p>
        </div>
      </section>
    </main>
  )
}