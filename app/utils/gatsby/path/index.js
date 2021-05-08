import qs from 'qs'
import { getWindow } from '../../browser'

export const getIndexFromPath = pathname => (
    // Remove all non-digits.
    parseInt(pathname.replace(/\D/g, ''))
)

export const getIndexFromQueryString = (search, key) => (
    search ?
        parseInt(qs.parse(search, { ignoreQueryPrefix: true })[key]) :
        NaN
)

const _getPathname = (pathname = '') => (
    pathname
        // Split by slashes and remove empty strings.
        .split('/')
        .filter(name => Boolean(name))
        // Get rid of beginning and end slashes.
        .join('/')
)

export const getParsedLocation = ({
    props: {
        location: {
            pathname: elementPathname,
            search: elementSearch,
        } = {},
    } = {},
} = {}) => {
    const {
        location: {
            pathname: windowPathname,
            search: windowSearch,
        } = {},
    } = getWindow()

    return {
        pathname: _getPathname(elementPathname || windowPathname),
        search: elementSearch || windowSearch,
    }
}
