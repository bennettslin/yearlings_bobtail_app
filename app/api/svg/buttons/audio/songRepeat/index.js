import audioContinue from '../../../../../../assets/svgs/app/audio/audioContinue'
import audioRepeat from '../../../../../../assets/svgs/app/audio/audioRepeat'

const SONG_REPEAT_MAP = {
    0: audioContinue,
    1: audioRepeat,
}

export default ({ buttonIdentifier: isSongRepeatOn }) => {
    return SONG_REPEAT_MAP[isSongRepeatOn]
}
