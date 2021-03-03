import { createContext } from 'react'

const AudioPlayerContext = createContext({
    currentPlayerTime: 0,
    setCurrentPlayerTime() {},
    callAudioManager() {},
})

export default AudioPlayerContext
