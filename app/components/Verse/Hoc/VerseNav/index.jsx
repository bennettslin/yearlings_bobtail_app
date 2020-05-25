/**
 * Button that navigates to activated verse.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import CSSTransition from 'react-transition-group/CSSTransition'
import Button from '../../../Button'

import { ENTER } from '../../../../constants/access'
import {
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY
} from '../../../../constants/buttons'

const mapStateToProps = ({
    selectedStore: { selectedVerseIndex }
}) => ({
    selectedVerseIndex
})

class VerseNav extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        isActivated: PropTypes.bool.isRequired,
        handleVerseSelect: PropTypes.func.isRequired
    }

    _handleButtonClick = () => {
        const {
            verseIndex,
            handleVerseSelect
        } = this.props

        handleVerseSelect({
            selectedVerseIndex: verseIndex,
            scrollLog: `Click select activated verse ${verseIndex}.`
        })
    }

    render() {
        /**
         * If activated, disable only if it's selected and song can't play
         * through.
         */
        const {
            isActivated,
            verseIndex,
            selectedVerseIndex
        } = this.props

        return (
            <CSSTransition
                mountOnEnter
                unmountOnExit
                {...{
                    in: isActivated,
                    timeout: 200,
                    classNames: {
                        enterActive: 'VerseNav__activated',
                        enterDone: 'VerseNav__activated'
                    }
                }}
            >
                <div className={cx(
                    'VerseNav',
                    'padding__verseInLyric',
                    'fCC'
                )}>
                    <Button
                        isSmallSize
                        {...{
                            buttonName:
                                verseIndex < selectedVerseIndex ?
                                    AUDIO_REWIND_BUTTON_KEY :
                                    AUDIO_FAST_FORWARD_BUTTON_KEY,
                            accessKey: ENTER,
                            isAccessed: isActivated,
                            isDisabled: !isActivated,
                            handleButtonClick: this._handleButtonClick
                        }}
                    />
                </div>
            </CSSTransition>
        )
    }
}

export default connect(mapStateToProps)(VerseNav)
