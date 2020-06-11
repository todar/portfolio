<script>
  import Icon from "./Icon.svelte";
  import {
    github,
    twitter,
    linkedin,
    stackoverflow,
    facebook
  } from "./iconPaths.js";
</script>

<style>
  section {
    grid-area: socialMediaCard;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  nav {
    display: flex;
    justify-content: center;
  }

  /* @media screen and (max-width: 1255px) {
    nav {
      justify-content: center;
    }
  } */
</style>

<section>
  <nav class="hoverable">
    <a href="https://github.com/todar" title="Github">
      <Icon d={github} delay={200} />
    </a>
    <a href="https://www.facebook.com/rtodar" title="Facebook">
      <Icon d={facebook} delay={300} />
    </a>
    <a href="https://twitter.com/robert_todar" title="Twitter">
      <Icon d={twitter} delay={400} />
    </a>
    <a href="https://www.linkedin.com/in/robert-todar/" title="Linkedin">
      <Icon d={linkedin} delay={500} />
    </a>
    <a
      href="https://stackoverflow.com/users/8309643/robert-todar?tab=profile"
      title="StackOverflow">
      <Icon d={stackoverflow} delay={600} />
    </a>
  </nav>
</section>
