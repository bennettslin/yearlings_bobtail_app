// Section to show artup presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PromoView from '../../Promo/View'
import {
    getBodyForArtupSlide,
    getFootnoteForArtupSlide,
    getTitleForArtupSlide,
} from '../../../endpoint/promo/artup'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { mapArtupSlideIndex } from '../../../redux/promo/selector'

const ArtupPromo = ({ serverClientArtupIndex, handlePromoPageChange }) => {
    const artupSlideIndex = useSelector(mapArtupSlideIndex)

    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePromoPageChange()
        logState('artupSlideIndex', artupSlideIndex)
    }, [artupSlideIndex])

    return (
        <PromoView
            {...{
                title: getTitleForArtupSlide(serverClientArtupIndex),
                body: getBodyForArtupSlide(serverClientArtupIndex),
                footnote: getFootnoteForArtupSlide(serverClientArtupIndex),
            }}
        />
    )
}

ArtupPromo.propTypes = {
    serverClientArtupIndex: PropTypes.number.isRequired,
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default getPromoServerClientHoc(ArtupPromo)