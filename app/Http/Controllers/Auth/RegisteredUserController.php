<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\File;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Manejar una solicitud de registro entrante.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required','string','max:255'],
            'numctrl' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users|ends_with:@tecvalles.mx',
            'role' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'numctrl' => $request->numctrl,
            'email' => $request->email,
            'role' => $request->role,
            'area' => $request->area,
            'password' => Hash::make($request->password),
        ]);


        $user->save();
        /* switch ($user->role) {
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
        } */
    }
}
