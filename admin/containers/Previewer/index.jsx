import React, { PureComponent } from 'react'
import cx from 'classnames'
import debounce from 'debounce'
import keys from 'lodash/keys'

import PreviewerSvg from './PreviewerSvg'

import { getViewBoxSize } from 'modules/ConfiguredPresenceSvg/helper/size'

import { convertPresenceKeyToClassName } from 'helpers/format'

import {
    getFromStorage,
    setInStorage,
    removeLoadingIndicator
} from 'utils/window'

import {
    logSvgCount,
    getSvgMapForPresenceType
} from '../../utils/svg'

import { PRESENCE_TYPES } from 'constants/scene'

const
    PADDING_DASHBOARD = 10,
    HEIGHT_INPUT = 44

import './style.scss'

class Previewer extends PureComponent {
    constructor(props) {
        super(props)

        // If presence is from query strings, set in storage.
        const presenceFromQueryStrings = this.getPresenceFromQueryStrings()
        if (presenceFromQueryStrings) {
            this.setPresenceInStorage(presenceFromQueryStrings)
        }

        // Either way, set presence from storage in query strings.
        const presenceFromStorage = this.getPresenceFromStorage()
        this.setPresenceInQueryStrings(presenceFromStorage)

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
    }

    getPresenceFromStorage() {
        const
            presenceType = getFromStorage('presenceType'),
            presenceKey = getFromStorage('presenceKey')

        return { presenceType, presenceKey }
    }

    getPresenceFromQueryStrings() {
        // If presence from query strings is valid, set in store.
        const urlParams = new URLSearchParams(window.location.search),
            presenceType = urlParams.get('type') || '',
            presenceKey = urlParams.get('key') || '',

            svgMapForPresenceType = getSvgMapForPresenceType(presenceType)

        // Make sure this map exists.
        if (svgMapForPresenceType) {
            const svgForPresenceKey = svgMapForPresenceType[presenceKey]

            // Make sure this svg exists.
            if (svgForPresenceKey) {
                return { presenceType, presenceKey }
            }
        }

        return null
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
        this.setPresenceInStorage({ presenceType, presenceKey })
        this.setPresenceInQueryStrings({ presenceType, presenceKey })
    }

    setPresenceInStorage({ presenceType, presenceKey }) {
        if (presenceType) {
            setInStorage('presenceType', presenceType)
        }
        if (presenceKey) {
            setInStorage('presenceKey', presenceKey)
        }
    }

    setPresenceInQueryStrings({ presenceType, presenceKey }) {
        const urlParams = new URLSearchParams(window.location.search)

        urlParams.set('type', presenceType)
        urlParams.set('key', presenceKey)

        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`)
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

    render() {
        const
            {
                transitionalPresenceType,
                presenceType,
                presenceKey,
                kilobytes
            } = this.state,
            { heightAspectRatio } = this.state,
            selectedPresenceType = transitionalPresenceType || presenceType,

            svgMap = getSvgMapForPresenceType(selectedPresenceType) || {}

        return (
            <div
                {...{
                    className: cx(
                        'Previewer',
                        heightAspectRatio && 'Previewer__heightAspectRatio',
                        'abF'
                    )
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
