import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import PlayerTimeContext from '../../contexts/PlayerTime'
import AudioManager from '../../managers/Audio'
import ListenContainer from '../Listen'
import FocusContainer from '../Focus'
import StylesheetContainer from '../Stylesheet'

const AppContainer = ({ children }) => {
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
            <AudioManager />
            <ListenContainer />
            <FocusContainer>
                {children}
            </FocusContainer>
            <StylesheetContainer />
        </PlayerTimeContext.Provider>
    )
}

AppContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default memo(AppContainer)
