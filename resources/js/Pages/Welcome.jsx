import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />

            {/* se crea una interface de bienvenida */}

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                                            Bienvenido a PPRA
                                        </div>
                                        {/* menu de navegacion */}

                                        <div className="mt-6 text-gray-500 dark:text-gray-400 text-sm">
                                            <ul>
                                                <li className="mt-4">
                                                    <Link
                                                        href="/login"
                                                        className="text-indigo-600 hover:text-indigo-900 dark:hover:text-indigo-200"
                                                    >
                                                        Iniciar sesion
                                                    </Link>
                                                </li>
                                                <li className="mt-4">
                                                    <Link
                                                        href="/register"
                                                        className="text-indigo-600 hover:text-indigo-900 dark:hover:text-indigo-200"
                                                    >
                                                        Registrar
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                                            ¿Qué es PPRA?
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                                            PPRA es una pagina web que busca
                                            facilitar el proceso de registro,
                                            aprobacion y asignacion para la
                                            revision de anteproyectos en el
                                            Instituto Tecnologico de México
                                            Campus Ciudad Valles S.L.P.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
