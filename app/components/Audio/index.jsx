// Section for user to select and play songs.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import AudioBanner from './Banner'
import AudioButtons from './Buttons'
import AboutToggle from '../About/Toggle'

const mapStateToProps = ({
    responsiveStore: { isTwoRowMenu }
}) => ({
    isTwoRowMenu
})

const audioPropTypes = {
    // Through Redux.
        isTwoRowMenu: PropTypes.bool.isRequired
    },

    Audio = ({ isTwoRowMenu }) => {

        return (
            <div
                className={cx(
                    'Audio',
                    'flexAlignContainer'
                )}
            >
                {isTwoRowMenu && (
                    <AboutToggle isAudioChild />
                )}

                <AudioBanner />
                <AudioButtons />
            </div>
        )
    }

Audio.propTypes = audioPropTypes

export default connect(mapStateToProps)(Audio)
