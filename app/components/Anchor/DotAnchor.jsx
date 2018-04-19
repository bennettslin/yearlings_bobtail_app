import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from './Anchor';
import Dot from '../Dot/Dot';

import { getPrefixPrependedClassNames } from '../../helpers/domHelper'

const textAnchorPropTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    inAnnotation: PropTypes.bool,
    inStanza: PropTypes.bool,
    dotKeys: PropTypes.object.isRequired
},

TextAnchor = ({

    dotKeys,
    inAnnotation,
    inStanza,

...other }) => {

    const { isAccessed,
            isSelected } = other

    return (
        <Anchor {...other}
            isDotAnchor
        >
            <Dot className={cx(
                'DotAnchor',

                isAccessed && !isSelected && 'DotAnchor__accessed',

                isSelected ?
                    'DotAnchor__selected' :
                    'DotAnchor__selectable',

                inAnnotation && 'DotAnchor__inAnnotation',
                inStanza && 'DotAnchor__inStanza',

                // Only colour dot anchor by its key when selectable.
                !other.isSelected &&
                    getPrefixPrependedClassNames(dotKeys, 'DotAnchor')
            )} />
        </Anchor>
    )
}

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
