// Section to show artup presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PromoView from '../../Promo/View'
import Contact from '../../Contact'
import Texts from '../../Texts'
import {
    getBodyForArtupSlide,
    getFootnoteForArtupSlide,
    getTitleForArtupSlide,
    getShowContactEmailForArtupSlide,
} from '../../../api/artup/slides'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { mapArtupSlideIndex } from '../../../redux/marketing/selector'

const ArtupPromo = ({ serverClientArtupIndex, handlePitchPageChange }) => {
    const artupSlideIndex = useSelector(mapArtupSlideIndex)

    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePitchPageChange()
        logState('artupSlideIndex', artupSlideIndex)
    }, [artupSlideIndex])

    return (
        <PromoView
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
        </PromoView>
    )
}

ArtupPromo.propTypes = {
    serverClientArtupIndex: PropTypes.number.isRequired,
    handlePitchPageChange: PropTypes.func.isRequired,
}

export default getPromoServerClientHoc(ArtupPromo)
