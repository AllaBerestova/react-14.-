import  {useState, useEffect} from "react"

export const useGetTodoList = (completed) => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        try{
            setLoading(true)
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                if(!response.ok){
                    throw new Error('Ошибка при загрузке данных')
                }
                return response.json()
            })
            .then(tasks => {
                if(completed === false){
                    setTasks(tasks)
                }else {
                    setTasks(tasks.filter(task => task.completed === completed))
                }
                setLoading(false)
            })
        } catch (e) {
            console.log(e)
        } finally{
            setLoading(false)
        }
        
    }, [completed])

    return {
        tasks,
        loading
    } 
}