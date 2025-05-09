import { onMounted, ref,watch } from 'vue'
import { defineStore } from 'pinia'
import { PDFDocument, PDFRawStream, type PDFForm, PDFName, PDFImage, PDFObject, PDFRef, PDFContext, PDFArray, PDFFont } from 'pdf-lib';
import { useAbilitiesStore } from './abilitiesStore';
import { useSkillsStore } from './skillsStore';
import { useProtectionAndAttackStore } from './protectionAndAttackStore';
import { useFeaturesStore } from './featuresStore';
import axios from 'axios';
import { useFileSystemAccess } from '@vueuse/core';
import { useBackgroundStore } from './backgroundStore';
export const usePdfLoadStore = defineStore('pdfLoadStore', () => {
  const pdfArrayBuffer = ref(null as ArrayBuffer | null);
  const abilitiesStore = useAbilitiesStore();
  const skillsStore = useSkillsStore();
  const protectionAndAttackStore = useProtectionAndAttackStore();
  const featuresStore = useFeaturesStore();
  const backgroundStore = useBackgroundStore();
  const errorMessage = ref('');
  const discordUrl = ref('');
  const sendMessagesToDiscord = ref(true);
  const instance = axios.create({
    baseURL: 'https://discord.com/api/webhooks',
    timeout: 3000
  });
  const test = ref({} as Blob);

  const loadPdf = async (e:DragEvent)=>{
    if(e.dataTransfer){
      const files = [...e.dataTransfer.files];
      try {
        if(files[0].type === "application/pdf"){

            files[0].arrayBuffer().then((ab)=>{
              pdfArrayBuffer.value = ab;
              PDFDocument.load(pdfArrayBuffer.value).then((pdf)=>{
                try{
                  initAbilities(pdf.getForm());
                  initSkills(pdf.getForm());
                  initProtection(pdf.getForm());
                  initFeatures(pdf.getForm());
                  initBackground(pdf.getForm());
                  extractImage(pdf);
                }catch(err){
                  console.log(err);
                  errorMessage.value = 'Error loading PDF. Unable to read the inputs';
                }

              })
            });
          }
      }catch (error) {
        console.log(error);
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
      //Yes it needs a whitespace
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
      //Yes it needs a whitespace
      featuresStore.personalityTraits = forms.getTextField("PersonalityTraits ").getText()!
      featuresStore.ideals = forms.getTextField("Ideals").getText()!
      featuresStore.bonds = forms.getTextField("Bonds").getText()!
      featuresStore.flaws = forms.getTextField("Flaws").getText()!
      featuresStore.featuresAndTraits = forms.getTextField("Features and Traits").getText()!
    }
  }
  const initBackground = (forms:PDFForm) => {
    if(forms !== null){
      backgroundStore.additionalInfo = forms.getTextField("Feat+Traits").getText()!
      backgroundStore.age = forms.getTextField("Age").getText()!
      backgroundStore.allies = forms.getTextField("Allies").getText()!
      backgroundStore.backstory = forms.getTextField("Backstory").getText()!
      backgroundStore.eyes = forms.getTextField("Eyes").getText()!
      backgroundStore.hair = forms.getTextField("Hair").getText()!
      backgroundStore.height = forms.getTextField("Height").getText()!
      backgroundStore.skin = forms.getTextField("Skin").getText()!
      backgroundStore.weight = forms.getTextField("Weight").getText()!
      backgroundStore.symbolName = forms.getTextField("FactionName").getText()!
      backgroundStore.treasure = forms.getTextField("Treasure").getText()!

    }
  }
  const sendDiscordMessage = (message:string, messageType:string = 'Custom Roll') =>{
    try{
      axios.post(discordUrl.value, {
        username: abilitiesStore.characterName?abilitiesStore.characterName: "Character rolled",
        embeds:[{
          title: messageType,
          description:message
        }]
    })
    }catch(e){
      try{
        instance.get(`/${import.meta.env.VITE_DISCORD_WEBHOOK_ID}`).then((response)=>{
          instance.post(response.data.url, {
            username: abilitiesStore.characterName?abilitiesStore.characterName: "Character rolled",
            embeds:[{
              title: messageType,
              description:message
            }]
        })
        })
      }catch(err){
        errorMessage.value = 'Error sending message to discord';
      }

    }
  }
  const setupDiscord = async () => {
    const respone = await instance.get(`/${import.meta.env.VITE_DISCORD_WEBHOOK_ID}`)
    discordUrl.value = respone.data.url;

  }
  const extractImage = (doc:PDFDocument) => {
    if(doc !== null){
      doc.context
        .enumerateIndirectObjects()
        .forEach(async ([pdfRef, pdfObject], ref) => {
          if (!(pdfObject instanceof PDFRawStream)) {
            return;
          }
          const { dict } = pdfObject;
          const subtype = dict.get(PDFName.of("Subtype"));
          if (subtype == PDFName.of("Image")) {
            backgroundStore.appearance = URL.createObjectURL(new Blob([pdfObject.contents.buffer]))
          }
      });

    }else{
      return;
    }

  }

  const savePDF = async () =>{
    if(pdfArrayBuffer.value !== null){
      const pdfDoc = await PDFDocument.load(pdfArrayBuffer.value);
      saveAbilities(pdfDoc.getForm());
      saveSkills(pdfDoc.getForm());
      saveProtection(pdfDoc.getForm());
      saveFeatures(pdfDoc.getForm());
      saveBackground(pdfDoc.getForm());
      const byte = (await pdfDoc.save()).buffer as ArrayBuffer;
      const fs = useFileSystemAccess();
      fs.data.value = byte;
      fs.saveAs({
        suggestedName: `${abilitiesStore.characterName}.pdf`
      });

    }
  }
  const saveAbilities = (forms:PDFForm) => {
    if(forms !== null){
       forms.getTextField("CharacterName").setText(abilitiesStore.characterName)
       forms.getTextField("ClassLevel").setText(abilitiesStore.classAndLevel)
       forms.getTextField("Background").setText(abilitiesStore.background)
       forms.getTextField("PlayerName").setText(abilitiesStore.playerName)
       //Yes it needs a whitespace
       forms.getTextField("Race ").setText(abilitiesStore.race)
       forms.getTextField("Alignment").setText(abilitiesStore.alignment)
       forms.getTextField("XP").setText(abilitiesStore.experience)
       forms.getTextField("STR").setText(abilitiesStore.strength)
       forms.getTextField("DEX").setText(abilitiesStore.dexterity)
       forms.getTextField("CON").setText(abilitiesStore.constitution)
       forms.getTextField("INT").setText(abilitiesStore.intelligence)
       forms.getTextField("WIS").setText(abilitiesStore.wisdom)
       forms.getTextField("CHA").setText(abilitiesStore.charisma)
       forms.getTextField("ProfBonus").setText(abilitiesStore.proficiencyBonus)
       forms.getTextField("Inspiration").setText(abilitiesStore.inspiration?abilitiesStore.inspiration.toString():"")
    }
  }
  const saveSkills = (forms:PDFForm) => {
    if(forms !== null){
      forms.getTextField("ST Strength").setText(skillsStore.strength)
      forms.getTextField("ST Dexterity").setText(skillsStore.dexterity)
      forms.getTextField("ST Constitution").setText(skillsStore.constitution)
      forms.getTextField("ST Intelligence").setText(skillsStore.intelligence)
      forms.getTextField("ST Wisdom").setText(skillsStore.wisdom)
      forms.getTextField("ST Charisma").setText(skillsStore.charisma)
      forms.getTextField("Acrobatics").setText(skillsStore.acrobatics)
      forms.getTextField("Animal").setText(skillsStore.animalHandling)
      forms.getTextField("Arcana").setText(skillsStore.arcana)
      forms.getTextField("Athletics").setText(skillsStore.athletics)
      //Yes it needs a whitespace
      forms.getTextField("Deception ").setText(skillsStore.deception)
      //Yes it needs a whitespace
      forms.getTextField("History ").setText(skillsStore.history)
      forms.getTextField("Insight").setText(skillsStore.insight)
      forms.getTextField("Intimidation").setText(skillsStore.intimidation)
      //Yes it needs a whitespace
      forms.getTextField("Investigation ").setText(skillsStore.investigation)
      forms.getTextField("Medicine").setText(skillsStore.medicine)
      forms.getTextField("Nature").setText(skillsStore.nature)
      //Yes it needs a whitespace
      forms.getTextField("Perception ").setText(skillsStore.perception)
      forms.getTextField("Performance").setText(skillsStore.performance)
      forms.getTextField("Persuasion").setText(skillsStore.persuasion)
      forms.getTextField("Religion").setText(skillsStore.religion)
      forms.getTextField("SleightofHand").setText(skillsStore.sleightOfHand)
      //Yes it needs a whitespace
      forms.getTextField("Stealth ").setText(skillsStore.stealth)
      forms.getTextField("Survival").setText(skillsStore.survival)
    }
  }
  const  saveProtection = (forms:PDFForm) => {
    if(forms !== null){
      forms.getTextField("AC").setText(protectionAndAttackStore.armorClass)
      forms.getTextField("Initiative").setText(protectionAndAttackStore.initiative)
      forms.getTextField("Speed").setText(protectionAndAttackStore.speed)
      forms.getTextField("HPMax").setText(protectionAndAttackStore.maxHP)
      forms.getTextField("HPCurrent").setText(protectionAndAttackStore.currentHP)
      forms.getTextField("HPTemp").setText(protectionAndAttackStore.tempHP)
      forms.getTextField("HDTotal").setText(protectionAndAttackStore.totalHitDice)
      forms.getTextField("HD").setText(protectionAndAttackStore.hitDice)
      forms.getTextField("Wpn Name").setText(protectionAndAttackStore.attack1Name)
      forms.getTextField("Wpn1 AtkBonus").setText(protectionAndAttackStore.attack1Bonus)
      forms.getTextField("Wpn1 Damage").setText(protectionAndAttackStore.attack1Damage)
      forms.getTextField("Wpn Name 2").setText(protectionAndAttackStore.attack2Name)
      //Yes it needs a whitespace
      forms.getTextField("Wpn2 AtkBonus ").setText(protectionAndAttackStore.attack2Bonus)
      //Yes it needs a whitespace
      forms.getTextField("Wpn2 Damage ").setText(protectionAndAttackStore.attack2Damage)
      forms.getTextField("Wpn Name 3").setText(protectionAndAttackStore.attack3Name)
      //Yes it needs a whitespace
      forms.getTextField("Wpn3 AtkBonus  ").setText(protectionAndAttackStore.attack3Bonus)
      //Yes it needs a whitespace
      forms.getTextField("Wpn3 Damage ").setText(protectionAndAttackStore.attack3Damage)
      forms.getTextField("AttacksSpellcasting").setText(protectionAndAttackStore.attackOther)
      forms.getTextField("CP").setText(protectionAndAttackStore.copper)
      forms.getTextField("SP").setText(protectionAndAttackStore.silver)
      forms.getTextField("EP").setText(protectionAndAttackStore.electrum)
      forms.getTextField("GP").setText(protectionAndAttackStore.gold)
      forms.getTextField("PP").setText(protectionAndAttackStore.platinum)
      forms.getTextField("Equipment").setText(protectionAndAttackStore.equipment)
    }
  }
  const saveFeatures = (forms:PDFForm) => {
    if(forms !== null){
      //Yes it needs a whitespace
      forms.getTextField("PersonalityTraits ").setText(featuresStore.personalityTraits)
      forms.getTextField("Ideals").setText(featuresStore.ideals)
      forms.getTextField("Bonds").setText(featuresStore.bonds)
      forms.getTextField("Flaws").setText(featuresStore.flaws)
      forms.getTextField("Features and Traits").setText(featuresStore.featuresAndTraits)
    }
  }
  watch(errorMessage, (newVal) => {
    if(newVal.length > 0){
      setTimeout(()=>{
        errorMessage.value = '';
      },3500)
    }

  })

  const saveBackground = (forms:PDFForm) => {
    if(forms !== null){
      forms.getTextField("Feat+Traits").setText(backgroundStore.additionalInfo);
      forms.getTextField("Feat+Traits").acroField.setDefaultAppearance("0 0 0 rg /Helvetica 10 Tf")
      forms.getTextField("Age").setText(backgroundStore.age)
      forms.getTextField("Allies").setText(backgroundStore.allies)
      forms.getTextField("Allies").acroField.setDefaultAppearance("0 0 0 rg /Helvetica 10 Tf")
      forms.getTextField("Backstory").setText(backgroundStore.backstory)
      forms.getTextField("Backstory").acroField.setDefaultAppearance("0 0 0 rg /Helvetica 10 Tf")
      forms.getTextField("Eyes").setText(backgroundStore.eyes)
      forms.getTextField("Hair").setText(backgroundStore.hair)
      forms.getTextField("Height").setText(backgroundStore.height)
      forms.getTextField("Skin").setText(backgroundStore.skin)
      forms.getTextField("Weight").setText(backgroundStore.weight)
      forms.getTextField("FactionName").setText(backgroundStore.symbolName)
      forms.getTextField("Treasure").setText(backgroundStore.treasure)
      forms.getTextField("Treasure").acroField.setDefaultAppearance("0 0 0 rg /Helvetica 10 Tf")
    }
  }
  onMounted(() => {
    setupDiscord();
  })
  return {pdfArrayBuffer,loadPdf,errorMessage,discordUrl,sendMessagesToDiscord,sendDiscordMessage,savePDF}
});
