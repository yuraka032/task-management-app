from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from db.database import get_db
from schemas.task import (
    TaskCreate,
    TaskResponse,
    TaskUpdate
)
from services import task_service

router = APIRouter(
    prefix = "/tasks",
    tags = ["Tasks"]
)

@router.post("/", response_model = TaskResponse)
def create_task(task_data: TaskCreate, db: Session = Depends(get_db)):
    return task_service.create_task(db, task_data)

@router.get("/", response_model = list[TaskResponse])
def get_tasks(completed: bool | None = None, db: Session = Depends(get_db)):
    return task_service.get_tasks(db, completed)

@router.get("/search", response_model = list[TaskResponse])
def search_tasks(search_query: str, completed: bool | None = None, db: Session = Depends(get_db)):
    return task_service.search_tasks(db, search_query, completed)

@router.put("/{task_id}", response_model = TaskResponse)
def update_task(task_id: int, task_data: TaskUpdate, db: Session = Depends(get_db)):
    try:
        return task_service.update_task(db, task_id, task_data)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.delete("/{task_id}", response_model = TaskResponse)
def delete_task(task_id: int, db: Session = Depends(get_db)):
    try:
        return task_service.delete_task(db, task_id)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))