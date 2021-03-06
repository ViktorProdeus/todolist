import React, { ChangeEvent, useCallback } from 'react'
import { Checkbox, IconButton } from '@material-ui/core'
import { EditableSpan } from '../../../../components/EditableSpan/EditableSpan'
import { Delete } from '@material-ui/icons'
import { TaskStatuses, TaskType } from '../../../../api/todolists-api'

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const {
        task,
        todolistId,
        changeTaskStatus,
        changeTaskTitle,
        removeTask,
    } = props;
    const onClickHandler = useCallback(() => removeTask(task.id, todolistId), [removeTask, task.id, todolistId]);

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        changeTaskStatus(task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, todolistId)
    }, [changeTaskStatus, task.id, todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        changeTaskTitle(task.id, newValue, todolistId)
    }, [changeTaskTitle, task.id, todolistId]);

    return <div key={task.id} className={task.status === TaskStatuses.Completed ? 'is-done' : ''}>
        <Checkbox
            checked={task.status === TaskStatuses.Completed}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler}/>
        <IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
})
