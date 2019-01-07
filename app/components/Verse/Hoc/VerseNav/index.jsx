/**
 * Button that navigates to interactivated verse.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CSSTransition from 'react-transition-group/CSSTransition'
import Button from '../../../Button'

import { ENTER } from 'constants/access'
import { AUDIO_NEXT_BUTTON_KEY } from 'constants/buttons'

class VerseNav extends PureComponent {

    static propTypes = {
        // From parent.
        verseIndex: PropTypes.number.isRequired,
        isInteractivated: PropTypes.bool.isRequired,
        handleVerseSelect: PropTypes.func.isRequired
    }

    _handleButtonClick = () => {
        const {
            verseIndex,
            handleVerseSelect
        } = this.props

        handleVerseSelect({
            selectedVerseIndex: verseIndex,
            scrollLog: 'Select interactivated verse.'
        })
    }

    render() {
        /**
         * If interactivated, disable only if it's selected and song can't play
         * through.
         */
        const { isInteractivated } = this.props

        return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                {...{
                    in: isInteractivated,
                    timeout: 200,
                    classNames: {
                        enterActive: 'VerseNav__interactivated',
                        enterDone: 'VerseNav__interactivated'
                    }
                }}
            >
                <div className={cx(
                    'VerseNav',
                    'padding__verseInLyric',
                    'flexCentreContainer'
                )}>
                    <Button
                        isSmallSize
                        {...{
                            buttonName: AUDIO_NEXT_BUTTON_KEY,
                            accessKey: ENTER,
                            canShowAccessIcon: isInteractivated,
                            isDisabled: !isInteractivated,
                            buttonIdentifier: false,
                            handleButtonClick: this._handleButtonClick
                        }}
                    />
                </div>
            </CSSTransition>
        )
    }
}

export default VerseNav
