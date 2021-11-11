<script>
  import CoffeeButton from "../CoffeeButton.svelte";
  const startDate = new Date(2015, 0, 1);
  const today = new Date();

  const yearsProgramming = parseInt(
    (today - startDate) / (1000 * 60 * 60 * 24) / 365
  );
</script>

<style>
  a {
    /* color: var(--secondary); */
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    color: var(--bg-text);
    border-radius: var(--radius);
    width: 350px;
  }

  .card-content {
    padding: var(--padding);
    padding-bottom: 0;
  }

  .image-container {
    width: 100%;
    height: auto;
    min-height: 233px;
    object-fit: cover;
    display: flex;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  h1,
  h2 {
    margin: 0;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  .coffee {
    padding: 20px;
    color: var(--secondary);
  }

  @media screen and (max-width: 760px) {
    .card {
      width: 100%;
    }
  }
</style>

<article class="card">
  <div class="image-container">
    <!-- <div class="profile-image" /> -->
    <img src="/static/family.jpg" alt="Robert Todar with family" />
  </div>
  <div class="card-content">
    <h1>Robert Todar</h1>
    <h2>Software Developer</h2>
    <p>
      Hello, I'm a software developer with over {yearsProgramming}
      years experience. I live in Phoenix, Arizona.
    </p>
    <p>
      I specialize in
      <a href="https://svelte.dev/">Svelte</a>
      and
      <a href="https://reactjs.org/">React</a>
      front end web development frameworks. For the backend I'm
      experienced with
      <a href="https://firebase.google.com/">Firebase</a>
      as a
      <abbr title="Backend-as-a-Service">BaaS</abbr>
      .
    </p>
    <p>
      Additionally, I'm highly experienced in data analytics and
      automation using VBA, SQL, and
      <a href="https://www.python.org/">Python</a>
      .
    </p>
  </div>
  <CoffeeButton />
  <!-- <a
    class="coffee"
    href="https://www.buymeacoffee.com/todar"
    target="_blank"
    rel="noreferrer">
    ☕ Buy me a coffee
  </a> -->
</article>
