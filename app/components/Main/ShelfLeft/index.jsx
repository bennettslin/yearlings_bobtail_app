// Section for dots and overview toggle buttons.

import React, { PureComponent, Fragment as ___ } from 'react'
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

class ShelfLeft extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDesktopWidth: PropTypes.bool.isRequired
    }

    render() {
        const { isDesktopWidth } = this.props

        return (
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
        )
    }
}

export default connect(mapStateToProps)(ShelfLeft)
