# Chetan Ilva — Developer Portfolio

A responsive dark portfolio built with React and Vite. It includes animated section reveals, a subtle star background, skills, projects, education, certificates, and an EmailJS contact form.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## EmailJS setup

Create a `.env` file in the project root (do not commit it) and add your existing EmailJS values:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form uses these same environment variable names. Keep them configured in your hosting provider as well.

## Add a new project

1. Put the project's preview image in `src/assets/`.
2. Open `src/data/projects.js` and import the image at the top.
3. Copy an existing object inside the `projects` array and update `title`, `category`, `description`, `techStack`, `image`, `githubUrl`, and optional `liveUrl`.
4. Save the file. The project card appears automatically.

Example:

```js
{
  title: 'My New App',
  category: 'Full Stack Application',
  description: 'A short explanation of what the app does.',
  techStack: ['React', 'Node.js', 'MongoDB'],
  image: myNewAppImage,
  githubUrl: 'https://github.com/username/repository',
  liveUrl: 'https://example.com', // optional
}
```

## Add a certificate

1. Put the certificate image or PDF in `public/certificates/` (create the folder if needed).
2. Open `src/components/Certificates.jsx`.
3. Add an object to the `certificates` array, for example:

```js
{
  title: 'Python Fundamentals',
  issuer: 'Course Provider',
  date: 'November 2026',
  file: '/certificates/python-fundamentals.pdf',
}
```

Use a PDF or image path beginning with `/certificates/`. The certificate section will automatically show a card with a View Certificate link.

## CV

Replace `public/cv.pdf` with your latest CV, keeping the same filename, to preserve the Download CV links.
