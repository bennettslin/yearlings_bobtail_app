import React, { PureComponent } from 'react'
import cx from 'classnames'
import debounce from 'debounce'
import keys from 'lodash/keys'

import PreviewerSvg from '../PreviewerSvg'

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

import {
    logSvgCount,
    getSvgMapForThingType
} from '../../utils/svg'

import { getHeightAspectRatio } from './helper'

import './style.scss'
import ThingsDashboard from './Dashboard'

class Things extends PureComponent {
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
        logMount('Things')
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
            presenceKey = keys(getSvgMapForThingType(type))[0]
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

    handleProcessSvg = (svgString) => {
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
            kilobytes: svgString.length / 1024
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
                        'Things',
                        heightAspectRatio && 'Previewer__heightAspectRatio',
                        'abF',
                        'PtSansNarrow'
                    ),
                    tabIndex: -1,
                    onKeyDown: this.handleKeyDownPress
                }}
            >
                <ThingsDashboard
                    {...{
                        presenceType,
                        presenceKey,
                        kilobytes,
                        selectPresence: this.selectPresence
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

export default Things
