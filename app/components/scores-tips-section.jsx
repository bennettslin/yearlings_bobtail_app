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
    selectedDotsIndex,
    onTipsClick,
    onDotsExpandClick

}) => {

    return (
        <div className="section scores-tips-section">
            <a
                className="scores-tips-button dots-button enabled"
                onClick={e => onDotsExpandClick(e)}
            >
                <div className="large button-icon dots-icon">
                    {selectedDotsIndex}
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
