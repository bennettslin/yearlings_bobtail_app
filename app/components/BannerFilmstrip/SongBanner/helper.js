import { getElementRatioForClientX } from '../../../helpers/dom'
import { getVerseIndexforRatio } from '../../../helpers/verse'

export const getVerseIndexFromClientX = ({
    clientX,
    songBannerElement,
    selectedSongIndex,
}) => {
    if (Number.isFinite(clientX)) {
        const
            {
                left,
                width,
            } = songBannerElement.current.getBoundingClientRect(),
            bannerRatio = getElementRatioForClientX({
                clientX,
                elementLeft: left,
                elementWidth: width,
            })

        return getVerseIndexforRatio(
            selectedSongIndex,
            bannerRatio
        )
    }

    return -1
}
