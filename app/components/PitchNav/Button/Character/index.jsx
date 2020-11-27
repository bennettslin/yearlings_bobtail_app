// Button to select book or song in nav section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const PitchCharacter = ({
    pitchIndex,
    isSelected

}) => {

    return (
        <div
            {...{
                className: cx(
                    'PitchCharacter',
                    isSelected ?
                        'Nav__text__selected' :
                        'Nav__text__interactable',
                    'Rancho',
                    'abF',
                    'fCC',
                    'textShadow__dark'
                )
            }}
        >
            {pitchIndex}
        </div>
    )
}

PitchCharacter.propTypes = {
    pitchIndex: PropTypes.number,
    isSelected: PropTypes.bool
}

export default memo(PitchCharacter)
