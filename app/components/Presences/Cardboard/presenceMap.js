import PropTypes from 'prop-types'

import JohnnyHortonAlbum from './Cardboards/JohnnyHortonAlbum'
import TintinPoster from './Cardboards/TintinPoster'
import BloomCountyPoster from './Cardboards/BloomCountyPoster'
import VanNuysLogo from './Cardboards/VanNuysLogo'
import Corkboard from './Cardboards/Corkboard'
import PoliceAlbum from './Cardboards/PoliceAlbum'
import NirvanaPoster from './Cardboards/NirvanaPoster'
import LeonardCohenPoster from './Cardboards/LeonardCohenPoster'
import TelevisionAlbum from './Cardboards/TelevisionAlbum'
import ProgressChartEarly from './Cardboards/ProgressChartEarly'
import ProgressChartLate from './Cardboards/ProgressChartLate'
import CinemaPosterLeft from './Cardboards/CinemaPosterLeft'
import CinemaPosterRight from './Cardboards/CinemaPosterRight'
import CinemaPosterRightNormal from './Cardboards/CinemaPosterRightNormal'
import Clipboard from './Cardboards/Clipboard'
import Painting from './Cardboards/Painting'
import NasAlbum from './Cardboards/NasAlbum'
import ElliottSmithPoster from './Cardboards/ElliottSmithPoster'

import {
    JOHNNY_HORTON_ALBUM,
    TINTIN_POSTER,
    BLOOM_COUNTY_POSTER,
    VAN_NUYS_LOGO,
    CORKBOARD,
    POLICE_ALBUM,
    NIRVANA_POSTER,
    LEONARD_COHEN_POSTER,
    TELEVISION_ALBUM,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE,
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT,
    CINEMA_POSTER_RIGHT_NORMAL,
    CLIPBOARD,
    PAINTING,
    NAS_ALBUM,
    ELLIOTT_SMITH_POSTER
} from 'constants/scene/things/cardboards'

export const propTypes = {
    [JOHNNY_HORTON_ALBUM]: PropTypes.bool,
    [TINTIN_POSTER]: PropTypes.bool,
    [BLOOM_COUNTY_POSTER]: PropTypes.bool,
    [VAN_NUYS_LOGO]: PropTypes.bool,
    [CORKBOARD]: PropTypes.bool,
    [POLICE_ALBUM]: PropTypes.bool,
    [NIRVANA_POSTER]: PropTypes.bool,
    [LEONARD_COHEN_POSTER]: PropTypes.bool,
    [TELEVISION_ALBUM]: PropTypes.bool,
    [PROGRESS_CHART_EARLY]: PropTypes.bool,
    [PROGRESS_CHART_LATE]: PropTypes.bool,
    [CINEMA_POSTER_LEFT]: PropTypes.bool,
    [CINEMA_POSTER_RIGHT]: PropTypes.bool,
    [CINEMA_POSTER_RIGHT_NORMAL]: PropTypes.bool,
    [CLIPBOARD]: PropTypes.bool,
    [PAINTING]: PropTypes.bool,
    [NAS_ALBUM]: PropTypes.bool,
    [ELLIOTT_SMITH_POSTER]: PropTypes.bool
}

export default {
    [JOHNNY_HORTON_ALBUM]: JohnnyHortonAlbum,
    [TINTIN_POSTER]: TintinPoster,
    [BLOOM_COUNTY_POSTER]: BloomCountyPoster,
    [VAN_NUYS_LOGO]: VanNuysLogo,
    [CORKBOARD]: Corkboard,
    [POLICE_ALBUM]: PoliceAlbum,
    [NIRVANA_POSTER]: NirvanaPoster,
    [LEONARD_COHEN_POSTER]: LeonardCohenPoster,
    [TELEVISION_ALBUM]: TelevisionAlbum,
    [PROGRESS_CHART_EARLY]: ProgressChartEarly,
    [PROGRESS_CHART_LATE]: ProgressChartLate,
    [CINEMA_POSTER_LEFT]: CinemaPosterLeft,
    [CINEMA_POSTER_RIGHT]: CinemaPosterRight,
    [CINEMA_POSTER_RIGHT_NORMAL]: CinemaPosterRightNormal,
    [CLIPBOARD]: Clipboard,
    [PAINTING]: Painting,
    [NAS_ALBUM]: NasAlbum,
    [ELLIOTT_SMITH_POSTER]: ElliottSmithPoster
}

