/**
 * Sets up a clone method on the Array prototype
 */

Array.prototype.clone = function() {
    return this.slice();  
};
