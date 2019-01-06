import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool.isRequired,
        isDotAnchor: PropTypes.bool,
        isWikiAnchor: PropTypes.bool,
        isWikiFirstChild: PropTypes.bool,
        isWikiLastChild: PropTypes.bool
    },

    Underline = memo(({

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
                    'gradientMask__underline',

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

                    isAccessed && !isSelected && 'Underline__accessed',
                )
            }}
        >
            <Svg
                className={cx(
                    'Underline__bar',
                    'Underline__bar__default',
                    isSelected &&
                    'Underline__bar__selected',
                    'abF'
                )}
            />
            <Svg
                className={cx(
                    'Underline__bar',
                    'Underline__bar__accessed',
                    isSelected &&
                    'Underline__bar__selected',
                    'abF'
                )}
            />
        </div>
    ))

Underline.propTypes = propTypes

export default Underline
