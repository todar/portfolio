<style>
  section {
    grid-area: personalStats;
    display: flex;
  }

  @media screen and (max-width: 760px) {
    section {
      flex-direction: column;
    }
  }

  article {
    padding: 10px 20px;
    margin-bottom: 8px;
    transition: 0.3s;
    border-radius: var(--radius);
  }

  article:hover {
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h2,
  h3 {
    margin: 0;
    font-weight: 400;
  }

  .stat {
    color: var(--primary);
    font-size: 40px;
  }

  .stat-description {
    font-size: 16px;
    font-weight: 500;
  }

  .stack-overlow-color {
    color: #f48024;
  }
</style>

<section>
  <a
    href="https://github.com/todar?tab=repositories"
    title="Github Repositories">
    <article>
      <h2 class="stat">30</h2>
      <h3 class="stat-description">Github Repositories</h3>
    </article>
  </a>
  <a
    href="https://stackoverflow.com/users/8309643/robert-todar?tab=profile"
    title="Stackoverflow Profile">
    <article>
      <h2 class="stat stack-overlow-color">1,269</h2>
      <h3 class="stat-description">Stack Overflow Reputation</h3>
    </article>
  </a>
</section>
