import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { PARENT_ACCESS_PREFIX } from '../../constants/prefixes'

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

const mapStateToProps = ({
    audioStore: { isPlaying },
    lyricStore: { isLyricLogue },
    accessStore: {
        isAccessOn,
        accessedKey
    }
}) => ({
    isPlaying,
    isLyricLogue,
    isAccessOn,
    accessedKey
})

PlayingWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default PlayingWrapper
