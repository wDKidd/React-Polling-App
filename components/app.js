var React = require('react');
var io = require('socket.io-client');
var port = 3000;
var Header = require('./parts/Header');
var Footer = require('./parts/Footer');

var app = React.createClass({
  getInitialState(){
    return {
      status: 'disconnected'
    }
  },
  componentWillMount(){
    this.socket = io('http://localhost:'+port);
    this.socket.on('connect', this.connect);
  },
  connect(){
    this.setState({
      status: 'connected',
      id: this.socket.id
    })
  },
  render: function() {
    return (
      <div>
      <Header title="Connection open on: " status={this.state.status} id={this.state.id}/>
      <Footer />
      </div>
    );
  }

});

module.exports = app;
