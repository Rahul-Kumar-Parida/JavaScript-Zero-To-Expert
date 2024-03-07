//Inserting deleting and creating and selecting..complete
const header = document.querySelector(".header");
const createAdiv = document.createElement("div");
createAdiv.classList.add("newDiv-Element");

//manipulate
createAdiv.innerHTML = " I am creating a new div element";

// header.prepend(createAdiv); //start
// header.append(createAdiv); //end

// header.append(createAdiv.cloneNode(true));// both start and end

header.before(createAdiv); //start
header.after(createAdiv); //end

//Now i am going delete that element when i was create

document.querySelector(".btn").addEventListener("click", function () {
  //   createAdiv.remove();
  createAdiv.parentElement.removeChild(createAdiv);
});
