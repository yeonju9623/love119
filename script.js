function updateBackgroundColor() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();

    // Check the current time and update background color accordingly
    if (currentHour >= 0 && currentHour <= 5) {
      document.body.style.background = "linear-gradient(180deg, #252030 0%, #383845 100%)";
    } else if (currentHour >= 6 && currentHour <= 11) {
      document.body.style.background = "linear-gradient(180deg, #ABCDD8 0%, #EDDFCB 100%)";
    } else if (currentHour >= 12 && currentHour <= 17) {
      document.body.style.background = "linear-gradient(180deg, #A1C9EE 0%, #C3EAFF 46.35%, #FFF4F8 100%)";
    } else {
      document.body.style.background = "linear-gradient(180deg, #7999C9 0%, #9D839C 100%)";
    }
}

// Update background color initially and set interval for continuous update
updateBackgroundColor();
setInterval(updateBackgroundColor, 60000); // Update every minute
