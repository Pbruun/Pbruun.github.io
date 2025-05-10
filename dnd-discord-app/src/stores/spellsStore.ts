import type { PDFForm } from 'pdf-lib';
import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useSpellsStore = defineStore('spellsStore', () => {
  const spellMap = ref(new Map<string, Spell[]>([
    ['Cantrips',[]],
    ['Level 1',[]],
    ['Level 2',[]],
    ['Level 3',[]],
    ['Level 4',[]],
    ['Level 5',[]],
    ['Level 6',[]],
    ['Level 7',[]],
    ['Level 8',[]],
    ['Level 9',[]],
  ]));
  const spellCastingClass = ref('');
  const spellCastingAbility = ref('');
  const spellCastingDC = ref('');
  const spellCastingAttack = ref('');
  const level1Total = ref('');
  const level1Expended = ref('');
  const level2Total = ref('');
  const level2Expended = ref('');
  const level3Total = ref('');
  const level3Expended = ref('');
  const level4Total = ref('');
  const level4Expended = ref('');
  const level5Total = ref('');
  const level5Expended = ref('');
  const level6Total = ref('');
  const level6Expended = ref('');
  const level7Total = ref('');
  const level7Expended = ref('');
  const level8Total = ref('');
  const level8Expended = ref('');
  const level9Total = ref('');
  const level9Expended = ref('');



  const importSpells = (form: PDFForm) => {
    spellCastingClass.value = form.getTextField('Spellcasting Class 2').getText()!;
    spellCastingAbility.value = form.getTextField('SpellcastingAbility 2').getText()!;
    spellCastingDC.value = form.getTextField('SpellSaveDC  2').getText()!;
    spellCastingAttack.value = form.getTextField('SpellAtkBonus 2').getText()!;
    populateSpellMap(form);
    spellSlots(form);
  }

  const populateSpellMap = (form: PDFForm) => {

    let i = 1014;
    while(i < 1100){
      if(i < 1023){
        if(i === 1015){
          spellMap.value.get('Level 1')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
        }else{
          spellMap.value.get('Cantrips')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
        }
      } else if(i < 1034){
        spellMap.value.get('Level 1')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      } else if(i < 1047){
        spellMap.value.get('Level 2')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      } else if(i < 1060){
        spellMap.value.get('Level 3')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      } else if(i < 1073){
        spellMap.value.get('Level 4')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      } else if(i < 1082){
        spellMap.value.get('Level 5')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      } else if(i < 1091){
        spellMap.value.get('Level 6')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      } else if(i < 1100){
        spellMap.value.get('Level 7')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      }
      i++;
    }
    i = 10100
    while(i < 101014){
      if(i < 10107){
        spellMap.value.get('Level 8')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      } else{
        spellMap.value.get('Level 9')?.push({'value':form.getTextField(`Spells ${i}`).getText()!,'name':`Spells ${i}`});
      }
      if(i === 10109){
        i = 101010
      }else{
        i++;
      }
    }
  }
  const spellSlots = (form: PDFForm) => {
    level1Total.value = form.getTextField('SlotsTotal 19').getText()!;
    level1Expended.value = form.getTextField('SlotsRemaining 19').getText()!;
    level2Total.value = form.getTextField('SlotsTotal 20').getText()!;
    level2Expended.value = form.getTextField('SlotsRemaining 20').getText()!;
    level3Total.value = form.getTextField('SlotsTotal 21').getText()!;
    level3Expended.value = form.getTextField('SlotsRemaining 21').getText()!;
    level4Total.value = form.getTextField('SlotsTotal 22').getText()!;
    level4Expended.value = form.getTextField('SlotsRemaining 22').getText()!;
    level5Total.value = form.getTextField('SlotsTotal 23').getText()!;
    level5Expended.value = form.getTextField('SlotsRemaining 23').getText()!;
    level6Total.value = form.getTextField('SlotsTotal 24').getText()!;
    level6Expended.value = form.getTextField('SlotsRemaining 24').getText()!;
    level7Total.value = form.getTextField('SlotsTotal 25').getText()!;
    level7Expended.value = form.getTextField('SlotsRemaining 25').getText()!;
    level8Total.value = form.getTextField('SlotsTotal 26').getText()!;
    level8Expended.value = form.getTextField('SlotsRemaining 26').getText()!;
    level9Total.value = form.getTextField('SlotsTotal 27').getText()!;
    level9Expended.value = form.getTextField('SlotsRemaining 27').getText()!;
  }

  const saveSpells = (form: PDFForm) => {
    for(const cantrip of spellMap.value.get('Cantrips')!){
      form.getTextField(cantrip.name).setText(cantrip.value);
    }
    for(const spell of spellMap.value.get('Level 1')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    for(const spell of spellMap.value.get('Level 2')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    for(const spell of spellMap.value.get('Level 3')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    for(const spell of spellMap.value.get('Level 4')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    for(const spell of spellMap.value.get('Level 5')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    for(const spell of spellMap.value.get('Level 6')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    for(const spell of spellMap.value.get('Level 7')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    for(const spell of spellMap.value.get('Level 8')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    for(const spell of spellMap.value.get('Level 9')!){
      form.getTextField(spell.name).setText(spell.value);
    }
    form.getTextField('Spellcasting Class 2').setText(spellCastingClass.value);
    form.getTextField('SpellcastingAbility 2').setText(spellCastingAbility.value);
    form.getTextField('SpellSaveDC  2').setText(spellCastingDC.value);
    form.getTextField('SpellAtkBonus 2').setText(spellCastingAttack.value);

    form.getTextField('SlotsTotal 19').setText(level1Total.value)!;
    form.getTextField('SlotsRemaining 19').setText(level1Expended.value)!;
    form.getTextField('SlotsTotal 20').setText(level2Total.value)!;
    form.getTextField('SlotsRemaining 20').setText(level2Expended.value)!;
    form.getTextField('SlotsTotal 21').setText(level3Total.value)!;
    form.getTextField('SlotsRemaining 21').setText(level3Expended.value)!;
    form.getTextField('SlotsTotal 22').setText(level4Total.value)!;
    form.getTextField('SlotsRemaining 22').setText(level4Expended.value)!;
    form.getTextField('SlotsTotal 23').setText(level5Total.value)!;
    form.getTextField('SlotsRemaining 23').setText(level5Expended.value)!;
    form.getTextField('SlotsTotal 24').setText(level6Total.value)!;
    form.getTextField('SlotsRemaining 24').setText(level6Expended.value)!;
    form.getTextField('SlotsTotal 25').setText(level7Total.value)!;
    form.getTextField('SlotsRemaining 25').setText(level7Expended.value)!;
    form.getTextField('SlotsTotal 26').setText(level8Total.value)!;
    form.getTextField('SlotsRemaining 26').setText(level8Expended.value)!;
    form.getTextField('SlotsTotal 27').setText(level9Total.value)!;
    form.getTextField('SlotsRemaining 27').setText(level9Expended.value)!;

  }
  return {spellMap, importSpells, spellCastingClass, spellCastingAbility, spellCastingDC,
     spellCastingAttack, level1Total, level1Expended,level2Total,level2Expended,level3Total,
     level3Expended,level4Total,level4Expended,level5Total,level5Expended,level6Total,level6Expended,
     level7Total,level7Expended,level8Total,level8Expended,level9Total,level9Expended,saveSpells};

});


export interface Spell {
  value: string;
  name: string;
}
