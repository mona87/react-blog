var React = require('react');
var RegisterPage = require('./components/RegisterComponent');
var LoginPage = require('./components/LoginComponent');
var HomePage = require('./components/HomeComponent');
var PostPage = require('./components/PostPage');
var PostListPage = require('./components/PostListPage')
var Backbone = require('backparse')(require('./config/parseSettings'));
var UserModel = require('./models/UserModel');
var PostCollection = require('./collections/PostCollection');
var CategoryPage = require('./components/CategoryComponent');
var Navigation = require('./components/NavComponent');

var posts = new PostCollection();
var user = new UserModel();

user.set('session', localStorage.getItem('sessionToken'));
user.set('username', localStorage.getItem('username'));

console.log(user)

var App = Backbone.Router.extend({
	routes:{
		'': 		'register',
		'login':    'login',
		'register':  'register',
		'post': 	  'post',
		'postlist':  'postlist',
		'category/:category':   'category'
	},

	category: function(category){
		console.log(category);

		posts.fetch({
			query: {category: category},
			success: function(posts){

				var topTen = posts.slice(posts.length -10, posts.length);
				topTen.reverse();
				React.render(
					<div>
						<Navigation user={user}/>
						<CategoryPage posts={topTen} category={category}/>
					</div>,
					document.getElementById('container')
				);
			}
		})
		
	},
	postlist: function(){
		console.log('postlist')

		posts.fetch({
			success: function(posts){
				console.log();

				var newPosts= posts.slice(posts.length - 10, posts.length);
				newPosts.reverse();

				React.render(
						<div>
							<Navigation user={user}/>
							<PostListPage user={user} posts={newPosts} router={app} />
						</div>,
						document.getElementById('container')
				)

			}
		})
	},
	post: function (){
		console.log('post');
		React.render(
			<div>
			<Navigation user={user}/>
			<PostPage router={app}/>
			</div>,
			document.getElementById('container')
		);
	},
	register: function(){
		console.log('register');
		React.render(
		<div>
		<Navigation user={user}/>
		<RegisterPage user={user} router={app}/>
		</div>,
		document.getElementById('container')
		);
	},
	login: function() {
		console.log('login');
		React.render(
		<div>
			<Navigation user={user}/>
			<LoginPage user={user} router={app}/>
		</div>,
		document.getElementById('container')
		);
	}
})

var app = new App();
Backbone.history.start();