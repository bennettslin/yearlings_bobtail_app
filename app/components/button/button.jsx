import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Button = ({

    buttonName,
    buttonClasses,
    iconClass,
    iconText,
    isEnabled,
    isSelected,
    isDeselected,
    isLarge,
    extraChild,
    handleClick

}) => (
    <a
        className={classnames(
            'button',
            buttonName && `${buttonName}-button`,
            buttonClasses,
            'button-animatable',
            { 'enabled': isEnabled,
              'selected': isSelected,
              'deselected': isDeselected }
        )}
        onClick={handleClick ? e => handleClick(e) : null}
    >
        <div className={classnames(
            'button-icon',
            iconClass,
            { 'large': isLarge }
        )}>
            {iconText}
        </div>
        {extraChild}
    </a>
)

Button.propTypes = {
    buttonName: PropTypes.string,
    buttonClasses: PropTypes.array,
    iconClass: PropTypes.string,
    iconText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isEnabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDeselected: PropTypes.bool,
    isLarge: PropTypes.bool,
    extraChild: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.element
    ]),
    handleClick: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ])
};

Button.defaultProps = {
    isEnabled: true
}

export default Button
