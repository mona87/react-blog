var React = require('react');
var RegisterPage = require('./components/RegisterComponent');
var LoginPage = require('./components/LoginComponent');
var Backbone = require('backparse')({
	appId: 'SNLAJ6G7wviQikGW1xcVmn5s3rUZvDsbzoS0xiwZ',
	apiKey: '3FfrVV8MXHvsLPkjMH466udET6rfzPvo6vCMkyHB',
	apiVersion: 1
});

var App = Backbone.Router.extend({
	routes:{
		'': 		'register',
		'login':    'login',
		'register':  'register'
	},

	home: function(){
		console.log('home');
	},
	register: function(){
		console.log('register');
		React.render(
		<RegisterPage/>,
		document.getElementById('container')
		);
	},
	login: function() {
		console.log('login');
		React.render(
		<LoginPage/>,
		document.getElementById('container')
		);
	}
})

var app = new App();
Backbone.history.start();