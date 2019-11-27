import React, { PureComponent } from 'react'
import cx from 'classnames'
import debounce from 'debounce'
import keys from 'lodash/keys'

import PreviewerDashboard from '../Previewer/Dashboard'
import PreviewerSvg from '../Previewer/Svg'

import { getViewBoxSize } from 'modules/PresenceSvg/helper/size'

import { getKeyName } from 'managers/Key/helper'

import { removeLoadingIndicator } from 'utils/window'

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

class LegacyThings extends PureComponent {
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
        logMount('LegacyThings')
        logSvgCount()
        window.onresize = debounce(this.setHeightAspectRatio, 0)
        removeLoadingIndicator()
        this.focusPreviewerElement()
    }

    focusPreviewerElement = () => {
        this.previewerElement.focus()
    }

    selectPresence = ({ type, key }) => {
        let presenceType = type,
            presenceKey = key
        if (type) {
            presenceKey = keys(getPreviewerSvgMapForThing(type))[0]
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

    handleKeyDownPress = (e) => {
        const { presenceType, presenceKey } = this.state

        accessPresence({
            keyName: getKeyName(e),
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
                        'LegacyThings',
                        'abF',
                        'PtSansNarrow'
                    ),
                    tabIndex: -1,
                    onKeyDown: this.handleKeyDownPress
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

export default LegacyThings
