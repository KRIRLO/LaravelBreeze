<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class File extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * Los atributos que son asignables en masa.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'name',
        'description',
        'comentario1',
        'comentario2',
        'path',
        'resident_id',
        'revisor1_id',
        'revisor2_id',
        'status',
    ];

    /**
     * Los atributos que deben ocultarse para la serialización.
     *
     * @var array<int, string>
     */

    /**
     * Los atributos que deben emitirse.
     *
     * @var array<string, string>
     */

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relación uno a muchos inversa con el modelo User

    public function resident()
    {
        return $this->belongsTo(User::class);
    }

}


