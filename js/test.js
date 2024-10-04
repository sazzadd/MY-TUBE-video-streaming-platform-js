function getTimeString(time){
    const hour = parseInt(time/3600);
    const remainingSecond = time % 3600;
    const minutes = parseInt(remainingSecond /60);
    remainingSecond = remainingSecond % 60; 
    return `${hour} hour ${minutes} min ago ${remainingSecond} sec ago`
}
console.log (getTimeString(1820))