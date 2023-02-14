import { useState , useEffect, useContext} from "react";
import GitHubProvider  from "../../Context/GitHub/GitHubContext";
export const UserSearch = () => {
    const [text , setText] = useState('');
    const [disableBtn , setdisableBtn] = useState(false);
    const [required , setRequired] = useState(true);
    const ctxData = useContext(GitHubProvider);

    useEffect(()=>{
        if (text === '') {
            
            setdisableBtn(false);
            setRequired(true);
        }else{
            
            setdisableBtn(true);
            setRequired(false);
          
        }
    },[text])
    const handleChange = (e)=>{
        setText(e.target.value);
        
      
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        ctxData.userRequestAPI(text);
       
    }

    const handleClear = ()=>{
        setText('');
        ctxData.clearusers();
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="search-input d-flex align-items-center mb-2">
            <input type='text' className="search-text" placeholder="Search ..." onChange={handleChange} value={text}/>
            <input type='submit' disabled={required} required={disableBtn} value='GO' className="search-btn"/>
          
        </div>
        {text.length > 0 &&
       <button className="clear" onClick={handleClear}>Clear</button>
        }
    </form>
  )
}
