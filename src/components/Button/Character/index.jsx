// Button to select book or song in nav section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ButtonCharacter = ({
    buttonName,
    isSelected,
    character,
    hasCharacterShadowLight,

}) => Boolean(character) && (
    <div
        {...{
            className: cx(
                'ButtonCharacter',
                `ButtonCharacter__${buttonName}`,
                isSelected ?
                    'button__text__selected' :
                    'button__text__interactable',
                'font__heading',
                'abF',
                'fCC',
                hasCharacterShadowLight ?
                    'textShadow__light' :
                    'textShadow__dark',
            ),
        }}
    >
        {character}
    </div>
)

ButtonCharacter.propTypes = {
    buttonName: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    character: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    hasCharacterShadowLight: PropTypes.bool,
}

export default memo(ButtonCharacter)
