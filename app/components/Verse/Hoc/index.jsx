import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import VerseColour from './VerseColour'
import VerseNav from './VerseNav'

const mapStateToProps = ({
    deviceStore: { isDesktop },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    isDesktop,
    interactivatedVerseIndex
})

class VerseHoc extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDesktop: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number,
        VerseComponent: PropTypes.func.isRequired,

        inSlider: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        inUnit: PropTypes.bool,

        handleVerseSelect: PropTypes.func
    }

    render() {
        const {
                verseIndex,
                VerseComponent,
                interactivatedVerseIndex,
                handleVerseSelect,
                inUnit,
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
                isDesktop,
                inSlider,
                inVerseBar
            } = other,

            logicSelectors = hasVerseIndex && cx(
                // "Child verse index."
                `ChV${verseIndex}`,
                'ChV',

                // "Child in lyric."
                (inUnit || inVerseBar) && 'ChL'
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
                {isDesktop && !inSlider && !inVerseBar && (
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
