import React, { Component } from 'react'
import spinnerSvg from '../../../app/assets/images/default_spinner.svg'

/*************
 * CONTAINER *
 *************/

const ScoreSection = (props) => (
    <ScoreSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

// TODO: Have score and wiki inherit from parent component?
// TODO: Look into https://pdfobject.com/ https://pdfobject.com/static.html

// TODO: Look into http://stackoverflow.com/questions/19654577/html-embedded-pdf-iframe

class ScoreSectionView extends Component {

    constructor(props) {
        super(props)
        this.onWebviewLoad = this.onWebviewLoad.bind(this)

        this.state = {
            webviewLoading: true
        }
    }

    componentWillReceiveProps({ scores }) {
        this._onScoreReceived(scores)
    }

    _onScoreReceived(scores) {
        if (scores && scores !== this.props.scores) {
            this.setState({ webviewLoading: true })
        }
    }

    onWebviewLoad() {
        this.setState({
            webviewLoading: false
        })
    }

    render() {
        const { scores } = this.props,
            { webviewLoading } = this.state

        return (
            <div className="section score-section">
                {webviewLoading &&
                    <div className="spinner-container">
                        <img
                            className="spinner"
                            src={spinnerSvg}
                        />
                    </div>
                }
                <iframe
                    ref="webview"
                    className={`webview${webviewLoading ? ' loading' : ''}`}
                    src={scores[0]}
                    onLoad={this.onWebviewLoad}
                />
            </div>
        )
    }
}

export default ScoreSection
