<script>
  import BackgroundImage from "./BackgroundImage.svelte";
  import Clock from "./Clock.svelte";
  import AboutCard from "./AboutCard.svelte";
  import PersonalStats from "./PersonalStats.svelte";
  import SocialMediaCard from "./SocialMediaCard.svelte";

  import { fade } from "svelte/transition";
  let loaded = false;
</script>

<style>
  main {
    box-sizing: border-box;
    overflow: hidden;
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

  .loader {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #222;
    z-index: 1000;
  }

  .loader img {
    border-radius: 5px;
  }
</style>

<!-- 
  The main background image will sit behind all components 
  and therefore needs to come first in order 
-->

<svelte:window on:load={() => (loaded = true)} < />

{#if !loaded}
  <section class="loader" out:fade={{ duration: 500 }}>
    <img
      src="https://media.giphy.com/media/NEvPzZ8bd1V4Y/giphy-downsized.gif"
      alt="Loading" />
    Loading...
  </section>
{:else}
  <BackgroundImage />
  <section class="main" in:fade={{ duration: 500 }}>
    <main>
      <PersonalStats />
      <Clock />
      <AboutCard />
      <SocialMediaCard />
    </main>
  </section>
{/if}
