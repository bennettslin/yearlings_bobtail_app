/**
 * Component to allow verse not to update every time interactivated verse index
 * is changed.
 */

import React, {
    Component, Fragment
} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import VerseNav from './VerseNav'
import VerseColour from '../VerseColour'

import { getPropsAreShallowEqual } from 'helpers/general'

const mapStateToProps = ({
    renderStore: { canLyricRender },
    sessionStore: { interactivatedVerseIndex }
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
        inSlider: PropTypes.bool,
        inUnit: PropTypes.bool,
        verseIndex: PropTypes.number.isRequired,
        handleVerseSelect: PropTypes.func
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
