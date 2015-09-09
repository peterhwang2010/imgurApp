var React = require('react');

module.exports = React.createClass({
	render: function(){
		return <div>
			Im a header
			{this.props.children}
		</div>
	}
});