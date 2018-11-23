// Button to toggle between left and right columns.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Button from '../../../Button'

import { LYRIC_COLUMN_TOGGLE_KEY } from 'constants/access'
import { LYRIC_EAR_BUTTON_KEY } from 'constants/buttons'
import { LYRIC_COLUMN_KEYS } from 'constants/lyrics'

const mapStateToProps = ({
    transientStore: { isDoublespeakerShown },
    sessionStore: { selectedLyricColumnIndex }
}) => ({
    isDoublespeakerShown,
    selectedLyricColumnIndex
})

const lyricEarTogglePropTypes = {
    // Through Redux.
        isDoublespeakerShown: PropTypes.bool.isRequired,
        selectedLyricColumnIndex: PropTypes.number.isRequired,

        // From parent.
        handleLyricColumnSelect: PropTypes.func.isRequired
    },

    LyricToggleEar = ({
        isDoublespeakerShown,
        selectedLyricColumnIndex,
        handleLyricColumnSelect

    }) => {

        return isDoublespeakerShown && (
            <div className={cx(
                'LyricToggleEar',
                'LyricToggle',
                'LyricToggle__inLyric',
                'length__buttonLarge'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: LYRIC_EAR_BUTTON_KEY,
                        buttonIdentifier:
                        LYRIC_COLUMN_KEYS[selectedLyricColumnIndex],
                        accessKey: LYRIC_COLUMN_TOGGLE_KEY,
                        handleButtonClick: handleLyricColumnSelect
                    }}
                />
            </div>
        )
    }

LyricToggleEar.propTypes = lyricEarTogglePropTypes

export default connect(mapStateToProps)(LyricToggleEar)
