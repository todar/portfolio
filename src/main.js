// Just the standard template for Svelte.
import App from "./App.svelte";
import "./firebase.js";

const app = new App({
  target: document.body,
  props: {},
});

export default app;
