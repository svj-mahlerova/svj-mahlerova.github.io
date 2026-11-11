window.SITE_DATA = {
  updated: "2026-11-11",
  projects: [
    {
      id: "strecha",
      title: "Oprava střechy",
      description: "",
      // firms: [{ id, firma, kontakt, cenaBezDph, cenaSDph, zaruka, termin, rozsah, soubor,
      //           historie: [{ datum: "2026-11-11", text: "..." }] }]
      firms: [
        {
          id: "bini",
          firma: "Bini",
          kontakt: "p. Olejníček, 773 742 870",
          cenaBezDph: 4150000,
          historie: [
            { datum: "2026-10-24", text: "Zavolat a říct mu o položkovou nabídku." }
          ]
        },
        {
          id: "global",
          firma: "GLOBAL",
          kontakt: "p. Bílek, 602 740 841",
          historie: [
            { datum: "2026-11-10", text: "Přijde změřit." },
            { datum: "2026-11-10", text: "Schůzka na místě:\n" +
              "• Doporučují udělat projekt – kvůli dotacím nutnost. Projektanta případně zajistí.\n" +
              "• Udělají položkový rozpočet, zdarma.\n" +
              "• Část bednění je prý dobrá – měnili by jen asi metr u hřebene střechy, kde je špatné, + další lokální místa.\n" +
              "• Měnila by se i část trámů.\n" +
              "• Byla u toho i p. Strejčková, ukazovala jim mezonet. Tam se uvidí po odkrytí střechy. Když už tam nebyla, truhlář říkal, že je to velký špatný." }
          ]
        },
        {
          id: "centrostav",
          firma: "Centrostav, a.s. (Jihlava)",
          kontakt: "Jan Frydrychovský, +420 773 501 983",
          historie: [
            { datum: "2026-11-11", text: "Ozvou se. Pošlou někoho, kdo vyřeší akutní problémy před zimou a zároveň zaměří střechu, aby mohli udělat nabídku." }
          ]
        },
        {
          id: "ip-polna",
          firma: "IP Polná",
          kontakt: "Lukáš Váka, 725 260 992",
          historie: [
            { datum: "2026-11-11", text: "Ozve se, pak domluvíme schůzku." }
          ]
        }
      ]
    },
    {
      id: "solar",
      title: "Solární panely",
      description: "",
      firms: []
    }
  ],
  // notes: [{ datum: "2026-11-11", text: "..." }]
  notes: []
};
