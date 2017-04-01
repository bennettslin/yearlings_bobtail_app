import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Button = ({

    buttonName,
    iconText,
    isLarge,
    handleClick

}) => (
    <a
        className={classnames(
            'button',
            `${buttonName}-button`,
            'button-animatable',
            'enabled'
        )}
        onClick={e => handleClick(e)}
    >
        <div className={classnames(
            'button-icon',
            { 'large': isLarge }
        )}>
            {iconText}
        </div>
    </a>
)

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
    iconText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isLarge: PropTypes.bool,
    handleClick: PropTypes.func.isRequired
};

export default Button
