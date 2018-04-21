// Button to toggle between left and right columns.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { connect } from 'react-redux'
import Button2 from '../Button/Button2'
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

LyricToggleEar = ({

    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex,
    handleLyricColumnSelect

}) => {

    return showOneOfTwoLyricColumns && (
        <div className={cx(
            'LyricToggleEar',
            'LyricToggle',
            'LyricToggle__inLyric',
            'length__buttonLarge'
        )}>
            <Button2
                isLargeSize
                buttonName="lyricEar"
                temporaryText={LYRIC_COLUMN_KEYS[selectedLyricColumnIndex]}
                accessKey={LYRIC_COLUMN_TOGGLE_KEY}
                handleButtonClick={handleLyricColumnSelect}
            />
        </div>
    )
}

LyricToggleEar.propTypes = lyricEarTogglePropTypes

export default connect(mapStateToProps)(LyricToggleEar)
