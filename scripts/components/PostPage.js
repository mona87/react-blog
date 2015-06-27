var Backbone = require('backparse')(require('../config/parseSettings'));
var React = require('react');
var BlogPostModel = require('../models/BlogPostModel');

module.exports = React.createClass({
	render: function(){
		var divStyle = {
			color: 'red'
		}
		return(
			<form onSubmit = {this.addPost}>

				<h1>Blog Post</h1>
				<div style={divStyle} ref="error"></div>
				<label>Title</label><br/>
				<input ref="title" type="text"></input><br/>
				<label>Body</label><br/>
				<textarea ref="body"></textarea><br/>
				<label>Category</label><br/>
				<select ref="cat" >
					<option value="1"> -- select an option -- </option>
					<option >Animals</option>
					<option>Movies</option>
					<option>Sports</option>
				</select><br/>
				<button>Submit</button>
			</form>
		);
		
	},
	addPost: function(e){
		e.preventDefault();
		var post = new BlogPostModel();
		post.set({
			title: this.refs.title.getDOMNode().value,
			body: this.refs.body.getDOMNode().value,
			category: this.refs.cat.getDOMNode().value
		})
		console.log(this.refs.cat.getDOMNode().value);

		if(post.isValid()){
			console.log('valid')
			this.refs.error.getDOMNode().innerHTML = "";

			post.save({
					null
				},
					{ success: function(post){
						console.log(post);
						console.log('post added');
					},
					error: function(UserModel, response){
						console.log(response)
					}
				}
			)
		}
		else{
			console.log(post.validationError);
			this.refs.error.getDOMNode().innerHTML = post.validationError;
		}

	}
});