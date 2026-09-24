// Central datakilde for alle temaer og deres underafsnit.
// Bruges af BÅDE index.html (verdenskortet + temaliste) og alle kapitel-sider (venstremenuen).
// Ret, tilføj eller omdøb temaer og underafsnit HER ét sted - så opdateres hele sitet automatisk.
const chapters = [
    {
        id: 1,
        title: "Tema 1: Den globale økonomi",
        x: 3,
        y: 30,
        sections: [
            { anchor: "1-1", label: "1.1 Den globale økonomi svinger" },
            { anchor: "1-2", label: "1.2 Verdensøkonomien frem til finanskrisen 2007" },
            { anchor: "1-3", label: "1.3 Den globale finanskrise 2007-2009" },
            { anchor: "1-4", label: "1.4 Eurokrisen 2010-16" },
            { anchor: "1-5", label: "1.5 Coronakrisen 2020" },
            { anchor: "1-6", label: "1.6 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 2,
        title: "Tema 2: Danmarks økonomi",
        x: 6,
        y: 60,
        sections: [
            { anchor: "2-1", label: "2.1 De samfundsøkonomiske mål" },
            { anchor: "2-2", label: "2.2 Danmarks økonomi – før og nu" },
            { anchor: "2-3", label: "2.3 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 3,
        title: "Tema 3: Produktion og indkomst",
        x: 9,
        y: 20,
        sections: [
            { anchor: "3-1", label: "3.1 Det økonomiske kredsløb" },
            { anchor: "3-2", label: "3.2 Måling af produktion og indkomst" },
            { anchor: "3-3", label: "3.3 Årets priser og faste priser" },
            { anchor: "3-4", label: "3.4 Forsyningsbalance" },
            { anchor: "3-5", label: "3.5 Multiplikatorvirkningen" },
            { anchor: "3-6", label: "3.6 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 4,
        title: "Tema 4: Prisdannelsen",
        x: 12,
        y: 70,
        sections: [
            { anchor: "4-1", label: "4.1 Efterspørgsel" },
            { anchor: "4-2", label: "4.2 Udbudskurven" },
            { anchor: "4-3", label: "4.3 Prisdannelsen – en model" },
            { anchor: "4-4", label: "4.4 Prisdannelsen – ideal og virkelighed" },
            { anchor: "4-5", label: "4.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 5,
        title: "Tema 5: Husholdninger og forbrug",
        x: 15,
        y: 40,
        sections: [
            { anchor: "5-1", label: "5.1 Indkomster og forbrugerpriser" },
            { anchor: "5-2", label: "5.2 Forbrug og opsparing" },
            { anchor: "5-3", label: "5.3 Indkomstfordelingen" },
            { anchor: "5-4", label: "5.4 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 6,
        title: "Tema 6: Arbejdsmarkedet",
        x: 18,
        y: 80,
        sections: [
            { anchor: "6-1", label: "6.1 Arbejdskraften i Danmark" },
            { anchor: "6-2", label: "6.2 Arbejdsløshed" },
            { anchor: "6-3", label: "6.3 Årsager til arbejdsløshed" },
            { anchor: "6-4", label: "6.4 Arbejdsmarkedet i internationalt perspektiv" },
            { anchor: "6-5", label: "6.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 7,
        title: "Tema 7: Offentlig sektor og velfærd",
        x: 21,
        y: 25,
        sections: [
            { anchor: "7-1", label: "7.1 Den offentlige sektors opgaver og størrelse" },
            { anchor: "7-2", label: "7.2 Den offentlige sektors udgifter" },
            { anchor: "7-3", label: "7.3 Den offentlige sektors indtægter" },
            { anchor: "7-4", label: "7.4 Den velfærdspolitiske debat i Danmark" },
            { anchor: "7-5", label: "7.5 Statsfinanserne" },
            { anchor: "7-6", label: "7.6 Den offentlige sektor og EU" },
            { anchor: "7-7", label: "7.7 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 8,
        title: "Tema 8: Finanspolitik",
        x: 24,
        y: 55,
        sections: [
            { anchor: "8-1", label: "8.1 Hvad er finanspolitik?" },
            { anchor: "8-2", label: "8.2 Finanspolitiske instrumenter og multiplikatorer" },
            { anchor: "8-3", label: "8.3 Keynes og finanspolitikken" },
            { anchor: "8-4", label: "8.4 Finanspolitikken i Danmark" },
            { anchor: "8-5", label: "8.5 Finanspolitikken og EU" },
            { anchor: "8-6", label: "8.6 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 9,
        title: "Tema 9: Betalingsbalance og kapitalbalance",
        x: 27,
        y: 35,
        sections: [
            { anchor: "9-1", label: "9.1 Betalingsbalanceregnskabet" },
            { anchor: "9-2", label: "9.2 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 10,
        title: "Tema 10: Valuta",
        x: 30,
        y: 65,
        sections: [
            { anchor: "10-1", label: "10.1 Valutakursen" },
            { anchor: "10-2", label: "10.2 Hvad bestemmer valutakurserne?" },
            { anchor: "10-3", label: "10.3 Valutakurssystemer" },
            { anchor: "10-4", label: "10.4 Valutasamarbejdet i EU" },
            { anchor: "10-5", label: "10.5 Danmark og euroen" },
            { anchor: "10-6", label: "10.6 ERM2-samarbejdet" },
            { anchor: "10-7", label: "10.7 Kronekursen" },
            { anchor: "10-8", label: "10.8 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 11,
        title: "Tema 11: Den finansielle sektor",
        x: 33,
        y: 20,
        sections: [
            { anchor: "11-1", label: "11.1 Nationalbanken og pengene" },
            { anchor: "11-2", label: "11.2 Banksystemet" },
            { anchor: "11-3", label: "11.3 Obligationer" },
            { anchor: "11-4", label: "11.4 Renten" },
            { anchor: "11-5", label: "11.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 12,
        title: "Tema 12: Pengepolitik",
        x: 36,
        y: 75,
        sections: [
            { anchor: "12-1", label: "12.1 Hvad er pengepolitik?" },
            { anchor: "12-2", label: "12.2 Pengepolitiske instrumenter" },
            { anchor: "12-3", label: "12.3 Pengepolitikken i Danmark" },
            { anchor: "12-4", label: "12.4 Pengepolitik og EU (ECB)" },
            { anchor: "12-5", label: "12.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 13,
        title: "Tema 13: Konkurrenceevneforbedrende politik",
        x: 39,
        y: 45,
        sections: [
            { anchor: "13-1", label: "13.1 Valutapolitik" },
            { anchor: "13-2", label: "13.2 Indkomstpolitik (lønpolitik)" },
            { anchor: "13-3", label: "13.3 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 14,
        title: "Tema 14: Strukturpolitik",
        x: 42,
        y: 30,
        sections: [
            { anchor: "14-1", label: "14.1 Arbejdsmarkedspolitik" },
            { anchor: "14-2", label: "14.2 Erhvervspolitik" },
            { anchor: "14-3", label: "14.3 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 15,
        title: "Tema 15: Miljøpolitik",
        x: 45,
        y: 60,
        sections: [
            { anchor: "15-1", label: "15.1 Miljøpolitik – i bredt perspektiv" },
            { anchor: "15-2", label: "15.2 Global opvarmning – årsager og konsekvenser" },
            { anchor: "15-3", label: "15.3 Klimapolitik" },
            { anchor: "15-4", label: "15.4 Internationalt klimapolitisk samarbejde" },
            { anchor: "15-5", label: "15.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 16,
        title: "Tema 16: Inflation",
        x: 48,
        y: 25,
        sections: [
            { anchor: "16-1", label: "16.1 Hvad er inflation?" },
            { anchor: "16-2", label: "16.2 Årsager til inflation" },
            { anchor: "16-3", label: "16.3 Bekæmpelse af inflation" },
            { anchor: "16-4", label: "16.4 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 17,
        title: "Tema 17: Makroøkonomisk landeanalyse",
        x: 51,
        y: 80,
        sections: [
            { anchor: "17-1", label: "17.1 Makroøkonomiske nøgletal" },
            { anchor: "17-2", label: "17.2 Tabeller og figurer – et par gode råd" },
            { anchor: "17-3", label: "17.3 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 18,
        title: "Tema 18: Danmarks handel",
        x: 54,
        y: 40,
        sections: [
            { anchor: "18-1", label: "18.1 Danmarks handel fordelt på lande" },
            { anchor: "18-2", label: "18.2 Hvilke varer og tjenester handler Danmark med?" },
            { anchor: "18-3", label: "18.3 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 19,
        title: "Tema 19: Konkurrenceevne",
        x: 57,
        y: 70,
        sections: [
            { anchor: "19-1", label: "19.1 Priskonkurrenceevnen" },
            { anchor: "19-2", label: "19.2 Den strukturelle konkurrenceevne" },
            { anchor: "19-3", label: "19.3 Porters diamant" },
            { anchor: "19-4", label: "19.4 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 20,
        title: "Tema 20: Verdenshandelens udvikling og fordeling",
        x: 60,
        y: 20,
        sections: [
            { anchor: "20-1", label: "20.1 Verdenshandelens udvikling" },
            { anchor: "20-2", label: "20.2 Verdenshandelen fordelt på regioner og lande" },
            { anchor: "20-3", label: "20.3 Verdenshandelen fordelt på produkter" },
            { anchor: "20-4", label: "20.4 Eksport, ulande og teknologisk niveau" },
            { anchor: "20-5", label: "20.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 21,
        title: "Tema 21: Globaliseringen af verdensøkonomien",
        x: 63,
        y: 55,
        sections: [
            { anchor: "21-1", label: "21.1 Den globale handel får større betydning" },
            { anchor: "21-2", label: "21.2 Globaliseringen af finanssektoren" },
            { anchor: "21-3", label: "21.3 Globale forsyningskæder - globalisering af vareproduktionen" },
            { anchor: "21-4", label: "21.4 Transnationale selskaber" },
            { anchor: "21-5", label: "21.5 Globaliseringens årsager" },
            { anchor: "21-6", label: "21.6 Globaliseringens forside" },
            { anchor: "21-7", label: "21.7 Globaliseringens bagside" },
            { anchor: "21-8", label: "21.8 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 22,
        title: "Tema 22: Teorier om handel",
        x: 66,
        y: 35,
        sections: [
            { anchor: "22-1", label: "22.1 De klassiske, liberale handelsteorier" },
            { anchor: "22-2", label: "22.2 Linders efterspørgselsteori" },
            { anchor: "22-3", label: "22.3 Krugman og New Trade Theory" },
            { anchor: "22-4", label: "22.4 Oversigt over handelsteorier" },
            { anchor: "22-5", label: "22.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 23,
        title: "Tema 23: Frihandel kontra protektionisme",
        x: 69,
        y: 85,
        sections: [
            { anchor: "23-1", label: "23.1 Frihandel og økonomisk integration" },
            { anchor: "23-2", label: "23.2 Handelshindringer og protektionisme" },
            { anchor: "23-3", label: "23.3 Årsager til protektionisme" },
            { anchor: "23-4", label: "23.4 Frihandelens bagside" },
            { anchor: "23-5", label: "23.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 24,
        title: "Tema 24: Internationale organisationer",
        x: 72,
        y: 50,
        sections: [
            { anchor: "24-1", label: "24.1 WTO – Verdenshandelsorganisationen" },
            { anchor: "24-2", label: "24.2 Frihandelsområder" },
            { anchor: "24-3", label: "24.3 IMF og Verdensbanken" },
            { anchor: "24-4", label: "24.4 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 25,
        title: "Tema 25: Den Europæiske Union",
        x: 75,
        y: 25,
        sections: [
            { anchor: "25-1", label: "25.1 Dannelsen af EF og EU" },
            { anchor: "25-2", label: "25.2 Institutionerne" },
            { anchor: "25-3", label: "25.3 Det Indre marked" },
            { anchor: "25-4", label: "25.4 Landbrugspolitikken" },
            { anchor: "25-5", label: "25.5 Andre områder i EU's økonomiske samarbejde" },
            { anchor: "25-6", label: "25.6 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 26,
        title: "Tema 26: Udviklingsøkonomisk landeanalyse",
        x: 78,
        y: 65,
        sections: [
            { anchor: "26-1", label: "26.1 Økonomiske forhold" },
            { anchor: "26-2", label: "26.2 Erhvervsstruktur" },
            { anchor: "26-3", label: "26.3 Befolkningsforhold" },
            { anchor: "26-4", label: "26.4 Levestandard" },
            { anchor: "26-5", label: "26.5 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 27,
        title: "Tema 27: Økonomisk metode",
        x: 81,
        y: 40,
        sections: [
            { anchor: "27-1", label: "27.1 Indsamling af økonomisk information" },
            { anchor: "27-2", label: "27.2 Databearbejdning" },
            { anchor: "27-3", label: "27.3 Analyse af data – inddragelse af økonomisk teori" },
            { anchor: "27-4", label: "27.4 Forklaringsmodeller" },
            { anchor: "27-5", label: "27.5 Komparativ metode" },
            { anchor: "27-6", label: "27.6 Induktiv og deduktiv metode" },
            { anchor: "27-7", label: "27.7 Et kritisk blik på pensum" }
        ]
    },
    {
        id: 28,
        title: "Tema 28: Grønlands økonomi",
        x: 84,
        y: 80,
        sections: []
    },
    {
        id: 29,
        title: "Tema 29: Public Choice",
        x: 87,
        y: 55,
        sections: []
    },
    {
        id: 30,
        title: "Tema 30: Endogene institutioner",
        x: 90,
        y: 30,
        sections: []
    },
    {
        id: 31,
        title: "Tema 31: Ad-hoc emne 4",
        x: 93,
        y: 15,
        isAdhoc: true,
        sections: []
    },
    {
        id: 32,
        title: "Tema 32: Ad-hoc emne 5",
        x: 96,
        y: 80,
        isAdhoc: true,
        sections: []
    }
];
