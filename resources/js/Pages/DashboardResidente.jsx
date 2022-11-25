import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import BarraResidente from "@/Layouts/BarraResidente";

export default function DashboardResidente(props) {
    return (
        //en un tema oscuro se hace una barra para mostrar el nombre del usuario
        <BarraResidente
            auth={props.auth}
            errors={props.errors}
            header={
                // tema oscuro
                <h2 className="font-semibold text-xl text-gray-100 leading-tight">
                    Bienvenido: {props.auth.user.numctrl}
                </h2>
            }
        >
            <Head title="Residente" />

            <div className="flex py-12 bg-gray-900 sm:px-6 lg:px-8">
                <div className="flex-none max-w-md m-2 px-6 py-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                        Subir Archivo
                    </h2>

                    <form
                        action="/upload"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <div className="flex flex-col mt-4">
                            <label
                                className="block text-sm text-gray-600 dark:text-gray-200"
                                htmlFor="name"
                            >
                                Nombre
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Nombre del archivo"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                            />
                        </div>
                        {/* se pide la direccion del archivo subido desde google drive  */}
                        <div className="flex flex-col mt-4">
                            <label
                                className="block text-sm text-gray-600 dark:text-gray-200"
                                htmlFor="url"
                            >
                                URL
                            </label>
                            <input
                                id="url"
                                type="text"
                                name="url"
                                placeholder="URL del archivo"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                            />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg active:bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                {/* se muestra una ventana flex a la derecha de la anterior */}
                    <div className="flex-auto m-2 px-6 py-4 rounded-lg shadow-md dark:bg-gray-800 ">
                    <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                        Archivos
                    </h2>
                    <div className="flex flex-col mt-4">
                        <table className="w-full text-md bg-gray-800 shadow-md rounded-8 mb-4 ">
                            <tbody >
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
        </BarraResidente>
    );
}
