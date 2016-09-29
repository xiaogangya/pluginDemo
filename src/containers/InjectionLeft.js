import React from 'react'
import { connect } from 'react-redux'
import * as containerTypes from '../constants/ContainerTypes'
import { getPluginsByContainer } from '../reducers/plugins'

class InjectionLeft extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          It is an injection left area:
        </div>
        <div>
          Plugin Area:
          {this.props.plugins.map(plugin => {
            return <PluginWrapper key={plugin.name} name={plugin.name} component={plugin.component} context={state} />
          })}
        </div>
      </div>
    );
  }
}

InjectionLeft.propTypes = {
  plugins: React.PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  plugins: getPluginsByContainer(state.plugins, containerTypes.INJECTION_LEFT)
});

const mapDispatchToProps =  ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InjectionLeft);