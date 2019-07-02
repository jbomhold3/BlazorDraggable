# BlazorDraggable

Draggable Compoents for Blazor.Early Versions might not work Client side

## Install

[![NuGet Pre Release](https://img.shields.io/nuget/vpre/BlazorDraggable.svg)](https://www.nuget.org/packages/BlazorDraggable/)

## Usage Server Side
- _host.cshtml
``` html 
<script src="_content/BlazorDraggable/BlazorDragable.js"></script>
```
- Basic Usage
``` html
<DragableItem results="@HandleResults>Content</DragableItem>
```    
``` c#
@code
{
    private void HandleResults(TopAndLeft position)
    {
        Console.WriteLine($"Top:{position.Top}, Left:{position.Left}");
    }
}
```
- Advanced Use
``` html
<DragableContainer style="width:500px;height:500px; border:1px solid green">
  <DragableItem Class="card" UseHandle="true" BoundToContainer="true" Style="width:300px;" results="@HandleResults">
    <DragableHandle  Class="card-header">Click here to Drag</DragableHandle>
    <div class="card-body"> <p>Vivamus in magna at velit consectetur bibendum. Maecenas viverra diam in molestie accumsan. Etiam nec neque lacus. Integer molestie eget dui at luctus. Vivamus pulvinar enim nisi, in malesuada nulla ultrices fringilla. Praesent tincidunt facilisis sagittis. Phasellus scelerisque dolor sit amet nisl faucibus, at fermentum urna laoreet. </p></div>
  </DragableItem>
</DragableContainer>
```    
``` c#
@code
{
    private void HandleResults(TopAndLeft position)
    {
        Console.WriteLine($"Top:{position.Top}, Left:{position.Left}");
    }
}
```

## Change Log
https://github.com/jbomhold3/BlazorDraggable/releases
