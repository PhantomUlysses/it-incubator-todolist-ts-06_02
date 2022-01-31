import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    value: string;
    onChange: (title: string) => void;
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value)

    const activateEditMode = () => {
        setEditMode(true);
    }

    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title);
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return editMode
        ? <input value={title} onChange={changeTitle} autoFocus  onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>

}