import React from "react";
import { Head, useForm} from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import BarraResidente from "@/Layouts/BarraResidente";

export default function DashboardResidente(props) {
    const { data, setData, post, processing } = useForm({
        name_file: null,
        description: null,
        path: null,
        resident_id: null,
        status: null,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post("DashboardResidente");
    };

    return (
        //en un tema oscuro se hace una barra para mostrar el nombre del usuario
        <BarraResidente auth={props.auth} errors={props.errors}>
            <Head title="Residente" />

            <div className="flex py-8 bg-gray-900 sm:px-6 lg:px-8">
                <div className="flex-none max-w-md m-2 px-6 py-4 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                        Subir Archivo
                    </h2>

                    <form onSubmit={submit}>
                        <div className="flex flex-col mt-4">
                            <label
                                className="block text-sm text-gray-600 dark:text-gray-200"
                                htmlFor="name_file"
                            >
                                Nombre
                            </label>
                            <input
                                id="name_file"
                                type="text"
                                name="name_file"
                                onChange={onHandleChange}
                                value={data.name_file}
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
                                id="path"
                                type="text"
                                name="path"
                                onChange={onHandleChange}
                                value={data.path}
                                placeholder="URL del archivo"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                            />
                        </div>
                        {/* se pide la descripcion del archivo subido */}
                        <div className="flex flex-col mt-4">
                            <label
                                className="block text-sm text-gray-600 dark:text-gray-200"
                                htmlFor="description"
                            >
                                Descripcion
                            </label>
                            <input
                                id="description"
                                type="text"
                                name="description"
                                onChange={onHandleChange}
                                value={data.description}
                                placeholder="Descripcion del archivo"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                            />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <PrimaryButton processing={processing}>
                                Subir
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
                {/* se muestra una ventana flex a la derecha de la anterior */}
                <div className="flex-auto m-2 px-6 py-4 rounded-lg shadow-md dark:bg-gray-800 ">
                    <h2 className="text-3xl font-semibold text-center dark:text-white">
                        Archivos
                    </h2>
                    <div className="flex flex-col mt-4 p-6 bg-gray-800">
                        <table className="table-auto w-full text-md bg-gray-800  shadow-md rounded-8 mb-4 ">
                            <tbody>
                                <tr>
                                    <th className="text-left p-3 px-5">
                                        Nombre
                                    </th>
                                    <th className="text-left p-3 px-5">
                                        Status
                                    </th>
                                    <th className="text-left p-3 px-5">
                                        Acciones
                                    </th>
                                </tr>
                                {props.files.map((Files) => (
                                    <tr
                                        key={Files.id}
                                        className="border-b border-gray-800"
                                    >
                                        <td className="p-3 px-5">
                                            {Files.name_file}
                                        </td>
                                        <td className="p-3 px-5">
                                            {Files.status}
                                        </td>
                                        <td className="p-3 px-5">
                                            <button
                                                onClick={() =>
                                                    window.open(
                                                        Files.path,
                                                        "_blank"
                                                    )
                                                }
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Ver
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </BarraResidente>
    );
}
