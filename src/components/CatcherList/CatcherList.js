import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatcherList extends Component {

    handleCatcherSelectClick = selectedCatcher => () => {
        this.props.dispatch({type: 'SELECT_CATCHER', payload: selectedCatcher });
      }

  render() {
    return ( 
        <>
      
        {this.props.reduxStore.addCatcher.map(catcher => (
            <li
              onClick={this.handleCatcherSelectClick(catcher)}
            >
              {catcher}
            </li>)

          )}
          </>
    );
  }
}
const putReduxStateOnProps = (reduxStore) => ({
    reduxStore
})
export default connect(putReduxStateOnProps)(CatcherList);
