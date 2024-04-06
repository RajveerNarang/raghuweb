export const playAudio = async (data) => {
	try {
	  const audio = new Audio();
	  audio.src = URL.createObjectURL(new Blob([data], { type: 'audio/mpeg' }));
	  audio.play();
	} catch (error) {
	  console.error(error);
	  throw error;
	}
};


export const keyMap = {
    'a': 'C3',
    'b': 'Db3',
    'c': 'D3',
    'd': 'Eb3',
    'e': 'E3',
    'f': 'F3',
    'g': 'Gb3',
    'h': 'G3',
    'i': 'Ab3',
    'j': 'A3',
    'k': 'Bb3',
    'l': 'B3',
    'm': 'C4',
    'n': 'Db4',
    'o': 'D4',
    'p': 'Eb4',
    'q': 'E4',
    'r': 'F4',
    's': 'Gb4',
    't': 'G4',
    'u': 'Ab4',
    'v': 'A4',
    'w': 'Bb4',
    'x': 'B4',
    'y': 'C2',
    'z': 'D2',

    '0': 'E2',
    '1': 'F2',
    '2': 'G2',
    '3': 'A2',
    '4': 'B2',
    '5': 'C5',
    '6': 'D5',
    '7': 'E5',
    '8': 'F5',
    '9': 'G5',

	'!': 'A5',
	'@': 'B5',
	'#': 'Db2',
	'$': 'Eb2',
	'%': 'Gb2',
	'^': 'Ab2',
	'&': 'Bb2',
	'*': 'Db5',
	'.': 'Eb5',
	',': 'Gb5',
	'_': 'Ab5',
	'-': 'Bb5',
	'+': 'C6',
};
