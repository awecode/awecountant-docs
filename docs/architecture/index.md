---
sidebar: auto
---

# System Architecture

The system is built as an SPA that uses REST APIs for communicating with the server. An end user needs a modern web-browser to use the system.

## Architecture Diagram

![System Architecture](~@assets/img/system_architecture.png)

## Frontend (Client-side) Technologies:

- HTML5, CSS, Javascript
- Vue.js as Javascript framework
- Vuetify.js as design component framework
- SCSS as stylesheet language

## Back-end (Server-side) Technologies:

- Postgresql as DBMS
- Python as programming language
- Django as Python web framework
- Django Rest Framework as toolkit for building REST APIs
- WSGI for Web Service Interface
- Nginx for reverse proxying to web service
- Nginx for serving static files
- Ubuntu Server 16.04 as Server OS

## ER Diagram

![System Architecture](~@assets/img/er_daigram.png)

## Acronyms

- SPA: Single Page Application
- REST: REpresentational State Transfer
- API: Application Programming Interface
- HTML: HyperText Markup Language
- CSS: Cascading Style Sheet
- DBMS: DataBase Management System
- WSGI: Web Server Gateway Interface
- OS: Operating System
- ER: Entity Relationship
