import { createContext } from 'react'

const PlayerTimeContext = createContext({
    playerTime: 0,
    setPlayerTime() {},
})

export default PlayerTimeContext
