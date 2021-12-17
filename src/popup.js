async function getCurrentTab() { 
    let queryOptions = {active: true, lastFocusedWindow: true};
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

function matchURL(url) {
    r = RegExp('https\:\/\/www\.youtube\.com\/watch\\?v=')
    return url.match(r)
}

function search_song(song_name) {
    $('#status').text('searching ' + song_name + '...' )
}

function on_click() {
    $('#log').text('submitted')
    search_song($('#song').val())
}

$('#search').on('click', on_click)

getCurrentTab().then((tab) => {
    if (matchURL(tab.url)) {
        $('#log').text(tab.url)
    } else {
        return;
    }
})