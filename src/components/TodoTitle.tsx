import styles from "./TodoTitle.module.scss"

interface TodoTitleProps {
    name: string
}

const TodoTitle: React.FC<TodoTitleProps> = ({ name }) => {
    return <div className={styles.todoTitle}>{name}</div>
}

export default TodoTitle
