// Button to collapse and expand lyric column in mobile widths.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button from '../../Button'
import { LYRIC_SECTION_EXPAND_KEY } from 'constants/access'
import { LYRIC_EXPAND_BUTTON_KEY } from 'constants/buttons'
import { getIsLyricExpandable } from 'helpers/responsiveHelper'

const mapStateToProps = ({
    deviceStore: { deviceIndex },
    responsiveStore: { isHeightlessLyricColumn },
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
            'length__buttonLarge'
        )}>
            <Button
                isLargeSize
                buttonName={LYRIC_EXPAND_BUTTON_KEY}
                buttonIdentifier={isLyricExpanded}
                accessKey={LYRIC_SECTION_EXPAND_KEY}
                handleButtonClick={handleLyricSectionExpand}
            />
        </div>
    )
}

LyricToggleExpand.defaultProps = lyricExpandToggleDefaultProps
LyricToggleExpand.propTypes = lyricExpandTogglePropTypes

export default connect(mapStateToProps)(LyricToggleExpand)
