<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Pregunta;
use App\User;
use App\Juego;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         DB::table('juego')->insert([
            'juego' => 'tetris',

         ]);
        DB::table('juego')->insert([
            'juego' => 'memorama',

         ]);
        DB::table('juego')->insert([
            'juego' => 'trivia',

         ]);

         DB::table('user')->insert([
            'nombre' => 'John',
            'apellidoPaterno' => '117',
            'apellidoMaterno' => '',
            'email' => 'Spartan117@UNCS.cov',
            'password' => bcrypt('123456789'),
            'fecha' => Carbon::parse('2552-07-03'),

        ]);

        //---------------- Nivel 1 Trivia ----------------
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
        //RESPUESTAS
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
        //---------- Fin del  Nivel 1 Trivia- ------------

        //---------------- Nivel 2 Trivia ----------------
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Hidrógeno?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Oro?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico de la Plata?',
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
            'pregunta' => '¿Cuál es el número atómico del Neón?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Cloro?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Mercurio?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Radio?',
            'nivel' => 2,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Cuál es el número atómico del Uranio?',
            'nivel' => 2,
        ]);
        //RESPUESTAS
        DB::table('respuesta')->insert([
            'idPregunta' => 11,
            'respuesta' => '1',
        ]);
         DB::table('respuesta')->insert([
            'idPregunta' => 12,
            'respuesta' => '79',
        ]);
          DB::table('respuesta')->insert([
            'idPregunta' => 13,
            'respuesta' => '47',
        ]);
           DB::table('respuesta')->insert([
            'idPregunta' => 14,
            'respuesta' => '12',
        ]);
            DB::table('respuesta')->insert([
            'idPregunta' => 15,
            'respuesta' => '20',
        ]);
             DB::table('respuesta')->insert([
            'idPregunta' => 16,
            'respuesta' => '10',
        ]);
              DB::table('respuesta')->insert([
            'idPregunta' => 17,
            'respuesta' => '17',
        ]);
            DB::table('respuesta')->insert([
            'idPregunta' => 18,
            'respuesta' => '80',
        ]);
             DB::table('respuesta')->insert([
            'idPregunta' => 19,
            'respuesta' => '88',
        ]);
         DB::table('respuesta')->insert([
            'idPregunta' => 20,
            'respuesta' => '92',
        ]);
        //---------- Fin del  Nivel 2 Trivia- ------------

        //---------------- Nivel 3 Trivia ----------------
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Potasio?',
            'nivel' => 3,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Arsénico?',
            'nivel' => 3,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Galio?',
            'nivel' => 3,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Yodo?',
            'nivel' => 3,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Oxígeno?',
            'nivel' => 3,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Selenio?',
            'nivel' => 3,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Cesio?',
            'nivel' => 3,
        ]); 
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Silicio?',
            'nivel' =>3,
        ]);
         DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Xenon?',
            'nivel' => 3,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué bloque pertenece el Plutonio?',
            'nivel' => 3,
        ]);
        //RESPUESTAS
        DB::table('respuesta')->insert([
            'idPregunta' => 21,
            'respuesta' => 'Metales Alcalinos',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 22,
            'respuesta' => 'Metaloides',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 23,
            'respuesta' => 'Metales (Otros metales)',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 24,
            'respuesta' => 'Halógenos',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 25,
            'respuesta' => 'No metales (Otros no metales)',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 26,
            'respuesta' => 'No metales (Otros no metales)',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 27,
            'respuesta' => 'Metales Alcalinos',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 28,
            'respuesta' => 'Metaloiodes',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 29,
            'respuesta' => 'No metales (Gases nobles)',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 30,
            'respuesta' => 'Metales Actínidos',
        ]);
        //---------- Fin del  Nivel 3 Trivia- ------------

        //---------------- Nivel 4 Trivia ----------------
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Actinio?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Indio?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Litio?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Osmio?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Talio?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Uranio?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Francio?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Cobalto?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Bromo?',
            'nivel' => 4,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿Quién descrubrio el elemento Erbio?',
            'nivel' => 4,
        ]);
        //RESPUESTAS
        DB::table('respuesta')->insert([
            'idPregunta' => 31,
            'respuesta' => 'André-Louis',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 32,
            'respuesta' => 'Reich F. y Ritcher T.',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 33,
            'respuesta' => 'Johann A. Arfvedson',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 34,
            'respuesta' => 'Smithson Tennant',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 35,
            'respuesta' => 'William Crookes',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 36,
            'respuesta' => 'Martin H. Klaproth',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 37,
            'respuesta' => 'Marguerite Perey',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 38,
            'respuesta' => 'Georg Brandt',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 39,
            'respuesta' => 'Antoine Balard',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 40,
            'respuesta' => 'Carl G. Mosander',
        ]);
        //---------- Fin del  Nivel 4 Trivia- ------------

        //---------------- Nivel 5 Trivia ----------------
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto H20?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto NaCl?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto HCl?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto CH4?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto NH3?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto KBr?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto CO2?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto NaOH?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto H2SO4?',
            'nivel' => 5,
        ]);
        DB::table('pregunta')->insert([
            'pregunta' => '¿A qué corresponde el compuesto NaHCO3?',
            'nivel' => 5,
        ]);
            //RESPUESTAS
        DB::table('respuesta')->insert([
            'idPregunta' => 41,
            'respuesta' => 'Agua',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 42,
            'respuesta' => 'Cloruro de sodio',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 43,
            'respuesta' => 'Ácido clorhídrico',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 44,
            'respuesta' => 'Metano',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 45,
            'respuesta' => 'Amoniaco',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 46,
            'respuesta' => 'Bromuro de potasio',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 47,
            'respuesta' => 'Dióxido de carbono',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 48,
            'respuesta' => 'Hidroxido de sodio',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 49,
            'respuesta' => 'Ácido sulfúrico',
        ]);
        DB::table('respuesta')->insert([
            'idPregunta' => 50,
            'respuesta' => 'Bicarbonato de sodio',
        ]);

        //---------- Fin del  Nivel 5 Trivia- ------------
    }
}
