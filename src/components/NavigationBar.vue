<template>
  <div style="margin-top: -3.5em; background-color: #000000">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid" style="background-color: #000000">
        <a class="navbar-brand" href="#">
          <img src="@/assets/SimbaOba.png" width="80" height="50" /> IBUKUN
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="home"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about">About</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard">
                Dashboard
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Portfolio
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="http://localhost:8080"
                    >Todo Client</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="http://localhost:3000"
                    >Todo Server</a
                  >
                </li>
                <li><a class="dropdown-item" href="#">Heroes & Villians</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Sakila</a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Features
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link to="/page" class="dropdown-item"
                    >Page</router-link
                  >
                </li>
                <li>
                  <router-link to="/pageElement" class="dropdown-item"
                    >Page Element</router-link
                  >
                </li>
                <li>
                  <router-link to="/persons" class="dropdown-item"
                    >Users</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link to="/permission" class="dropdown-item"
                    >Permission</router-link
                  >
                </li>
                <li>
                  <router-link to="/permissionGroup" class="dropdown-item"
                    >Permission Group</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

    <div style="margin-top: 0.5em">
      <center>
        <img src="../assets/SimbaOba.png" width="80%" height="100%" />
      </center>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavigationBar",

  setup() {
    const items = [
      {
        label: "File",
        icon: "pi pi-fw pi-file",
        items: [
          {
            label: "Delete",
            icon: "pi pi-fw pi-trash",
          },
          {
            separator: true,
          },
          {
            label: "Export",
            icon: "pi pi-fw pi-external-link",
          },
        ],
      },
    ];

    return { items };
  },
};
</script>

<style lang="css" scoped>
a {
  color: blue;
  font-weight: bold;
}
</style>
