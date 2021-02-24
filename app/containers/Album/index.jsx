import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../components/DidMountHoc'
import AlbumPageElementContext from '../../contexts/AlbumPageElement'
import PlayerTimeContext from '../../contexts/PlayerTime'
import AudioManager from '../../managers/Audio'
import ListenContainer from '../Listen'
import RootContainer from '../Root'
import StylesheetContainer from '../Stylesheet'
import { setIsAlbumSession } from '../../utils/browser'

const AlbumContainer = ({ didMount, children }) => {
    const [playerTime, setPlayerTime] = useState(0)

    // Establish that session started from album, not pitch page.
    setIsAlbumSession()

    useEffect(() => {
        logServe(
            'Album container loaded.',
            {
                action: 'container',
                label: 'album',
            }
        )
    }, [])

    return didMount && (
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
    didMount: PropTypes.bool.isRequired,
}

// Eyeballed timeout duration to prevent wonky loading in local development.
export default getDidMountHoc(AlbumContainer, 100)
