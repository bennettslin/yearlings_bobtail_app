import React, { PureComponent, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AnnotationDispatcher from '../../../../handlers/AnnotationHandler/Dispatcher'
import SongDispatcher from '../../../../handlers/SongHandler/Dispatcher'
import WikiDispatcher from '../../../../handlers/WikiHandler/Dispatcher'
import WikiWormholeDispatcher from '../../../../handlers/WikiWormholeHandler/Dispatcher'

import {
    getWikiWormholeEntity,
    getWormholeLinkFromIndex
} from './helper'

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
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.navigateAnnotation = this.navigateAnnotation
    }

    navigateAnnotation = (e, keyName) => {
        const { props } = this

        let { accessedWikiWormholeIndex } = props,
            annotationIndexWasAccessed = false,
            keyWasRegistered = true

        switch (keyName) {
            case ARROW_LEFT:
                annotationIndexWasAccessed = true
                this.dispatchAnnotationDirection(-1)
                break
            case ARROW_RIGHT:
                annotationIndexWasAccessed = true
                this.dispatchAnnotationDirection(1)
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

                    wikiWormholeEntity = getWikiWormholeEntity({
                        songIndex: selectedSongIndex,
                        annotationIndex: selectedAnnotationIndex,
                        accessedIndex: accessedWikiWormholeIndex
                    })

                if (accessedWikiWormholeIndex && wikiWormholeEntity) {

                    // It's a wiki anchor.
                    if (typeof wikiWormholeEntity === 'string') {
                        this.dispatchWiki(accessedWikiWormholeIndex)

                    // It's a wormhole index.
                    } else {
                        const
                            wormholeLink = getWormholeLinkFromIndex({
                                songIndex: selectedSongIndex,
                                annotationIndex: selectedAnnotationIndex,
                                wikiWormholeIndex: wikiWormholeEntity
                            })

                        keyWasRegistered =
                            this.dispatchSong(wormholeLink)

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

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    render() {
        return (
            <___>
                <AnnotationDispatcher {...{ parentThis: this }} />
                <SongDispatcher {...{ parentThis: this }} />
                <WikiDispatcher {...{ parentThis: this }} />
                <WikiWormholeDispatcher {...{ parentThis: this }} />
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
