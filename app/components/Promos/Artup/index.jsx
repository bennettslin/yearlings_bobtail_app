// Section to show artup presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PromoView from '../../Promo/View'
import {
    getBodyForArtupSlide,
    getFootnoteForArtupSlide,
    getTitleForArtupSlide,
    getShowContactEmailForArtupSlide,
} from '../../../api/promo/artup'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { mapArtupSlideIndex } from '../../../redux/promo/selector'

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
                body: getBodyForArtupSlide(serverClientArtupIndex),
                footnote: getFootnoteForArtupSlide(serverClientArtupIndex),
                showContact:
                    getShowContactEmailForArtupSlide(serverClientArtupIndex),
            }}
        />
    )
}

ArtupPromo.propTypes = {
    serverClientArtupIndex: PropTypes.number.isRequired,
    handlePitchPageChange: PropTypes.func.isRequired,
}

export default getPromoServerClientHoc(ArtupPromo)
