import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { PARENT_ACCESS_PREFIX } from '../../constants/prefixes'
import {
    mapIsAccessOn,
    mapAccessedKey
} from '../../redux/access/selector'
import { mapIsPlaying } from '../../redux/audio/selector'
import { mapIsLyricLogue } from '../../redux/lyric/selector'

const PlayingWrapper = ({ children }) => {
    const
        isAccessOn = useSelector(mapIsAccessOn),
        accessedKey = useSelector(mapAccessedKey),
        isPlaying = useSelector(mapIsPlaying),
        isLyricLogue = useSelector(mapIsLyricLogue)

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
