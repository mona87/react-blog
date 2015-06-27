var React = require('react');
var PostCollection = require('../collections/PostCollection');

module.exports = React.createClass({
	getInitialState: function(){
		var posts = new PostCollection();
		var self = this;

		var q = {};
		if (this.props.category){
			q.category = this.props.category;
		}
		posts.fetch({
			// query: {
			// 	// // category: 'js'
			// 	// title: {
			// 	// 	// $regex: '.*first.*'
			// 	// }
			// },
			success: function(){
				self.forceUpdate();
			// 	posts.on('add', fucntion(){
			// 		self.forceUpdate();
			// });
			}
		});

		return{
			posts: posts
		}

	},
	render: function(){
		var postEls = this.state.posts.map(function(postModel){
			return(
					<div key={postModel.cid}>
						<h3>{postModel.get('title')}</h3>
						<p>{postModel.get('body')}</p>
						<p>{postModel.get('category')}</p>
					</div>
				);
		});
		return(
			<div>
				{postEls}
			</div>
		);
	}
})