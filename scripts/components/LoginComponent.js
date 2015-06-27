var React = require('react');
var _ = require('backbone/node_modules/underscore');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			errors: {}
		}
	},
	render: function(){
		var divStyle = {
          color: 'red'
      	}
		return(
			<form onSubmit = {this.submit}>
			<h1>Login</h1>
				<div style={divStyle} ref="error1">{this.state.errors}</div>
				<label> Username</label><br/>
				<input ref="user"  type="text" placeholder="enter username" /><br/>
				<label> Password</label><br/>			
				<input ref="pw" type="text" placeholder="enter password" /><br/>
				<button>Submit</button>
			</form>

		);
	},
	submit: function (e){
		e.preventDefault();
		var self = this;

		
		var err = {}
		var username = this.refs.user.getDOMNode().value;
		var password = this.refs.pw.getDOMNode().value;

		if(!username){
			err.username = 'Please enter a username'
		}
		else if (!password){
			err.password = 'Please enter a password'
		}
		this.setState({
			errors: err
		})
		if(_.isEmpty(err)){

			var user = this.props.user;

			user.login(
			{	username: username,
				password: password
			},
			{
				success: function(usermodel){
					console.log('user logged in');
					self.props.router.navigate('profile', {trigger: true});
				},
				error: function(usermodel, response){
					 console.log('user was not logged in', response.responseJSON.error)
					 self.setState ({
					 	errors: response.responseJSON.error
					 })
				
				}
			});

		}
	

		
	}
})