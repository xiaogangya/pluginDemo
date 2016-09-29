import React from 'react'
import { connect } from 'react-redux'
import * as containerTypes from '../constants/ContainerTypes'
import { getPluginsByContainer } from '../reducers/plugins'
import PluginWrapper from '../components/PluginWrapper'
import { loadPluginFromUrl, isSamePlugins } from '../helper'

import NamePlugin from '../plugins/NamePlugin'

class InjectionRight extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.plugins.forEach(plugin => {
      loadPluginFromUrl(plugin.url);
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (!isSamePlugins(nextProps.plugins, this.props.plugins)) {
      nextProps.plugins.forEach(plugin => {
        loadPluginFromUrl(plugin.url);
      })
    }
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.plugins.map(plugin => {
            return <li className="list-group-item">
              <PluginWrapper key={plugin.name} name={plugin.name} component={plugin.component} context={this.props.context} />
            </li>
          })}
        </ul>
      </div>
    );
  }
}

InjectionRight.propTypes = {
  plugins: React.PropTypes.array.isRequired,
  context: React.PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  plugins: getPluginsByContainer(state.plugins, containerTypes.INJECTION_RIGHT),
  context: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InjectionRight);