// Webview to show song score.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getSongScore } from '../../helpers/data-helper'
// import spinnerSvg from '../../../app/assets/images/default_spinner.svg'

// TODO: Look into http://stackoverflow.com/questions/19654577/html-embedded-pdf-iframe

class ScoreSection extends Component {

    constructor(props) {
        super(props)

        this.hi = this.hi.bind(this)
    }

    // FIXME: How to do key press when iframe is activeElement?
    hi() {
        // TODO: Keep focus on score section. Pass up and down and page up and down and space events to iframe.

        // console.error('e.nativeEvent', e.nativeEvent);

        const iframeEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' })

        this.myWebview.dispatchEvent(iframeEvent);

        const contentWindow = this.myWebview.contentWindow

        window.z = contentWindow

        // console.error('contentWindow', contentWindow);
        //
        contentWindow.scrollBy(0, 100)

        // console.error('contentWindow.scrollTop', contentWindow.scrollTop);

        // const myDocument = this.myWebview.contentWindow.document

        // this.myWebview.addEventListener('keydown', e => {
        //     console.error('e', e);
        // })
    }

    render() {
        const score = getSongScore(0)

        return (
            <div
                ref={this.props.scoreSectionRef}
                className="section score-section"
                onKeyDown={this.hi}
                tabIndex="1"
            >
                <iframe
                    ref={(node) => (this.myWebview = node)}
                    className={`webview`}
                    src={score}
                    onLoad={this.onWebviewLoad}
                    tabIndex="2"
                />
            </div>
        )
    }
}

ScoreSection.propTypes = {
    // Also from parent, for now.
    selectedSongIndex: PropTypes.number.isRequired,

    // From parent.
    scoreSectionRef: PropTypes.func.isRequired
}

export default ScoreSection
