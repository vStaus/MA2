// question 1
var pets = [
    {
        animal: "pet",
        type: "cat",
        age: 5.5,
    },
    {
        animal: "pet",
        type: "dog",
        age: 3.8,
    },
    {
        animal: "pet",
        type: "parrot",
        age: 4.0,
    },
  ];
  for(i = 0; i < pets.length; i++) {
      if(pets[i].age > 3.9) {
          document.write(pets[i].animal + ", " + pets[i].type)
      }
  }

  // question 2
  function restrictionAge(age) {
    console.log("age");
    if (age >= 18) {
      return true;
    } else {
      return confirm("Do you have allowance from your parents?");
    }
  }

  let age = prompt("How old are you?", 18);

  if ( restrictionAge(age) ) {
    alert( "Access granted" );
  } else {
    alert( "Access denied" );
  }

  // question 3
  var heading = document.querySelector("h2")
  var button = document.querySelector("button")
  var buttonColours = document.querySelector(".colours")

  // console.dir(button);

  function updateHeading () {
    heading.innerHTML = "Updated subheading"
  }

  button.onclick = updateHeading;

  function changeColours () {
      var h2 = document.querySelector("h2")
      h2.style.color = "blue";
  }