var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}



var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        updateProgressBar(); // Update progress bar when a task is removed
    }
}



var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        updateProgressBar(); // Update progress bar when a task is checked/unchecked
    }
}, false);



function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        updateProgressBar(); // Update progress bar when a new task is added
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            updateProgressBar(); // Update progress bar when a task is removed
        }
    }
}

function updateProgressBar() {
    var totalTasks = document.getElementsByTagName("LI").length;
    var completedTasks = document.getElementsByClassName("checked").length;
    var progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    
    var filledBar = document.querySelector('.filled');
    filledBar.style.width = progressPercentage + '%';
}

// Initial update of the progress bar
updateProgressBar();
