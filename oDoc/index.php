<html>
  

<head>
<meta http-equiv="content-type" content="text/html; charset=windows-1252">


    <style>


table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>



    <title>oDoc | Subscribe</title>

      <link href="oDoc%20%20%20Subscribe_files/css/intlTelInput.css" rel="stylesheet" media="screen">
      <link href="css/p.css" rel="stylesheet" media="screen">
        <script src="oDoc%20%20%20Subscribe_files/js/jquery.js"></script>
        <script src="oDoc%20%20%20Subscribe_files/js/utils.js"></script>
      
    


        <!-- <link rel="stylesheet" href="oDoc%20%20%20Subscribe_files/bootstrap.css"  crossorigin="anonymous"> -->
        <link rel="stylesheet" href="oDoc%20%20%20Subscribe_files/css/bootstrap-theme.css"  crossorigin="anonymous">
        <!-- <script src="oDoc%20%20%20Subscribe_files/bootstrap.js" crossorigin="anonymous"></script> -->
        
        <link rel="stylesheet" type="text/css" href="oDoc%20%20%20Subscribe_files/css/telinput.css">
        <link rel="stylesheet" type="text/css" href="oDoc%20%20%20Subscribe_files/css/packageSelection.css">

        
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width = device-width, initial-scale = 1">

    </head>


    <body>


      <a href="#" class="navbar-left" id="logo"><img src="oDoc%20%20%20Subscribe_files/logo.png" class="logo"></a>
      

      <div id="initial-selection-div" class="">

      <div class="initial-heading-div"> 
        <h1 class="intial-heading h3 text-center" align="center">Start a new subscription</h1>
        <h2 class="intial-heading h5 text-center" align="center">Choose your package</h2>
      </div>

        <div class="container">
        <div class="row flexcenter">


      <!-- initial page-->
          <div class="unlimited-div col-lg-4 col-md-4 col-sm-6 col-xs12">
              <div class="package-fitcontent-div"> 
              <img src="oDoc%20%20%20Subscribe_files/unlimited-color-top.png" alt="">
                <div class="internal-card-padding-div">
                  <p class="section-heading"> Unlimited 499 <span class="popular-button btn-primary btn-sm">Popular</span></p>
                  <p class="package-description-line"> Unlimited Access for your <br> immediate family</p>
                  <p class="package-description-line"> 200+ GP's and Specialists</p>
                  <p class="package-description-line"> Rs. 499 per month (billed monthly)</p>
                  <p class="package-description-line">&nbsp;</p>
                  <button class="btn-primary button-text" id="unlimited-button"> Continue with Unlimited </button>
                </div>
              </div>
            </div>
        </div> 
        </div>
      </div>



      <div id="selected-option-title-div" class="hidden">
        <div id="selected-option-name" class=""></div>
        <button id="back-button" class="btn back-button">Back</button>
      </div>  

           <!-- email page-->

      <div class="container hidden" id="email-address-form-container"> 
        <div class="col lg-12 md-12 sm-12 xs-12 text-center form-title" align="center">What's your email address?</div> 
        <div class="col lg-12 md-12 sm-12 xs-12 text-center form-subtitle" align="center"> To start your subscription please enter your email address </div>


          <form action="" method="" class="email-address-form" id="emailAddressForm"> 
          
            <input name="emailAddressInput" id="email-address-input" placeholder="yourname@example.com" class="form-input-email" required="" type="email"> 
    
            <input value="Next" class="btn next-button" type="submit">
          </form>
      </div>

           <!-- name page-->
      <div class="container hidden" id="name-form-container"> 
          <div class="col lg-12 md-12 sm-12 xs-12 text-center form-title" align="center">What's your name?</div> 
          <div class="col lg-12 md-12 sm-12 xs-12 text-center form-subtitle" align="center"> This is how you will be seen on oDoc. </div>
  
  
            <form action="" method="" class="name-form" id="nameForm"> 
            
              <div class="form-label-box">
              <label for="first-name-input" class="form-label" >Your first name</label>
              <input name="firstNameInput" id="first-name-input" placeholder="Sandun" class="form-input" required="" type="text"> 
              </div>

              <div class="form-label-box">
              <label for="last-name-input" class="form-label" id="last-name-input-label">Your last name</label>
              <input name="lastNameInput" id="last-name-input" placeholder="Rasanjana" class="form-input" required="" type="text"> 
              </div>  

              <input value="Next" class="btn next-button" type="submit">
            </form>
        </div>

        <!-- phone number -->


      <div class="container hidden" id="phone-number-form-container"> 
            <div class="col lg-12 md-12 sm-12 xs-12 text-center form-title" align="center">What's your mobile number?</div> 
            <div class="col lg-12 md-12 sm-12 xs-12 text-center form-subtitle" align="center"> We will use this to verify your account. </div>
            
    
              <form class="phone-number-form" id="phone-number-form" action="javascript:void(0);"> 
              
                <div class="form-label-box">
                <label for="phone-number-input" class="form-label">Your mobile number</label>
                
                <div class="intl-tel-input allow-dropdown separate-dial-code iti-sdc-3">
                  <div class="flag-container">
                  <div class="selected-flag" tabindex="0" title="Sri Lanka (ශ්‍රී ලංකාව): +94">
                    <div class="iti-flag lk"></div>
                    <div class="selected-dial-code">+94</div>
                    </div>
                    </div>
                    <input name="phoneNumberInput" id="phone" class="form-input" required="" autocomplete="off" placeholder="71 234 5678" type="tel"></div> 
                </div>
  
                <input value="Next" class="btn next-button" id="phone-number-submit-button" type="submit">
              </div>  
            </form>
      </div>

      <!-- Customer detail listing page -->
      <div class="container hidden" id="customer-detail-list-container"> 
            <div class="col lg-12 md-12 sm-12 xs-12 text-center form-title" align="center">Customer Detail</div> 
            <div class="col lg-12 md-12 sm-12 xs-12 text-center form-subtitle" align="center"> We will use this to list down all customer data</div>
            
          <table id="customer-details-table">
          
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>     
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>    
             </tr>
         
          
        
          </table>
      </div>
  
  

      <div class="container hidden" id="success-container">
        <div class="success-text"> Success </div>
        <div class="dashed-border-div"> &nbsp; </div>
        <div class="success-message-box"> 
          <img src="oDoc%20%20%20Subscribe_files/check-circle.png" alt="success-image" class="success-box-success-image">
          <div class="all-done-text">All Done</div>
          <div class="success-box-main-text">
              You can now use your subscription by registering on the oDoc app. You will be redirected to your success page in <span class="redirect-countdown" id="success-redirect-span"></span> seconds.
          </div>

        </div>

      </div>






    <div class="loader hidden" id="spinner">Loading...</div>
    <div class="loader-backdrop hidden" id="spinner-backdrop"></div>


      
      <script type="text/javascript" src="oDoc%20%20%20Subscribe_files/js/defineVariables.js"></script>
      <script type="text/javascript" src="oDoc%20%20%20Subscribe_files/js/inputScript.js"></script>
     

     
    


    </body>
    
    </html>