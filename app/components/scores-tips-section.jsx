import React from 'react'
import { TIPS_OPTIONS } from '../helpers/constants'

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
    isPhone,
    selectedScoreIndex,
    selectedTipsIndex,
    handleScoreToggle,
    handleTipsToggle

}) => {

    return (
        <div className="section scores-tips-section">
            {!isPhone &&
                <a
                    className="scores-tips-button scores-button enabled"
                    onClick={e => handleScoreToggle(e)}
                >
                    <div className="large button-icon scores-icon">
                        {selectedScoreIndex}
                    </div>
                </a>
            }
            <a
                className="scores-tips-button tips-button enabled"
                onClick={e => handleTipsToggle(e)}
            >
                <div className="large button-icon tips-icon">
                    {TIPS_OPTIONS[selectedTipsIndex]}
                </div>
            </a>
        </div>
    )
}

export default ScoresTipsSection
