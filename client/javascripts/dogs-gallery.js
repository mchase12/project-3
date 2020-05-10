//jshint esversion: 6

let failHandler = () => {
  $(".photos").empty().html("<h3> Error -- breed not found <h3>");
};

let clickHandler = function () {
  let imgElem;
  let prefixURL = 'https://dog.ceo/api/breed/';
  let suffixURL = '/images/random/6';

  let breedTag = $('input[type = "text"]').val().toLowerCase();

  let requestURL = prefixURL + breedTag + suffixURL;

console.log(document.querySelectorAll("h2")[0].textContent);
console.log(jQuery("h2")[0].textContent);
  $('.photos').html('');

  $.getJSON(requestURL, function(dogAPIresponse){
    dogAPIresponse.message.forEach((imgURL,index) => {
      let imgElem = $("<img>");

      imgElem.attr('src', imgURL);
      imgElem.attr('width', '100');

      $(".photos").append(imgElem);

      imgElem.hidden = false;
    });
  }).fail(failHandler);
};

window.addEventListener('load', () => {
  //select the buttons
  let buttonElem = document.querySelector('button');
  buttonElem.addEventListener('click', clickHandler);
});
