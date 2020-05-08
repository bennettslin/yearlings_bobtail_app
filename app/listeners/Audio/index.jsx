// Singleton to listen for song change.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateSelectedStore } from '../../redux/selected/action'

import { getStartTimeForVerseIndex } from '../../album/api/time'

class AudioListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isPlaying: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        updateSelectedStore: PropTypes.func.isRequired
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

                selectedTime = getStartTimeForVerseIndex(
                    selectedSongIndex,
                    selectedVerseIndex
                )

            this.props.updateSelectedStore({ selectedTime })
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    audioStore: { isPlaying },
    sliderStore: { isSliderTouched },
    selectedStore: {
        selectedSongIndex,
        selectedVerseIndex
    }
}) => ({
    isPlaying,
    isSliderTouched,
    selectedSongIndex,
    selectedVerseIndex
})

export default connect(
    mapStateToProps,
    { updateSelectedStore }
)(AudioListener)
