// Button to toggle between left and right columns.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { connect } from 'react-redux'
import Button from '../Button/Button'
import { LYRIC_SCROLL_TOGGLE_KEY } from '../../constants/access'

const mapStateToProps = ({
    isManualScroll
}) => ({
    isManualScroll
})

const lyricScrollTogglePropTypes = {
    // Through Redux.
    isManualScroll: PropTypes.bool.isRequired,

    // From parent.
    handleLyricManualScroll: PropTypes.func.isRequired
},

LyricToggleScroll = ({

    isManualScroll,
    handleLyricManualScroll

}) => {

    return isManualScroll && (
        <div className={cx(
            'LyricToggleScroll',
            'LyricToggle',
            'length__buttonLarge'
        )}>
            <Button
                isLargeSize
                buttonName="lyricScroll"
                temporaryText="auto"
                accessKey={LYRIC_SCROLL_TOGGLE_KEY}
                handleButtonClick={handleLyricManualScroll}
            />
        </div>
    )
}

LyricToggleScroll.propTypes = lyricScrollTogglePropTypes

export default connect(mapStateToProps)(LyricToggleScroll)
