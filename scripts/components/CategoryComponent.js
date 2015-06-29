var React = require('react');


module.exports = React.createClass({

	render: function(){
		console.log(this.props.posts);
		var posts = this.props.posts.map(function(postModel){
			return(
				<div>		
				<div className="posts" key={postModel.cid}>
				<div><h2>{postModel.get('title')}</h2></div>
				<p><a href={'#category/' + postModel.get('category')}>{postModel.get('category')}</a> | {postModel.get('createdAt')}</p>
				<div><p>{postModel.get('body')}</p></div>
				</div>
				</div>
			);
		})
		return(
		
		
			<div className="postHolder">
				<div className="category"><h1>{this.props.category}</h1></div>
				<div>{posts}</div>
			</div>
		
		)
	}

});