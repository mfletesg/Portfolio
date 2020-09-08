<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use DB;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $primaryKey = 'id_user';

    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function create($request){
        DB::table('users')->insert(
            [   'name' => $request->name,
                'last_name' => $request->lastName,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'created_at'=> NOW()
            ]
        );

    }

    public function countUser(){
        $users = DB::table('users')
                     ->select(DB::raw('*'))
                     ->take(1)
                     ->get();

        return $users;
    }
}
