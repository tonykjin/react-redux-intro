export const tick = () => { //action creator
    console.log('ticktick');
    return {
        type: 'TICK'
    }
}

//this is given to a reducer