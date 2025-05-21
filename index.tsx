/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface Sound {
  id: string;
  label: string;
  soundFile: string;
  color: string;
  keybind?: string; // Optional: for keyboard support
}

const sounds: Sound[] = [
  { id: 'fart', label: 'Fart', soundFile: 'sounds/FART.mp3', color: '#FF6347', keybind: 'q' }, // Tomato
  { id: 'dun', label: 'Dun Dun Dunnn', soundFile: 'sounds/DUN DUN DUNNN.mp3', color: '#FFD700', keybind: 'w' },   // Gold
  { id: 'haha', label: 'Ha Ha (Nelson)', soundFile: 'sounds/HA HA (NELSON).mp3', color: '#3CB371', keybind: 'e' }, // MediumSeaGreen
  { id: 'fail', label: 'Fail', soundFile: 'sounds/FAILFUNNY.mp3', color: '#1E90FF', keybind: 'a' },    // DodgerBlue
  { id: 'suspense', label: 'Suspense', soundFile: 'sounds/SUSPENSE1.mp3', color: '#FF4500', keybind: 's' },       // OrangeRed
  { id: 'evil', label: 'Evil Laugh', soundFile: 'sounds/EVIL LAUGH.mp3', color: '#9370DB', keybind: 'd' },   // MediumPurple
  { id: 'reloading', label: 'Reloading', soundFile: 'sounds/RELOADING.mp3', color: '#FF69B4', keybind: 'z' },     // HotPink
  { id: 'illuminati', label: 'Illuminati', soundFile: 'sounds/ILLUMINATI.mp3', color: '#778899', keybind: 'x' }, // LightSlateGray
  { id: 'drum', label: 'Drum Roll', soundFile: 'sounds/DRUM ROLL.mp3', color: '#40E0D0', keybind: 'c' }, // Turquoise
];

const padContainer = document.getElementById('sound-pad-container');

if (padContainer) {
  sounds.forEach(sound => {
    const button = document.createElement('button');
    button.classList.add('sound-pad-button');
    button.textContent = sound.label;
    button.setAttribute('aria-label', `Play ${sound.label} sound`);
    button.style.backgroundColor = sound.color;
    button.dataset.soundId = sound.id;

    if (sound.keybind) {
        const keybindSpan = document.createElement('span');
        keybindSpan.classList.add('keybind-hint');
        keybindSpan.textContent = sound.keybind.toUpperCase();
        button.appendChild(keybindSpan);
        button.setAttribute('aria-keyshortcuts', sound.keybind);
    }


    const playSound = () => {
      try {
        const audio = new Audio(sound.soundFile);
        audio.play().catch(error => {
          console.error(`Error playing sound ${sound.soundFile}:`, error);
          // Optionally, provide user feedback about the error
        });
        // Visual feedback
        button.classList.add('playing');
        setTimeout(() => button.classList.remove('playing'), 200);
      } catch (error) {
          console.error(`Failed to initialize Audio for ${sound.soundFile}:`, error);
      }
    };

    button.addEventListener('click', playSound);
    padContainer.appendChild(button);
  });

  // Keyboard support
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const soundToPlay = sounds.find(s => s.keybind === key);
    if (soundToPlay) {
      const button = padContainer.querySelector(`[data-sound-id="${soundToPlay.id}"]`) as HTMLButtonElement;
      if (button) {
          button.click(); // Triggers the click event listener, including visual feedback
          event.preventDefault(); // Prevent default action for key (e.g., typing in a field)
      }
    }
  });

} else {
  console.error('Sound pad container not found!');
}

// Ensure this file is treated as a module.
export {};
