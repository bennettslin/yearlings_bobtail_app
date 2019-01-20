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
    viewportStore: { isDesktopWidth },
    transientStore: { isShelfLeftShown }
}) => ({
    isDesktopWidth,
    isShelfLeftShown
})

const propTypes = {
    // Through Redux.
    isDesktopWidth: PropTypes.bool.isRequired,
    isShelfLeftShown: PropTypes.bool.isRequired
}

const ShelfLeft = ({
    isDesktopWidth,
    isShelfLeftShown

}) => (
    <div className={cx(
        'ShelfLeft',
        isShelfLeftShown && 'ShelfLeft__shown',
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
)

ShelfLeft.propTypes = propTypes

export default connect(mapStateToProps)(memo(ShelfLeft))
