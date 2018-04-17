// Container to show a single dot.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon2 from '../Icon/Icon2'

const dotPropTypes = {

    // From parent.
    dotKey: PropTypes.string.isRequired,
    inAnnotationCardSequence: PropTypes.bool,
    inTextAnchor: PropTypes.bool
},

Dot = ({

    dotKey,

    /**
     * Specify it's in a dot sequence to distinguish from portal, which is
     * technically in an annotation card as well.
     */
    inAnnotationCardSequence,

    inTextAnchor

}) => (
    <Icon2
        className={cx(
            'Dot',
            `Dot__${dotKey}`,
            `bgColour__${dotKey}`,
            inTextAnchor && 'Dot__textAnchor',
            inAnnotationCardSequence && 'Dot__annotationCard__sequence'
        )}
    />
)

Dot.propTypes = dotPropTypes

export default Dot
