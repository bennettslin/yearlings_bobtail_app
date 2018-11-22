// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ScoresTips from '../../ScoresTips'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'

const propTypes = {
    // From parent.
        className: PropTypes.any,
        isPhone: PropTypes.bool,
        handleOverviewToggle: PropTypes.func.isRequired,
        scoresTipsHandlers: PropTypes.object.isRequired
    },

    LeftShelf = ({

        className,
        isPhone,
        handleOverviewToggle,
        scoresTipsHandlers

    }) => (
        <div className={cx(
            'LeftShelf',
            'width__leftShelf',
            isPhone && 'absoluteFullContainer',
            className
        )}>
            <OverviewToggle
                inLeftShelf
                {...{
                    handleOverviewToggle
                }}
            />
            <DotsSlideToggle />
            <ScoresTips {...scoresTipsHandlers}
                inLeftShelf
            />
        </div>
    )

LeftShelf.propTypes = propTypes

export default LeftShelf
