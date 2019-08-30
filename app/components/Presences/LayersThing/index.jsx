import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'

import Layer from '../Layer'

import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene'

const LayersThing = ({
    [BACKDROP]: backdrops,
    [BUBBLE]: bubbles,
    [CARDBOARD]: cardboards,
    [CUTOUT]: cutouts,
    [DOOR]: doors,
    [FIXTURE]: fixtures,
    [FLAT]: flats,
    [FURNITURE]: furnitures,
    [PANEL]: panels,
    [PUPPET]: puppets

}) => {
    return (
        <___>
            <Layer {...backdrops} {...{ presenceType: BACKDROP }} />
            <Layer {...flats} {...{ presenceType: FLAT }} />
            <Layer {...doors} {...{ presenceType: DOOR }} />
            <Layer {...panels} {...{ presenceType: PANEL }} />
            <Layer {...cutouts} {...{ presenceType: CUTOUT }} />
            <Layer {...furnitures} {...{ presenceType: FURNITURE }} />
            <Layer {...fixtures} {...{ presenceType: FIXTURE }} />
            <Layer {...puppets} {...{ presenceType: PUPPET }} />
            <Layer {...bubbles} {...{ presenceType: BUBBLE }} />
            <Layer {...cardboards} {...{ presenceType: CARDBOARD }} />
        </___>
    )
}

LayersThing.propTypes = {
    [BACKDROP]: PropTypes.object,
    [BUBBLE]: PropTypes.object,
    [CARDBOARD]: PropTypes.object,
    [CUTOUT]: PropTypes.object,
    [DOOR]: PropTypes.object,
    [FIXTURE]: PropTypes.object,
    [FLAT]: PropTypes.object,
    [FURNITURE]: PropTypes.object,
    [PANEL]: PropTypes.object,
    [PUPPET]: PropTypes.object
}

export default memo(LayersThing)
