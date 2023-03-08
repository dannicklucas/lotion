export default function Note({ID, Title, Date, realDate, Content}) {
    var setContent;
    var setTitle;
    if (Content === "") {
        setContent = "..."
    }
    else if (Content.length > 50) {
        setContent = Content.substring(0, 50) + "...";
    }
    else {
        setContent = Content
    }

    if (Title.length > 18) {
        setTitle = Title.substring(0, 18) + "...";
    }
    else {
        setTitle = Title
    }
    
    return (
       
            <div id="note">
                <div>
                    {setTitle}
                </div>
                    
                <div id="note-content-side">
                    {Date}
                </div>

                <div id="note-content-side" dangerouslySetInnerHTML={{__html: setContent}}>
                    
                </div>
            </div>
        
    )
}