<style>
  .cards {
    display: flex;
  }
  .card {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    text-decoration: none;
    color: inherit;
    margin-right: 20px;
    background: var(--bg);
    border-radius: var(--radius);
    align-items: start;
    padding: var(--padding);
    transition: 0.5s;
    max-width: 350px;
  }

  .card:hover .link {
    text-decoration: underline;
  }

  img {
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: var(--radius);
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .content h2 {
    margin: 0;
  }

  @media screen and (max-width: 1020px) {
    .cards {
      flex-direction: column;
    }

    .card {
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
</style>

<section>
  <h2>My Projects</h2>
  <div class="cards">
    <a class="card" href="https://www.westongibson.com/">
      <div class="content">
        <header>
          <h2>Weston Gibson</h2>
          <p>
            Weston Gibson is rated as one of the top Realtors in Phoenix,
            Arizona.
          </p>
        </header>
        <a class="link" href="https://www.westongibson.com/">
          www.WestonGibson.com
        </a>
      </div>
      <img src="./static/weston-gibson-page.jpg" alt="house thumbnail" />
    </a>
    <a class="card" href="https://www.fridaynight.info/">
      <div class="content">
        <header>
          <h2>Friday Night Church</h2>
          <p>The official website of Friday Night Church.</p>
        </header>
        <a class="link" href="https://www.fridaynight.info/">
          www.fridaynight.info
        </a>
      </div>
      <img
        src="./static/friday-night-church-page.jpg"
        alt="home church thumbnail" />
    </a>
  </div>
</section>
