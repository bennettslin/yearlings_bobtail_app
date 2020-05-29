// Section for dots and overview toggle buttons.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import ScoreToggle from '../../Score/Toggle'
import TipsToggle from '../../Tips/Toggle'
import DotsSlideToggle from '../DotsSlideToggle'
import OverviewToggle from '../OverviewToggle'
import { IS_SHELF_LEFT_SHOWN_SELECTOR } from '../../../redux/transient/selectors'
import './style'

const mapStateToProps = state => {
    const {
            viewportStore: { isDesktopWidth }
        } = state,
        isShelfLeftShown = IS_SHELF_LEFT_SHOWN_SELECTOR(state)

    return {
        isDesktopWidth,
        isShelfLeftShown
    }
}

const propTypes = {
    // Through Redux.
    isDesktopWidth: PropTypes.bool.isRequired,
    isShelfLeftShown: PropTypes.bool.isRequired
}

const CHILD_SELECTOR = 'ShelfLeft__child'

const ShelfLeft = ({
    isDesktopWidth,
    isShelfLeftShown

}) => (
    <div className={cx(
        'ShelfLeft',
        isShelfLeftShown && 'ShelfLeft__shown',
        'flex__mainSideButtons'
    )}>
        <OverviewToggle {...{ className: CHILD_SELECTOR }} />
        <DotsSlideToggle {...{ className: CHILD_SELECTOR }} />
        {isDesktopWidth && (
            <>
                <ScoreToggle {...{ className: CHILD_SELECTOR }} />
                <TipsToggle {...{ className: CHILD_SELECTOR }} />
            </>
        )}
    </div>
)

ShelfLeft.propTypes = propTypes

export default connect(mapStateToProps)(memo(ShelfLeft))
