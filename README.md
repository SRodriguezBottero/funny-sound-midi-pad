# Run and deploy your AI Studio app

A Funny Sound Pad that allows users to play various sounds by clicking buttons or pressing corresponding keys.

## Features

- Plays a variety of funny sounds.
- Clickable buttons for each sound.
- Keyboard shortcuts for triggering sounds.
- Visual feedback when a sound is playing.

## Technologies Used

- HTML
- CSS
- TypeScript
- Node.js (for local development and build process)
- Vite (as the frontend build tool)
- @google/genai (for AI-powered features, if any - *Jules' note: I'll need to verify its usage later if unclear*)

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Contributing

We welcome contributions to the Funny Sound Pad! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix (e.g., `feature/new-sound` or `fix/button-bug`).
3. Make your changes and test them thoroughly.
4. Submit a pull request with a clear description of your changes.

## License

This project is currently not licensed. We recommend adding an open-source license to encourage collaboration and define usage rights. The [MIT License](https://opensource.org/licenses/MIT) is a popular choice for its simplicity and permissiveness.
