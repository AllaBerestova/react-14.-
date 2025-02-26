import  {useState, useEffect} from "react"

export const useGetTodoList = (completed) => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try{
            setLoading(true)
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(tasks => {
                setTasks(tasks.filter(task => task.completed === completed))
                setLoading(false)
            })
        } catch (e) {
            console.log(e)
            setLoading(false)
        }
        
    }, [completed])

    return {
        tasks,
        loading
    } 
}