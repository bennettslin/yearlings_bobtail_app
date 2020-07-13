import React from 'react'
import { useSelector } from 'react-redux'
import { mapMainHeightStyle } from '../../redux/main/selector'
import { mapMenuHeight } from '../../redux/viewport/selector'

const getMainHoc = MainComponent => {

    const MainHoc = props => {
        const
            mainHeightStyle = useSelector(mapMainHeightStyle),
            menuHeight = useSelector(mapMenuHeight)

        return (
            <MainComponent
                {...{
                    style: {
                        top: `${menuHeight}px`,
                        height: mainHeightStyle
                    },
                    ...props
                }}
            />
        )
    }

    return MainHoc
}

export default getMainHoc
