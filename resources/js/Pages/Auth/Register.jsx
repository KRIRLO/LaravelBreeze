import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { isNull } from "lodash";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        numctrl: "",
        email: "",
        role: "",
        area: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

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
        post(route("register"));
    };

    if (processing === true) {
        return (
            // ventana flotante que dice que se esta procesando
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 bg-gray-500 bg-opacity-1 transition-opacity"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                    </div>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <div
                        className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-900 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg
                                        className="h-6 w-6 text-green-100"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                        className="text-lg leading-6 font-medium text-gray-900"
                                        id="modal-headline"
                                    >
                                        Procesando...
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm leading-5 text-gray-500">
                                            Por favor espere...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (data.numctrl != "") {
        data.email = data.numctrl + "@tecvalles.mx";
    }

    return (
        <GuestLayout>
            <Head title="Registar" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Nombre Completo" />

                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="numctrl" value="Numero de control" />

                    <TextInput
                        type="text"
                        name="numctrl"
                        value={data.numctrl}
                        className="mt-1 block w-full"
                        autoComplete="numctrl"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.numctrl} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="role" value="Rol" />

                    <select
                        name="role"
                        value={data.role}
                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mt-1 "
                        onChange={onHandleChange}
                    >
                        <option value="">Seleccionar un rol</option>
                        <option value="Revisor">Revisor</option>
                        <option value="Residente">Residente</option>
                        <option value="JefDep">Jefe de Departamento</option>
                        <option value="DivEst">
                            División de Estudios Profesionales
                        </option>
                    </select>

                    <InputError message={errors.role} className="mt-2" />
                </div>

                {data.role != "DivEst" ? (
                    <div className="mt-4">
                        <InputLabel forInput="area" value="Carrera" />

                        <select
                            name="area"
                            value={data.area}
                            className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mt-1 "
                            onChange={onHandleChange}
                        >
                            <option value="">Selecciona un area</option>
                            <option value="Ing. En sistemas computacionales">
                                Ing. en sistemas computacionales
                            </option>
                            <option value="Ing. Industrial">
                                Ing. Industrial
                            </option>
                            <option value="Ing. En gestion empresarial">
                                Ing. en gestion empresarial
                            </option>
                            <option value="Ing. En industrias alimentarias">
                                Ing. en industrias alimentarias
                            </option>
                            <option value="Ing. Ambiental">
                                Ing. Ambiental
                            </option>
                            <option value="Ing. En gastronomia">
                                Ing. en gastronomia
                            </option>
                        </select>
                        <InputError message={errors.area} className="mt-2" />
                    </div>
                ) : null}

                <div className="mt-4">
                    <InputLabel forInput="password" value="Contraseña" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <InputLabel
                        forInput="password_confirmation"
                        value="Confirmar contraseña"
                    />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm hover:text-gray-200 dark:text-gray-400"
                    >
                        ¿Ya tienes una cuenta?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Registrar
                    </PrimaryButton>
                </div>

                <InputError message={errors.error} className="mt-4" />
            </form>
        </GuestLayout>
    );
}
