import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { ACCESSED_ANNOTATION_INDEX_SELECTOR } from '../../../redux/access/selectors'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../../redux/dots/selectors'
import { CAN_CAROUSEL_MOUNT_SELECTOR } from '../../../redux/mount/selectors'
import {
    SELECTED_ANNOTATION_INDEX_SELECTOR,
    IS_SELECTED_LOGUE_SELECTOR
} from '../../../redux/selected/selectors'
import {
    IS_CAROUSEL_SHOWN_SELECTOR,
    IS_NAV_SHOWN_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR
} from '../../../redux/toggle/selectors'

const mapStateToProps = state => {
    const
        accessedAnnotationIndex = ACCESSED_ANNOTATION_INDEX_SELECTOR(state),
        dotsBitNumber = DOTS_BIT_NUMBER_SELECTOR(state),
        canCarouselMount = CAN_CAROUSEL_MOUNT_SELECTOR(state),
        selectedAnnotationIndex = SELECTED_ANNOTATION_INDEX_SELECTOR(state),
        isSelectedLogue = IS_SELECTED_LOGUE_SELECTOR(state),
        isCarouselShown = IS_CAROUSEL_SHOWN_SELECTOR(state),
        isNavShown = IS_NAV_SHOWN_SELECTOR(state),
        isDotsSlideShown = IS_DOTS_SLIDE_SHOWN_SELECTOR(state)
    return {
        dotsBitNumber,
        canCarouselMount,
        accessedAnnotationIndex,
        selectedAnnotationIndex,
        isSelectedLogue,
        isDotsSlideShown,
        isCarouselShown,
        isNavShown
    }
}

class CarouselNavDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        dotsBitNumber: PropTypes.number.isRequired,
        canCarouselMount: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        isNavShown: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchCarouselNav: this.dispatchCarouselNav,
            dispatchHideNav: this.dispatchHideNav
        })
    }

    dispatchHideNav = () => {
        this.props.updateToggleStore({ isNavShown: false })
    }

    dispatchCarouselNav = (
        // If no argument passed, then just toggle by default.
        isCarouselShown = !this.props.isCarouselShown
    ) => {
        const {
            dotsBitNumber,
            isSelectedLogue,
            canCarouselMount,
            isDotsSlideShown,
            isNavShown,
            selectedAnnotationIndex
        } = this.props

        // We shouldn't be able to toggle the carousel under these conditions.
        if (
            isSelectedLogue ||
            !canCarouselMount
        ) {
            return false
        }

        /**
         * If this would otherwise show the carousel, but there are no dots
         * selected, don't show the carousel.
         */
        if (isCarouselShown && !dotsBitNumber) {
            isCarouselShown = false
        }

        this.props.updateToggleStore({
            // Do not toggle carousel if no dots are selected.
            ...Boolean(dotsBitNumber) && { isCarouselShown },

            isNavShown:
            dotsBitNumber ?
                // If dots are selected, toggle nav under these conditions.
                !isCarouselShown &&
                !isDotsSlideShown &&
                !selectedAnnotationIndex :

                // If no dots are selected, just toggle nav.
                !isNavShown
        })

        // If showing carousel, scroll to selected or accessed annotation.
        if (isCarouselShown) {
            const {
                    selectedAnnotationIndex,
                    accessedAnnotationIndex
                } = this.props,

                annotationIndex =
                    selectedAnnotationIndex || accessedAnnotationIndex

            this.props.updateScrollCarouselStore({
                queuedScrollCarouselLog: 'Nav toggled carousel annotation.',
                queuedScrollCarouselIndex: annotationIndex
            })
        }

        return true
    }

    render() {
        return null
    }
}

export default connect(
    mapStateToProps,
    {
        updateScrollCarouselStore,
        updateToggleStore
    }
)(CarouselNavDispatcher)
