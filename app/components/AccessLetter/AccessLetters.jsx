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
    showIfAccessed: PropTypes.bool,
    accessKeys: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired
},

AccessLetters = ({

    accessIconsName,
    inAnnotation,
    inLyric,
    inSlider,
    showIfAccessed,
    accessKeys

}) => (
    <div className={cx(
        'AccessLetters',

        inAnnotation ?
            'AccessLetters__inAnnotation' :
            'AccessLetters__absolute',

        inLyric && 'AccessLetters__inLyric',
        inSlider && 'AccessLetters__inSlider',

        accessIconsName && `AccessLetters__${accessIconsName}`
    )}>
        {accessKeys.map(accessKey => {

            return (
                <AccessLetter
                    animateStandaloneOnKeyDown
                    key={accessKey}
                    accessKey={accessKey}
                    showIfAccessed={showIfAccessed}
                />
            )
        })}
    </div>
)

AccessLetters.propTypes = accessIconsPropTypes

export default AccessLetters
