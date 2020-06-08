<script>
  import Button from "./Button.svelte";
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
    padding: 1rem;
    text-align: center;
    max-width: 325px;
  }

  .image-container {
    border-radius: 500px;
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--primary);
  }

  img {
    border-radius: 50px;
    width: 60px;
    height: 60px;
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
    <img src="/static/profile.jpg" alt="Robert Todar Portrait" />
  </div>
  <h1>Robert Todar</h1>
  <h2>Software Developer</h2>
  <p>
    Hello, I'm a software developer with over 5 years expereince. I live in
    Phoenix, Arizona.
  </p>
  <p>
    Currently I'm in the process of updating this site, so please be patient as
    I add more features and better performance!
  </p>
  <!-- <Button fullwidth>Hire Me</Button> -->
</article>
