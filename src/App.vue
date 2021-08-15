<template>
  <div id="nav" :class="{ darkMode: darkMode }">
    <br />
    <NavigationBar />
  </div>
  <router-view />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  components: {
    NavigationBar,
  },
  data() {
    return {
      darkMode: {
        backgroundColor: "#000000",
        COLOR: "whitesmoke",
      },
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  color: #ffffff;
  font-weight: bold;
  background-color: #000000;
}
body {
  background-color: #000000;
}
.darkMode {
  background: #000000;
  color: whitesmoke;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
