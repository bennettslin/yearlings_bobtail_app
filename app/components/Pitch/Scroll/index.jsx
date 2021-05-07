// Section to show pitch.
import React from 'react'
import PropTypes from 'prop-types'
import {
    getBodyForArtupSlide,
    getFootnoteForArtupSlide,
    getTitleForArtupSlide,
    getShowContactEmailForArtupSlide,
} from '../../../api/artup/slides'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import Contact from '../../Contact'
import MarketingTitle from '../../Marketing/Scroll/Title'
import MarketingContent from '../../Marketing/Scroll/Content'
import Texts from '../../Texts'

const PitchScroll = ({ serverClientArtupIndex }) => {
    const
        body = getBodyForArtupSlide(serverClientArtupIndex),
        footnote = getFootnoteForArtupSlide(serverClientArtupIndex)

    return (
        <>
            <MarketingTitle
                {...{ text: getTitleForArtupSlide(serverClientArtupIndex) }}
            />
            <MarketingContent {...{ footnote }}>
                {body.map((text, index) => (
                    <p {...{ key: index }}>
                        <Texts {...{ text }} />
                    </p>
                ))}
                {getShowContactEmailForArtupSlide(serverClientArtupIndex) && (
                    <Contact />
                )}
            </MarketingContent>
        </>
    )
}

PitchScroll.propTypes = {
    serverClientArtupIndex: PropTypes.number.isRequired,
}

export default getMarketingServerClientHoc(PitchScroll)
