let container = document.querySelector(".container")

hashChange()

function hashChange() {

    fileName = location.hash ? location.hash.split( '#' )[1] : 'design.md'

    document.title = document.title ? document.title : fileName

    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( 'GET', fileName, true )
    xmlHttp.onreadystatechange = function() {

        container.innerHTML = xmlHttp.readyState === 4 ? new showdown.Converter({tables: true}).makeHtml( xmlHttp.responseText ) : ''

    };

    xmlHttp.send( null )

}