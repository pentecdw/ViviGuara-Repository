const produtos = [
  {
    codigo: "169024",
    imagem: "images/169024.jpg",
    descricao: "LIXA PE PLAST CONCAVA GD VIVI GUARA 605R",
    ean: "618231826605"
  },
  {
    codigo: "169030",
    imagem: "images/169030.jpg",
    descricao: "LIXA PE BASE CONC P/REFIS VIVI GUARA 612",
    ean: "618231826612"
  },
  {
    codigo: "169047",
    imagem: "images/169047.jpg",
    descricao: "LIXA PE MAD PQ PEDRA POME VIVI GUARA 629",
    ean: "618231826629"
  },
  {
    codigo: "169053",
    imagem: "images/169053.jpg",
    descricao: "LIXA PE EVA PRETO/AMA VIVI GUARA R636",
    ean: "618231826636"
  },
  {
    codigo: "169060",
    imagem: "images/169060.jpg",
    descricao: "LIXA PE EVA ANATOMICA VIVI GUARA R643",
    ean: "618231826643"
  },
  {
    codigo: "169076",
    imagem: "images/169076.jpg",
    descricao: "LIXA PE EVA SOFT PROF VIVI GUARA R650",
    ean: "618231826650"
  },
  {
    codigo: "169082",
    imagem: "images/169082.jpg",
    descricao: "LIXA PE MAD GD PEDRA POM VIVI GUARA R667",
    ean: "618231826667"
  },
  {
    codigo: "169099",
    imagem: "images/169099.jpg",
    descricao: "LIXA PE MAD CONCAVA RETA VIVI GUARA R674",
    ean: "618231826674"
  },
  {
    codigo: "169106",
    imagem: "images/169106.jpg",
    descricao: "LIXA PE MAD LUXO MD VIVI GUARA R681",
    ean: "618231826681"
  },
  {
    codigo: "169112",
    imagem: "images/169112.jpg",
    descricao: "LIXA PE MAD GD PROF VIVI GUARA R698",
    ean: "618231826698"
  },
  {
    codigo: "169129",
    imagem: "images/169129.jpg",
    descricao: "LIXA PE MAD RALIXA VIVI GUARA R704",
    ean: "618231826704"
  },
  {
    codigo: "169135",
    imagem: "images/169135.jpg",
    descricao: "LIXA PE REFIL C012 G100 PR VIVI GUARA711",
    ean: "618231826711"
  },
  {
    codigo: "169141",
    imagem: "images/169141.jpg",
    descricao: "LIXA PE REFIL C012 G80 BRA VIVI GUARA728",
    ean: "618231826728"
  },
  {
    codigo: "169158",
    imagem: "images/169158.jpg",
    descricao: "LIXA UNHA 16CM AMA LG C072  VIVI GUARA35",
    ean: "618231826735"
  },
  {
    codigo: "169164",
    imagem: "images/169164.jpg",
    descricao: "LIXA UNHA 16CM AMA C06 VIVI GUARA 742",
    ean: "618231826742"
  },
  {
    codigo: "169170",
    imagem: "images/169170.jpg",
    descricao: "LIXA UNHA 08CM AMA C144 VIVI GUARA 59",
    ean: "618231826759"
  },
  {
    codigo: "169187",
    imagem: "images/169187.jpg",
    descricao: "LIXA UNHA 08CM AMA C20 VIVI GUARA 766",
    ean: "618231826766"
  },
  {
    codigo: "169193",
    imagem: "images/169193.jpg",
    descricao: "LIXA UNHA 16CM AMA C012 VIVI GUARA 773",
    ean: "618231826773"
  },
  {
    codigo: "169200",
    imagem: "images/169200.jpg",
    descricao: "LIXA UNHA 16CM AMA C144 VIVI GUARA 780",
    ean: "618231826780"
  },
  {
    codigo: "169217",
    imagem: "images/169217.jpg",
    descricao: "LIXA UNHA 16CM C003 BANANA VIVI GUARA797",
    ean: "618231826797"
  },
  {
    codigo: "169223",
    imagem: "images/169223.jpg",
    descricao: "LIXA UNHA 16CM PARDA C144 VIVI GUARA 803",
    ean: "618231826803"
  },
  {
    codigo: "169230",
    imagem: "images/169230.jpg",
    descricao: "LIXA UNHA 08CM PARDA C144 VIVI GUARA R10",
    ean: "618231826810"
  },
  {
    codigo: "169246",
    imagem: "images/169246.jpg",
    descricao: "LIXA UNHA 16CM PARDA C006 VIVI GUARA 827",
    ean: "618231826827"
  },
  {
    codigo: "169252",
    imagem: "images/169252.jpg",
    descricao: "LIXA UNHA 08CM PARDA C020 VIVI GUARA R34",
    ean: "618231826834"
  },
  {
    codigo: "169269",
    imagem: "images/169269.jpg",
    descricao: "LIXA UNHA 08CM PRETA C144 VIVI GUARA 41",
    ean: "618231826841"
  },
  {
    codigo: "169275",
    imagem: "images/169275.jpg",
    descricao: "LIXA UNHA 08CM PRETA C020 VIVI GUARA 58",
    ean: "618231826858"
  },
  {
    codigo: "169281",
    imagem: "images/169281.jpg",
    descricao: "LIXA UNHA 16CM PRETA C012 VIVI GUARA 865",
    ean: "618231826865"
  },
  {
    codigo: "169298",
    imagem: "images/169298.jpg",
    descricao: "PEDRA POMES VIVI GUARA PE R872",
    ean: "618231826872"
  },
  {
    codigo: "169615",
    imagem: "images/169615.jpg",
    descricao: "TOUCA CETIM SIMP C/VIES VIVI GUARA 889TB",
    ean: "618231826889"
  },
  {
    codigo: "169621",
    imagem: "images/169621.jpg",
    descricao: "TOUCA CETIM DUPLA S/VIES VIVI GUARA 896T",
    ean: "618231826896"
  },
  {
    codigo: "169638",
    imagem: "images/169638.jpg",
    descricao: "TOUCA CETIM UMECTAÇÃO VIVI GUARA R902 TB",
    ean: "618231826902"
  },
  {
    codigo: "169644",
    imagem: "images/169644.jpg",
    descricao: "TOUCA CETIM DIFUSORA VIVI GUARA R919 TB",
    ean: "618231826919"
  },
  {
    codigo: "169650",
    imagem: "images/169650.jpg",
    descricao: "FRONHA CETIM VIVI GUARA R926 TB",
    ean: "618231826926"
  },
  {
    codigo: "169667",
    imagem: "images/169667.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA GRANDE C3 940TB",
    ean: "618231826940"
  },
  {
    codigo: "169673",
    imagem: "images/169673.jpg",
    descricao: "FAIXA CETIM P MAQUIAGEM VIVI GUARA 933TB",
    ean: "618231826933"
  },
  {
    codigo: "169680",
    imagem: "images/169680.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA PEQUENA C4 957T",
    ean: "618231826957"
  },
  {
    codigo: "173661",
    imagem: "images/173661.jpg",
    descricao: "TOUCA CETIM BBB EX GD VIVI GUARA R971 TB",
    ean: "618231826971"
  },
  {
    codigo: "173690",
    imagem: "images/173690.jpg",
    descricao: "TIARA COLORS PC C6 VIVI GUARA R988",
    ean: "618231826988"
  },
  {
    codigo: "173708",
    imagem: "images/173708.jpg",
    descricao: "PIRANHA TRIDENTE C12 VIVI GUARA  995",
    ean: "618231826995"
  },
  {
    codigo: "173714",
    imagem: "images/173714.jpg",
    descricao: "PIRANHA PROF CABELEIRE C6 VIVI GUARA 008",
    ean: "618231827008"
  },
  {
    codigo: "173720",
    imagem: "images/173720.jpg",
    descricao: "PRESILHA C12 G BICO PATO VIVI GUARA 015",
    ean: "618231827015"
  },
  {
    codigo: "174067",
    imagem: "images/174067.jpg",
    descricao: "TALQUEIRA ESPANADOR VIVI GUARA R022 RV",
    ean: "618231827022"
  },
  {
    codigo: "174073",
    imagem: "images/174073.jpg",
    descricao: "PINCEL BARBA NYLON VIVI GUARA REF 039 RP",
    ean: "618231827039"
  },
  {
    codigo: "174080",
    imagem: "images/174080.jpg",
    descricao: "PINCEL BARBA NATURAL VIVI GUARA REF 046",
    ean: "618231827046"
  },
  {
    codigo: "174096",
    imagem: "images/174096.jpg",
    descricao: "PINCEL TINT GR VIVI GUARA REF 053 RP",
    ean: "618231827053"
  },
  {
    codigo: "174103",
    imagem: "images/174103.jpg",
    descricao: "PINCEL TINT GD VIVI GUARA RAIA RF 060 RP",
    ean: "618231827060"
  },
  {
    codigo: "174110",
    imagem: "images/174110.jpg",
    descricao: "PINCEL TINT PQ VIVI GUARA REF 077 RP",
    ean: "618231827077"
  },
  {
    codigo: "174126",
    imagem: "images/174126.jpg",
    descricao: "ESPANADOR FIGARO BR VIVI GUARA R084",
    ean: "618231827084"
  },
  {
    codigo: "174184",
    imagem: "images/174184.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA PEQUENA R318 TB",
    ean: "618341348318"
  },
  {
    codigo: "174190",
    imagem: "images/174190.jpg",
    descricao: "TOUCA MECHA PVC C/FURO VIVI GUARA 325 TB",
    ean: "618341348325"
  },
  {
    codigo: "174420",
    imagem: "images/174420.jpg",
    descricao: "PENT CABO ACRILICO CAMAR VIVI GUARA R349",
    ean: "618341348349"
  },
  {
    codigo: "174436",
    imagem: "images/174436.jpg",
    descricao: "PENT ALTA TEMPERATURA  VIVI GUARA R356",
    ean: "618341348356"
  },
  {
    codigo: "174442",
    imagem: "images/174442.jpg",
    descricao: "PENT MONUMENTO VIVI GUARA REF 363",
    ean: "618341348363"
  },
  {
    codigo: "174459",
    imagem: "images/174459.jpg",
    descricao: "PENT BOLSO MASCULIN VIVI GUARA C1 R370LD",
    ean: "618341348370"
  },
  {
    codigo: "174465",
    imagem: "images/174465.jpg",
    descricao: "PENT CORTE CAMARO VIVI GUARA REF387",
    ean: "618341348387"
  },
  {
    codigo: "174471",
    imagem: "images/174471.jpg",
    descricao: "PENT PRAIA C/CABO C/FURO VIVI GUARA R394",
    ean: "618341348394"
  },
  {
    codigo: "174488",
    imagem: "images/174488.jpg",
    descricao: "PENT PRAIA S/CABO C/FURO VIVI GUARA R400",
    ean: "618341348400"
  },
  {
    codigo: "174494",
    imagem: "images/174494.jpg",
    descricao: "BACIA PEDICURE MD VIVI GUARA REF 417",
    ean: "618341348417"
  },
  {
    codigo: "174501",
    imagem: "images/174501.jpg",
    descricao: "BACIA TINT C/PORTA PINC PRETA VIVI GUARA",
    ean: "618341348424"
  },
  {
    codigo: "174524",
    imagem: "images/174524.jpg",
    descricao: "CUBETA VIVI GUARA PVC FLEX MEDIA R431",
    ean: "618341348431"
  },
  {
    codigo: "174530",
    imagem: "images/174530.jpg",
    descricao: "CUBETA VIVI GUARA PVC FLEX PEQ R448",
    ean: "618341348448"
  },
  {
    codigo: "174547",
    imagem: "images/174547.jpg",
    descricao: "CANECA GRADUAD 150ML ACRI VIVI GUARA 455",
    ean: "618341348455"
  },
  {
    codigo: "174553",
    imagem: "images/174553.jpg",
    descricao: "CANECA GRADUA 150ML FOSC VIVI GUARA 8462",
    ean: "618341348462"
  },
  {
    codigo: "174560",
    imagem: "images/174560.jpg",
    descricao: "TIARA CETIM COLORS C3 VIVI GUARA R479",
    ean: "618341348479"
  },
  {
    codigo: "174576",
    imagem: "images/174576.jpg",
    descricao: "XUXINHA MEIA VIVI GUARA PRETA C6 486",
    ean: "618341348486"
  },
  {
    codigo: "174687",
    imagem: "images/174687.jpg",
    descricao: "TOUCA CETIM DUPLA C/VIES VIVI GUARA 493T",
    ean: "618341348493"
  },
  {
    codigo: "175778",
    imagem: "images/175778.jpg",
    descricao: "LIXA UNHA 16CM EST LG C006 VIVI GUARA 78",
    ean: "618341348578"
  },
  {
    codigo: "175784",
    imagem: "images/175784.jpg",
    descricao: "LIXA UNHA 16CM EST LG C003 VIVI GUARA530",
    ean: "618341348530"
  },
  {
    codigo: "175790",
    imagem: "images/175790.jpg",
    descricao: "LIXA UNHA 16CM COL LG C003 VIVI GUARA523",
    ean: "618341348523"
  },
  {
    codigo: "175808",
    imagem: "images/175808.jpg",
    descricao: "LIXA UNHA 16CM COL C006 VIVI GUARA R547",
    ean: "618341348547"
  },
  {
    codigo: "175820",
    imagem: "images/175820.jpg",
    descricao: "LIXA UNHA 08CM EST C006 VIVI GUARA 554",
    ean: "618341348554"
  },
  {
    codigo: "175837",
    imagem: "images/175837.jpg",
    descricao: "LIXA UNHA C3+2 PALIT PQ VIVI GUARA516",
    ean: "618341348516"
  },
  {
    codigo: "175843",
    imagem: "images/175843.jpg",
    descricao: "LIXA UNHA C3+2 PALIT GD VIVI GUARA 509",
    ean: "618341348509"
  },
  {
    codigo: "175850",
    imagem: "images/175850.jpg",
    descricao: "PALITO PT DUPLA PINUS C006 VIVI GUARA",
    ean: "618341348608"
  },
  {
    codigo: "175866",
    imagem: "images/175866.jpg",
    descricao: "PALITO PT+CHANF PINUS C006 VIVI GUARA",
    ean: "618341348615"
  },
  {
    codigo: "175872",
    imagem: "images/175872.jpg",
    descricao: "PALITO PT ACO JATOB C050 VIVI GUARA",
    ean: "618341348585"
  },
  {
    codigo: "175889",
    imagem: "images/175889.jpg",
    descricao: "PALITO PT ACO TUCUM C006 VIVI GUARA",
    ean: "618341348622"
  },
  {
    codigo: "175895",
    imagem: "images/175895.jpg",
    descricao: "PALITO PT+CHANF PARAJ C050 VIVI GUARA",
    ean: "618341348592"
  },
  {
    codigo: "175902",
    imagem: "images/175902.jpg",
    descricao: "PALITO PT+CHANF TUCUM C050 VIVI GUARA",
    ean: "618341348639"
  },
  {
    codigo: "176121",
    imagem: "images/176121.jpg",
    descricao: "PENT PENTÃO DESEMBAR GLIT VIVI GUARA 235",
    ean: "618341430235"
  },
  {
    codigo: "176138",
    imagem: "images/176138.jpg",
    descricao: "PENT CABO FINO CAMAR GLITE VIVI GUARA 42",
    ean: "618341430242"
  },
  {
    codigo: "176144",
    imagem: "images/176144.jpg",
    descricao: "PENT MONUMENTO GLITTER VIVI GUARA 259 RP",
    ean: "618341430259"
  },
  {
    codigo: "176150",
    imagem: "images/176150.jpg",
    descricao: "PINCEL TINT GR VIVI GUARA GLITTER 266 RP",
    ean: "618341430266"
  },
  {
    codigo: "176196",
    imagem: "images/176196.jpg",
    descricao: "PINCEL TINT PQ VIVI GUARA GLITTER R273",
    ean: "618341430273"
  },
  {
    codigo: "176343",
    imagem: "images/176343.jpg",
    descricao: "INOX AFASTA/PALITO VIVI GUARA RF646",
    ean: "618341348646"
  },
  {
    codigo: "176350",
    imagem: "images/176350.jpg",
    descricao: "INOX AFASTADOR CUT VIVI GUARA RF653",
    ean: "618341348653"
  },
  {
    codigo: "176366",
    imagem: "images/176366.jpg",
    descricao: "INOX AGULHA REFLEXO VIVI GUARA RF660",
    ean: "618341348660"
  },
  {
    codigo: "176372",
    imagem: "images/176372.jpg",
    descricao: "INOX BASTÃO VIVI GUARA REF 677*",
    ean: "618341348677"
  },
  {
    codigo: "176389",
    imagem: "images/176389.jpg",
    descricao: "INOX BOLEADOR VIVI GUARA BL REF 783",
    ean: "618341348783"
  },
  {
    codigo: "176395",
    imagem: "images/176395.jpg",
    descricao: "INOX CURETA VIVI GUARA BL REF 790*",
    ean: "618341348790"
  },
  {
    codigo: "176402",
    imagem: "images/176402.jpg",
    descricao: "INOX DESENCRAVADOR DUPLO VIVI GUARA R806",
    ean: "618341348806"
  },
  {
    codigo: "176419",
    imagem: "images/176419.jpg",
    descricao: "INOX DESENCRAVADOR VIVI GUARA REF 082",
    ean: "618341430082"
  },
  {
    codigo: "176425",
    imagem: "images/176425.jpg",
    descricao: "INOX ESPALHADORA DE FIBRA VIVI GUARA 099",
    ean: "618341430099"
  },
  {
    codigo: "176431",
    imagem: "images/176431.jpg",
    descricao: "INOX ESPATULA C/ PONTA VIVI GUARA RF105",
    ean: "618341430105"
  },
  {
    codigo: "176448",
    imagem: "images/176448.jpg",
    descricao: "INOX ESPATULA DESENCR VIVI GUARA REF 112",
    ean: "618341430112"
  },
  {
    codigo: "176454",
    imagem: "images/176454.jpg",
    descricao: "INOX ESPATULA VIVI GUARA BL REF 129",
    ean: "618341430129"
  },
  {
    codigo: "176460",
    imagem: "images/176460.jpg",
    descricao: "INOX ESPATULA CURATIVO VIVI GUARA REF136",
    ean: "618341430136"
  },
  {
    codigo: "176477",
    imagem: "images/176477.jpg",
    descricao: "INOX ESPATULA VIVI GUARA DUPLA REF 143",
    ean: "618341430143"
  },
  {
    codigo: "176483",
    imagem: "images/176483.jpg",
    descricao: "INOX ESPATULA LONGA VIVI GUARA REF 150",
    ean: "618341430150"
  },
  {
    codigo: "176490",
    imagem: "images/176490.jpg",
    descricao: "INOX EXTRATOR CRAVOS DUPLO VIVI GUARA167",
    ean: "618341430167"
  },
  {
    codigo: "176507",
    imagem: "images/176507.jpg",
    descricao: "INOX EXTRATOR CRAVOS VIVI GUARA 174",
    ean: "618341430174"
  },
  {
    codigo: "176513",
    imagem: "images/176513.jpg",
    descricao: "INOX LECRON CUTICULA VIVI GUARA REF 181",
    ean: "618341430181"
  },
  {
    codigo: "176520",
    imagem: "images/176520.jpg",
    descricao: "INOX PALITO CHANFRADO VIVI GUARA REF 198",
    ean: "618341430198"
  },
  {
    codigo: "176536",
    imagem: "images/176536.jpg",
    descricao: "INOX PALITO PONTA DUPLA VIVI GUARA R204",
    ean: "618341430204"
  },
  {
    codigo: "176542",
    imagem: "images/176542.jpg",
    descricao: "INOX PALITO LONGO VIVI GUARA REF 211",
    ean: "618341430211"
  },
  {
    codigo: "176559",
    imagem: "images/176559.jpg",
    descricao: "INOX RASPADOR CUTICULA VIVI GUARA RF 228",
    ean: "618341430228"
  },
  {
    codigo: "176565",
    imagem: "images/176565.jpg",
    descricao: "INOX BISTURI CURETA VIVI GUARA RF 684",
    ean: "618341348684"
  },
  {
    codigo: "176571",
    imagem: "images/176571.jpg",
    descricao: "INOX BISTURI ESTILETE VIVI GUARA REF 691",
    ean: "618341348691"
  },
  {
    codigo: "176588",
    imagem: "images/176588.jpg",
    descricao: "INOX BISTURI FORMÃO VIVI GUARA REF 707",
    ean: "618341348707"
  },
  {
    codigo: "176594",
    imagem: "images/176594.jpg",
    descricao: "INOX BIST MICRO NUCLEAR VIVI GUARA RF714",
    ean: "618341348714"
  },
  {
    codigo: "176601",
    imagem: "images/176601.jpg",
    descricao: "INOX BIST MICRO NUCLEA LG VIVI GUARA 721",
    ean: "618341348721"
  },
  {
    codigo: "176618",
    imagem: "images/176618.jpg",
    descricao: "INOX BISTU CALO DORSAL VIVI GUARA PEQ738",
    ean: "618341348738"
  },
  {
    codigo: "176624",
    imagem: "images/176624.jpg",
    descricao: "INOX BIST CALO DORSAL VIVI GUARA GD 745",
    ean: "618341348745"
  },
  {
    codigo: "176630",
    imagem: "images/176630.jpg",
    descricao: "INOX BISTU CALO DORSAL VIVI GUARA MD752",
    ean: "618341348752"
  },
  {
    codigo: "176647",
    imagem: "images/176647.jpg",
    descricao: "INOX BISTURI CALOS PLANTA VIVI GUARA 769",
    ean: "618341348769"
  },
  {
    codigo: "176653",
    imagem: "images/176653.jpg",
    descricao: "INOX BISTURI PONTEIRO VIVI GUARA REF 776",
    ean: "618341348776"
  },
  {
    codigo: "176787",
    imagem: "images/176787.jpg",
    descricao: "XUXINHA MEIA VIVI GUARA COLOR C6",
    ean: "618341430280"
  },
  {
    codigo: "176869",
    imagem: "images/176869.jpg",
    descricao: "LIXA PE PLAST CONCAVA PQ VIVI GUARA 297R",
    ean: "618341430297"
  },
  {
    codigo: "176898",
    imagem: "images/176898.jpg",
    descricao: "LIXA PE EVA PEZINHO VIVI GUARA R327 RS",
    ean: "618341430327"
  },
  {
    codigo: "176905",
    imagem: "images/176905.jpg",
    descricao: "LIXA PE EVA GD QUADRADA VIVI GUARA 303RS",
    ean: "618341430303"
  },
  {
    codigo: "176911",
    imagem: "images/176911.jpg",
    descricao: "LIXA PE EVA PQ QUADRADA VIVI GUARA 310RS",
    ean: "618341430310"
  },
  {
    codigo: "176928",
    imagem: "images/176928.jpg",
    descricao: "ESPONJA BANHO NYLON GD VIVI GUARA 334 RS",
    ean: "618341430334"
  },
  {
    codigo: "176934",
    imagem: "images/176934.jpg",
    descricao: "ESPONJA BANHO NYLON MD VIVI GUARA 341 RS",
    ean: "618341430341"
  },
  {
    codigo: "176940",
    imagem: "images/176940.jpg",
    descricao: "ESPONJA BANHO NYLON PQ VIVI GUARA 358 RS",
    ean: "618341430358"
  },
  {
    codigo: "176957",
    imagem: "images/176957.jpg",
    descricao: "ESPONJA BANHO CURVA VIVI GUARA 365 RS",
    ean: "618341430365"
  },
  {
    codigo: "176963",
    imagem: "images/176963.jpg",
    descricao: "ESPONJA BANHO ANATOM VIVI GUARA 372 RS",
    ean: "618341430372"
  },
  {
    codigo: "176970",
    imagem: "images/176970.jpg",
    descricao: "ESPONJA BANHO OVAL VIVI GUARA R389 RS",
    ean: "618341430389"
  },
  {
    codigo: "176986",
    imagem: "images/176986.jpg",
    descricao: "ESPONJA BANHO CRESPA VIVI GUARA R396 RS",
    ean: "618341430396"
  },
  {
    codigo: "176992",
    imagem: "images/176992.jpg",
    descricao: "ESPONJA BANHO BABY VIVI GUARA R402 RS",
    ean: "618341430402"
  },
  {
    codigo: "177890",
    imagem: "images/177890.jpg",
    descricao: "PALITO PT ACO JATOB C012 VIVI GUARA",
    ean: "618341430426"
  },
  {
    codigo: "177908",
    imagem: "images/177908.jpg",
    descricao: "PALITO PT+CHANF JATOB C012 VIVI GUARA",
    ean: "618341430433"
  },
  {
    codigo: "177914",
    imagem: "images/177914.jpg",
    descricao: "PALITO PT DUPLA PARAJ C012 VIVI GUARA",
    ean: "618341430440"
  },
  {
    codigo: "177937",
    imagem: "images/177937.jpg",
    descricao: "PALITO PT+CHANF PARAC C012 VIVI GUARA",
    ean: "618341430457"
  },
  {
    codigo: "177943",
    imagem: "images/177943.jpg",
    descricao: "PALITO PT DUPLA TUCUN C012 VIVI GUARA",
    ean: "618341430464"
  },
  {
    codigo: "177950",
    imagem: "images/177950.jpg",
    descricao: "PALITO PT ACO TUCUN C012 VIVI GUARA",
    ean: "618341430471"
  },
  {
    codigo: "177966",
    imagem: "images/177966.jpg",
    descricao: "PALITO PT+CHANF TUCUM C012 VIVI GUARA",
    ean: "618341430488"
  },
  {
    codigo: "177972",
    imagem: "images/177972.jpg",
    descricao: "PALITO PT+CHANF MARFIN C04 VIVI GUARA",
    ean: "618341430495"
  },
  {
    codigo: "178414",
    imagem: "images/178414.jpg",
    descricao: "BUCHA VEGETAL OVAL VIVI GUARA R 501",
    ean: "618341430501"
  },
  {
    codigo: "178420",
    imagem: "images/178420.jpg",
    descricao: "BUCHA VEGETAL LUVINHA VIVI GUARA R518",
    ean: "618341430518"
  },
  {
    codigo: "178437",
    imagem: "images/178437.jpg",
    descricao: "BUCHA VEGETAL QUADRADA VIVI GUARA R525",
    ean: "618341430525"
  },
  {
    codigo: "178443",
    imagem: "images/178443.jpg",
    descricao: "BUCHA VEGETAL FACIAL VIVI GUARA R532",
    ean: "618341430532"
  },
  {
    codigo: "178450",
    imagem: "images/178450.jpg",
    descricao: "BUCHA VEGETAL LAVA COSTA VIVI GUARA 549",
    ean: "618341430549"
  },
  {
    codigo: "178466",
    imagem: "images/178466.jpg",
    descricao: "BUCHA VEGETAL OVAL PERA VIVI GUARA 556",
    ean: "618341430556"
  },
  {
    codigo: "178472",
    imagem: "images/178472.jpg",
    descricao: "BUCHA VEGETAL REDONDA VIVI GUARA R563",
    ean: "618341430563"
  },
  {
    codigo: "178495",
    imagem: "images/178495.jpg",
    descricao: "BUCHA VEGETAL PEDACO GR VIVI GUARA R8011",
    ean: "7899085758011"
  },
  {
    codigo: "179113",
    imagem: "images/179113.jpg",
    descricao: "ELAST SILIC POUCHETE C160 VIVI GUARA 073",
    ean: "7899085758073"
  },
  {
    codigo: "179400",
    imagem: "images/179400.jpg",
    descricao: "TOUCA BANHO ESTAMPADA VIVI GUARA R8110TB",
    ean: "7899085758110"
  },
  {
    codigo: "179417",
    imagem: "images/179417.jpg",
    descricao: "TOUCA BANHO PVC LISA VIVI GUARA R8127 TB",
    ean: "7899085758127"
  },
  {
    codigo: "179423",
    imagem: "images/179423.jpg",
    descricao: "TOUCA METALIZADA VIVI GUARA R8134 TB",
    ean: "7899085758134"
  },
  {
    codigo: "179674",
    imagem: "images/179674.jpg",
    descricao: "ELAST SILIC PCT C100 NEON VIVI GUARA 141",
    ean: "7899085758141"
  },
  {
    codigo: "180272",
    imagem: "images/180272.jpg",
    descricao: "TOUCA BANHO LISA VIVI GUARA 8158 TB",
    ean: "7899085758158"
  },
  {
    codigo: "180289",
    imagem: "images/180289.jpg",
    descricao: "TOUCA BANHO LISA PC C2 VIVI GUARA 8165TB",
    ean: "7899085758165"
  },
  {
    codigo: "180442",
    imagem: "images/180442.jpg",
    descricao: "ESPONJA PENT AFR NUDREAD M VIVI GUARA",
    ean: "7899085758172"
  },
  {
    codigo: "181790",
    imagem: "images/181790.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA GRANDE R8240 TB",
    ean: "7899085758240"
  },
  {
    codigo: "183124",
    imagem: "images/183124.jpg",
    descricao: "PALITO PT+CHANF BAMBU C100 VIVI GUARA 70",
    ean: "7899085758370"
  },
  {
    codigo: "183130",
    imagem: "images/183130.jpg",
    descricao: "PALITO PT+CHANF BAMBU C050 VIVI GUARA",
    ean: "7899085758387"
  },
  {
    codigo: "183147",
    imagem: "images/183147.jpg",
    descricao: "PALITO PT DUPLA PINUS C050 VIVI GUARA",
    ean: "7899085758394"
  },
  {
    codigo: "183153",
    imagem: "images/183153.jpg",
    descricao: "PALITO PT+CHANF PINUS C100 VIVI GUARA 84",
    ean: "7899085758400"
  },
  {
    codigo: "183160",
    imagem: "images/183160.jpg",
    descricao: "PALITO PT DUPLA BAMBU C100 VIVI GUARA",
    ean: "7899085758417"
  },
  {
    codigo: "183176",
    imagem: "images/183176.jpg",
    descricao: "LIXA UNHA 16CM EST LG C072 VIVI GUARA 24",
    ean: "7899085758424"
  },
  {
    codigo: "183182",
    imagem: "images/183182.jpg",
    descricao: "ESPATULA P/DEPIL 14CM C100 VIVI GUARA 31",
    ean: "7899085758431"
  },
  {
    codigo: "183199",
    imagem: "images/183199.jpg",
    descricao: "PALITO PT+CHANF PINUS C050 VIVI GUARA",
    ean: "7899085758448"
  },
  {
    codigo: "183950",
    imagem: "images/183950.jpg",
    descricao: "TOUCA BANHO ESTAM PC C2 VIVI GUARA 479TB",
    ean: "7899085758479"
  },
  {
    codigo: "184747",
    imagem: "images/184747.jpg",
    descricao: "PENT BOLSO MASCULIN VIVI GUARA C3 R8486",
    ean: "7899085758486"
  },
  {
    codigo: "185107",
    imagem: "images/185107.jpg",
    descricao: "TIARA CETIM COLORS C2 VIVI GUARA R8509",
    ean: "7899085758509"
  },
  {
    codigo: "185120",
    imagem: "images/185120.jpg",
    descricao: "PRESILHA BABY COEL CT C20 VIVI GUARA 523",
    ean: "7899085758523"
  },
  {
    codigo: "185903",
    imagem: "images/185903.jpg",
    descricao: "PENT PENTÃO DESEMBAR VIVI GUARA R8608 LD",
    ean: "7899085758608"
  },
  {
    codigo: "185910",
    imagem: "images/185910.jpg",
    descricao: "PENT PATA PATA OVAL VIVI GUARA RF8615 LD",
    ean: "7899085758615"
  },
  {
    codigo: "185926",
    imagem: "images/185926.jpg",
    descricao: "PORTA ESCOVA DENTAL VIVI GUARA R8622 LD",
    ean: "7899085758622"
  },
  {
    codigo: "185949",
    imagem: "images/185949.jpg",
    descricao: "TOUCA REFLEX SILIC NAT VIVI GUARA 8646SO",
    ean: "7899085758646"
  },
  {
    codigo: "185955",
    imagem: "images/185955.jpg",
    descricao: "TOUCA REFLEX SILIC DOU VIVI GUARA 8653SO",
    ean: "7899085758653"
  },
  {
    codigo: "185961",
    imagem: "images/185961.jpg",
    descricao: "TOUCA REFLEX SILIC 2300F BR VIVI GUARA",
    ean: "7899085758660"
  },
  {
    codigo: "185978",
    imagem: "images/185978.jpg",
    descricao: "TOUCA REFLEX SILIC 2300F DOU VIVI GUARA",
    ean: "7899085758677"
  },
  {
    codigo: "186005",
    imagem: "images/186005.jpg",
    descricao: "PENT TROIA VIVI GUARA REF 8707 MB",
    ean: "7899085758707"
  },
  {
    codigo: "186011",
    imagem: "images/186011.jpg",
    descricao: "PENT HIGIBELLE VIVI GUARA REF 8714 MB",
    ean: "7899085758714"
  },
  {
    codigo: "186028",
    imagem: "images/186028.jpg",
    descricao: "PENT CENTAURO VIVI GUARA REF 8721 LD",
    ean: "7899085758721"
  },
  {
    codigo: "186122",
    imagem: "images/186122.jpg",
    descricao: "ESC CAP MAGICA VIVI GUARA R8745 ACR",
    ean: "7899085758745"
  },
  {
    codigo: "186139",
    imagem: "images/186139.jpg",
    descricao: "ESC CAP MAGICA C CABO VIVI GUARA R8752",
    ean: "7899085758752"
  },
  {
    codigo: "186151",
    imagem: "images/186151.jpg",
    descricao: "PENT PIOLHO C CABO C1 VIVI GUARA 776 MB",
    ean: "7899085758776"
  },
  {
    codigo: "186227",
    imagem: "images/186227.jpg",
    descricao: "ESC CAP VAZA OVAL POP VIVI GUARA 8783 RB",
    ean: "7899085758783"
  },
  {
    codigo: "186233",
    imagem: "images/186233.jpg",
    descricao: "ESC CAP VAZAD RETA POP VIVI GUARA 790 RB",
    ean: "7899085758790"
  },
  {
    codigo: "186240",
    imagem: "images/186240.jpg",
    descricao: "SABONETEIRA TRAD COLOR VIVI GUARA 8806RB",
    ean: "7899085758806"
  },
  {
    codigo: "186285",
    imagem: "images/186285.jpg",
    descricao: "TOUCA ISOPOR METALIZ VIVI GUARA 8813 TB",
    ean: "7899085758813"
  },
  {
    codigo: "186291",
    imagem: "images/186291.jpg",
    descricao: "TOUCA METALIZ ISOTÉRMI VIVI GUARA 8820TB",
    ean: "7899085758820"
  },
  {
    codigo: "186490",
    imagem: "images/186490.jpg",
    descricao: "PENT PIOLHO S CABO C1 VIVI GUARA 844 MB",
    ean: "7899085758844"
  },
  {
    codigo: "186508",
    imagem: "images/186508.jpg",
    descricao: "PENT PIOLHO S CABO C6 VIVI GUARA 851 MB",
    ean: "7899085758851"
  },
  {
    codigo: "187640",
    imagem: "images/187640.jpg",
    descricao: "LIXA UNHA 08CM COL C012 VIVI GUARA 561",
    ean: "7899085758882"
  },
  {
    codigo: "187700",
    imagem: "images/187700.jpg",
    descricao: "LIXA PE MAD DIPLOMATA VIVI GUARA REF8899",
    ean: "7899085758899"
  },
  {
    codigo: "187980",
    imagem: "images/187980.jpg",
    descricao: "AVENTAL DESC PCT C10 BRAN VIVI GUARA 905",
    ean: "7899085758905"
  },
  {
    codigo: "187996",
    imagem: "images/187996.jpg",
    descricao: "SAPATILHA DESCART TNT C100 BR VIVI GUARA",
    ean: "7899085758912"
  },
  {
    codigo: "188000",
    imagem: "images/188000.jpg",
    descricao: "TOUCA DESC TNT C12 BRANCA VIVI GUARA",
    ean: "7899085758929"
  },
  {
    codigo: "188105",
    imagem: "images/188105.jpg",
    descricao: "XUXINHA VELUDO VIVI GUARA C3 8943",
    ean: "7899085758943"
  },
  {
    codigo: "188111",
    imagem: "images/188111.jpg",
    descricao: "XUXINHA VELUDO VIVI GUARA 8950",
    ean: "7899085758950"
  },
  {
    codigo: "188128",
    imagem: "images/188128.jpg",
    descricao: "ESC CAP DOBRA C/ESPEL RED VIVI GUARA 967",
    ean: "7899085758967"
  },
  {
    codigo: "188134",
    imagem: "images/188134.jpg",
    descricao: "ESC CAP DOBRA C/ESPEL QUA VIVI GUARA 974",
    ean: "7899085758974"
  },
  {
    codigo: "188140",
    imagem: "images/188140.jpg",
    descricao: "PRESILHA TIC TAC CT C12 VIVI GUARA 8981",
    ean: "7899085758981"
  },
  {
    codigo: "188510",
    imagem: "images/188510.jpg",
    descricao: "ESPONJA PENT AFR NUDREAD G VIVI GUARA",
    ean: "618341348561"
  },
  {
    codigo: "190969",
    imagem: "images/190969.jpg",
    descricao: "INOX SILIC AFASTADOR CUT VIVI GUARA 8455",
    ean: "7899085758455"
  },
  {
    codigo: "190975",
    imagem: "images/190975.jpg",
    descricao: "INOX SILIC AFASTA/PALITO VIVI GUARA 8592",
    ean: "7899085758592"
  },
  {
    codigo: "190981",
    imagem: "images/190981.jpg",
    descricao: "INOX SILIC BASTAO VIVI GUARA REF 9018",
    ean: "7893095259018"
  },
  {
    codigo: "190998",
    imagem: "images/190998.jpg",
    descricao: "INOX SILIC DESENCRAVAD DP VIVI GUARA 025",
    ean: "7893095259025"
  },
  {
    codigo: "191002",
    imagem: "images/191002.jpg",
    descricao: "INOX SILIC APARAD CUTIC VIVI GUARA R9032",
    ean: "7893095259032"
  },
  {
    codigo: "191165",
    imagem: "images/191165.jpg",
    descricao: "ESC CAP HEXA DESEMB VIVI GUARA R9049 ACR",
    ean: "7893095259049"
  },
  {
    codigo: "191171",
    imagem: "images/191171.jpg",
    descricao: "ESC CAP OVAL DESEMB  VIVI GUARA 9056 ACR",
    ean: "7893095259056"
  },
  {
    codigo: "191188",
    imagem: "images/191188.jpg",
    descricao: "ESC CAP QUAD DESEMB VIVI GUARA 9063 ACR",
    ean: "7893095259063"
  },
  {
    codigo: "191194",
    imagem: "images/191194.jpg",
    descricao: "ESC CAP RAQUET DESEMB LX VIVI GUARA 9070",
    ean: "7893095259070"
  },
  {
    codigo: "191201",
    imagem: "images/191201.jpg",
    descricao: "ESC CAP MAGICA BOLSO VIVI GUARA 9087 ACR",
    ean: "7893095259087"
  },
  {
    codigo: "191218",
    imagem: "images/191218.jpg",
    descricao: "ESC CAP POLVO DESEMB VIVI GUARA 9094 ACR",
    ean: "7893095259094"
  },
  {
    codigo: "192309",
    imagem: "images/192309.jpg",
    descricao: "LIXA UNHA 16CM PRETA C050 VIVI GUARA 100",
    ean: "7893095259100"
  },
  {
    codigo: "192315",
    imagem: "images/192315.jpg",
    descricao: "LIXA UNHA 16CM PRETA C100 VIVI GUARA 117",
    ean: "7893095259117"
  },
  {
    codigo: "192321",
    imagem: "images/192321.jpg",
    descricao: "LIXA UNHA 08CM ROSA C100 VIVI GUARA 9124",
    ean: "7893095259124"
  },
  {
    codigo: "192338",
    imagem: "images/192338.jpg",
    descricao: "LIXA UNHA 16CM ROSA C100 VIVI GUARA 9131",
    ean: "7893095259131"
  },
  {
    codigo: "192344",
    imagem: "images/192344.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C072 VIVI GUARA",
    ean: "7893095259148"
  },
  {
    codigo: "192572",
    imagem: "images/192572.jpg",
    descricao: "LIXA UNHA 16CM ROSA C050 VIVI GUARA 9155",
    ean: "7893095259155"
  },
  {
    codigo: "192589",
    imagem: "images/192589.jpg",
    descricao: "LIXA UNHA 16CM ROSA C012 VIVI GUARA 9162",
    ean: "7893095259162"
  },
  {
    codigo: "192595",
    imagem: "images/192595.jpg",
    descricao: "LIXA UNHA 16CM ROSA C006 VIVI GUARA 9179",
    ean: "7893095259179"
  },
  {
    codigo: "192602",
    imagem: "images/192602.jpg",
    descricao: "LIXA UNHA 16CM ROSA C003 VIVI GUARA 9186",
    ean: "7893095259186"
  },
  {
    codigo: "192619",
    imagem: "images/192619.jpg",
    descricao: "LIXA UNHA 16CM PRETA C020 VIVI GUARA 193",
    ean: "7893095259193"
  },
  {
    codigo: "192625",
    imagem: "images/192625.jpg",
    descricao: "LIXA UNHA 16CM PRETA C006 VIVI GUARA 209",
    ean: "7893095259209"
  },
  {
    codigo: "192631",
    imagem: "images/192631.jpg",
    descricao: "LIXA UNHA 16CM PRETA C003 VIVI GUARA 216",
    ean: "7893095259216"
  },
  {
    codigo: "192648",
    imagem: "images/192648.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C020 VIVI GUARA",
    ean: "7893095259223"
  },
  {
    codigo: "192654",
    imagem: "images/192654.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C012 VIVI GUARA",
    ean: "7893095259230"
  },
  {
    codigo: "192660",
    imagem: "images/192660.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C006 VIVI GUARA",
    ean: "7893095259247"
  },
  {
    codigo: "192677",
    imagem: "images/192677.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C003 VIVI GUARA",
    ean: "7893095259254"
  },
  {
    codigo: "193014",
    imagem: "images/193014.jpg",
    descricao: "LIXA PE REFIL C12 G80 AMA VIVI GUARA 278",
    ean: "7893095259278"
  },
  {
    codigo: "193043",
    imagem: "images/193043.jpg",
    descricao: "LIXA UNHA 08CM PARDA C012 VIVI GUARA 285",
    ean: "7893095259285"
  },
  {
    codigo: "193050",
    imagem: "images/193050.jpg",
    descricao: "LIXA UNHA 16CM EST LG C012 VIVI GUARA 92",
    ean: "7893095259292"
  },
  {
    codigo: "193066",
    imagem: "images/193066.jpg",
    descricao: "LIXA UNHA 08CM AMA C012 VIVI GUARA 9308",
    ean: "7893095259308"
  },
  {
    codigo: "193879",
    imagem: "images/193879.jpg",
    descricao: "TIARA COLORS AC C3 VIVI GUARA UNICÓRNIO",
    ean: "7893095259391"
  },
  {
    codigo: "193885",
    imagem: "images/193885.jpg",
    descricao: "MAOZINHA COLORS VIVI GUARA 9407 IT",
    ean: "7893095259407"
  },
  {
    codigo: "193891",
    imagem: "images/193891.jpg",
    descricao: "MAOZINHA COLORS C12 VIVI GUARA 9414 IT",
    ean: "7893095259414"
  },
  {
    codigo: "193944",
    imagem: "images/193944.jpg",
    descricao: "LIXA PE MAD MD ROSA PEDRA POM VIVI GUARA",
    ean: "7893095259421"
  },
  {
    codigo: "193950",
    imagem: "images/193950.jpg",
    descricao: "LIXA PE REFIL C012 G100 ROSA VIVI GUARA",
    ean: "7893095259438"
  },
  {
    codigo: "194069",
    imagem: "images/194069.jpg",
    descricao: "ELAST SILIC PCT C150 COL VIVI GUARA 9445",
    ean: "7893095259445"
  },
  {
    codigo: "194503",
    imagem: "images/194503.jpg",
    descricao: "MAQ ESPONJA GOTA VIVI GUARA R9452",
    ean: "7893095259452"
  },
  {
    codigo: "194510",
    imagem: "images/194510.jpg",
    descricao: "MAQ ESPONJA 360 VIVI GUARA R9469",
    ean: "7893095259469"
  },
  {
    codigo: "194526",
    imagem: "images/194526.jpg",
    descricao: "MAQ ESPONJA PIZZA VIVI GUARA R9476",
    ean: "7893095259476"
  },
  {
    codigo: "194532",
    imagem: "images/194532.jpg",
    descricao: "BLOCO POLIDOR 4 FACES VIVI GUARA R9483",
    ean: "7893095259483"
  },
  {
    codigo: "194549",
    imagem: "images/194549.jpg",
    descricao: "BLOCO POLIDOR BRANCO VIVI GUARA R9490",
    ean: "7893095259490"
  },
  {
    codigo: "194608",
    imagem: "images/194608.jpg",
    descricao: "ESPONJA PENT DUPLA NUDREAD G VIVI GUARA",
    ean: "7893095259506"
  },
  {
    codigo: "194614",
    imagem: "images/194614.jpg",
    descricao: "ESPONJA PENT DUPLA NUDREAD M VIVI GUARA",
    ean: "7899085758998"
  },
  {
    codigo: "194620",
    imagem: "images/194620.jpg",
    descricao: "ESPONJA PENT DUPLA NUDREAD P VIVI GUARA",
    ean: "7899085758189"
  },
  {
    codigo: "194637",
    imagem: "images/194637.jpg",
    descricao: "TIARA GLITTER ACRI PC C6 VIVI GUARA 8462",
    ean: "7899085758462"
  },
  {
    codigo: "194836",
    imagem: "images/194836.jpg",
    descricao: "ENVEL ESTERILIZ C20 9X23 VIVI GUARA 9322",
    ean: "7893095259322"
  },
  {
    codigo: "194842",
    imagem: "images/194842.jpg",
    descricao: "ENVEL ESTERILIZ C100 9X23 VIVI GUARA",
    ean: "7893095259315"
  },
  {
    codigo: "194859",
    imagem: "images/194859.jpg",
    descricao: "PROT BACIA PEDICURE C50 VIVI GUARA 9384",
    ean: "7893095259384"
  },
  {
    codigo: "194865",
    imagem: "images/194865.jpg",
    descricao: "PROT BACIA PEDICURE C100 VIVI GUARA 9377",
    ean: "7893095259377"
  },
  {
    codigo: "194871",
    imagem: "images/194871.jpg",
    descricao: "PROT BACIA MANICURE C50 VIVI GUARA R9360",
    ean: "7893095259360"
  },
  {
    codigo: "194888",
    imagem: "images/194888.jpg",
    descricao: "PROT BACIA MANICURE C100 VIVI GUARA 9353",
    ean: "7893095259353"
  },
  {
    codigo: "194894",
    imagem: "images/194894.jpg",
    descricao: "TOALHA MANIC DESC 20X30 VIVI GUARA C50",
    ean: "7893095259346"
  },
  {
    codigo: "194901",
    imagem: "images/194901.jpg",
    descricao: "TOALHA MANIC DESC 20X30 VIVI GUARA C100",
    ean: "7893095259339"
  },
  {
    codigo: "194924",
    imagem: "images/194924.jpg",
    descricao: "LAÇO FAIXA BABY SORTIDOS VIVI GUARA 257",
    ean: "7899085758257"
  },
  {
    codigo: "195120",
    imagem: "images/195120.jpg",
    descricao: "ESC CAP RAQUET OVA DESEMB VIVI GUARA 264",
    ean: "7899085758264"
  },
  {
    codigo: "195137",
    imagem: "images/195137.jpg",
    descricao: "PENT CABIDE VIVI GUARA 8219",
    ean: "7899085758219"
  },
  {
    codigo: "195189",
    imagem: "images/195189.jpg",
    descricao: "PALITO PT DUPLA BAMBU C012 VIVI GUARA",
    ean: "7899085758356"
  },
  {
    codigo: "195195",
    imagem: "images/195195.jpg",
    descricao: "PALITO PT DUPLA BAMBU C050 VIVI GUARA",
    ean: "7899085758233"
  },
  {
    codigo: "195202",
    imagem: "images/195202.jpg",
    descricao: "PALITO PT DUPLA PINUS C012 VIVI GUARA",
    ean: "7899085758271"
  },
  {
    codigo: "196322",
    imagem: "images/196322.jpg",
    descricao: "PALITO PT+CHANF PARAJ C006 VIVI GUARA",
    ean: "7899085758318"
  },
  {
    codigo: "198217",
    imagem: "images/198217.jpg",
    descricao: "TIARA BEL C3 VIVI GUARA REF 8028",
    ean: "7899085758028"
  },
  {
    codigo: "198230",
    imagem: "images/198230.jpg",
    descricao: "PENT KIT C/10 PRETO VIVI GUARA REF 8035",
    ean: "7899085758035"
  },
  {
    codigo: "198246",
    imagem: "images/198246.jpg",
    descricao: "KIT NECESSAIRE C5 VIVI GUARA 8103",
    ean: "7899085758103"
  },
  {
    codigo: "199699",
    imagem: "images/199699.jpg",
    descricao: "XUXINHA MEIA VIVI GUARA PRET C50 POUCHET",
    ean: "7899085758295"
  },
  {
    codigo: "199817",
    imagem: "images/199817.jpg",
    descricao: "BACIA TINT C/PORTA PINC GLITT VIVI GUARA",
    ean: "7899085758226"
  },
  {
    codigo: "200924",
    imagem: "images/200924.jpg",
    descricao: "ESC CAP RAQUET DESEMB VIVI GUARA 8332 AC",
    ean: "7899085758332"
  },
  {
    codigo: "200976",
    imagem: "images/200976.jpg",
    descricao: "LIXA UNHA 16CM PARDA C12 VIVI GUARA 8066",
    ean: "7899085758066"
  },
  {
    codigo: "201283",
    imagem: "images/201283.jpg",
    descricao: "SAPATILHA DESCART TNT C12 BR VIVI GUARA",
    ean: "7899085758059"
  },
  {
    codigo: "204340",
    imagem: "images/204340.jpg",
    descricao: "TIARA OCULOS PAC C6 VIVI GUARA REF 8554",
    ean: "7899085758554"
  },
  {
    codigo: "204357",
    imagem: "images/204357.jpg",
    descricao: "PENT CABO FINO PROF C2 VIVI GUARA RF 769",
    ean: "7899085758769"
  },
  {
    codigo: "204363",
    imagem: "images/204363.jpg",
    descricao: "LIXA PE MAD RALIXA VIVI GUARA C2 R419",
    ean: "618341430419"
  },
  {
    codigo: "204370",
    imagem: "images/204370.jpg",
    descricao: "PENT CABO FINO PROF C3 VIVI GUARA RF 936",
    ean: "7899085758936"
  },
  {
    codigo: "204497",
    imagem: "images/204497.jpg",
    descricao: "PINCEL TINT GR VIVI GUARA C2 REF 964 RP",
    ean: "618231826964"
  },
  {
    codigo: "204703",
    imagem: "images/204703.jpg",
    descricao: "NAVALHETE BARBEAR INOX VIVI GUARA R547",
    ean: "7899085758547"
  },
  {
    codigo: "169615",
    imagem: "images/169615.jpg",
    descricao: "TOUCA CETIM SIMP C/VIES VIVI GUARA 889TB",
    ean: "618231826889"
  },
  {
    codigo: "178489",
    imagem: "images/178489.jpg",
    descricao: "BUCHA VEGETAL PEDACO MD VIVI GUARA 193",
    ean: "7898761090193"
  },
  {
    codigo: "181790",
    imagem: "images/181790.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA GRANDE R8240 TB",
    ean: "7899085758240"
  },
  {
    codigo: "185932",
    imagem: "images/185932.jpg",
    descricao: "PENT PIOLHO C CABO C6 VIVI GUARA 223",
    ean: "7898761090223"
  },
  {
    codigo: "185984",
    imagem: "images/185984.jpg",
    descricao: "PENT HYDRA VIVI GUARA REF 216",
    ean: "7898761090216"
  },
  {
    codigo: "186122",
    imagem: "images/186122.jpg",
    descricao: "ESC CAP MAGICA VIVI GUARA R8745 ACR",
    ean: "7899085758745"
  },
  {
    codigo: "194918",
    imagem: "images/194918.jpg",
    descricao: "ELAST SILIC PCT C250 PRET VIVI GUARA%",
    ean: "7898761090209"
  },
  {
    codigo: "204540",
    imagem: "images/204540.jpg",
    descricao: "INOX SILIC DESENCRAVADOR VIVI GUARA R070",
    ean: "7898761090070"
  },
  {
    codigo: "204556",
    imagem: "images/204556.jpg",
    descricao: "INOX SILIC RASPADOR CUTIC VIVI GUARA R56",
    ean: "7898761090056"
  },
  {
    codigo: "204562",
    imagem: "images/204562.jpg",
    descricao: "INOX SILIC BIST M NUCLEAR VIVI GUARA R63",
    ean: "7898761090063"
  },
  {
    codigo: "204579",
    imagem: "images/204579.jpg",
    descricao: "INOX SILIC BIST PONTEIRO VIVI GUARA RF49",
    ean: "7898761090049"
  },
  {
    codigo: "204638",
    imagem: "images/204638.jpg",
    descricao: "INOX SILIC M NUCLEO LARG VIVI GUARA R131",
    ean: "7898761090131"
  },
  {
    codigo: "204644",
    imagem: "images/204644.jpg",
    descricao: "INOX SILIC CURETA VIVI GUARA RF087",
    ean: "7898761090087"
  },
  {
    codigo: "204650",
    imagem: "images/204650.jpg",
    descricao: "INOX SILIC BIST CL DORSAL VIVI GUARA R18",
    ean: "7898761090018"
  },
  {
    codigo: "204667",
    imagem: "images/204667.jpg",
    descricao: "INOX SILIC BIST ESTILETE VIVI GUARA R025",
    ean: "7898761090025"
  },
  {
    codigo: "204673",
    imagem: "images/204673.jpg",
    descricao: "INOX SILIC BIST FORMÃO VIVI GUARA RF032",
    ean: "7898761090032"
  },
  {
    codigo: "204680",
    imagem: "images/204680.jpg",
    descricao: "INOX SILIC BOLIADOR VIVI GUARA RF100",
    ean: "7898761090100"
  },
  {
    codigo: "204696",
    imagem: "images/204696.jpg",
    descricao: "INOX SILIC ESPATULA PONTA VIVI GUARA R24",
    ean: "7898761090124"
  },
  {
    codigo: "204710",
    imagem: "images/204710.jpg",
    descricao: "INOX SILIC BIST GOIVA VIVI GUARA RF117",
    ean: "7898761090117"
  },
  {
    codigo: "206463",
    imagem: "images/206463.jpg",
    descricao: "INOX SILIC REFLEXO VIVI GUARA RF094",
    ean: "7898761090094"
  },
  {
    codigo: "206486",
    imagem: "images/206486.jpg",
    descricao: "ELAST SILIC PCT C060 PRET VIVI GUARA R01",
    ean: "7898761090001"
  },
  {
    codigo: "207519",
    imagem: "images/207519.jpg",
    descricao: "KIT BACIA TINT+ PINCEL PRETA VIVI GUARA",
    ean: "7898761090155"
  },
  {
    codigo: "207531",
    imagem: "images/207531.jpg",
    descricao: "KIT BACIA TINT+PINCEL GLITTER VIVI GUARA",
    ean: "7898761090162"
  },
  {
    codigo: "207613",
    imagem: "images/207613.jpg",
    descricao: "ESC CAP VAZAD RETA POP C2 VIVI GUARA R79",
    ean: "7898761090179"
  },
  {
    codigo: "207981",
    imagem: "images/207981.jpg",
    descricao: "BUCHA VEGETAL PEDACO MINI VIVI GUARA",
    ean: "7898761090186"
  },
  {
    codigo: "208557",
    imagem: "images/208557.jpg",
    descricao: "PENT HYDRA C2 VIVI GUARA RF247",
    ean: "7898761090247"
  },
  {
    codigo: "208762",
    imagem: "images/208762.jpg",
    descricao: "ESPONJA BANHO INF ZOO VIVI GUARA",
    ean: "7898761090261"
  },
  {
    codigo: "208779",
    imagem: "images/208779.jpg",
    descricao: "ESPONJA BANHO NYLON LUXO VIVI GUARA",
    ean: "7898761090278"
  },
  {
    codigo: "208844",
    imagem: "images/208844.jpg",
    descricao: "XUXINHA MEIA VIVI GUARA PCT BABY C12 R92",
    ean: "7898761090292"
  },
  {
    codigo: "208850",
    imagem: "images/208850.jpg",
    descricao: "ELAST SILIC SORVETE C120 KIDS VIVI GUARA",
    ean: "7898761090285"
  },
  {
    codigo: "208910",
    imagem: "images/208910.jpg",
    descricao: "PINCEL SEREIA KIT C4 VIVI GUARA",
    ean: "7898761090308"
  },
  {
    codigo: "208926",
    imagem: "images/208926.jpg",
    descricao: "ESPONJA BANHO INF DOG VIVI GUARA 15",
    ean: "7898761090315"
  },
  {
    codigo: "209484",
    imagem: "images/209484.jpg",
    descricao: "ESPONJA PENT NUDREAD POP G VIVI GUARA",
    ean: "7898761090322"
  },
  {
    codigo: "209490",
    imagem: "images/209490.jpg",
    descricao: "ESPONJA PENT NUDREAD POP M VIVI GUARA",
    ean: "7898761090339"
  },
  {
    codigo: "209508",
    imagem: "images/209508.jpg",
    descricao: "ESPONJA PENT NUDREAD POP P VIVI GUARA",
    ean: "7898761090346"
  },
  {
    codigo: "209514",
    imagem: "images/209514.jpg",
    descricao: "SEPARADOR DEDOS EVA 8MM C1 VIVI GUARA",
    ean: "7898761090353"
  },
  {
    codigo: "209520",
    imagem: "images/209520.jpg",
    descricao: "SEPARADOR DEDOS EVA 8MM C2 VIVI GUARA",
    ean: "7898761090360"
  },
  {
    codigo: "209595",
    imagem: "images/209595.jpg",
    descricao: "ESC CAP DESEMB FIOS TERAPIA VIVI GUARA",
    ean: "7898761090452"
  },
  {
    codigo: "209602",
    imagem: "images/209602.jpg",
    descricao: "ESC CAP TEXT C ESTAMPA VIVI GUARA R391",
    ean: "7898761090391"
  },
  {
    codigo: "209619",
    imagem: "images/209619.jpg",
    descricao: "PENT IONIZ PONTA FINA VIVI GUARA R0629",
    ean: "7898761090629"
  },
  {
    codigo: "209625",
    imagem: "images/209625.jpg",
    descricao: "ESC CAP FLEX OVAL VIVI GUARA R0414",
    ean: "7898761090414"
  },
  {
    codigo: "209631",
    imagem: "images/209631.jpg",
    descricao: "ESC CAP KEIKO VIVI GUARA R0513",
    ean: "7898761090513"
  },
  {
    codigo: "209648",
    imagem: "images/209648.jpg",
    descricao: "ESC CAP ALMOF PREMIUM TERAPIA VIVI GUARA",
    ean: "7898761091145"
  },
  {
    codigo: "209654",
    imagem: "images/209654.jpg",
    descricao: "ESC CAP MINI ALMOFADADA VIVI GUARA",
    ean: "7898761090568"
  },
  {
    codigo: "209660",
    imagem: "images/209660.jpg",
    descricao: "ESC CAP PROF TERM DOURAD 25M VIVI GUARA",
    ean: "7898761090483"
  },
  {
    codigo: "209677",
    imagem: "images/209677.jpg",
    descricao: "ESC CAP E PENTE KIT BEBE VIVI GUARA R520",
    ean: "7898761090520"
  },
  {
    codigo: "209683",
    imagem: "images/209683.jpg",
    descricao: "ESC CAP RAQUET DESEMB EVOL VIVI GUARA",
    ean: "7898761090674"
  },
  {
    codigo: "209690",
    imagem: "images/209690.jpg",
    descricao: "ESC CAP PREMIUM TERAPIA VIVI GUARA",
    ean: "7898761090681"
  },
  {
    codigo: "209707",
    imagem: "images/209707.jpg",
    descricao: "ESC CAP PROF MAD REDONDA VIVI GUARA% 445",
    ean: "7898761090445"
  },
  {
    codigo: "209713",
    imagem: "images/209713.jpg",
    descricao: "ESC CAP BELA OVAL VIVI GUARA R537%",
    ean: "7898761090537"
  },
  {
    codigo: "209720",
    imagem: "images/209720.jpg",
    descricao: "ESC CAP MAD MEIA LUA VIVI GUARA R0438",
    ean: "7898761090438"
  },
  {
    codigo: "209736",
    imagem: "images/209736.jpg",
    descricao: "ESC CAP PROF TERM AMA 26M VIVI GUARA",
    ean: "7898761090469"
  },
  {
    codigo: "209742",
    imagem: "images/209742.jpg",
    descricao: "PENT BOLSO DOBRAVEL VIVI GUARA R0599",
    ean: "7898761090599"
  },
  {
    codigo: "209759",
    imagem: "images/209759.jpg",
    descricao: "ESC CAP PROF TERM AMA 33M VIVI GUARA",
    ean: "7898761090476"
  },
  {
    codigo: "209765",
    imagem: "images/209765.jpg",
    descricao: "ESC CAP PROF TERM DOURAD 44M VIVI GUARA%",
    ean: "7898761090490"
  },
  {
    codigo: "209771",
    imagem: "images/209771.jpg",
    descricao: "ESC CAP UNHA USO GERAL VIVI GUARA R0582",
    ean: "7898761090582"
  },
  {
    codigo: "209801",
    imagem: "images/209801.jpg",
    descricao: "ESC CAP DOB ESPELHO BORBO VIVI GUARA 551",
    ean: "7898761090551"
  },
  {
    codigo: "209818",
    imagem: "images/209818.jpg",
    descricao: "ESC CAP FLEX RETANGULAR VIVI GUARA R0421",
    ean: "7898761090421"
  },
  {
    codigo: "209824",
    imagem: "images/209824.jpg",
    descricao: "ESC CAP INJETADA VIVI GUARA R0506",
    ean: "7898761090506"
  },
  {
    codigo: "209830",
    imagem: "images/209830.jpg",
    descricao: "ESC CAP BELA QUADRADA VIVI GUARA R152",
    ean: "7898761091152"
  },
  {
    codigo: "209853",
    imagem: "images/209853.jpg",
    descricao: "PENT IONIZ DENTES GD VIVI GUARA R0605",
    ean: "7898761090605"
  },
  {
    codigo: "209860",
    imagem: "images/209860.jpg",
    descricao: "PENT IONIZ GD BARBEIRO VIVI GUARA R0612",
    ean: "7898761090612"
  },
  {
    codigo: "209876",
    imagem: "images/209876.jpg",
    descricao: "ESC SILIC MASSAGEADORA VIVI GUARA",
    ean: "7898761090643"
  },
  {
    codigo: "211033",
    imagem: "images/211033.jpg",
    descricao: "LIXA UNHA 08CM PRETA C012 VIVI GUARA R67",
    ean: "7898761090667"
  },
  {
    codigo: "211040",
    imagem: "images/211040.jpg",
    descricao: "INOX SILIC BISTURI CALOS BL VIVI GUARA",
    ean: "7898761090698"
  },
  {
    codigo: "211210",
    imagem: "images/211210.jpg",
    descricao: "KIT BANHO ERIKA ADULTO VIVI GUARA R704",
    ean: "7898761090704"
  },
  {
    codigo: "211226",
    imagem: "images/211226.jpg",
    descricao: "PENT FAMILIA VIVI GUARA RF 735",
    ean: "7898761090735"
  },
  {
    codigo: "211232",
    imagem: "images/211232.jpg",
    descricao: "PENT AFRO JACARE VIVI GUARA RF 711",
    ean: "7898761090711"
  },
  {
    codigo: "211249",
    imagem: "images/211249.jpg",
    descricao: "PENT AFRO GARFO VIVI GUARA RF 728",
    ean: "7898761090728"
  },
  {
    codigo: "211255",
    imagem: "images/211255.jpg",
    descricao: "KIT BANHO INF ZOO VIVI GUARA R759",
    ean: "7898761090759"
  },
  {
    codigo: "211261",
    imagem: "images/211261.jpg",
    descricao: "KIT BANHO INF + PENT  VIVI GUARA R766",
    ean: "7898761090766"
  },
  {
    codigo: "211278",
    imagem: "images/211278.jpg",
    descricao: "TOUCA BANHO ESTAM+LISA PC VIVI GUARA R",
    ean: "7898761090742"
  },
  {
    codigo: "211284",
    imagem: "images/211284.jpg",
    descricao: "TOUCA BANHO CRISTAL VIVI GUARA RF",
    ean: "7898761090773"
  },
  {
    codigo: "211601",
    imagem: "images/211601.jpg",
    descricao: "SABONETEIRA INF GLITER AZUL VIVI GUARA",
    ean: "7898761090797"
  },
  {
    codigo: "211618",
    imagem: "images/211618.jpg",
    descricao: "SABONETEIRA INF GLITER ROSA VIVI GUARA",
    ean: "7898761090827"
  },
  {
    codigo: "211624",
    imagem: "images/211624.jpg",
    descricao: "SABONETEIRA INF GLITER TRANSP VIVI GUARA",
    ean: "7898761090834"
  },
  {
    codigo: "211630",
    imagem: "images/211630.jpg",
    descricao: "ESTOJO MULTIUSO GLITER TRANSP VIVI GUARA",
    ean: "7898761090810"
  },
  {
    codigo: "211647",
    imagem: "images/211647.jpg",
    descricao: "ESTOJO MULTIUSO GLITER AZUL VIVI GUARA",
    ean: "7898761090780"
  },
  {
    codigo: "211653",
    imagem: "images/211653.jpg",
    descricao: "ESTOJO MULTIUSO GLITER ROSA VIVI GUARA",
    ean: "7898761090803"
  },
  {
    codigo: "211787",
    imagem: "images/211787.jpg",
    descricao: "MASSAGEADOR FAC FRASCO ESPUMA VIVI GUARA",
    ean: "7898761090841"
  },
  {
    codigo: "212545",
    imagem: "images/212545.jpg",
    descricao: "ESC CAP VAZA OVAL POP C2 VIVI GUARA",
    ean: "7898761091114"
  },
  {
    codigo: "213296",
    imagem: "images/213296.jpg",
    descricao: "LUVA VINIL VIVI GUARA C/3 PARES C/PO M",
    ean: "7898761090889"
  },
  {
    codigo: "213303",
    imagem: "images/213303.jpg",
    descricao: "LUVA VINIL VIVI GUARA C/10 PARES C/PO M",
    ean: "7898761090896"
  },
  {
    codigo: "213310",
    imagem: "images/213310.jpg",
    descricao: "LUVA VINIL VIVI GUARA C/10 PARES S/PO M",
    ean: "7898761090872"
  },
  {
    codigo: "213326",
    imagem: "images/213326.jpg",
    descricao: "LUVA VINIL VIVI GUARA C/3 PARES S/PO M",
    ean: "7898761090865"
  },
  {
    codigo: "213642",
    imagem: "images/213642.jpg",
    descricao: "LIXA UNHA 10CM GLT CHUMB C100 VIVI GUARA",
    ean: "7898761091046"
  },
  {
    codigo: "213659",
    imagem: "images/213659.jpg",
    descricao: "LIXA UNHA 08CM GLT CHUMB C100 VIVI GUARA",
    ean: "7898761090964"
  },
  {
    codigo: "213665",
    imagem: "images/213665.jpg",
    descricao: "LIXA UNHA 10CM GLT CINZA C100 VIVI GUARA",
    ean: "7898761091039"
  },
  {
    codigo: "213671",
    imagem: "images/213671.jpg",
    descricao: "LIXA UNHA 08CM GLT CINZA C100 VIVI GUARA",
    ean: "7898761090957"
  },
  {
    codigo: "213688",
    imagem: "images/213688.jpg",
    descricao: "LIXA UNHA 10CM GLT NUDE C100 VIVI GUARA",
    ean: "7898761091022"
  },
  {
    codigo: "213694",
    imagem: "images/213694.jpg",
    descricao: "LIXA UNHA 08CM GLT NUDE C100 VIVI GUARA",
    ean: "7898761090995"
  },
  {
    codigo: "213701",
    imagem: "images/213701.jpg",
    descricao: "LIXA UNHA 16CM GLT NUDE C100 VIVI GUARA",
    ean: "7898761090902"
  },
  {
    codigo: "213718",
    imagem: "images/213718.jpg",
    descricao: "LIXA UNHA 16CM GLT NUDE C012 VIVI GUARA",
    ean: "7898761090919"
  },
  {
    codigo: "213724",
    imagem: "images/213724.jpg",
    descricao: "LIXA UNHA 16CM GLT NUDE C020 VIVI GUARA",
    ean: "7898761090926"
  },
  {
    codigo: "213730",
    imagem: "images/213730.jpg",
    descricao: "LIXA UNHA 08CM GLT NUDE C012 VIVI GUARA",
    ean: "7898761091008"
  },
  {
    codigo: "213747",
    imagem: "images/213747.jpg",
    descricao: "LIXA UNHA 08CM GLT NUDE C020 VIVI GUARA",
    ean: "7898761091015"
  },
  {
    codigo: "213753",
    imagem: "images/213753.jpg",
    descricao: "LIXA UNHA 10CM GLT NUDE C012 VIVI GUARA",
    ean: "7898761091053"
  },
  {
    codigo: "213760",
    imagem: "images/213760.jpg",
    descricao: "LIXA UNHA 10CM GLT NUDE C020 VIVI GUARA",
    ean: "7898761091107"
  },
  {
    codigo: "213776",
    imagem: "images/213776.jpg",
    descricao: "LIXA UNHA 08CM GLT CINZA C012 VIVI GUARA",
    ean: "7898761090933"
  },
  {
    codigo: "213782",
    imagem: "images/213782.jpg",
    descricao: "LIXA UNHA 08CM GLT CINZA C020 VIVI GUARA",
    ean: "7898761090940"
  },
  {
    codigo: "213799",
    imagem: "images/213799.jpg",
    descricao: "LIXA UNHA 10CM GLT CINZA C012 VIVI GUARA",
    ean: "7898761091060"
  },
  {
    codigo: "213806",
    imagem: "images/213806.jpg",
    descricao: "LIXA UNHA 10CM GLT CINZA C020 VIVI GUARA",
    ean: "7898761091091"
  },
  {
    codigo: "213812",
    imagem: "images/213812.jpg",
    descricao: "LIXA UNHA 08CM GLT CHUMB C012 VIVI GUARA",
    ean: "7898761090988"
  },
  {
    codigo: "213829",
    imagem: "images/213829.jpg",
    descricao: "LIXA UNHA 08CM GLT CHUMB C020 VIVI GUARA",
    ean: "7898761090971"
  },
  {
    codigo: "213835",
    imagem: "images/213835.jpg",
    descricao: "LIXA UNHA 10CM GLT CHUMB C012 VIVI GUARA",
    ean: "7898761091077"
  },
  {
    codigo: "213841",
    imagem: "images/213841.jpg",
    descricao: "LIXA UNHA 10CM GLT CHUMB C020 VIVI GUARA",
    ean: "7898761091084"
  },
  {
    codigo: "214054",
    imagem: "images/214054.jpg",
    descricao: "PORTA ESCOVA DENTAL VIVI GUARA C2",
    ean: "7898761091121"
  },
  {
    codigo: "214060",
    imagem: "images/214060.jpg",
    descricao: "PENT AFRO GARFO VIVI GUARA C2",
    ean: "7898761091138"
  },
  {
    codigo: "214697",
    imagem: "images/214697.jpg",
    descricao: "PROT BACIA MANICURE C12 VIVI GUARA",
    ean: "7898761091374"
  },
  {
    codigo: "215461",
    imagem: "images/215461.jpg",
    descricao: "LIXA UNHA 16CM BANANA CINZA C12 VIVI G",
    ean: "7898761091381"
  },
  {
    codigo: "215478",
    imagem: "images/215478.jpg",
    descricao: "LIXA UNHA 16CM BANANA CHUMBO C12 VIVI G",
    ean: "7898761091398"
  },
  {
    codigo: "215484",
    imagem: "images/215484.jpg",
    descricao: "LIXA UNHA 16CM LARG NUDE C72 VIVI GUARA",
    ean: "7898761091428"
  },
  {
    codigo: "215490",
    imagem: "images/215490.jpg",
    descricao: "LIXA UNHA 16CM GLT CINZA C100 VIVI GUARA",
    ean: "7898761091404"
  },
  {
    codigo: "215508",
    imagem: "images/215508.jpg",
    descricao: "LIXA UNHA 16CM GLT CINZA C012 VIVI GUARA",
    ean: "7898761091411"
  },
  {
    codigo: "215514",
    imagem: "images/215514.jpg",
    descricao: "LIXA UNHA 16CM LARG NUDE C12 VIVI GUARA",
    ean: "7898761091435"
  },
  {
    codigo: "215619",
    imagem: "images/215619.jpg",
    descricao: "ESC CAP MEGA VIVI GUARA RF 442",
    ean: "7898761091442"
  },
  {
    codigo: "215964",
    imagem: "images/215964.jpg",
    descricao: "SAPATILHA DESCART TNT C050 BR VIVI GUARA",
    ean: "7898761091459"
  },
  {
    codigo: "215970",
    imagem: "images/215970.jpg",
    descricao: "ELAST SILIC PCT C120 PRET VIVI GUARA R",
    ean: "7898761091466"
  },
  {
    codigo: "216190",
    imagem: "images/216190.jpg",
    descricao: "PALITO PT+CHANF PARAJ C012 VIVI GUARA",
    ean: "7898761091473"
  },
  {
    codigo: "216207",
    imagem: "images/216207.jpg",
    descricao: "PALITO PT+CHANF PARAJ C020 VIVI GUARA",
    ean: "7898761091480"
  },
  {
    codigo: "216797",
    imagem: "images/216797.jpg",
    descricao: "ESC CAP RAQUET ORELHINHAS VIVI GUARA 497",
    ean: "7898761091497"
  },
  {
    codigo: "216810",
    imagem: "images/216810.jpg",
    descricao: "ESC CAP ALMOF RED TERAPIA VIVI GUARA R45",
    ean: "7898761091503"
  },
  {
    codigo: "216856",
    imagem: "images/216856.jpg",
    descricao: "KIT PRESENTE TOUCA+XUXINH+ESC VIVI GUARA",
    ean: "7898761091510"
  },
  {
    codigo: "217532",
    imagem: "images/217532.jpg",
    descricao: "PALITO PT+CHANF BAMBU C012 VIVI GUARA",
    ean: "7898761091527"
  },
  {
    codigo: "217894",
    imagem: "images/217894.jpg",
    descricao: "BOTA PLASTICA DESC VIVI GUARA PCT C/100",
    ean: "7898761091534"
  }
];

const container = document.getElementById("galeria");

produtos.forEach(produtos => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${produtos.imagem}" alt="${produtos.ean}">
    <h3>${produtos.codigo}</h3>
    <p>${produtos.descricao}</p>
    <p><strong>EAN:</strong> ${produtos.ean}</p>
  `;
  container.appendChild(div);
});
