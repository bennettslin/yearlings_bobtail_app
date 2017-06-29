// Button to collapse and expand lyric column in mobile widths.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import { LYRIC_SECTION_EXPAND_KEY } from '../../constants/access'
import { getIsLyricExpandable } from '../../helpers/responsive-helper'

const LyricToggle = ({

    deviceIndex,
    isLyricExpanded,
    handleLyricSectionExpand

}) => {
    return getIsLyricExpandable(deviceIndex) && (
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

LyricToggle.propTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,

    // From parent.
    handleLyricSectionExpand: PropTypes.func.isRequired
}

export default connect(({
    deviceIndex,
    isLyricExpanded
}) => ({
    deviceIndex,
    isLyricExpanded
}))(LyricToggle)
