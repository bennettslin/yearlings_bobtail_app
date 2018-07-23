import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg/Svg'

import { getButtonIcon } from './buttonHelper'

const propTypes = {
    // From parent.
    showDisabled: PropTypes.bool,
    buttonName: PropTypes.string.isRequired,

    // TODO: Turn temporaryText into index option passed to icon component.
    temporaryText: PropTypes.any
}

const ButtonIcon = ({

    showDisabled,
    buttonName,
    temporaryText

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

                <circle
                    className={cx(
                        'ButtonIcon__temporaryField',

                        showDisabled ?
                            'ButtonIcon__temporaryField__disabled' :
                            `ButtonIcon__temporaryField__${buttonName}`
                    )}
                />

                <IconComponent
                    index={0}
                />

            </Svg>

            <div
                className={cx(
                    'ButtonIcon__temporaryText'
                )}
            >
                {temporaryText}
            </div>
        </div>
    )
}

ButtonIcon.propTypes = propTypes

export default ButtonIcon
