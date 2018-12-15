/**
 * Component to allow verse not to update every time interactivated verse index
 * is changed.
 */

import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VerseNav from './VerseNav'
import VerseColour from '../VerseColour'

const mapStateToProps = ({
    sessionStore: { interactivatedVerseIndex }
}) => ({
    interactivatedVerseIndex
})

class VerseInteractive extends PureComponent {

    static propTypes = {
        // Through Redux.
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
                inSlider,
                inUnit,
                verseIndex,
                handleVerseSelect
            } = this.props,

            isInteractivated = this.getIsInteractivated(this.props)

        return (
            <Fragment>
                <VerseColour
                    {...{
                        inSlider,
                        inUnit,
                        verseIndex,
                        isInteractivated
                    }}
                />
                {!inSlider && (
                    <VerseNav

                        {...{
                            verseIndex,
                            isInteractivated,
                            handleVerseSelect
                        }}
                    />
                )}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(VerseInteractive)
