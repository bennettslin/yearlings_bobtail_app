import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AfterwordIcon from './Icons/Afterword'
import BackstoryIcon from './Icons/Backstory'
import NarrativeIcon from './Icons/Narrative'
import ObservationIcon from './Icons/Observation'
import PunIcon from './Icons/Pun'
import ReferenceIcon from './Icons/Reference'
import SongwritingIcon from './Icons/Songwriting'
import WormholeIcon from './Icons/Wormhole'

import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING,
    WORMHOLE
} from 'constants/dots'

const DOT_ICONS_MAP = {
    [AFTERWORD]: AfterwordIcon,
    [BACKSTORY]: BackstoryIcon,
    [NARRATIVE]: NarrativeIcon,
    [OBSERVATION]: ObservationIcon,
    [PUN]: PunIcon,
    [REFERENCE]: ReferenceIcon,
    [SONGWRITING]: SongwritingIcon,
    [WORMHOLE]: WormholeIcon
}

const propTypes = {
    // From parent.
        isAccessed: PropTypes.bool,
        isSelected: PropTypes.bool,
        isDeselected: PropTypes.bool,
        dotKey: PropTypes.string.isRequired
    },

    DotIcon = ({

        isAccessed,

        // Applies to selectable dots.
        isSelected,

        // Applies to slide dots.
        isDeselected,

        dotKey

    }) => {

        const IconComponent = DOT_ICONS_MAP[dotKey]

        return (
            <IconComponent
                className={cx(
                    'DotIcon',
                    `DotIcon__${dotKey}`,

                    // These will override the default colour.
                    isAccessed && `DotIcon__accessed`,
                    isSelected && `DotIcon__selected`,

                    // Only used by DotsSlideSelect.
                    isDeselected && `DotIcon__dotsSlide__deselected`
                )}
            />
        )
    }

DotIcon.propTypes = propTypes

export default DotIcon
