import React, { memo } from 'react'
import PropTypes from 'prop-types'
import TipsHand from '../../../Tips/Hand'
import {
    ANNOTATION,
    ACTIVATED_VERSE,
    STANZA_TAB,
    WORMHOLES,
    WIKI
} from '../../../../constants/tips'

const UnitCardTipsHands = ({
    showAnnotationTip,
    showActivatedTip,
    showStanzaTabTip,
    showWormholesTip,
    showWikiTip

}) => (
    <>
        {showAnnotationTip && (
            <TipsHand {...{ tipType: ANNOTATION }} />
        )}
        {showActivatedTip && (
            <TipsHand {...{ tipType: ACTIVATED_VERSE }} />
        )}
        {showStanzaTabTip && (
            <TipsHand reverse {...{ tipType: STANZA_TAB }} />
        )}
        {showWormholesTip && (
            <TipsHand {...{ tipType: WORMHOLES }} />
        )}
        {showWikiTip && (
            <TipsHand reverse {...{ tipType: WIKI }} />
        )}
    </>
)

UnitCardTipsHands.propTypes = {
    showAnnotationTip: PropTypes.bool,
    showActivatedTip: PropTypes.bool,
    showStanzaTabTip: PropTypes.bool,
    showWormholesTip: PropTypes.bool,
    showWikiTip: PropTypes.bool
}

export default memo(UnitCardTipsHands)
