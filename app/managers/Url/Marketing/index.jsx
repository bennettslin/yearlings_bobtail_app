import { forwardRef, useEffect, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import {
    mapArtupSlideIndex,
    mapSelectedPromoPath,
} from '../../../redux/marketing/selector'
import {
    navigateToArtupPage,
    navigateToPathname,
} from '../../../helpers/navigate'
import {
    getIsArtupPage,
    getIsOnesheetPage,
    getIsPromoHomepage,
} from '../../../helpers/marketing'
import { getOnesheetFullPath } from '../../../utils/gatsby/marketing'
import { PROMO_PATH } from '../../../constants/routing'

const MarketingUrlManager = forwardRef(({ verifyBeforeNavigation }, ref) => {
    const
        artupSlideIndex = useSelector(mapArtupSlideIndex),
        selectedPromoPath = useSelector(mapSelectedPromoPath)

    const navigateToMarketingPage = () => {
        if (getIsPromoHomepage(selectedPromoPath)) {
            navigateToPathname(PROMO_PATH)
        } else if (getIsOnesheetPage(selectedPromoPath)) {
            navigateToPathname(getOnesheetFullPath())
        } else if (getIsArtupPage(selectedPromoPath)) {
            navigateToArtupPage(artupSlideIndex)
        }
    }

    useEffect(() => {
        // If in album, this will need to check if marketing popup is shown.
        if (verifyBeforeNavigation) {
            verifyBeforeNavigation(navigateToMarketingPage)

        // If in marketing container, go ahead and navigate right away.
        } else {
            navigateToMarketingPage()
        }
    }, [artupSlideIndex, selectedPromoPath])

    useImperativeHandle(ref, () => navigateToMarketingPage)

    return null
})

MarketingUrlManager.propTypes = {
    verifyBeforeNavigation: PropTypes.func,
}

export default MarketingUrlManager
