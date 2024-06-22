import React from 'react'
import PropTypes from 'prop-types'
import Texts from '../../../../../../../src/components/Texts'
import getDidMountHoc from '../../../../../../../src/hocs/DidMountHoc'
import {
    getDescriptionForAnnotationCard,
    getDotsBitForAnnotationCard,
} from '../../../../../../../src/endpoint/album/cards'
import DotSequence from '../../../../../../../src/components/DotSequence'
import { FULL_DOTS_BIT } from '../../../../../../../src/constants/dots'

const AnnotationCard = ({
    didMount,
    songIndex,
    annotationIndex,
    cardIndex,

}) => {
    const
        description = getDescriptionForAnnotationCard(
            songIndex,
            annotationIndex,
            cardIndex,
        ),
        dotsBit = getDotsBitForAnnotationCard(
            songIndex,
            annotationIndex,
            cardIndex,
        )

    return didMount && (
        <div className="TodoAnnotationCard">
            <DotSequence
                inAnnotationCard
                {...{
                    dotsBit,
                    selectedDotsBit: FULL_DOTS_BIT,
                }}
            />
            {description && (
                <div className="TodoAnnotationCard__description">
                    <Texts {...{ songIndex, text: description }} />
                </div>
            )}
        </div>
    )
}

AnnotationCard.propTypes = {
    didMount: PropTypes.bool.isRequired,
    songIndex: PropTypes.number.isRequired,
    annotationIndex: PropTypes.number.isRequired,
    cardIndex: PropTypes.number.isRequired,
}

export default getDidMountHoc(AnnotationCard)
