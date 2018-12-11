import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Backstage = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Backstage'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'Backstage'
                )}
            </text>
        </Svg>
    )
}

Backstage.propTypes = propTypes

export default Backstage
