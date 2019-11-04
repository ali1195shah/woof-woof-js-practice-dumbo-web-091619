// ### STEP 4: TOGGLE GOOD DOG
// When a user clicks the Good Dog/Bad Dog button, two things should happen:
//  - The button's text should change from Good to Bad or Bad to Good
//  - The corresponding pup object in the database should be updated to reflect the new isGoodDog value
//    - Please note, you can update a dog by making a PATCH request to `/pups/:id`


const dogBar = document.getElementById("dog-bar")
const dogInfo = document.querySelector("#dog-info")

fetch("http://localhost:3000/pups")
.then(r => r.json())
.then(response => {
    response.forEach(dog => {
        getAlldogs(dog) // CALLBACK OF THE FETCH
    })
})

// HELPER FUNCTION
function getAlldogs(dog){

  const span = document.createElement('span');
  span.id = dog.id

  span.innerText = dog.name

  dogBar.append(span)

  

  span.addEventListener("click",function(){
    dogInfo.innerHTML = ""

    // let h2 = document.createElement("h2")
    // h2.innerText = (dog.name)
    //   dogInfo.append(h2)

    dogInfo.innerHTML = `<img src=${dog.image}>
      <h2>${dog.name}</h2>`
    let dogButton = document.createElement("button") // Makes button on page

    dogButton.id = dog.id

    if (dog.isGoodDog = true) {
        dogButton.innerText = "Good Dog!"
    } else {
        dogButton.innerText = "Bad Dog!"
    }

    dogInfo.append(dogButton)
    dogButton.addEventListener(("click"), function(e){
        
        let status = dog.isGoodDog

        fetch(`http://localhost:3000/pups/${e.target.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                isGoodDog: !status
            })
        })
        .then(r => r.json())
        .then(response => {
            if (response.isGoodDog = true) {
                dogButton.innerText = "Good Dog!"
            } else {
                dogButton.innerText = "Bad Dog!"
            }
        })
    })
  })







}



