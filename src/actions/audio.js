

export const analyzeAudio = (stream) => {
    return function(dispatch){
        if(stream < -1000){
            console.log("Loud");
        }
    }
}