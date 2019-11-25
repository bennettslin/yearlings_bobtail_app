import React, { PureComponent } from 'react'
import cx from 'classnames'

import { removeLoadingIndicator } from 'utils/window'

import './style.scss'
// import ActorsDashboard from './Dashboard'

class Actors extends PureComponent {
    componentDidMount() {
        logMount('Actors')
        removeLoadingIndicator()
        this.focusActorsElement()
    }

    focusActorsElement = () => {
        this.actorsElement.focus()
    }

    // selectPresenceType = (presenceType) => {
    //     const presenceKey = keys(getSvgMapForThingType(presenceType))[0]
    //     this.setState({
    //         presenceType,
    //         presenceKey
    //     })
    //     setPresenceInStorage({ presenceType, presenceKey })
    //     setPresenceInQueryStrings({ presenceType, presenceKey })
    // }

    // selectPresenceKey = (presenceKey) => {
    //     this.setState({
    //         presenceKey
    //     })
    //     setPresenceInStorage({ presenceKey })
    //     setPresenceInQueryStrings({ presenceKey })
    // }

    // handleProcessSvg = (svgString) => {
    //     const {
    //             viewBoxWidth,
    //             viewBoxHeight
    //         } = getViewBoxSize(svgString),

    //         // Show kilobytes.
    //         kilobytes = (svgString.length / 1024)

    //     this.sizePresence({
    //         viewBoxWidth,
    //         viewBoxHeight
    //     })

    //     this.setState({
    //         viewBoxWidth,
    //         viewBoxHeight,
    //         kilobytes
    //     })
    // }

    // sizePresence = ({
    //     viewBoxWidth = this.state.viewBoxWidth,
    //     viewBoxHeight = this.state.viewBoxHeight
    // }) => {
    //     const windowWidth = window.innerWidth,
    //         windowHeight =
    //             window.innerHeight - PADDING_DASHBOARD * 2 -

    //             // In mobile, account for height of two inputs.
    //             HEIGHT_INPUT * (window.innerWidth < 1000 ? 2 : 1),

    //         // Set height aspect ratio.
    //         heightAspectRatio =
    //             viewBoxWidth / viewBoxHeight <
    //             windowWidth / windowHeight

    //     this.setState({ heightAspectRatio })
    // }

    // handleKeyDownPress = (e) => {
    //     const keyName = getKeyName(e)

    //     if (keyName === ARROW_UP || keyName === ARROW_DOWN) {
    //         this.accessPresenceType(keyName)
    //     }

    //     if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
    //         this.accessPresenceKey(keyName)
    //     }
    // }

    // accessPresenceType(keyName) {
    //     const selectedIndex = findIndex(
    //         THING_TYPES,
    //         presenceType => presenceType === this.state.presenceType
    //     )

    //     let direction = 0

    //     if (keyName === ARROW_UP) {
    //         direction = THING_TYPES.length - 1
    //     }

    //     if (keyName === ARROW_DOWN) {
    //         direction = 1
    //     }

    //     const presenceType = THING_TYPES[
    //         (selectedIndex + direction) % THING_TYPES.length
    //     ]

    //     this.selectPresenceType(presenceType)
    // }

    // accessPresenceKey(keyName) {
    //     const
    //         svgArray = keys(getSvgMapForThingType(this.state.presenceType)),
    //         selectedIndex = findIndex(
    //             svgArray,
    //             presenceKey => presenceKey === this.state.presenceKey
    //         )

    //     let direction = 0

    //     if (keyName === ARROW_LEFT) {
    //         direction = svgArray.length - 1
    //     }

    //     if (keyName === ARROW_RIGHT) {
    //         direction = 1
    //     }

    //     const presenceKey = svgArray[
    //         (selectedIndex + direction) % svgArray.length
    //     ]

    //     this.selectPresenceKey(presenceKey)
    // }

    setActorsElement = node => this.actorsElement = node

    render() {
        return (
            <div
                {...{
                    ref: this.setActorsElement,
                    className: cx(
                        'Actors',
                        'abF'
                    ),
                    tabIndex: -1
                }}
            >
                {/* <ActorsDashboard
                    {...{
                        // actor,
                        // instance,
                        selectPresenceType: this.selectPresenceType,
                        selectPresenceKey: this.selectPresenceKey
                    }}
                /> */}
            </div>
        )
    }
}

export default Actors
