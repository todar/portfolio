<style>
  /* 
    Background will be full fit to the screen 
    and will be behind all other components.
  */
  .background-image,
  .background-image::after {
    position: fixed;
    top: 0;
    left: 0;

    /* Preserve aspet ratio */
    width: 100%;
    height: 100%;

    /* Added to remove flicker from scolling */
    will-change: transform;
    z-index: -1;
    overflow: hidden;
  }

  .background-image {
    background: #222;
    background-image: url("/static/anton-repponen.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
</style>

<!-- This is the main background for the dashboard. -->
<div class="background-image" />
