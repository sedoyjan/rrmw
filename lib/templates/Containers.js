import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    #####Init
} from '../Actions/Action#####'
import View##### from '../Components/View#####'

class Container##### extends Component {

  componentDidMount() {
    this.props.#####Init()
  }
  
  
  render() {
    return (
      <View##### />
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
  return {
    #####Init: () => {
      dispatch(#####Init())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container#####)
