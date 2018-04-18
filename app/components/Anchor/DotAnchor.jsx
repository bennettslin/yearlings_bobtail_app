import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from './Anchor';

import { getPrefixPrependedClassNames } from '../../helpers/domHelper'

const textAnchorPropTypes = {
    // From parent.
    isSelected: PropTypes.bool,
    inAnnotation: PropTypes.bool,
    inStanza: PropTypes.bool,
    dotKeys: PropTypes.object.isRequired
},

TextAnchor = ({

    dotKeys,
    inAnnotation,
    inStanza,

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

            inAnnotation && 'DotAnchor__inAnnotation',
            inStanza && 'DotAnchor__inStanza',

            getPrefixPrependedClassNames(dotKeys, 'DotAnchor')
        )} />

    </Anchor>
)

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
