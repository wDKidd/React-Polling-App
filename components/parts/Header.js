var React = require('react');

var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      title: 'Welcome to React Polling',
      status: 'disconnected',
      id: 'Waiting..'
    };
  },
  render() {
    return (
      <div className="container">
      < header className="row" >
      < h1 className="col-xs-6" > {
        this.props.title
      } < /h1>
      <div className="col-xs-4" >
        <h3>{this.props.id}</h3>
      </div>
      <div className="col-xs-2" >
        <span id="connection-status" className={this.props.status}></span>
      </div>
      < /header>
      </div>
    )
  }
});

module.exports = Header;
