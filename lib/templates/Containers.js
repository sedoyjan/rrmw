// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  // @rgen-import 
} from '../Actions/Action#####'
import View##### from '../Components/View#####'

class Container##### extends Component {

  render() {
    return (
      <View##### 
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
)(Container#####)