import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AccessLetters from '../../Access/Letters'
import {
    ARROW_LEFT,
    ARROW_RIGHT
} from '../../../constants/access'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../../redux/dots/selectors'
import './style'
import { LYRIC_ANNOTATION_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import {
    IS_CAROUSEL_SHOWN_SELECTOR,
    IS_NAV_SHOWN_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR
} from '../../../redux/toggle/selectors'

const mapStateToProps = state => {
    const
        dotsBitNumber = DOTS_BIT_NUMBER_SELECTOR(state),
        lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
        isCarouselShown = IS_CAROUSEL_SHOWN_SELECTOR(state),
        isNavShown = IS_NAV_SHOWN_SELECTOR(state),
        isDotsSlideShown = IS_DOTS_SLIDE_SHOWN_SELECTOR(state),
        isLyricExpanded = IS_LYRIC_EXPANDED_SELECTOR(state)

    return {
        isLyricExpanded,
        lyricAnnotationIndex,
        isCarouselShown,
        isNavShown,
        isDotsSlideShown,
        dotsBitNumber
    }
}

class CarouselAccess extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricAnnotationIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isLyricExpanded: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,

        // From parent.
        inLyric: PropTypes.bool
    }

    render() {

        const {
                isCarouselShown,
                inLyric,
                isLyricExpanded,
                lyricAnnotationIndex,
                isNavShown,
                isDotsSlideShown,
                dotsBitNumber
            } = this.props,

            showIfAccessOn = Boolean(
                /**
                 * Must have at least one selected dot, and no selected
                 * annotation.
                 */
                dotsBitNumber &&
                !lyricAnnotationIndex &&

                // Don't show in carousel if carousel is not shown.
                (inLyric || isCarouselShown) && (
                    (
                        // Must not show nav or have dots section open...
                        !isNavShown &&
                        !isDotsSlideShown
                    ) || (
                        // ... or else have lyric expanded.
                        isLyricExpanded
                    )
                )
            )

        return (
            <AccessLetters
                {...{
                    accessIconsName: inLyric ? 'lyricAnnotation' : 'carousel',
                    ...inLyric && { className: 'top__lyricChild' },
                    showIfAccessOn,
                    accessKeys: [
                        ARROW_LEFT,
                        ARROW_RIGHT
                    ]
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(CarouselAccess)
