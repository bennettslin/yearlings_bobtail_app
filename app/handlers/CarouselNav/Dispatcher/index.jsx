import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from '../../../redux/scrollCarousel/action'
import { updateToggleStore } from '../../../redux/toggle/action'

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

const mapStateToProps = state => {
    const {
        dotsStore: { dotsBitNumber },
        mountStore: { canCarouselMount },
        accessStore: { accessedAnnotationIndex },
        selectedStore: {
            selectedAnnotationIndex,
            isSelectedLogue
        },
        toggleStore: {
            isDotsSlideShown,
            isCarouselShown,
            isNavShown
        }
    } = state

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

export default connect(
    mapStateToProps,
    {
        updateScrollCarouselStore,
        updateToggleStore
    }
)(CarouselNavDispatcher)
