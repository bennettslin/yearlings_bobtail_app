// Container to show multiple access icons in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AccessIcon from './AccessIcon';

const accessIconsPropTypes = {
    // From parent.
    accessIconsName: PropTypes.string,
    inAnnotation: PropTypes.bool,
    inLyric: PropTypes.bool,
    inSlider: PropTypes.bool,
    accessKeys: PropTypes.arrayOf(
        PropTypes.shape({
            accessKey: PropTypes.string.isRequired,
            showIfAccessed: PropTypes.bool.isRequired,
            beginsCluster: PropTypes.bool
        })
    ).isRequired
},

AccessIcons = ({

    accessIconsName,
    inAnnotation,
    inLyric,
    inSlider,
    accessKeys

}) => (
    <div className={cx(
        'AccessIcons',
        inAnnotation && 'AccessIcons__inAnnotation',
        inLyric && 'AccessIcons__inLyric',
        inSlider && 'AccessIcons__inSlider',
        accessIconsName && `AccessIcons__${accessIconsName}`
    )}>
        {accessKeys.map(accessKeyObject => {

            const { accessKey,
                    showIfAccessed,
                    beginsCluster } = accessKeyObject

            return (
                <AccessIcon
                    key={accessKey}
                    accessKey={accessKey}
                    showIfAccessed={showIfAccessed}
                    beginsCluster={beginsCluster}
                />
            )
        })}
    </div>
)

AccessIcons.propTypes = accessIconsPropTypes

export default AccessIcons
