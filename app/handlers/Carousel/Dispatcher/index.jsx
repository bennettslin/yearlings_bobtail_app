import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateToggleStore } from 'flux/toggle/action'

class CarouselDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhone: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        isUnrenderableCarouselNav: PropTypes.bool.isRequired,
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
        this.props.getRefs({
            dispatchCarousel: this.dispatchCarousel
        })
    }

    dispatchCarousel = (
        // If no argument passed, then just toggle by default.
        isCarouselShown = !this.props.isCarouselShown
    ) => {
        // We shouldn't be able to toggle the carousel under these conditions.
        if (
            this.props.isPhone ||
            !this.props.dotsBitNumber ||
            this.props.isSelectedLogue ||
            this.props.isUnrenderableCarouselNav
        ) {
            return false
        }

        this.props.updateToggleStore({ isCarouselShown })

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
    deviceStore: { isPhone },
    dotsStore: { dotsBitNumber },
    responsiveStore: { isUnrenderableCarouselNav },
    accessStore: { accessedAnnotationIndex },
    selectedStore: {
        selectedAnnotationIndex,
        isSelectedLogue
    },
    toggleStore: { isCarouselShown }
}) => ({
    isPhone,
    dotsBitNumber,
    isUnrenderableCarouselNav,
    accessedAnnotationIndex,
    selectedAnnotationIndex,
    isSelectedLogue,
    isCarouselShown
})

export default connect(
    mapStateToProps,
    {
        updateScrollCarouselStore,
        updateToggleStore
    }
)(CarouselDispatcher)
