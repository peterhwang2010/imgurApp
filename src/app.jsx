var React = require('react');
var Routes = require('./routes');

var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
	render: function(){
		return <h1>Im child1</h1>
		{this.props.children}
	}
});

var Child2 = React.createClass({
	render: function(){
		return <h1> Im the other child </h1> 
	}
});


// var element = React.createElement(Hello, {});
React.render(Routes, document.querySelector('.container'));
