// Section to show pareto presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PromoView from '../../Promo/View'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { getMapPitchSlideIndex } from '../../../redux/promo/selector'
import {
    getBodyForSlide,
    getFootnoteForSlide,
    getTitleForSlide,
} from '../../../endpoint/promo/pitches'

const PitchPromo = ({
    serverClientPitchIndex,
    serverClientPromoKey,
    handlePromoPageChange,
}) => {
    const pitchSlideIndex = useSelector(
        getMapPitchSlideIndex(serverClientPromoKey),
    )

    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePromoPageChange()
        logState('pitchSlideIndex', pitchSlideIndex)
    }, [pitchSlideIndex])

    return (
        <PromoView
            {...{
                title: getTitleForSlide(
                    serverClientPromoKey,
                    serverClientPitchIndex,
                ),
                body: getBodyForSlide(
                    serverClientPromoKey,
                    serverClientPitchIndex,
                ),
                footnote: getFootnoteForSlide(
                    serverClientPromoKey,
                    serverClientPitchIndex,
                ),
            }}
        />
    )
}

PitchPromo.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired,
    serverClientPromoKey: PropTypes.string.isRequired,
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default getPromoServerClientHoc(PitchPromo)
