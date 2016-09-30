import React from 'react'
import { connect } from 'react-redux'
import { getPlugins } from '../reducers/plugins'

class Plugins extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th>name</th>
            <th>injected area</th>
            <th>url</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.plugins.map(x => {
              return <tr key={x.name}>
                <td>{x.name}</td>
                <td>{x.containerType}</td>
                <td>{x.url}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    );
  }
}

Plugins.propTypes = {
  plugins: React.PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  plugins: getPlugins(state.plugins)
});

const mapDispatchToProps = ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plugins);