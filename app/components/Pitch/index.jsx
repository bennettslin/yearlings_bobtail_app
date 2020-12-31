// Section to show pitch to labels and press.
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import PitchScroll from './Scroll'
import './style'

const Pitch = forwardRef(({ pagePitchIndex }, ref) => (
    <PagePitchIndexContext.Provider {...{ value: pagePitchIndex }}>
        <div
            {...{
                className: cx(
                    'Pitch',
                    'fCC'
                ),
            }}
        >
            <PitchScroll {...{ ref }} />
        </div>
    </PagePitchIndexContext.Provider>
))

Pitch.propTypes = {
    pagePitchIndex: PropTypes.number,
}

export default Pitch
