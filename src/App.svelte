<script>
  import BackgroundImage from "./BackgroundImage.svelte";
  import Clock from "./Clock.svelte";
  import AboutCard from "./AboutCard.svelte";
  import PersonalStats from "./PersonalStats.svelte";
</script>

<style>
  main {
    padding: 2em;
    height: 100%;
    width: 100%;
    display: grid;
    gap: 30px;
    grid-template-areas:
      "personalStats . clock"
      ". . aboutCard"
      ". . .";
    justify-content: space-between;
    grid-template-rows: min-content max-content;
  }

  @media screen and (max-width: 657px) {
    main {
      grid-template-areas:
        "clock"
        "aboutCard"
        "personalStats";
      /* grid-template-rows: max-content; */
      justify-items: center;
      justify-content: center;
      /* align-items: center; */
      gap: 20px;
      padding: 20px 10px;
    }
  }
</style>

<!-- 
  The main background image will sit behind all components 
  and therefore needs to come first in order 
-->
<BackgroundImage />
<main>
  <PersonalStats />
  <Clock />
  <AboutCard />
</main>
