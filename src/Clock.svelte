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
  time {
    grid-area: clock;
    color: #fff;
    text-align: center;
    font-weight: 300;
    font-size: 3.5em;
    letter-spacing: 1.5px;
    padding: 5px 20px;
    transition: 0.3s;
    border-radius: var(--radius);
  }

  time:hover {
    background: rgba(0, 0, 0, 0.3);
  }
</style>

<time datetime={formattedTime}>{formattedTime}</time>
