import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import { REFERENCE } from '../../../constants/dots'

class WikiDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isWikiDotSelected: PropTypes.bool.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        setDispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setDispatch({
            wiki: this.dispatchWiki
        })
    }

    dispatchWiki = (
        selectedWikiIndex,
        carouselAnnotationIndex
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

const mapStateToProps = ({
    dotsStore: {
        [REFERENCE]: isWikiDotSelected
    }
}) => ({
    isWikiDotSelected
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WikiDispatcher)
