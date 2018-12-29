// Singleton to listen for window resize event.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateDeviceStore } from 'flux/device/action'
import { updateResponsiveStore } from 'flux/responsive/action'

import { populateRefs } from 'helpers/ref'
import {
    getIsHeightlessLyric,
    getIsUnrenderableCarouselNav
} from './helpers/hidden'
import {
    getShowShrunkNavIcon,
    getShowSingleNavBook
} from './helpers/nav'
import {
    getIsLyricExpandable,
    getIsScoreShowable
} from './helpers/responsive'
import { getIsScoresTipsInMain } from './helpers/scoresTips'
import {
    getIsTwoRowMenu,
    getCeilingFloorHeight
} from './helpers/theatre'
import { getIsMobileWiki } from './helpers/wiki'
import { resizeWindow } from './helpers/window'
import { getStageCoordinates } from './helpers/stage'

class ResponsiveListener extends PureComponent {

    static propTypes = {
        // Through Redux.
        isWindowResizing: PropTypes.bool.isRequired,
        updateDeviceStore: PropTypes.func.isRequired,
        updateResponsiveStore: PropTypes.func.isRequired
    }

    componentDidMount() {
        // Set state based on initial window size.
        this._determineResponsiveState()
    }

    componentDidUpdate(prevProps) {
        const
            { isWindowResizing } = this.props,
            { isWindowResizing: wasWindowResizing } = prevProps

        if (!isWindowResizing && wasWindowResizing) {
            this._determineResponsiveState()
        }
    }

    _determineResponsiveState = () => {
        const {
                deviceIndex,
                windowHeight,
                windowWidth
            } = resizeWindow(),

            isHeightlessLyric = getIsHeightlessLyric({
                deviceIndex,
                windowHeight,
                windowWidth
            })

        this._updateDeviceStore({
            deviceIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyric
        })

        this._updateResponsiveStore({
            deviceIndex,
            windowHeight,
            windowWidth,
            isHeightlessLyric
        })
    }

    _updateDeviceStore({
        deviceIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyric
    }) {
        const {
                stageTop,
                stageLeft,
                stageWidth,
                stageHeight

            } = getStageCoordinates({
                deviceIndex,
                windowWidth,
                windowHeight,
                isHeightlessLyric
            }),
            {
                ceilingHeight,
                floorHeight

            } = getCeilingFloorHeight({
                deviceIndex,
                windowWidth,
                windowHeight,
                stageHeight,
                stageTop,
                isHeightlessLyric
            })

        this.props.updateDeviceStore({
            deviceIndex,
            windowWidth,
            windowHeight,
            stageTop,
            stageLeft,
            stageWidth,
            stageHeight,
            ceilingHeight,
            floorHeight
        })
    }

    _updateResponsiveStore({
        deviceIndex,
        windowHeight,
        windowWidth,
        isHeightlessLyric
    }) {
        this.props.updateResponsiveStore({
            isHeightlessLyric,
            isUnrenderableCarouselNav: getIsUnrenderableCarouselNav({
                deviceIndex,
                windowHeight,
                windowWidth
            }),
            isMobileWiki: getIsMobileWiki({
                deviceIndex,
                windowWidth
            }),
            isScoresTipsInMain: getIsScoresTipsInMain({
                deviceIndex,
                windowWidth
            }),
            isTwoRowMenu: getIsTwoRowMenu({
                deviceIndex,
                windowWidth
            }),
            showShrunkNavIcon: getShowShrunkNavIcon({
                deviceIndex,
                windowWidth
            }),
            showSingleNavBook: getShowSingleNavBook({
                deviceIndex,
                windowWidth
            }),
            isScoreShowable: getIsScoreShowable(deviceIndex),
            isLyricExpandable: getIsLyricExpandable(deviceIndex)
        })
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    windowStore: { isWindowResizing }
}) => ({
    isWindowResizing
})

export default connect(
    mapStateToProps,
    {
        updateDeviceStore,
        updateResponsiveStore
    }
)(ResponsiveListener)
