import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'
import scrollIntoView from 'scroll-into-view'

import PreviewerSvg from './Svg'
import PreviewerDashboard from './Dashboard'

import {
    capitaliseForClassName,
    convertPresenceKeyToClassName
} from '../../../app/helpers/format'

import { removeLoadingIndicator } from '../../../app/utils/window'

import { accessPresence } from '../../utils/access'

import {
    getPresenceFromStorage,
    getPresenceFromQueryStrings,
    setPresenceInStorage,
    setPresenceInQueryStrings
} from '../../utils/storage'

import {
    getPreviewerSvgMapForActor,
    getPreviewerSvgMapForThing
} from '../../utils/svg'

import { BACKDROP } from '../../../app/constants/scene/things'

import './style.scss'

class Previewer extends PureComponent {
    static propTypes = {
        isActor: PropTypes.bool
    }

    constructor(props) {
        super(props)

        // Set presence from storage in query strings.
        const { isActor } = props,
            presenceFromStorage = getPresenceFromStorage(isActor)

        setPresenceInQueryStrings(presenceFromStorage)

        // Set presence from query strings in storage. Default is first index.
        setPresenceInStorage({
            isActor,
            ...getPresenceFromQueryStrings(isActor)
        })

        this.state = presenceFromStorage
    }

    componentDidMount() {
        logMount('Previewer')
        removeLoadingIndicator()
        this.focusPreviewerElement()

        // TODO: Scrolling doesn't always work because svg hasn't rendered yet.
        setTimeout(this.scrollPresenceIntoView, 250)
    }

    componentDidUpdate(prevProps, prevState) {
        const
            {
                presenceType: prevType,
                presenceKey: prevKey
            } = prevState,
            {
                presenceType,
                presenceKey
            } = this.state

        if (prevType !== presenceType || prevKey !== presenceKey) {
            this.scrollPresenceIntoView()
        }
    }

    getPreviewerMapGetter() {
        const { isActor } = this.props

        return isActor ?
            getPreviewerSvgMapForActor :
            getPreviewerSvgMapForThing
    }

    focusPreviewerElement = () => {
        this.previewerElement.focus()
    }

    selectPresence = ({ type, key }) => {
        const { isActor } = this.props
        let presenceType = type,
            presenceKey = key

        if (type) {
            presenceKey = keys(this.getPreviewerMapGetter()(type))[0]
        } else if (key) {
            presenceType = this.state.presenceType
        }

        this.setState({
            presenceType,
            presenceKey
        })
        setPresenceInStorage({
            isActor,
            presenceType,
            presenceKey
        })

        setPresenceInQueryStrings({ presenceType, presenceKey })
    }

    handleKeyDownPress = (e) => {
        const
            { isActor } = this.props,
            { presenceType, presenceKey } = this.state

        accessPresence({
            e,
            isActor,
            presenceType,
            presenceKey,
            selectPresence: this.selectPresence
        })
    }

    scrollPresenceIntoView = ({
        presenceType = this.state.presenceType,
        presenceKey = this.state.presenceKey
    } = {}) => {
        const element = document.querySelector(
            `.${capitaliseForClassName(presenceType)} .${convertPresenceKeyToClassName(presenceKey)}`
        )

        scrollIntoView(element, { time: 100 })
    }

    getScrollVertical() {
        const { presenceType } = this.state
        return presenceType === BACKDROP
    }

    setPreviewerElement = node => this.previewerElement = node

    render() {
        const
            { isActor } = this.props,
            {
                presenceType,
                presenceKey
            } = this.state,

            svgMap = this.getPreviewerMapGetter()(presenceType)

        if (!presenceType) {
            return null
        }

        return (
            <div
                {...{
                    ref: this.setPreviewerElement,
                    className: cx(
                        'Previewer',
                        'abF',
                        'PtSansNarrow'
                    ),
                    tabIndex: -1,
                    onKeyDown: this.handleKeyDownPress
                }}
            >
                <PreviewerDashboard
                    {...{
                        isActor,
                        presenceType,
                        presenceKey,
                        selectPresence: this.selectPresence
                    }}
                />
                <div
                    {...{
                        className: cx(
                            'Previewer__main',
                            'Previewer__mainFullHeight',
                            this.getScrollVertical() ?
                                'Previewer__mainScrollVertical' :
                                'Previewer__mainScrollHorizontal'
                        )
                    }}
                >
                    {/* Render all instances. */}
                    {keys(svgMap).map(presenceKey => (
                        <PreviewerSvg
                            showKilobytes
                            {...{
                                key: `${presenceType}_${presenceKey}`,
                                isActor,
                                presenceType,
                                presenceKey
                            }}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Previewer
