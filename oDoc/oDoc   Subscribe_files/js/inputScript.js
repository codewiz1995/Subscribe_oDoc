function utmParams(){

  if (window.location.href.includes("utm_")){
    return window.location.href.split("subscribe.odoc.life/?")[1] + "&"
  } else {
    return ""
  }
}

var utmString = utmParams()



function packageSelected(){

  userStage += 1; 
  
  let subscriptionType = this.id.split("-")[0]
  userDetails.subscriptionType = subscriptionType 
  
  let selectedOptionInnerHTML; 
  
  switch(subscriptionType){
    case "unlimited":
    selectedOptionInnerHTML = "Unlimited " + UNLIMITED_PRICE;
    userDetails.price = UNLIMITED_PRICE; 
    break;
    case "prime":
    selectedOptionInnerHTML = "Prime " + PRIME_PRICE;
    userDetails.price = PRIME_PRICE; 
    break; 
    case "basics": 
    selectedOptionInnerHTML = "Basics " + BASICS_PRICE;
    userDetails.price = BASICS_PRICE;
    break; 
    default: 
    // console.log("error in defining sub text")
    return;
  }
  
  // if (userDetails.detailsReceived === true){
  //   removeFromDom(initialSelectionDiv)
  //   switch (userDetails.subscriptionType) {
  //     case 'unlimited':
  //     addToDom(packageConfirmationUnlimited)
  //     break;
  //     case 'prime':
  //     addToDom(packageConfirmationPrime)
  //     break;
  //     case 'basics':
  //     addToDom(packageConfirmationBasics);
  //     break;
  //     default:
  //     break;
  //   }
  //   selectedOptionText.innerText = selectedOptionInnerHTML; 
  //   addToDom(selectedOptionDiv)
  //   addToDom(paymentButtonContainer)
    
  // } else {
    removeFromDom(initialSelectionDiv)
    selectedOptionText.innerText = selectedOptionInnerHTML; 
    addToDom(selectedOptionDiv)
    addToDom(emailAddressFormContainer)
  // }
  
  
  
}


unlimitedButton.click(packageSelected)
  primeButton.click(packageSelected)
  basicsButton.click(packageSelected)


  function emailAddressSubmitted(event){
    event.preventDefault()

    let emailAddress = emailAddressInput[0].value
    userDetails.email = emailAddress; 
    userStage += 1; 

    removeFromDom(emailAddressFormContainer); 
    addToDom(nameFormContainer);
    
  }

  emailAddressForm.submit(emailAddressSubmitted)

  function nameSubmitted(event){
    event.preventDefault()
    let firstName = firstNameInput[0].value;
    let lastName = lastNameInput[0].value;

    userDetails.firstName = firstName
    userDetails.lastName = lastName

    userStage += 1;

    removeFromDom(nameFormContainer)
    addToDom(phoneNumberFormContainer)
  }

  nameForm.submit(nameSubmitted)

  function loadData(){
      var loadurl = "https://jsonplaceholder.typicode.com/users";
      $.get(loadurl,function(data){
        console.log(data);
        $("#customer-details-table td").remove();
        // response = $.parseJSON(data); 
        $.each(data, function(i, item) {
          
          var $tr = $('<tr>').append(
              $('<td>').text(item.id),
              $('<td>').text(item.name),
              $('<td>').text(item.username),
              $('<td>').text(item.email),
              $('<td>').text(item.address.street + "," +item.address.suite + "," +item.address.city + "," +item.address.zipcode),
              $('<td>').text(item.phone),
              $('<td>').text(item.website),
              $('<td>').text(item.company.name)
          ).appendTo('#customer-details-table');
          console.log($tr.wrap('</td>').html());
        });
      });
  }

 

  function postData() {

    var res = fetch('https://ai.odoc.life/login', {
      method: "POST", // POST
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
          "Content-Type": "application/json; charset=utf-8",
         
      },
      redirect: "follow", 
      referrer: "no-referrer", 
      body: JSON.stringify({ username: "test", password :"test"}) // dummy data for success true
  })
  .then(response => response.json()); // parses response to JSON
  console.log("result :" + res);
  return res;
}

