<template>
  <div>
    <h1>Name and Describe your event?</h1>
    <BaseInput type="text" value="event.title" label="Title" /> 
    <br />
    <BaseInput type="text" value="event.description" label="Description" />
    <br /><br />
    <h3>Where is your event?</h3>
    <BaseInput type="text" value="event.location" label="Location" />
    <br /><br />
    <h3>Are pets allowed?</h3>
    <BaseInput type="radio" value="event.pets" label="Yes" />
    <BaseInput type="radio" value="event.pets" label="No" />
    <br /><br />
    <h3>Extras</h3>
    <BaseInput type="checkbox" value="event.extras.catering" label="Catering" />
    <BaseInput type="checkbox" value="event.extras.music" label="Live music" />

    <div>
      <button class="button-fill-gradient">Submit</button>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
export default {
  components: {
    BaseInput,
  },
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
