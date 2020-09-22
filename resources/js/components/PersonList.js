import React, {Fragment} from 'react'
import '../../sass/style.scss'


const ExerciseList = ({persons, selectPerson, state}) => (
    <Fragment>

        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    persons.map((person, index) => (
                      <tr key={person.id_person} className={(person.id_person === state.selectedPerson.id_person ? ' select-person' : '')}>
                        <th scope="row">{index+1}</th>
                        <td>{person.name}</td>
                        <td>{person.last_name}</td>
                        <td>
                            <button type="button" className="btn btn-outline-primary btn-sm" onClick={(e) => selectPerson(index, e,1)}>
                                <i className="fa fa-pencil"/>
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn btn btn-danger btn-sm"  data-toggle="modal" data-target="#exampleModal" onClick={(e) => selectPerson(index, e,2)}>
                                <i className="fa fa-eraser"/>
                            </button>
                        </td>
                      </tr>
                    ))
                }
        </tbody>
      </table>
    </Fragment>
)


export default ExerciseList
