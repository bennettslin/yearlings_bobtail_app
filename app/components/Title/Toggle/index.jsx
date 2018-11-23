// Toggle button to show and hide title section.

import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import TitleDispatcher from '../../../dispatchers/TitleDispatcher'
import AudioTimer from '../../Audio/Timer'
import Button from '../../Button'

import { TITLE_TOGGLE_KEY } from 'constants/access'
import { TITLE_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    responsiveStore: { isTwoRowMenu }
}) => ({
    isTwoRowMenu
})

class TitleToggle extends Component {

    static defaultProps = {
        isAudioChild: false
    }

    static propTypes = {
        // Through Redux.
        isTwoRowMenu: PropTypes.bool.isRequired,

        // From parent.
        isAudioChild: PropTypes.bool.isRequired
    }

    handleButtonClick = () => {
        this.dispatchTitle()
    }

    setTitleDispatch = (dispatch) => {
        this.dispatchTitle = dispatch
    }

    render() {
        const {
                isTwoRowMenu,
                isAudioChild
            } = this.props,

            titleButtonChild = (
                <Button
                    buttonName={TITLE_BUTTON_KEY}
                    className={cx(
                        { 'Button__title__timerInTitle': isTwoRowMenu }
                    )}
                    isCustomSize
                    accessKey={TITLE_TOGGLE_KEY}
                    handleButtonClick={this.handleButtonClick}
                />
            )

        return isAudioChild === isTwoRowMenu && (
            <___>
                <div className={cx(
                    'TitleToggle',
                    {
                        'Audio__child': isAudioChild,
                        'TitleToggle__inAudio': isAudioChild
                    }
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
                <TitleDispatcher
                    {...{ getDispatch: this.setTitleDispatch }}
                />
            </___>
        )
    }
}

export default connect(mapStateToProps)(TitleToggle)
