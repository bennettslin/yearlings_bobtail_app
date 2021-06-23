import { getPromoUrl, getSongUrl } from '../../../helpers/url'

export const copyUrlToClipboard = ({
    songIndex,
    annotationIndex,
    promoKey,
    isPromoPage,
}) => {
    const urlText = isPromoPage ?
        getPromoUrl(promoKey) :
        getSongUrl({
            songIndex,
            annotationIndex,
        })

    navigator.clipboard.writeText(urlText)
}
