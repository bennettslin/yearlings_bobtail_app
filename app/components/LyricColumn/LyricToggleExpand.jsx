// Button to collapse and expand lyric column in mobile widths.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../Button/Button'
import { LYRIC_SECTION_EXPAND_KEY } from '../../constants/access'
import { getIsLyricExpandable } from '../../helpers/responsiveHelper'

const mapStateToProps = ({
    deviceIndex,
    isHeightlessLyricColumn,
    isLyricExpanded
}) => ({
    deviceIndex,
    isHeightlessLyricColumn,
    isLyricExpanded
})

const lyricExpandToggleDefaultProps = {
    inMain: false
},

lyricExpandTogglePropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isHeightlessLyricColumn: PropTypes.bool.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,

    // From parent.
    inMain: PropTypes.bool.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired
},

LyricToggleExpand = ({

    deviceIndex,
    isHeightlessLyricColumn,
    isLyricExpanded,
    inMain,
    handleLyricSectionExpand

}) => {

    const isLyricExpandable = getIsLyricExpandable(deviceIndex),

        // Render button in main if lyric column is heightless.
        shouldRender = inMain ? isHeightlessLyricColumn : true

    return isLyricExpandable && shouldRender && (
        <div className={cx(
            'LyricToggleExpand',
            'LyricToggle',
            inMain ?
                'LyricToggle__inMain' :
                'LyricToggle__inLyric',
            { 'LyricToggleExpand__inLyric': !inMain },
            'length__buttonLarge',
            'position__buttonInherit'
        )}>
            <Button
                isLarge
                accessKeysShown
                accessKey={LYRIC_SECTION_EXPAND_KEY}
                iconText={isLyricExpanded ? '-' : '+'}
                handleClick={handleLyricSectionExpand}
            />
        </div>
    )
}

LyricToggleExpand.defaultProps = lyricExpandToggleDefaultProps
LyricToggleExpand.propTypes = lyricExpandTogglePropTypes

export default connect(mapStateToProps)(LyricToggleExpand)
