import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg/Svg'

import { getButtonIcon } from './buttonHelper'

const propTypes = {
    // From parent.
    showAsDisabled: PropTypes.bool,
    buttonName: PropTypes.string.isRequired,
    buttonIdentifier: PropTypes.any
}

const ButtonIcon = ({

    showAsDisabled,
    buttonName,
    buttonIdentifier

}) => {

    const IconComponent = getButtonIcon(buttonName)

    return (
        <div
            className={cx(
                'ButtonIcon',
                'absoluteFullContainer',
                'flexCentreContainer'
            )}
        >
            <Svg
                className={cx(
                    'absoluteFullContainer'
                )}
            >
                {/* TODO: Not sure if this will still be used. */}
                <circle
                    className={cx(
                        'ButtonIcon__temporaryField',

                        showAsDisabled ?
                            'ButtonIcon__temporaryField__disabled' :
                            `ButtonIcon__temporaryField__${buttonName}`
                    )}
                />

                <IconComponent
                    buttonIdentifier={buttonIdentifier}
                />
            </Svg>
        </div>
    )
}

ButtonIcon.propTypes = propTypes

export default ButtonIcon
