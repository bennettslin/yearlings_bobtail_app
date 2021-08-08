// Section to show artup presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PromoView from '../../Promo/View'
import {
    getBodyForArtup2Slide,
    getFootnoteForArtup2Slide,
    getTitleForArtup2Slide,
} from '../../../endpoint/promo/artup2'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { mapArtup2SlideIndex } from '../../../redux/promo/selector'

const Artup2Promo = ({ serverClientArtup2Index, handlePromoPageChange }) => {
    const artup2SlideIndex = useSelector(mapArtup2SlideIndex)

    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePromoPageChange()
        logState('artup2SlideIndex', artup2SlideIndex)
    }, [artup2SlideIndex])

    return (
        <PromoView
            {...{
                title: getTitleForArtup2Slide(serverClientArtup2Index),
                body: getBodyForArtup2Slide(serverClientArtup2Index),
                footnote: getFootnoteForArtup2Slide(serverClientArtup2Index),
            }}
        />
    )
}

Artup2Promo.propTypes = {
    serverClientArtup2Index: PropTypes.number.isRequired,
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default getPromoServerClientHoc(Artup2Promo)
