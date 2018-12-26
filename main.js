// newgit main.js

function mainContent() {
    return (`
    <div class="row">
        <div class="col">
        This is the main.
        </div>
    </div>
    `)
}

function mainPage() {
    $("#main").append(mainContent());
    console.log(mainContent());
}

$('document').ready(mainPage());