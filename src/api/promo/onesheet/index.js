import { getPromo } from '../../builds'

const { onesheet } = getPromo()

export const getBodyForOnesheet = () => (
    onesheet.body
)
