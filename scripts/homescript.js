addEventListener('load', () => {
  let infoButton = document.getElementById('infoButton');
  let castButton = document.getElementById('castButton');
  let eventButton = document.getElementById('eventsButton');
  let surveyButton = document.getElementById('surveyButton');
  let suLoginButton = document.getElementById('suLoginButton');
  let imageButton = document.getElementById('imageButton');
  let suLoginXButton = document.getElementById('suLoginX');


  let infoBox = document.getElementById('info');
  let castBox = document.getElementById('cast');
  let eventsBox = document.getElementById('events');
  let surveyBox = document.getElementById('survey');
  let imagesBox = document.getElementById('images');
  let suLoginBox = document.getElementById('suLogin');

  let isInfoBoxVisible = false;
  let isCastBoxVisible = false;
  let isEventsBoxVisible = false;
  let isSurveyBoxVisible = false;
  let isImagesBoxVisible = false;
  let isSuLoginBoxVisible = false;

  infoButton.addEventListener('click', () => {

    if(!isInfoBoxVisible){
      infoBox.style.display = 'block';
    }else{
      infoBox.style.display = 'none';
    }
    castBox.style.display = 'none';
    eventsBox.style.display = 'none';
    surveyBox.style.display = 'none';
    imagesBox.style.display = 'none';
    suLoginBox.style.display = 'none';

    isInfoBoxVisible = !isInfoBoxVisible;

    isCastBoxVisible = false;
    isEventsBoxVisible = false;
    isSurveyBoxVisible = false;
    isImagesBoxVisible = false;
    isSuLoginBoxVisible = false;
  });

  castButton.addEventListener('click', () => {
    if(!isCastBoxVisible){
      castBox.style.display = 'block';
    }else{
      castBox.style.display = 'none';
    }
    infoBox.style.display = 'none';
    eventsBox.style.display = 'none';
    surveyBox.style.display = 'none';
    imagesBox.style.display = 'none';
    suLoginBox.style.display = 'none';

    isCastBoxVisible = !isCastBoxVisible;

    isInfoBoxVisible = false;
    isEventsBoxVisible = false;
    isSurveyBoxVisible = false;
    isImagesBoxVisible = false;
    isSuLoginBoxVisible = false;
  });

  eventButton.addEventListener('click', () => {
    if(!isEventsBoxVisible){
      eventsBox.style.display = 'block';
    }else{
      eventsBox.style.display = 'none';
    }
    infoBox.style.display = 'none';
    castBox.style.display = 'none';
    surveyBox.style.display = 'none';
    imagesBox.style.display = 'none';
    suLoginBox.style.display = 'none';

    isEventsBoxVisible = !isEventsBoxVisible;

    isInfoBoxVisible = false;
    isCastBoxVisible = false;
    isSurveyBoxVisible = false;
    isImagesBoxVisible = false;
    isSuLoginBoxVisible = false;
  });

  surveyButton.addEventListener('click', () => {
    if(!isSurveyBoxVisible){
      surveyBox.style.display = 'block';
    }else{
      surveyBox.style.display = 'none';
    }
    infoBox.style.display = 'none';
    castBox.style.display = 'none';
    eventsBox.style.display = 'none';
    imagesBox.style.display = 'none';
    suLoginBox.style.display = 'none';

    isSurveyBoxVisible = !isSurveyBoxVisible;

    isInfoBoxVisible = false;
    isCastBoxVisible = false;
    isEventsBoxVisible = false;
    isImagesBoxVisible = false;
    isSuLoginBoxVisible = false;
  });

  imageButton.addEventListener('click', () => {
    if(!isImagesBoxVisible){
      imagesBox.style.display = 'block';
    }else{
      imagesBox.style.display = 'none';
    }
    infoBox.style.display = 'none';
    castBox.style.display = 'none';
    eventsBox.style.display = 'none';
    surveyBox.style.display = 'none';
    suLoginBox.style.display = 'none';

    isImagesBoxVisible = !isImagesBoxVisible;

    isInfoBoxVisible = false;
    isCastBoxVisible = false;
    isEventsBoxVisible = false;
    isEventsBoxVisible = false;
    isSuLoginBoxVisible = false;
  });

  suLoginButton.addEventListener('click', () => {
    if(!isSuLoginBoxVisible){
      suLoginBox.style.display = 'block';
      const suLogin = document.getElementById("suLogin");
      suLogin.style.left = (window.innerWidth - suLogin.clientWidth) / 2 + 'px';

    }else{
      suLoginBox.style.display = 'none';
    }
    infoBox.style.display = 'none';
    castBox.style.display = 'none';
    eventsBox.style.display = 'none';
    surveyBox.style.display = 'none';
    imagesBox.style.display = 'none';

    isSuLoginBoxVisible = !isSuLoginBoxVisible;

    isInfoBoxVisible = false;
    isCastBoxVisible = false;
    isEventsBoxVisible = false;
    isSurveyBoxVisible = false;
    isImagesBoxVisible = false;
  });

  document.getElementById('suLoginX').addEventListener("click", () => {
    isSuLoginBoxVisible = false;
    suLoginBox.style.display = "none";
  });

});