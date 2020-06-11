// Singleton to listen for window resize event.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { updateViewportStore } from '../../../redux/viewport/action'
import {
    getDeviceWidthIndex,
    getWindowDimensions
} from '../../../helpers/resize/device'
import { getIsHeightlessLyric } from '../../../helpers/resize/hidden'
import { getCanCarouselMount } from '../../../helpers/resize/mount'
import { getProsceniumDimensionCoordinates } from '../../../helpers/resize/proscenium'
import {
    getIsTwoRowMenu,
    getMenuHeight
} from '../../../helpers/resize/responsive'
import { getCeilingFloorHeight } from '../../../helpers/resize/theatre'
import { getStageDimensionCoordinates } from '../../../helpers/resize/stage'

class ResizeDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateEntranceStore: PropTypes.func.isRequired,
        updateViewportStore: PropTypes.func.isRequired,

        // From parent.
        getRootElement: PropTypes.func.isRequired,
        getBeginEnterTransition: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBeginEnterTransition(
            this.beginEnterTransition
        )

        /**
         * As soon as we have a reference to the root container, begin
         * showing theatre.
         */
        logTransition('Theatre can enter.')
        this.props.updateEntranceStore({
            canTheatreEnter: true
        })
    }

    beginEnterTransition = () => {
        const
            { getRootElement } = this.props,
            {
                windowHeight,
                windowWidth
            } = getWindowDimensions(getRootElement()),
            deviceWidthIndex = getDeviceWidthIndex(windowWidth),

            isHeightlessLyric = getIsHeightlessLyric({
                deviceWidthIndex,
                windowHeight,
                windowWidth
            }),
            isTwoRowMenu = getIsTwoRowMenu({
                deviceWidthIndex,
                windowWidth
            }),
            menuHeight = getMenuHeight({ isTwoRowMenu }),
            canCarouselMount = getCanCarouselMount({
                deviceWidthIndex,
                windowHeight,
                isHeightlessLyric
            }),
            stageDimensionCoordinates = getStageDimensionCoordinates({
                deviceWidthIndex,
                windowWidth,
                windowHeight,
                menuHeight,
                isHeightlessLyric,
                isTwoRowMenu,
                canCarouselMount
            }),
            prosceniumDimensionCoordinates = getProsceniumDimensionCoordinates(
                stageDimensionCoordinates
            ),
            {
                ceilingHeight,
                floorHeight
            } = getCeilingFloorHeight({
                deviceWidthIndex,
                windowHeight,
                menuHeight,
                prosceniumDimensionCoordinates,
                isHeightlessLyric,
                isTwoRowMenu
            })

        this.props.updateViewportStore({
            deviceWidthIndex,
            windowWidth,
            windowHeight,
            isHeightlessLyric,
            isTwoRowMenu,
            menuHeight,
            canCarouselMount,
            stageDimensionCoordinates,
            prosceniumDimensionCoordinates,
            ceilingHeight,
            floorHeight
        })

        logTransition('Theatre can enter.')
        this.props.updateEntranceStore({
            canTheatreEnter: true
        })
    }

    render() {
        return null
    }
}

export default connect(
    null,
    {
        updateEntranceStore,
        updateViewportStore
    }
)(ResizeDispatcher)
