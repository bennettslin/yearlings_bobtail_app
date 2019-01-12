// Toggle button to show and hide title section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import AboutDispatcher from '../../../dispatchers/About'
import AudioTimer from '../../Audio/Timer'
import Button from '../../Button'

import { populateRefs } from 'helpers/ref'

import { ABOUT_TOGGLE_KEY } from 'constants/access'
import { ABOUT_BUTTON_KEY } from 'constants/buttons'

const mapStateToProps = ({
    responsiveStore: { isTwoRowMenu }
}) => ({
    isTwoRowMenu
})

class AboutToggle extends PureComponent {

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
        this.dispatchAbout()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        const {
                isTwoRowMenu,
                isAudioChild
            } = this.props,

            aboutButtonChild = (
                <Button
                    buttonName={ABOUT_BUTTON_KEY}
                    // className={cx(
                    //     { 'Button__about__timerInTitle': isTwoRowMenu }
                    // )}
                    isCustomSize
                    accessKey={ABOUT_TOGGLE_KEY}
                    handleButtonClick={this.handleButtonClick}
                />
            )

        return isAudioChild === isTwoRowMenu && (
            <div className={cx(
                'AboutToggle',
                {
                    'Audio__child': isAudioChild,
                    'AboutToggle__inAudio': isAudioChild
                }
            )}>
                {isTwoRowMenu && (
                    <AudioTimer isAboutTimer />
                )}

                {isTwoRowMenu ? (
                    <div className={cx(
                        'AboutToggleButton__animatable',
                        'abF'
                    )}>
                        {aboutButtonChild}
                    </div>
                ) : (
                    aboutButtonChild
                )}
                <AboutDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default connect(mapStateToProps)(AboutToggle)
