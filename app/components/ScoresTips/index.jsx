// Section for score and tips toggle buttons.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoreToggle from '../Score/Toggle'
import TipsToggle from '../Tips/Toggle'

const mapStateToProps = ({
    viewportStore: { isDesktopWidth }
}) => ({
    isDesktopWidth
})

class ScoresTips extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDesktopWidth: PropTypes.bool.isRequired
    }

    render() {
        const { isDesktopWidth } = this.props

        // Render only in mobile.
        return !isDesktopWidth && (
            <div className={cx(
                'ScoresTips',
                'flex__mainSideButtons'
            )}>
                <TipsToggle />
                <ScoreToggle />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ScoresTips)
