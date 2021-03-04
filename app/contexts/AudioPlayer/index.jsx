import { createContext } from 'react'

const AudioPlayerContext = createContext({
    audioTime: 0,
    setAudioTime() {},
    callAudioManager() {},
})

export default AudioPlayerContext
