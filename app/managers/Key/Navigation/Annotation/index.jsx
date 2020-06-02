import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isString } from '../../../../helpers/general'
import AnnotationDispatcher from '../../../../handlers/Annotation/Dispatcher'
import SongDispatcher from '../../../../handlers/Song/Dispatcher'
import WikiDispatcher from '../../../../dispatchers/WikiDispatcher'
import WikiWormholeDispatcher from '../../../../handlers/WikiWormhole/Dispatcher'
import { getWikiWormholeEntity } from '../../../../album/api/annotations'
import { getWormholeLinkForWikiWormhole } from '../../../../album/api/wormholes'
import { populateRefs } from '../../../../helpers/ref'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ARROW_DOWN,
    ENTER
} from '../../../../constants/access'
import {
    mapIsAccessOn,
    mapAccessedWikiWormholeIndex
} from '../../../../redux/access/selectors'
import {
    mapSelectedSongIndex,
    mapSelectedAnnotationIndex
} from '../../../../redux/selected/selectors'

const mapStateToProps = state => {
    const
        isAccessOn = mapIsAccessOn(state),
        accessedWikiWormholeIndex = mapAccessedWikiWormholeIndex(state),
        selectedSongIndex = mapSelectedSongIndex(state),
        selectedAnnotationIndex = mapSelectedAnnotationIndex(state)

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

    getDispatchWiki = dispatch => {
        this.dispatchWiki = dispatch
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

                    wikiWormholeEntity = getWikiWormholeEntity(
                        selectedSongIndex,
                        selectedAnnotationIndex,
                        accessedWikiWormholeIndex
                    )

                if (accessedWikiWormholeIndex && wikiWormholeEntity) {

                    // It's a wiki anchor.
                    if (isString(wikiWormholeEntity)) {
                        this.dispatchWiki(accessedWikiWormholeIndex)

                    // It's a wormhole index.
                    } else {
                        keyWasRegistered =
                            this.dispatchSong(getWormholeLinkForWikiWormhole(
                                selectedSongIndex,
                                selectedAnnotationIndex,
                                wikiWormholeEntity
                            ))

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

    getDispatchAccessedWikiWormhole = dispatch => {
        this.dispatchAccessedWikiWormhole = dispatch
    }

    getDispatchAnnotation = dispatch => {
        if (dispatch) {
            this.dispatchAnnotationDirection = dispatch.dispatchAnnotationDirection
        }
    }

    render() {
        return (
            <>
                <AnnotationDispatcher {...{ ref: this.getDispatchAnnotation }} />
                <SongDispatcher {...{ getRefs: this._getRefs }} />
                <WikiDispatcher {...{ ref: this.getDispatchWiki }} />
                <WikiWormholeDispatcher {...{ ref: this.getDispatchAccessedWikiWormhole }} />
            </>
        )
    }
}

export default connect(mapStateToProps)(AnnotationNavigation)
