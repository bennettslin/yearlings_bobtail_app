// General button component.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({

    accessHighlighted, accessKey,
    buttonClass, buttonName,
    iconClass, iconText,
    isSmall, isLarge,
    isCustomShape, isCustomSize,
    isDeselected, isEnabled, isSelected,
    handleClick,
    extraChild

}) => (

    <a
        className={classnames(
            'button',
            buttonClass,
            buttonName && `${buttonName}-button`,
            { 'large': isLarge,
              'small': isSmall,
              'custom-shape': isCustomShape,
              'custom-size': isCustomSize,
              'enabled': isEnabled,
              'selected': isSelected,
              'access-highlighted': accessHighlighted,
              'deselected': isDeselected }
        )}
        onClick={handleClick ? e => handleClick(e) : null}
    >
        <div className={classnames(
            'animated-background',
            iconClass
        )}>
            {iconText}
        </div>
        {accessKey &&
            <div className="access-button-icon">
                {accessKey}
            </div>
        }
        {extraChild}
    </a>
)

Button.defaultProps = {
    isEnabled: true
}

Button.propTypes = {
    accessHighlighted: PropTypes.bool,
    accessKey: PropTypes.string,
    buttonClass: PropTypes.string,
    buttonName: PropTypes.string,
    iconClass: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    iconText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isSmall: PropTypes.bool,
    isLarge: PropTypes.bool,
    isCustomShape: PropTypes.bool,
    isCustomSize: PropTypes.bool,
    isDeselected: PropTypes.bool,
    isEnabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    handleClick: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),
    extraChild: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.element
    ])
}

export default Button
