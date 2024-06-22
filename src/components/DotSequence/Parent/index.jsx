// Allow child to be mounted without Redux
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import DotSequence from '..'
import { mapSelectedDotsBit } from '../../../redux/dots/selector'

const DotSequenceParent = ({ didMount, ...props }) => {
    const selectedDotsBit = useSelector(mapSelectedDotsBit)

    return didMount && (
        <DotSequence
            {...{
                selectedDotsBit,
                ...props,
            }}
        />
    )
}

DotSequenceParent.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(DotSequenceParent))
