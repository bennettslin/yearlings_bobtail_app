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

class ScoreSectionView extends Component {

    render() {

        return (
            <div className="section score-section">
            </div>
        )
    }
}

export default ScoreSection
