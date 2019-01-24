import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import VerseColour from './VerseColour'
import VerseNav from './VerseNav'

const mapStateToProps = ({
    sessionStore: { interactivatedVerseIndex }
}) => ({
    interactivatedVerseIndex
})

class VerseHoc extends PureComponent {

    static propTypes = {
        // Through Redux.
        interactivatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number,
        VerseComponent: PropTypes.func.isRequired,

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
                interactivatedVerseIndex,
                handleVerseSelect,
                inUnit,
                isShownInVerseBar,
                ...other
            } = this.props,

            hasVerseIndex = !isNaN(verseIndex)

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
                        inVerseBar && isShownInVerseBar
                    )
                ) && 'ChL'
            ),

            isInteractivated = verseIndex === interactivatedVerseIndex

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
                        isInteractivated
                    }}
                />
                {!inSlider && !inVerseBar && (
                    <VerseNav
                        {...{
                            verseIndex,
                            isInteractivated,
                            handleVerseSelect
                        }}
                    />
                )}
            </VerseComponent>
        )
    }
}

export default connect(mapStateToProps)(VerseHoc)
