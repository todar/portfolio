<script>
  import BackgroundImage from "./BackgroundImage.svelte";
  import Clock from "./Clock.svelte";
  import AboutCard from "./AboutCard.svelte";
  import PersonalStats from "./PersonalStats.svelte";
  import SocialMediaCard from "./SocialMediaCard.svelte";
</script>

<style>
  main {
    overflow: auto;
    padding: 3em;
    height: 100%;
    width: 100%;
    display: grid;
    gap: 30px;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-areas:
      "personalStats    clock"
      ".  aboutCard"
      ".  ."
      "socialMediaCard socialMediaCard";
    justify-content: space-between;
    /* align-items: stretch; */
    grid-template-rows: min-content max-content;
  }

  @media screen and (max-width: 1255px) {
    main {
      grid-template-areas:
        "personalStats    clock"
        ".  aboutCard"
        ".  ."
        "socialMediaCard socialMediaCard";
    }
  }

  @media screen and (max-width: 657px) {
    main {
      grid-template-areas:
        "clock"
        "socialMediaCard"
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
  <SocialMediaCard />
</main>
