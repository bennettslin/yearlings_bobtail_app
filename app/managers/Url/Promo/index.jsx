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
    getIsOnesheetPage,
    getIsPromoHomepage,
} from '../../../helpers/promo'
import { getOnesheetFullPath } from '../../../utils/gatsby/promo'
import { PROMO_PATH } from '../../../constants/routing'

const PromoUrlManager = forwardRef(({ verifyBeforeNavigation }, ref) => {
    const
        artupSlideIndex = useSelector(mapArtupSlideIndex),
        artup2SlideIndex = useSelector(mapArtup2SlideIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const navigateToPromoPage = () => {
        if (getIsPromoHomepage(selectedPromoKey)) {
            navigateToPathname(PROMO_PATH)
        } else if (getIsOnesheetPage(selectedPromoKey)) {
            navigateToPathname(getOnesheetFullPath())
        } else if (getIsArtupPage(selectedPromoKey)) {
            navigateToArtupPage(artupSlideIndex)
        } else if (getIsArtup2Page(selectedPromoKey)) {
            navigateToArtup2Page(artup2SlideIndex)
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
