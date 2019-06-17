// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  // @rgen-import 
} from '../Actions/ActionReport'
import ViewReport from '../Components/ViewReport'

class ContainerReport extends Component {

  render() {
    return (
      <ViewReport 
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    // @rgen-dispatch    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerReport)
