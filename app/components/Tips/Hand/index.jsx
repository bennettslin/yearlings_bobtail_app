import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import InlineSvg from '../../../modules/InlineSvg'
import tipsHand from '../../../../assets/svgs/app/tips/tipsHand'
import { getSongTipType } from '../../../api/album/tips'
import {
    WORMHOLES,
    WIKI
} from '../../../constants/tips'
import { mapIsPhoneWidth } from '../../../redux/device/selector'
import {
    mapReferenceDot,
    mapWormholeDot
} from '../../../redux/dots/selector'
import { mapIsSongChangeDone } from '../../../redux/entrance/selector'
import { mapLyricSongIndex } from '../../../redux/lyric/selector'
import { mapIsTipsShown } from '../../../redux/tips/selector'
import './style'

const TipsHand = ({
    tipType,
    isPointedAtDots = false,
    reverse

}) => {
    const
        reference = useSelector(mapReferenceDot),
        wormhole = useSelector(mapWormholeDot),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isTipsShown = useSelector(mapIsTipsShown),
        isPhoneWidth = useSelector(mapIsPhoneWidth)

    // TODO: Make this a selector.
    let canRender = true

    // Don't render in phone, as it takes up too much space.
    if (isPhoneWidth) {
        canRender = false

        // If dot is selected, render the one not pointed at dots toggle.
    } else if (tipType === WORMHOLES) {
        canRender = wormhole !== isPointedAtDots
    } else if (tipType === WIKI) {
        canRender = reference !== isPointedAtDots
    }

    return (
        <CSSTransition
            appear
            mountOnEnter
            unmountOnExit
            {...{
                in: (
                    isSongChangeDone &&
                    isTipsShown &&
                    getSongTipType(lyricSongIndex) === tipType &&
                    canRender
                ),
                timeout: 200,
                classNames: {
                    enterActive: 'TipsHand__shown',
                    enterDone: 'TipsHand__shown'
                }
            }}
        >
            <div
                {...{
                    className: cx(
                        'TipsHand',
                        `TipsHand__${tipType}`,
                        isPointedAtDots && 'TipsHand__pointedAtDots',
                        reverse && 'TipsHand__reverse',
                        'abF'
                    )
                }}
            >
                <InlineSvg
                    {...{
                        className: cx(
                            'TipsHand__animatable',
                            'pulsateAnimated'
                        ),
                        svgClassName: cx(
                            'tipsHand'
                        )
                    }}
                >
                    {tipsHand}
                </InlineSvg>
            </div>
        </CSSTransition>
    )
}

TipsHand.propTypes = {
    tipType: PropTypes.string.isRequired,
    isPointedAtDots: PropTypes.bool,
    reverse: PropTypes.bool
}

export default memo(TipsHand)
