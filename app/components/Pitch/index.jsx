// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import PitchScroll from './Scroll'
import './style'

const Pitch = ({ pagePitchIndex }) => (
    <PagePitchIndexContext.Provider {...{ value: pagePitchIndex }}>
        <div
            {...{
                className: cx(
                    'Pitch',
                    'abF'
                )
            }}
        >
            <PitchScroll />
        </div>
    </PagePitchIndexContext.Provider>
)

Pitch.propTypes = {
    pagePitchIndex: PropTypes.number
}

export default Pitch
