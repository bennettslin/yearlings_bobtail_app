/**
 * Controller to allow verse not to update every time cursor or interactivated
 * verse index is changed.
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VerseAudio from '../VerseAudio/VerseAudio'
import VerseColour from './VerseColour'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
    interactivatedVerseIndex
}) => ({
    canLyricRender,
    interactivatedVerseIndex
})

class VerseController extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        inVerseBar: PropTypes.bool,
        inVerse: PropTypes.bool,
        inSliderVerse: PropTypes.bool,

        verseIndex: PropTypes.number.isRequired,

        // For verse audio buttons.
        handleLyricVerseSelect: PropTypes.func
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canLyricRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                interactivatedVerseIndex,

            ...other } = this.props,

            {
                verseIndex,
            } = other,

            isInteractivated = verseIndex === interactivatedVerseIndex

        return (
            <VerseControllerView {...other}
                {...{
                    isInteractivated
                }}
            />
        )
    }
}

// TODO: Don't need a separate view component.
class VerseControllerView extends Component {

    static propTypes = {
        // From parent.
        isInteractivated: PropTypes.bool.isRequired,

        verseIndex: PropTypes.number.isRequired,

        inVerse: PropTypes.bool,
        inVerseBar: PropTypes.bool,
        inSliderVerse: PropTypes.bool,

        // For verse audio buttons.
        handleLyricVerseSelect: PropTypes.func
    }

    shouldComponentUpdate(nextProps) {
        const shouldComponentUpdate = !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })

        return shouldComponentUpdate
    }

    render() {
        const {
            isInteractivated,

            verseIndex,

            inVerse,
            inVerseBar,
            inSliderVerse,

            handleLyricVerseSelect
        } = this.props,

        inLyricVerse = inVerse && !inVerseBar

        return (
            <Fragment>

                <VerseColour
                    {...{
                        verseIndex,
                        isInteractivated,

                        inVerseBar,
                        inLyricVerse,
                        inSliderVerse
                    }}
                />

                {inLyricVerse && (
                    <VerseAudio
                        {...{
                            verseIndex,
                            isInteractivated,
                            handleLyricVerseSelect
                        }}
                    />
                )}

            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(VerseController)
