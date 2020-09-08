

export async function validateUser(url, props){
	let res = await fetch(url)
    let data = await res.json();

	console.log(data);

    if (data.users == false) {
        console.log(data.message)
        props.history.push("sign_in")
    }
}


/*
import { useState, useEffect } from 'react'

//const validateUser = function(url){


const validateUser = url => {
	console.log(url)
	const [data1, setData] = useState([])

 	useEffect(() => {
 		const fetchResource = async () => {
 			try{
 				let res = await fetch(url)
			    let data = await res.json();
			    setData(data1)
			    console.log(data)

			    if (data.session.length == 0) {
			        console.log(data.message)
			        this.props.history.push("sign_in")
			    }
 			}catch(error){

 			}
 		}
 		fetchResource()

    }, [url])


    return true
}

export default validateUser

*/
