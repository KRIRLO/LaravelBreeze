import React from "react";
import BarraRevisor from "@/Layouts/BarraRevisor";
import { Head, useForm } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Inertia } from "@inertiajs/inertia";

export default function DashboardRevisor(props) {
    const { data, setData, post, processing } = useForm({
        comentario: null,
        revisor_id: null,
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
        post("DashboardRevisor");
    };

    data.revisor_id = props.auth.user.id;

    return (
        <BarraRevisor auth={props.auth} errors={props.errors}>
            <Head title="Revisor" />

            {/* se  muestra una ventana que muetra la lista de archivos pdf por revisar con tilwind*/}

            <div className="flex px-6 justify-center ">
                <div className="flex-none py-5 bg-gray-900 sm:px-2 lg:px-4">
                    {/* segundo cuadro */}

                    <div className="flex-auto h-full  w-full m-2 px-6 py-4 mt-2 rounded-lg shadow-md dark:bg-gray-800 ">
                        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
                            Archivos por revisar
                        </h2>
                        <div className=" mt-4">
                            {/* barra de busqueda */}
                            <div className="flex items-center justify-center"></div>
                            {/* tabla de jefes de departamento */}
                            <table className="w-full text-md bg-gray-800 shadow-md rounded-8 mb-4 ">
                                <tbody>
                                    <tr className="border-b-black">
                                        <th className="text-left px-3 py-5">
                                            Nombre
                                        </th>
                                        <th className="text-left px-3 py-5">
                                            Descripción
                                        </th>
                                        <th className="text-left px-3 py-5">
                                            Fecha de creación
                                        </th>
                                        <th className="text-left px-3 py-5">
                                            Abrir
                                        </th>
                                    </tr>
                                    {props.files.map((file) => (
                                        <tr
                                            key={file.id}
                                            className="border-b border-gray-800 hover:bg-gray-700"
                                        >
                                            <td className="px-3 py-5">
                                                {file.name_file}
                                            </td>
                                            <td className="px-3 py-5">
                                                {file.description}
                                            </td>
                                            <td className="px-3 py-5">
                                                {file.created_at
                                                    .split("T")[0]
                                                    .split("-")
                                                    .reverse()
                                                    .join("/")}
                                            </td>
                                            <td className="px-3 py-5">
                                                <button
                                                    onClick={() =>
                                                        window.open(
                                                            file.path,
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
                <div className="flex-none py-5 bg-gray-900 sm:px-2 lg:px-4">
                    <div className="flex-auto h-full  w-full m-2 px-6 py-4 mt-2 rounded-lg shadow-md dark:bg-gray-800 ">
                        <h2 className="text-2xl m-2 font-semibold text-center text-gray-700 dark:text-white">
                            Comentario
                        </h2>
                        <div className="mt-4">
                            <form
                                className="flex px-3 mb-2 justify-center"
                                onSubmit={submit}
                            >
                                <div className="flex text-md py-3 bg-gray-800 shadow-md rounded-8 mb-4">
                                    {/* se escribe un comentario  */}

                                    <div className="flex flex-col w-full mt-4 px-5 rounded-lg">
                                        <textarea
                                            id="comentario"
                                            rows="8"
                                            cols="50"
                                            class=" w-full mt-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Escriba su comentario a continuación..."
                                            name="comentario"
                                            onChange={onHandleChange}
                                            value={data.comentario}
                                        ></textarea>

                                        <div className="px-5">
                                            <InputLabel
                                                label="Jefes de Departamento"
                                                htmlFor="status"
                                            />
                                            <select
                                                name="status"
                                                id="status"
                                                value={data.status}
                                                className="block w-full mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
                                                onChange={onHandleChange}
                                            >
                                                <option value="">
                                                    Respuesta
                                                </option>
                                                <option value="Aceptado">
                                                    Aceptado
                                                </option>
                                                <option value="Aceptado con comentario">
                                                    Aceptado con comentario
                                                </option>
                                                <option value="Rechazado con comentario">
                                                    Rechazado con comentario
                                                </option>
                                            </select>
                                            <InputError
                                                message={props.errors.status}
                                            />
                                        </div>

                                        <PrimaryButton
                                            className="mt-4 justify-center"
                                            processing={processing}
                                        >
                                            Guardar comentario
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </BarraRevisor>
    );
}
