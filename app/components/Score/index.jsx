// Webview to show song score.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import { updateLoadStore } from '../../redux/load/action'

import { getSongScore } from './helper'

const mapStateToProps = ({
    lyricStore: { lyricSongIndex }
}) => ({
    lyricSongIndex
})

class Score extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricSongIndex: PropTypes.number.isRequired,
        updateLoadStore: PropTypes.func.isRequired
    }

    onIframeLoad = () => {
        this.props.updateLoadStore({ isScoreLoaded: true })
    }

    render() {
        const { lyricSongIndex } = this.props,
            score = getSongScore(lyricSongIndex)

        return (
            <div
                {...{
                    className: cx(
                        'Score',
                        'iframeContainer'
                    )
                }}
            >
                <iframe
                    {...{
                        className: 'iframeContainer__iframe',
                        tabIndex: -1,
                        src: score,
                        onLoad: this.onIframeLoad
                    }}
                />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    { updateLoadStore }
)(Score)
