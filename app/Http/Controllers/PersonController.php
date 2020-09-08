<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ValidatePerson;

use App\Person;
class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $person = new Person();
        $persons = $person->getPersonModel();

        $data = ['error' => 0, 'message'=> 'ok', 'data' => $persons];
        return response()->json($data, 201);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->input('name') == '' || $request->input('name') ==  null) {
            $data = ['error' => 1, 'message'=> 'Name is Required', 'data' => $request->all()];
            return response()->json($data, 201);
        }

        if ($request->input('last_name') == '' || $request->input('last_name') ==  null) {
            $data = ['error' => 1, 'message'=> 'Last Name is Required', 'data' => $request->all()];
            return response()->json($data, 201);
        }

        if ($request->input('years') == '' || $request->input('years') ==  null) {
            $data = ['error' => 1, 'message'=> 'Years is Required', 'data' => $request->all()];
            return response()->json($data, 201);
        }

        $user = new Person();
        $query = $user->create($request);

        if(!$query){
            $data = ['error' => 1, 'message'=> 'Query is bad', 'data' => $request->all()];
            return response()->json($data, 500);
        }

        $data = ['error' => 0, 'message'=> 'Persone Created', 'data' => $request->all()];
        return response()->json($data, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $person = new Person();
        $personData = $person->getPerson($id);

        $data = ['error' => 0, 'message'=> 'ok', 'data' => $personData];
        return response()->json($data, 201);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

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

        $user = new Person();
        $query = $user->updatePerson($request, $id);

        $data = ['error' => 0, 'message'=> 'Person Update', 'data' => $request->all()];
        return response()->json($data, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if ($id == null || $id === 0) {
            $data = ['error' => 1, 'message'=> 'Failed to delete person', 'data' => $id];
        }

        $person = new Person();
        $person->deletePerson($id);

        $data = ['error' => 0, 'message'=> 'Person Delete', 'data' => $id];
        return response()->json($data, 201);
    }
}
