let count = 1
document.querySelector('#radio1').checked = true


setInterval(() => {

    document.querySelector('#radio'+count).checked = true
    count++

    if(count > 4) {
        count = 1
    }

}, 3000);