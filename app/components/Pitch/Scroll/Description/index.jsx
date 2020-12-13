// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPitchServerClientHoc from '../../../PitchHoc'
import Texts from '../../../Texts'
import {
    getPitchDescriptionForIndex,
    getPitchFootnoteForIndex
} from '../../../../api/pitch/segments'
import './style'

const PitchDescription = ({ serverClientPitchIndex }) => {
    const
        description = getPitchDescriptionForIndex(serverClientPitchIndex),
        footnote = getPitchFootnoteForIndex(serverClientPitchIndex)

    return (
        <div
            {...{
                className: cx(
                    'PitchDescription',
                    'fontSize__mediumTitle'
                )
            }}
        >
            <div
                {...{
                    className: 'PitchText__segment'
                }}
            >
                {description.map((text, index) => (
                    <p {...{ key: index }} >
                        <Texts {...{ text }} />
                    </p>
                ))}
            </div>
            {Boolean(footnote) && (
                <div
                    {...{
                        className: 'PitchText__footnote'
                    }}
                >
                    {footnote}
                </div>
            )}
        </div>
    )
}

PitchDescription.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired
}

export default getPitchServerClientHoc(PitchDescription)
