using BlazorDraggable.Models;
using Microsoft.JSInterop;
using System;
using System.Threading.Tasks;

namespace BlazorDraggable
{
    public static class JsHandler
    {
        public static EventHandler<string> ResultsChanged { get; set; }

        [JSInvokable]
        public static Task<string> ReturnArrayAsync(string data)
        {
            ResultsChanged.Invoke(null, data);
            return Task.FromResult(data);
        }
    }
}
