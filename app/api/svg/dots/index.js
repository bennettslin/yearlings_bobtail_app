import narrative from '../../../../assets/svgs/app/dots/narrative'
import backstory from '../../../../assets/svgs/app/dots/backstory'
import observation from '../../../../assets/svgs/app/dots/observation'
import pun from '../../../../assets/svgs/app/dots/pun'
import reference from '../../../../assets/svgs/app/dots/reference'
import wormhole from '../../../../assets/svgs/app/dots/wormhole'
import songwriting from '../../../../assets/svgs/app/dots/songwriting'
import afterword from '../../../../assets/svgs/app/dots/afterword'

import {
    NARRATIVE,
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    WORMHOLE,
    SONGWRITING,
    AFTERWORD
} from '../../../constants/dots'

const DOT_ICONS_MAP = {
    [NARRATIVE]: narrative,
    [BACKSTORY]: backstory,
    [OBSERVATION]: observation,
    [PUN]: pun,
    [REFERENCE]: reference,
    [WORMHOLE]: wormhole,
    [SONGWRITING]: songwriting,
    [AFTERWORD]: afterword
}

export const getSvgForDot = dotKey => DOT_ICONS_MAP[dotKey]
