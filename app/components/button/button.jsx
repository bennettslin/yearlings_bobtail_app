import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Button = ({

    buttonName,
    iconClass,
    iconText,
    isEnabled = true,
    isLarge,
    handleClick

}) => (
    <a
        className={classnames(
            'button',
            buttonName && `${buttonName}-button`,
            'button-animatable',
            { 'enabled': isEnabled }
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
    isLarge: PropTypes.bool,
    handleClick: PropTypes.func.isRequired
};

export default Button
