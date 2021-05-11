// Button to select book or song in nav section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ButtonTitle = ({
    buttonName,
    title,
    isSelected,
    hasTitleShadowLight,

}) => Boolean(title) && (
    <div
        {...{
            className: cx(
                'ButtonTitle',
                `ButtonTitle__${buttonName}`,
                'abF',
            ),
        }}
    >
        <div
            {...{
                className: cx(
                    'ButtonTitleText',
                    `ButtonTitleText__${buttonName}`,
                    isSelected ?
                        'button__text__selected' :
                        'button__text__interactable',
                    'Rancho',
                    hasTitleShadowLight ?
                        'textShadow__light' :
                        'textShadow__dark',
                    'fCC',
                ),
            }}
        >
            {title}
        </div>
    </div>
)

ButtonTitle.propTypes = {
    buttonName: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    isSelected: PropTypes.bool,
    hasTitleShadowLight: PropTypes.bool,
}

export default memo(ButtonTitle)
