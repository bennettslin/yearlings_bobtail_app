import React from 'react'
import Button from './button/button'
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
                <Button
                    buttonName={'scores'}
                    iconText={selectedScoreIndex}
                    isLarge={true}
                    handleClick={handleScoreToggle}
                />
            }
            <Button
                buttonName={'tips'}
                iconText={TIPS_OPTIONS[selectedTipsIndex]}
                isLarge={true}
                handleClick={handleTipsToggle}
            />
        </div>
    )
}

export default ScoresTipsSection
