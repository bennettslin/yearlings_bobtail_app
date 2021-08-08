// This prevents popup interaction when slider is touched.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import './style'

const TouchOverlay = ({ didMount }) => didMount && (
    <div className="TouchOverlay" />
)

TouchOverlay.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(TouchOverlay))
