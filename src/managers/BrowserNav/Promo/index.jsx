import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { reloadRootPage } from '../../../helpers/navigate'
import { updatePromo } from '../../../redux/promo/action'
import { getWindow } from '../../../utils/browser'
import { getTrimmedPathname } from '../../../utils/gatsby/path'
import { getIsPromoPath } from '../../../utils/gatsby/promo'
import { getRoutingPitchIndex, getRoutingPromoKey } from '../../../utils/gatsby/routing'

const PromoBrowserNavManager = () => {
    const dispatch = useDispatch()

    const browseBackToPromo = pathname => {
        const
            routingPromoKey = getRoutingPromoKey(pathname),
            routingPitchIndex = getRoutingPitchIndex(
                routingPromoKey,
                pathname,
            )
        dispatch(updatePromo({
            selectedPromoKey: routingPromoKey,
            ...Number.isFinite(routingPitchIndex) && {
                pitchSlideIndex: routingPitchIndex,
            },
            bypassNavigation: true,
        }))
    }

    useEffect(() => {
        getWindow().onpopstate = () => {
            const
                { pathname: rawPathname, search } = getWindow().location,
                pathname = getTrimmedPathname(rawPathname)

            logGeneral(`Browser navigated back to path: ${pathname}${search ? `/${search}` : ''}`)

            if (getIsPromoPath(pathname)) {
                browseBackToPromo(pathname)
            } else {
                reloadRootPage()
            }
        }

        return () => {
            getWindow().onpopstate = null
        }
    }, [])

    return null
}

export default PromoBrowserNavManager
