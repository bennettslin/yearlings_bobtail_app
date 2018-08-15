// Webview to show song score.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setIsScoreLoaded } from 'flux/actions/player'
import { getSongScore } from 'helpers/dataHelper'

const mapStateToProps = ({
    renderableStore: { renderableSongIndex }
}) => ({
    renderableSongIndex
})

class Score extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        setScoreRef: PropTypes.func.isRequired
    }

    onIframeLoad = () => {
        this.props.setIsScoreLoaded(true)
    }

    _setIframeRef = (node) => {
        this.iframe = node
    }

    render() {
        const { renderableSongIndex } = this.props,
            score = getSongScore(renderableSongIndex)

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
        setIsScoreLoaded
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Score)
