<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            // descripcion del archivo dada por el residente
            $table->string('description');
            // Comentario del revisor1
            $table->string('comentario1')->nullable();
            // Comentario del revisor2
            $table->string('comentario2')->nullable();
            // path del archivo en google drive
            $table->string('path');
            // id del residente que subio el archivo
            $table->foreignId('resident_id')->constrained('users');
            // id del revisor1
            $table->foreignId('revisor1_id')->constrained('users');
            // id del revisor2
            $table->foreignId('revisor2_id')->constrained('users');
            $table->string('status');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
};
