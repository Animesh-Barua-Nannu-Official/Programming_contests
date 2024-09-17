let url = 'https://kontests.net/api/v1/all'

let response = fetch(url)
response.then((v)=>{
    return v.json() ;
}).then((contests)=>{
    console.log(contests)
    ihtml = ''
    for(item in contests){
        console.log(contests[item])
        ihtml +=`
        <div class="card mx-2 my-2" style="width: 22rem;>
                <img src="https://www.google.com/imgres?q=conding%20images&imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fhand-coding-concept-illustration_114360-8193.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcoding&docid=zrHSIpJey31EsM&tbnid=vQSd_RtBGuogUM&vet=12ahUKEwjxofves8qIAxUj-zgGHTWeIjcQM3oECFkQAA..i&w=626&h=626&hcb=2&ved=2ahUKEwjxofves8qIAxUj-zgGHTWeIjcQM3oECFkQAA" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site}</p>
                    <p class="card-text">In 24 Hours? ${contests[item].in_24_hours} </p>
                    <p class="card-text>Starts at: ${contests[item].start_time}</p>
                    <p class="card-text>Starts at: ${contests[item].end_time}</p>
                    <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                </div>
            </div>
        `
    }
    cardContainer.innerHTML = ihtml
})
