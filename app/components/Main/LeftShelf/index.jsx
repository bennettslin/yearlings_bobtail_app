// Section for dots and overview toggle buttons.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoresTips from '../../ScoresTips'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'

const mapStateToProps = ({
    deviceStore: { isPhone }
}) => ({
    isPhone
})

const propTypes = {
        // Through Redux.
        isPhone: PropTypes.bool.isRequired,

        // From parent.
        className: PropTypes.any
    },

    LeftShelf = ({
        className,
        isPhone
    }) => (
        <div className={cx(
            'LeftShelf',
            'width__leftShelf',
            isPhone && 'absoluteFullContainer',
            className
        )}>
            <OverviewToggle inLeftShelf />
            <DotsSlideToggle />
            <ScoresTips inLeftShelf />
        </div>
    )

LeftShelf.propTypes = propTypes

export default connect(mapStateToProps)(LeftShelf)
