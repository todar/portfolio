<script>
  import { onMount } from "svelte";
  const options = {
    hour: "numeric",
    minute: "numeric"
  };
  let now = new Date();

  onMount(() => {
    setInterval(() => {
      now = new Date();
    }, 1000);
  });

  $: formattedTime = new Intl.DateTimeFormat("en-us", options).format(now);
</script>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--radius);
    padding: 0 20px;
  }

  time {
    color: #fff;
    text-align: center;
    font-weight: 300;
    font-size: 3.5em;
    letter-spacing: 1.5px;
  }
</style>

<section class="hoverable">
  <time datetime={formattedTime}>{formattedTime}</time>
</section>
