import Note from "./Note";
import {React, useState} from "react";
import {v4 as uuid} from "uuid";
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";

export default function Layout() {

    const [note, setNote] = useState([])

    function addNote() {
        var newNote = {
            Title: "Untitled",
            Date: "Undefined",
            Content: "Empty",
            Id: uuid()
        }
        setNote([...note, newNote])
        console.log(note)
        document.getElementById("noNote").innerText = '';
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
                        <label onClick = {addNote}>
                            +
                        </label>
                    </div>
                    <div id="notes">
                        <div id="noNote">No Note Yet</div>
                        
                        {note.map (newNote => (
                            <Link to={`/Edit.js`}> 
                            <Note key = {uuid()} Title = {newNote.Tile} Date = {newNote.Date} Content = {newNote.Content}/>
                            </Link>
                        ))}

                        
                    </div>
                </div>
                <div id="middle">
                    Select a note, or create a new one.
                </div>   
            </div>
            <Outlet context = {[note, setNote]}/>
        </div>

    )

}