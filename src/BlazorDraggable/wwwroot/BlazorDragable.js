window.BlazorDraggable = {
    DragableItems: [],
    //getOffsets: function (id) {
    //    var results = { Top: document.getElementById(id).offsetTop, Left: document.getElementById(id).offsetLeft }
    //    return JSON.stringify(results);
    //},
    //getBoundingClientRect: function (id) {
    //    var rect = document.getElementById(id).getBoundingClientRect();
    //    var results = { Top: Math.round(rect.top), Left: Math.round(rect.left) }
    //    return JSON.stringify(results);
    //},
    //getSize: function (id) {
    //    var el = document.getElementById(id);
    //    var results = { Width: Math.round(el.offsetWidth), Height: Math.round(el.offsetHeight) }
    //    return JSON.stringify(results);
    //},
    HandleMouseDown: function (id) {
        this.DragableItems[id].CanMove = true;
    },
    AddEventListener: function (id, bound, handle) {
        window.BlazorDraggable.DragableItems[id] = {
            BoundToContainer: bound, UseHandle: handle, MouseOffsets: {
                Top: 0,
                Left:0,
            }, CanMove: false};

        var el = document.getElementById(id);
        el.addEventListener('mousedown', e => {
            var myid = e.currentTarget.id;
            if (e.buttons == 1) {

                var rect = e.currentTarget.getBoundingClientRect();
                window.BlazorDraggable.DragableItems[myid].MouseOffsets = { Top: Math.round(rect.top), Left: Math.round(rect.left) }
                window.BlazorDraggable.DragableItems[myid].MouseOffsets.Top = e.clientY - window.BlazorDraggable.DragableItems[myid].MouseOffsets.Top;
                window.BlazorDraggable.DragableItems[myid].MouseOffsets.Left = e.clientX - window.BlazorDraggable.DragableItems[myid].MouseOffsets.Left;
                if (!window.BlazorDraggable.DragableItems[myid].UseHandle || e.target.id == myid + "-Handle") {
                    window.BlazorDraggable.DragableItems[myid].CanMove = true;
                }
            }
        });
        el.addEventListener('mouseup', e => {
            var myid = e.currentTarget.id;
            var rect = e.currentTarget.getBoundingClientRect();
            DotNet.invokeMethodAsync('BlazorDraggable', 'ReturnArrayAsync', JSON.stringify({ Top: Math.round(rect.top), Left: Math.round(rect.left) }));
        });
        el.addEventListener('mousemove', e => {
            var myid = e.currentTarget.id;
            
            if (e.buttons == 1) {
                if (!window.BlazorDraggable.DragableItems[myid].CanMove) {
                    return;
                }
                var y = e.clientY - window.BlazorDraggable.DragableItems[myid].MouseOffsets.Top;
                var x = e.clientX - window.BlazorDraggable.DragableItems[myid].MouseOffsets.Left;
                var clientOffset = { Top: e.currentTarget.parentNode.offsetTop, Left: e.currentTarget.parentNode.offsetLeft }
                x -= clientOffset.Left;
                y -= clientOffset.Top;
                if (window.BlazorDraggable.DragableItems[myid].BoundToContainer) {
            
                    if ((x) < 0) {
                        x = 0;
                    }
                    if ((y) < 0) {
                        y = 0;
                    }

                    if ((x + e.currentTarget.offsetWidth) > e.currentTarget.parentNode.offsetWidth) {
                        x = e.currentTarget.parentNode.offsetWidth - e.offsetWidth;
                    }
                    if ((y + e.currentTarget.offsetHeight) > e.currentTarget.parentNode.offsetHeight) {
                        y = e.currentTarget.parentNode.offsetHeight - e.offsetHeight;
                    }
                }

             
                var transform = "translate3d(" + x + "px, " + y + "px, " + 0 + "px)";
                e.currentTarget.style.transform = transform; 
            }
            else {
                window.BlazorDraggable.DragableItems[myid].CanMove = false;
                
            }
        });
    }

};