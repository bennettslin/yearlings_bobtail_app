// Button to select book or song in nav section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ButtonCharacter = ({
    isSelected,
    character,
    hasTextShadowLight,

}) => (
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
                hasTextShadowLight ?
                    'textShadow__light' :
                    'textShadow__dark',
            ),
        }}
    >
        {character}
    </div>
)

ButtonCharacter.propTypes = {
    isSelected: PropTypes.bool,
    character: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    hasTextShadowLight: PropTypes.bool,
}

export default memo(ButtonCharacter)
