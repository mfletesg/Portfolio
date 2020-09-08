<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
class Person extends Model
{
	protected $primaryKey = 'id_person';

    public function getPersonModel(){
        $user = DB::table('persons')->take(10)->get();
        return $user;
    }

	public function create($request){
    	$query = DB::table('persons')->insert(
		            [   'name' => $request->name,
		                'last_name' => $request->last_name,
		                'years' => $request->years,
		                'img' => $request->img,
		                'phone' => $request->phone,
		                'email' => $request->email,
		                'address' => $request->address,
		                'github' => $request->github,
		                'created_at'=> NOW(),
						'linkedIn'=>$request->linkedIn
		            ]
        );
        return $query;
    }

	public function deletePerson($id){
		DB::table('persons')->where('id_person', '=', $id)->delete();
		return true;
	}

	public function getPerson($id){
		$data = DB::table('persons')
					->where('id_person', '=', $id)
					->get();
		return $data;
	}

	public function updatePerson($request, $id){
		$query = DB::table('persons')
	            	->where('id_person', $id)
	        		->update([
								'name' => $request->name,
								'last_name' => $request->last_name,
				                'years' => $request->years,
				                'img' => $request->img,
				                'phone' => $request->phone,
				                'email' => $request->email,
				                'address' => $request->address,
				                'github' => $request->github,
								'linkedIn'=>$request->linkedIn,
								'updated_at'=>NOW()
							]);
		return $query;
	}
}
