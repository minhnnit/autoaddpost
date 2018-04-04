document.addEventListener('DOMContentLoaded', GetPost );
    document.getElementById('savePost').addEventListener('click', savePost);

function savePost(){
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    chrome.storage.sync.set
    ({'title':title, 'content':content
    }, function(){
        alert("Settings saved");
    });
}
function GetPost() {
    chrome.storage.sync.get({'title':'','content':''
    }, function (items) {
        document.getElementById('title').value = items.title;
        document.getElementById('content').value = items.content;
    });
}

