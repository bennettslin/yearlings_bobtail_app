import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AfterwordField from './Fields/AfterwordField'
import BackstoryField from './Fields/BackstoryField'
import NarrativeField from './Fields/NarrativeField'
import ObservationField from './Fields/ObservationField'
import WormholeField from './Fields/WormholeField'
import PunField from './Fields/PunField'
import ReferenceField from './Fields/ReferenceField'
import SongwritingField from './Fields/SongwritingField'

import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    WORMHOLE,
    PUN,
    REFERENCE,
    SONGWRITING
} from 'constants/dots'

const DOT_FIELDS_MAP = {
    [AFTERWORD]: AfterwordField,
    [BACKSTORY]: BackstoryField,
    [NARRATIVE]: NarrativeField,
    [OBSERVATION]: ObservationField,
    [WORMHOLE]: WormholeField,
    [PUN]: PunField,
    [REFERENCE]: ReferenceField,
    [SONGWRITING]: SongwritingField
}

const propTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDeselected: PropTypes.bool,
    dotKey: PropTypes.string.isRequired
},

DotField = ({

    isAccessed,

    // Applies to selectable dots.
    isSelected,

    // Applies to slide dots.
    isDeselected,

    dotKey

}) => {

    const FieldComponent = DOT_FIELDS_MAP[dotKey]

    return (
            <FieldComponent
                className={cx(
                    'DotField',
                    `DotField__${dotKey}`,

                    // These will override the default colour.
                    isAccessed && `DotField__accessed`,
                    isSelected && `DotField__selected`,

                    // Only used by DotsSlideSelect.
                    isDeselected && `DotField__dotsSlide__deselected`
                )}
            />
    )
}

DotField.propTypes = propTypes

export default DotField
