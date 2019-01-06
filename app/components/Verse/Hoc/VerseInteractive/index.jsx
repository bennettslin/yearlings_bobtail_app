/**
 * Component to allow verse not to update every time interactivated verse index
 * is changed.
 */

import React, { PureComponent, Fragment as ___ } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VerseNav from './VerseNav'
import VerseColour from '../VerseColour'

const mapStateToProps = ({
    deviceStore: { isDesktop },
    sessionStore: { interactivatedVerseIndex }
}) => ({
    isDesktop,
    interactivatedVerseIndex
})

class VerseInteractive extends PureComponent {

    static propTypes = {
        // Through Redux.
        isDesktop: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        inSlider: PropTypes.bool,
        inUnit: PropTypes.bool,
        verseIndex: PropTypes.number.isRequired,
        handleVerseSelect: PropTypes.func
    }

    getIsInteractivated(props) {
        const {
                verseIndex,
                interactivatedVerseIndex
            } = props,

            isInteractivatedVerse = verseIndex === interactivatedVerseIndex

        return isInteractivatedVerse
    }

    render() {
        const {
                isDesktop,
                inSlider,
                inUnit,
                verseIndex,
                handleVerseSelect
            } = this.props,

            isInteractivated = this.getIsInteractivated(this.props)

        return (
            <___>
                <VerseColour
                    {...{
                        inSlider,
                        inUnit,
                        verseIndex,
                        isInteractivated
                    }}
                />
                {isDesktop && !inSlider && (
                    <VerseNav

                        {...{
                            verseIndex,
                            isInteractivated,
                            handleVerseSelect
                        }}
                    />
                )}
            </___>
        )
    }
}

export default connect(mapStateToProps)(VerseInteractive)
