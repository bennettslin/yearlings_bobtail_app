import audioPlay from 'assets/svgs/app/audioPlay'

const AUDIO_PLAY_MAP = {
    [true]: audioPlay,
    [false]: audioPlay
}

const getIcon = ({ buttonIdentifier: isPlaying }) => {
    return AUDIO_PLAY_MAP[isPlaying]
}

export default getIcon
