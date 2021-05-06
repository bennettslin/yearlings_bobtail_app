// Section to show pitch.
import React from 'react'
import PropTypes from 'prop-types'
import {
    getPitchBodyForIndex,
    getPitchFootnoteForIndex,
    getPitchTitleForIndex,
    getShowContactEmailForPitch,
} from '../../api/pitch/segments'
import getPitchServerClientHoc from '../../hocs/PitchHoc'
import Contact from '../Contact'
import MarketingTitle from '../Marketing/Title'
import MarketingContent from '../Marketing/Content'
import Texts from '../Texts'

const Pitch = ({ serverClientPitchIndex }) => {
    const
        body = getPitchBodyForIndex(serverClientPitchIndex),
        footnote = getPitchFootnoteForIndex(serverClientPitchIndex)

    return (
        <>
            <MarketingTitle
                {...{ text: getPitchTitleForIndex(serverClientPitchIndex) }}
            />
            <MarketingContent {...{ footnote }}>
                {body.map((text, index) => (
                    <p {...{ key: index }}>
                        <Texts {...{ text }} />
                    </p>
                ))}
                {getShowContactEmailForPitch(serverClientPitchIndex) && (
                    <Contact />
                )}
            </MarketingContent>
        </>
    )
}

Pitch.propTypes = {
    serverClientPitchIndex: PropTypes.number.isRequired,
}

export default getPitchServerClientHoc(Pitch)
