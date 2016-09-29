import React from 'react'
import { connect } from 'react-redux'
import { getPlugins } from '../reducers/plugins'

class Plugins extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          It is a plugin list:
          {
            this.props.plugins.map(x => {
            return <div key={x.name}>{x.name}, {x.containerType}, {x.url}</div>
           })
          }
        </div>
      </div>
    );
  }
}

Plugins.propTypes = {
  plugins: React.PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  plugins: getPlugins(state.plugins)
});

const mapDispatchToProps =  ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plugins);