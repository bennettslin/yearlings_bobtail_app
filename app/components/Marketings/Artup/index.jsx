// Section to show artup presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import MarketingView from '../../Marketing/View'
import Contact from '../../Contact'
import Texts from '../../Texts'
import {
    getBodyForArtupSlide,
    getFootnoteForArtupSlide,
    getTitleForArtupSlide,
    getShowContactEmailForArtupSlide,
} from '../../../api/artup/slides'
import getMarketingServerClientHoc from '../../../hocs/MarketingHoc'
import { mapArtupSlideIndex } from '../../../redux/marketing/selector'

const ArtupMarketing = ({ serverClientArtupIndex, handlePitchPageChange }) => {
    const artupSlideIndex = useSelector(mapArtupSlideIndex)

    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePitchPageChange()
        logState('artupSlideIndex', artupSlideIndex)
    }, [artupSlideIndex])

    return (
        <MarketingView
            {...{
                title: getTitleForArtupSlide(serverClientArtupIndex),
                footnote: getFootnoteForArtupSlide(serverClientArtupIndex),
            }}
        >
            {getBodyForArtupSlide(serverClientArtupIndex).map((text, index) => (
                <p {...{ key: index }}>
                    <Texts {...{ text }} />
                </p>
            ))}
            {getShowContactEmailForArtupSlide(serverClientArtupIndex) && (
                <Contact />
            )}
        </MarketingView>
    )
}

ArtupMarketing.propTypes = {
    serverClientArtupIndex: PropTypes.number.isRequired,
    handlePitchPageChange: PropTypes.func.isRequired,
}

export default getMarketingServerClientHoc(ArtupMarketing)
