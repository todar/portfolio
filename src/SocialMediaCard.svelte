<script>
  import Icon from "./Icon.svelte";
  import {
    github,
    twitter,
    linkedin,
    stackoverflow,
    facebook,
    heart
  } from "./iconPaths.js";
  import Like from "./Like.svelte";
</script>

<style>
  section {
    grid-area: socialMediaCard;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  nav {
    display: flex;
    justify-content: center;
  }
</style>

<section>
  <nav class="hoverable">
    <a href="https://github.com/todar" title="Github">
      <Icon d={github} delay={500} />
    </a>
    <a href="https://www.facebook.com/rtodar" title="Facebook">
      <Icon d={facebook} delay={600} />
    </a>
    <a href="https://twitter.com/robert_todar" title="Twitter">
      <Icon d={twitter} delay={700} />
    </a>
    <a href="https://www.linkedin.com/in/robert-todar/" title="Linkedin">
      <Icon d={linkedin} delay={800} />
    </a>
    <a
      href="https://stackoverflow.com/users/8309643/robert-todar?tab=profile"
      title="StackOverflow">
      <Icon d={stackoverflow} delay={900} />
    </a>
  </nav>

  <Like />

</section>
