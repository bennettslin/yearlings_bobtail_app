import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PampasFar = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'PampasFar',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'PampasFar'
                )}
            </text>
        </Svg>
    )
}

PampasFar.propTypes = propTypes

export default PampasFar
