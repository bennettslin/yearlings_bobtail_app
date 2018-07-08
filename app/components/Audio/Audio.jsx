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
    sliderDidRender: PropTypes.func.isRequired,
    audioBannerHandlers: PropTypes.object.isRequired,
    audioButtonsHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
},

Audio = ({

    /* eslint-disable no-unused-vars */
    dispatch,
    /* eslint-disable no-unused-vars */

    isTwoRowMenu,

    sliderDidRender,
    audioBannerHandlers,
    audioButtonsHandlers,
    titleToggleHandlers

}) => {

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
                sliderDidRender={sliderDidRender}
            />
            <AudioButtons {...audioButtonsHandlers} />
        </div>
    )
}

Audio.propTypes = audioPropTypes

export default connect(mapStateToProps)(Audio)
