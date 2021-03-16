
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
    ["Latino (Compiti)", "https://docs.google.com/document/d/1eoKC046akmPC0o3y0Tsc3mBAePIhO3pwg2ITsCK22nM/edit"],
    ["Poesia (Compiti)", "https://docs.google.com/document/d/1YCX1Toz4Tb5WFCqcVLI2qo4zY3e3wJbgbnjNchFi14k/edit?usp=sharing"],
    ["Fisica", "https://docs.google.com/document/d/1ZKAwRP1jOhK15AcEPrUXXdaNP7lKKgK8d5UebNlTZJg/edit"],
];
