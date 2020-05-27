import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { PARENT_ACCESS_PREFIX } from '../../constants/prefixes'
import {
    IS_ACCESS_ON_SELECTOR,
    ACCESSED_KEY_SELECTOR
} from '../../redux/access/selectors'
import { IS_PLAYING_SELECTOR } from '../../redux/audio/selectors'
import { IS_LYRIC_LOGUE_SELECTOR } from '../../redux/lyric/selectors'

const PlayingWrapper = ({ children }) => {
    const
        isAccessOn = useSelector(IS_ACCESS_ON_SELECTOR),
        accessedKey = useSelector(ACCESSED_KEY_SELECTOR),
        isPlaying = useSelector(IS_PLAYING_SELECTOR),
        isLyricLogue = useSelector(IS_LYRIC_LOGUE_SELECTOR)

    return (
        <div
            {...{
                className: cx(
                    'PlayingWrapper',

                    isLyricLogue ?
                        'PlW__logue' :
                        'PlW__song',
                    isPlaying ?
                        'PlW__isPlaying' :
                        'PlW__isPaused',

                    isAccessOn ?
                        'PlW__accessOn' :
                        'PlW__accessOff',

                    accessedKey &&
                        `${PARENT_ACCESS_PREFIX}${accessedKey}`
                )
            }}
        >
            {children}
        </div>
    )
}

PlayingWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default PlayingWrapper
