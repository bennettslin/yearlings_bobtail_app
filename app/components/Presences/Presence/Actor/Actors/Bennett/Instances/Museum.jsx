import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Museum = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Museum'
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
                    'Museum'
                )}
            </text>
        </Svg>
    )
}

Museum.propTypes = propTypes

export default Museum
