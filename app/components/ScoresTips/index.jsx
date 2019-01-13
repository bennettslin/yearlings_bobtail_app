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

    static defaultProps = {
        inMainRight: false
    }

    static propTypes = {
        // Through Redux.
        isDesktopWidth: PropTypes.bool.isRequired,

        // From parent.
        inMainRight: PropTypes.bool.isRequired
    }

    render() {
        const {
                isDesktopWidth,
                inMainRight
            } = this.props,

            inLeftShelf = !inMainRight

        // Render in left shelf on desktop, in main right on mobile.
        return isDesktopWidth === inLeftShelf && (
            <div className={cx(
                'ScoresTips',
                {
                    'ScoresTips__inMainRight': inMainRight,
                    'ScoresTips__inLeftShelf': inLeftShelf,
                    'LeftShelf__child': inLeftShelf
                }
            )}>
                <ScoreToggle />
                <TipsToggle />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ScoresTips)
