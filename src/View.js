//import { useState } from "react";

import { useNavigate, useOutletContext, useParams, Link, Outlet } from "react-router-dom"

export default function View() {
    const{id} = useParams();
    const navigate = useNavigate();
    const[note, setNote] = useOutletContext();
    const editingNote =  note.find(theNote => theNote.Id === id)

    function deleteNote() {
        const answer = window.confirm("Are you sure?");
        if (answer) {
            const toNotDelete =  note.filter(theNote => theNote.Id !== id);

            if (Object.keys(note).length === 1) {
                setNote (toNotDelete)
                navigate(`/`, {replace: true});
                document.getElementById("noNote").style.display = "block";
            }
            else {
                setNote (toNotDelete) 
                navigate(`/view/${toNotDelete[0].Id}`, {replace: true});
            }
        }
    }
    
    
    return (
        <div className="edit">
            <div id="note-title-view">
                <div id="title-view" dangerouslySetInnerHTML={{__html: editingNote.Title}} />
                <div id="datetime" dangerouslySetInnerHTML={{__html: editingNote.Date}} />
                <div id="idkman">
                    <Link to={`/edit/${id}`}>
                        <label id="save">Edit</label>
                    </Link >
                    <label id="save" onClick={deleteNote} >Delete</label>
                </div>
                
            </div>
            <div id="view-content" dangerouslySetInnerHTML={{__html: editingNote.Content}} />

            <Outlet context = {[note, setNote]}/>
        </div>
    )
}