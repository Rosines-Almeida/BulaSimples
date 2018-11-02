listMedicaments = [
    {
        name: 'aas',
        classe:'Anti-inflamatório, analgésico e antitérmico.',
        posologia:'Deve ser ingerido de preferência após as refeições ou com um pouco de leite. Evite tomar este medicamento em jejum',
        interacao: [
            {
             interMedicamento: 'captopril',
             descricao: 'O ácido acetilsalicílico pode diminuir a ação anti-hipertensiva do captopril.'
             },
           ],
            interAlimentos: 'Não foram observadas interações na administração concomitante com alimentos.'     
     },
     {
        name: 'captopril',
        classe:'Anti-hipertensivo',
        posologia:'Tomar captopril 1 hora antes das refeições por via oral.',
        interacao: [
            {
               interMedicamento: 'aas',
               descricao: 'O ácido acetilsalicílico pode diminuir a ação anti-hipertensiva do captopril.'
             },
         ],
        interAlimentos: 'Alimentos diminuem absorção em 30-40%, evite o uso concomitante com alimentos.' 
    },  
    {
        name: 'omeprazol',
        classe:'Antiúlcera',
        posologia:'Tomar 01 cápsula, em jejum, 30 minutos antes da comida (de preferência, café da manhã), com um copo grande cheio de água.',
        interacao: [
            {
                interMedicamento: 'fenobarbital',
                 descricao: 'O omeprazol usado com fenobarbital (anticonvulsivante) pode potencializar a ação do barbitúrico.'
            },
             {
                interMedicamento: "varfarina",
                 descricao: 'O omeprazol  pode aumentar a ação da varfarina  e diminuir a ação do clopidogrel (antitrombóticos).Se necessário o uso concomitante, devem ser considerados os efeitos tóxicos)'
             },
        ],
        interAlimentos: 'Não foram observadas interações na administração concomitante de omeprazol com alimentos.' 
    },  
    {
        name: 'fenobarbital',
        classe:'Anticonvulsivante',
        posologia:'2 a 3mg/kg/dia em dose única ou fracionada.',
        interacao: [
            {
                interMedicamento: 'omeprazol',
                 descricao: 'O omeprazol usado com fenobarbital (anticonvulsivante) pode potencializar a ação do barbitúrico.'
             },
        ],
        interAlimentos: 'Deve-se evitar a ingestão de qualquer quantidade de álcool.' 
     }, 
     {
        name: 'varfarina',
        classe:'Anticoagulantes',
        posologia:'Pode ser administrada com ou sem alimentos. Tomar sempre no mesmo horário do dia.',
        interacao: [
            {
                interMedicamento: 'omeprazol',
                 descricao: 'O omeprazol  pode aumentar a ação da varfarina  e diminuir a ação do clopidogrel (antitrombóticos).'
             },
        ],
        interAlimentos: 'Alimentos contendo vitamina K alteram a eficácia deste medicamento.' 
     },
     {
        name: 'cetoprofeno',
        classe:'Anti-inflamatório, analgésico e antitérmico.',
        posologia:'Os comprimidos devem ser tomados sem mastigar, com quantidade suficiente de líquido (aproximadamente ½ a 1 copo), de preferência durante ou após as refeições.', 
        interacao: [
            {
                interMedicamento: 'heparina',
                descricao: 'O risco de reações adversas e hemorragias pode ser aumentado. Se a co-administração for necessária, realizar cuidadosa monitorização clínica e laboratorial.'
                    }
        ],
        interAlimentos: 'Não foram observadas interações na administração concomitante de omeprazol com alimentos.' 
                     }
]  
