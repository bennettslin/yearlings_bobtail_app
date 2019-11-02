/* eslint-disable */
import narrative from 'assets/svgs/app/audio/audioPlay'
import backstory from 'assets/svgs/app/audio/audioPlay'
import observation from 'assets/svgs/app/audio/audioPlay'
import pun from 'assets/svgs/app/audio/audioPlay'
import reference from 'assets/svgs/app/audio/audioPlay'
import wormhole from 'assets/svgs/app/audio/audioPlay'
import songwriting from 'assets/svgs/app/audio/audioPlay'
import afterword from 'assets/svgs/app/audio/audioPlay'

import {
    NARRATIVE,
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    WORMHOLE,
    SONGWRITING,
    AFTERWORD
} from 'constants/dots'

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

export const getDotIcon = dotKey => DOT_ICONS_MAP[dotKey]
