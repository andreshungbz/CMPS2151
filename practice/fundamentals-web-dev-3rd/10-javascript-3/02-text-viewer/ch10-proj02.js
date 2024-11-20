import { Scene, Act, Play } from './play-module.js';

document.addEventListener('DOMContentLoaded', function () {
  const url =
    'https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php';

  /*
     To get a specific play, add play name via query string, 
	   e.g., url = url + '?name=hamlet';
	 
	 https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=hamlet
	 https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name=jcaesar
     
   */

  /* note: you may get a CORS error if you test this locally (i.e., directly from a
       local file). To work correctly, this needs to be tested on a local web server.  
       Some possibilities: if using Visual Code, use Live Server extension; if Brackets,
       use built-in Live Preview.
    */

  // main play select
  const selectPlayList = document.querySelector('#playList');

  // sub-selects
  const selectActList = document.querySelector('#actList');
  const selectSceneList = document.querySelector('#sceneList');
  const selectPlayerList = document.querySelector('#playerList');

  // MAIN Event Listener

  selectPlayList.addEventListener('change', async () => {
    // on default value don't do anything
    if (selectPlayList.selectedOptions[0].value == 0) {
      return;
    }

    // reset all fields
    reset();

    // construct query string and fetch
    const queryString = `${url}?name=${selectPlayList.selectedOptions[0].value}`;
    const response = await fetch(queryString);
    const play = await response.json();

    setInitial(play);

    // other select event listeners

    selectActList.addEventListener('change', () => {
      // find specific act from existing select
      const act = play.acts.find(
        (element) => element.name == selectActList.value
      );

      setScenes(act);

      // find specific scene from given act
      const scene = act.scenes.find(
        (element) => element.name == selectSceneList.value
      );

      setPlayHere(play, act, scene);
    });

    selectSceneList.addEventListener('change', () => {
      // find specific act from existing select
      const act = play.acts.find(
        (element) => element.name == selectActList.value
      );

      // find specific scene from given act
      const scene = act.scenes.find(
        (element) => element.name == selectSceneList.value
      );

      setPlayHere(play, act, scene);
    });

    // button highlight

    const button = document.querySelector('#btnHighlight');
    button.addEventListener('click', () => {
      // find specific act from existing select
      const act = play.acts.find(
        (element) => element.name == selectActList.value
      );

      // find specific scene from given act
      const scene = act.scenes.find(
        (element) => element.name == selectSceneList.value
      );

      // filter speeches
      if (selectPlayerList.value != 0) {
        scene.speeches = scene.speeches.filter(
          (element) => element.speaker == selectPlayerList.value
        );

        setPlayHere(play, act, scene);
      }

      // add highlights
      const lines = document.querySelectorAll('.speech p');
      const highlightTerm = document.querySelector('#txtHighlight').value;

      if (highlightTerm) {
        const regex = new RegExp(highlightTerm);
        for (const line of lines) {
          line.innerHTML = line.innerHTML.replace(
            regex,
            `<b>${highlightTerm}</b>`
          );
        }
      }
    });
  });

  // reset function
  function reset() {
    // clear all selects
    selectActList.innerHTML = '';
    selectSceneList.innerHTML = '';
    selectPlayerList.innerHTML = `<option value="0">All Players</option>`;

    // sections
    const sectionPlayHere = document.querySelector('#playHere');

    sectionPlayHere.innerHTML = `<h2></h2>
        <article id="actHere">
          <h3></h3>
          <div id="sceneHere">
            <h4></h4>
            <p class="title"></p>
            <p class="direction"></p>
          </div>
        </article>`;
  }

  function setActs(play) {
    const selectActList = document.querySelector('#actList');

    selectActList.innerHTML = '';

    for (const act of play.acts) {
      // populate selectActList
      const actOption = document.createElement('option');
      actOption.value = act.name;
      actOption.textContent = act.name;

      selectActList.append(actOption);
    }
  }

  function setScenes(act) {
    const selectSceneList = document.querySelector('#sceneList');

    selectSceneList.innerHTML = '';

    for (const scene of act.scenes) {
      const sceneOption = document.createElement('option');
      sceneOption.value = scene.name;
      sceneOption.textContent = scene.name;

      selectSceneList.append(sceneOption);
    }
  }

  function setPlayers(personas) {
    const selectPlayerList = document.querySelector('#playerList');

    for (const persona of personas) {
      const playerOption = document.createElement('option');
      playerOption.value = persona.player;
      playerOption.textContent = persona.player;

      selectPlayerList.append(playerOption);
    }
  }

  function setPlayHere(play, act, scene) {
    // sections
    const sectionPlayHere = document.querySelector('#playHere');
    const articleActHere = document.querySelector('#actHere');
    const divSceneHere = document.querySelector('#sceneHere');

    divSceneHere.innerHTML = `<h4></h4>
            <p class="title"></p>
            <p class="direction"></p>`;

    // populate sections with first scene and first act
    sectionPlayHere.querySelector('h2').textContent = play.title;
    articleActHere.querySelector('h3').textContent = act.name;
    divSceneHere.querySelector('h4').textContent = scene.name;
    divSceneHere.querySelector('.title').textContent = scene.title;
    divSceneHere.querySelector('.direction').textContent = scene.stageDirection;

    // populate speech for each section
    for (const speech of scene.speeches) {
      const divSpeech = document.createElement('div');
      divSpeech.classList.add('speech');

      const span = document.createElement('span');
      span.textContent = speech.speaker;

      divSpeech.append(span);

      for (const line of speech.lines) {
        const p = document.createElement('p');
        p.textContent = line;
        divSpeech.append(p);
      }

      divSceneHere.append(divSpeech);
    }
  }

  // set initial function
  function setInitial(play) {
    setActs(play);
    setScenes(play.acts[0]);
    setPlayers(play.persona);

    setPlayHere(play, play.acts[0], play.acts[0].scenes[0]);
  }
});
