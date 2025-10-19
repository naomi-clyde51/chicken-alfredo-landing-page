function placeOrder() {
   let name = prompt("What is your name?");
        let email = prompt("What is your email address?");
        
        if (name.length > 0 && email.length > 0) {
          alert("Thank you " + name + "! We will be in touch soon! 👍");
        } else {
            alert("Please submit valid input.")
        }
       
      }

      let orderButton = document.querySelector(".order-button");
      orderButton.addEventListener("click", placeOrder);