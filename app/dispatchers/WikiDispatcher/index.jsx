import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSessionStore } from '../../redux/session/action'
import { REFERENCE } from '../../constants/dots'

class WikiDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isWikiDotSelected: PropTypes.bool.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchWiki: this.dispatchWiki
        })
    }

    dispatchWiki = (
        selectedWikiIndex,
        carouselAnnotationIndex = 0
    ) => {
        const { isWikiDotSelected } = this.props

        // Don't register click if reference dot is deselected.
        if (!isWikiDotSelected) {
            return false
        }

        this.props.updateSessionStore({
            selectedWikiIndex,
            carouselAnnotationIndex
        })
        return true
    }

    render() {
        return null
    }
}

const mapStateToProps = state => {
    const {
        dotsStore: {
            [REFERENCE]: isWikiDotSelected
        }
    } = state

    return {
        isWikiDotSelected
    }
}

export default connect(
    mapStateToProps,
    { updateSessionStore }
)(WikiDispatcher)