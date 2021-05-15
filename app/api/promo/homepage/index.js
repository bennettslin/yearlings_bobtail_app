import { getPromo } from '../../builds'

const { homepage } = getPromo()

export const getTitleForHomepage = () => (
    homepage.title
)

export const getBodyForHomepage = () => (
    homepage.body
)
