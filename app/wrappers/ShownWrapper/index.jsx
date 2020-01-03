import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { SHOWN } from 'constants/options'

class ShownWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.
        isLyricLogue: PropTypes.bool.isRequired,
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isLogueOverviewShown: PropTypes.bool.isRequired,
        selectedOverviewOption: PropTypes.string.isRequired,
        selectedTipsOption: PropTypes.string.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isOverlayShown: PropTypes.bool.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                isLyricLogue,
                lyricAnnotationIndex,
                isLogueOverviewShown,
                selectedOverviewOption,
                selectedTipsOption,
                isCarouselShown,
                isNavShown,
                isLyricExpanded,
                isDotsSlideShown,
                isOverlayShown,
                children
            } = this.props,

            overviewShown =
                isLyricLogue ?
                    isLogueOverviewShown :
                    selectedOverviewOption === SHOWN,
            tipsShown = selectedTipsOption === SHOWN

        return (
            <div
                {...{
                    className: cx(
                        'ShownWrapper',
                        'abF',

                        lyricAnnotationIndex ?
                            'ShW__annotationShown' :
                            'ShW__annotationHidden',

                        overviewShown ?
                            'ShW__overviewShown' :
                            'ShW__overviewHidden',
                        tipsShown &&
                            'ShW__tipsShown',

                        isCarouselShown &&
                            'ShW__carouselExpanded',
                        isNavShown &&
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
    lyricStore: {
        isLyricLogue,
        lyricAnnotationIndex
    },
    optionStore: {
        isLogueOverviewShown,
        selectedOverviewOption,
        selectedTipsOption
    },
    toggleStore: {
        isCarouselShown,
        isNavShown,
        isLyricExpanded,
        isDotsSlideShown
    },
    transientStore: { isOverlayShown }
}) => ({
    isLyricLogue,
    lyricAnnotationIndex,
    isLogueOverviewShown,
    selectedOverviewOption,
    selectedTipsOption,
    isCarouselShown,
    isNavShown,
    isLyricExpanded,
    isDotsSlideShown,
    isOverlayShown
})

export default connect(mapStateToProps)(ShownWrapper)
