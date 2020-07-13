<script>
  import Button from "../Button.svelte";
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
      Hello, I'm a software developer with over 5 years expereince. I live in
      Phoenix, Arizona.
    </p>
    <p>
      I specialize in Svelte and ReactJS web frameworks and am highly
      expereinced in data science using VBA, SQL, and Python.
    </p>
    <p>
      Currently I'm in the process of updating this site, so please be patient
      as I add more features and better performance!
    </p>
    <!-- <Button fullwidth>Hire Me</Button> -->
  </div>
</article>
