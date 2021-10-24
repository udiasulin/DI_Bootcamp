
function getBold_items() {
    let bold = document.querySelectorAll('strong')
    let arrayStrong = []
    for (let item of bold) {
        arrayStrong.push(item)
    }

}


function highlight() {
    let bold = document.querySelectorAll('strong')
    for (let item of bold) {
        item.style.color = 'blue';
    }
}

function return_normal() {
    let bold = document.querySelectorAll('strong');
    for (let item of bold) {
        item.style.color = 'black';
    }
}



getBold_items()
highlight()
return_normal()