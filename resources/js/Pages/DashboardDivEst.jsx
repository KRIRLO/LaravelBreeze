import React from "react";
import BarraDivEst from "@/Layouts/BarraDivEst";
import { Head, useForm } from "@inertiajs/inertia-react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Dashboard(props) {
    const { data, setData, post, processing } = useForm({
        id: null,
        jefdep_id: null,
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
        post("DashboardDivEst");
    };

    return (
        <BarraDivEst auth={props.auth} errors={props.errors}>
            <Head title="Division de estudios" />

            {/* se muestran los anteproyectos y se le asignan al area correspondiente despues de revision */}
            <div className="bg-gray-900 py-3">
                <div className="flex-auto bg-gray-900 lg:px-4 ">
                    <div className=" m-2  px-6  py-2 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                        <h2 className="text-3xl m-2 font-semibold text-center text-gray-700 dark:text-white">
                            Asignar Anteproyectos a Jefes de Departamento
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
                                            htmlFor="jefdep_id"
                                        />
                                        <select
                                            name="jefdep_id"
                                            id="jefdep_id"
                                            className="block w-full mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
                                            onChange={onHandleChange}
                                        >
                                            <option value="">
                                                Selecciona un Jefe de
                                                Departamento
                                            </option>
                                            {props.jefdep.map((jefdep) => (
                                                <option
                                                    key={jefdep.id}
                                                    value={
                                                        data.jefdep_id ==
                                                        jefdep.id
                                                    }
                                                >
                                                    {jefdep.name}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={props.errors.jefdep_id}
                                        />
                                    </div>

                                    <div className="px-5">
                                        <InputLabel
                                            label="Jefes de Departamento"
                                            htmlFor="jefdep_id"
                                        />
                                        <select
                                            name="jefdep_id"
                                            id="jefdep_id"
                                            className="block w-full mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
                                            onChange={onHandleChange}
                                        >
                                            <option value="">
                                                Selecciona un anteproyecto
                                            </option>
                                            {props.files.map((anteproyecto) => (
                                                <option
                                                    key={anteproyecto.id}
                                                    value={
                                                        data.id ==
                                                        anteproyecto.id
                                                    }
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

                <div className="flex py-5 bg-gray-900 sm:px-2 lg:px-4">
                    {/* segundo cuadro */}

                    <div className="flex-auto m-2 px-6 py-4 rounded-lg shadow-md dark:bg-gray-800 ">
                        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                            Jefes de departamento
                        </h2>
                        <div className=" mt-4">
                            {/* barra de busqueda */}
                            <div className="flex items-center justify-center"></div>
                            {/* tabla de jefes de departamento */}
                            <table className="w-full text-md bg-gray-800 shadow-md rounded-8 mb-4 ">
                                <tbody>
                                    <tr className="border-b-black">
                                        <th className="text-left p-3 px-5">
                                            Nombre
                                        </th>
                                        <th className="text-left p-3 px-5">
                                            Area o carrera
                                        </th>
                                        <th className="text-left p-3 px-5">
                                            Correo
                                        </th>
                                    </tr>
                                    {props.jefdep.map((JefDep) => (
                                        <tr
                                            key={JefDep.id}
                                            className="border-b border-gray-800 hover:bg-gray-700"
                                        >
                                            <td className="p-3 px-5">
                                                {JefDep.name}
                                            </td>
                                            <td className="p-3 px-5">
                                                {JefDep.area}
                                            </td>
                                            <td className="p-3 px-5">
                                                {JefDep.email}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex-auto m-2 px-6 py-4 rounded-lg shadow-md dark:bg-gray-800 ">
                        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
                            Anteproyectos sin asignar
                        </h2>
                        <div className="mt-4">
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
                                            Area
                                        </th>
                                        <th className="text-left px-3 py-5">
                                            Estado
                                        </th>
                                    </tr>
                                    {props.tabla.map((JefDep) => (
                                        <tr
                                            key={JefDep.id}
                                            className="border-b border-gray-800"
                                        >
                                            <td className="p-3 px-5">
                                                {JefDep.name}
                                            </td>
                                            <td className="p-3 px-5">
                                                {JefDep.description}
                                            </td>
                                            <td className="p-3 px5">
                                                <span className="  px-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-900">
                                                    {JefDep.area}
                                                </span>
                                            </td>
                                            <td className="px-3 py-5">
                                                {JefDep.status}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </BarraDivEst>
    );
}
