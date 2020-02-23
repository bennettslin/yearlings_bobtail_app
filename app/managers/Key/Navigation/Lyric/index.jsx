import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isFinite from 'lodash/isfinite'

import { resetActivated } from 'flux/session/action'

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
        activatedVerseIndex: PropTypes.number.isRequired,
        accessedAnnotationIndex: PropTypes.number.isRequired,
        selectedVerseIndex: PropTypes.number.isRequired,
        resetActivated: PropTypes.func.isRequired,

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
                activatedVerseIndex,
                accessedAnnotationIndex
            } = this.props,

            isVerseActivated = activatedVerseIndex > -1

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
        if (!isAccessOn || isVerseActivated) {
            const verseIndex =
                isVerseActivated ?
                    activatedVerseIndex :
                    selectedVerseIndex

            this.dispatchAccessedAnnotation({
                verseIndex,
                direction
            })

            if (isVerseActivated) {
                this.props.resetActivated()
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

            } else if (isFinite(direction)) {
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
            <>
                <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
                <AnnotationAccessDispatcher {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

const mapStateToProps = ({
    accessStore: {
        isAccessOn,
        accessedAnnotationIndex
    },
    sessionStore: { activatedVerseIndex },
    selectedStore: { selectedVerseIndex }
}) => ({
    isAccessOn,
    accessedAnnotationIndex,
    activatedVerseIndex,
    selectedVerseIndex
})

export default connect(
    mapStateToProps,
    { resetActivated }
)(LyricNavigation)
