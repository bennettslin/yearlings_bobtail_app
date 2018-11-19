// Section for user to select and play songs.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AudioBanner from './Banner'
import AudioButtons from './Buttons'
import TitleToggle from 'components/Title/Toggle'

const mapStateToProps = ({
    responsiveStore: { isTwoRowMenu }
}) => ({
    isTwoRowMenu
})

const audioPropTypes = {
    // Through Redux.
    isTwoRowMenu: PropTypes.bool.isRequired,

    // From parent.
    verseDidRender: PropTypes.func.isRequired,
    audioBannerHandlers: PropTypes.object.isRequired,
    audioButtonsHandlers: PropTypes.object.isRequired,
    titleToggleHandlers: PropTypes.object.isRequired
},

Audio = ({

    /* eslint-disable no-unused-vars */
    dispatch,
    /* eslint-enable no-unused-vars */

    isTwoRowMenu,

    verseDidRender,
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
                verseDidRender={verseDidRender}
            />
            <AudioButtons {...audioButtonsHandlers} />
        </div>
    )
}

Audio.propTypes = audioPropTypes

export default connect(mapStateToProps)(Audio)
