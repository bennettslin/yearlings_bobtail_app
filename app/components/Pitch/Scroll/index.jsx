// Section to show pitch.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
    getBodyForArtupSlide,
    getFootnoteForArtupSlide,
    getTitleForArtupSlide,
    getShowContactEmailForArtupSlide,
} from '../../../api/artup/slides'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import { mapArtupSlideIndex } from '../../../redux/marketing/selector'
import Contact from '../../Contact'
import MarketingTitle from '../../Marketing/Scroll/Title'
import MarketingContent from '../../Marketing/Scroll/Content'
import Texts from '../../Texts'

const PitchScroll = ({ serverClientArtupIndex, resetScrollTop }) => {
    const
        artupSlideIndex = useSelector(mapArtupSlideIndex),
        body = getBodyForArtupSlide(serverClientArtupIndex),
        footnote = getFootnoteForArtupSlide(serverClientArtupIndex)

    useEffect(() => {
        // Scroll back to top upon slide change.
        resetScrollTop()
        logState('artupSlideIndex', artupSlideIndex)
    }, [artupSlideIndex])

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
    resetScrollTop: PropTypes.func.isRequired,
}

export default getMarketingServerClientHoc(PitchScroll)
