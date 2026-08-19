from typing import Optional
from pydantic import BaseModel, ConfigDict


class TaskBase(BaseModel):
    """Shared fields used when creating or representing a task."""

    title: str
    description: Optional[str] = None

class TaskCreate(TaskBase):
    """Schema for creating a new task."""

    pass

class TaskUpdate(BaseModel):
    """Schema for updating an existing task."""

    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None

class TaskResponse(TaskBase):
    """Schema returned to the client after retrieving a task."""

    id: int
    completed: bool

    model_config = ConfigDict(from_attributes = True)