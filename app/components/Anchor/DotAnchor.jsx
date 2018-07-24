import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from './Anchor';
import Dot from '../Dot/Dot';

import { getPrefixedDotLetterClassNames } from '../../helpers/dotHelper'
import { ALL_DOT_KEYS } from '../../constants/dots'

const textAnchorPropTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    inAnnotation: PropTypes.bool,
    inStanza: PropTypes.bool,
    stanzaDotKeys: PropTypes.object.isRequired
},

TextAnchor = ({

    stanzaDotKeys,
    inAnnotation,
    inStanza,

...other }) => {

    const { isAccessed,
            isSelected } = other

    return (
        <Anchor {...other}
            isDotAnchor
        >
            {ALL_DOT_KEYS.map(dotKey => stanzaDotKeys[dotKey] && (
                <Dot
                    key={dotKey}
                    className={cx(
                        'DotAnchor',

                        isAccessed && !isSelected && 'DotAnchor__accessed',
                        !isSelected  && 'DotAnchor__selectable',

                        inAnnotation && 'DotAnchor__inAnnotation',
                        inStanza && 'DotAnchor__inStanza',

                        getPrefixedDotLetterClassNames(
                            stanzaDotKeys,
                            // "Child dot anchor letter."
                            'CdA'
                        )
                    )}
                    {...{
                        dotKey,
                        isAccessed,
                        isSelected
                    }}
                />
            ))}
        </Anchor>
    )
}

TextAnchor.propTypes = textAnchorPropTypes

export default TextAnchor
