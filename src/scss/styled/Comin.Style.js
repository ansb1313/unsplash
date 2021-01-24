
export const setBoxShadow = (level) => {

    if(level===1){
        return '1px 1px 10px rgba(0,0,0,0.1)'
    }else if(level === 2){
        return '2px 2px 20px rgba(0,0,0,0.15'
    }else if(level === 3){

        return '3px 3px 30px rgba(0,0,0,0.2)'
    }

}