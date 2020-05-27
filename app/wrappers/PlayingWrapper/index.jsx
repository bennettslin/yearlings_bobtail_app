import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { PARENT_ACCESS_PREFIX } from '../../constants/prefixes'
import {
    IS_ACCESS_ON_SELECTOR,
    ACCESSED_KEY_SELECTOR
} from '../../redux/access/selectors'

const mapStateToProps = state => {
    const {
            audioStore: { isPlaying },
            lyricStore: { isLyricLogue }
        } = state,
        isAccessOn = IS_ACCESS_ON_SELECTOR(state),
        accessedKey = ACCESSED_KEY_SELECTOR(state)

    return {
        isPlaying,
        isLyricLogue,
        isAccessOn,
        accessedKey
    }
}

const PlayingWrapper = ({ children }) => {
    const {
        isLyricLogue,
        isPlaying,
        isAccessOn,
        accessedKey
    } = useSelector(mapStateToProps)

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
