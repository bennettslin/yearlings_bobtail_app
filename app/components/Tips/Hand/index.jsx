import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import InlineSvg from '../../../modules/InlineSvg'
import tipsHand from '../../../../assets/svgs/app/tips/tipsHand'
import { getSongTipType } from '../../../album/api/tips'
import { SHOWN } from '../../../constants/options'
import {
    WORMHOLES,
    WIKI
} from '../../../constants/tips'
import {
    REFERENCE_SELECTOR,
    WORMHOLE_SELECTOR
} from '../../../redux/dots/selectors'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'

const mapStateToProps = state => {
    const {
            entranceStore: { didLyricUpdate },
            optionStore: { selectedTipsOption },
            viewportStore: { isPhoneWidth }
        } = state,
        reference = REFERENCE_SELECTOR(state),
        wormhole = WORMHOLE_SELECTOR(state),
        lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state)

    return {
        reference,
        wormhole,
        didLyricUpdate,
        lyricSongIndex,
        selectedTipsOption,
        isPhoneWidth
    }
}

const TipsHand = ({
    reference,
    wormhole,
    didLyricUpdate,
    lyricSongIndex,
    selectedTipsOption,
    isPhoneWidth,
    tipType,
    isPointedAtDots,
    reverse

}) => {
    let canRender = true

    // Don't render in phone, as it takes up too much space.
    if (isPhoneWidth) {
        canRender = false

        // If dot is selected, render the one that is not pointed at dots toggle.
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
                    didLyricUpdate &&
                    selectedTipsOption === SHOWN &&
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

TipsHand.defaultProps = {
    isPointedAtDots: false
}

TipsHand.propTypes = {
    // Through Redux.
    reference: PropTypes.bool.isRequired,
    wormhole: PropTypes.bool.isRequired,
    isPhoneWidth: PropTypes.bool.isRequired,
    didLyricUpdate: PropTypes.bool.isRequired,
    lyricSongIndex: PropTypes.number.isRequired,
    selectedTipsOption: PropTypes.string.isRequired,

    // From parent.
    tipType: PropTypes.string.isRequired,
    isPointedAtDots: PropTypes.bool.isRequired,
    reverse: PropTypes.bool
}

export default connect(mapStateToProps)(TipsHand)
