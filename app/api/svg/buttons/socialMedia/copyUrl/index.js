import copyUrl from '../../../../../../assets/svgs/app/socialMedia/copyUrl'
import copyUrlCopied from '../../../../../../assets/svgs/app/socialMedia/copyUrlCopied'

const COPY_URL_MAP = {
    [false]: copyUrl,
    [true]: copyUrlCopied,
}

export default ({ buttonIdentifier: isCopiedUrl }) => {
    return COPY_URL_MAP[isCopiedUrl]
}
