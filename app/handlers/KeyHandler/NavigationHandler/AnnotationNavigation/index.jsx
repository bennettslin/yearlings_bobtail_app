import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WikiDispatcher from '../../../../dispatchers/WikiDispatcher'

import {
    getWormholeLink,
    getAnnotationObject
} from 'helpers/dataHelper'

import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN,
    ENTER
} from 'constants/access'

class AnnotationNavigation extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        accessedAnnotationAnchorIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        getNavigation: PropTypes.object.isRequired,
        handleAnnotationPrevious: PropTypes.func.isRequired,
        handleAnnotationNext: PropTypes.func.isRequired,
        handleAnnotationAnchorAccess: PropTypes.func.isRequired,
        handleAnnotationWormholeSelect: PropTypes.func.isRequired,
        determineVerseBarsWithParameters: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getNavigation.navigateAnnotation = this.navigateAnnotation
    }

    navigateAnnotation = (e, keyName) => {
        const { props } = this,
            {
                handleAnnotationPrevious,
                handleAnnotationNext,
                handleAnnotationAnchorAccess,
                handleAnnotationWormholeSelect,
                determineVerseBarsWithParameters
            } = props

        let { accessedAnnotationAnchorIndex } = props,
            annotationIndexWasAccessed = false,
            keyWasRegistered = true

        switch (keyName) {
            case ARROW_LEFT:
                annotationIndexWasAccessed = true
                handleAnnotationPrevious(e)
                break
            case ARROW_RIGHT:
                annotationIndexWasAccessed = true
                handleAnnotationNext(e)
                break
            case ARROW_UP:
            case ARROW_DOWN: {
                // If not accessed on, do nothing and just turn access on.
                if (props.isAccessOn) {
                    const direction = keyName === ARROW_UP ? -1 : 1
                    handleAnnotationAnchorAccess(
                        direction
                    )
                }
                break
            }
            case ENTER: {
                const {
                        selectedSongIndex,
                        selectedAnnotationIndex
                    } = props,

                    annotationObject = getAnnotationObject(selectedSongIndex, selectedAnnotationIndex)

                // TODO: Move this logic to AnnotationManager.
                if (accessedAnnotationAnchorIndex > 0 &&
                    annotationObject &&
                    annotationObject.annotationAnchors &&
                    annotationObject.annotationAnchors.length) {

                    const annotationAnchorEntity = annotationObject.annotationAnchors[accessedAnnotationAnchorIndex - 1]

                    // It's a wiki anchor.
                    if (typeof annotationAnchorEntity === 'string') {
                        this.trySelectWiki(accessedAnnotationAnchorIndex)

                    // It's a wormhole index.
                    } else {
                        const
                            wormholeLink = getWormholeLink(
                                annotationObject,
                                annotationAnchorEntity
                            )

                        keyWasRegistered =
                            handleAnnotationWormholeSelect(
                                e,
                                wormholeLink
                            )

                        /**
                         * If song was selected, then annotation index was
                         * accessed.
                         */
                        annotationIndexWasAccessed = keyWasRegistered
                    }

                } else {
                    keyWasRegistered = false
                }
                break
            }
            default:
                keyWasRegistered = false
                break
        }

        // Accessing annotation might scroll lyric.
        if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
            determineVerseBarsWithParameters()
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    render() {
        return (
            <WikiDispatcher {...{ getDispatch: this }} />
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isAccessOn },
    accessStore: { accessedAnnotationAnchorIndex },
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex
    }
}) => ({
    isAccessOn,
    accessedAnnotationAnchorIndex,
    selectedSongIndex,
    selectedAnnotationIndex
})

export default connect(mapStateToProps)(AnnotationNavigation)
