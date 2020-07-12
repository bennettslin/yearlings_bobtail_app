import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapMainHeightStyle } from '../../redux/main/selector'
import { mapMenuHeight } from '../../redux/viewport/selector'

const getMainHoc = MainComponent => {

    const MainHoc = () => {
        const
            mainHeightStyle = useSelector(mapMainHeightStyle),
            menuHeight = useSelector(mapMenuHeight)

        return (
            <MainComponent
                {...{
                    className: cx(
                        'abF'
                    ),
                    style: {
                        top: `${menuHeight}px`,
                        height: mainHeightStyle
                    }
                }}
            />
        )
    }

    return MainHoc
}

export default getMainHoc
