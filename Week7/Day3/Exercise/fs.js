let fs = require('fs')

//Exercise 1
// fs.readFile('text.txt', 'utf-8', function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

//Exercise2

// fs.writeFile('newFile.txt', 'some text!', function(err){
//     if(err) throw err;
//     console.log('File is created successfully')
// })

fs.unlink('newFile.txt', function(err){
    if(err) {
        console.log('file is deleted!')
    }
})
