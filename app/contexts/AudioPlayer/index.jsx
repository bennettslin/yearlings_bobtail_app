import { createContext } from 'react'

const AudioPlayerContext = createContext({
    selectedPlayerTime: 0,
    setSelectedPlayerTime() {},
    callAudioManager() {},
})

export default AudioPlayerContext
