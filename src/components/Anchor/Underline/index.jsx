import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import './style'

const Underline = ({
    didMount,
    isAccessed,
    isSelected,
    isDotAnchor,
    isWikiAnchor,
    isWikiFirstChild,
    isWikiLastChild,

}) => didMount && (
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

                'ovH',
            ),
        }}
    />
)

Underline.propTypes = {
    didMount: PropTypes.bool.isRequired,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDotAnchor: PropTypes.bool,
    isWikiAnchor: PropTypes.bool,
    isWikiFirstChild: PropTypes.bool,
    isWikiLastChild: PropTypes.bool,
}

export default memo(getDidMountHoc(Underline))
