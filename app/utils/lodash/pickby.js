const pickBy = (object) => {
    const returnObject = {}
    for (const key in object) {
        if (
            object[key] !== null &&
            object[key] !== false &&
            object[key] !== undefined
        ) {
            returnObject[key] = object[key]
        }
    }
    return returnObject
}

export default pickBy
