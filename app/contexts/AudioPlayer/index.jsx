import { createContext } from 'react'

const AudioPlayerContext = createContext({
    selectedPlayerTime: 0,
    setSelectedPlayerTime() {},
    callPlayer() {},
})

export default AudioPlayerContext
