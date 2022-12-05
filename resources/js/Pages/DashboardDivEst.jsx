import React from "react";
import BarraDivEst from "@/Layouts/BarraDivEst";
import { Head, useForm } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard(props) {
    const { data, setData, post, processing } = useForm({
        jefdep_id: "",
        status: "",
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
        post("DashboardDivEst");
    };

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
                            {props.data.map((anteproyecto) => (
                                <tr key={anteproyecto.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-100">
                                            {anteproyecto.name_file}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-100">
                                            {anteproyecto.description}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-900">
                                            {anteproyecto.area}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {anteproyecto.status}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {/* checkbox al presionar la check box se evalua cuales son los revisores del area*/}
                                        <div className="flex items-center">
                                            <input
                                                onSubmit={submit}
                                                type="checkbox"
                                                name="asignar"
                                                id="asignar"
                                                value={anteproyecto.area}
                                                onChange={onHandleChange}
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
                                <th className="text-left p-3 px-5">Asignar</th>
                            </tr>
                            {props.users.map((JefDep) => (
                                <tr
                                    key={JefDep.id}
                                    className="border-b border-gray-800 hover:bg-gray-700"
                                >
                                    <td className="p-3 px-5">{JefDep.name}</td>
                                    <td className="p-3 px-5">{JefDep.area}</td>
                                    <td className="p-3 px-5">{JefDep.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {/* checkbox al presionar la check box se evalua cuales son los revisores del area*/}
                                        <div className="flex items-center">
                                            <input
                                                onSubmit={submit}
                                                type="checkbox"
                                                name="jefdep_id"
                                                id="jefdep_id"
                                                value={data.id}
                                                onChange={onHandleChange}
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <PrimaryButton processing={processing} className="" >Asignar</PrimaryButton>
            </div>
        </BarraDivEst>
    );
}
