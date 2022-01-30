import {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/FirebaseContext";

export const Form = () => {
    const [value,setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);
    const submitHandler = (event) => {
        event.preventDefault();
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show("Note has been created", 'success')
            }).catch(() => {
                alert.show('Something going wrong...','danger')
            })
            setValue('');
        } else {
            alert.show('Enter note text')
        }

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input className="form-control"
                       type="text"
                        placeholder="Enter Note"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}