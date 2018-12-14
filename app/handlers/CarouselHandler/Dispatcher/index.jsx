import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollCarouselStore } from 'flux/scrollCarousel/action'
import { updateToggleStore } from 'flux/toggle/action'

class CarouselDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPhone: PropTypes.bool.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,
        isHiddenCarouselNav: PropTypes.bool.isRequired,
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
            this.props.isHiddenCarouselNav
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
    responsiveStore: { isHiddenCarouselNav },
    accessStore: { accessedAnnotationIndex },
    songStore: {
        selectedAnnotationIndex,
        isSelectedLogue
    },
    toggleStore: { isCarouselShown }
}) => ({
    isPhone,
    dotsBitNumber,
    isHiddenCarouselNav,
    accessedAnnotationIndex,
    selectedAnnotationIndex,
    isSelectedLogue,
    isCarouselShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollCarouselStore,
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(CarouselDispatcher)
