import React from "react";
import BarraJefDep from "@/Layouts/BarraJefDep";
import { Head } from "@inertiajs/inertia-react";

export default function DashboardJefDep(props) {
    return (
        <BarraJefDep
            auth={props.auth}
            errors={props.errors}
            header={
                <h3 className="bg-gray-900 font-semibold text-x1 text-gray-100 leading-tight">
                    {props.auth.user.area}
                </h3>

            }
        >
            <Head title="Jefe de departamento" />

            {/* se  muestra una lista de anteproyectos para asignar a los 2 revisores por area con tilwind*/}
            <div className="flex-auto m-2 px-6 py-4 rounded-lg shadow-md dark:bg-gray-800 ">
                <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                    Anteproyectos
                </h2>
                <div className="flex flex-col mt-4 p-6 bg-gray-800">
                    <table className="min-w-full divide-y divide-gray-800">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="text-left px-3 py-1">
                                    Anteproyecto
                                </th>
                                <th className="text-left px-3 py-1">Autor</th>
                                <th className="text-left px-3 py-1">
                                    Fecha de envio
                                </th>
                                <th className="text-left px-3 py-1">Status</th>
                                <th className="text-left px-3 py-1">Abrir</th>
                                <th className="text-left px-3 py-1">Asignar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {props.files.map((archivo) => (
                                <tr
                                    key={archivo.id}
                                    className="border-b border-gray-800 hover:bg-gray-700"
                                >
                                    <td className="px-3 py-5">
                                        {archivo.name}
                                    </td>
                                    <td className="px-3 py-5">
                                        {archivo.resident_id}
                                    </td>
                                    <td className="px-3 py-5">
                                        {
                                            /* {se le da formato a la fecha} */
                                            archivo.updated_at
                                                .split("T")[0]
                                                .split("-")
                                                .reverse()
                                                .join("/")
                                        }
                                    </td>
                                    <td className="px-3 py-5">
                                        {archivo.status}
                                    </td>
                                    <td className="px-3 py-5">
                                        <button
                                            onClick={() =>
                                                window.open(
                                                    archivo.path,
                                                    "_blank"
                                                )
                                            }
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Ver
                                        </button>
                                    </td>
                                    <td className="px-3 py-5">
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

            {/* se muestra la lista de usuarios con el rol de revisores  */}
            <div className="flex-auto m-2 px-6 py-12 rounded-lg shadow-md dark:bg-gray-800 ">
                <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                    Revisores
                </h2>
                <table className="min-w-full divide-y divide-gray-800">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-6 py-3">Revisor</th>
                            <th className="px-6 py-3">Area</th>
                            <th className="px-6 py-3">Estado</th>
                            <th className="px-6 py-3">Asignar</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {props.users.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-1">{user.name}</td>
                                <td className="px-6 py-1">{user.area}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </BarraJefDep>
    );
}
