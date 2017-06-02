import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { SCORE_TOGGLE_KEY,
         TIPS_TOGGLE_KEY } from '../../constants/access'
import { TIPS_OPTIONS } from '../../constants/options'
import { getIsPhone } from '../../helpers/responsive-helper'

// Pass Redux state into component props.
const passReduxStateToProps = ({
    deviceIndex,
    selectedScoreIndex,
    selectedTipsIndex
}) => ({
    deviceIndex,
    selectedScoreIndex,
    selectedTipsIndex
})

/*************
 * CONTAINER *
 *************/

const ScoresTipsSection = (props) => (
    <ScoresTipsSectionView {...props} />
)

ScoresTipsSection.propTypes = {
    deviceIndex: PropTypes.number.isRequired,
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
    deviceIndex,
    selectedScoreIndex,
    selectedTipsIndex,
    handleScoreToggle,
    handleTipsToggle

}) => {

    return (
        <div className="section scores-tips-section">
            {!getIsPhone(deviceIndex) &&
                <Button
                    accessKey={SCORE_TOGGLE_KEY}
                    buttonName="scores"
                    iconText={selectedScoreIndex}
                    isLarge={true}
                    handleClick={handleScoreToggle}
                />
            }
            <Button
                accessKey={TIPS_TOGGLE_KEY}
                buttonName="tips"
                iconText={TIPS_OPTIONS[selectedTipsIndex]}
                isLarge={true}
                handleClick={handleTipsToggle}
            />
        </div>
    )
}

export default connect(passReduxStateToProps)(ScoresTipsSection)
