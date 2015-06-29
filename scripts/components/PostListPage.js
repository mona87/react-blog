var React = require('react');
var PostCollection = require('../collections/PostCollection');
// var Backbone = require('backparse')(require('../config/parseSettings'));

module.exports = React.createClass({
	componentDidMount: function(){
		// this.forceUpdate();
	},
	render: function(){

		//this.props.user.attributes.sessionToken = sessionStorage.getItem('session')
		console.log(this.props.user)

		var postEls = this.props.posts.map(function(postModel){
			return(
					<div className="posts" key={postModel.cid}>
						<h2>{postModel.get('title')}</h2>
						<p><a href={'#category/' + postModel.get('category')}>{postModel.get('category')}</a> | {postModel.get('createdAt')}</p>
						<p>{postModel.get('body')}</p>
						
					</div>
				);
		});
		return(
			<div>
				
				<div className="postHolder" >
					{postEls}
				</div>
			
			</div>
		);
	}
})