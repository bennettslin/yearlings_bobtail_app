import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const InfantNursing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'InfantNursing'
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
                    'InfantNursing'
                )}
            </text>
        </Svg>
    )
}

InfantNursing.propTypes = propTypes;

export default InfantNursing
