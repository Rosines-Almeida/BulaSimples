listMedicaments = [
    {
        name: 'aas',
        classe:'Anti-inflamatório, analgésico e antitérmico.',
            posologia:'Deve ser ingerido de preferência após as refeições ou com um pouco de leite. Evite tomar este medicamento em jejun',
       
             interacao: [
            {
                nome: 'captopril',
                  descricao: 'O ácido acetilsalicílico pode diminuir a ação anti-hipertensiva do captopril.',
    },
             {
                nome: 'insulina',
                 descricao: 'O AAS pode aumentar a ação hipoglicemiante da insulina'
    }
    ],
            interAlimentos: 'Não foram observadas interações na administração concomitante com alimentos.'    

            
     },
     {
        name: 'captopril',
            classe:'Anti-hipertensivos',
            posologia:'Tomar captopril 1 hora antes das refeições por via oral.',
            
             interacao: [
            {
                nome: 'aas',
                  descricao: 'O ácido acetilsalicílico pode diminuir a ação anti-hipertensiva do captopril.',
    },
              ],
              interAlimentos: 'Alimentos diminuem absorção em 30-40%, evite o uso concomitante com alimentos.' 
     }, //fim captopril 
    {
        name: 'omeprazol',
        classe:'Antiúlcera',
            posologia:'Tomar 01 cápsula, em jejum, 30 minutos antes da comida (de preferência, café da manhã), com um copo grande cheio de água.',
          
         interacao: [
            {
                nome: 'fenobarbital',
                 descricao: 'O omeprazol usado com fenobarbital (anticonvulsivante) pode potencializar a ação do barbitúrico'
    },
             {
                nome: "varfarina",
                 descricao: 'O omeprazol  pode aumentar a ação da varfarina  e diminuir a ação do clopidogrel (antitrombóticos).Se necessário o uso concomitante, devem ser considerados os efeitos tóxicos)'
        },
    
     ],
     interAlimentos: 'Não foram observadas interações na administração concomitante de omeprazol com alimentos.' 
     }, //fim omeprazol
     {
        name: 'fenobarbital',
        classe:'Anticonvulsivante',
            posologia:'2 a 3mg/kg/dia em dose única ou fracionada.',
           
         interacao: [
            {
                nome: 'omeprazol',
                 descricao: 'O omeprazol usado com fenobarbital (anticonvulsivante) pode potencializar a ação do barbitúrico'
    },
    ],
    interAlimentos: 'Deve-se evitar a ingestão de qualquer quantidade de álcool.' 
     },//fim do fenobarbital
     {
        name: 'varfarina',
        classe:'Anticoagulantes',
        posologia:'Pode ser administrada com ou sem alimentos. Tomar sempre no mesmo horário do dia.',
         interacao: [
            {
                nome: 'omeprazol',
                 descricao: 'O omeprazol  pode aumentar a ação da varfarina  e diminuir a ação do clopidogrel (antitrombóticos).'
    },
    ],
    interAlimentos: 'Alimentos contendo vitamina K alteram a eficácia deste medicamento.' 

     },
    {
        name: 'a',
        classe:' a ',
        posologia:'a ',
         interacao: [
            {
                nome: 'b',
                 descricao: 'Pode aumentar a probabilidade de reações alérgicas de pele.'
        }],
        interAlimentos: 'Alimentos  a.' 
         },  

    {
        name: 'heparina',
        classe:'Anticoagulantes ',
        posologia:' ',
         interacao: [
            {
                nome: 'cetoprofeno',
                 descricao: 'O risco de reações adversas e hemorragias pode ser aumentado. Se a co-administração for necessária, realizar cuidadosa monitorização clínica e laboratorial.'
            }],
            interAlimentos: ' .' 
             },
             {
                name: 'cetoprofeno',
                classe:'Anti-inflamatório, analgésico e antitérmico.',
            posologia:'Os comprimidos devem ser tomados sem mastigar, com quantidade suficiente de líquido (aproximadamente ½ a 1 copo), de preferência durante ou após as refeições. ',
            risco:' .',
                 interacao: [
                    {
                        nome: 'heparina',
                         descricao: 'O risco de reações adversas e hemorragias pode ser aumentado. Se a co-administração for necessária, realizar cuidadosa monitorização clínica e laboratorial.'
                    }],
                    interAlimentos: 'Não foram observadas interações na administração concomitante de omeprazol com alimentos.' 
                     }
         ] //fim list
