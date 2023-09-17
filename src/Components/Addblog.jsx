import {useState,useContext} from 'react'
import {FirebaseContext} from "../store/firebaseContext.js";
import {useNavigate} from "react-router-dom"
import "./Addblogstyle.css"


function Addblog() {
    const [text, setText] = useState('');
    const [subtext, setsubText] = useState('');
    const [image, setImage] = useState(null);
    const {firebase} = useContext(FirebaseContext)
    const navigate = useNavigate()


    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubtextChange = (e) => {
        setsubText(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
               ref.getDownloadURL().then((url) => {
                firebase.firestore().collection('blog').add({
                   text,
                   subtext,
                   url,
                })
                navigate('/');
               })
            })
        } catch (error) {
            console.log("Error = ",error);
        }
      }

    return (
        <div className="form-container">
      <h2>Form with Textarea and Image Upload</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={handleTextChange}
            rows="4"
            cols="50"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subtext">Subtext:</label>
          <textarea
            id="subtext"
            name="subtext"
            value={subtext}
            onChange={handleSubtextChange}
            rows="4"
            cols="50"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
    );
}

export default Addblog