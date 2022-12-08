<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use App\Models\File;
use App\Http\Controllers\API\FilesController;
use App\Http\Controllers\Auth\RegisteredUserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/table', function () {
    return Inertia::render('Table', [
        'users' => User::all()
    ]);
})->middleware(['auth', 'verified'])->name('table');

Route::get('/Residente', function () {
    return Inertia::render(
        'DashboardResidente',
        [
            'files' => File::where('resident_id', auth()->user()->id)->get(),
        ]
    );
})->middleware(['auth', 'verified'])->name('Residente');

// se usa el controlador para subir los datos a la base de datos
Route::post('DashboardResidente', [FilesController::class, 'upResident'])->name('upResident');

Route::get('/Revisor', function () {
    return Inertia::render('DashboardRevisor',
        [
            'files' => File::where('revisor1_id', auth()->user()->id)
            ->orWhere('revisor2_id', auth()->user()->id)->get(),
            'users' => User::join('files', 'users.id', '=', 'files.revisor1_id')
            ->orWhere('users.id', '=', 'files.revisor2_id')->get(),
        ]
    );

})->middleware(['auth', 'verified'])->name('Revisor');

Route::post('DashboardRevisor', [FilesController::class, 'updateRevisor'])->name('updateRevisor');


Route::get('/JefDep', function () {
    return Inertia::render(
        'DashboardJefDep',
        [
            'revisores' => User::where('area', auth()->user()->area)->where('role', 'Revisor')->get(),
            'tabla' => File::join('users', 'users.id', '=', 'files.resident_id')->where('jefdep_id', auth()->user()->id)->where('status', 'Enviado a Jefe de Departamento')->get(),
            'files' => File::where('jefdep_id', auth()->user()->id)->where('status', 'Enviado a Jefe de Departamento')->get(),
        ]
    );
})->middleware(['auth', 'verified'])->name('JefDep');
Route::post('DashboardJefDep', [FilesController::class, 'updateJefDep'])->name('updateJefDep');


Route::get('/DivEst', function () {
    return Inertia::render('DashboardDivEst', [
        'files' => File::all(),
        'jefdep' => User::where('role', 'JefDep')->get(),
        // se hace una peticion a la base de datos para obtener los datos de los usuarios por medio de files.resident_id
        // SELECT * FROM `users`,`files` WHERE `users`.`id` = (`files`.`resident_id` = 2 );
        'tabla' => File::join('users', 'users.id', '=', 'files.resident_id')->get(),
    ]);
})->middleware(['auth', 'verified'])->name('DivEst');

Route::post('DashboardDivEst', [FilesController::class, 'updateDivEst'])->name('updateDivEst');
Route::post('Auth/Register', [RegisteredUserController::class, 'storeDivEst'])->name('storeDivEst');


require __DIR__ . '/auth.php';
