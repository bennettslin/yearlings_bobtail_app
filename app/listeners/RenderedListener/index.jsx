// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderedStore } from 'flux/rendered/action'

class RenderedListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateRenderedStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleAnnotationChangeIfNeeded(prevProps)
    }

    _handleAnnotationChangeIfNeeded(prevProps) {
        const
            {
                selectedSongIndex,
                selectedAnnotationIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedAnnotationIndex: prevAnnotationIndex
            } = prevProps

        /**
         * If annotation changed within the same song, change rendered index
         * right away.
         */
        if (
            selectedSongIndex === prevSongIndex &&
            selectedAnnotationIndex !== prevAnnotationIndex
        ) {
            this.props.updateRenderedStore({
                renderedAnnotationIndex: selectedAnnotationIndex
            })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex
    }
}) => ({
    selectedSongIndex,
    selectedAnnotationIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderedStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderedListener)
