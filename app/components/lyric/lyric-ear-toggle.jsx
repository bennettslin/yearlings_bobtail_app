// Button to toggle between left and right columns.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { LYRIC_COLUMN_TOGGLE_KEY } from '../../constants/access'
import { LYRIC_COLUMN_KEYS } from '../../constants/lyrics'

const mapStateToProps = ({
    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex
}) => ({
    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex
})

const lyricEarTogglePropTypes = {
    // Through Redux.
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired,

    // From parent.
    handleLyricColumnSelect: PropTypes.func.isRequired
},

LyricEarToggle = ({

    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex,
    handleLyricColumnSelect

}) => {

    return showOneOfTwoLyricColumns && (
        <div className="lyric-button-block ear-button-block">
            <Button
                isLarge={true}
                accessKey={LYRIC_COLUMN_TOGGLE_KEY}
                iconText={LYRIC_COLUMN_KEYS[selectedLyricColumnIndex]}
                handleClick={handleLyricColumnSelect}
            />
        </div>
    )
}

LyricEarToggle.propTypes = lyricEarTogglePropTypes

export default connect(mapStateToProps)(LyricEarToggle)
