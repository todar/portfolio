<script>
  import Loader from "../Loader.svelte";
  // import { fetchGithubProfile, fetchStackoverflowProfile } from "../store.js";
  // let githubPromise = fetchGithubProfile();

  // let stackoverflowPromise = fetchStackoverflowProfile();
</script>

<style>
  .content {
    display: flex;
    gap: 20px;
  }

  @media screen and (max-width: 900px) {
    .content {
      flex-direction: column;
      width: 100%;
    }

    .content a {
      width: 100%;
    }
  }

  article {
    transition: 0.3s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .content h2,
  .content h3 {
    margin: 0;
  }

  .stat {
    color: var(--primary);
    font-size: 40px;
  }

  .stat-description {
    font-size: 16px;
    font-weight: 500;
  }

  .stack-overflow-color {
    color: #f48024;
  }
</style>

<section>
  <h2>Open Source</h2>
  <div class="content">
    <a
      class="hoverable"
      href="https://github.com/todar?tab=repositories"
      title="Github Repositories">
      <article>
        <!-- {#await githubPromise}
        <Loader />
      {:then user}
        <h2 class="stat">{user.public_repos}</h2>
      {:catch}
        <h2 class="stat">Error</h2>
      {/await} -->
        <h2 class="stat">30</h2>
        <h3 class="stat-description">Github Repositories</h3>
      </article>
    </a>
    <a
      class="hoverable"
      href="https://stackoverflow.com/users/8309643/robert-todar?tab=profile"
      title="Stackoverflow Profile">
      <article>
        <!-- {#await stackoverflowPromise}
        <Loader />
      {:then user}
        <h2 class="stat stack-overflow-color">{user.items[0].reputation}</h2>
      {:catch}
        <h2 class="stat">Error</h2>
      {/await} -->
        <h2 class="stat stack-overflow-color">1237</h2>
        <h3 class="stat-description">Stack Overflow Reputation</h3>
      </article>
    </a>
  </div>
</section>
