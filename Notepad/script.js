function popup () {
    const contenuPopup = document.createElement("div");
    contenuPopup.innerHTML = `
    <div id="contenuPopup">
        <h1>Nouvelle Note</h1>
        <textarea id="note" placeholder="Ecrivez votre nouvelle note......."></textarea>
        <div id="btn-contenu">
            <button id="noteBtn" onclick="createNote()">Nouvelle Note</button>
            <button id="fermBtn" onclick="fermPopup()">Fermer</button>
        </div>
    </div>
    `;
    document.body.appendChild(contenuPopup);

}


function fermPopup() {
    const contenuPopup = document.getElementById("contenuPopup");
    if(contenuPopup) {
        contenuPopup.remove();
    }
}

function createNote() {
    const contenuPopup = document.getElementById('contenuPopup');
    const noteText = document.getElementById('note').value;
    if (noteText.trim() !== '') {
        const note = {
            id: new Date().getTime(),
            texte: noteText,
        };

        const noteExistante = JSON.parse(localStorage.getItem('notes')) || [];
        noteExistante.push(note);

        localStorage.setItem('notes',JSON.stringify(noteExistante));

        document.getElementById('note').value = '';

        contenuPopup.remove();
        afficheNote();
    }
}

function afficheNote() {
    const listeNotes = document.getElementById('liste-contenu');
    listeNotes.innerHTML = '';

    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.forEach (note => {
        const listNot = document.createElement('li');
        listNot.innerHTML = `
            <span>${note.texte}</span>
            <div id="btn-contenu">
                <button id="modifBtn" onclick="modifNote(${note.id})"><i class="fa-solid fa-pen"></i></button>
                <button id="suppBtn" onclick="suppNote(${note.id})"><i class="fa-solid fa-trash"></i></button>
    
            </div>
        `;
        listeNotes.appendChild(listNot);
    });
}

function modifNote(noteId) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteAModif = notes.find(note => note.id == noteId);
    const noteText = noteAModif ? noteAModif.text : '';
    const modifPopup = document.createElement("div");

    editingPopup.innerHtml = `
        <div id="modifCont" data-node-id="${noteId}">
            <h1>Modification de Note</h1>
            <textarea id="note">${noteText}</textarea>
            <div id="btn-contenu">
                <button id="noteBtn" onclick="modifNote(${note.id})">Modifier</button>
                <button id="fermBtn" onclick="closeEditPopup()">Annuler</button>
            </div>
        </div>
    `;

    document.body.appendChild(modifPopup);
}

function closeEditPopup() {
    const modifPopup = document.getElementById("modifCont");

    if (modifPopup) {
        modifPopup.remove();
    }
}

function modifNote() {
    const noteText = document.getElementById('note').value.trim();
    const modifPopup = document.getElementById('modifCont');

    if (noteText !== '') {
        const noteId = modifPopup.getAttribute('data-node-id');
        let notes =JSON.parse(localStorage.getItem('notes')) || [];

        const newNote = notes.map(note => {
            if (note.id === noteId) {
                return { id: note.id, text: noteText};
            }
            return note;
        });

        localStorage.setItem('notes',JSON.stringify(newNote));

        modifPopup.remove();

        afficheNote();

    }
}

function suppNote (noteId) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes = notes.filter(note => note.id !== noteId);

    localStorage.setItem('notes', JSON.stringify(notes));
    afficheNote();
}

afficheNote();