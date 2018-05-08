// Button to toggle between left and right columns.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { connect } from 'react-redux'
import Button from '../Button/Button'
import { LYRIC_COLUMN_TOGGLE_KEY } from '../../constants/access'
import { LYRIC_COLUMN_KEYS } from '../../constants/lyrics'

const mapStateToProps = ({

}) => ({

})

const lyricEarTogglePropTypes = {
    // Through Redux.
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired,

    // From parent.
    handleLyricColumnSelect: PropTypes.func.isRequired
},

LyricToggleScroll = ({

    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex,
    handleLyricColumnSelect

}) => {

    return showOneOfTwoLyricColumns && (
        <div className={cx(
            'LyricToggleScroll',
            'LyricToggle',
            'length__buttonLarge'
        )}>
            <Button
                isLargeSize
                buttonName="lyricEar"
                temporaryText={LYRIC_COLUMN_KEYS[selectedLyricColumnIndex]}
                accessKey={LYRIC_COLUMN_TOGGLE_KEY}
                handleButtonClick={handleLyricColumnSelect}
            />
        </div>
    )
}

LyricToggleScroll.propTypes = lyricEarTogglePropTypes

export default connect(mapStateToProps)(LyricToggleScroll)
