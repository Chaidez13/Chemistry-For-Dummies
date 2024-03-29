<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartidaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partida', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('idJuego');
            $table->foreign('idJuego')->references('id')->on('juego');
            $table->unsignedBigInteger('idUsuario');
            $table->foreign('idUsuario')->references('id')->on('user');
            $table->integer('nivel');
            $table->integer('puntos');
            $table->boolean('estado')->nullable()->default(false);
            $table->integer('progreso')->nullable()->default(0);
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
        Schema::dropIfExists('partida');
    }
}
