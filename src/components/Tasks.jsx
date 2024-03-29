import { useState } from 'react'
import { Trash } from 'phosphor-react'
import Checkbox from '../assets/Checkbox-layer.svg'
import Checked from '../assets/Checked.svg'
import styles from '../components/Tasks.module.scss'


export function Tasks({task, completed, onMarkAsCompleted, onDeleteTask }) {

    const [isVisible, setIsVisible] = useState(true);
    const [isTextHighlighted, setIsTextHighlighted] = useState(completed)   
    const StyleMarked = {
        textDecoration: isTextHighlighted ? 'line-through' : 'none',
        opacity: isTextHighlighted ? '50%' : '100%',          
    } 
    function handleClick() {
        setIsVisible(!isVisible)
        setIsTextHighlighted(!isTextHighlighted)
        onMarkAsCompleted(!isTextHighlighted)         
    }
    function handleDeleteTask() {
        onDeleteTask()
    }
    return(
        <div>
            <section className={styles.sectionSize}>       
                <div className={styles.tasks}>
                    <div className={styles.imgDiv}>
                        <img 
                            className={styles.checkBox} 
                            src={Checkbox} 
                            onClick={handleClick}
                            alt="Checkbox-Layer" 
                        />
                        <img 
                            className={styles.checkedBox} 
                            src={Checked} 
                            alt="Checked-box" 
                            style={{
                                display: isVisible ? 'none' : 'block'
                            }}
                            onClick={handleClick}                         
                        />
                    </div>
                    <input type="checkbox" />
                    <div className={styles.taskTextWrapper}>
                        <div className={styles.taskText}> 
                            <label style={StyleMarked}>{task}</label>
                        </div>
                    </div>
                    <button onClick={handleDeleteTask} className={styles.trashIcon}><Trash size={18} /></button>
                </div>   
            </section>
        </div>
    );
};

