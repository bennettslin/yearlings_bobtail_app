import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import PlayerTimeContext from '../../contexts/PlayerTime'
import AudioManager from '../../managers/Audio'
import ListenContainer from '../Listen'
import FocusContainer from '../Focus'
import StylesheetContainer from '../Stylesheet'

const AppContainer = ({ Page }) => {
    const [playerTime, setPlayerTime] = useState(0)

    return (
        <PlayerTimeContext.Provider
            {...{
                value: {
                    playerTime,
                    setPlayerTime
                }
            }}
        >
            <Page>
                <AudioManager />
                <ListenContainer />
                <FocusContainer />
                <StylesheetContainer />
            </Page>
        </PlayerTimeContext.Provider>
    )
}

AppContainer.propTypes = {
    Page: PropTypes.func.isRequired
}

export default memo(AppContainer)
