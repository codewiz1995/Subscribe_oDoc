  var userDetails = {}
  var userStage = 0; 
  // var spinner = $("#spinner")
// divs.

  var initialSelectionDiv = $("#initial-selection-div"),
      emailAddressFormContainer = $("#email-address-form-container"),
      nameFormContainer = $("#name-form-container"),
      phoneNumberFormContainer = $("#phone-number-form-container"),
      paymentButtonContainer = $("#payment-button-container"),
      packageConfirmationUnlimited = $("#package-confirmation-unlimited"),
      packageConfirmationPrime = $("#package-confirmation-prime"),
      packageConfirmationBasics = $("#package-confirmation-basics"),
      dialogPhoneNumberFormContainer = $("#dialog-phone-number-form-container"), 
      dialogVerifyNumberFormContainer = $("#dialog-verify-number-form-container"), 
      successContainer = $("#success-container"),
      existingSubscriptionDiv = $("#existing-subscription-div"),
      selectedOptionText = $("#selected-option-name")[0],
      selectedOptionDiv = $("#selected-option-title-div"),
      registeredRedirectCountdown = $("#registered-redirect-countdown"),
      successRedirectSpan = $("#success-redirect-span"),
      dialogVerificationErrorText = $("#dialog-verification-error-div"),
      dialogRequestedNumberSpan = $("#dialog-requested-number-span"),
      customerDetailTableContainer = $("#customer-detail-list-container")

// forms
  var emailAddressForm = $("#emailAddressForm"),
      nameForm = $("#nameForm"),
      phoneNumberForm = $("#phone-number-form"),
      dialogPhoneNumberForm = $("#dialogPhoneNumberForm"),
      dialogVerifyNumberForm = $("#dialogVerifyNumberForm");

// inputs 

  var emailAddressInput = $("#email-address-input"),
      firstNameInput = $("#first-name-input"), 
      lastNameInput = $("#last-name-input"),
      telInput = $("#phone"),
      dialogPhoneNumberInput = $("#dialog-phone-input"),
      dialogVerifyNumberInput = $("#dialog-verify-input");


// buttons and links

  var backButton = $("#back-button"),
      unlimitedButton = $("#unlimited-button"),
      primeButton = $("#prime-button"), 
      basicsButton = $("#basics-button"),
      phoneNumberSubmitButton = $("#phone-number-submit-button"), 
      stripeButton = $("#stripe-button"), 
      dialogButton = $("#dialog-add-to-bill-button"),
      changePackageLinks = $(".change-package-text"),
      dialogRequestPinButton = $("#dialog-request-pin-button"),
      newPinButton = $("#new-pin-button"),
      verifyPinButton = $("#verify-pin-submit-button"); 



  // constants

  var UNLIMITED_PRICE = 499,
      PRIME_PRICE = 119,
      BASICS_PRICE = 60
      



// initialising the telinput functions

    //   telInput.intlTelInput({
    
    //     allowExtensions: true,
    //     formatOnDisplay: true,
    //     autoFormat: true,
    //     autoHideDialCode: true,
    //     autoPlaceholder: true,
    //     defaultCountry: "auto",
    //     ipinfoToken: "yolo",
      
    //     nationalMode: false,
    //     numberType: "MOBILE",
    //     //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    //     preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
    //     preventInvalidNumbers: true,
    //     separateDialCode: true,
    //     initialCountry: "auto",
    //     geoIpLookup: function(callback) {
    //     $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //       var countryCode = (resp && resp.country) ? resp.country : "";
    //       callback(countryCode);
    //     });
    //   },
    //      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
    //   });




    // const b2cCustomerEndpoint = "https://ai.odoc.life/b2c-customer", 
    //       bearerToken = "Token b993ec1510f2a1640b4cd1dc138bd382,universal"