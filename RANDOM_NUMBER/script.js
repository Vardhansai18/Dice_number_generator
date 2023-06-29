const gen_doc = document.querySelector(".Generate")

function random_fun()
{
    let randomNumber = Math.random();
    randomNumber = Math.floor( ( randomNumber * 10 ) % 7 )
    // console.log(randomNumber);
    let random_doc = document.querySelector(".count");
    random_doc.innerHTML = randomNumber;

}

gen_doc.addEventListener( "click" , random_fun )

