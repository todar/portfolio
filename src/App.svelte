<script>
  import BackgroundImage from "./BackgroundImage.svelte";
  import Clock from "./cards/Clock.svelte";
  import AboutCard from "./cards/AboutCard.svelte";
  import PersonalStats from "./cards/PersonalStats.svelte";
  import SocialMediaCard from "./cards/SocialMediaCard.svelte";
  import Projects from "./cards/Projects.svelte";
</script>

<style>
  .mobile {
    display: none;
  }

  .desktop {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 20px;
    justify-content: space-between;
  }

  .left {
    flex-grow: 1fr;
  }

  .right {
    align-items: flex-end;
  }

  main {
    padding: 20px 0;
    margin: 0 auto;
    height: 100%;
    max-width: 90%;
  }
  aside {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  aside > :global(*),
  .mobile > :global(*) {
    margin-bottom: var(--margin);
  }

  @media screen and (max-width: 760px) {
    .desktop {
      display: none;
    }
    .mobile {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 95%;
      margin: 0 auto;
    }
    main {
      max-width: none;
    }
  }
</style>

<!-- 
  The main background image will sit behind all components 
  and therefore needs to come first in order 
-->
<BackgroundImage />

<main>
  <div class="desktop">
    <aside class="left">
      <SocialMediaCard />
      <PersonalStats />
      <Projects />
    </aside>
    <aside class="right">
      <Clock />
      <AboutCard />
    </aside>
  </div>
  <div class="mobile">
    <Clock />
    <SocialMediaCard />
    <AboutCard />
    <Projects />
    <PersonalStats />
  </div>
</main>
