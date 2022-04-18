import { forwardRef, useEffect, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
    getMapPitchSlideIndex,
    mapSelectedPromoKey,
} from '../../../redux/promo/selector'
import {
    navigateToPathname,
    navigateToPitchPage,
} from '../../../helpers/navigate'
import { getIsArtupPage, getIsParetoPage } from '../../../helpers/promo'
import { getPromoPath } from '../../../utils/gatsby/promo'
import { ARTUP_SUBPATH, PARETO_SUBPATH } from '../../../constants/routing'

const PromoUrlManager = forwardRef(({ verifyBeforeNavigation }, ref) => {
    const
        artupSlideIndex = useSelector(getMapPitchSlideIndex(ARTUP_SUBPATH)),
        paretoSlideIndex = useSelector(getMapPitchSlideIndex(PARETO_SUBPATH)),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const navigateToPromoPage = () => {
        if (getIsArtupPage(selectedPromoKey)) {
            navigateToPitchPage(ARTUP_SUBPATH, artupSlideIndex)
        } else if (getIsParetoPage(selectedPromoKey)) {
            navigateToPitchPage(PARETO_SUBPATH, paretoSlideIndex)
        } else {
            navigateToPathname(getPromoPath(selectedPromoKey))
        }
    }

    useEffect(() => {
        // If in album, this will need to check if promo popup is shown.
        if (verifyBeforeNavigation) {
            verifyBeforeNavigation(navigateToPromoPage)

        // If in promo container, go ahead and navigate right away.
        } else {
            navigateToPromoPage()
        }
    }, [artupSlideIndex, paretoSlideIndex, selectedPromoKey])

    useImperativeHandle(ref, () => navigateToPromoPage)

    return null
})

PromoUrlManager.propTypes = {
    verifyBeforeNavigation: PropTypes.func,
}

export default PromoUrlManager
