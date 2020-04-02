import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'

import InlineSvg from '../../../modules/InlineSvg'
import tipsHand from '../../../../assets/svgs/app/tips/tipsHand'

import { getSongTipType } from '../../../album/api/tips'
import { SHOWN } from '../../../constants/options'

const mapStateToProps = ({
    lyricStore: {
        didLyricUpdate,
        lyricSongIndex
    },
    optionStore: {
        selectedTipsOption
    }
}) => ({
    didLyricUpdate,
    lyricSongIndex,
    selectedTipsOption
})

const TipsHand = ({
    didLyricUpdate,
    lyricSongIndex,
    selectedTipsOption,
    tipType

}) => (
    <CSSTransition
        appear
        mountOnEnter
        unmountOnExit
        {...{
            in: (
                didLyricUpdate &&
                selectedTipsOption === SHOWN &&
                getSongTipType(lyricSongIndex) === tipType
            ),
            timeout: 200,
            classNames: {
                enterActive: 'TipsHand__shown',
                enterDone: 'TipsHand__shown'
            }
        }}
    >
        <InlineSvg
            {...{
                className: cx(
                    'TipsHand',
                    `TipsHand__${tipType}`,
                    'abF'
                ),
                svgClassName: cx(
                    'tipsHand'
                )
            }}
        >
            {tipsHand}
        </InlineSvg>
    </CSSTransition>
)

TipsHand.propTypes = {
    // Through Redux.
    didLyricUpdate: PropTypes.bool.isRequired,
    lyricSongIndex: PropTypes.number.isRequired,
    selectedTipsOption: PropTypes.string.isRequired,

    // From parent.
    tipType: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(TipsHand)
