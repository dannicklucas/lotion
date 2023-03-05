import { useNavigate, useOutletContext, useParams } from "react-router-dom"

export default function Edit({Title, Date, Content}) {
    const{id} = useParams();
    const navigate = useNavigate();
    const[note, setNote] = useOutletContext();
    
    return (
        <div id="edit">
            
        </div>
    )
}