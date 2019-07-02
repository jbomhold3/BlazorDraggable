window.BlazorDragable = {
    getOffsets: function (id) {
        var results = { Top: document.getElementById(id).offsetTop, Left: document.getElementById(id).offsetLeft }
        return JSON.stringify(results);
    },
    getBoundingClientRect: function (id) {
        var rect = document.getElementById(id).getBoundingClientRect();
        var results = { Top: Math.round(rect.top), Left: Math.round(rect.left) }
        return JSON.stringify(results);
    },
    getSize: function (id) {
        var el = document.getElementById(id);

        var results = { Width: Math.round(el.offsetWidth), Height: Math.round(el.offsetHeight) }
        return JSON.stringify(results);
    },
};