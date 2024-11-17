/* In this module, create three classes: Play, Act, and Scene. */

class Scene {
  constructor(speeches) {
    this.speeches = speeches;
  }

  output() {}
}

class Act {
  constructor(scenes) {
    this.scenes = scenes;
  }

  output() {}
}

class Play {
  constructor(acts) {
    this.acts = acts;
  }

  output() {
    const selectActList = document.querySelector('#actList');

    for (const act of this.acts) {
      console.log(act);

      const actOption = document.createElement('option');
      actOption.value = act.name;
      actOption.textContent = act.name;

      selectActList.append(actOption);
    }
  }
}

export { Scene, Act, Play };
