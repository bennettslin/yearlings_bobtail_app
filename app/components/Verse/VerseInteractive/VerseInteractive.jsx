/**
 * Component to allow verse not to update every time interactivated verse index
 * is changed.
 */

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VerseNav from '../VerseNav/VerseNav'
import VerseColour from '../VerseColour/VerseColour'

import { getPropsAreShallowEqual } from '../../../helpers/generalHelper'

const mapStateToProps = ({
    canLyricRender,
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

                verseIndex,
                interactivatedVerseIndex,

                ...other
            } = this.props,

            isInteractivated = verseIndex === interactivatedVerseIndex

        return (
            <Fragment>
                <VerseColour
                    inVerse
                    {...{
                        verseIndex,
                        isInteractivated
                    }}
                />
                <VerseNav
                    {...other}
                    {...{
                        verseIndex,
                        isInteractivated
                    }}
                />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps)(VerseInteractive)
