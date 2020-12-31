import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import AlbumPageElementContext from '../../contexts/AlbumPageElement'
import PlayerTimeContext from '../../contexts/PlayerTime'
import AudioManager from '../../managers/Audio'
import ListenContainer from '../Listen'
import RootContainer from '../Root'
import StylesheetContainer from '../Stylesheet'
import { setIsAlbumSession } from '../../utils/browser'

const AlbumContainer = ({ children }) => {
    const [playerTime, setPlayerTime] = useState(0)

    // Establish that session started from album, not pitch page.
    setIsAlbumSession()

    return (
        <AlbumPageElementContext.Provider {...{ value: children }}>
            <PlayerTimeContext.Provider
                {...{
                    value: {
                        playerTime,
                        setPlayerTime,
                    },
                }}
            >
                <AudioManager />
                <ListenContainer />
                <RootContainer />
                <StylesheetContainer />
            </PlayerTimeContext.Provider>
        </AlbumPageElementContext.Provider>
    )
}

AlbumContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default memo(AlbumContainer)
