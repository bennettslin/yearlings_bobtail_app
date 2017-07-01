// Button to collapse and expand lyric column in mobile widths.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { LYRIC_SECTION_EXPAND_KEY } from '../../constants/access'
import { getIsLyricExpandable } from '../../helpers/responsive-helper'

const LyricToggle = ({

    deviceIndex,
    isHeightlessLyricColumn,
    isLyricExpanded,
    inMain,
    handleLyricSectionExpand

}) => {
    /**
     * Render button in main if lyric column is heightless
     */
    const shouldRender = inMain ? isHeightlessLyricColumn : true

    // And, of course, it should even be expandable at all.
    return getIsLyricExpandable(deviceIndex) && shouldRender && (
        <div className="lyric-button-block expand-button-block">
            <Button
                accessKey={LYRIC_SECTION_EXPAND_KEY}
                iconText={isLyricExpanded ? '-' : '+'}
                isLarge={true}
                handleClick={handleLyricSectionExpand}
            />
        </div>
    )
}

LyricToggle.defaultProps = {
    inMain: false
}

LyricToggle.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isHeightlessLyricColumn: PropTypes.bool.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,

    // From parent.
    inMain: PropTypes.bool.isRequired,
    handleLyricSectionExpand: PropTypes.func.isRequired
}

export default connect(({
    deviceIndex,
    isHeightlessLyricColumn,
    isLyricExpanded
}) => ({
    deviceIndex,
    isHeightlessLyricColumn,
    isLyricExpanded
}))(LyricToggle)
