import qs from 'qs'
import { getWindow } from '../../browser'

export const getIndexFromPath = ({ pathname, rootPath }) => (
    /**
     * If it's an album page, it won't have a root path. If it's a promo page,
     * make sure we set the index only for that promo page.
     */
    !rootPath || pathname.includes(rootPath) ?
        parseInt(
            pathname
                .replace(rootPath ? `${rootPath}/` : '', '')
                .split('-')[0],
        ) :
        NaN
)

export const getIndexFromQueryString = (search, keys) => (
    search ?
        keys.reduce((valueIndex, key) => (
            valueIndex ||
            parseInt(qs.parse(search, { ignoreQueryPrefix: true })[key])
        ), NaN) :
        NaN
)

export const getTrimmedPathname = (pathname = '') => (
    pathname
        // Split by slashes and remove empty strings.
        .split('/')
        .filter(name => Boolean(name))
        // Get rid of beginning and end slashes.
        .join('/')
)

export const getParsedLocation = ({
    props: {
        url: rootElementPathname,
        location: {
            pathname: pageElementPathname,
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
        pathname: getTrimmedPathname(
            rootElementPathname ||
            pageElementPathname ||
            windowPathname,
        ),
        search: windowSearch,
    }
}
