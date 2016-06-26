module.exports = {

    hasParentWithTagName(child, parentTagName = '') {
         let node = child;

         while (node !== null) {
             if (node.tagName && node.tagName.toLowerCase() === parentTagName) {
                 return true;
             }

             node = node.parentNode;
         }

         return false;
    }
}