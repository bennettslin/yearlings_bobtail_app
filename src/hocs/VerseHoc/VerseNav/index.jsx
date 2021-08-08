// Button that selects activated verse.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import Button from '../../../components/Button'
import { ENTER } from '../../../constants/access'
import {
    AUDIO_FAST_FORWARD_BUTTON_KEY,
    AUDIO_REWIND_BUTTON_KEY,
} from '../../../constants/buttons'
import { getMapIsVerseActivated } from '../../../redux/activated/selector'
import { getMapVerseSelectedStatus } from '../../../redux/selected/selector'
import './style'

const VerseNav = ({
    verseIndex,
    handleVerseSelect,

}) => {
    const verseSelectedStatus = useSelector(
        getMapVerseSelectedStatus(verseIndex),
    )

    const handleButtonClick = () => {
        handleVerseSelect({
            scrollLog: 'Verse nav selected',
            verseIndex,
            fromActivated: true,
        })
    }

    return (
        <div className={cx(
            'VerseNav',
            'padding__verseInLyric',
            'fCC',
        )}>
            <Button
                isAccessed
                isSmallSize
                {...{
                    buttonName:
                        /**
                         * It's either before or after selected verse. This
                         * will never show if it's the selected verse.
                         */
                        verseSelectedStatus === -1 ?
                            AUDIO_REWIND_BUTTON_KEY :
                            AUDIO_FAST_FORWARD_BUTTON_KEY,
                    accessKey: ENTER,
                    handleButtonClick,
                }}
            />
        </div>
    )
}

const VerseNavContainer = ({
    verseIndex,
    handleVerseSelect,

}) => {
    const isVerseActivated = useSelector(getMapIsVerseActivated(verseIndex))

    /**
     * If activated, disable only if it's selected and song can't play
     * through.
     */
    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            {...{
                in: isVerseActivated,
                timeout: 200,
                classNames: {
                    enterActive: 'VerseNav__shown',
                    enterDone: 'VerseNav__shown',
                },
            }}
        >
            <VerseNav
                {...{
                    verseIndex,
                    handleVerseSelect,
                }}
            />
        </CSSTransition>
    )
}

VerseNav.propTypes = {
    verseIndex: PropTypes.number.isRequired,
    handleVerseSelect: PropTypes.func.isRequired,
}

VerseNavContainer.propTypes = VerseNav.propTypes

export default memo(VerseNavContainer)
