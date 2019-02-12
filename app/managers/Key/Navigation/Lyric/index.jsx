import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isNumber from 'lodash.isnumber'

import { resetInteractivated } from 'flux/session/action'

import AnnotationDispatcher from '../../../../handlers/Annotation/Dispatcher'
import AnnotationAccessDispatcher from '../../../../handlers/AnnotationAccess/Dispatcher'

import { populateRefs } from 'helpers/ref'

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
        resetInteractivated: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({ navigateLyric: this.navigateLyric })
    }

    navigateLyric = (keyName) => {
        if (
            keyName !== ARROW_LEFT &&
            keyName !== ARROW_RIGHT &&
            keyName !== ENTER
        ) {
            return false
        }

        const
            {
                isAccessOn,
                selectedVerseIndex,
                interactivatedVerseIndex,
                accessedAnnotationIndex
            } = this.props,

            isVerseInteractivated = interactivatedVerseIndex > -1

        let direction

        switch (keyName) {
            case ARROW_LEFT:
                direction = -1
                break
            case ARROW_RIGHT:
                direction = 1
                break
        }

        /**
         * Access is getting turned on, so just choose annotation based on
         * selected verse.
         */
        if (!isAccessOn || isVerseInteractivated) {
            const verseIndex =
                isVerseInteractivated ?
                    interactivatedVerseIndex :
                    selectedVerseIndex

            this.dispatchAccessedAnnotation({
                verseIndex,
                direction
            })

            if (isVerseInteractivated) {
                this.props.resetInteractivated()
            }

        /**
         * Access is already turned on, so select annotation if enter, or
         * continue to access if left or right arrow.
         */
        } else {
            if (keyName === ENTER) {
                return this.dispatchAnnotationIndex({
                    selectedAnnotationIndex: accessedAnnotationIndex
                })

            } else if (isNumber(direction)) {
                this.dispatchAccessedAnnotation({
                    annotationIndex: accessedAnnotationIndex,
                    direction
                })
            }
        }

        return true
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <___>
                <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
                <AnnotationAccessDispatcher {...{ getRefs: this._getRefs }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    accessStore: {
        isAccessOn,
        accessedAnnotationIndex
    },
    sessionStore: { interactivatedVerseIndex },
    selectedStore: { selectedVerseIndex }
}) => ({
    isAccessOn,
    accessedAnnotationIndex,
    interactivatedVerseIndex,
    selectedVerseIndex
})

export default connect(
    mapStateToProps,
    { resetInteractivated }
)(LyricNavigation)
