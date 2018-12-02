import React, { Component } from 'react'
// import cx from 'classnames'

import AnnotationCards from './AnnotationCards'
import Button from '../../../Button'

import album from 'server/album'

import {
    getAnnotationObject,
    getGlobalAnnotationObject
} from 'helpers/data'

const TempGlobalAnnotationsCounter = ({
    counter,
    handleButtonClick
}) => {

    return (
        <div className="TempGlobalAnnotationsCounter">
            <div className="TempGlobalAnnotation__header">
                <span>
                    {`Annotations edited today: ${counter}`}
                </span>
                <Button
                    isSmallSize
                    {...{
                        buttonName: 'reset',
                        handleButtonClick
                    }}
                />
            </div>
        </div>
    )
}

const TempGlobalAnnotation = ({
    globalAnnotationIndex,
    handleButtonClick
}) => {
    const
        {
            songIndex,
            annotationIndex
        } = getGlobalAnnotationObject(
            globalAnnotationIndex
        ),
        annotationObject = getAnnotationObject(
            songIndex,
            annotationIndex
        ),
        {
            title,
            cards
        } = annotationObject

    return (
        <div className="TempGlobalAnnotation">
            {false && JSON.stringify(annotationObject, null, 3)}

            <div className="TempGlobalAnnotation__header">
                <span>
                    {globalAnnotationIndex}. {title}
                </span>
                <Button
                    isSmallSize
                    {...{
                        buttonName: 'increment',
                        handleButtonClick
                    }}
                />
            </div>

            <AnnotationCards {...{ cards }} />
        </div>
    )
}

class TempGlobalAnnotations extends Component {

    // static propTypes = {}

    state = {
        first: null,
        second: null,
        third: null
    }

    componentDidMount() {
        const {
                globalAnnotationIndices
            } = album,

            annotationIndexInterval = Math.floor(
                globalAnnotationIndices.length / 3
            )

        if (!global.localStorage.globalAnnotationsCounter) {
            global.localStorage.globalAnnotationsCounter = 0
        }

        if (!global.localStorage.globalAnnotationIndexFirst) {
            global.localStorage.globalAnnotationIndexFirst = 0
        }
        if (!global.localStorage.globalAnnotationIndexSecond) {
            global.localStorage.globalAnnotationIndexSecond =
                annotationIndexInterval
        }
        if (!global.localStorage.globalAnnotationIndexThird) {
            global.localStorage.globalAnnotationIndexThird =
                annotationIndexInterval * 2
        }

        this.setState({
            first: parseInt(global.localStorage.globalAnnotationIndexFirst),
            second: parseInt(global.localStorage.globalAnnotationIndexSecond),
            third: parseInt(global.localStorage.globalAnnotationIndexThird),
            counter: parseInt(global.localStorage.globalAnnotationsCounter)
        })
    }

    incrementFirst = () => {
        const first = this.state.first + 1,
            counter = this.state.counter + 1

        global.localStorage.globalAnnotationIndexFirst = first
        global.localStorage.globalAnnotationsCounter = counter

        this.setState({
            first,
            counter
        })
    }

    incrementSecond = () => {
        const second = this.state.second + 1,
            counter = this.state.counter + 1

        global.localStorage.globalAnnotationIndexSecond = second
        global.localStorage.globalAnnotationsCounter = counter

        this.setState({
            second,
            counter
        })
    }

    incrementThird = () => {
        const third = this.state.third + 1,
            counter = this.state.counter + 1

        global.localStorage.globalAnnotationIndexThird = third
        global.localStorage.globalAnnotationsCounter = counter

        this.setState({
            third,
            counter
        })
    }

    resetCounter = () => {
        global.localStorage.globalAnnotationsCounter = 0

        this.setState({
            counter: 0
        })
    }

    render() {

        const {
            first,
            second,
            third,
            counter
        } = this.state

        return first !== null && (
            <div className="TempGlobalAnnotations">
                <TempGlobalAnnotationsCounter
                    {...{
                        counter,
                        handleButtonClick: this.resetCounter
                    }}
                />
                <TempGlobalAnnotation
                    {...{
                        globalAnnotationIndex: first,
                        handleButtonClick: this.incrementFirst
                    }}
                />
                <TempGlobalAnnotation
                    {...{
                        globalAnnotationIndex: second,
                        handleButtonClick: this.incrementSecond
                    }}
                />
                <TempGlobalAnnotation
                    {...{
                        globalAnnotationIndex: third,
                        handleButtonClick: this.incrementThird
                    }}
                />
            </div>
        )
    }
}


export default TempGlobalAnnotations
