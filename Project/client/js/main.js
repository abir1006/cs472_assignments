let login = true;
const userID = 2;

let playListDom = document.getElementById("playlist");
let logout = document.getElementById("logout");

let allSongs = [
    {id: 1, title: "Esho Brishti Namai", releasedDate: "2020-12-05"},
    {id: 2, title: "Tomar Jonno", releasedDate: "2021-12-05"},
    {id: 3, title: "Bakshe Bakshe", releasedDate: "2021-12-05"},
]


let playList = [];

window.onload = function () {
    checkLogin();
    loadMusic();
    if (playList.length === 0) {
        playListDom.innerHTML = `<tr><td class="text-center border-0" colspan="3">No playlist found</td></tr>`;
    }

    logout.onclick = function (e) {
        e.preventDefault();
        window.location.href = 'index.html';
    }


}


function loadMusic() {
    let musicListDom = document.getElementById("music_list");
    let html = ``;
    allSongs.map(music => {
        html += `<tr>
                    <th scope="row"> ${music.id}</th>
                    <td>${music.title}</td>
                    <td>${music.releasedDate}</td>
                    <td class="action_column" id="music_action_${music.id}">
                        <i onclick="addPlayList(${music.id}, ${userID})" class="fa fa-plus"></i>
                    </td>
                </tr>`
    })
    musicListDom.innerHTML = html;

}


function addPlayList(musicID, userID) {
    let selectedSong = allSongs.filter(m => m.id === musicID)[0];
    selectedSong["playID"] = playList.length + 1;
    selectedSong["userID"] = userID;
    playList.push(selectedSong);

    if (playList.length === 0) {
        playListDom.innerHTML = `<tr><td class="text-center">No playlist found</td></tr>`;
    } else {
        document.getElementById(`music_action_${musicID}`).innerHTML = '<i class="fa fa-plus icon_disable"></i>';
        reloadPlayListDom();
    }
}

function reloadPlayListDom() {
    let html = ``;
    playList.map(play => {
        html += `<tr>
                    <th scope="row"> ${play.playID}</th>
                    <td>${play.title}</td>
                    <td class="action_column">
                    <i onclick="removePlaylist(${play.playID})" title="Remove from playlist" class="fa fa-minus mx-3"></i>
                    <i title="Play song" class="fa fa-play mx-3"></i></td>
                </tr>`
    })
    playListDom.innerHTML = html;
}

function removePlaylist(id) {
    let pIndex = playList.findIndex(item => item.playID === id);
    let deletedItem = playList.splice(pIndex, 1)[0];
    reloadPlayListDom();
    document.getElementById(`music_action_${deletedItem.id}`).innerHTML = `<i onclick="addPlayList(${deletedItem.id}, ${userID})" class="fa fa-plus"></i>`;
}

function checkLogin() {
    if (!login) {
        window.location.href = 'index.html';
    }
}
