import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import { REFERENCE } from '../../constants/dots'

class WikiDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isWikiSelected: PropTypes.bool.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getDispatch(this.dispatchWiki)
    }

    dispatchWiki = (
        selectedWikiIndex,
        carouselAnnotationIndex
    ) => {
        const { isWikiSelected } = this.props

        // Don't register click if reference dot is deselected.
        if (!isWikiSelected) {
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
        [REFERENCE]: isWikiSelected
    }
}) => ({
    isWikiSelected
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WikiDispatcher)
