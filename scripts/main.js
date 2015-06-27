var React = require('react');
var RegisterPage = require('./components/RegisterComponent');
var LoginPage = require('./components/LoginComponent');
var ProfilePage = require('./components/ProfileComponent');
var PostPage = require('./components/PostPage');
var PostListPage = require('./components/PostListPage')
var Backbone = require('backparse')(require('./config/parseSettings'));
var UserModel = require('./models/UserModel');

var user = new UserModel();


var App = Backbone.Router.extend({
	routes:{
		'': 		'register',
		'login':    'login',
		'register':  'register',
		'profile':   'profile',
		'post': 	  'post',
		'postlist':  'postlist'
	},

	postlist: function(){
		console.log('postlist')
		React.render(
			<PostListPage/>,
			document.getElementById('container')
		)
	},
	post: function (){
		console.log('post');
		React.render(
			<PostPage />,
			document.getElementById('container')
		);
	},
	profile: function(){
		console.log('profile');
		React.render(
			<ProfilePage/>,
			document.getElementById('container')
		);
	},
	register: function(){
		console.log('register');
		React.render(
		<RegisterPage user={user} router={app}/>,
		document.getElementById('container')
		);
	},
	login: function() {
		console.log('login');
		React.render(
		<LoginPage user={user} router={app}/>,
		document.getElementById('container')
		);
	}
})

var app = new App();
Backbone.history.start();