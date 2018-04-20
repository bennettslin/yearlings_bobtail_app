/**
 * Component for a single dot in a sequence. Animates in and out based on
 * whether its dot key is selected.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Dot from '../Dot/Dot'

const dotPropTypes = {

    // From parent.
    dotKey: PropTypes.string.isRequired,
    inAnnotationCardSequence: PropTypes.bool,
    inTextAnchor: PropTypes.bool
},

DotSequenceDot = ({

    dotKey,

    /**
     * Specify it's in a dot sequence to distinguish from portal, which is
     * technically in an annotation card as well.
     */
    inAnnotationCardSequence,

    inTextAnchor

}) => (
    <Dot
        className={cx(
            'SequenceDot',
            'bgColour__dot',
            `bgColour__dot__${dotKey}`,
            `styleIf__sequenceDot__${dotKey}`,
            inTextAnchor && 'SequenceDot__textAnchor',
            inAnnotationCardSequence && 'SequenceDot__annotationCard'
        )}
    />
)

DotSequenceDot.propTypes = dotPropTypes

export default DotSequenceDot
