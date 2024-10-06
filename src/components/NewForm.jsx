import '../App.css'

function NewForm ({value, updateText, handleAction}) {
  return (
    <label>
      <input className='input' placeholder='input tasks' value={value} onChange={(e)=>updateText(e.target.value)} />
      <button className="button" onClick={handleAction}>Add task</button>
    </label>
  );
}
 
 export default NewForm;