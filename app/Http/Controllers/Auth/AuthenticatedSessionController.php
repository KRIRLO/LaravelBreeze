<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Manejar una solicitud de autenticación entrante.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        switch (Auth::user()->role) {
            case "Residente":
                //se redirecciona a la ruta de residente
                return redirect()->route('Residente');
                break;
            case "Asesor":
                //se redirecciona a la ruta de asesor
                return redirect()->route('Asesor');
                break;
            case "Revisor":
                //se redirecciona a la ruta de revisor
                return redirect()->route('Revisor');
                break;
            case "JefDep":
                //se redirecciona a la ruta de jefe de departamento
                return redirect()->route('JefDep');
                break;
            case "DivEst":
                //se redirecciona a la ruta de division de estudios
                return redirect()->route("DivEst");
                break;
            default:
                //se redirecciona a la ruta de login
                return redirect()->route("login");
                break;
        }
    }

    /**
     * Cerrar la sesión de la solicitud actual.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */

    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
