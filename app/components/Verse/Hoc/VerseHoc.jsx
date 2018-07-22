import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const propTypes = {
    // From parent.
    verseIndex: PropTypes.number,
    VerseComponent: PropTypes.func.isRequired
},

VerseHoc = ({

    verseIndex,
    VerseComponent,

...other }) => {

    const hasVerseIndex = !isNaN(verseIndex),

        logicSelectors = hasVerseIndex && cx(
            // "Child component verse index."
            `ChV${verseIndex}`,
            'ChV'
        )

    return (
        <VerseComponent {...other}
            {...hasVerseIndex && {
                verseIndex,
                logicSelectors
            }}
        />
    )
}

VerseHoc.propTypes = propTypes

export default VerseHoc
