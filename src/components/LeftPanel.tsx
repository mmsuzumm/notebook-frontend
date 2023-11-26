import TodoTitle from "./TodoTitle"

import styles from "./LeftPanel.module.scss"

const LeftPanel = () => {
    const testTodos = [
        { id: "0", name: "Сделай меня", text: "надо делать дело" },
        {
            id: "1",
            name: "Сделай меня, пожалуйста",
            text: "надо делать дело",
        },
        {
            id: "2",
            name: "Сделай меня, очень надо",
            text: "надо делать дело",
        },
        {
            id: "3",
            name: "Сделай меня, задолбал",
            text: "надо делать дело",
        },
    ]
    return (
        <div className={styles.leftPanel}>
            {testTodos.map((todo) => {
                return <TodoTitle name={todo.name} />
            })}
        </div>
    )
}

export default LeftPanel
