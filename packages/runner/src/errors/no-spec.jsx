import React, { Component } from 'react'
import RunnerWrap from '../app/runner-wrap'
import eventManager from '../lib/event-manager'

class NoSpec extends Component {
  componentWillMount () {
    window.addEventListener('hashchange', this._onHashChange)
  }

  render () {
    return (
      <RunnerWrap className='no-spec'>
        <div className='no-spec-message'>
          <p>Whoops, there is no test to run.</p>
          <p className='muted'>Choose a test to run from the desktop application.</p>
          <p>
            <button onClick={() => eventManager.focusTests()}>
              <i className='fa fa-chevron-left'></i>
              View All Tests
            </button>
          </p>
          <img src={`/${this.props.config.namespace}/runner/no-spec-instructions.png`} />
        </div>
        {this.props.children}
      </RunnerWrap>
    )
  }

  _onHashChange = () => {
    this.props.onHashChange()
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this._onHashChange)
  }
}

export default NoSpec
