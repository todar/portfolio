<script>
  export let fullwidth = false;
  export let disabled = false;
</script>

<style>
  /* Button Styles*/
  .btn {
    font: inherit;
    color: var(--primary-text);
    background-color: var(--primary);
    cursor: pointer;
    min-height: 2.5rem;
    min-width: 6rem;
    border: none;
    border-radius: 4px;
    outline: none;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .btn:hover {
    background-color: var(--primary-dark);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  }
  .btn[disabled] {
    background: none;
    box-shadow: none;
    color: var(--disabled);
    cursor: default;
  }
  .btn:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .btn:focus {
    background-color: var(--primary-dark);
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .fullwidth {
    width: 100%;
  }
</style>

<!-- A resuable button -->
<button class:fullwidth class="btn" {disabled}>
  <slot />
</button>
