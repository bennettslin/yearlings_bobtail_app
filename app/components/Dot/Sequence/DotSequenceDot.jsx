/**
 * Component for a single dot in a sequence. Animates in and out based on
 * whether its dot key is selected.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Dot from 'components/Dot/Dot'

const dotPropTypes = {

    // From parent.
    dotKey: PropTypes.string.isRequired,
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool
},

DotSequenceDot = ({

    dotKey,
    inAnnotationCard,
    inTextAnchor,

...other }) => (
    <Dot {...other}
        showFieldOnly
        className={cx(
            'SequenceDot',

            // "Child dot sequence letter."
            `ChQ${dotKey[0]}`,

            inTextAnchor && 'SequenceDot__textAnchor',
            inAnnotationCard && 'SequenceDot__annotationCard'
        )}
        {...{
            dotKey
        }}
    />
)

DotSequenceDot.propTypes = dotPropTypes

export default DotSequenceDot
