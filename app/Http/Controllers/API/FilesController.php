<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\File;
use Illuminate\Http\Request;


class FilesController extends Controller
{
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
            'resident_id' => 'required|integer',
            'revisor_id' => 'required|integer',
            'status' => $defecto,
        ]);

        $files = File::create([
            'name' => $request->name,
            'description' => $request->description,
            'comentario1' => $request->comentario1,
            'comentario2' => $request->comentario2,
            'path' => $request->path,
            'resident_id' => $request->resident_id,
            'revisor_id' => $request->revisor_id,
            'status' => $request->status,
        ]);

        // se suben los datos a la base de datos
        $files->save();
        // se regresa el archivo subido
        return $files;
        // se regresa un mensaje de exito
        return response()->json([
            'message' => 'Archivo subido con exito',
        ]);
    }


    // funcion para mostrar archivo pdf en el navegador desde url de google drive

    public function show($id)
    {
        $file = File::find($id);
        $url = $file->path;
        return redirect($url);
    }

    //funcion para subir url a la base de datos de google drive

    public function upload(Request $request)
    {
        $file = new File();
        $file->name = $request->name;
        $file->description = $request->description;
        $file->comentario1 = $request->comentario1;
        $file->comentario2 = $request->comentario2;
        $file->path = $request->path;
        $file->resident_id = $request->resident_id;
        $file->revisor_id = $request->revisor_id;
        $file->status = $request->status;
        $file->save();
        return redirect()->route('Residente');
    }

}
