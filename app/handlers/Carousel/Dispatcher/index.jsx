import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateToggleStore } from 'flux/toggle/action'

class CarouselDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        dotsBitNumber: PropTypes.number.isRequired,
        canCarouselMount: PropTypes.bool.isRequired,
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
            dotsBitNumber,
            isSelectedLogue,
            canCarouselMount,
            isDotsSlideShown,
            selectedAnnotationIndex
        } = this.props

        // We shouldn't be able to toggle the carousel under these conditions.
        if (
            !dotsBitNumber ||
            isSelectedLogue ||
            !canCarouselMount
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
    dotsStore: { dotsBitNumber },
    mountStore: { canCarouselMount },
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
    dotsBitNumber,
    canCarouselMount,
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
