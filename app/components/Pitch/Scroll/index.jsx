// Section to show pitch.
import React from 'react'
import PropTypes from 'prop-types'
import {
    getPitchBodyForIndex,
    getPitchFootnoteForIndex,
    getPitchTitleForIndex,
    getShowContactEmailForPitch,
} from '../../../api/pitch/segments'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import Contact from '../../Contact'
import MarketingTitle from '../../Marketing/Scroll/Title'
import MarketingContent from '../../Marketing/Scroll/Content'
import Texts from '../../Texts'

const PitchScroll = ({ serverClientPitchIndex }) => {
    const
        body = getPitchBodyForIndex(serverClientPitchIndex),
        footnote = getPitchFootnoteForIndex(serverClientPitchIndex)

    return (
        <>
            <MarketingTitle
                {...{ text: getPitchTitleForIndex(serverClientPitchIndex) }}
            />
            <MarketingContent {...{ footnote }}>
                {body.map((text, index) => (
                    <p {...{ key: index }}>
                        <Texts {...{ text }} />
                    </p>
                ))}
                {getShowContactEmailForPitch(serverClientPitchIndex) && (
                    <Contact />
                )}
            </MarketingContent>
        </>
    )
}

PitchScroll.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired,
}

export default getMarketingServerClientHoc(PitchScroll)
