var React = require('react');

var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    if (message.length < 0){
      this.props.getDefaultProps(message);
    }

    return (
      <div>
        <h1>Hello {name}!!!</h1>
        <p>{message+'!!!'}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
