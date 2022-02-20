// Section to show pareto presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PromoView from '../../Promo/View'
import {
    getBodyForParetoSlide,
    getFootnoteForParetoSlide,
    getTitleForParetoSlide,
} from '../../../endpoint/promo/pareto'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { mapParetoSlideIndex } from '../../../redux/promo/selector'

const ParetoPromo = ({ serverClientParetoIndex, handlePromoPageChange }) => {
    const paretoSlideIndex = useSelector(mapParetoSlideIndex)

    useEffect(() => {
        // Scroll back to top upon slide change.
        handlePromoPageChange()
        logState('paretoSlideIndex', paretoSlideIndex)
    }, [paretoSlideIndex])

    return (
        <PromoView
            {...{
                title: getTitleForParetoSlide(serverClientParetoIndex),
                body: getBodyForParetoSlide(serverClientParetoIndex),
                footnote: getFootnoteForParetoSlide(serverClientParetoIndex),
            }}
        />
    )
}

ParetoPromo.propTypes = {
    serverClientParetoIndex: PropTypes.number.isRequired,
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default getPromoServerClientHoc(ParetoPromo)
