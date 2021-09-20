const fs = require('fs');
const chalk = require('chalk')
const getNote = function(){
    return 'Your notes';
}
const addNote = (title, body) => {
    const note = loadNotes();

    // const checkDuplicateNotes = note.filter((note) => note.title === title); //  loop through everything until you find duplicate
    const checkDuplicate = note.find((note) => note.title === title); // loop through, each, once you find a specifc , break out
        if(!checkDuplicate){
            note.push({
                title: title, 
                body: body
            });
            saveNotes(note);
            console.log(chalk.green.inverse('New note added right away!'));
        }else{
            console.log(chalk.red.inverse('There were some duplicate notes!'));
        }
}
const saveNotes = (notes)=> {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}
const removeNote = (title) => {
        const notes = loadNotes()
            const notesToKeep = notes.filter((note)=> note.title !== title);
        if(notes.length > notesToKeep.length){
            saveNotes(notesToKeep);
            console.log(chalk.green.inverse('Note removed!'))
        }else{
            console.log(chalk.red.inverse('No note found!'))            
        }
}

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote
}
