// Webview to show song score.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateLoadStore } from 'flux/load/action'
import { getSongScore } from './helper'

const mapStateToProps = ({
    renderedStore: { renderedSongIndex }
}) => ({
    renderedSongIndex
})

class Score extends PureComponent {

    static propTypes = {
        // Through Redux.
        renderedSongIndex: PropTypes.number.isRequired,

        // From parent.
        setScoreRef: PropTypes.func.isRequired
    }

    onIframeLoad = () => {
        this.props.updateLoadStore({ isScoreLoaded: true })
    }

    _setIframeRef = (node) => {
        this.iframe = node
    }

    render() {
        const { renderedSongIndex } = this.props,
            score = getSongScore(renderedSongIndex)

        return (
            <div
                ref={this.props.setScoreRef}
                className={cx(
                    'Score',
                    'iframeContainer'
                )}
                tabIndex="1"
            >
                <iframe
                    ref={this._setIframeRef}
                    className="iframeContainer__iframe"
                    src={score}
                    onLoad={this.onIframeLoad}
                    tabIndex="2"
                />
            </div>
        )
    }
}

// Bind Redux action creators to component props.
const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateLoadStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Score)
