import { forwardRef, useEffect, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
    mapArtupSlideIndex,
    mapSelectedPromoKey,
} from '../../../redux/promo/selector'
import {
    navigateToArtupPage,
    navigateToPathname,
} from '../../../helpers/navigate'
import {
    getIsArtupPage,
    getIsOnesheetPage,
    getIsPromoHomepage,
} from '../../../helpers/promo'
import { getOnesheetFullPath } from '../../../utils/gatsby/promo'
import { PROMO_PATH } from '../../../constants/routing'

const PromoUrlManager = forwardRef(({ verifyBeforeNavigation }, ref) => {
    const
        artupSlideIndex = useSelector(mapArtupSlideIndex),
        selectedPromoKey = useSelector(mapSelectedPromoKey)

    const navigateToPromoPage = () => {
        if (getIsPromoHomepage(selectedPromoKey)) {
            navigateToPathname(PROMO_PATH)
        } else if (getIsOnesheetPage(selectedPromoKey)) {
            navigateToPathname(getOnesheetFullPath())
        } else if (getIsArtupPage(selectedPromoKey)) {
            navigateToArtupPage(artupSlideIndex)
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
    }, [artupSlideIndex, selectedPromoKey])

    useImperativeHandle(ref, () => navigateToPromoPage)

    return null
})

PromoUrlManager.propTypes = {
    verifyBeforeNavigation: PropTypes.func,
}

export default PromoUrlManager