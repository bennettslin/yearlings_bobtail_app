import React, { PureComponent } from 'react'
import cx from 'classnames'
import debounce from 'debounce'
import findIndex from 'lodash/findindex'
import keys from 'lodash/keys'

import PreviewerSvg from './PreviewerSvg'

import { getViewBoxSize } from 'modules/PresenceSvg/helper/size'

import { convertPresenceKeyToClassName } from 'helpers/format'
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
    setPresenceInQueryStrings
} from './helpers'

import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene'

const PRESENCE_TYPES = [
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
]

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
            transitionalPresenceType: '',
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

    selectPresenceType = ({ target: { value: transitionalPresenceType } }) => {
        this.setState({ transitionalPresenceType })
    }

    selectPresenceKey = ({ target: { value: presenceKey } }) => {
        const {
                transitionalPresenceType,
                presenceType: prevPresenceType
            } = this.state,
            presenceType = transitionalPresenceType || prevPresenceType
        this.setState({
            transitionalPresenceType: '',
            presenceType,
            presenceKey
        })
        setPresenceInStorage({ presenceType, presenceKey })
        setPresenceInQueryStrings({ presenceType, presenceKey })
    }

    handleProcessSvg = (svgString) => {
        const {
                viewBoxWidth,
                viewBoxHeight
            } = getViewBoxSize(svgString),

            // Show kilobytes.
            kilobytes = (svgString.length / 1024).toFixed(2)

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
            presenceType => presenceType === this.getSelectedPresenceType()
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

        this.selectPresenceType({ target: { value: presenceType } })
    }

    accessPresenceKey(keyName) {
        const
            svgArray = keys(this.getSvgMap()),
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

        this.selectPresenceKey({ target: { value: presenceKey } })
    }

    getSelectedPresenceType() {
        const {
            transitionalPresenceType,
            presenceType
        } = this.state
        return transitionalPresenceType || presenceType
    }

    getSvgMap() {
        const selectedPresenceType = this.getSelectedPresenceType()
        return getSvgMapForPresenceType(selectedPresenceType) || {}
    }

    setPreviewerElement = node => this.previewerElement = node

    render() {
        const
            {
                presenceType,
                presenceKey,
                kilobytes
            } = this.state,
            { heightAspectRatio } = this.state,
            selectedPresenceType = this.getSelectedPresenceType(),

            svgMap = this.getSvgMap()

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
                <div
                    {...{
                        className: cx(
                            'Previewer__dashboard'
                        )
                    }}
                >
                    <select
                        {...{
                            className: 'Previewer__dashboardChild',
                            value: selectedPresenceType,
                            onChange: this.selectPresenceType
                        }}
                    >
                        <option {...{ value: '' }}>Pick a presence type</option>
                        {PRESENCE_TYPES.map(selectedPresenceType => (
                            <option
                                {...{
                                    key: selectedPresenceType,
                                    value: selectedPresenceType
                                }}
                            >
                                {selectedPresenceType}
                            </option>
                        ))}
                    </select>
                    <select
                        {...{
                            className: 'Previewer__dashboardChild',
                            value: presenceKey,
                            onChange: this.selectPresenceKey
                        }}
                    >
                        <option {...{ value: '' }}>Pick a presence key</option>
                        {keys(svgMap)
                            .filter(presenceKey => (
                                Boolean(svgMap[presenceKey])
                            ))
                            .map(presenceKey => (
                                <option
                                    {...{
                                        key: presenceKey,
                                        value: presenceKey
                                    }}
                                >
                                    {convertPresenceKeyToClassName(presenceKey)}
                                </option>
                            ))}
                    </select>
                    <div
                        {...{
                            className: cx(
                                'Previewer__dashboardChild',
                                'Previewer__kilobytes',
                                'flexCentreContainer'
                            )
                        }}
                    >
                        {kilobytes} kiB
                    </div>
                </div>
                {Boolean(selectedPresenceType) && Boolean(presenceKey) && (
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
