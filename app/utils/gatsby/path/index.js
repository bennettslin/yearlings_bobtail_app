import qs from 'qs'
import { getWindow } from '../../browser'

export const getIndexFromPath = ({ pathname, rootPath }) => (
    parseInt(
        pathname
            .replace(rootPath ? `${rootPath}/` : '', '')
            .split('-')[0],
    )
)

export const getIndexFromQueryString = (search, keys) => (
    search ?
        keys.reduce((valueIndex, key) => (
            valueIndex ||
            parseInt(qs.parse(search, { ignoreQueryPrefix: true })[key])
        ), NaN) :
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
        pathname: _getPathname(
            rootElementPathname ||
            pageElementPathname ||
            windowPathname,
        ),
        search: windowSearch,
    }
}
