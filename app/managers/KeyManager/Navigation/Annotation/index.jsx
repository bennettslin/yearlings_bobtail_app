import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import WikiDispatcher from '../../../../handlers/WikiHandler/Dispatcher'
import WikiWormholeDispatcher from '../../../../handlers/WikiWormholeHandler/Dispatcher'

import {
    getWormholeLink,
    getAnnotationObject
} from 'helpers/dataHelper'

import { getWormholeObject } from '../../../../helpers/wormhole'

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
        accessedWikiWormholeIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        getNavigation: PropTypes.object.isRequired,
        handleAnnotationSelect: PropTypes.func.isRequired,
        selectSong: PropTypes.func.isRequired,
        determineVerseBarsWithParameters: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getNavigation.navigateAnnotation = this.navigateAnnotation
    }

    navigateAnnotation = (e, keyName) => {
        const { props } = this,
            {
                handleAnnotationSelect,
                selectSong,
                determineVerseBarsWithParameters
            } = props

        let { accessedWikiWormholeIndex } = props,
            annotationIndexWasAccessed = false,
            keyWasRegistered = true

        switch (keyName) {
            case ARROW_LEFT:
                annotationIndexWasAccessed = true
                handleAnnotationSelect(e, -1)
                break
            case ARROW_RIGHT:
                annotationIndexWasAccessed = true
                handleAnnotationSelect(e, 1)
                break
            case ARROW_UP:
            case ARROW_DOWN: {
                // If not accessed on, do nothing and just turn access on.
                if (props.isAccessOn) {
                    const direction = keyName === ARROW_UP ? -1 : 1
                    this.dispatchAccessedWikiWormhole(direction)
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
                if (accessedWikiWormholeIndex > 0 &&
                    annotationObject &&
                    annotationObject.wikiWormholes &&
                    annotationObject.wikiWormholes.length) {

                    const wikiWormholeEntity = annotationObject.wikiWormholes[accessedWikiWormholeIndex - 1]

                    // It's a wiki anchor.
                    if (typeof wikiWormholeEntity === 'string') {
                        this.dispatchWiki(accessedWikiWormholeIndex)

                    // It's a wormhole index.
                    } else {
                        const
                            wormholeLink = getWormholeLink(
                                annotationObject,
                                wikiWormholeEntity
                            )

                        keyWasRegistered =
                            selectSong(
                                getWormholeObject(wormholeLink)
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
            <___>
                <WikiDispatcher {...{ getDispatch: this }} />
                <WikiWormholeDispatcher {...{ getDispatch: this }} />
            </___>
        )
    }
}

const mapStateToProps = ({
    toggleStore: { isAccessOn },
    accessStore: { accessedWikiWormholeIndex },
    songStore: {
        selectedSongIndex,
        selectedAnnotationIndex
    }
}) => ({
    isAccessOn,
    accessedWikiWormholeIndex,
    selectedSongIndex,
    selectedAnnotationIndex
})

export default connect(mapStateToProps)(AnnotationNavigation)
