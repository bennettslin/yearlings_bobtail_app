import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettSorrowful = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'BennettSorrowful'
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
                    'BennettSorrowful'
                )}
            </text>
        </Svg>
    )
}

BennettSorrowful.propTypes = propTypes;

export default BennettSorrowful
