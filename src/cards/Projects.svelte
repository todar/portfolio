<script>
  import Card from "./ProjectCard.svelte";
</script>

<style>
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
  }

  @media screen and (max-width: 900px) {
    .cards {
      flex-direction: column;
    }
  }
</style>

<section>
  <h2>Projects</h2>
  <div class="cards">

    <Card
      title="Weston Gibson"
      content="Weston Gibson is rated as one of the top Realtors in
      Phoenix, Arizona."
      href="https://www.westongibson.com/"
      alt="house thumbnail"
      imageName="weston-gibson-page.jpg" />

    <Card
      title="Friday Night Church"
      content="The official website of Friday Night Church."
      href="https://www.fridaynight.info/"
      alt="home church thumbnail"
      imageName="friday-night-church-page.jpg" />

  </div>
</section>
