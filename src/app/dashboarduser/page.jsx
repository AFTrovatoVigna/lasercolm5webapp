import React from 'react'

const DashboardUser = () => {
  return (
    <div className="max-w-3xl mt-[100px] mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow-lg">
            <h1 className="mb-6 text-3xl font-bold text-center">Perfil del Usuario</h1>
            <div className="space-y-4">
                <div className="flex justify-between">
                    <span className="font-semibold">Nombre:</span>
                    <span></span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Email:</span>
                    <span></span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">DNI:</span>
                    <span></span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Fecha de Nacimiento:</span>
                    <span></span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Teléfono:</span>
                    <span></span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">País:</span>
                    <span></span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Ciudad:</span>
                    <span></span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Dirección:</span>
                    <span></span>
                </div>
            </div>
        </div>

  )
}
export default DashboardUser;