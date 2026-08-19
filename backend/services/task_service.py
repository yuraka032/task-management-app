from sqlalchemy.orm import Session

from models.task import Task
from schemas.task import TaskCreate, TaskUpdate


def create_task(db: Session, task_data: TaskCreate):
    task = Task(
        title=task_data.title,
        description=task_data.description,
    )

    db.add(task)
    db.commit()
    db.refresh(task)

    return task

def get_tasks(completed: bool | None, db: Session):
    query = db.query(Task)

    if completed is not None:
        query = query.filter(Task.completed == completed)

    return query.all()

def search_tasks(db: Session, search_query: str, completed: bool | None = None):
    query = db.query(Task).filter(Task.title.ilike(f"%{search_query}%"))

    if completed is not None:
        query = query.filter(Task.completed == completed)

    return query.all()

def update_task(db: Session, task_id: int, task_data: TaskUpdate):
    task = db.query(Task).filter(Task.id == task_id).first()

    if not task:
        raise ValueError(f"Task with id {task_id} not found")

    if task_data.title is not None:
        task.title = task_data.title
    if task_data.description is not None:
        task.description = task_data.description
    if task_data.completed is not None:
        task.completed = task_data.completed

    db.commit()
    db.refresh(task)

    return task

def delete_task(db: Session, task_id: int):
    task = db.query(Task).filter(Task.id == task_id).first()

    if not task:
        raise ValueError(f"Task with id {task_id} not found")

    db.delete(task)
    db.commit()

    return task