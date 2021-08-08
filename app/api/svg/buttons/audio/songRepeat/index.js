import audioContinue from '../../../../../assets/svgs/app/audio/audioContinue'
import audioRepeat from '../../../../../assets/svgs/app/audio/audioRepeat'

const SONG_REPEAT_MAP = {
    [false]: audioContinue,
    [true]: audioRepeat,
}

export default ({ buttonOption: isSongRepeatOn }) => {
    return SONG_REPEAT_MAP[isSongRepeatOn]
}
