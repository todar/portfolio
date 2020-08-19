<script>
  export let title = "";
  export let content = "";
  export let href = "";
  export let imageName = "";
  export let alt = "";
</script>

<style>
  .card {
    width: 300px;
    height: 100%;
    min-height: 200px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    background: var(--bg);
    border-radius: var(--radius);
    padding: var(--padding);
    transition: 0.5s;
  }

  .card:hover .link {
    text-decoration: underline;
  }

  .card-image {
    align-items: flex-end;
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: var(--radius);
  }

  .card-content {
    color: var(--bg-text);
    max-width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-content h2 {
    margin: 0;
  }

  @media screen and (max-width: 900px) {
    .card {
      width: 100%;
      flex-grow: 1;
    }
  }

  .outer-link {
    text-decoration: none;
    max-width: 100%;
  }
</style>

<a class="outer-link" {href}>

  <!-- Base card -->
  <div class="card">

    <!-- Content -->
    <div class="card-content">
      <header>
        <h2>{title}</h2>
        <p>{content}</p>
      </header>
      <a class="link" {href}>{href}</a>
    </div>

    <!-- Image -->
    <img class="card-image" src={`./static/${imageName}`} {alt} />

  </div>
</a>
