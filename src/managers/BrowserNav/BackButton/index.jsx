import { useEffect } from 'react'
import { getWindow } from '../../../utils/browser'
import { getIsAlbumSongPath } from '../../../utils/gatsby/album'
import { getTrimmedPathname } from '../../../utils/gatsby/path'
import { getIsPromoPath } from '../../../utils/gatsby/promo'

const BackButtonManager = () => {
    useEffect(() => {
        getWindow().onpopstate = () => {
            const
                { pathname: rawPathname } = getWindow().location,
                pathname = getTrimmedPathname(rawPathname)

            logAdmin(`on pop state: ${pathname}`)
            console.log(getWindow().location)

            if (getIsAlbumSongPath(pathname)) {
                console.log('tis an album page')
            } else if (getIsPromoPath(pathname)) {
                console.log('tis a promo page')
            }
        }

        return () => {
            getWindow().onpopstate = null
        }
    }, [])

    return null
}

BackButtonManager.propTypes = {
}

export default BackButtonManager
