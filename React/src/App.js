import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import { connect } from "react-redux";

import {
  Button
} from 'evergreen-ui'

class App extends Component {

  render() {
    return (
      <div>
        <div className="text-center">
          <Button onClick={this.props.OpenModal} appearance="green">Open Modal</Button>
        </div>
        <Modal show={this.props.show}></Modal>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    OpenModal() {
      dispatch({ type: 'HIDE_MODAL', show: true })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
