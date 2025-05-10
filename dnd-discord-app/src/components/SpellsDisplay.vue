<template>
  <div class="backgroundImage">
    <div class="spells">
      <div class="header">
        <input class="spellCastingClass" type="text" v-model="spellsStore.spellCastingClass"/>
        <div class="spellCastingContainer">
          <input class="overviewInput" v-model="spellsStore.spellCastingAbility"/>
          <input class="overviewInput" v-model="spellsStore.spellCastingDC"/>
          <input class="overviewInput" v-model="spellsStore.spellCastingAttack"/>
        </div>
      </div>
      <div class="columnContainer">
        <div class="column">
          <div class="cantrips" v-if="spellsStore.spellMap.get('Cantrips')">
            <div class="spellDiv"  v-for="(spell,index) in spellsStore.spellMap.get('Cantrips')"  :key="spell.name">
              <input class="spellInput" v-model="spellsStore.spellMap.get('Cantrips')![index].value"/>
            </div>

          </div>
          <div class="spellList">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level1Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level1Expended"/>
            </div>
            <div class="spellList1">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 1')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 1')![index].value"/>
              </div>
            </div>
          </div>
          <div class="spellList level2">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level2Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level2Expended"/>
            </div>
            <div class="spellList2">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 2')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 2')![index].value"/>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="spellList level3">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level3Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level3Expended"/>
            </div>
            <div class="spellList3">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 3')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 3')![index].value"/>
              </div>
            </div>
          </div>
          <div class="spellList level4">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level4Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level4Expended"/>
            </div>
            <div class="spellList4">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 4')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 4')![index].value"/>
              </div>
            </div>
          </div>
          <div class="spellList level5">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level5Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level5Expended"/>
            </div>
            <div class="spellList5">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 5')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 5')![index].value"/>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="spellList level6">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level6Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level6Expended"/>
            </div>
            <div class="spellList6">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 6')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 6')![index].value"/>
              </div>
            </div>
          </div>
          <div class="spellList level7">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level7Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level7Expended"/>
            </div>
            <div class="spellList7">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 7')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 7')![index].value"/>
              </div>
            </div>
          </div>
          <div class="spellList level8">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level8Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level8Expended"/>
            </div>
            <div class="spellList8">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 8')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 8')![index].value"/>
              </div>
            </div>
          </div>
          <div class="spellList level9">
            <div class="spellsHeader">
              <input class="slotsTotal" type="text" v-model="spellsStore.level9Total"/>
              <input class="slotsUsed" type="text" v-model="spellsStore.level9Expended"/>
            </div>
            <div class="spellList9">
              <div class="spellDiv" v-for="(spell,index) in spellsStore.spellMap.get('Level 9')"  :key="spell.name">
                <input class="spellInput" v-model="spellsStore.spellMap.get('Level 9')![index].value"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
import { useSpellsStore } from '@/stores/spellsStore';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SpellsDisplay',
  setup() {
    const spellsStore = useSpellsStore();
    return {spellsStore}
  },
});
</script>
<style scoped>
.backgroundImage {
  background-image: url('../assets/spells.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
}

.spells {
  height: 76em;
  width: 59em;
  align-items: center;
}
.header{
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 4em;
  margin-top: 5em;
  margin-left: 5em;
}
.spellCastingClass{
  width: 15em;
  border: none;
  background-color: transparent;
  font-size: 20px;

}
.spellCastingContainer{
  margin-left: 2em;
  width:28em;
}
.overviewInput{
  font-size: 20px;
  width: 5.2em;
  background-color: transparent;
  border: none;
  margin-top: 0.5em;
  text-align: center;
}
.overviewInput:not(:first-child){
  margin-left: 2em;
}
.overviewInput:last-child{
  margin-left: 2.3em;
}
.columnContainer{
  height: calc(100% + 2.5em);
  width: 100%;
  margin-top: 13em;
  display: flex;
  flex-direction: row;
  position: absolute;
  padding-left: 3em;
  padding-right: 3em;
}
.column{
  width: 33%;
  height: 100%;
  outline: 1px solid black;
  display: flex;
  flex-direction: column;
}
.column:not(:first-child){
  margin-left: 1em;
}

.cantrips{
  margin-top: 3.4em;
  margin-left: 1em;
  height: 13.5em;
}
.spellDiv{
  height: 1em;
  width: 16em;
  margin-bottom: 5px;
}
.spellInput{
  border: none;
  background-color: transparent;
  margin:none;
  font-size: 11px;
}
.spellsList{
  margin-top: 3em;
}
.spellsHeader{
  display: flex;
  flex-direction: row;
  height: 2em;
  font-size: 17px;
}
.spellsHeader input{
  font-size: 17px;
  background-color: transparent;
  border: none;

}
.slotsTotal{
  margin-left: 1em;
  width: 4em;
}
.slotsUsed{
  margin-left: 0.8em;
  width: 8em;
}
.spellList1{
  margin-top: 2em;
  height: 17em;
}
.spellList{
  margin-left: 1em;
}
.level2{
  margin-top: 0.9em;
}
.spellList2{
  margin-top: 0.3em;
}
.level3{
  margin-top: 1em;
}
.spellList3{
  margin-top: 0.3em;
}
.level4{
  margin-top: 1.7em;
}
.spellList4{
  margin-top: 0.3em;
}
.level5{
  margin-top: 1.9em;
}
.spellList5{
  margin-top: 0.3em;
}
.level6{
  margin-top: 1em;
}
.spellList6{
  margin-top: 0.3em;
}
.level7{
  margin-top: 1.7em;
}
.spellList7{
  margin-top: 0.3em;
}
.level8{
  margin-top: 1.7em;
}
.spellList8{
  margin-top: 0.35em;
}
.level9{
  margin-top: 1.6em;
}
.spellList9{
  margin-top: 0.3em;
}
</style>
