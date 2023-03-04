import Note from "./Note";
import {React, useState} from "react";

export default function Layout() {
    const [note, setNote] = useState([
        {
            Title: "Untitled",
            Date: "Undefined",
            Content: "Empty"
        }
    ])
    function addNote() {
        var newNote = {
            Title: "Untitled",
            Date: "Undefined",
            Content: "Empty"
        }
        setNote([...note, newNote])
        console.log(note)
    }
    
    return (
        <div id="page">
            <div id="header">
                <label id="menu">
                    &#9776;
                </label>
                <div id="title">
                    <h1>Lotion</h1>
                    <p id="slogan">Like notion, but worse.</p>
                </div>
            </div>
            <div id="underHeader">
                <div id="side">
                    <div id="addNote">
                        <div>
                            Notes
                        </div>
                        <label onclick = {addNote}>
                            +
                        </label>
                    </div>
                    <div id="notes">
                        No Note Yet
                        {note.map (newNote => (
                            <Note Title = {newNote.Tile} Date = {newNote.Date} Content = {newNote.Content}/>
                        ))}
                    </div>
                </div>
                <div id="middle">
                    Select a note, or create a new one.
                </div>   
            </div>
        </div>

    )

}