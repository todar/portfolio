<script>
  export let size = 60;
</script>

<style>
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
    border: 2px solid #f3f3f3c9;
    border-radius: 50%;
    border-top: 2px solid var(--primary);
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<div class="loader-container" style={`width: ${size}px; height: ${size}px;`}>
  <div class="loader" />
</div>
