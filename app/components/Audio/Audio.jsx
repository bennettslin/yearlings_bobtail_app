// Section for user to select and play songs.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AudioBanner from './AudioBanner'
import AudioButtons from './AudioButtons'
import TitleToggle from '../Title/TitleToggle'

const mapStateToProps = ({
    isTitleInAudio
}) => ({
    isTitleInAudio
})

const audioPropTypes = {
    // Through Redux.
    isTitleInAudio: PropTypes.bool.isRequired,

    // From parent.
    audioBannerHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
},

Audio = ({
    isTitleInAudio,

    audioBannerHandlers,
    titleToggleHandlers,

...other }) => {

    return (
        <div
            className={cx(
                'Audio',
                'flexAlignContainer'
            )}
        >
            {isTitleInAudio && (
                <TitleToggle {...titleToggleHandlers}
                    isAudioChild
                />
            )}

            <AudioBanner {...audioBannerHandlers}
                isAudioChild
            />
            <AudioButtons {...other} />
        </div>
    )
}

Audio.propTypes = audioPropTypes

export default connect(mapStateToProps)(Audio)
