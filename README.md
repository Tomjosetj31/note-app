# Note App

Note App is a web application that allows users to create, view, edit, and delete notes. This app provides a simple and user-friendly interface for managing your notes effectively.

## Features

- **Create Notes**: Create new notes with a title and content.
- **Edit Notes**: Easily edit the title or content of existing notes.
- **Delete Notes**: Remove unwanted notes.
- **List View**: View all your notes in a list format.
- **Detail View**: Click on a note to view its details.
- **Responsive Design**: The app is responsive and works well on both desktop and mobile devices.

## Installation

Follow these steps to set up and run the Note App on your local machine:

**Clone the Repository**:

```
git clone https://github.com/Tomjosetj31/note-app.git
cd note-app
```

### Run Django Backend

1. **Go to the backend directory**:

   ```
   cd backend
   ```

2. **Create a Virtual Environment**:

   ```
   python -m venv env
   source venv/bin/activate
   ```

3. **Install Dependencies**:

   ```
   pip install -r requirements.txt
   ```

4. **Run Migrations**:
   - Configure your database settings in settings.py.
   - Run migrations:
   ```
    python manage.py makemigrations
    python manage.py migrate
   ```
5. **Create a Superuser** (Optional):

   ```
   python manage.py createsuperuser
   ```

6. **Run the Development Server**:

   ```
   python manage.py runserver
   ```

### Run React Frontend

1. **Go to the frontend directory**:

   ```
   cd frontend
   ```

2. **Install Dependencies**:

   ```
    npm install
   ```

3. **Run the Development Server**:

   ```
   npm start
   ```
