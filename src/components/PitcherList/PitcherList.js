import React, { Component } from 'react';
import { connect } from 'react-redux';

class PitcherList extends Component {

    handlePitcherSelectClick = selectedPitcher => () => {
        this.props.dispatch({type: 'SELECT_PITCHER', payload: selectedPitcher });
      }

  render() {
    return ( 
        <>
      
        {this.props.reduxStore.addPitcher.map(pitcher => (
            <li
              onClick={this.handlePitcherSelectClick(pitcher)}
            >
              {pitcher}
            </li>)

          )}
          </>
    );
  }
}
const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})
export default connect(putReduxStateOnProps)(PitcherList);
