import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../components/DidMountHoc'
import { mapIsPlaying } from '../../redux/audio/selector'
import { mapIsLyricLogue } from '../../redux/lyric/selector'

const PlayingWrapper = ({ didMount, children }) => {
    const
        isPlaying = useSelector(mapIsPlaying),
        isLyricLogue = useSelector(mapIsLyricLogue)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'PlayingWrapper',
                        isLyricLogue ?
                            'PlW__logue' :
                            'PlW__song',
                        isPlaying ?
                            'PlW__isPlaying' :
                            'PlW__isPaused',
                        'abF'
                    )
                }
            }}
        >
            {children}
        </div>
    )
}

PlayingWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired
}

export default memo(getDidMountHoc(PlayingWrapper))
