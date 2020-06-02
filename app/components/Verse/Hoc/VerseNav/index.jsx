// Button that selects activated verse.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import Button from '../../../Button'
import { ENTER } from '../../../../constants/access'
import {
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY
} from '../../../../constants/buttons'
import { mapSelectedVerseIndex } from '../../../../redux/selected/selectors'
import './style'

const VerseNav = ({
    isActivated,
    verseIndex,
    handleVerseSelect

}) => {
    const selectedVerseIndex = useSelector(mapSelectedVerseIndex)

    const handleButtonClick = () => {
        handleVerseSelect({
            selectedVerseIndex: verseIndex,
            scrollLog: `Click select activated verse ${verseIndex}.`
        })
    }

    /**
     * If activated, disable only if it's selected and song can't play
     * through.
     */
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
                        handleButtonClick
                    }}
                />
            </div>
        </CSSTransition>
    )
}

VerseNav.propTypes = {
    verseIndex: PropTypes.number.isRequired,
    isActivated: PropTypes.bool.isRequired,
    handleVerseSelect: PropTypes.func.isRequired
}

export default memo(VerseNav)
