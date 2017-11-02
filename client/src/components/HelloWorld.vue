<template>
  <div class="hello">
    MSG
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.get('http://localhost:3000/hello')
      .then(res => res.data.data)
      .then(data => console.log(data))
  }
}
</script>