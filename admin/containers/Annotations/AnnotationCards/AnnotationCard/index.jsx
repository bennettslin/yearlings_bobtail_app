// Component to show individual annotation note or all wormholes.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Texts from '../../../../../app/components/Texts'
import { ORDERED_DOT_KEYS } from '../../../../../app/constants/dots'

const AnnotationCard = ({ card }) => {
    const {
        description,
        dotKeys = {}
    } = card

    return (
        <div className="TempGlobalAnnotationCard">
            <div className="TempGlobalAnnotationCard__dotKeys">
                {ORDERED_DOT_KEYS.filter(dotKey => (
                    dotKeys[dotKey]
                )).join(', ')}
            </div>
            <Texts {...{ text: description }} />
        </div>
    )
}

AnnotationCard.propTypes = {
    card: PropTypes.any.isRequired
}

export default memo(AnnotationCard)
