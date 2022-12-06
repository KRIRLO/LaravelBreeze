<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;


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
            'name' => ['required', 'string', 'max:255'],
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
    }

    /**
     * Manejar una solicitud de registro entrante.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */

    public function storeDivEst(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
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
        //mensaje de que se registro correctamente
        return Redirect::route('DivEst')->with('message', 'Usuario registrado correctamente');
    }
}
