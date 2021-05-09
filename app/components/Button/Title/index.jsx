// Button to select book or song in nav section.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const ButtonTitle = ({
    title,
    isSelected,
    hasTextShadowLight,

}) => {
    return Boolean(title) && (
        <div
            {...{
                className: cx(
                    'ButtonTitle',
                    'abF',
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        'ButtonTitle__text',
                        isSelected ?
                            'button__text__selected' :
                            'button__text__interactable',
                        'Rancho',
                        hasTextShadowLight ?
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
}

ButtonTitle.propTypes = {
    title: PropTypes.string,
    isSelected: PropTypes.bool,
    hasTextShadowLight: PropTypes.bool,
}

export default memo(ButtonTitle)
