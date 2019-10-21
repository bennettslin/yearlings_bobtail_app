import audioPause from 'assets/svgs/app/audio/audioPause'
import audioPlay from 'assets/svgs/app/audio/audioPlay'

const AUDIO_PLAY_MAP = {
    [true]: audioPause,
    [false]: audioPlay
}

const getIcon = ({ buttonIdentifier: isPlaying }) => {
    return AUDIO_PLAY_MAP[isPlaying]
}

export default getIcon
