import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isString } from '../../../../helpers/general'
import AnnotationDispatcher from '../../../../handlers/Annotation/Dispatcher'
import SongDispatcher from '../../../../handlers/Song/Dispatcher'
import WikiDispatcher from '../../../../dispatchers/WikiDispatcher'
import WikiWormholeDispatcher from '../../../../handlers/WikiWormhole/Dispatcher'
import { populateRefs } from '../../../../helpers/ref'
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
} from '../../../../constants/access'
import {
    IS_ACCESS_ON_SELECTOR,
    ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR
} from '../../../../redux/access/selectors'

const mapStateToProps = state => {
    const {
            selectedStore: {
                selectedSongIndex,
                selectedAnnotationIndex
            }
        } = state,
        isAccessOn = IS_ACCESS_ON_SELECTOR(state),
        accessedWikiWormholeIndex = ACCESSED_WIKI_WORMHOLE_INDEX_SELECTOR(state)

    return {
        isAccessOn,
        accessedWikiWormholeIndex,
        selectedSongIndex,
        selectedAnnotationIndex
    }
}

class AnnotationNavigation extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        accessedWikiWormholeIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,
        selectedAnnotationIndex: PropTypes.number.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            navigateAnnotation: this.navigateAnnotation
        })
    }

    navigateAnnotation = (keyName) => {
        let { accessedWikiWormholeIndex } = this.props,
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
                if (this.props.isAccessOn) {
                    const direction = keyName === ARROW_UP ? -1 : 1
                    this.dispatchAccessedWikiWormhole({ direction })
                }
                break
            }
            case ENTER: {
                const {
                        selectedSongIndex,
                        selectedAnnotationIndex
                    } = this.props,

                    wikiWormholeEntity = getWikiWormholeEntity({
                        songIndex: selectedSongIndex,
                        annotationIndex: selectedAnnotationIndex,
                        accessedIndex: accessedWikiWormholeIndex
                    })

                if (accessedWikiWormholeIndex && wikiWormholeEntity) {

                    // It's a wiki anchor.
                    if (isString(wikiWormholeEntity)) {
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

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <>
                <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
                <WikiDispatcher {...{ getRefs: this._getRefs }} />
                <WikiWormholeDispatcher {...{ getRefs: this._getRefs }} />
            </>
        )
    }
}

export default connect(mapStateToProps)(AnnotationNavigation)
