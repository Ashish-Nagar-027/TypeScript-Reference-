

/* 
===========================
         Typeof 
===========================

typeof Type Gaurds involve simpley doing a type check before working witha  value.

Since unions allow multiple types for a value,
we can first check what came through before working with it

*/


function triple(value: number | string){
    if (typeof value === "number") {
        return value * 4
    }
    return value.length
}


/* 
===========================
         Truthiness Gaurds 
===========================

Truthiness type Gaurds  invole checking a value for for being truthy or falsy before working with it.


This is helpful in avoiding errors when values might be null or undefined.
*/

const printLetters = (word: string | null) => {
    if(!word){
        console.log('NO word was provided')
    }
    else{
        word.length
    }
}




/* 
===========================
  Equality Narrowing
===========================

equality Type Guards involve comparing types to each other
before doing certain operations with values.
By checking two values agains one another , wec an be sure they're both the same before working with them ina type-specific way

*/

function someDemeo(x: string | number, y: string | boolean) {
    if(x === y) {
        x.toUpperCase()
    }
}



/* 
===========================
     in  operator
===========================

*/

const pet = {name: 'kitty', age: 20  }

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}


function getRuntime(media: Movie | TVShow) {
    if('numEpisodes' in media){
       return media.numEpisodes * media.episodeDuration
    }
}

getRuntime({ title: "Amedeus", duration: 120 })
