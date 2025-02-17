import {useState} from 'react'

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('PLease add task');
            return;
        }

        onAdd({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);

    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control form-control-check'>
            <label>Task</label>
            <input type='text' placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)}/> 
        </div><br></br>
        <div className='form-control form-control-check'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/> 
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={text} onChange={(e) => setReminder(e.currentTarget.checked)}/> 
        </div>
        <input  type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}
