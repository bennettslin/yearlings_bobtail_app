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
            buttonClass,
            { 'large': isLarge },
            { 'custom-shape': isCustomShape,
              'custom-size': isCustomSize,
              'enabled': isEnabled,
              'selected': isSelected,
              'deselected': isDeselected }
        )}
        onClick={handleClick ? e => handleClick(e) : null}
    >
        <div className={classnames(
            'button-background',
            iconClass
        )}>
            {iconText}
        </div>
        {accessKey &&
            <div className="access-icon">
                {accessKey}
            </div>
        }
        {extraChild}
    </a>
)

Button.propTypes = {
    buttonName: PropTypes.string,
    buttonClass: PropTypes.string,
    iconClass: PropTypes.string,
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
