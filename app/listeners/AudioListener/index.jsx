// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSongStore } from 'flux/song/action'

import { getTimeForVerseIndex } from 'helpers/data'

class AudioListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        updateSongStore: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        this._resetTimeUponPause(prevProps)
    }

    _resetTimeUponPause(prevProps) {
        const
            { isPlaying } = this.props,
            { isPlaying: wasPlaying } = prevProps

        // If just now paused, reset time to start of selected verse.
        if (!isPlaying && wasPlaying) {
            const {
                    selectedSongIndex,
                    selectedVerseIndex
                } = this.props,

                selectedTime = getTimeForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )

            this.props.updateSongStore({ selectedTime })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    audioStore: { isPlaying },
    sliderStore: { isSliderTouched },
    songStore: {
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    isPlaying,
    isSliderTouched,
    selectedSongIndex,
    selectedVerseIndex
})


const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSongStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(AudioListener)
