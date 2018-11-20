/**
 * Component to allow verse not to update every time interactivated verse index
 * is changed.
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VerseNav from './VerseNav'
import VerseColour from '../VerseColour'

import { getPropsAreShallowEqual } from 'helpers/generalHelper'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    interactivatedVerseIndex
}) => ({
    canLyricRender,
    interactivatedVerseIndex
})

class VerseInteractive extends Component {

    static propTypes = {
        // Through Redux.
        canLyricRender: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        verseIndex: PropTypes.number.isRequired,
        inSlider: PropTypes.bool,
        inUnit: PropTypes.bool,

        handleLyricVerseSelect: PropTypes.func
    }

    shouldComponentUpdate(nextProps) {
        const
            isInteractivatedVerse = this.getIsInteractivated(
                this.props
            ),
            willBeInteractivatedVerse = this.getIsInteractivated(
                nextProps
            )

        if (
            // Don't update if it remains not interactivated.
            !isInteractivatedVerse &&
            !willBeInteractivatedVerse
        ) {
            return false
        }

        return nextProps.canLyricRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
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
                /* eslint-disable no-unused-vars */
                canLyricRender,
                interactivatedVerseIndex,
                dispatch,
                /* eslint-enable no-unused-vars */

                verseIndex,
                inSlider,
                inUnit,

                ...other
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
                        {...other}
                        {...{
                            verseIndex,
                            isInteractivated
                        }}
                    />
                )}
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(VerseInteractive)
