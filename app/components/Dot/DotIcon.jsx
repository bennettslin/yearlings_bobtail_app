import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AfterwordIcon from './Icons/AfterwordIcon'
import BackstoryIcon from './Icons/BackstoryIcon'
import NarrativeIcon from './Icons/NarrativeIcon'
import ObservationIcon from './Icons/ObservationIcon'
import WormholeIcon from './Icons/WormholeIcon'
import PunIcon from './Icons/PunIcon'
import ReferenceIcon from './Icons/ReferenceIcon'
import SongwritingIcon from './Icons/SongwritingIcon'

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

const DOT_ICONS_MAP = {
        [AFTERWORD]: AfterwordIcon,
        [BACKSTORY]: BackstoryIcon,
        [NARRATIVE]: NarrativeIcon,
        [OBSERVATION]: ObservationIcon,
        [WORMHOLE]: WormholeIcon,
        [PUN]: PunIcon,
        [REFERENCE]: ReferenceIcon,
        [SONGWRITING]: SongwritingIcon
    },
    DEFAULT_COMPONENT = () => (null)

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

    const IconComponent =
        DOT_ICONS_MAP[dotKey] || DEFAULT_COMPONENT

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
