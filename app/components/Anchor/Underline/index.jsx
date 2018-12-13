import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../Svg'

const propTypes = {
    // From parent.
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool.isRequired,
        isDotAnchor: PropTypes.bool,
        isWikiAnchor: PropTypes.bool
    },

    Underline = memo(({

        isAccessed,
        isSelected,
        isDotAnchor,
        isWikiAnchor

    }) => (
        <div
            className={cx(
                'Underline',
                'gradientMask__underline',

                isDotAnchor && 'Underline__isDot',
                isWikiAnchor ?
                    'Underline__isWiki' :
                    'Underline__isNotWiki',

                isAccessed && !isSelected && 'Underline__accessed',
            )}
        >
            <Svg
                className={cx(
                    'Underline__bar',
                    'Underline__bar__default',
                    isSelected &&
                    'Underline__bar__selected',
                    'absoluteFullContainer'
                )}
            />
            <Svg
                className={cx(
                    'Underline__bar',
                    'Underline__bar__accessed',
                    isSelected &&
                    'Underline__bar__selected',
                    'absoluteFullContainer'
                )}
            />
        </div>
    ))

Underline.propTypes = propTypes

export default Underline
