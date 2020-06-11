<script>
  export let fill = "#ffffff";
  export let d = "";
  export let delay = 100;
  import { fade, fly } from "svelte/transition";
  import { quintIn } from "svelte/easing";
  import { onMount } from "svelte";

  let show = false;
  onMount(() => (show = true));
</script>

<style>
  .icon {
    position: relative;
    top: 5px;
    left: 5px;
    margin-right: 14px;
    transition: 0.115s;
  }

  .icon:hover {
    fill: var(--primary);
  }

  @media screen and (max-width: 657px) {
    .icon {
      fill: var(--primary);
    }
  }
</style>

{#if show}

  <svg
    transition:fly={{ delay, duration: 1000, y: 20, opacity: 0 }}
    class="icon"
    width="50"
    height="50"
    viewBox="0 0 64 64"
    {fill}
    xmlns="http://www.w3.org/2000/svg">
    <path {d} />
  </svg>
{/if}
