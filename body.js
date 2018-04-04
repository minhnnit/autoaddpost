

$(document.body).prepend('<div id="abc">
    <fieldset>
    Saved Post
<div>
Title:<textarea type="text" id="data" readonly="readonly"></textarea>
</div>
<div>
    Content:<textarea id="data2" readonly="readonly"></textarea>
</div>
</fieldset>
<fieldset>
    Add Post
    <div>
        Title:<input type="text" id="title" placeholder="Enter title here">
    </div>
    <div>
        Content:<textarea id="content"></textarea>
        <button id="set" onclick="savePost()">Save Post</button>
        <button id="remove">Remove Saved Post</button>
    </div>
</fieldset>
</div>');
