import PropTypes from 'prop-types'

import TintinPoster from './Cardboards/TintinPoster'
import BloomCountyPoster from './Cardboards/BloomCountyPoster'
import VanNuysLogo from './Cardboards/VanNuysLogo'
import Corkboard from './Cardboards/Corkboard'
import NirvanaPoster from './Cardboards/NirvanaPoster'
import LeonardCohenPoster from './Cardboards/LeonardCohenPoster'
import ProgressChartEarly from './Cardboards/ProgressChartEarly'
import ProgressChartLate from './Cardboards/ProgressChartLate'
import CinemaPosterLeft from './Cardboards/CinemaPosterLeft'
import CinemaPosterRight from './Cardboards/CinemaPosterRight'
import CinemaPosterRightNormal from './Cardboards/CinemaPosterRightNormal'
import Clipboard from './Cardboards/Clipboard'
import Painting from './Cardboards/Painting'
import ElliottSmithPoster from './Cardboards/ElliottSmithPoster'

import {
    TINTIN_POSTER,
    BLOOM_COUNTY_POSTER,
    VAN_NUYS_LOGO,
    CORKBOARD,
    NIRVANA_POSTER,
    LEONARD_COHEN_POSTER,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE,
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT,
    CINEMA_POSTER_RIGHT_NORMAL,
    CLIPBOARD,
    PAINTING,
    ELLIOTT_SMITH_POSTER
} from 'scene/things/keys/cardboards'

export const propTypes = {
    [TINTIN_POSTER]: PropTypes.bool,
    [BLOOM_COUNTY_POSTER]: PropTypes.bool,
    [VAN_NUYS_LOGO]: PropTypes.bool,
    [CORKBOARD]: PropTypes.bool,
    [NIRVANA_POSTER]: PropTypes.bool,
    [LEONARD_COHEN_POSTER]: PropTypes.bool,
    [PROGRESS_CHART_EARLY]: PropTypes.bool,
    [PROGRESS_CHART_LATE]: PropTypes.bool,
    [CINEMA_POSTER_LEFT]: PropTypes.bool,
    [CINEMA_POSTER_RIGHT]: PropTypes.bool,
    [CINEMA_POSTER_RIGHT_NORMAL]: PropTypes.bool,
    [CLIPBOARD]: PropTypes.bool,
    [PAINTING]: PropTypes.bool,
    [ELLIOTT_SMITH_POSTER]: PropTypes.bool
}

export default {
    [TINTIN_POSTER]: TintinPoster,
    [BLOOM_COUNTY_POSTER]: BloomCountyPoster,
    [VAN_NUYS_LOGO]: VanNuysLogo,
    [CORKBOARD]: Corkboard,
    [NIRVANA_POSTER]: NirvanaPoster,
    [LEONARD_COHEN_POSTER]: LeonardCohenPoster,
    [PROGRESS_CHART_EARLY]: ProgressChartEarly,
    [PROGRESS_CHART_LATE]: ProgressChartLate,
    [CINEMA_POSTER_LEFT]: CinemaPosterLeft,
    [CINEMA_POSTER_RIGHT]: CinemaPosterRight,
    [CINEMA_POSTER_RIGHT_NORMAL]: CinemaPosterRightNormal,
    [CLIPBOARD]: Clipboard,
    [PAINTING]: Painting,
    [ELLIOTT_SMITH_POSTER]: ElliottSmithPoster
}

