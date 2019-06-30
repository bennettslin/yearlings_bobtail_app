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

                    /**
                     * This used to be a child component. In hindsight, that
                     * wasn't necessary.
                     */
                    'Underline__bar',

                    isAccessed && !isSelected ?
                        'Underline__bar__accessed' :
                        'Underline__bar__default',

                    isSelected &&
                        'Underline__bar__selected',

                    'ovH'
                )
            }}
        >
        </div>
    )

Underline.propTypes = propTypes

export default memo(Underline)
