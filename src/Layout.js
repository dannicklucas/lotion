import Note from "./Note";
import {React, useState, useEffect} from "react";
import {v4 as uuid} from "uuid";
import {Link, useNavigate, Outlet} from "react-router-dom";


export default function Layout() {

    const navigate = useNavigate();

    const [note, setNote]= useState(JSON.parse(localStorage.getItem("notes")) || []);
   
    useEffect(() => {

        localStorage.setItem("notes", JSON.stringify(note));
        if (note.length !== 0) {
            document.getElementById("noNote").style.display = "none";
          }
       
        
      }, [note]);

    
      
    
    

    function addNote() {
        let  now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        let date = now.toISOString().slice(0,16); 
        var newNote = {
            Title: "Untitled",
            Date: "",
            realDate: date,
            Content: "",
            Id: uuid()
        }
        setNote((prevNote) => {
            return [newNote, ...prevNote];
        });
        console.log(note)
        document.getElementById("noNote").style.display = "none";
        localStorage.setItem("notes", JSON.stringify(note));
        navigate(`/edit/${newNote.Id}`, {replace: true});
        
    }

    function hideSide() {
        document.querySelector(".side").classList.toggle("sideHidden");
        if (note.length === 0) {
            document.querySelector(".middle").classList.toggle("fullPage");
        }
        else {
            document.querySelector(".edit").classList.toggle("fullPage");
        }
        
        
    }
    
    return (
        <div id="page">
            <div id="header">
                <label id="menu" onClick={hideSide} >
                    &#9776;
                </label>
                <div id="title">
                    <h1>Lotion</h1>
                    <p id="slogan">Like notion, but worse.</p>
                </div>
            </div>
            <div id="underHeader">
                <div className="side">
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
                        
                        {note.map((newNote) => (
                            <Link key={newNote.Id} to={`/view/${newNote.Id}`}> 
                                <Note ID={newNote.Id} Title = {newNote.Title} Date = {newNote.Date} realDate = {newNote.realDate} Content = {newNote.Content} />
                            </Link>
                        ))}

                        
                    </div>
                </div>
                <Outlet context = {[note, setNote]}/>
                 
            </div>
            
        </div>

    )

}