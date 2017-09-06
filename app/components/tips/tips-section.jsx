import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TipsToggle from './tips-toggle'
import TextBlock from '../text/text-block'
import { getSongTip } from '../../helpers/data-helper'

const TipsSection = ({

    selectedSongIndex,

...other }) => {

    const tipText = getSongTip(selectedSongIndex)

    return (
        <div className="section tips-section">
            <div className="tips-text">
                <div className="tips-toggle-section">
                    <TipsToggle {...other} />
                </div>
                {tipText && (
                    <TextBlock
                        isLyric={false}
                        text={tipText}
                    />
                )}
            </div>
        </div>
    )
}

TipsSection.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(TipsSection)
