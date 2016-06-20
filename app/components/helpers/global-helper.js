module.exports = {

    areObjectsEqual(objects1 = {}, objects2 = {}) {
        return (JSON.stringify(objects1) === JSON.stringify(objects2));
    },

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

    setInSession(key, value) {
        window.localStorage[key] = value;
    },

    getFromSession(key) {
        if (key) {
            const stringValue = window.localStorage[key],
                intValue = parseInt(stringValue);
            return isNaN(intValue) ? stringValue : intValue;

        } else {
            return 0;
        }
    }
}