module.exports = {

    areObjectsEqual: function(objects1 = {}, objects2 = {}) {
        return (JSON.stringify(objects1) === JSON.stringify(objects2));
    },

    hasParentWithTagName: function(child, parentTagName = '') {
         let node = child.parentNode;

         while (node !== null) {

             if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
                 return true;
             }

             node = node.parentNode;
         }

         return false;
    }
}