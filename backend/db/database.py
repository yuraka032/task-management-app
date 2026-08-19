from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from core.config import settings

engine = create_engine(
    settings.DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    """Provide a database session and close it after the request."""
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()

def create_tables():
    """Create database tables defined by the SQLAlchemy models."""
    Base.metadata.create_all(bind=engine)