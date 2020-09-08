<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class SignInController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

        if (!isset($request->name) || $request->input('name') == '' || $request->input('name') == null) {
            $data = ['error' => 1, 'message'=> 'El nombre de usuario es requerido', 'data' => $request];
            return response()->json($data, 201);
            die;
        }

        if (!isset($request->lastName) || $request->input('lastName') == '' || $request->input('lastName') == null) {
            $data = ['error' => 1, 'message'=> 'Last Name is required', 'data' => $request];
            return response()->json($data, 201);
            die;
        }


        if (!isset($request->email) || $request->input('email') == '' || $request->input('email') == null) {
            $data = ['error' => 1, 'message'=> 'El correo electronico es requerido', 'data' => $request];
            return response()->json($data, 201);
            die;
        }

        if (!isset($request->password) || $request->input('password') == '' || $request->input('password') == null) {
            $data = ['error' => 1, 'message'=> 'El correo electronico es requerido', 'data' => $request];
            return response()->json($data, 201);
            die;
        }

        if (!isset($request->passwordC) || $request->input('passwordC') == '' || $request->input('passwordC') == null) {
            $data = ['error' => 1, 'message'=> 'El correo electronico es requerido', 'data' => $request];
            return response()->json($data, 201);
            die;
        }

        $user = new User();
        $data = $user->create($request);
        return response()->json($request);
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
