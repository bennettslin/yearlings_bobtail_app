// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRenderableStore } from 'flux/renderable/action'
import { updateRenderedStore } from 'flux/rendered/action'
import { updateSceneStore } from 'flux/scene/action'

import { getSceneIndexForVerseIndex } from 'helpers/data'

class RenderedListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        updateRenderableStore: PropTypes.func.isRequired,
        updateRenderedStore: PropTypes.func.isRequired,
        updateSceneStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._prepareForSongChangeUnrender(prevProps)
        this._checkAnnotationSelect(prevProps)
        this._checkVerseSelect(prevProps)
    }

    state = {
        songChangeTimeoutId: ''
    }

    _prepareForSongChangeUnrender(prevProps) {
        const
            { selectedSongIndex } = this.props,
            { selectedSongIndex: prevSongIndex } = prevProps

        if (selectedSongIndex !== prevSongIndex) {
            this.props.updateRenderableStore({
                isSongChangeRenderable: false
            })

            // Clear previous timeout.
            clearTimeout(this.state.songChangeTimeoutId)

            /**
             * Render is synchronous, so wait a bit after selecting new song
             * before rendering the most performance intensive components. This
             * allows songs between selections to skip rendering.
             */
            const songChangeTimeoutId = setTimeout(
                this._prepareForSongChangeRender, 200
            )

            this.setState({
                songChangeTimeoutId
            })
        }
    }

    _prepareForSongChangeRender = () => {
        const {
            selectedSongIndex,
            selectedVerseIndex,
            selectedAnnotationIndex
        } = this.props

        this.props.updateRenderableStore({
            isSongChangeRenderable: true
        })

        this.props.updateRenderedStore({
            renderedSongIndex: selectedSongIndex,
            renderedVerseIndex: selectedVerseIndex,
            renderedAnnotationIndex: selectedAnnotationIndex
        })

        this.props.updateSceneStore({
            currentSceneIndex: getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        })
    }

    _checkAnnotationSelect(prevProps) {
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

    _checkVerseSelect(prevProps) {
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
                renderedVerseIndex: selectedVerseIndex
            })

            this.props.updateSceneStore({
                currentSceneIndex: getSceneIndexForVerseIndex(
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
        updateRenderableStore,
        updateRenderedStore,
        updateSceneStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderedListener)
