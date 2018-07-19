import React, { Component } from 'react'
import { connect } from "react-redux";
import { HideModal } from "../../redux/actions/actions";

import {
  Dialog,
  Paragraph
} from 'evergreen-ui'


class Modal extends Component {

  render() {

    return (
      <div>
        <Dialog
          isShown={this.props.show}
          title="Dialog Title"
          onCloseComplete={this.props.Hide}
        >
          <Paragraph>Dialog content</Paragraph>
        </Dialog>
      </div>

    )

  }

}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    Hide() {
      dispatch({ type: 'HIDE_MODAL', show: false })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);