# Task Management App - Node.js Machine Test

## Overview

This is a simple **Task Management Application** created using **Node.js**, **Express.js**, **Plain SQL Queries** . The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on tasks stored in a **MySQL** database.

## Features

List of APIs

1. **Add a Task**: Users can add new tasks with a title and description.
2. **List Tasks**: All tasks are listed on the main page.
3. **Edit a Task**: Users can edit an existing task's title or description. (Optional)
4. **Delete a Task**: Users can delete tasks from the list. (Optional)

## Technology Stack

- **Backend**: Node.js (Express.js) for Restful APIs
- **Database**: MySQL (or any SQL database)
- **Database Queries**: Plain SQL (no ORM)

## Prerequisites

Before you can run this application, make sure the following are installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MySQL**: [Download MySQL](https://dev.mysql.com/downloads/installer/)

## Database Setup

1. Create a new MySQL database called `task_management`.
2. Create a `tasks` table with the following SQL query:
   ```sql
   CREATE TABLE tasks (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       description TEXT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

## API Endpoints

1. **POST /tasks**: To create a new task.
2. **GET /tasks**: To fetch a list of all tasks.
3. **PUT /tasks/:id**: To update a task's title or description by ID.
4. **DELETE /tasks/:id**: To delete a task by ID.

--- 

