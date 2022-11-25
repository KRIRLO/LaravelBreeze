import React from "react";
import BarraDivEst from "@/Layouts/BarraDivEst";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    return (
        <BarraDivEst auth={props.auth} errors={props.errors}>
            <Head title="Division de estudios" />

            {/* se muestran los anteproyectos y se le asignan al area correspondiente despues de revision */}

            <div className="flex py-12 bg-gray-900 sm:px-6 lg:px-8">
                <div className="flex-none m-2 px-6 py-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Anteproyectos
                    </h1>
                    {/* lista de anteproyectos todos */}

                    <div className="flex flex-col mt-4">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-800">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                                >
                                                    Nombre
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                                >
                                                    Descripción
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider"
                                                >
                                                    Area
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
                                                        Asignar
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {/* {props.anteproyectos.map(
                                                (anteproyecto) => (
                                                    <tr key={anteproyecto.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {
                                                                    anteproyecto.Nombre
                                                                }
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-900">
                                                                {
                                                                    anteproyecto.descripcion
                                                                }
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                                {
                                                                    anteproyecto.area
                                                                }
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {
                                                                anteproyecto.status
                                                            }
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <a
                                                                href="#"
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                Asignar
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            )} */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* se muestra una ventana flex a la derecha de la anterior */}
                <div className="flex-auto m-2 px-6 py-4 rounded-lg shadow-md dark:bg-gray-800 ">
                    <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                        Archivos
                    </h2>
                    <div className="flex flex-col mt-4">
                        <table className="w-full text-md bg-gray-800 shadow-md rounded-8 mb-4 ">
                            <tbody>
                                <tr className="border-b-black">
                                    <th className="text-left p-3 px-5">
                                        Nombre
                                    </th>
                                    <th className="text-left p-3 px-5">
                                        Status
                                    </th>
                                </tr>
                                {/* {props.archivos.map((archivo) => (
                                    <tr
                                        key={archivo.id}
                                        className="border-b border-gray-200 hover:bg-gray-100"
                                    >
                                        <td className="p-3 px-5">
                                            {archivo.name}
                                        </td>
                                        <td className="p-3 px-5">
                                            {archivo.status}
                                        </td>
                                    </tr>
                                ))} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </BarraDivEst>
    );
}