function goToCustomerDetails(data){
  if(data.success){
      hideSpinner();
      loadData();
      userStage += 1;
      removeFromDom(phoneNumberFormContainer)
      addToDom(customerDetailTableContainer)
     
      console.log("success");
  
  }else{
      console.log("error");
      console.log(data);
  }
   
}
  
  function validatePhoneNumber(event){
    event.preventDefault()
    showSpinner();
    var telNo = document.getElementById("phone").value;
    var result = validateTelNo(telNo);
    if(result){
      var res = postData()
      
      .then(data => goToCustomerDetails(data)) // JSON-string from `response.json()` call
      .catch((error) =>{
        console.log(JSON.stringify(error));
        console.log("error");
      });
    }else{
      console.log("validation failed");
    }
    
    
     

  
    
    // if (telInput.intlTelInput("isValidNumber") === true){ 
    //   showSpinner()



    //   let initialDialCode = $(".selected-dial-code")[0].innerHTML

    //   let inputVal = telInput[0].value

    //   if (initialDialCode === "+94" && inputVal[0] === "0"){
    //     inputVal = inputVal.slice(1)
    //   }


    //   let phoneNumber = initialDialCode + inputVal

    //   console.log(phoneNumber)
      

    //   inputPassedValidation(telInput);


    //   userDetails.telephoneNo = phoneNumber


      // checkNumberStatus(phoneNumber)      
      
    // } else {  
      
    //   inputFailedValidation(telInput);
    // }
  }

  function checkNumberStatus(phoneNumber){ 


    let url = "https://ai.odoc.life/subscription?telephone_no=" + phoneNumber + "&email=" + userDetails.email
    // console.log(url)
    
    $.ajax({
      url: url,
      headers: {
        "Authorization": bearerToken
      },
      success: checkNumberSuccess,
      failure: function(response){
        // console.log(response)
      },
      method: "GET"
    });

   }


  phoneNumberForm.submit(validatePhoneNumber);

   function handleBackButtonClick(){


    switch (userStage) {
        case 1:
        
            removeFromDom(selectedOptionDiv)
            removeFromDom(emailAddressFormContainer)
            addToDom(initialSelectionDiv)
            break;
        case 2:
            removeFromDom(nameFormContainer);
            addToDom(emailAddressFormContainer);
            break; 
        case 3:
            removeFromDom(phoneNumberFormContainer);
            addToDom(nameFormContainer);
            break; 
        case 4:
            removeFromDom(customerDetailTableContainer);
            addToDom(phoneNumberFormContainer);
            break;         
        default:
            break;
    }

    userStage -= 1 


}

backButton.click(handleBackButtonClick)


   


//------------------------------utils---------------------------

/*
* Spinner
*/

var spinner = $("#spinner")
var spinnerBackdrop = $("#spinner-backdrop")


function showSpinner(){
    spinnerBackdrop.removeClass("hidden")
    spinner.removeClass("hidden")
}

function hideSpinner(){
    spinnerBackdrop.addClass("hidden")
    spinner.addClass("hidden")
}

/*
* Telephone Validation
*/

function validateTelNo(number){
  let length = number.length
  
  switch(length){
       
      case 9: 
        if( /^\d+$/.test(number)){  
            return true;
        }
        return false;

       case 10:
        if( number.slice(0,1) == "0" && /^\d+$/.test(number)){  
            return true;
        }
        return false;
         
      default: 
         return false; 
  }
}

/*
* Page navigation
*/

function removeFromDom(element){
  element.fadeOut().addClass("hidden")
}

function addToDom(element){
  element.addClass("zero-opacity").removeClass("hidden").fadeIn().removeClass("zero-opacity")
}
