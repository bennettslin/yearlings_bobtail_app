import React, { Component } from 'react'
// import cx from 'classnames'

import AnnotationCards from './TempGlobalAnnotation/AnnotationCards'
import Button from 'components/Button/Button'

import {
    getAlbum,
    getAnnotationObject,
    getGlobalAnnotationObject
} from 'helpers/dataHelper'

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
            } = getAlbum(),

            annotationIndexInterval = Math.floor(
                globalAnnotationIndices.length / 3
            )

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
            third: parseInt(global.localStorage.globalAnnotationIndexThird)
        })
    }

    incrementFirst = () => {
        const first = this.state.first + 1

        global.localStorage.globalAnnotationIndexFirst = first

        this.setState({
            first
        })
    }

    incrementSecond = () => {
        const second = this.state.second + 1

        global.localStorage.globalAnnotationIndexSecond = second

        this.setState({
            second
        })
    }

    incrementThird = () => {
        const third = this.state.third + 1

        global.localStorage.globalAnnotationIndexThird = third

        this.setState({
            third
        })
    }

    render() {

        const {
            first,
            second,
            third
        } = this.state

        return first !== null && (
            <div className="TempGlobalAnnotations">
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
