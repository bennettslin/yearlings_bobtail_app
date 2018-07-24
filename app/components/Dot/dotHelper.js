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
} from '../../constants/dots'

const DOTS_MAP = {
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

export const getDotIcon = (iconName) => {
    return DOTS_MAP[iconName] || DEFAULT_COMPONENT
}
