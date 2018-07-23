import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import { getDotIcon } from './buttonHelper'

const propTypes = {
    // From parent.
    dotName: PropTypes.string.isRequired
}

const DotIcon = ({

    dotName,

}) => {
    const IconComponent = getDotIcon(dotName)

    return (
        <div
            className={cx(
                'DotIcon',
                'absoluteFullContainer',
                'flexCentreContainer'
            )}
        >
            <DynamicSvg
                className={cx(
                    'absoluteFullContainer'
                )}
            >

                <circle
                    className={cx(
                        'DotIcon__temporaryField',
                        `DotIcon__temporaryField__${dotName}`
                    )}
                />

                <IconComponent />

            </DynamicSvg>
        </div>
    )
}

DotIcon.propTypes = propTypes

export default DotIcon
