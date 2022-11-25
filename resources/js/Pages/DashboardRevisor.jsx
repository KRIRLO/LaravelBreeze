import React from "react";
import BarraRevisor from "@/Layouts/BarraRevisor";
import { Head } from "@inertiajs/inertia-react";

export default function DashboardRevisor(props) {
    return (
        <BarraRevisor auth={props.auth} errors={props.errors}>
            <Head title="Revisor" />

            {/* se  muestra una ventana que muetra la lista de archivos pdf por revisar con tilwind*/}

            <div className="flex flex-col p-6">
                <div className="flex flex-row justify-between">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-800">
                                    <thead className="bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                            >
                                                Anteproyecto
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                            >
                                                Autor
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                            >
                                                Fecha de creación
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                            >
                                                Estado
                                            </th>
                                            <th
                                                scope="col"
                                                className="relative px-6 py-3"
                                            >
                                                <span className="sr-only">
                                                    Ver
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {/* {props.archivos.map((archivo) => (
                                        <tr key={archivo.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {archivo.nombre}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">
                                                    {archivo.autor}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {archivo.fecha_creacion}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {archivo.estado}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a
                                                    href="/PDF"
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Ver
                                                </a>
                                            </td>
                                        </tr>
                                    ))} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    {/*  */}
                </div>
            </div>
        </BarraRevisor>
    );
}
