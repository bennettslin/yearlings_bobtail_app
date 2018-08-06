import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Anchor from '../Anchor';
import Dot from '../../Dot/Dot';

import { ALL_DOT_KEYS } from 'constants/dots'

const propTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    inAnnotation: PropTypes.bool,
    inStanza: PropTypes.bool,
    stanzaDotKeys: PropTypes.object.isRequired
},

DotAnchor = ({

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

                        // "Child dot anchor letter."
                        `CdA${dotKey[0]}`
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

DotAnchor.propTypes = propTypes

export default DotAnchor
