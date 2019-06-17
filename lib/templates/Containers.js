// @flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  // @rgen-import 

} from '../Actions/Action#####'
import View##### from '../Components/View#####/View#####'
import type { View#####_Props } from '../Components/View#####/View#####'

class Container##### extends PureComponent<View#####_Props> {

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
