// Section to show pareto presentation.
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import PromoView from '../../Promo/View'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { mapParetoSlideIndex } from '../../../redux/promo/selector'
import { getBodyForSlide, getFootnoteForSlide, getTitleForSlide } from '../../../endpoint/promo/pitches'
import { PARETO_SUBPATH } from '../../../constants/routing'

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
                title: getTitleForSlide(
                    PARETO_SUBPATH,
                    serverClientParetoIndex,
                ),
                body: getBodyForSlide(PARETO_SUBPATH, serverClientParetoIndex),
                footnote: getFootnoteForSlide(
                    PARETO_SUBPATH,
                    serverClientParetoIndex,
                ),
            }}
        />
    )
}

ParetoPromo.propTypes = {
    serverClientParetoIndex: PropTypes.number.isRequired,
    handlePromoPageChange: PropTypes.func.isRequired,
}

export default getPromoServerClientHoc(ParetoPromo)
