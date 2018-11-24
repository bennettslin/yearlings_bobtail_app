// Singleton to set timeout between selected and rendered song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateRenderableStore } from 'flux/renderable/action'
import { updateRenderedStore } from 'flux/rendered/action'

import { getSceneIndexForVerseIndex } from 'helpers/dataHelper'

class RenderListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        updateRenderableStore: PropTypes.func.isRequired,
        updateRenderedStore: PropTypes.func.isRequired
    }

    state = {
        songChangeTimeoutId: ''
    }

    componentDidUpdate(prevProps) {
        // Initialise the rendered song once app has been mounted.
        if (this.props.appMounted && !prevProps.appMounted) {
            this._prepareForSongChangeRender()
        }

        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this._prepareForSongChangeUnrender()
        }
    }

    _prepareForSongChangeUnrender() {

        this.props.updateRenderableStore({
            isSongChangeRenderable: false
        })

        // Clear previous timeout.
        clearTimeout(this.state.songChangeTimeoutId)

        /**
         * Render is synchronous, so wait a bit after selecting new song before
         * rendering the most performance intensive components. This allows
         * songs between selections to skip rendering.
         */
        const songChangeTimeoutId = setTimeout(
            this._prepareForSongChangeRender, 200
        )

        this.setState({
            songChangeTimeoutId
        })
    }

    _prepareForSongChangeRender = ({
        selectedSongIndex = this.props.selectedSongIndex,
        selectedVerseIndex = this.props.selectedVerseIndex,
        selectedAnnotationIndex = this.props.selectedAnnotationIndex
    } = {}) => {

        this.props.updateRenderableStore({
            isSongChangeRenderable: true
        })

        this.props.updateRenderedStore({
            renderedSongIndex: selectedSongIndex,
            renderedVerseIndex: selectedVerseIndex,
            renderedAnnotationIndex: selectedAnnotationIndex,
            renderedSceneIndex: getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    loadStore: { appMounted },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    appMounted,
    selectedAnnotationIndex,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateRenderableStore,
        updateRenderedStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderListener)
