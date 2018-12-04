import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateSessionStore } from 'flux/session/action'

import AnnotationDispatcher from '../../../../handlers/AnnotationHandler/Dispatcher'
import AnnotationAccessDispatcher from '../../../../handlers/AnnotationAccessHandler/Dispatcher'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ENTER
} from 'constants/access'

class LyricNavigation extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        interactivatedVerseIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.navigateLyric = this.navigateLyric
    }

    navigateLyric = (e, keyName) => {
        const { props } = this,
            {
                interactivatedVerseIndex,
                accessedAnnotationIndex
            } = props,

            isVerseInteractivated = interactivatedVerseIndex > -1

        let direction

        switch (keyName) {
            case ARROW_LEFT:
                direction = -1
                break
            case ARROW_RIGHT:
                direction = 1
                break
            case ENTER:
                return this.dispatchAnnotationIndex({
                    selectedAnnotationIndex: accessedAnnotationIndex
                })
            default:
                return false
        }

        /**
         * If this key will turn on access, choose annotation based on selected
         * verse.
         */
        if (
            !props.isAccessOn ||
            isVerseInteractivated
        ) {
            const
                verseIndex = isVerseInteractivated ?
                    interactivatedVerseIndex :
                    props.selectedVerseIndex

            this.dispatchAccessedAnnotation({
                verseIndex,
                direction
            })

            if (isVerseInteractivated) {
                this.props.updateSessionStore({ interactivatedVerseIndex: -1 })
            }

        } else {
            this.dispatchAccessedAnnotation({
                annotationIndex: accessedAnnotationIndex,
                direction
            })
        }

        return true
    }

    render() {
        return (
            <___>
                <AnnotationDispatcher {...{ parentThis: this }} />
                <AnnotationAccessDispatcher {...{ parentThis: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isAccessOn },
    accessStore: { accessedAnnotationIndex },
    sessionStore: { interactivatedVerseIndex },
    songStore: { selectedVerseIndex }
}) => ({
    isAccessOn,
    accessedAnnotationIndex,
    interactivatedVerseIndex,
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricNavigation)
