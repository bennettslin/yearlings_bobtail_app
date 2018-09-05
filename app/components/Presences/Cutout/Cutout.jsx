import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import FireHydrant from './Cutouts/NohoHouses/FireHydrant'
import PlaygroundSlide from './Cutouts/NohoSchool/PlaygroundSlide'
import Bathtub from './Cutouts/FamilyBathroom/Bathtub'
import MirroredSink from './Cutouts/FamilyBathroom/MirroredSink'
import TowelRack from './Cutouts/FamilyBathroom/TowelRack'
import OverpassSignFront from './Cutouts/Freeway/OverpassSignFront'
import OverpassSignBack from './Cutouts/Freeway/OverpassSignBack'
import PorchPlantsLeft from './Cutouts/Porch/PorchPlantsLeft'
import PorchPlantsRight from './Cutouts/Porch/PorchPlantsRight'

import {
    FIRE_HYDRANT,
    PLAYGROUND_SLIDE,
    BATHTUB,
    MIRRORED_SINK,
    TOWEL_RACK,
    OVERPASS_SIGN_FRONT,
    OVERPASS_SIGN_BACK,
    PORCH_PLANTS_LEFT,
    PORCH_PLANTS_RIGHT
} from 'scene/cutoutKeys'

const CUTOUTS_MAP = {
    [FIRE_HYDRANT]: FireHydrant,
    [PLAYGROUND_SLIDE]: PlaygroundSlide,
    [BATHTUB]: Bathtub,
    [MIRRORED_SINK]: MirroredSink,
    [TOWEL_RACK]: TowelRack,
    [OVERPASS_SIGN_FRONT]: OverpassSignFront,
    [OVERPASS_SIGN_BACK]: OverpassSignBack,
    [PORCH_PLANTS_LEFT]: PorchPlantsLeft,
    [PORCH_PLANTS_RIGHT]: PorchPlantsRight
},
DEFAULT_COMPONENT = () => (null)

const propTypes = {
    // From parent.
    className: PropTypes.any,
    nameKey: PropTypes.string.isRequired,
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}

const Cutout = ({

    className,
    nameKey,

...other }) => {

    const CutoutComponent =
        CUTOUTS_MAP[nameKey] || DEFAULT_COMPONENT

    return (
        <CutoutComponent {...other}
            className={cx(
                'Cutout',
                className
            )}
        />
    )
}

Cutout.propTypes = propTypes;

export default Cutout
