function task1() {
    // i. Get element of id “main-content” and assign them in a variable.
    let ele = document.getElementById("main-content");
  
    // ii. Display all child elements of “main-content” element.
    ele = ele.getElementsByTagName("p");
    console.log("Child Elements ==== ", ele);
  
    // iii. Get all elements of class “render” and show their innerHTML
    // in browser.
    let ele_class = document.getElementsByClassName("render");
    // console.log("Child Elements ==== ", ele_class[0].innerHTML);
    for (let ind = 0; ind < ele_class.length; ind++) {
      console.log(
        `Class Element: ${ind} inner HTML: ${ele_class[ind].innerHTML}`
      );
    }
  
    // iv. Fill input value whose element id first-name using javascript.
    document.getElementById("first-name").value = "tabassum";
  
    // v. Repeat part iv for id ”last-name” and “email”.
    document.getElementById("last-name").value = "raza";
    document.getElementById("email").value = "tr@gmail.com";
  }