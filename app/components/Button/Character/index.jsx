// Button to select book or song in nav section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ButtonCharacter = ({
    isSelected,
    character,
    hasTextShadowLight,

}) => {

    return (
        <div
            {...{
                className: cx(
                    'ButtonCharacter',
                    isSelected ?
                        'button__text__selected' :
                        'button__text__interactable',
                    'Rancho',
                    'abF',
                    'fCC',
                    'textShadow__dark',
                    hasTextShadowLight && 'textShadow__light'
                ),
            }}
        >
            {character}
        </div>
    )
}

ButtonCharacter.propTypes = {
    isSelected: PropTypes.bool,
    character: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    hasTextShadowLight: PropTypes.bool,
}

export default memo(ButtonCharacter)
