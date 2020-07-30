<script>
  import Button from "../Button.svelte";
  const startDate = new Date(2015, 0, 1);
  const today = new Date();

  const yearsProgramming = parseInt(
    (today - startDate) / (1000 * 60 * 60 * 24) / 365
  );
</script>

<style>
  article {
    grid-area: aboutCard;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--bg);
    color: var(--bg-text);
    border-radius: var(--radius);

    text-align: center;
    max-width: 325px;
  }

  .card-content {
    padding: 1rem;
  }

  .image-container {
    width: 100%;
    height: auto;
    display: flex;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  img {
    width: 100%;
    height: auto;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  h1,
  h2 {
    margin: 0;
    font-weight: 400;
  }

  h1 {
    font-size: 1.3em;
  }

  h2 {
    font-size: 1.1em;
  }

  p {
    color: var(--subtle);
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
      Hello, I'm a software developer with over {yearsProgramming} years
      expereince. I live in Phoenix, Arizona.
    </p>
    <p>
      I specialize in Svelte and ReactJS web frameworks and am highly
      expereinced in data analytics and automation using VBA, SQL, and Python.
    </p>
  </div>
</article>
