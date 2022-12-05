<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;
use App\Models\File;
use App\Http\Controllers\API\FilesController;

use function App\Http\Controllers\API\user;

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

Route::get('/Asesor', function () {
    return Inertia::render('DashboardAsesor');
})->middleware(['auth', 'verified'])->name('Asesor');

Route::get('/Residente', function () {
    return Inertia::render(
        'DashboardResidente',
        [
            // se obtienen los datos de la tabla files y se envian a la vista pero solo los del usuario logueado
            'files' => File::where('resident_id', auth()->user()->id)->get(),
            ]
    );

})->middleware(['auth', 'verified'])->name('Residente');

// se usa el controlador para subir los datos a la base de datos
Route::post('DashboardResidente', [FilesController::class, 'upResident'])->name('upResident');

Route::get('/Revisor', function () {
    return Inertia::render('DashboardRevisor');
})->middleware(['auth', 'verified'])->name('Revisor');

Route::get('/JefDep', function () {
    return Inertia::render(
        'DashboardJefDep',
        [
            'files' => File::where('resident_id', auth()->user()->id)->get(),
            'users' => User::where('area', auth()->user()->area)->where('role', 'Revisor')->get(),
        ]
    );
})->middleware(['auth', 'verified'])->name('JefDep');


Route::get('/DivEst', function () {
    return Inertia::render('DashboardDivEst', [
        'files' => File::all(),
        // solo enviar a los usuarios que son revisores
        'users' => User::where('role', 'JefDep')->get()
        //se le permite registrar usuarios

        // 
    ]);
})->middleware(['auth', 'verified'])->name('DivEst');



require __DIR__ . '/auth.php';
