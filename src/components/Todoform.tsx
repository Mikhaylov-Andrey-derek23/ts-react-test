import React, { FC, useRef } from 'react';

interface TodoFormTodoProps  {
    onAdd(title:string):void
}

export const Todoform: FC<TodoFormTodoProps> = (props) => {

    // const [title, setTitle] = useState<string>('');

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    //     setTitle(event.target.value);
    // }

    // const keyPressHandler = (event:React.KeyboardEvent) => {
    //     if(event.key === 'Enter'){
    //         console.log(title);
    //         setTitle('');
    //     }
    // }

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }




    return (
        <>
            <div className="input-field mt2">
                <input
                    type="text"
                    id="title"
                    placeholder="Ввeдите список дел"
                    ref={ref}
                    // value={title}
                    // onChange={changeHandler}
                    onKeyPress={keyPressHandler}

                />
                <label htmlFor="title" className="active">
                    Ввeдите список дел
                </label>
            </div>
        </>
    )
} 