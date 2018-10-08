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