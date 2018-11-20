import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SolicitingOpinion = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'SolicitingOpinion'
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
                    'SolicitingOpinion'
                )}
            </text>
        </Svg>
    )
}

SolicitingOpinion.propTypes = propTypes;

export default SolicitingOpinion
