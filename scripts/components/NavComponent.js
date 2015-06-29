var React = require('react');


module.exports = React.createClass({
	getInitialState: function(){
		return{
			username: this.props.user.attributes.username,
			session: this.props.user.attributes.sessionToken
		}
	},
	render: function(){
		var username = this.state.username;

		// console.log('username ' +username)
		return(
			<div>
				<div className="nav">
					<div>
						<div className="welcome">
							Hello {username.toString()}!
						</div>
						<div className="links">
						<div className="logout" onClick={this.logout}><a href="#login">Log Out</a></div>
						<div className="logout"><a href="#login">Log In</a></div>
						<div><a href="#register">Sign Up</a></div>
						<div><a href="#post">New Post</a></div>
						<div><a href="#postlist">Blog</a></div>
						</div>
					</div>
				</div>

				<div className="hero">
				</div>
			</div>
		);
	},
	logout: function(e){
		e.preventDefault();
		var user = this.props.user;
		console.log(user);
		user.logout({
			success: function(user){
				console.log('logged out');
			},
			error: function(user, response){
				console.log(response)
			}
		});	

	}

})