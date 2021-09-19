<template>
  <div>
    <h1>Where is your event?</h1>
    <label for="">Location</label>
    <input
      type="text"
      v-model="event.location"
      placeholder="Location"
      class="field"
    />

    <h3>Are pets allowed?</h3>
    <div>
      <input type="radio" v-model="event.pets" name="pets" :value="1" />
      <label for="">Yes</label>
    </div>

    <div>
      <input type="radio" v-model="event.pets" name="pets" :value="0" />
      <label for="">No</label>
    </div>

    <h3>Extras</h3>
    <div>
      <input type="checkbox" v-model="event.extras.catering" class="field" />
      <label for="">Catering</label>
    </div>

    <div>
      <input type="checkbox" v-model="event.extras.music" class="field" />
      <label for="">Live music</label>
    </div>

    <div>
      <button class="button-fill-gradient">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "educations",
        "food",
        "community",
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: "",
        extras: {
          category: false,
          music: false,
        },
      },
    };
  },
};
</script>
