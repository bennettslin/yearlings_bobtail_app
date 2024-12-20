// Button to collapse and expand lyric column in mobile widths.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import CSSTransition from 'react-transition-group/CSSTransition'
import LyricExpandDispatcher from '../../../../dispatchers/LyricExpand'
import Button from '../../../Button'
import TipsHand from '../../../Tips/Hand'
import { LYRIC_EXPAND_KEY } from '../../../../constants/access'
import { LYRIC_EXPAND_BUTTON_KEY } from '../../../../constants/buttons'
import { LYRIC_EXPAND } from '../../../../constants/tips'
import { getMapIsExpandToggleShown } from '../../../../redux/lyricExpand/selector'
import { mapIsLyricExpanded } from '../../../../redux/toggle/selector'
import './style'

const LyricToggleExpand = ({ inMain }) => {
    const
        dispatchLyricExpand = useRef(),
        isExpandToggleShown = useSelector(getMapIsExpandToggleShown(inMain)),
        isLyricExpanded = useSelector(mapIsLyricExpanded)

    const handleButtonClick = () => {
        dispatchLyricExpand.current()
    }

    return (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            {...{
                in: isExpandToggleShown,
                timeout: 200,
                classNames: {
                    enterActive: 'LyricToggle__shown',
                    enterDone: 'LyricToggle__shown',
                },
            }}
        >
            <div className={cx(
                'LyricToggleExpand',
                'LyricToggle',
                inMain ?
                    'LyricToggleExpand__inMain' :
                    'LyricToggleExpand__inLyric',
                'length__buttonLarge',
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: LYRIC_EXPAND_BUTTON_KEY,
                        buttonOption: isLyricExpanded,
                        accessKey: LYRIC_EXPAND_KEY,
                        handleButtonClick,
                    }}
                />
                <TipsHand {...{ tipType: LYRIC_EXPAND }} />
                <LyricExpandDispatcher {...{ ref: dispatchLyricExpand }} />
            </div>
        </CSSTransition>
    )
}

LyricToggleExpand.propTypes = {
    inMain: PropTypes.bool,
}

export default memo(LyricToggleExpand)
