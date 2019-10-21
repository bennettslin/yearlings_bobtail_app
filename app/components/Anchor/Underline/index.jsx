import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool.isRequired,
        isDotAnchor: PropTypes.bool,
        isWikiAnchor: PropTypes.bool,
        isWikiFirstChild: PropTypes.bool,
        isWikiLastChild: PropTypes.bool
    },

    Underline = ({
        isAccessed,
        isSelected,
        isDotAnchor,
        isWikiAnchor,
        isWikiFirstChild,
        isWikiLastChild
    }) => (
        <div
            {...{
                className: cx(
                    'Underline',

                    isDotAnchor && 'Underline__isDot',
                    !isWikiAnchor && 'Underline__isNotWiki',

                    isWikiAnchor && isWikiFirstChild &&
                        'Underline__isWiki__firstChild',
                    isWikiAnchor && !isWikiFirstChild &&
                        'Underline__isWiki__notFirstChild',
                    isWikiAnchor && isWikiLastChild &&
                        'Underline__isWiki__lastChild',
                    isWikiAnchor && !isWikiLastChild &&
                        'Underline__isWiki__notLastChild',

                    isAccessed && !isSelected ?
                        'Underline__accessed' :
                        'Underline__default',

                    isSelected &&
                        'Underline__selected',

                    'ovH'
                )
            }}
        />
    )

Underline.propTypes = propTypes

export default memo(Underline)
