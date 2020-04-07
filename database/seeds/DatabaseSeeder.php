<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use App\Pregunta;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo H?',
            'nivel' => 1,
        ]);

        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo He?',
            'nivel' => 1,
        ]);

        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo N?',
            'nivel' => 1,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo Cl?',
            'nivel' => 1,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo Li?',
            'nivel' => 1,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo K?',
            'nivel' => 1,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo C?',
            'nivel' => 1,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo O?',
            'nivel' => 1,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo P?',
            'nivel' => 1,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué elemento pertenece el símbolo Kr?',
            'nivel' => 1,
        ]);


        //NIVEL 2
         DB::table('pregunta')->insert([
            'pregunta' => 'Cuál es el número atómico del Hidrógeno?',
            'nivel' => 2,
        ]);

        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Oro?',
            'nivel' => 2,
        ]);

        DB::table('pregunta')->insert([
            'pregunta' => 'Cuál es el número atómico de la Plata?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Magnesio?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Calcio?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => 'Cuál es el número atómico del Neón?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => 'Cuál es el número atómico del Cloro?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => 'Cuál es el número atómico del Mercurio?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => 'Cuál es el número atómico del Radio?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Uranio?',
            'nivel' => 2,
        ]);


        DB::table('respuesta')->insert([
            'idPregunta' => 1,
            'respuesta' => 'Hidrógeno',
        ]);
         DB::table('respuesta')->insert([
            'idPregunta' => 2,
            'respuesta' => 'Helio',
        ]);
          DB::table('respuesta')->insert([
            'idPregunta' => 3,
            'respuesta' => 'Nitrógeno',
        ]);
           DB::table('respuesta')->insert([
            'idPregunta' => 4,
            'respuesta' => 'Cloro',
        ]);
            DB::table('respuesta')->insert([
            'idPregunta' => 5,
            'respuesta' => 'Litio',
        ]);
             DB::table('respuesta')->insert([
            'idPregunta' => 6,
            'respuesta' => 'Potasio',
        ]);
              DB::table('respuesta')->insert([
            'idPregunta' => 7,
            'respuesta' => 'Carbono',
        ]);
            DB::table('respuesta')->insert([
            'idPregunta' => 8,
            'respuesta' => 'Oxígeno',
        ]);
             DB::table('respuesta')->insert([
            'idPregunta' => 9,
            'respuesta' => 'Fósforo',
        ]);
             DB::table('respuesta')->insert([
            'idPregunta' => 10,
            'respuesta' => 'Kripton',
        ]);

             //Nivel 2

         /*DB::table('respuesta')->insert([
            'idPregunta' => 11,
            'respuesta' => 'Hidrógeno',
        ]);
         DB::table('respuesta')->insert([
            'idPregunta' => 12,
            'respuesta' => 'Helio',
        ]);
          DB::table('respuesta')->insert([
            'idPregunta' => 13,
            'respuesta' => 'Nitrógeno',
        ]);
           DB::table('respuesta')->insert([
            'idPregunta' => 14,
            'respuesta' => 'Cloro',
        ]);
            DB::table('respuesta')->insert([
            'idPregunta' => 15,
            'respuesta' => 'Litio',
        ]);
             DB::table('respuesta')->insert([
            'idPregunta' => 16,
            'respuesta' => 'Potasio',
        ]);
              DB::table('respuesta')->insert([
            'idPregunta' => 17,
            'respuesta' => 'Carbono',
        ]);
            DB::table('respuesta')->insert([
            'idPregunta' => 18,
            'respuesta' => 'Oxígeno',
        ]);
             DB::table('respuesta')->insert([
            'idPregunta' => 19,
            'respuesta' => 'Fósforo',
        ]);
             DB::table('respuesta')->insert([
            'idPregunta' => 20,
            'respuesta' => 'Kripton',
        ]);*/

    }
}
