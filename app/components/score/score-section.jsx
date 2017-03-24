import React, { Component } from 'react'
// import spinnerSvg from '../../../app/assets/images/default_spinner.svg'

/*************
 * CONTAINER *
 *************/

const ScoreSection = (props) => (
    <ScoreSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

// TODO: Look into http://stackoverflow.com/questions/19654577/html-embedded-pdf-iframe

class ScoreSectionView extends Component {

    constructor(props) {
        super(props)

        this.hi = this.hi.bind(this)
    }

    // FIXME: How to do key press when iframe is activeElement?
    hi(e) {
        // TODO: Keep focus on score section. Pass up and down and page up and down and space events to iframe.

        console.error('hi');

        console.error('this.myWebview', this.myWebview);

        console.error('e.nativeEvent', e.nativeEvent);

        const iframeEvent = new KeyboardEvent('keydown', {key: 'ArrowDown'})

        console.error('iframeEvent', iframeEvent);

        this.myWebview.dispatchEvent(iframeEvent);

        // const myDocument = this.myWebview.contentWindow.document

        this.myWebview.addEventListener('keydown', e => {
            console.error('e', e);
        })
    }

    render() {
        const { scores } = this.props

        return (
            <div
                ref={this.props.scoreSectionRef}
                className="section score-section"
                onKeyDown={this.hi}
                tabIndex="-1"
            >
                <iframe
                    ref={(node) => (this.myWebview = node)}
                    className={`webview`}
                    src={scores[0]}
                    onLoad={this.onWebviewLoad}
                />
            </div>
        )
    }
}

export default ScoreSection
