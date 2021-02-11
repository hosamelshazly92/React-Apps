const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.text}</h3>
                    <p>{task.day}</p>
                </div>
            ))}
        </>
    )
}

export default Tasks
