import React from 'react'
import cx from 'classnames'
import DrawingSection from './DrawingSection'
import { getDrawings } from './helpers'
import './style'

const Drawing = () => (
    <div
        {...{
            className: cx(
                'Progress__column',
            ),
        }}
    >
        <DrawingSection {...getDrawings()} />
    </div>
)

export default Drawing
