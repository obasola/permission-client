<template>
  <div :style="darkMode">
    <div style="float: bottom">
      <div>
        <table>
          <tr>
            <td>
              <label for="formGroupExampleInput" class="form-label"
                >Example label</label
              >
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Example input placeholder"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="formGroupExampleInput2" class="form-label"
                >Another label</label
              >
            </td>
            <td>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input placeholder"
              />
            </td>
          </tr>
        </table>
      </div>
      <br /><br />
      <div style="float: bottom">
        <Button label="Primary" />
        <Button label="Secondary" class="p-button-secondary" />
        <Button label="Success" class="p-button-success" />
        <Button label="Info" class="p-button-info" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Options, Vue } from "vue-class-component";

export default {
  components: {},
  data() {
    return {
      darkMode: {
        backgroundColor: "#000000",
        color: "whitesmoke",
      },
    };
  },
};
</script>
<style lang="css"></style>
