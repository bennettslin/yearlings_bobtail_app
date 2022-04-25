export const spreadHelmetConfig = ({ config, nameKey }) => (
    Object.keys(config).map(key => ({
        [nameKey]: key,
        content: config[key],
    }))
)

const _getTitleText = title => (
    typeof title === 'string' ? title : title.lyric
)

export const getPitchTitleAsText = entity => (
    Array.isArray(entity) ?
        entity.map(title => (
            _getTitleText(title)
        )).join(' ') :
        _getTitleText(entity)
)
