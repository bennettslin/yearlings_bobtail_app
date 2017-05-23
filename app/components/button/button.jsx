import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({

    buttonName,
    buttonClass,
    iconClass,
    iconText,
    accessKey,
    isCustomShape,
    isCustomSize,
    accessHighlighted,
    isEnabled,
    isSelected,
    isDeselected,
    isLarge,
    isSmall,
    handleClick,
    extraChild

}) => (
    <a
        className={classnames(
            'button',
            buttonName && `${buttonName}-button`,
            buttonClass,
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

Button.propTypes = {
    buttonName: PropTypes.string,
    buttonClass: PropTypes.string,
    iconClass: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    iconText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    accessKey: PropTypes.string,
    isCustomShape: PropTypes.bool,
    isCustomSize: PropTypes.bool,
    isEnabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDeselected: PropTypes.bool,
    isLarge: PropTypes.bool,
    isSmall: PropTypes.bool,

    handleClick: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),
    extraChild: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.element
    ])
}

Button.defaultProps = {
    isEnabled: true
}

export default Button
