import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import VerseTracker from './VerseTracker'
import { getMapVerseCursorStatus } from '../../../../redux/lyric/selectors'
import './style'

const VerseColour = ({
    verseIndex,
    inUnit,
    inVerseBar,
    inSlider

}) => {
    const
        verseCursorStatus = useSelector(getMapVerseCursorStatus(verseIndex)),
        isOdd = Boolean(verseIndex % 2)

    return (
        <div
            className={cx(
                'VerseColour',
                inVerseBar ?
                    'VerseColour__inVerseBar' :
                    'VerseColour__notVerseBar',
                verseCursorStatus === -1 && 'VerseColour__beforeCursor',
                verseCursorStatus === 0 && 'VerseColour__cursor',
                verseCursorStatus === 1 && 'VerseColour__afterCursor',
                isOdd ?
                    'VerseColour__odd' :
                    'VerseColour__even',
                'ovH',
                'abF'
            )}
        >
            <VerseTracker
                {...{
                    verseIndex,
                    inVerseBar,
                    inUnit,
                    inSlider,
                    ...inVerseBar && {
                        isHiddenInVerseBar: isOdd
                    }
                }}
            />

            {/* Allow verse bar to alternate between odd and even. */}
            {inVerseBar && (
                <VerseTracker
                    {...{
                        verseIndex,
                        inVerseBar,
                        inUnit,
                        inSlider,
                        isHiddenInVerseBar: !isOdd
                    }}
                />
            )}
        </div>
    )
}

VerseColour.propTypes = {
    verseIndex: PropTypes.number.isRequired,
    inUnit: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    inSlider: PropTypes.bool
}

export default memo(VerseColour)
