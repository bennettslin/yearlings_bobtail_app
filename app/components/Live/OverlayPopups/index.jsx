import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AnnotationPopup from '../../Popups/Annotation'
import AboutPopup from '../../Popups/About'
import ScorePopup from '../../Popups/Score'
import WikiPopup from '../../Popups/Wiki'

class OverlayPopups extends PureComponent {

    static propTypes = {
        // From parent.
        setScoreFocusElement: PropTypes.func.isRequired,
        setWikiFocusElement: PropTypes.func.isRequired
    }

    render() {

        const {
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
                <ScorePopup {...{ setScoreFocusElement }} />
                <WikiPopup {...{ setWikiFocusElement }} />
            </div>
        )
    }
}
export default OverlayPopups
