// Container to show multiple access icons in sequence.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AccessLetter from '../Letter'

const propTypes = {
        // From parent.
        accessIconsName: PropTypes.string,
        inAnnotation: PropTypes.bool,
        inLyric: PropTypes.bool,
        inSlider: PropTypes.bool,
        isShadow: PropTypes.bool,
        showIfAccessed: PropTypes.bool,
        accessKeys: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired
    },

    AccessLetters = memo(({

        accessIconsName,
        inAnnotation,
        inLyric,
        inSlider,
        isShadow,
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
                        key={accessKey}
                        animateStandaloneOnKeyDown
                        {...{
                            accessKey,
                            isShadow,
                            showIfAccessed
                        }}
                    />
                )
            })}
        </div>
    ))

AccessLetters.propTypes = propTypes

export default AccessLetters
