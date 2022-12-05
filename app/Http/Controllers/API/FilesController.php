<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;



class FilesController extends Controller
{
    public function upResident()
    {
        $file = new File();
        $file->name_file = request('name_file');
        $file->description = request('description');
        $file->path = request('path');
        $file->resident_id = auth()->user()->id;
        $file->status = "Enviado a División de Estudios";
        $file->save();
        return Redirect::route('Residente');
    }

    public function updateDivEst(Request $request, $id)
    {
        $file = File::find($id);
        $file->status = "Enviado a Jefe de Departamento";
        $file->jefdep_id = $request->jefdep_id;
        $file->save();
        return Redirect::route('Revisor');
    }
}
