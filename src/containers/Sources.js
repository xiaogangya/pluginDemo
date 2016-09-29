import React from 'react'
import { connect } from 'react-redux'
import { getSources } from '../reducers/sources'

class Sources extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          {
            this.props.sources.map(x => {
            return <div key={x.key}>{x.key}: {x.value}</div>
           })
          }
        </div>
      </div>
    );
  }
}

Sources.propTypes = {
  sources: React.PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  sources: getSources(state.sources)
});

const mapDispatchToProps =  ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources);