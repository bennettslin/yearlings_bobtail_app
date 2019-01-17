// Section for dots and overview toggle buttons.

import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'

const mapStateToProps = ({
    viewportStore: { isDesktopWidth }
}) => ({
    isDesktopWidth
})

const propTypes = {
    // Through Redux.
    isDesktopWidth: PropTypes.bool.isRequired
}

const ShelfLeft = memo(({ isDesktopWidth }) => (
    <div className={cx(
        'ShelfLeft',
        'flex__mainSideButtons'
    )}>
        <OverviewToggle />
        <DotsSlideToggle />
        {isDesktopWidth && (
            <___>
                <ScoreToggle />
                <TipsToggle />
            </___>
        )}
    </div>
))

ShelfLeft.propTypes = propTypes

export default connect(mapStateToProps)(ShelfLeft)
