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
    inAnnotationCard: PropTypes.bool,
    inTextAnchor: PropTypes.bool
},

DotSequenceDot = ({

    dotKey,
    inAnnotationCard,
    inTextAnchor

}) => (
    <Dot className={cx(
        'SequenceDot',
        'bgColour__dot',
        `bgColour__dot__${dotKey}`,
        `styleIf__${dotKey}`,
        inTextAnchor && 'SequenceDot__textAnchor',
        inAnnotationCard && 'SequenceDot__annotationCard'
    )} />
)

DotSequenceDot.propTypes = dotPropTypes

export default DotSequenceDot
