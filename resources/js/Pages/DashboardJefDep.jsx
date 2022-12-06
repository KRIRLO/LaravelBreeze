import React from "react";
import BarraJefDep from "@/Layouts/BarraJefDep";
import { Head, useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";

export default function DashboardJefDep(props) {
    const { data, setData, post, processing } = useForm({
        id_file: null,
        revisor1_id: null,
        revisor2_id: null,
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
        post("DashboardJefDep");
    };

    return (
        <BarraJefDep auth={props.auth} errors={props.errors}>
            <Head title="Jefe de departamento" />

            <div className="bg-gray-900 py-3">
                <div className="flex-auto m-2 px-6 py-3 rounded-lg shadow-md dark:bg-gray-800 ">
                    <h2 className="text-3xl m-2 font-semibold text-center text-gray-700 dark:text-white">
                        Asignar dos revisores a un proyecto
                    </h2>
                    <div className="mt-4">
                        {/* formulario para asignar al JefDep */}
                        <form
                            className="flex px-3 mb-2  justify-center"
                            onSubmit={submit}
                        >
                            <div className="flex text-md py-3 bg-gray-800 shadow-md rounded-8 mb-4">
                                <div className="px-5 ">
                                    <InputLabel
                                        label="Jefes de Departamento"
                                        htmlFor="revisor1_id"
                                    />
                                    <select
                                        name="revisor1_id"
                                        id="revisor1_id"
                                        value={data.revisor1_id}
                                        className="block w-full mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
                                        onChange={onHandleChange}
                                    >
                                        <option value="">
                                            Selecciona al revisor 1
                                        </option>
                                        {props.revisores.map((revisor1) => (
                                            <option
                                                key={revisor1.id}
                                                value={revisor1.id}
                                            >
                                                {revisor1.name}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={props.errors.revisor1}
                                    />
                                </div>
                                            {/* revisor 2 */}
                                <div className="px-5 ">
                                    <InputLabel
                                        label="Jefes de Departamento"
                                        htmlFor="revisor2_id"
                                    />
                                    <select
                                        name="revisor2_id"
                                        id="revisor2_id"
                                        value={data.revisor2_id}
                                        className="block w-full mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
                                        onChange={onHandleChange}
                                    >
                                        <option value="">
                                            Selecciona al revisor 2
                                        </option>
                                        {props.revisores.map((revisor2) => (
                                            <option
                                                key={revisor2.id}
                                                value={revisor2.id}
                                            >
                                                {revisor2.name}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={props.errors.revisor2}
                                    />
                                </div>

                                <div className="px-5">
                                    <InputLabel
                                        label="Jefes de Departamento"
                                        htmlFor="jefdep_id"
                                    />
                                    <select
                                        name="id_file"
                                        id="id_file"
                                        value={data.id_file}
                                        className="block w-full mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
                                        onChange={onHandleChange}
                                    >
                                        <option value="">
                                            Selecciona un anteproyecto
                                        </option>
                                        {props.files.map((anteproyecto) => (
                                            <option
                                                key={anteproyecto.id}
                                                value={anteproyecto.id}
                                            >
                                                {anteproyecto.name_file}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError
                                        message={props.errors.jefdep_id}
                                    />
                                </div>
                                <div className="px-5">
                                    <PrimaryButton
                                        className="mt-4"
                                        processing={processing}
                                    >
                                        Asignar
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* se  muestra una lista de anteproyectos para asignar a los 2 revisores por area con tilwind*/}
            <div className="flex-auto m-2 px-6 py-2 rounded-lg shadow-md dark:bg-gray-800">
                <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                    Anteproyectos en {props.auth.user.area}
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
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {props.tabla.map((archivo) => (
                                <tr
                                    key={archivo.id}
                                    className="border-b border-gray-800 hover:bg-gray-700"
                                >
                                    <td className="px-3 py-5">
                                        {archivo.name_file}
                                    </td>
                                    <td className="px-3 py-5">
                                        {archivo.name}
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* se muestra la lista de usuarios con el rol de revisores  */}
            <div className="flex-auto m-2 px-6 py-4 rounded-lg shadow-md dark:bg-gray-800 ">
                <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                    Revisores de la carrera de  {props.auth.user.area}
                </h2>
                <div className="mt-4">
                    <table className="w-full text-md bg-gray-800 shadow-md rounded-8 mb-4 ">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="text-left px-6 py-3">Nombre</th>
                                <th className="text-left px-6 py-3">Correo</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {props.revisores.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-3">{user.name}</td>
                                    <td className="px-6 py-3">{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </BarraJefDep>
    );
}
