import React, { memo, useState } from 'react'
import PlayerTimeContext from '../../contexts/PlayerTime'
import AudioManager from '../../managers/Audio'
import ListenContainer from '../Listen'
import FocusContainer from '../Focus'
import StylesheetContainer from '../Stylesheet'

const AppContainer = () => {
    const [playerTime, setPlayerTime] = useState(0)

    return (
        <PlayerTimeContext.Provider {...{ value: playerTime }} >
            <AudioManager {...{ setPlayerTime }} />
            <ListenContainer />
            <FocusContainer />
            <StylesheetContainer />
        </PlayerTimeContext.Provider>
    )
}

export default memo(AppContainer)
