export const findKeyInObject = (key, object) => {
    if (!object) {
        return false;
    } else if (Array.isArray(object)) {
        return object.reduce((keyFound, element) => {
            return keyFound || findKeyInObject(key, element);
        }, false);
    } else {
        return !!object[key];
    }
}

export const hasParentWithTagName = (child, parentTagName = '') => {
     let node = child;
     while (node !== null) {
         if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}
