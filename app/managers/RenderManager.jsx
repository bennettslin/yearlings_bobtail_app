import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setShowOneOfTwoLyricColumns } from '../redux/actions/responsive'
import {
    setIsSongChangeRenderable,
    setRenderableSongIndex,
    setRenderableAnnotationIndex,
    setRenderableVerseIndex
} from '../redux/actions/render'

import { getPropsAreShallowEqual } from '../helpers/generalHelper'
import { getShowOneOfTwoLyricColumns } from '../helpers/responsiveHelper'

class RenderManager extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        setIsSongChangeRenderable: PropTypes.func.isRequired,
        setShowOneOfTwoLyricColumns: PropTypes.func.isRequired,
        setRenderableAnnotationIndex: PropTypes.func.isRequired,
        setRenderableSongIndex: PropTypes.func.isRequired,
        setRenderableVerseIndex: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired,
        setRenderableScene: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            songChangeTimeoutId: ''
        }

        this._prepareForSongChangeRender =
            this._prepareForSongChangeRender.bind(this)
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

    _prepareForSongChangeRender(props = this.props) {

        const {
            selectedSongIndex = this.props.selectedSongIndex,
            selectedAnnotationIndex = this.props.selectedAnnotationIndex,
            selectedVerseIndex = this.props.selectedVerseIndex
        } = props

        this.props.setIsSongChangeRenderable(true)

        this.props.setRenderableSongIndex(
            selectedSongIndex
        )

        this.props.setRenderableAnnotationIndex(
            selectedAnnotationIndex
        )

        this.props.setRenderableVerseIndex(
            selectedVerseIndex
        )

        props.setRenderableScene({
            selectedSongIndex,
            selectedVerseIndex
        })

        /**
         * Determine doublespeaker columns only when lyrics are ready to
         * render.
         */
        this.props.setShowOneOfTwoLyricColumns(
            getShowOneOfTwoLyricColumns(
                selectedSongIndex,
                this.props.deviceIndex
            )
        )
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
    deviceStore,
    selectedAnnotationIndex,
    selectedSongIndex,
    selectedVerseIndex
}) => ({
    appMounted,
    deviceIndex: deviceStore.deviceIndex,
    selectedAnnotationIndex,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setIsSongChangeRenderable,
        setShowOneOfTwoLyricColumns,
        setRenderableAnnotationIndex,
        setRenderableSongIndex,
        setRenderableVerseIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderManager)
