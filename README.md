# Where is My Bird?!

Welcome to the "Where is My Bird?!" project. This README provides an overview of the project, including its purpose, structure, and development guidelines.

## Trello Board

You can track the progress of the project and view the tasks on our Trello board [here](https://trello.com/b/jfamD4u0/where-is-my-bird).

## GitHub Repository

The frontend repository for this project is available on GitHub: [birdfrontend](https://github.com/hannakayes/birdfrontend).

## Description

"Where is My Bird?!" is a web-based application designed to provide bird enthusiasts with detailed information about birds that inhabit Europe and the Western Palearctic. Users can search for birds, filter them by habitat, view detailed information, mark their favorites, and even add new bird entries. The application also includes a map of Europe for regional bird identification.

## Features

1. **Start Page**: A landing page with a search bar to query the bird database.
2. **Main Page**: Displays a list of all birds, which can be filtered by habitat.
3. **Details Page**: Provides detailed information about each bird.
4. **Favorites**: Allows users to mark birds as favorites and view them on a separate page.
5. **About + Contact Page**: Contains information about the project and how to get in touch.
6. **Add/Delete Birds**: A form to add new birds and delete existing ones, including image and sound uploads via URL.
7. **Interactive Map**: A map of Europe that users can click to find birds in specific regions.

## MVP (Minimum Viable Product)

- Search bar on the start page to search the database.
- Main page displaying a list of birds with habitat filter functionality.
- Details page for each bird.
- Ability to mark and view favorite birds.
- About and contact pages.
- Form to add new birds and delete existing ones, with image and sound upload.
- Clickable map of Europe for regional bird identification.

## Backlog

- User authentication for personalizing favorite birds.
- Advanced search filters (e.g., by bird size, color).
- Integration of external bird databases for richer data.
- Interactive bird songs on the details page.
- Enhanced map features with additional geographic information.

## Data Structure

### Models

1. **Bird**: Represents a bird in the database.
   - `id`: Unique identifier.
   - `name`: Name of the bird.
   - `habitat`: Habitat of the bird.
   - `description`: Description of the bird.
   - `image_url`: URL of the bird's image.
   - `sound_url`: URL of the bird's sound.
2. **User**: Represents a user in the system.
   - `id`: Unique identifier.
   - `username`: Username of the user.
   - `email`: Email address of the user.
   - `favorites`: List of favorite birds (references Bird).
3. **Region**: Represents a geographic region.
   - `id`: Unique identifier.
   - `name`: Name of the region.
   - `birds`: List of birds found in this region (references Bird).

### API Endpoints

1. **GET /birds**: Retrieves a list of all birds.
2. **GET /birds/:id**: Retrieves details of a specific bird.
3. **POST /birds**: Adds a new bird to the database.
4. **DELETE /birds/:id**: Deletes a specific bird from the database.
5. **GET /regions**: Retrieves a list of all regions.
6. **GET /regions/:id**: Retrieves birds found in a specific region.
7. **POST /users/:id/favorites**: Adds a bird to the user's favorites.
8. **DELETE /users/:id/favorites/:bird_id**: Removes a bird from the user's favorites.

## States and State Transitions

### States

1. **Start Screen**: Initial screen with the search bar.
2. **Main Page**: Displays the list of birds.
3. **Details Page**: Shows detailed information about a bird.
4. **Favorites Page**: Displays the user's favorite birds.
5. **About + Contact Page**: Information about the project.
6. **Add Bird Form**: Form to add a new bird.
7. **Delete Bird Confirmation**: Confirmation dialog for deleting a bird.
8. **Map Page**: Interactive map for regional bird identification.

### State Transitions

- From **Start Screen** to **Main Page**: User searches for birds.
- From **Main Page** to **Details Page**: User clicks on a bird.
- From **Main Page** to **Favorites Page**: User navigates to favorites.
- From **Main Page** to **Add Bird Form**: User clicks to add a new bird.
- From **Details Page** to **Main Page**: User goes back to the list.
- From **Map Page** to **Main Page**: User selects a region.

## Task

1. Implement the search functionality on the start page.
2. Develop the main page with a list of birds and habitat filter.
3. Create the details page for individual birds.
4. Implement the favorites feature.
5. Build the about and contact pages.
6. Create forms for adding and deleting birds, including URL uploads for images and sounds.
7. Develop the interactive map of Europe for regional bird identification.
8. Set up the backend to store bird data and handle user actions.
9. Integrate the frontend with the backend API.

## Links

- [GitHub Repo](https://github.com/hannakayes/birdfrontend)
- [Trello Board](https://trello.com/b/jfamD4u0/where-is-my-bird)
