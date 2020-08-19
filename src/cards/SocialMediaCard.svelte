<script>
  import Icon from "../icons/Icon.svelte";
  import {
    github,
    twitter,
    linkedin,
    stackoverflow,
    facebook,
  } from "../icons/iconPaths.js";
</script>

<style>
  nav {
    display: inline-flex;
    justify-content: space-evenly;
  }

  @media screen and (max-width: 900px) {
    nav {
      padding: 0px;
      width: 100%;
    }
  }
</style>

<section>
  <h2>Follow Me</h2>
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
    <a
      href="https://www.linkedin.com/in/robert-todar/"
      title="Linkedin">
      <Icon d={linkedin} delay={800} />
    </a>
    <a
      href="https://stackoverflow.com/users/8309643/robert-todar?tab=profile"
      title="StackOverflow">
      <Icon d={stackoverflow} delay={900} />
    </a>
  </nav>
</section>
