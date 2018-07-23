// Toggle button to show and hide title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AudioTimer from '../Audio/AudioTimer'
import Button from '../Button/Button'

import { TITLE_TOGGLE_KEY } from '../../constants/access'
import { TITLE_BUTTON_KEY } from '../../constants/buttons'

const mapStateToProps = ({
    isTwoRowMenu,
    selectedTitleIndex
}) => ({
    isTwoRowMenu,
    selectedTitleIndex
})

const titleToggleDefaultProps = {
    isAudioChild: false
},

titleTogglePropTypes = {
    // Through Redux.
    isTwoRowMenu: PropTypes.bool.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    isAudioChild: PropTypes.bool.isRequired,
    handleTitleToggle: PropTypes.func.isRequired
},

TitleToggle = ({

    isTwoRowMenu,
    selectedTitleIndex,

    isAudioChild,
    handleTitleToggle

}) => {

    const titleButtonChild = (
            <Button
                buttonName={TITLE_BUTTON_KEY}
                className={cx(
                    { 'Button__title__timerInTitle': isTwoRowMenu }
                )}
                isCustomSize
                accessKey={TITLE_TOGGLE_KEY}
                buttonIdentifier={selectedTitleIndex}
                handleButtonClick={handleTitleToggle}
            />
        )

    return isAudioChild === isTwoRowMenu && (
        <div className={cx(
            'TitleToggle',
            { 'Audio__child': isAudioChild,
              'TitleToggle__inAudio': isAudioChild }
        )}>
            {isTwoRowMenu && (
                <AudioTimer
                    isTitleTimer
                />
            )}

            {isTwoRowMenu ? (
                <div className={cx(
                    'TitleToggleButton__animatable',
                    'absoluteFullContainer'
                )}>
                    {titleButtonChild}
                </div>
            ) : (
                titleButtonChild
            )}
        </div>
    )
}

TitleToggle.defaultProps = titleToggleDefaultProps
TitleToggle.propTypes = titleTogglePropTypes

export default connect(mapStateToProps)(TitleToggle)
