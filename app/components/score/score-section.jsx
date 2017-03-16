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

    shouldComponentUpdate(nextProps) {
        return nextProps.selectedSongIndex !== this.props.selectedSongIndex
    }

    render() {
        const { scores } = this.props

        return (
            <div className="section score-section">
                <iframe
                    ref="webview"
                    className={`webview`}
                    src={scores[0]}
                    onLoad={this.onWebviewLoad}
                />
            </div>
        )
    }
}

export default ScoreSection
