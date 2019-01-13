// Section for score and tips toggle buttons.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ScoreToggle from '../Score/Toggle'
import TipsToggle from '../Tips/Toggle'

const mapStateToProps = ({
    viewportStore: { isDesktopWidth },
    responsiveStore: { isScoresTipsInMain }
}) => ({
    isDesktopWidth,
    isScoresTipsInMain
})

class ScoresTips extends PureComponent {

    static defaultProps = {
        inMenu: false,
        inMainRightSide: false,
        inLeftShelf: false
    }

    static propTypes = {
        // Through Redux.
        isDesktopWidth: PropTypes.bool.isRequired,
        isScoresTipsInMain: PropTypes.bool.isRequired,

        // From parent.
        inMenu: PropTypes.bool.isRequired,
        inMainRightSide: PropTypes.bool.isRequired,
        inLeftShelf: PropTypes.bool.isRequired
    }

    render() {
        const {
                isDesktopWidth,
                isScoresTipsInMain,

                inMenu,
                inMainRightSide,
                inLeftShelf
            } = this.props,

            // Render if scores tips is...
            shouldRender = isScoresTipsInMain ?

                (
                    // ...in main on the right in mobile.
                    (inMainRightSide && !isDesktopWidth) ||

                    // ...in main on the left in dots overview on desktop.
                    (inLeftShelf && isDesktopWidth)
                ) :

            // ...otherwise, render in menu.
                inMenu

        return shouldRender && (
            <div className={cx(
                'ScoresTips',
                {
                    'ScoresTips__inMenu': inMenu,
                    'ScoresTips__inMain': inMainRightSide || inLeftShelf,
                    'ScoresTips__inMainRight': inMainRightSide,
                    'ScoresTips__inLeftShelf': inLeftShelf,
                    'LeftShelf__child': inLeftShelf
                }
            )}>
                <ScoreToggle />
                <TipsToggle {...{ className: 'ScoresTipsButton' }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(ScoresTips)
