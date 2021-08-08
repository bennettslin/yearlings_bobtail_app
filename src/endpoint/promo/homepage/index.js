import { getPromo } from '../../builds'

const { homepage } = getPromo()

export const getBodyForHomepage = () => (
    homepage.body
)
