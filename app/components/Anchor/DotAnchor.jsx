import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from './Anchor';

import { getPrefixPrependedClassNames } from '../../helpers/domHelper'

const textAnchorPropTypes = {
    // From parent.
    isSelected: PropTypes.bool,
    dotKeys: PropTypes.object.isRequired
},

TextAnchor = ({

    dotKeys,

...other }) => (

    <Anchor {...other}
        isDotAnchor
    >

        <div className={cx(
            'Dot',
            'DotAnchor',
            other.isSelected ?
                'DotAnchor__selected' :
                'DotAnchor__selectable',
            getPrefixPrependedClassNames(dotKeys, 'DotAnchor')
        )} />

    </Anchor>
)

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
