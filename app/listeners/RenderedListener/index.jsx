// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderedStore } from 'flux/rendered/action'

import { getSceneIndexForVerseIndex } from 'helpers/dataHelper'

class RenderedListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateRenderedStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._handleAnnotationSelect(prevProps)
        this._handleVerseSelect(prevProps)
    }

    _handleAnnotationSelect(prevProps) {
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

    _handleVerseSelect(prevProps) {
        const
            {
                selectedSongIndex,
                selectedVerseIndex
            } = this.props,
            {
                selectedSongIndex: prevSongIndex,
                selectedVerseIndex: prevVerseIndex
            } = prevProps

        /**
         * If verse changed within the same song, change index to be rendered
         * right away.
         */
        if (
            selectedSongIndex === prevSongIndex &&
            selectedVerseIndex !== prevVerseIndex
        ) {
            /**
             * If selecting or changing verse in same song, change index to be
             * rendered right away.
             */
            this.props.updateRenderedStore({
                renderedVerseIndex: selectedVerseIndex,
                renderedSceneIndex: getSceneIndexForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )
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
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    selectedSongIndex,
    selectedVerseIndex,
    selectedAnnotationIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderedStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderedListener)
