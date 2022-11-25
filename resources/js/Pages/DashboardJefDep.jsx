import React from "react";
import BarraJefDep from "@/Layouts/BarraJefDep";
import { Head } from "@inertiajs/inertia-react";

export default function DashboardJefDep(props) {
    return (
        <BarraJefDep auth={props.auth} errors={props.errors}>
            <Head title="Jefe de departamento" />

            {/* se  muestra una lista de anteproyectos para asignar a los 2 revisores por area con tilwind*/}
            <div className="flex py-12 bg-gray-900 sm:px-6 lg:px-8">
                <div className="flex-none  m-2 px-6 py-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <img
                                                                className="h-10 w-10 rounded-full"
                                                                src={archivo.foto}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {archivo.nombre}
                                                            </div>
                                                            <div className="text-sm text-gray-500">
                                                                {archivo.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {archivo.area}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {archivo.cargo}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {archivo.estado}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {archivo.created_at}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <a
                                                        href="#"
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
                {/* se muestra la lista de usuarios con el rol de revisores  */}
                <div className="flex-auto w-4 m-2 px-6 py-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                                                Revisor
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
                                                Cargo
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
                                        {/* {props.users.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-10 w-10">
                                                            <div className="h-10 w-10 rounded-full bg-gray-300">
                                                                {user.numctrl}
                                                            </div>
                                                    </div>
                                                </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {user.area}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.cargo}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                        {user.estado}
                                                    </span>
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
                                        ))} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BarraJefDep>
    );
}
