import { getPromo } from '../../builds'

const { onesheet } = getPromo()

export const getTitleForOnesheet = () => (
    onesheet.title
)

export const getBodyForOnesheet = () => (
    onesheet.body
)
