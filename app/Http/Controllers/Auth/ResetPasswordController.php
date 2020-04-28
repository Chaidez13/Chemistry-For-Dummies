<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function changePassword(Request $request){
        if (!(Hash::check($request->get('actual'), Auth::user()->password))) {
            // La contraseña actual no coincide
            return -1;
        }
        if(strcmp($request->get('actual'), $request->get('nueva')) == 0){
            //La contraseña actual y la nueva son iguales
            return -2;
        }

        $validatedData = $request->validate([
            'actual' => 'required',
            'nueva' => 'required|string|min:8',
        ]);

        $user = Auth::user();
        $user->password = bcrypt($request->get('nueva'));
        $user->save();
        return 0;

    }
}
