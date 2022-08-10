const btnSearch = document.getElementById('btnSearch');

btnSearch.onclick = async function () {
    const searchText = document.getElementById('searchText').value.trim();
    if (!searchText) {
        // empty string
        return;
    }

    const apikey = 'aa9e49f';
    const url = `http://www.omdbapi.com/?s=${searchText}&apikey=${apikey}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const titles = data.Search.map((m) => m.Title);
    let output = '<ul>';
    titles.forEach((t) => (output += '<li>' + t + '</li>'));
    output += '</ul>';
    // console.log(output);
    document.getElementById('output').innerHTML = output;
};
