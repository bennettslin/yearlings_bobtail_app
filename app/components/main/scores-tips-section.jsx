import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import { TIPS_OPTIONS,
         SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const ScoresTipsSection = (props) => (
    <ScoresTipsSectionView {...props} />
)

ScoresTipsSection.propTypes = {
    isPhone: PropTypes.bool.isRequired,
    selectedScoreIndex: PropTypes.number.isRequired,
    selectedTipsIndex: PropTypes.number.isRequired,
    handleScoreToggle: PropTypes.func.isRequired,
    handleTipsToggle: PropTypes.func.isRequired
}

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
                <Button
                    accessKey={SCORE_TOGGLE_KEY}
                    buttonName={'scores'}
                    iconText={selectedScoreIndex}
                    isLarge={true}
                    handleClick={handleScoreToggle}
                />
            }
            <Button
                accessKey={TIPS_TOGGLE_KEY}
                buttonName={'tips'}
                iconText={TIPS_OPTIONS[selectedTipsIndex]}
                isLarge={true}
                handleClick={handleTipsToggle}
            />
        </div>
    )
}

export default ScoresTipsSection
