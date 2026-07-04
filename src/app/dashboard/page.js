'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Cargando...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏠</span>
          <span className="text-blue-900 text-xl font-bold">CasaLog</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Hola, {session?.user?.name}</span>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="text-red-500 hover:text-red-700 font-medium transition"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Mi panel</h1>
        <p className="text-gray-500 mb-8">Gestiona el historial técnico de tus propiedades y vehículos</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <span className="text-3xl">🏠</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Mis casas</h2>
                <p className="text-gray-500 text-sm">Expedientes de propiedades</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">No tienes propiedades registradas aún</p>
            <Link
              href="/dashboard/properties/new"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition inline-block"
            >
              + Agregar propiedad
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <span className="text-3xl">🚗</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">Mis autos</h2>
                <p className="text-gray-500 text-sm">Expedientes de vehículos</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">No tienes vehículos registrados aún</p>
            <Link
              href="/dashboard/vehicles/new"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition inline-block"
            >
              + Agregar vehículo
            </Link>
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Actividad reciente</h2>
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <span className="text-5xl mb-4">📋</span>
            <p className="text-gray-400">Aún no hay servicios registrados</p>
            <p className="text-gray-400 text-sm">Agrega una propiedad o vehículo para comenzar</p>
          </div>
        </div>
      </div>
    </main>
  )
}