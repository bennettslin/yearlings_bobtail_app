import Actors from '../../admin/containers/Actors'
import getPageComponent from '../../app/containers/Page'

export default IS_STAGING ?
    Actors :
    getPageComponent(0)
