var React = require('react');
var UserModel = require('../models/UserModel');
var validator = require('validator');
var _ = require('backbone/node_modules/underscore');

module.exports = React.createClass({
	getInitialState: function() {
		return{
			errors: {}
		}		
	},
	render: function(){
		var divStyle = {
			color: 'red'
		}
		return(
			<div>
				<form onSubmit = {this.submit}>
					<h1>Register</h1>
					<div style={divStyle}>{this.state.errors.parseError}</div>
					<label>Email</label><br/>
					<input ref="email" type="text" placeholder="enter email"/><br/>
					<div style={divStyle}>{this.state.errors.email}</div>
					<label>Password</label><br/>
					<input  ref="pass" type="text" placeholder="enter password"/><br/>
					<div style={divStyle}>{this.state.errors.password}</div>
					<label>Confirm Password</label><br/>
					<input  ref="pass2" type="text" placeholder="enter password"/><br/>
					<div style={divStyle}>{this.state.errors.password2}</div>
					<button>Submit</button>
				</form>
			</div>
		)
	},
	submit: function(e){
		e.preventDefault();

		var err = {};
		var self = this;

	

		var email = this.refs.email.getDOMNode().value;
		var password = this.refs.pass.getDOMNode().value;
		var password2 = this.refs.pass2.getDOMNode().value;

		if(!email){
			err.email = "Please enter an email address";
		}
		else if(!validator.isEmail(email)){
			err.email = "The email looks wrong";
		}
		else if(!password){
			err.password = 'Please enter a password';
		}
		else if(!password2){
			err.password2 = 'Please confirm your password';
		}
		else if(password !== password2){
			err.password2 = 'Passwords do not match'
		}
		this.setState({
				errors: err
		})
		if(_.isEmpty(err)){
				console.log(this.props.user);
				var user = this.props.user
				 user.set({
					username: this.refs.email.getDOMNode().value,
					password: this.refs.pass.getDOMNode().value,
					email: this.refs.email.getDOMNode().value
				});

				user.save( 
					{null},
					{	success: function(UserModel){
					 		console.log('user was added')
					 		// self.props.router.navigate('profile', {trigger: true});
						},
					 	error: function(UserModel, response){
					 		console.log('user was not added', response.responseJSON)

					 			err.parseError = response.responseJSON.error
					 			self.setState({
									errors: err
								})
				 		}
			 		}
				);
			}
		
		
		
	}
		
})