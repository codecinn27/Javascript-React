import TextField from '@mui/material/TextField';
import TodoItem from './TodoItem';
import { ListItem } from '@mui/material';
import { useState } from 'react';
import Create from '@mui/icons-material/Create';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

export default function TodoForm({addTodo}) {
    const [text, setText] = useState("");
    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic" 
                    label="Add To Do" 
                    placeholder='Write anything'
                    variant="outlined" 
                    onChange={handleChange} 
                    value={text}
                    InputProps={{
                        endAdornment :(
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="create to do"
                                edge="end"
                                type='submit'
                            >
                                <Create/>
                            </IconButton>
                            </InputAdornment>
                        )
                    }}

                />
            </form>

        </ListItem>

    )
}