<script lang="ts">
  let count: number = 0
  let decrementValue: number = 100
  const increment = () => {
    count += 1
  }

  const decrement = () => {
    decrementValue --
  }
</script>

<button on:click = {decrement}>
  count id {decrementValue}
</button>

<button on:click={increment}>
  count is {count}
</button>
