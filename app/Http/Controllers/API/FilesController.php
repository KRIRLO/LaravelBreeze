<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\File;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;




class FilesController extends Controller
{

    public function index()
    {
        return Inertia::render('Auth/Residente',[
            'files' => File::with('user:id')->where('user.id',auth()->user()->id)->get(),
        ]);
    }

    /**
     * Manejar una solicitud de registro entrante.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */



    //funcion para regras para subir archivos
    public function FileCreated(Request $request)
    {
        $defecto = 'required|string|max:255';

        $request->validateFile([
            'name ' => $defecto,
            'description' => $defecto,
            'comentario1' => $defecto,
            'comentario2' => $defecto,
            'path' => $defecto,
            'resident_id' => 'required | integer',
            'revisor1_id' => 'required | integer',
            'revisor2_id' => 'required |integer',
            'status' => $defecto,
        ]);

        $file = File::create([
            'name' => $request->name,
            'description' => $request->description,
            'comentario1' => $request->comentario1,
            'comentario2' => $request->comentario2,
            'path' => $request->path,
            'resident_id' => $request->resident_id,
            'revisor1_id' => $request->revisor1_id,
            'revisor2_id' => $request->revisor2_id,
            'status' => $request->status,
        ]);


        event(new Registered($file));
        Auth::login($file);
        return redirect(route('file.index')) && response()->json(['message' => 'Archivo subido con exito'], 201);
    }
}


