
function loadDocs()
{
    const table = document.getElementById("doclist")
    docs.sort(
        (a,b) => (a[0].charCodeAt(0) > b[0].charCodeAt(0)) ? 1 : ((b[0].charCodeAt(0) > a[0].charCodeAt(0)) ? -1 : 0)
    ).forEach(doc => {
        table.innerHTML += `<tr><td>
            <a class="doc-link" href="${doc[1]}" target="_blank">${doc[0]}</a>
            </td></tr>`
    });
    
}


window.onload = () => { loadDocs(); };


const docs = 
[
   
];
