import React, { memo, useState } from 'react'
import PlayerTimeContext from '../../contexts/PlayerTime'
import AudioManager from '../../managers/Audio'
import ListenContainer from '../Listen'
import FocusContainer from '../Focus'
import StylesheetContainer from '../Stylesheet'
import { setIsAlbumSession } from '../../utils/browser'

const AlbumContainer = () => {
    const [playerTime, setPlayerTime] = useState(0)

    // Establish that session started from album, not pitch page.
    setIsAlbumSession()

    return (
        <PlayerTimeContext.Provider
            {...{
                value: {
                    playerTime,
                    setPlayerTime
                }
            }}
        >
            <AudioManager />
            <ListenContainer />
            <FocusContainer />
            <StylesheetContainer />
        </PlayerTimeContext.Provider>
    )
}

export default memo(AlbumContainer)
