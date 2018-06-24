// Webview to show song score.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setIsScoreLoaded } from '../../redux/actions/player'
import { getSongScore } from '../../helpers/dataHelper'

const mapStateToProps = ({
    renderableSongIndex
}) => ({
    renderableSongIndex
})

class Score extends Component {

    static propTypes = {
        // Through Redux.
        renderableSongIndex: PropTypes.number.isRequired,

        // From parent.
        scoreRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.onIframeLoad = this.onIframeLoad.bind(this)
    }

    onIframeLoad() {
        this.props.setIsScoreLoaded(true)
    }

    render() {
        const { renderableSongIndex } = this.props,
            score = getSongScore(renderableSongIndex)

        return (
            <div
                ref={this.props.scoreRef}
                className={cx(
                    'Score',
                    'iframeContainer'
                )}
                tabIndex="1"
            >
                <iframe
                    ref={(node) => (this.myIframe = node)}
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
