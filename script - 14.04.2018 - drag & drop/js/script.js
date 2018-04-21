var draggables = document.querySelectorAll(".item");
var dropable = document.querySelectorAll(".dropable");

for(var draggable of draggables){
    draggable.addEventListener("dragstart", function(e){
      var data= e.dataTransfer.setData("drag_id", e.target.id);
       e.target.classList.add("dragging");
       console.log(e.target)
    })
    draggable.addEventListener("dragend",function(e){
        
        if((e.target.childNodes.length > 1)) {
            e.target.classList.remove("dragging");
        }

    })
}

for (var drop of dropable) {
    drop.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
    
    drop.addEventListener("drop", function(e){
        console.log(e.target.getAttribute("data-dragId"));
        if(e.target.childNodes.length == 0)
        {
            
            e.dataTransfer.getData("drag_id");
            e.target.appendChild(document.getElementById(e.dataTransfer.getData("drag_id")))
            var Lamiw=e.target.childNodes[0]
            Lamiw.classList.add("drop");
            
        }

        
    })
};
