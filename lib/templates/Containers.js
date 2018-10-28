import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  // @rgen-import 
  #####Init
} from '../Actions/Action#####'
import View##### from '../Components/View#####'

class Container##### extends Component {

  componentDidMount() {
    this.props.#####Init()
  }
  
  
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
    #####Init: () => {
      dispatch(#####Init())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container#####)
