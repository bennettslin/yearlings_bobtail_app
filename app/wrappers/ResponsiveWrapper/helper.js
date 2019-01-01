import { EAR_COLUMN_KEYS } from 'constants/lyrics'

export const getSingleShownEarColumnKey = ({
    isEarShown,
    earColumnIndex
}) => {
    return isEarShown
        && earColumnIndex >= 0 ?
        EAR_COLUMN_KEYS[earColumnIndex % 2] : ''
}
