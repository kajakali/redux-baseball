import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalPitchers extends Component {

  render() {
    return ( 
        <div>Total Pitchers: {JSON.stringify(this.props.reduxStore.addPitcher.length)}</div>  
    );
  }
}
const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})
export default connect(putReduxStateOnProps)(TotalPitchers);
