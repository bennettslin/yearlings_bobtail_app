import Progress from '../../admin/containers/Progress'
import getPageComponent from '../../app/containers/Page'

export default IS_STAGING ?
    Progress :
    getPageComponent(0)