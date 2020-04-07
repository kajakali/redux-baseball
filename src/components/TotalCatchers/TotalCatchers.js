import React, { Component } from 'react';
import { connect } from 'react-redux';

class TotalCatchers extends Component {

  render() {
    return ( 
        <div>Total Catchers: {JSON.stringify(this.props.reduxStore.addCatcher.length)}</div>  
    );
  }
}
const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})
export default connect(putReduxStateOnProps)(TotalCatchers);
