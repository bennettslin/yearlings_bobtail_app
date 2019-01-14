import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import AnnotationPopup from '../../Popups/Annotation'
import AboutPopup from '../../Popups/About'
import ScorePopup from '../../Popups/Score'
import WikiPopup from '../../Popups/Wiki'

const mapStateToProps = ({
    mountStore: { canScoreMount }
}) => ({
    canScoreMount
})

class OverlayPopups extends PureComponent {

    static propTypes = {
        // Through Redux.
        canScoreMount: PropTypes.bool.isRequired,

        // From parent.
        setScoreFocusElement: PropTypes.func.isRequired,
        setWikiFocusElement: PropTypes.func.isRequired
    }

    render() {

        const {
            canScoreMount,
            setScoreFocusElement,
            setWikiFocusElement
        } = this.props

        return (
            <div className={cx(
                'OverlayPopups',
                'topHeight__overlayPopups',
                'topHeight__overlayPopups__desktop',
                'topHeight__overlayPopups__mobile',
                'abF'
            )}>
                <AnnotationPopup />
                <AboutPopup />
                {canScoreMount && (
                    <ScorePopup {...{ setScoreFocusElement }} />
                )}
                <WikiPopup {...{ setWikiFocusElement }} />
            </div>
        )
    }
}
export default connect(mapStateToProps)(OverlayPopups)
