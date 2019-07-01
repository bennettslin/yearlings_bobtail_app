import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'

import Layer from '../Layer'

import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene'

const ThingLayer = ({
    [BACKDROP]: backdrops,
    [BUBBLE]: bubbles,
    [CARDBOARD]: cardboards,
    [CUTOUT]: cutouts,
    [FIXTURE]: fixtures,
    [FLAT]: flats,
    [FURNITURE]: furnitures,
    [PANEL]: panels,
    [PUPPET]: puppets

}) => (
    <___>
        <Layer {...backdrops} {...{ presenceType: BACKDROP }} />
        <Layer {...bubbles} {...{ presenceType: BUBBLE }} />
        <Layer {...cardboards} {...{ presenceType: CARDBOARD }} />
        <Layer {...cutouts} {...{ presenceType: CUTOUT }} />
        <Layer {...fixtures} {...{ presenceType: FIXTURE }} />
        <Layer {...flats} {...{ presenceType: FLAT }} />
        <Layer {...furnitures} {...{ presenceType: FURNITURE }} />
        <Layer {...panels} {...{ presenceType: PANEL }} />
        <Layer {...puppets} {...{ presenceType: PUPPET }} />
    </___>
)

ThingLayer.propTypes = {
    [BACKDROP]: PropTypes.object,
    [BUBBLE]: PropTypes.object,
    [CARDBOARD]: PropTypes.object,
    [CUTOUT]: PropTypes.object,
    [FIXTURE]: PropTypes.object,
    [FLAT]: PropTypes.object,
    [FURNITURE]: PropTypes.object,
    [PANEL]: PropTypes.object,
    [PUPPET]: PropTypes.object
}

export default memo(ThingLayer)
