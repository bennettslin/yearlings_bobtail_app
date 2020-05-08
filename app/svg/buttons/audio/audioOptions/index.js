import audioContinue from '../../../../../assets/svgs/app/audio/audioContinue'
import audioRepeat from '../../../../../assets/svgs/app/audio/audioRepeat'

const AUDIO_OPTIONS_MAP = {
    0: audioContinue,
    1: audioRepeat
}

const getIcon = ({ buttonIdentifier: audioOptionIndex }) => {
    return AUDIO_OPTIONS_MAP[audioOptionIndex]
}

export default getIcon
