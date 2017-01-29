import React from 'react'
import { TIPS_OPTIONS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const ScoresTipsSection = (props) => (
    <ScoresTipsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const ScoresTipsSectionView = ({

    // From props.
    selectedTipsIndex,
    onTipsClick

}) => {

    return (
        <div className="section scores-tips-section">
            <a
                className="scores-tips-button scores-button enabled"
                onClick={e => console.error(e)}
            >
                <div className="large button-icon scores-icon">
                    {'hi'}
                </div>
            </a>
            <a
                className="scores-tips-button tips-button enabled"
                onClick={e => onTipsClick(e)}
            >
                <div className="large button-icon tips-icon">
                    {TIPS_OPTIONS[selectedTipsIndex]}
                </div>
            </a>
        </div>
    )
}

export default ScoresTipsSection
