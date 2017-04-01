import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Button = ({

    buttonName,
    iconClass,
    iconText,
    isEnabled = true,
    isSelected,
    isLarge,
    extraChild,
    handleClick

}) => (
    <a
        className={classnames(
            'button',
            buttonName && `${buttonName}-button`,
            'button-animatable',
            { 'enabled': isEnabled,
              'selected': isSelected }
        )}
        onClick={e => handleClick(e)}
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
    iconClass: PropTypes.string,
    iconText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isEnabled: PropTypes.bool,
    isSelected: PropTypes.bool,
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

export default Button
