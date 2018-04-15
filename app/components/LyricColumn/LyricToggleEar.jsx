// Button to toggle between left and right columns.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { connect } from 'react-redux'
import Button from '../Button/Button'
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
            'LyricToggle__inLyric',
            'LyricToggle',
            'length__buttonLarge',
            'position__buttonInherit'
        )}>
            <Button
                isLarge
                accessKeysShown
                accessKey={LYRIC_COLUMN_TOGGLE_KEY}
                iconText={LYRIC_COLUMN_KEYS[selectedLyricColumnIndex]}
                handleClick={handleLyricColumnSelect}
            />
        </div>
    )
}

LyricToggleEar.propTypes = lyricEarTogglePropTypes

export default connect(mapStateToProps)(LyricToggleEar)
