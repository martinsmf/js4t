// var album = {
//     title: 'Black Album',
//     relesead: 1991,
//     showInfo: function(){
//         console.log(`Titulo do algum: ${this.title}, lançado em : ${this.relesead}`)
//     }
// }

var album = new Object()

album.title = 'Black Album'
album.relesead = 1991
album.showInfo = function(){
    console.log(`Titulo do algum: ${this.title}, lançado em : ${this.relesead}`)
}

album.showInfo()
console.log(album.title)
console.log(album.relesead)

album.tracks = ['Enter Sandman', 'The Unforgiven', 'Nothig Else Matters', 'The Struggle Within']

album.showTracks = function () {
    this.tracks.forEach(function(value, key) {
        console.log(value)
    })
}

album.showTracks()