import PropTypes from 'prop-types'

import { getStaticStyleStringForIndex } from '../Static/helper'

const propTypes = {
    indices: PropTypes.array.isRequired,
    childPrefix: PropTypes.string.isRequired,
    getStyle: PropTypes.func.isRequired
}

const DynamicStylesheet = ({
    indices,
    childPrefix,
    getStyle

}) => (
    indices.map(index => (
        getStaticStyleStringForIndex({
            index,
            childPrefix,
            style: getStyle(index)
        })
    )).join('')
)

DynamicStylesheet.propTypes = propTypes

export default DynamicStylesheet
