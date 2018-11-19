// Button to toggle between left and right columns.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../../Button'

import { LYRIC_SCROLL_TOGGLE_KEY } from 'constants/access'
import { LYRIC_SCROLL_BUTTON_KEY } from 'constants/buttons'

const lyricScrollTogglePropTypes = {
    // From parent.
    handleLyricAutoScroll: PropTypes.func.isRequired
},

LyricToggleScroll = ({
    handleLyricAutoScroll

}) => (
    <div className={cx(
        'LyricToggleScroll',
        'LyricToggle',
        'LyricToggle__inLyric',
        'length__buttonLarge'
    )}>
        <Button
            isLargeSize
            {...{
                buttonName: LYRIC_SCROLL_BUTTON_KEY,
                buttonIdentifier: 'auto',
                accessKey: LYRIC_SCROLL_TOGGLE_KEY,
                handleButtonClick: handleLyricAutoScroll
            }}
        />
    </div>
)

LyricToggleScroll.propTypes = lyricScrollTogglePropTypes

export default LyricToggleScroll
