// Toggle button to show and hide title section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import { getIsPhone } from '../../helpers/responsiveHelper'

import AudioTimer from '../Audio/AudioTimer'
import Button from '../Button/Button'

import { TITLE_TOGGLE_KEY } from '../../constants/access'

const mapStateToProps = ({
    deviceIndex,
    isTwoRowMenu,
    selectedTitleIndex
}) => ({
    deviceIndex,
    isTwoRowMenu,
    selectedTitleIndex
})

const titleToggleDefaultProps = {
    isAudioChild: false
},

titleTogglePropTypes = {
    // Through Redux.
    deviceIndex: PropTypes.number.isRequired,
    isTwoRowMenu: PropTypes.bool.isRequired,
    selectedTitleIndex: PropTypes.number.isRequired,

    // From parent.
    isAudioChild: PropTypes.bool.isRequired,
    handleTitleToggle: PropTypes.func.isRequired
},

TitleToggle = ({

    deviceIndex,
    isTwoRowMenu,
    selectedTitleIndex,

    isAudioChild,
    handleTitleToggle

}) => {

    const isPhone = getIsPhone(deviceIndex),

        titleButtonChild = (
            <Button
                buttonName="title"
                className={cx(
                    { 'Button__title__timerInTitle': isPhone }
                )}
                isCustomSize
                accessKey={TITLE_TOGGLE_KEY}
                temporaryText={selectedTitleIndex}
                handleButtonClick={handleTitleToggle}
            />
        )

    return isAudioChild === isTwoRowMenu && (
        <div className={cx(
            'TitleToggle',
            { 'Audio__menuChild': isAudioChild,
              'TitleToggle__inAudio': isAudioChild }
        )}>
            {isPhone && (
                <AudioTimer
                    isTitleTimer
                />
            )}

            {isPhone ? (
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
