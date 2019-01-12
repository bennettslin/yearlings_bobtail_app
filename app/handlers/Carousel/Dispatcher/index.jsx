import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateToggleStore } from 'flux/toggle/action'

class CarouselDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhoneWidth: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        isUnrenderableCarouselNav: PropTypes.bool.isRequired,
        isDotsSlideShown: PropTypes.bool.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        isSelectedLogue: PropTypes.bool.isRequired,
        updateScrollCarouselStore: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({ dispatchCarouselNav: this.dispatchCarouselNav })
    }

    dispatchCarouselNav = (
        // If no argument passed, then just toggle by default.
        isCarouselShown = !this.props.isCarouselShown
    ) => {
        const {
            isPhoneWidth,
            dotsBitNumber,
            isSelectedLogue,
            isUnrenderableCarouselNav,
            isDotsSlideShown,
            selectedAnnotationIndex
        } = this.props

        // We shouldn't be able to toggle the carousel under these conditions.
        if (
            isPhoneWidth ||
            !dotsBitNumber ||
            isSelectedLogue ||
            isUnrenderableCarouselNav
        ) {
            return false
        }

        this.props.updateToggleStore({
            isCarouselShown,
            isNavShown:
                !isCarouselShown &&

                /**
                 * If dots slide is expanded or annotation is selected, don't
                 * show nav.
                 */
                !isDotsSlideShown &&
                !selectedAnnotationIndex
        })

        // If showing carousel, scroll to selected or accessed annotation.
        if (isCarouselShown) {
            const {
                    selectedAnnotationIndex,
                    accessedAnnotationIndex
                } = this.props,

                annotationIndex =
                    selectedAnnotationIndex ||
                    accessedAnnotationIndex

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

const mapStateToProps = ({
    viewportStore: { isPhoneWidth },
    dotsStore: { dotsBitNumber },
    responsiveStore: { isUnrenderableCarouselNav },
    accessStore: { accessedAnnotationIndex },
    selectedStore: {
        selectedAnnotationIndex,
        isSelectedLogue
    },
    toggleStore: {
        isDotsSlideShown,
        isCarouselShown
    }
}) => ({
    isPhoneWidth,
    dotsBitNumber,
    isUnrenderableCarouselNav,
    accessedAnnotationIndex,
    selectedAnnotationIndex,
    isSelectedLogue,
    isDotsSlideShown,
    isCarouselShown
})

export default connect(
    mapStateToProps,
    {
        updateScrollCarouselStore,
        updateToggleStore
    }
)(CarouselDispatcher)
