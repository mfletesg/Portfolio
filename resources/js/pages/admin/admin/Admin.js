import React, { Component, Fragment, useEffect } from 'react'
import Loading from '../../../components/Loading'
import AdminContainer from './AdminContainer'
import url from '../../../url'
import Modal from '../../../components/admin/Modal'


class Admin extends Component{

	constructor(props){
		super(props)
		this.state =
		{
			person :
				{
					id : null,
					name : '',
					last_name : '',
					years : '',
					img : '',
					imgFile : null,
					phone : '',
					email : '',
					address : '',
					github : '',
					linkedIn : '',
					created_at : '',
					updated_at : ''
				},
			persons : [],
			message : '',
			loading : false,
			editPerson: false,
			error : null,
			selectedPerson : [],
			notification : {
				title : '',
				message : '',
			},
			files : {
				avatar : null,
				avatar2 : null
			},
		}

		this.handleChangePerson = this.handleChangePerson.bind(this)
		this.submitCreatePerson = this.submitCreatePerson.bind(this)
		this.selectPerson = this.selectPerson.bind(this)
		this.deletePerson = this.deletePerson.bind(this)
		this.getPerson = this.getPerson.bind(this)
		this.cancelEditionPerson = this.cancelEditionPerson.bind(this)
		this.handleChangeFile = this.handleChangeFile.bind(this)
	}

	getRestorePerson(){
		this.setState({
			person: {
				id : null,
				name : '',
				last_name : '',
				years : '',
				img : '',
				imgFile : null,
				phone : '',
				email : '',
				address : '',
				github : '',
				linkedIn : ''
			}
		})
	}

	async componentDidMount(){
		await this.getPersons()
		console.log(this.state.persons);
	}

	async getPersons(){
		try{
			let config = {
				method: 'GET',
				headers:{
					'Accept' : 'application/json',
					'Content-Type': 'application/json'
				}
			}
			let res = await fetch(url + '/api/person', config)
			let data = await res.json()
			this.setState({
				persons: data.data
			})
		}
		catch(e){
		}
	}

	async selectPerson(index, e, n){
		console.log(index, e, n)
		await this.setState({
			editPerson : true
		});
		switch (n) {
			case 0:
				console.log('Entro aqui111')
				await this.setState({
					person : this.state.persons[index],
					message : '',
					editPerson : false
				})
				break
			case 1: //Edit
				var person = this.state.persons[index]
				await this.setState({
					selectedPerson : this.state.persons[index],
					person: this.state.persons[index],
					message : '',
					editPerson : true
				})
				console.log('ok')
				console.log(this.state);
					//await this.getPerson();
				break
			case 2:
				await this.setState({
					selectedPerson : this.state.persons[index],
					message : 'Are you sure you want to eliminate to ' + this.state.persons[index].name +'?'
				})
			break
			default:
				return false
		}
	}

	async deletePerson(){
		this.setState({
			loading : true
		})
		axios.delete(url + '/api/person/'+ this.state.selectedPerson.id_person).then(res => {
			console.log(res.data)
			this.setState({
				loading : false
			})
			$('#exampleModal').modal('hide');
			$('body').removeClass('modal-open');
			$(".modal-backdrop").remove();
			this.getPersons()
			this.showNotification('Notification','Correctly Delete Person')
	    })
	    .catch(err => {
	        this.setState({
				error: error,
				loading: false
			})
	    });
	}

	async getPerson(){
		this.setState({
			loading : true
		})
		axios.get(url + '/api/person/'+ this.state.selectedPerson.id_person).then(res => {
			this.setState({
				editPerson: true,
				loading : false
			})
	    })
	    .catch(err => {
			this.setState({
				error: error,
				editPerson: false,
				loading : false
			})
	    });
	}

	validateFormPerson(person){
		if (person.name == '' || person.name == null) {
			return false;
		}
		if (person.last_name == '' || person.last_name == null) {
			return false;
		}
		if (person.years == '' || person.years == null || person.years <= 0) {
			return false;
		}
		if (person.phone == '' || person.phone == null) {
			return false;
		}
		if (person.address == '' || person.address == null) {
			return false;
		}
	}

	async showNotification(title, message){
		console.log('show toast');
		await this.setState({
			notification: {
				title: title,
				message : message
			}
		})
		$('#notificationToast').toast('show')
	}

	async submitCreatePerson(event){
		event.preventDefault()

		let person = this.state.person;
		if (this.validateFormPerson(person) == false) {
			return false;
		}
		if (this.state.files.avatar == null || this.state.files.avatar == '') {
			alert('El archivo no existe')
			return false
		}
		this.setState({
			loading : true
		})
		let res = null;
		try{
			if (this.state.editPerson == false) {
				let config = {
	                method: 'POST',
	                headers:{
	                    'Accept' : 'application/json',
	                    'Content-Type': 'application/json'
	                },
	                body: JSON.stringify(person)
	            }
				res = await fetch(url + '/api/person', config)
				console.log('await');
			}
			else{
				let config = {
	                method: 'PUT',
	                headers:{
	                    'Accept' : 'application/json',
	                    'Content-Type': 'application/json'
	                },
	                body: JSON.stringify(person)
	            }
				res = await fetch(url + '/api/person/' + person.id_person, config)
			}
            let data = await res.json()

			if (this.state.editPerson == false) {
				this.setState({
	            	loading : false,
					editPerson : false
	            })
				this.getPersons()
				this.getRestorePerson()
				this.showNotification('Notification','Correctly Create Person')
			}
			else{
				this.setState({
	            	loading : false,
					editPerson : false
	            })
				this.getPersons()
				this.getRestorePerson()
				this.showNotification('Notification','Correctly Update Person')
			}


		}
		catch(e){
			this.setState({
				error: true,
				loading : false
			})
			console.log(e)
		}
	}

	cancelEditionPerson(){
		this.setState({
			editPerson: false,
			selectedPerson : []
		})
		this.getRestorePerson()
	}


	async convertImgBase64(img){
		return new Promise((resolve, reject) => {
			var reader = new FileReader();
			reader.readAsDataURL(img);
			reader.onload = function () {
				resolve(reader.result);
			};
			reader.onerror = reject;
		})
	}

	async handleChangePerson(e){
		await this.setState({
			person : {
				...this.state.person,
				[e.target.name]: e.target.value,
			}
		})
		console.log('ok')
		console.log(this.state)
	}


	async handleChangeFile(e){
		if (e.target.files[0] != null) {
			await this.setState({
				//loading : true,
				files : {
					avatar : e.target.files[0]
				}
			})
			let ImgBase64 = null
			ImgBase64 = await this.convertImgBase64(this.state.files.avatar)
			await this.setState({
				//loading: false,
				person: {
					...this.state.person,
					img : ImgBase64
				}
			})
			console.log(this.state)
		}

	}



    render(){
		if (this.state.loading == true) {
			return <Loading />
			console.log('Entro aqui')
		}
        return (
			<Fragment>
				<AdminContainer
						person={this.state.person}
						handleChangePerson={this.handleChangePerson}
						submitCreatePerson={this.submitCreatePerson}
						persons={this.state.persons}
						selectPerson={this.selectPerson}
						state={this.state}
						cancelEditionPerson={this.cancelEditionPerson}
						updatePerson={this.updatePerson}
						handleChangeFile={this.handleChangeFile}
					/>
				<Modal message={this.state.message} deletePerson={this.deletePerson}/>
			</Fragment >
		)

    }
}

export default Admin
