import { onMounted, ref,watch } from 'vue'
import { defineStore } from 'pinia'
import { PDFDocument, PDFRawStream, type PDFForm } from 'pdf-lib';
import { useAbilitiesStore } from './abilitiesStore';
import { useSkillsStore } from './skillsStore';
import { useProtectionAndAttackStore } from './protectionAndAttackStore';
import { useFeaturesStore } from './featuresStore';
import axios from 'axios';
export const usePdfLoadStore = defineStore('pdfLoadStore', () => {
  const pdfArrayBuffer = ref(null as ArrayBuffer | null);
  const pdfItem = ref<PDFDocument|null>(null);
  const pdfForms = ref<PDFForm|null>(null);
  const abilitiesStore = useAbilitiesStore();
  const skillsStore = useSkillsStore();
  const protectionAndAttackStore = useProtectionAndAttackStore();
  const featuresStore = useFeaturesStore();
  const errorMessage = ref('');
  const discordUrl = ref('');
  const sendMessagesToDiscord = ref(true);

  const loadPdf = async (e:DragEvent)=>{
    if(e.dataTransfer){
      const files = [...e.dataTransfer.files];
      if(files[0].type === "application/pdf"){
        try {
           files[0].arrayBuffer().then((ab)=>{
            pdfArrayBuffer.value = ab;
            PDFDocument.load(pdfArrayBuffer.value).then((pdf)=>{
              pdfItem.value = pdf;
              pdfForms.value = pdf.getForm();
              try{
                initAbilities(pdf.getForm());
                initSkills(pdf.getForm());
                initProtection(pdf.getForm());
                initFeatures(pdf.getForm());

                console.log(pdf.getForm().getFields());

              }catch(err){
                console.log(err);
                errorMessage.value = 'Error loading PDF. Unable to read the inputs';
              }

            })
          });
        }catch (error) {
          console.log(error);
        }
      }
    }
  }
  const initAbilities = (forms:PDFForm) => {
    if(forms !== null){

      abilitiesStore.characterName = forms.getTextField("CharacterName").getText()!;
      abilitiesStore.classAndLevel = forms.getTextField("ClassLevel").getText()!
      abilitiesStore.background = forms.getTextField("Background").getText()!
      abilitiesStore.playerName = forms.getTextField("PlayerName").getText()!
      //Yes it needs a whitespace
      abilitiesStore.race = forms.getTextField("Race ").getText()!
      abilitiesStore.alignment = forms.getTextField("Alignment").getText()!
      abilitiesStore.experience = forms.getTextField("XP").getText()!
      abilitiesStore.strength = forms.getTextField("STR").getText()!
      abilitiesStore.dexterity = forms.getTextField("DEX").getText()!
      abilitiesStore.constitution = forms.getTextField("CON").getText()!
      abilitiesStore.intelligence = forms.getTextField("INT").getText()!
      abilitiesStore.wisdom = forms.getTextField("WIS").getText()!
      abilitiesStore.charisma = forms.getTextField("CHA").getText()!
      abilitiesStore.inspiration = forms.getTextField("Inspiration").getText()?true:false;
      abilitiesStore.proficiencyBonus = forms.getTextField("ProfBonus").getText()!
    }
  }
  const initSkills = (forms:PDFForm) => {
    if(forms !== null){
      skillsStore.strength = forms.getTextField("ST Strength").getText()!
      skillsStore.dexterity = forms.getTextField("ST Dexterity").getText()!
      skillsStore.constitution = forms.getTextField("ST Constitution").getText()!
      skillsStore.intelligence = forms.getTextField("ST Intelligence").getText()!
      skillsStore.wisdom = forms.getTextField("ST Wisdom").getText()!
      skillsStore.charisma = forms.getTextField("ST Charisma").getText()!
      skillsStore.acrobatics = forms.getTextField("Acrobatics").getText()!
      skillsStore.animalHandling = forms.getTextField("Animal").getText()!
      skillsStore.arcana = forms.getTextField("Arcana").getText()!
      skillsStore.athletics = forms.getTextField("Athletics").getText()!
      //Yes it needs a whitespace
      skillsStore.deception = forms.getTextField("Deception ").getText()!
      //Yes it needs a whitespace
      skillsStore.history = forms.getTextField("History ").getText()!
      skillsStore.insight = forms.getTextField("Insight").getText()!
      skillsStore.intimidation = forms.getTextField("Intimidation").getText()!
      //Yes it needs a whitespace
      skillsStore.investigation = forms.getTextField("Investigation ").getText()!
      skillsStore.medicine = forms.getTextField("Medicine").getText()!
      skillsStore.nature = forms.getTextField("Nature").getText()!
      //Yes it needs a whitespace
      skillsStore.perception = forms.getTextField("Perception ").getText()!
      skillsStore.performance = forms.getTextField("Performance").getText()!
      skillsStore.persuasion = forms.getTextField("Persuasion").getText()!
      skillsStore.religion = forms.getTextField("Religion").getText()!
      skillsStore.sleightOfHand = forms.getTextField("SleightofHand").getText()!
      skillsStore.stealth = forms.getTextField("Stealth ").getText()!
      skillsStore.survival = forms.getTextField("Survival").getText()!
      skillsStore.otherProficiencies = forms.getTextField("ProficienciesLang").getText()!
    }
  }
  const initProtection = (forms:PDFForm) => {
    if(forms !== null){
      protectionAndAttackStore.armorClass = forms.getTextField("AC").getText()!
      protectionAndAttackStore.initiative = forms.getTextField("Initiative").getText()!
      protectionAndAttackStore.speed = forms.getTextField("Speed").getText()!
      protectionAndAttackStore.maxHP = forms.getTextField("HPMax").getText()!
      protectionAndAttackStore.currentHP = forms.getTextField("HPCurrent").getText()!
      protectionAndAttackStore.tempHP = forms.getTextField("HPTemp").getText()!
      protectionAndAttackStore.totalHitDice = forms.getTextField("HDTotal").getText()!
      protectionAndAttackStore.hitDice = forms.getTextField("HD").getText()!
      protectionAndAttackStore.attack1Name = forms.getTextField("Wpn Name").getText()!
      protectionAndAttackStore.attack1Bonus = forms.getTextField("Wpn1 AtkBonus").getText()!
      protectionAndAttackStore.attack1Damage = forms.getTextField("Wpn1 Damage").getText()!
      protectionAndAttackStore.attack2Name = forms.getTextField("Wpn Name 2").getText()!
      //Yes it needs a whitespace
      protectionAndAttackStore.attack2Bonus = forms.getTextField("Wpn2 AtkBonus ").getText()!
      //Yes it needs a whitespace
      protectionAndAttackStore.attack2Damage = forms.getTextField("Wpn2 Damage ").getText()!
      protectionAndAttackStore.attack3Name = forms.getTextField("Wpn Name 3").getText()!
      //Yes it needs a whitespace
      protectionAndAttackStore.attack3Bonus = forms.getTextField("Wpn3 AtkBonus  ").getText()!
      //Yes it needs a whitespace
      protectionAndAttackStore.attack3Damage = forms.getTextField("Wpn3 Damage ").getText()!
      protectionAndAttackStore.attackOther = forms.getTextField("AttacksSpellcasting").getText()!
      protectionAndAttackStore.copper = forms.getTextField("CP").getText()!
      protectionAndAttackStore.silver = forms.getTextField("SP").getText()!
      protectionAndAttackStore.electrum = forms.getTextField("EP").getText()!
      protectionAndAttackStore.gold = forms.getTextField("GP").getText()!
      protectionAndAttackStore.platinum = forms.getTextField("PP").getText()!
      protectionAndAttackStore.equipment = forms.getTextField("Equipment").getText()!
    }
  }
  const initFeatures = (forms:PDFForm) => {
    if(forms !== null){
      featuresStore.personalityTraits = forms.getTextField("PersonalityTraits ").getText()!
      featuresStore.ideals = forms.getTextField("Ideals").getText()!
      featuresStore.bonds = forms.getTextField("Bonds").getText()!
      featuresStore.flaws = forms.getTextField("Flaws").getText()!
      featuresStore.featuresAndTraits = forms.getTextField("Features and Traits").getText()!
    }
  }
  const sendDiscordMessage = (message:string) =>{
    try{
      axios.post(discordUrl.value, {
        username: abilitiesStore.characterName?abilitiesStore.characterName: "Character rolled",
        content: message
    })
    }catch(e){
      try{
        axios.get(`https:/discord.com/api/webhooks/${import.meta.env.VITE_DISCORD_WEBHOOK_ID}`).then((response)=>{
          axios.post(response.data.url, {
            username: abilitiesStore.characterName?abilitiesStore.characterName: "Character rolled",
            content: message
        })
        })
      }catch(err){
        errorMessage.value = 'Error sending message to discord';
      }

    }
  }
  const setupDiscord = async () => {
    const respone = await axios.get(`https:/discord.com/api/webhooks/${import.meta.env.VITE_DISCORD_WEBHOOK_ID}`)
    discordUrl.value = respone.data.url;

  }
  watch(errorMessage, (newVal) => {
    if(newVal.length > 0){
      setTimeout(()=>{
        errorMessage.value = '';
      },3500)
    }

  })
  onMounted(() => {
    setupDiscord();
  })
  return {pdfItem,pdfForms,pdfArrayBuffer,loadPdf,errorMessage,discordUrl,sendMessagesToDiscord,sendDiscordMessage}
});
