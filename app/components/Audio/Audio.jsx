// Section for user to select and play songs.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AudioBanner from './AudioBanner'
import AudioButtons from './AudioButtons'
import TitleToggle from '../Title/TitleToggle'

const mapStateToProps = ({
    isTwoRowMenu
}) => ({
    isTwoRowMenu
})

const audioPropTypes = {
    // Through Redux.
    isTwoRowMenu: PropTypes.bool.isRequired,

    // From parent.
    audioBannerHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired,

    canSliderRender: PropTypes.bool.isRequired
},

Audio = ({
    isTwoRowMenu,

    audioBannerHandlers,
    titleToggleHandlers,

    canSliderRender,

...other }) => {

    return (
        <div
            className={cx(
                'Audio',
                'flexAlignContainer'
            )}
        >
            {isTwoRowMenu && (
                <TitleToggle {...titleToggleHandlers}
                    isAudioChild
                />
            )}

            <AudioBanner {...audioBannerHandlers}
                isAudioChild
                canSliderRender={canSliderRender}
            />
            <AudioButtons {...other} />
        </div>
    )
}

Audio.propTypes = audioPropTypes

export default connect(mapStateToProps)(Audio)
