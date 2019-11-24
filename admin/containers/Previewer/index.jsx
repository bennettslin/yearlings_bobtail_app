import React, { PureComponent } from 'react'
import cx from 'classnames'
import debounce from 'debounce'
import findIndex from 'lodash/findindex'
import keys from 'lodash/keys'

import PreviewerSvg from './Svg'

import { getViewBoxSize } from 'modules/PresenceSvg/helper/size'

import { getKeyName } from 'managers/Key/helper'

import { removeLoadingIndicator } from 'utils/window'

import {
    logSvgCount,
    getSvgMapForPresenceType
} from '../../utils/svg'

import {
    getPresenceFromStorage,
    getPresenceFromQueryStrings,
    setPresenceInStorage,
    setPresenceInQueryStrings,
    PRESENCE_TYPES
} from './helpers'

import {
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT
} from 'constants/access'

const
    PADDING_DASHBOARD = 10,
    HEIGHT_INPUT = 44

import './style.scss'
import PreviewerDashboard from './Dashboard'

class Previewer extends PureComponent {
    constructor(props) {
        super(props)

        // If presence is from query strings, set in storage.
        const presenceFromQueryStrings = getPresenceFromQueryStrings()
        if (presenceFromQueryStrings) {
            setPresenceInStorage(presenceFromQueryStrings)
        }

        // Either way, set presence from storage in query strings.
        const presenceFromStorage = getPresenceFromStorage()
        setPresenceInQueryStrings(presenceFromStorage)

        this.state = {
            ...presenceFromStorage,
            viewBoxWidth: 0,
            viewBoxHeight: 0,
            kilobytes: 0,
            heightAspectRatio: false
        }
    }

    componentDidMount() {
        logMount('Previewer')
        logSvgCount()
        window.onresize = debounce(this.sizePresence, 0)
        removeLoadingIndicator()
        this._focusElementForAccess()
    }

    _focusElementForAccess = () => {
        this.previewerElement.focus()
    }

    selectPresenceType = (presenceType) => {
        const presenceKey = keys(getSvgMapForPresenceType(presenceType))[0]
        this.setState({
            presenceType,
            presenceKey
        })
        setPresenceInStorage({ presenceType, presenceKey })
        setPresenceInQueryStrings({ presenceType, presenceKey })
    }

    selectPresenceKey = (presenceKey) => {
        this.setState({
            presenceKey
        })
        setPresenceInStorage({ presenceKey })
        setPresenceInQueryStrings({ presenceKey })
    }

    handleProcessSvg = (svgString) => {
        const {
                viewBoxWidth,
                viewBoxHeight
            } = getViewBoxSize(svgString),

            // Show kilobytes.
            kilobytes = (svgString.length / 1024)

        this.sizePresence({
            viewBoxWidth,
            viewBoxHeight
        })

        this.setState({
            viewBoxWidth,
            viewBoxHeight,
            kilobytes
        })
    }

    sizePresence = ({
        viewBoxWidth = this.state.viewBoxWidth,
        viewBoxHeight = this.state.viewBoxHeight
    }) => {
        const windowWidth = window.innerWidth,
            windowHeight =
                window.innerHeight - PADDING_DASHBOARD * 2 -

                // In mobile, account for height of two inputs.
                HEIGHT_INPUT * (window.innerWidth < 1000 ? 2 : 1),

            // Set height aspect ratio.
            heightAspectRatio =
                viewBoxWidth / viewBoxHeight <
                windowWidth / windowHeight

        this.setState({ heightAspectRatio })
    }

    handleKeyDownPress = (e) => {
        const keyName = getKeyName(e)

        if (keyName === ARROW_UP || keyName === ARROW_DOWN) {
            this.accessPresenceType(keyName)
        }

        if (keyName === ARROW_LEFT || keyName === ARROW_RIGHT) {
            this.accessPresenceKey(keyName)
        }
    }

    accessPresenceType(keyName) {
        const selectedIndex = findIndex(
            PRESENCE_TYPES,
            presenceType => presenceType === this.state.presenceType
        )

        let direction = 0

        if (keyName === ARROW_UP) {
            direction = PRESENCE_TYPES.length - 1
        }

        if (keyName === ARROW_DOWN) {
            direction = 1
        }

        const presenceType = PRESENCE_TYPES[
            (selectedIndex + direction) % PRESENCE_TYPES.length
        ]

        this.selectPresenceType(presenceType)
    }

    accessPresenceKey(keyName) {
        const
            svgArray = keys(getSvgMapForPresenceType(this.state.presenceType)),
            selectedIndex = findIndex(
                svgArray,
                presenceKey => presenceKey === this.state.presenceKey
            )

        let direction = 0

        if (keyName === ARROW_LEFT) {
            direction = svgArray.length - 1
        }

        if (keyName === ARROW_RIGHT) {
            direction = 1
        }

        const presenceKey = svgArray[
            (selectedIndex + direction) % svgArray.length
        ]

        this.selectPresenceKey(presenceKey)
    }

    setPreviewerElement = node => this.previewerElement = node

    render() {
        const
            {
                presenceType,
                presenceKey,
                kilobytes
            } = this.state,
            { heightAspectRatio } = this.state

        return (
            <div
                {...{
                    ref: this.setPreviewerElement,
                    className: cx(
                        'Previewer',
                        heightAspectRatio && 'Previewer__heightAspectRatio',
                        'abF',
                        'PtSansNarrow'
                    ),
                    tabIndex: -1,
                    onKeyDown: this.handleKeyDownPress
                }}
            >
                <PreviewerDashboard
                    {...{
                        presenceType,
                        presenceKey,
                        kilobytes,
                        selectPresenceType: this.selectPresenceType,
                        selectPresenceKey: this.selectPresenceKey
                    }}
                />
                {Boolean(presenceType) && Boolean(presenceKey) && (
                    <div
                        {...{
                            className: cx(
                                'Previewer__scroll'
                            )
                        }}
                    >
                        <PreviewerSvg
                            {...{
                                presenceType,
                                presenceKey,
                                handleProcessSvg: this.handleProcessSvg
                            }}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default Previewer
