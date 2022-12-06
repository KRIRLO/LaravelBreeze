<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\File;
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

    public function updateDivEst()
    {
        $file = File::find(request('id_file'));


        $file->jefdep_id = request('jefdep_id');
        $file->status = "Enviado a Jefe de Departamento";
        $file->save();
        return Redirect::route('DivEst');
    }

    public function updateJefDep()
    {
        $file = File::find(request('id_file'));



        //se obtiene el nombre de el usuario al que pertece el id de revisor_id
        $file->revisor1_id = request('revisor1_id');
        $file->revisor2_id = request('revisor2_id');
        $file->status = "Enviado a los revisores";

        $file->save();
        return Redirect::route('JefDep');
    }

    public function updateRevisor()
    {
        // se obtiene el id del archivo que se va a revisar cuando el revisor es igual al id del revisor1 o revisor2
        $id = File::where('revisor1_id', auth()->user()->id)
            ->orWhere('revisor2_id', auth()->user()->id)
            ->first()->id;

        // se obtiene el comentario en col comentario1 desde la BD
        $comentario = File::where('revisor1_id', auth()->user()->id)
            ->orWhere('revisor2_id', auth()->user()->id)
            ->first()->comentario1;

        $file = File::find($id);

        //si el comentario1 es diferente de null ademas es del revisor1_id se guarda en comentario1
        if ($comentario == null && request('revisor_id') == auth()->user()->id) {
            $file->comentario1 = request('comentario');
            $file->status = request('status');
            $file->save();
            return Redirect::route('Revisor');
        } else {
            //si el comentario1 tiene un valor se sobreescribe el comentario1
            $file->comentario1 = request('comentario');
            $file->status = request('status');
            $file->save();
            return Redirect::route('Revisor');
        }
        if ($comentario == null && request('revisor_id') == auth()->user()->id) {
            $file->comentario2 = request('comentario');
            $file->status = request('status');
            $file->save();
            return Redirect::route('Revisor');
        }
        else {
            //si el comentario1 tiene un valor se sobreescribe el comentario1
            $file->comentario2 = request('comentario');
            $file->status = request('status');
            $file->save();
            return Redirect::route('Revisor');
        }
    }
}
