// Section to show artup presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PromoView from '../../Promo/View'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { getMapPitchSlideIndex } from '../../../redux/promo/selector'
import { getBodyForSlide, getFootnoteForSlide, getTitleForSlide } from '../../../endpoint/promo/pitches'
import { ARTUP_SUBPATH } from '../../../constants/routing'

const ArtupPromo = ({ serverClientArtupIndex, handlePromoPageChange }) => {
    const artupSlideIndex = useSelector(getMapPitchSlideIndex(ARTUP_SUBPATH))

    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePromoPageChange()
        logState('artupSlideIndex', artupSlideIndex)
    }, [artupSlideIndex])

    return (
        <PromoView
            {...{
                title: getTitleForSlide(ARTUP_SUBPATH, serverClientArtupIndex),
                body: getBodyForSlide(ARTUP_SUBPATH, serverClientArtupIndex),
                footnote: getFootnoteForSlide(
                    ARTUP_SUBPATH,
                    serverClientArtupIndex,
                ),
            }}
        />
    )
}

ArtupPromo.propTypes = {
    serverClientArtupIndex: PropTypes.number.isRequired,
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default getPromoServerClientHoc(ArtupPromo)
