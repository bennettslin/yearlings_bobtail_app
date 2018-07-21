// Button to toggle between left and right columns.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Button from '../../Button/Button'
import { LYRIC_SCROLL_TOGGLE_KEY } from '../../../constants/access'

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
            buttonName="lyricScroll"
            temporaryText="auto"
            accessKey={LYRIC_SCROLL_TOGGLE_KEY}
            handleButtonClick={handleLyricAutoScroll}
        />
    </div>
)

LyricToggleScroll.propTypes = lyricScrollTogglePropTypes

export default LyricToggleScroll
