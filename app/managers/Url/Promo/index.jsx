import { forwardRef, useEffect, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
    mapArtupSlideIndex,
    mapArtup2SlideIndex,
    mapSelectedPromoKey,
} from '../../../redux/promo/selector'
import {
    navigateToArtupPage,
    navigateToArtup2Page,
    navigateToPathname,
} from '../../../helpers/navigate'
import {
    getIsArtupPage,
    getIsArtup2Page,
} from '../../../helpers/promo'
import { getPromoPath } from '../../../utils/gatsby/promo'

const PromoUrlManager = forwardRef(({ verifyBeforeNavigation }, ref) => {
    const
        artupSlideIndex = useSelector(mapArtupSlideIndex),
        artup2SlideIndex = useSelector(mapArtup2SlideIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const navigateToPromoPage = () => {
        if (getIsArtupPage(selectedPromoKey)) {
            navigateToArtupPage(artupSlideIndex)
        } else if (getIsArtup2Page(selectedPromoKey)) {
            navigateToArtup2Page(artup2SlideIndex)
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
    }, [artupSlideIndex, artup2SlideIndex, selectedPromoKey])

    useImperativeHandle(ref, () => navigateToPromoPage)

    return null
})

PromoUrlManager.propTypes = {
    verifyBeforeNavigation: PropTypes.func,
}

export default PromoUrlManager
