import React from 'react';
import ReactDOM from 'react-dom';

export default class PluginWrapper extends React.Component {
  constructor() {
    super();

    this.style = {
      success: {
        color: '#3c763d'
      },
      danger: {
        color: '#a94442'
      }
    };
  }

  componentDidMount() {
    this.renderPlugin();
  }

  componentWillUnmount() {
    try {
      var node = ReactDOM.findDOMNode(this);
      ReactDOM.unmountComponentAtNode(node);
    }
    catch (e) {
      console.error(e);
      console.log(e.stack);
    }
  }

  componentDidUpdate() {
    this.renderPlugin();
  }

  renderPlugin() {
    var node = ReactDOM.findDOMNode(this);
    try {
      var Component = this.props.component;
      if (Component) {
        var element = <Component context={this.props.context} />;
        ReactDOM.render(element, node);
      }
    }
    catch (e) {
      console.error(e);
      console.log(e.stack);
      element = <div className="unsafe-plugin-exception" style={this.style.danger}>
        <div className="message">{this.props.name} could not be displayed.</div>
        <div className="trace">{e.stack}</div>
      </div>
      ReactDOM.render(element, node);
    }
  }

  render() {
    return (
      <div className="plugin-wrapper" style={this.style.success}></div>
    );
  }
}

PluginWrapper.propTypes = {
  name: React.PropTypes.any.isRequired,
  component: React.PropTypes.any.isRequired,
  context: React.PropTypes.any.isRequired
}