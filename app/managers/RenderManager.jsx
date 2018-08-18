import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setIsSongChangeRenderable } from 'flux/actions/renderable'
import { updateRenderedStore } from 'flux/actions/rendered'
import { updateResponsiveStore } from 'flux/actions/responsive'

import { getSceneIndexForVerseIndex } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'
import { getShowOneOfTwoLyricColumns } from 'helpers/responsiveHelper'

class RenderManager extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        setIsSongChangeRenderable: PropTypes.func.isRequired,
        updateRenderedStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    state = {
        songChangeTimeoutId: ''
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        }) || !getPropsAreShallowEqual({
            props: this.state,
            nextProps: nextState
        })
    }

    componentDidUpdate(prevProps) {

        if (this.props.appMounted && !prevProps.appMounted) {
            this._prepareForSongChangeRender()
        }

        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this._prepareForSongChangeUnrender()
        }
    }

    _prepareForSongChangeRender = (props = this.props) => {

        const {
            selectedSongIndex = this.props.selectedSongIndex,
            selectedAnnotationIndex = this.props.selectedAnnotationIndex,
            selectedVerseIndex = this.props.selectedVerseIndex
        } = props

        this.props.setIsSongChangeRenderable(true)

        this.props.updateRenderedStore({
            renderedSongIndex: selectedSongIndex,
            renderedAnnotationIndex: selectedAnnotationIndex,
            renderedVerseIndex: selectedVerseIndex,
            renderedSceneIndex: getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        })

        /**
         * Determine doublespeaker columns only when lyrics are ready to
         * render.
         */
        this.props.updateResponsiveStore({
            showOneOfTwoLyricColumns: getShowOneOfTwoLyricColumns(
                selectedSongIndex,
                this.props.deviceIndex
            )
        })
    }

    _prepareForSongChangeUnrender() {

        this.props.setIsSongChangeRenderable(false)

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

    render() {
        return null
    }
}

const mapStateToProps = ({
    appMounted,
    deviceStore: { deviceIndex },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex,
        selectedAnnotationIndex
    }
}) => ({
    appMounted,
    deviceIndex,
    selectedAnnotationIndex,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setIsSongChangeRenderable,
        updateRenderedStore,
        updateResponsiveStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderManager)
