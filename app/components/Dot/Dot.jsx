// Container to show a single dot.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon/Icon'

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
    <div className={cx(
        'Dot',
        `bgColour__dot__${dotKey}`,
        inTextAnchor && 'Dot__textAnchor',
        inAnnotationCardSequence && 'Dot__annotationCard__sequence'
    )}>
        <Icon dotKey={dotKey} />
    </div>
)

Dot.propTypes = dotPropTypes

export default Dot
