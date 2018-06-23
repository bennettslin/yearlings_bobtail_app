import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setShowOneOfTwoLyricColumns } from '../redux/actions/responsive'
import {
    setIsHeavyRenderReady,
    setRenderReadySongIndex,
    setRenderReadyAnnotationIndex,
    setRenderReadyVerseIndex,
    setCurrentSceneIndex
} from '../redux/actions/session'

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

        setIsHeavyRenderReady: PropTypes.func.isRequired,
        setCurrentSceneIndex: PropTypes.func.isRequired,
        setShowOneOfTwoLyricColumns: PropTypes.func.isRequired,
        setRenderReadyAnnotationIndex: PropTypes.func.isRequired,
        setRenderReadySongIndex: PropTypes.func.isRequired,
        setRenderReadyVerseIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            songChangeTimeoutId: null
        }

        this.handleRenderReady = this.handleRenderReady.bind(this)
    }

    componentDidMount() {
        this.props.getRef(this)

        this.handleRenderReady()
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedSongIndex !== prevProps.selectedSongIndex) {
            this._songIndexDidChange()
            this.props.setIsHeavyRenderReady(false)
        }
    }

    handleRenderReady(props = this.props) {
        const {
            selectedSongIndex = this.props.selectedSongIndex,
            selectedAnnotationIndex = this.props.selectedAnnotationIndex,
            selectedVerseIndex = this.props.selectedVerseIndex
        } = props

        this.props.setIsHeavyRenderReady(
            true
        )

        this.props.setRenderReadySongIndex(
            selectedSongIndex
        )

        this.props.setRenderReadyAnnotationIndex(
            selectedAnnotationIndex
        )

        this.props.setRenderReadyVerseIndex(
            selectedVerseIndex
        )

        if (this.props.appMounted) {

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

        this.props.setCurrentSceneIndex(
            getSceneIndexForVerseIndex(
                selectedSongIndex,
                selectedVerseIndex
            )
        )
    }

    _songIndexDidChange() {

        // Clear previous timeout.
        clearTimeout(this.state.songChangeTimeoutId)

        /**
         * Render is synchronous, so wait a bit after selecting new song before
         * rendering the most performance intensive components.
         */
        const songChangeTimeoutId = setTimeout(
            this.handleRenderReady, 200
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
        setIsHeavyRenderReady,
        setCurrentSceneIndex,
        setShowOneOfTwoLyricColumns,
        setRenderReadyAnnotationIndex,
        setRenderReadySongIndex,
        setRenderReadyVerseIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(RenderManager)
