import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../components/DidMountHoc'
import AlbumPageElementContext from '../../contexts/AlbumPageElement'
import AudioPlayerContext from '../../contexts/AudioPlayer'
import AudioContainer from '../Audio'
import ListenerContainer from '../Listener'
import RootContainer from '../Root'
import StylesheetContainer from '../Stylesheet'
import { setIsAlbumSession } from '../../utils/browser'

const AlbumContainer = ({ didMount, children }) => {
    const
        audioContainer = useRef(),
        [selectedPlayerTime, setSelectedPlayerTime] = useState(0)

    const callPlayer = props => {
        audioContainer.current.callPlayer(props)
    }

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
            <AudioPlayerContext.Provider
                {...{
                    value: {
                        selectedPlayerTime,
                        setSelectedPlayerTime,
                        callPlayer,
                    },
                }}
            >
                <ListenerContainer />
                <AudioContainer {...{ ref: audioContainer }}>
                    <RootContainer />
                </AudioContainer>
                <StylesheetContainer />
            </AudioPlayerContext.Provider>
        </AlbumPageElementContext.Provider>
    )
}

AlbumContainer.propTypes = {
    children: PropTypes.node.isRequired,
    didMount: PropTypes.bool.isRequired,
}

// Eyeballed timeout duration to prevent wonky loading in local development.
export default getDidMountHoc(AlbumContainer, 100)
