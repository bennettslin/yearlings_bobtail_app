import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSelectedStore } from 'flux/actions/storage'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const LISTEN_INTERVAL = 1000

class TimeManager extends Component {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        updateSelectedStore: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {

            // Unique identifier for clearing setInterval.
            intervalId: ''
        }

        this._updateListen = this._updateListen.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate(prevProps) {
        const {
                isPlaying,
                // selectedSongIndex,
                // selectedVerseIndex
            } = this.props,
            {
                isPlaying: wasPlaying,
                // selectedSongIndex: prevSongIndex,
                // selectedVerseIndex: prevVerseIndex
            } = prevProps

        // User toggled playing on.
        if (isPlaying && !wasPlaying) {
            this._handlePlay()

        // User toggled playing off.
        } else if (!isPlaying && wasPlaying) {
            this._handlePause()

        // While playing...
        } else if (isPlaying && wasPlaying) {
            // Song was updated.

            // Verse was updated.
        }
    }

    _handlePause() {
        console.error('handle pause')
        clearInterval(this.state.intervalId)

        this.setState({
            intervalId: ''
        })
    }

    _handlePlay() {
        console.error('handle play');
        clearInterval(this.state.intervalId)

        const intervalId = setInterval(
            this._updateListen,
            LISTEN_INTERVAL
        )
        this.setState({
            intervalId
        })
    }

    _updateListen(e) {
        console.error('update listen', e)
    }

    render() {
        console.error('time manager render')
        return null
    }
}

const mapStateToProps = ({
    isPlaying,
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    isPlaying,
    selectedSongIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSelectedStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(TimeManager)
