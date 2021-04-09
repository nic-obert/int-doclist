
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
   ["Italiano", "https://docs.google.com/spreadsheets/d/1GHM4f89JSqW-w8YdNpHyM7mPExr08wfhl4Eusr89Spk/edit?usp=sharing"],
   ["Storia", "https://docs.google.com/spreadsheets/d/1ya_sRrQg7DsqjYI7aAjbUG5TBYYpNoVF-NhUrJQJM6c/edit?usp=drivesdk"],
   ["Scienze", "https://docs.google.com/spreadsheets/d/1N6piJzzpJ8kGEeeU35r7VwaD3KmMlmDrOTmk1_JF2Vk/edit?usp=drivesdk"],
];
