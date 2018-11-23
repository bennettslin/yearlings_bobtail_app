import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

class WikiListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        updateSessionStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this.props.updateSessionStore({
                selectedWikiIndex: 0,
                carouselAnnotationIndex: 0
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { selectedSongIndex }
}) => ({
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(WikiListener)
