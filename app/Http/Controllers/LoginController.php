<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Auth;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = new User();
        $users = $user->countUser();

        if (count($users) == 0) {
            return response()->json(['error'=> 0, 'session' => [], 'message' => 'User not found', 'data' => '', 'users' => false]);
        }
        else{
            return response()->json(['error'=> 0, 'session' => [], 'message' => 'User not found', 'data' => '', 'users' => true]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if (!isset($request->email) || $request->input('email') == '' || $request->input('email') == null) {
            $data = ['error' => 1, 'message'=> 'El correo electronico es requerido', 'data' => $request];
            return response()->json($data, 201);
            die;
        }

        if (!isset($request->password) || $request->input('password') == '' || $request->input('password') == null) {
            $data = ['error' => 1, 'message'=> 'El la contraseña es requerida', 'data' => $request];
            return response()->json($data, 201);
            die;
        }

        $credentials = [
            'email' => $request['email'],
            'password' => $request['password'],
        ];

        if(auth()->attempt($credentials))
        {
            $user = User::Where('email', $request['email'])->first();
            Auth::login($user, true);
            $data = array('error' => 0, 'message'=> 'ok', 'data' => $user, 'session'=> true);
        }
        else{
            $data = array('error' => 0, 'message'=> 'NOT', 'data' => $request->all(), 'session'=> false);
        }
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


}
