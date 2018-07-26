// Container to show multiple access icons in sequence.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AccessLetter from './AccessLetter';

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

AccessLetters = ({

    accessIconsName,
    inAnnotation,
    inLyric,
    inSlider,
    accessKeys

}) => (
    <div className={cx(
        'AccessLetters',
        inAnnotation && 'AccessLetters__inAnnotation',
        inLyric && 'AccessLetters__inLyric',
        inSlider && 'AccessLetters__inSlider',
        accessIconsName && `AccessLetters__${accessIconsName}`
    )}>
        {accessKeys.map(accessKeyObject => {

            const { accessKey,
                    showIfAccessed,
                    beginsCluster } = accessKeyObject

            return (
                <AccessLetter
                    key={accessKey}
                    accessKey={accessKey}
                    showIfAccessed={showIfAccessed}
                    beginsCluster={beginsCluster}
                />
            )
        })}
    </div>
)

AccessLetters.propTypes = accessIconsPropTypes

export default AccessLetters
