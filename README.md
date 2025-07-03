# Web Component Library - Coding Assignment 12

## Author
Lu Luke

## Description

This project is a React + TypeScript Component Library, built with Styled Components and Storybook. It includes the following components:

- Button
- Label
- Text
- Dropdown
- RadioButton
- Img
- HeroImage
- Card
- Table (including TableHeader, TableRow, TableCell, TableFooter)

All components:
- Are responsive
- Have disabled states
- Have Storybook stories
- Have at least 2 tests each

## How to run locally

### Start Storybook

```bash
npm install
npm run storybook
```

Then visit:

```
http://localhost:6006
```

### Run tests

```bash
npm test
```

---

## How to build & run with Docker

### Build docker image

```bash
docker build -t ui-garden .
```

### Run docker container

To run the container with the required name and port mapping, use:

```bash
docker run -d --name Lu_Luke_coding_assignment12 -p 8083:80 ui-garden
```

Then visit:

```
http://localhost:8083
```

---

## Docker Compose (optional)

If you prefer using docker-compose, you can create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  ui-garden:
    build: .
    container_name: Lu_Luke_coding_assignment12
    ports:
      - "8083:80"
```

Run with:

```bash
docker-compose up --build
```

---

## Deployment

The container serves a production build from the Create React App build folder using Nginx.

---


