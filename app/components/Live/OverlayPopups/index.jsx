import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import AnnotationPopup from '../../Popups/Annotation'
import AboutPopup from '../../Popups/About'
import ScorePopup from '../../Popups/Score'
import WikiPopup from '../../Popups/Wiki'

const mapStateToProps = ({
    mountStore: { canScoreMount },
    responsiveStore: { menuHeight }
}) => ({
    canScoreMount,
    menuHeight
})

class OverlayPopups extends PureComponent {

    static propTypes = {
        // Through Redux.
        canScoreMount: PropTypes.bool.isRequired,
        menuHeight: PropTypes.number.isRequired
    }

    render() {
        const {
            canScoreMount,
            menuHeight
        } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'OverlayPopups',
                        'abF'
                    ),
                    style: {
                        top: `${menuHeight}px`,
                        height: `calc(100% - ${menuHeight}px)`
                    }
                }}
            >
                <AnnotationPopup />
                <AboutPopup />
                {canScoreMount && (
                    <ScorePopup />
                )}
                <WikiPopup />
            </div>
        )
    }
}
export default connect(mapStateToProps)(OverlayPopups)
