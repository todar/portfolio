<script>
  export let fill = "var(--bg-text)";
  export let hover = "var(--primary)";
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
    fill: var(--fill);
    position: relative;
    top: 5px;
    left: 5px;
    padding: 0 5px;
    transition: 0.115s;
  }

  .icon:hover {
    fill: var(--hover);
  }

  @media screen and (max-width: 800px) {
    .icon {
      fill: var(--hover);
    }
  }
</style>

{#if show}

  <svg
    style="--fill: {fill}; --hover: {hover}"
    in:fly={{ delay, duration: 1500, y: 20, opacity: 0 }}
    class="icon"
    width="50"
    height="50"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg">
    <path {d} />
  </svg>
{/if}
