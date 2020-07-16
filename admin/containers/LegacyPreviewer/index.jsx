import React, { PureComponent } from 'react'
import cx from 'classnames'
import debounce from 'debounce'

import PreviewerDashboard from '../Previewer/Dashboard'
import PreviewerSvg from '../Previewer/Svg'

import { getViewBoxSize } from '../../../app/components/Presence/Svg/helpers/size'
import { getWindow } from '../../../app/utils/browser'
import { accessPresence } from '../../utils/access'
import {
    getPresenceFromStorage,
    getPresenceFromQueryStrings,
    setPresenceInStorage,
    setPresenceInQueryStrings
} from '../../utils/storage'
import { logSvgCount } from '../../utils/log'
import { getPreviewerSvgMapForThing } from '../../utils/svg'
import { getHeightAspectRatio } from './helper'

class LegacyPreviewer extends PureComponent {
    constructor(props) {
        super(props)

        // Set presence from storage in query strings.
        const presenceFromStorage = getPresenceFromStorage()
        setPresenceInQueryStrings(presenceFromStorage)

        // Set presence from query strings in storage. Default is first index.
        setPresenceInStorage(getPresenceFromQueryStrings())

        this.state = {
            ...presenceFromStorage,
            viewBoxWidth: 0,
            viewBoxHeight: 0,
            kilobytes: 0,
            heightAspectRatio: false
        }
    }

    componentDidMount() {
        logMount('LegacyPreviewer')
        logSvgCount()
        getWindow().onresize = debounce(this.setHeightAspectRatio, 0)
        this.focusPreviewerElement()
    }

    focusPreviewerElement = () => {
        this.previewerElement.focus()
    }

    selectPresence = ({ type, key }) => {
        let presenceType = type,
            presenceKey = key
        if (type) {
            presenceKey = Object.keys(getPreviewerSvgMapForThing(type))[0]
        } else if (key) {
            presenceType = this.state.presenceType
        }

        this.setState({
            presenceType,
            presenceKey
        })
        setPresenceInStorage({ presenceType, presenceKey })
        setPresenceInQueryStrings({ presenceType, presenceKey })
    }

    setHeightAspectRatio = ({
        viewBoxWidth = this.state.viewBoxWidth,
        viewBoxHeight = this.state.viewBoxHeight
    }) => {
        this.setState({
            heightAspectRatio: getHeightAspectRatio({
                viewBoxWidth,
                viewBoxHeight
            })
        })
    }

    handleProcessSvg = ({ svgString, kilobytes }) => {
        const {
            viewBoxWidth,
            viewBoxHeight
        } = getViewBoxSize(svgString)

        this.setHeightAspectRatio({
            viewBoxWidth,
            viewBoxHeight
        })

        this.setState({
            viewBoxWidth,
            viewBoxHeight,
            kilobytes
        })
    }

    handleKeyDown = e => {
        const { presenceType, presenceKey } = this.state

        accessPresence({
            e,
            presenceType,
            presenceKey,
            selectPresence: this.selectPresence
        })
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
                        'LegacyPreviewer',
                        'abF',
                        'PtSansNarrow'
                    ),
                    tabIndex: -1,
                    onKeyDown: this.handleKeyDown
                }}
            >
                <PreviewerDashboard
                    hideKilobytesInMobile
                    {...{
                        presenceType,
                        presenceKey,
                        kilobytes,
                        selectPresence: this.selectPresence
                    }}
                />
                <div
                    {...{
                        className: cx(
                            'Previewer__main',
                            heightAspectRatio && 'Previewer__mainFullHeight'
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
            </div>
        )
    }
}

export default LegacyPreviewer
