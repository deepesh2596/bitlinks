# URL Shortener Project

## Overview
This project is a **URL Shortener** built with **Next.js**, **HTML**, **CSS**, and **JavaScript**. It allows users to shorten long URLs and track their usage. The application stores data in **MongoDB** and incorporates several modern web development tools and techniques.

---

## Features
- Shorten long URLs
- Track the number of clicks on shortened URLs
- User-friendly interface
- Fully responsive design
- Integration with MongoDB for data persistence
- Deployed for easy access and use

---

## Technologies Used

### Frontend
- Next.js
- HTML
- CSS (with Tailwind CSS for responsiveness)
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools
- GitHub for version control
- Vercel for deployment

---

## Installation and Setup

### Prerequisites
- Node.js installed on your system
- MongoDB instance (local or cloud-based)

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/deepesh2596/bitlinks.git
   ```
2. Navigate to the project folder:
   ```bash
   cd url-shortener
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_BASE_URL=your_base_url
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the project.

---

## Usage
1. Enter a long URL in the input field.
2. Click the "Shorten" button.
3. Copy the generated short URL and share it.

---


## Deployment
The project is deployed on **Vercel**. Access it here: [Live Demo](your_deployment_url)

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork this repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request

---


## Acknowledgements
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Contact
For any inquiries or feedback, contact me at **deepesh2596@gmail.com**.
