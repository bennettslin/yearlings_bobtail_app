export default {

    hasParentWithTagName(child, parentTagName = '') {
         let node = child;

         while (node !== null) {
             if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
                 return true;
             }

             node = node.parentNode;
         }

         return false;
    },

    findKeyInObject(key, object) {
        if (!object) {
            return false;
        } else if (Array.isArray(object)) {
            return object.reduce((keyFound, element) => {
                return keyFound || this.findKeyInObject(key, element);
            }, false);
        } else {
            return !!object[key];
        }
    }
}
