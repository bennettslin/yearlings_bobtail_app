import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import AnnotationPopup from '../../Popups/Annotation'
import AboutPopup from '../../Popups/About'
import ScorePopup from '../../Popups/Score'
import WikiPopup from '../../Popups/Wiki'

const mapStateToProps = ({
    mobileStore: { isHigherProcessor }
}) => ({
    isHigherProcessor
})

class OverlayPopups extends PureComponent {

    static propTypes = {
        // Through Redux.
        isHigherProcessor: PropTypes.bool.isRequired,

        // From parent.
        setScoreFocusElement: PropTypes.func.isRequired,
        setWikiFocusElement: PropTypes.func.isRequired
    }

    render() {

        const {
            isHigherProcessor,
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
                {isHigherProcessor && (
                    <ScorePopup {...{ setScoreFocusElement }} />
                )}
                <WikiPopup {...{ setWikiFocusElement }} />
            </div>
        )
    }
}
export default connect(mapStateToProps)(OverlayPopups)
