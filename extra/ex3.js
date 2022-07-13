const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

const nameSounds = {
    wave: [],
    rain: [],
    firecamp: [],
    shower: [],
    train: [],
    wind: []
}

for (const user of users) {
    let sounds = user.favoritesSounds;

    for (const key in sounds) {
       if(key === 'waves'){
        nameSounds.wave.push(sounds[key]['volume'])
       } else if (key === 'rain') {
        nameSounds.rain.push(sounds[key]['volume'])
       } else if (key === 'firecamp') {
        nameSounds.firecamp.push(sounds[key]['volume'])
       } else if (key === 'shower') {
        nameSounds.shower.push(sounds[key]['volume'])
       } else if (key === 'train') {
        nameSounds.train.push(sounds[key]['volume'])
       } else if (key === 'wind') {
        nameSounds.wind.push(sounds[key]['volume'])
       }
    }      
}

function sum(sound) {
    let result = 0;
    for (const iterator of nameSounds[sound]) {
        result += iterator;
    }  
    return result; 
}

console.log(sum('wind'))
console.log(sum('wave'))

