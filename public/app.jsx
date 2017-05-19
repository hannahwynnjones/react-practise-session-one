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

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault(); //prevents browser from loading
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0){
      this.refs.name.value = ''; //clearing the field
      updates.name = name;
    }
    this.props.onNewName(updates);

    if (message.length > 0){
      this.refs.message.value = '';
      this.props.onNewMessage(message);
    }
  },

  render: function () {

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Enter name"/>
          <br></br>
          <textarea type="text" ref="message" placeholder="Enter message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    );
  }
});

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message:'This is a default pragraph, from a component.  use http://babeljs.io/repl/'
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewName: function(name) {
    this.setState ({
      name: name
    });

    // alert(name);
  },

  handleNewMessage: function(message) {
    this.setState ({
      message: message
    });

    // alert(name);
  },

  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName} onNewMessage={this.handleNewMessage}/>
      </div>
    );

  }
});
//
var firstName='Hannah';
var messageOne='This isnt that bad';


ReactDOM.render(
  <Greeter name={firstName} message={messageOne}/>,
  document.getElementById('app')
);
