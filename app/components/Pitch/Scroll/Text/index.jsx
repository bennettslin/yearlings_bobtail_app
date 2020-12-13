// Section to show pitch to labels and press.
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getPitchServerClientHoc from '../../../PitchHoc'
import {
    getPitchTextForIndex,
    getPitchFootnoteForIndex
} from '../../../../api/pitch/segments'
import './style'

const PitchText = ({ serverClientPitchIndex }) => {
    const footnote = getPitchFootnoteForIndex(serverClientPitchIndex)

    return (
        <div
            {...{
                className: cx(
                    'PitchText',
                    'fontSize__mediumTitle'
                )
            }}
        >
            <div
                {...{
                    className: 'PitchText__segment'
                }}
            >
                {getPitchTextForIndex(serverClientPitchIndex).map((segment, index) => (
                    <p
                        {...{
                            key: index
                        }}
                    >
                        {segment}
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

PitchText.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired
}

export default getPitchServerClientHoc(PitchText)
