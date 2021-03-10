import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import AlbumPageElementContext from '../../contexts/AlbumPageElement'
import AudioPlayerContext from '../../contexts/AudioPlayer'
import AudioContainer from '../Audio'
import ListenerContainer from '../Listener'
import RootContainer from '../Root'
import StylesheetContainer from '../Stylesheet'
import { setIsAlbumSession } from '../../utils/browser'

const AlbumContainer = ({ children }) => {
    const
        audioContainer = useRef(),
        [audioTime, setAudioTime] = useState(0)

    const callAudioManager = props => {
        audioContainer.current.callAudioManager(props)
    }

    // Establish that session started from album, not pitch page.
    setIsAlbumSession()

    useEffect(() => {
        logServe(
            'Album container loaded.',
            {
                action: 'container',
                label: 'album',
            },
        )
    }, [])

    return (
        <AlbumPageElementContext.Provider {...{ value: children }}>
            <AudioPlayerContext.Provider
                {...{
                    value: {
                        audioTime,
                        setAudioTime,
                        callAudioManager,
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
}

export default AlbumContainer
