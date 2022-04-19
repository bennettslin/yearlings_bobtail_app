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
import { getIsPitchPage } from '../../../helpers/promo'
import { getPromoPath } from '../../../utils/gatsby/promo'

const PromoUrlManager = forwardRef(({ verifyBeforeNavigation }, ref) => {
    const
        selectedPromoKey = useSelector(mapSelectedPromoKey),
        pitchSlideIndex = useSelector(getMapPitchSlideIndex(selectedPromoKey))

    const navigateToPromoPage = () => {
        if (getIsPitchPage(selectedPromoKey)) {
            navigateToPitchPage(selectedPromoKey, pitchSlideIndex)
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
    }, [pitchSlideIndex, selectedPromoKey])

    useImperativeHandle(ref, () => navigateToPromoPage)

    return null
})

PromoUrlManager.propTypes = {
    verifyBeforeNavigation: PropTypes.func,
}

export default PromoUrlManager
