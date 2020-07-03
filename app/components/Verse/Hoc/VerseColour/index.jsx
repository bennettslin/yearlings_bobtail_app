import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { VERSE_CURSOR_CHILD_PREFIX } from '../../../../constants/cursor'
import './style'

const VerseColour = ({
    verseIndex,
    inVerseBar,
    children

}) => (
    <div
        className={cx(
            'VerseColour',
            `${VERSE_CURSOR_CHILD_PREFIX}${verseIndex}`,
            inVerseBar ?
                'VerseColour__inVerseBar' :
                'VerseColour__notVerseBar',
            'ovH',
            'abF'
        )}
    >
        {children}
    </div>
)

VerseColour.propTypes = {
    verseIndex: PropTypes.number.isRequired,
    inVerseBar: PropTypes.bool,
    children: PropTypes.node
}

export default memo(VerseColour)
