class Video {
    constructor(title, uploader, time, watch) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

let beni = new Video('free guy', 'beni', 3)
let sam = new Video('free guy', 'sam', 4)
let john = new Video('free guy', 'john', 5)
let tommy = new Video('free guy', 'tommy', 6)
let arthur = new Video('free guy', 'arthur', 7)

let arr = [beni, sam, john, tommy, arthur]

// beni.watch()
// sam.watch()

for (item of arr) {
    item.watch()
}