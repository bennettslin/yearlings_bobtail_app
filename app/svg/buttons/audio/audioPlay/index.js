import audioPause from '../../../../../assets/svgs/app/audio/audioPause'
import audioPlay from '../../../../../assets/svgs/app/audio/audioPlay'

const AUDIO_PLAY_MAP = {
    [true]: audioPause,
    [false]: audioPlay
}

export default ({ buttonIdentifier: isPlaying }) => {
    return AUDIO_PLAY_MAP[isPlaying]
}
