<template>
  <div class="container">
    <div class="discordSwitchContainer">
      <label class="switch">
        <input type="checkbox" :checked="pdfLoadStore.sendMessagesToDiscord" @click="toggleCheckbox">
        <div class="slider round"></div>
      </label>
      <h2>{{ pdfLoadStore.sendMessagesToDiscord? 'Write into Discord' : 'Write only into textbox' }}</h2>
    </div>
    <table class="messageList">
      <tbody>
        <tr>
          <td>
            <span class="messages">
              <span class="message" v-for="message in rollStore.listOfRolls">{{ message }}</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { usePdfLoadStore } from '@/stores/pdfLoadStore';
import { useRollStore } from '@/stores/rollStore';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MessageDisplay',
  setup() {
    const pdfLoadStore = usePdfLoadStore();
    const rollStore = useRollStore();
    const toggleCheckbox = () => {
      pdfLoadStore.sendMessagesToDiscord = !pdfLoadStore.sendMessagesToDiscord
    }
    return{
      pdfLoadStore,
      toggleCheckbox,
      rollStore
    }
}
})
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 25em;
  height: 50rem;
  /* outline: 1px solid white; */
  margin-top: 1%;
  margin-bottom: 1%;
}
.discordSwitchContainer{
  width: 100%;
  height: 5em;
  background-color: rgb(255 255 255 / 6%);
}
.discordSwitchContainer h2{
  text-align: center;
  color: white;
}
.switch {
  position: relative;
  display: flex;
  justify-self: center;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #909af5;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.messageList{
  display: block;
  width: 100%;
  height: 100%;
  background-color: #2c1a00c4;
  padding: 3em;
  background-image: url('../assets/nornCropped.png');
  background-size: 110% 105%;
  background-repeat: no-repeat;
  background-position: center;

}
.messageList td{
  vertical-align: bottom;
}
.messages{
  display: table-cell;
  width: 100vw;
  height:40em;
  background-color: rgba(255, 255, 255, 0.975);
  color: black;
  vertical-align: bottom;
}
.message{
  font-weight: bold;
  display: block;
  border-top: 1px dotted black;
  margin-bottom: 0.5em;
  padding-left: 20px;
}
</style>
