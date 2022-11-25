import React, { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        numctrl: "",
        email: "",
        role: "",
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
                    <InputLabel forInput="email" value="Correo" />

                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">

                    <InputLabel forInput="role" value="Rol" />

                    <select
                        name="role"
                        value={data.role}
                        className="dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mt-1 "
                        onChange={onHandleChange}
                        required
                    >
                        <option value="DivEst">División de Estudios Profesionales</option>
                        <option value="JefDep">Jefe de Departamento</option>
                        <option value="Revisor">Revisor</option>
                        <option value="Asesor">Asesor</option>
                        <option value="Residente">Residente</option>
                    </select>

                    <InputError message={errors.role} className="mt-2" />
                </div>

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
            </form>
        </GuestLayout>
    );
}
