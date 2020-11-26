// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import PitchBody from './Body'

const Pitch = ({ pagePitchIndex }) => (
    <PagePitchIndexContext.Provider {...{ value: pagePitchIndex }}>
        <div
            {...{
                className: cx(
                    'Pitch'
                )
            }}
        >
            <PitchBody />
        </div>
    </PagePitchIndexContext.Provider>
)

Pitch.propTypes = {
    pagePitchIndex: PropTypes.number
}

export default Pitch
