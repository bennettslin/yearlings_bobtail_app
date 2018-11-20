import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const UcBerkeleyTree = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'UcBerkeleyTree',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
                )}
                {...other}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...other}
            >
                {cx(
                    'UcBerkeleyTree'
                )}
            </text>
        </Svg>
    )
}

UcBerkeleyTree.propTypes = propTypes

export default UcBerkeleyTree
