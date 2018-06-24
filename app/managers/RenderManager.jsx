import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setShowOneOfTwoLyricColumns } from '../redux/actions/responsive'
import {
    setIsRenderable,
    setRenderableSongIndex,
    setRenderableAnnotationIndex,
    setRenderableVerseIndex
} from '../redux/actions/render'

import { setCurrentSceneIndex } from '../redux/actions/session'

import { getSceneIndexForVerseIndex } from '../helpers/dataHelper'
import { getShowOneOfTwoLyricColumns } from '../helpers/responsiveHelper'

class RenderManager extends Component {

    static propTypes = {
        // Through Redux.
        appMounted: PropTypes.bool.isRequired,
        deviceIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        setIsRenderable: PropTypes.func.isRequired,
        setCurrentSceneIndex: PropTypes.func.isRequired,
        setShowOneOfTwoLyricColumns: PropTypes.func.isRequired,
        setRenderableAnnotationIndex: PropTypes.func.isRequired,
        setRenderableSongIndex: PropTypes.func.isRequired,
        setRenderableVerseIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            songChangeTimeoutId: ''
        }

        this._prepareForRender = this._prepareForRender.bind(this)
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    componentDidUpdate(prevProps) {

        if (this.props.appMounted && !prevProps.appMounted) {
            this._prepareForRender()
        }

        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this._prepareForUnrender()
        }
    }

    _prepareForRender(props = this.props) {

        const {
            selectedSongIndex = this.props.selectedSongIndex,
            selectedAnnotationIndex = this.props.selectedAnnotationIndex,
            selectedVerseIndex = this.props.selectedVerseIndex
        } = props

        this.props.setIsRenderable(
            true
        )

        this.props.setRenderableSongIndex(
            selectedSongIndex
        )

        this.props.setRenderableAnnotationIndex(
            selectedAnnotationIndex
        )

        this.props.setRenderableVerseIndex(
            selectedVerseIndex
        )

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

        this.props.setCurrentSceneIndex(
            getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        )
    }

    _prepareForUnrender() {

        this.props.setIsRenderable(false)

        // Clear previous timeout.
        clearTimeout(this.state.songChangeTimeoutId)

        /**
         * Render is synchronous, so wait a bit after selecting new song before
         * rendering the most performance intensive components.
         */
        const songChangeTimeoutId = setTimeout(
            this._prepareForRender, 200
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
    deviceIndex,
    selectedAnnotationIndex,
    selectedSongIndex,
    selectedVerseIndex
}) => ({
    appMounted,
    deviceIndex,
    selectedAnnotationIndex,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setIsRenderable,
        setCurrentSceneIndex,
        setShowOneOfTwoLyricColumns,
        setRenderableAnnotationIndex,
        setRenderableSongIndex,
        setRenderableVerseIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderManager)
