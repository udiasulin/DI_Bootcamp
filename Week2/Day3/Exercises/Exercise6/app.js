let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let allKeys = Object.keys(details)

console.log(`${allKeys[0]} ${details['my']} ${allKeys[1]} ${details['is']} ${allKeys[2]} ${details['the']}`)