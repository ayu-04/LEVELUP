from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(20),
                          nullable=False, unique=True)
    public_id = db.Column(db.String(60), unique = True)
    password = db.Column(db.String(80), nullable=False)
    #profile = db.Column(db.String())
    role = db.Column(db.String(20))

class Mentor(db.Model):
    __tablename__ = 'mentor'
    username = db.Column(db.String(20), primary_key=True)
    email_id = db.Column(db.String)
    phone_number = db.Column(db.Integer)
    age = db.Column(db.Integer)
    location = db.Column(db.String)
    languages = db.Column(db.String)
    linkedin_link = db.Column(db.String)
    calendly_link = db.Column(db.String)
    current_level = db.Column(db.String)
    skills = db.Column(db.String)
    levels_completed = db.Column(db.String)
    description = db.Column(db.String)

class Mentee(db.Model):
    __tablename__ = 'mentee'
    username = db.Column(db.String(20), unique=True, nullable = False, primary_key = True)
    email_id = db.Column(db.String)
    description = db.Column(db.String)
    location = db.Column(db.String)
    languages = db.Column(db.String)
    age = db.Column(db.Integer)
    skills = db.Column(db.String(500))
    phone_number = db.Column(db.Integer)
    weaknesses = db.Column(db.String(500))


class Mentorship(db.Model):
    __tablename__ = 'mentorship'
    mentor_username = db.Column(db.String(20), nullable = False, primary_key = True)
    mentee_username = db.Column(db.String(20), nullable = False, primary_key = True)
    status = db.Column(db.String(30))


