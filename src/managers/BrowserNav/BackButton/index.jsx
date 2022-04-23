import { useEffect } from 'react'
import { getWindow } from '../../../utils/browser'

const BackButtonManager = () => {

    useEffect(() => {
        getWindow().onpopstate = () => {
            logAdmin(`on pop state: ${getWindow().location.pathname}`)
        }

        return () => {
            getWindow().onpopstate = null
        }

    }, [])

    return null
}

BackButtonManager.propTypes = {
}

export default BackButtonManager
