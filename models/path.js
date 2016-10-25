"use strict";
var path = (function () {
    function path(pathInfo) {
        this.stroke = true;
        this.color = '#3388ff';
        this.weight = 3;
        this.opacity = 1;
        this.lineCap = 'round';
        this.lineJoin = 'round';
        this.dashArray = null;
        this.dashOffset = null;
        this.fill = true;
        this.fillColor = '#3388ff';
        this.fillOpacity = 0.2;
        this.fillRule = 'evenodd';
        this.className = null;
        if (pathInfo !== null) {
            this.color = pathInfo.color;
        }
    }
    return path;
}());
exports.path = path;
//# sourceMappingURL=path.js.map