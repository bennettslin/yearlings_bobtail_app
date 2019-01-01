import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { SHOWN } from 'constants/options'

class ShownWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricAnnotationIndex: PropTypes.number.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                lyricAnnotationIndex,
                selectedOverviewOption,
                selectedTipsOption,
                isCarouselShown,
                isLyricExpanded,
                isDotsSlideShown,
                isOverlayShown,
                children
            } = this.props,

            overviewShown = selectedOverviewOption === SHOWN,
            tipsShown = selectedTipsOption === SHOWN

        return (
            <div
                {...{
                    className: cx(
                        'ShownWrapper',

                        lyricAnnotationIndex ?
                            'ShW__annotationShown' :
                            'ShW__annotationHidden',

                        overviewShown &&
                            'ShW__overviewShown',
                        tipsShown &&
                            'ShW__tipsShown',

                        isCarouselShown ?
                            'ShW__carouselExpanded' :
                            'ShW__navExpanded',
                        isDotsSlideShown ?
                            'ShW__dotsShown' :
                            'ShW__dotsHidden',
                        isLyricExpanded ?
                            'ShW__lyricExpanded' :
                            'ShW__lyricCollapsed',

                        isOverlayShown ?
                            'ShW__overlayShown' :
                            'ShW__overlayHidden'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    lyricStore: { lyricAnnotationIndex },
    optionStore: {
        selectedOverviewOption,
        selectedTipsOption
    },
    toggleStore: {
        isCarouselShown,
        isLyricExpanded,
        isDotsSlideShown
    },
    transientStore: { isOverlayShown }
}) => ({
    lyricAnnotationIndex,
    selectedOverviewOption,
    selectedTipsOption,
    isCarouselShown,
    isLyricExpanded,
    isDotsSlideShown,
    isOverlayShown
})

export default connect(mapStateToProps)(ShownWrapper)
