// Toggle button to show and hide title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Button2 from '../Button/Button2'
import { TITLE_TOGGLE_KEY } from '../../constants/access'

const mapStateToProps = ({
    isTitleInAudio,
    selectedTitleIndex
}) => ({
    isTitleInAudio,
    selectedTitleIndex
})

const titleToggleDefaultProps = {
    isAudioChild: false
},

titleTogglePropTypes = {
    // Through Redux.
    isTitleInAudio: PropTypes.bool.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    isAudioChild: PropTypes.bool.isRequired,
    handleTitleToggle: PropTypes.func.isRequired
},

TitleToggle = ({

    isTitleInAudio,
    selectedTitleIndex,

    isAudioChild,
    handleTitleToggle

}) => {
    return isAudioChild === isTitleInAudio && (
        <Button2
            buttonName="title"
            className={cx(
                'TitleToggle',
                { 'Audio__menuChild': isAudioChild }
            )}
            isCustomSize
            accessKey={TITLE_TOGGLE_KEY}
            temporaryText={selectedTitleIndex}
            handleButtonClick={handleTitleToggle}
        />
    )
}

TitleToggle.defaultProps = titleToggleDefaultProps
TitleToggle.propTypes = titleTogglePropTypes

export default connect(mapStateToProps)(TitleToggle)
