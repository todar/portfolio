<style>
  /* 
    Background will be full fit to the screen 
    and will be behind all other components.
  */
  .background-image,
  .background-image::after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .background-image {
    background: #222;
    background-image: url("/static/anton-repponen.jpg");
    background-position: center;
    background-size: cover;
  }

  /* 
    Most of the components will be on the outer edges
    of the screen. So, to make them easier to visualize I'm
    adding a dark gradent to make them pop more.
   */
  .background-image::after {
    content: "";
    background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.45)
    );
  }
</style>

<!-- This is the main background for the dashboard. -->
<div class="background-image" />
