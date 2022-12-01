import React from "react";
import BarraDivEst from "@/Layouts/BarraDivEst";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <BarraDivEst auth={props.auth} errors={props.errors}>
            <Head title="Division de estudios" />

            {/* se muestran los anteproyectos y se le asignan al area correspondiente despues de revision */}

            <div className="flex-auto m-2 px-6 py-12 rounded-lg shadow-md dark:bg-gray-800 ">
                <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                    Anteproyectos
                </h2>
                <div className="flex flex-col mt-4">
                    <table className="w-full text-md bg-gray-800 shadow-md rounded-8 mb-4 ">
                        <tbody>
                            <tr className="border-b-black">
                                <th className="text-left p-3 px-5">Nombre</th>
                                <th className="text-left p-3 px-5">
                                    Descripción
                                </th>
                                <th className="text-left p-3 px-5">Area</th>
                                <th className="text-left p-3 px-5">Estado</th>
                                <th className="text-left p-3 px-5">Asignar</th>
                            </tr>
                            {props.files.map((anteproyecto) => (
                                <tr key={anteproyecto.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-100">
                                            {anteproyecto.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-100">
                                            {anteproyecto.description}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-900">
                                            {/* se buscan los datos de acuerdo al resident_id en la tabla users*/}
                                            {
                                                //se ejecura la funcion getArea
                                                props.users.map((area) => (
                                                    <div key={area.id}>
                                                        {area.id ===
                                                        anteproyecto.resident_id
                                                            ? area.area
                                                            : area.area}
                                                    </div>
                                                ))
                                            }
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {anteproyecto.status}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {/* checkbox */}
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                name="asignar"
                                                id="asignar"
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* segundo cuadro */}

            <div className="flex-auto m-2 px-6 py-12 rounded-lg shadow-md dark:bg-gray-800 ">
                <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                    Jefes de departamento
                </h2>
                <div className="flex flex-col mt-4">
                    <table className="w-full text-md bg-gray-800 shadow-md rounded-8 mb-4 ">
                        <tbody>
                            <tr className="border-b-black">
                                <th className="text-left p-3 px-5">Nombre</th>
                                <th className="text-left p-3 px-5">
                                    Area o carrera
                                </th>
                                <th className="text-left p-3 px-5">Correo</th>
                                <th className="text-left p-3 px-5">Acciones</th>
                            </tr>
                            {props.users.map((JefDep) => (
                                <tr
                                    key={JefDep.id}
                                    className="border-b border-gray-800 hover:bg-gray-700"
                                >
                                    <td className="p-3 px-5">{JefDep.name}</td>
                                    <td className="p-3 px-5">{JefDep.area}</td>
                                    <td className="p-3 px-5">{JefDep.email}</td>
                                    <td className="p-3 px-5">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Asignar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </BarraDivEst>
    );
}
