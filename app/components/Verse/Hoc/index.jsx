import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import isFinite from 'lodash/isfinite'

import VerseColour from './VerseColour'
import VerseNav from './VerseNav'

const mapStateToProps = ({
    sessionStore: { activatedVerseIndex }
}) => ({
    activatedVerseIndex
})

class VerseHoc extends PureComponent {

    static propTypes = {
        // Through Redux.
        activatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number,
        VerseComponent: PropTypes.object.isRequired,

        inSlider: PropTypes.bool,
        inUnit: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        isShownInVerseBar: PropTypes.bool,

        handleVerseSelect: PropTypes.func
    }

    render() {
        const {
                verseIndex,
                VerseComponent,
                activatedVerseIndex,
                handleVerseSelect,
                inUnit,
                isShownInVerseBar,
                ...other
            } = this.props,

            hasVerseIndex = isFinite(verseIndex)

        if (!hasVerseIndex) {
            return (
                <VerseComponent {...other}
                    {...{ logicSelectors: 'Verse__noIndexColour' }}
                />
            )
        }

        const {
                inSlider,
                inVerseBar
            } = other,

            logicSelectors = hasVerseIndex && cx(
                // "Child verse index."
                `ChV${verseIndex}`,
                'ChV',

                // "Child in lyric."
                (
                    inUnit || (
                        inVerseBar &&
                        isShownInVerseBar
                    )

                // This class applies background colour and zIndex.
                ) && 'ChL'
            ),

            isActivated = verseIndex === activatedVerseIndex

        return (
            <VerseComponent {...other}
                {...{
                    verseIndex,
                    logicSelectors
                }}
            >
                <VerseColour
                    {...{
                        inSlider,
                        inVerseBar,
                        inUnit,
                        verseIndex,
                        isActivated
                    }}
                />
                {!inSlider && !inVerseBar && (
                    <VerseNav
                        {...{
                            verseIndex,
                            isActivated,
                            handleVerseSelect
                        }}
                    />
                )}
            </VerseComponent>
        )
    }
}

export default connect(mapStateToProps)(VerseHoc)
