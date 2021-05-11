import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const ButtonAnimatable = ({
    isAccessEnter,
    showIfAccessOn,
    isDisabled,
    isSelectedDisabled,
    isBrightHover,
    buttonTitle,
    children,

}) => (
    <div
        {...{
            className: cx(
                'ButtonAnimatable',
                'dropShadow',

                !buttonTitle && !isDisabled && !isSelectedDisabled && (
                    isBrightHover ?
                        'dropShadow__brightHover' :
                        'dropShadow__lightHover'
                ),

                buttonTitle && !isSelectedDisabled &&
                        'ButtonAnimatable__hoverOnParent',

                isAccessEnter &&
                showIfAccessOn &&
                !isSelectedDisabled &&
                    'dropShadow__accessed',
                'abF',
            ),
        }}
    >
        {children}
    </div>
)

ButtonAnimatable.propTypes = {
    isAccessEnter: PropTypes.bool,
    showIfAccessOn: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isSelectedDisabled: PropTypes.bool,
    isBrightHover: PropTypes.bool,
    buttonTitle: PropTypes.any,
    children: PropTypes.any,
}

export default ButtonAnimatable
