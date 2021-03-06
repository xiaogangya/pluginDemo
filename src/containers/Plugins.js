import React from 'react'
import { connect } from 'react-redux'
import { getPlugins } from '../reducers/plugins'
import { enablePlugin } from '../actions'

class Plugins extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table className="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th>Name</th>
            <th>Injected area</th>
            <th>Enable</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.plugins.map(x => {
              return <tr key={x.name}>
                <td>{x.name}</td>
                <td>{x.containerType}</td>
                <td><button type="button" onClick={() => this.props.enablePlugin(x.name, !x.enable)}>{x.enable.toString()}</button></td>
                <td><a href={x.url} target="_blank">{x.url}</a></td>
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

const mapDispatchToProps = dispatch => ({
  enablePlugin: (name, enable) => {
    dispatch(enablePlugin(name, enable));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plugins);