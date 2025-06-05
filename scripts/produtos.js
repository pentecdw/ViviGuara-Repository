const produtos = [
  {
    imagem: "images/169024.jpg",
    descricao: "LIXA PE PLAST CONCAVA GD VIVI GUARA 605R",
    ean: "618231826605"
  },
  {
    imagem: "images/169030.jpg",
    descricao: "LIXA PE BASE CONC P/REFIS VIVI GUARA 612",
    ean: "618231826612"
  },
  {
    imagem: "images/169047.jpg",
    descricao: "LIXA PE MAD PQ PEDRA POME VIVI GUARA 629",
    ean: "618231826629"
  },
  {
    imagem: "images/169053.jpg",
    descricao: "LIXA PE EVA PRETO/AMA VIVI GUARA R636",
    ean: "618231826636"
  },
  {
    imagem: "images/169060.jpg",
    descricao: "LIXA PE EVA ANATOMICA VIVI GUARA R643",
    ean: "618231826643"
  },
  {
    imagem: "images/169076.jpg",
    descricao: "LIXA PE EVA SOFT PROF VIVI GUARA R650",
    ean: "618231826650"
  },
  {
    imagem: "images/169082.jpg",
    descricao: "LIXA PE MAD GD PEDRA POM VIVI GUARA R667",
    ean: "618231826667"
  },
  {
    imagem: "images/169099.jpg",
    descricao: "LIXA PE MAD CONCAVA RETA VIVI GUARA R674",
    ean: "618231826674"
  },
  {
    imagem: "images/169106.jpg",
    descricao: "LIXA PE MAD LUXO MD VIVI GUARA R681",
    ean: "618231826681"
  },
  {
    imagem: "images/169112.jpg",
    descricao: "LIXA PE MAD GD PROF VIVI GUARA R698",
    ean: "618231826698"
  },
  {
    imagem: "images/169129.jpg",
    descricao: "LIXA PE MAD RALIXA VIVI GUARA R704",
    ean: "618231826704"
  },
  {
    imagem: "images/169135.jpg",
    descricao: "LIXA PE REFIL C012 G100 PR VIVI GUARA711",
    ean: "618231826711"
  },
  {
    imagem: "images/169141.jpg",
    descricao: "LIXA PE REFIL C012 G80 BRA VIVI GUARA728",
    ean: "618231826728"
  },
  {
    imagem: "images/169158.jpg",
    descricao: "LIXA UNHA 16CM AMA LG C072  VIVI GUARA35",
    ean: "618231826735"
  },
  {
    imagem: "images/169164.jpg",
    descricao: "LIXA UNHA 16CM AMA C06 VIVI GUARA 742",
    ean: "618231826742"
  },
  {
    imagem: "images/169170.jpg",
    descricao: "LIXA UNHA 08CM AMA C144 VIVI GUARA 59",
    ean: "618231826759"
  },
  {
    imagem: "images/169187.jpg",
    descricao: "LIXA UNHA 08CM AMA C20 VIVI GUARA 766",
    ean: "618231826766"
  },
  {
    imagem: "images/169193.jpg",
    descricao: "LIXA UNHA 16CM AMA C012 VIVI GUARA 773",
    ean: "618231826773"
  },
  {
    imagem: "images/169200.jpg",
    descricao: "LIXA UNHA 16CM AMA C144 VIVI GUARA 780",
    ean: "618231826780"
  },
  {
    imagem: "images/169217.jpg",
    descricao: "LIXA UNHA 16CM C003 BANANA VIVI GUARA797",
    ean: "618231826797"
  },
  {
    imagem: "images/169223.jpg",
    descricao: "LIXA UNHA 16CM PARDA C144 VIVI GUARA 803",
    ean: "618231826803"
  },
  {
    imagem: "images/169230.jpg",
    descricao: "LIXA UNHA 08CM PARDA C144 VIVI GUARA R10",
    ean: "618231826810"
  },
  {
    imagem: "images/169246.jpg",
    descricao: "LIXA UNHA 16CM PARDA C006 VIVI GUARA 827",
    ean: "618231826827"
  },
  {
    imagem: "images/169252.jpg",
    descricao: "LIXA UNHA 08CM PARDA C020 VIVI GUARA R34",
    ean: "618231826834"
  },
  {
    imagem: "images/169269.jpg",
    descricao: "LIXA UNHA 08CM PRETA C144 VIVI GUARA 41",
    ean: "618231826841"
  },
  {
    imagem: "images/169275.jpg",
    descricao: "LIXA UNHA 08CM PRETA C020 VIVI GUARA 58",
    ean: "618231826858"
  },
  {
    imagem: "images/169281.jpg",
    descricao: "LIXA UNHA 16CM PRETA C012 VIVI GUARA 865",
    ean: "618231826865"
  },
  {
    imagem: "images/169298.jpg",
    descricao: "PEDRA POMES VIVI GUARA PE R872",
    ean: "618231826872"
  },
  {
    imagem: "images/169615.jpg",
    descricao: "TOUCA CETIM SIMP C/VIES VIVI GUARA 889TB",
    ean: "618231826889"
  },
  {
    imagem: "images/169621.jpg",
    descricao: "TOUCA CETIM DUPLA S/VIES VIVI GUARA 896T",
    ean: "618231826896"
  },
  {
    imagem: "images/169638.jpg",
    descricao: "TOUCA CETIM UMECTAÇÃO VIVI GUARA R902 TB",
    ean: "618231826902"
  },
  {
    imagem: "images/169644.jpg",
    descricao: "TOUCA CETIM DIFUSORA VIVI GUARA R919 TB",
    ean: "618231826919"
  },
  {
    imagem: "images/169650.jpg",
    descricao: "FRONHA CETIM VIVI GUARA R926 TB",
    ean: "618231826926"
  },
  {
    imagem: "images/169667.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA GRANDE C3 940TB",
    ean: "618231826940"
  },
  {
    imagem: "images/169673.jpg",
    descricao: "FAIXA CETIM P MAQUIAGEM VIVI GUARA 933TB",
    ean: "618231826933"
  },
  {
    imagem: "images/169680.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA PEQUENA C4 957T",
    ean: "618231826957"
  },
  {
    imagem: "images/173661.jpg",
    descricao: "TOUCA CETIM BBB EX GD VIVI GUARA R971 TB",
    ean: "618231826971"
  },
  {
    imagem: "images/173690.jpg",
    descricao: "TIARA COLORS PC C6 VIVI GUARA R988",
    ean: "618231826988"
  },
  {
    imagem: "images/173708.jpg",
    descricao: "PIRANHA TRIDENTE C12 VIVI GUARA  995",
    ean: "618231826995"
  },
  {
    imagem: "images/173714.jpg",
    descricao: "PIRANHA PROF CABELEIRE C6 VIVI GUARA 008",
    ean: "618231827008"
  },
  {
    imagem: "images/173720.jpg",
    descricao: "PRESILHA C12 G BICO PATO VIVI GUARA 015",
    ean: "618231827015"
  },
  {
    imagem: "images/174067.jpg",
    descricao: "TALQUEIRA ESPANADOR VIVI GUARA R022 RV",
    ean: "618231827022"
  },
  {
    imagem: "images/174073.jpg",
    descricao: "PINCEL BARBA NYLON VIVI GUARA REF 039 RP",
    ean: "618231827039"
  },
  {
    imagem: "images/174080.jpg",
    descricao: "PINCEL BARBA NATURAL VIVI GUARA REF 046",
    ean: "618231827046"
  },
  {
    imagem: "images/174096.jpg",
    descricao: "PINCEL TINT GR VIVI GUARA REF 053 RP",
    ean: "618231827053"
  },
  {
    imagem: "images/174103.jpg",
    descricao: "PINCEL TINT GD VIVI GUARA RAIA RF 060 RP",
    ean: "618231827060"
  },
  {
    imagem: "images/174110.jpg",
    descricao: "PINCEL TINT PQ VIVI GUARA REF 077 RP",
    ean: "618231827077"
  },
  {
    imagem: "images/174126.jpg",
    descricao: "ESPANADOR FIGARO BR VIVI GUARA R084",
    ean: "618231827084"
  },
  {
    imagem: "images/174184.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA PEQUENA R318 TB",
    ean: "618341348318"
  },
  {
    imagem: "images/174190.jpg",
    descricao: "TOUCA MECHA PVC C/FURO VIVI GUARA 325 TB",
    ean: "618341348325"
  },
  {
    imagem: "images/174420.jpg",
    descricao: "PENT CABO ACRILICO CAMAR VIVI GUARA R349",
    ean: "618341348349"
  },
  {
    imagem: "images/174436.jpg",
    descricao: "PENT ALTA TEMPERATURA  VIVI GUARA R356",
    ean: "618341348356"
  },
  {
    imagem: "images/174442.jpg",
    descricao: "PENT MONUMENTO VIVI GUARA REF 363",
    ean: "618341348363"
  },
  {
    imagem: "images/174459.jpg",
    descricao: "PENT BOLSO MASCULIN VIVI GUARA C1 R370LD",
    ean: "618341348370"
  },
  {
    imagem: "images/174465.jpg",
    descricao: "PENT CORTE CAMARO VIVI GUARA REF387",
    ean: "618341348387"
  },
  {
    imagem: "images/174471.jpg",
    descricao: "PENT PRAIA C/CABO C/FURO VIVI GUARA R394",
    ean: "618341348394"
  },
  {
    imagem: "images/174488.jpg",
    descricao: "PENT PRAIA S/CABO C/FURO VIVI GUARA R400",
    ean: "618341348400"
  },
  {
    imagem: "images/174494.jpg",
    descricao: "BACIA PEDICURE MD VIVI GUARA REF 417",
    ean: "618341348417"
  },
  {
    imagem: "images/174501.jpg",
    descricao: "BACIA TINT C/PORTA PINC PRETA VIVI GUARA",
    ean: "618341348424"
  },
  {
    imagem: "images/174524.jpg",
    descricao: "CUBETA VIVI GUARA PVC FLEX MEDIA R431",
    ean: "618341348431"
  },
  {
    imagem: "images/174530.jpg",
    descricao: "CUBETA VIVI GUARA PVC FLEX PEQ R448",
    ean: "618341348448"
  },
  {
    imagem: "images/174547.jpg",
    descricao: "CANECA GRADUAD 150ML ACRI VIVI GUARA 455",
    ean: "618341348455"
  },
  {
    imagem: "images/174553.jpg",
    descricao: "CANECA GRADUA 150ML FOSC VIVI GUARA 8462",
    ean: "618341348462"
  },
  {
    imagem: "images/174560.jpg",
    descricao: "TIARA CETIM COLORS C3 VIVI GUARA R479",
    ean: "618341348479"
  },
  {
    imagem: "images/174576.jpg",
    descricao: "XUXINHA MEIA VIVI GUARA PRETA C6 486",
    ean: "618341348486"
  },
  {
    imagem: "images/174687.jpg",
    descricao: "TOUCA CETIM DUPLA C/VIES VIVI GUARA 493T",
    ean: "618341348493"
  },
  {
    imagem: "images/175778.jpg",
    descricao: "LIXA UNHA 16CM EST LG C006 VIVI GUARA 78",
    ean: "618341348578"
  },
  {
    imagem: "images/175784.jpg",
    descricao: "LIXA UNHA 16CM EST LG C003 VIVI GUARA530",
    ean: "618341348530"
  },
  {
    imagem: "images/175790.jpg",
    descricao: "LIXA UNHA 16CM COL LG C003 VIVI GUARA523",
    ean: "618341348523"
  },
  {
    imagem: "images/175808.jpg",
    descricao: "LIXA UNHA 16CM COL C006 VIVI GUARA R547",
    ean: "618341348547"
  },
  {
    imagem: "images/175820.jpg",
    descricao: "LIXA UNHA 08CM EST C006 VIVI GUARA 554",
    ean: "618341348554"
  },
  {
    imagem: "images/175837.jpg",
    descricao: "LIXA UNHA C3+2 PALIT PQ VIVI GUARA516",
    ean: "618341348516"
  },
  {
    imagem: "images/175843.jpg",
    descricao: "LIXA UNHA C3+2 PALIT GD VIVI GUARA 509",
    ean: "618341348509"
  },
  {
    imagem: "images/175850.jpg",
    descricao: "PALITO PT DUPLA PINUS C006 VIVI GUARA",
    ean: "618341348608"
  },
  {
    imagem: "images/175866.jpg",
    descricao: "PALITO PT+CHANF PINUS C006 VIVI GUARA",
    ean: "618341348615"
  },
  {
    imagem: "images/175872.jpg",
    descricao: "PALITO PT ACO JATOB C050 VIVI GUARA",
    ean: "618341348585"
  },
  {
    imagem: "images/175889.jpg",
    descricao: "PALITO PT ACO TUCUM C006 VIVI GUARA",
    ean: "618341348622"
  },
  {
    imagem: "images/175895.jpg",
    descricao: "PALITO PT+CHANF PARAJ C050 VIVI GUARA",
    ean: "618341348592"
  },
  {
    imagem: "images/175902.jpg",
    descricao: "PALITO PT+CHANF TUCUM C050 VIVI GUARA",
    ean: "618341348639"
  },
  {
    imagem: "images/176121.jpg",
    descricao: "PENT PENTÃO DESEMBAR GLIT VIVI GUARA 235",
    ean: "618341430235"
  },
  {
    imagem: "images/176138.jpg",
    descricao: "PENT CABO FINO CAMAR GLITE VIVI GUARA 42",
    ean: "618341430242"
  },
  {
    imagem: "images/176144.jpg",
    descricao: "PENT MONUMENTO GLITTER VIVI GUARA 259 RP",
    ean: "618341430259"
  },
  {
    imagem: "images/176150.jpg",
    descricao: "PINCEL TINT GR VIVI GUARA GLITTER 266 RP",
    ean: "618341430266"
  },
  {
    imagem: "images/176196.jpg",
    descricao: "PINCEL TINT PQ VIVI GUARA GLITTER R273",
    ean: "618341430273"
  },
  {
    imagem: "images/176343.jpg",
    descricao: "INOX AFASTA/PALITO VIVI GUARA RF646",
    ean: "618341348646"
  },
  {
    imagem: "images/176350.jpg",
    descricao: "INOX AFASTADOR CUT VIVI GUARA RF653",
    ean: "618341348653"
  },
  {
    imagem: "images/176366.jpg",
    descricao: "INOX AGULHA REFLEXO VIVI GUARA RF660",
    ean: "618341348660"
  },
  {
    imagem: "images/176372.jpg",
    descricao: "INOX BASTÃO VIVI GUARA REF 677*",
    ean: "618341348677"
  },
  {
    imagem: "images/176389.jpg",
    descricao: "INOX BOLEADOR VIVI GUARA BL REF 783",
    ean: "618341348783"
  },
  {
    imagem: "images/176395.jpg",
    descricao: "INOX CURETA VIVI GUARA BL REF 790*",
    ean: "618341348790"
  },
  {
    imagem: "images/176402.jpg",
    descricao: "INOX DESENCRAVADOR DUPLO VIVI GUARA R806",
    ean: "618341348806"
  },
  {
    imagem: "images/176419.jpg",
    descricao: "INOX DESENCRAVADOR VIVI GUARA REF 082",
    ean: "618341430082"
  },
  {
    imagem: "images/176425.jpg",
    descricao: "INOX ESPALHADORA DE FIBRA VIVI GUARA 099",
    ean: "618341430099"
  },
  {
    imagem: "images/176431.jpg",
    descricao: "INOX ESPATULA C/ PONTA VIVI GUARA RF105",
    ean: "618341430105"
  },
  {
    imagem: "images/176448.jpg",
    descricao: "INOX ESPATULA DESENCR VIVI GUARA REF 112",
    ean: "618341430112"
  },
  {
    imagem: "images/176454.jpg",
    descricao: "INOX ESPATULA VIVI GUARA BL REF 129",
    ean: "618341430129"
  },
  {
    imagem: "images/176460.jpg",
    descricao: "INOX ESPATULA CURATIVO VIVI GUARA REF136",
    ean: "618341430136"
  },
  {
    imagem: "images/176477.jpg",
    descricao: "INOX ESPATULA VIVI GUARA DUPLA REF 143",
    ean: "618341430143"
  },
  {
    imagem: "images/176483.jpg",
    descricao: "INOX ESPATULA LONGA VIVI GUARA REF 150",
    ean: "618341430150"
  },
  {
    imagem: "images/176490.jpg",
    descricao: "INOX EXTRATOR CRAVOS DUPLO VIVI GUARA167",
    ean: "618341430167"
  },
  {
    imagem: "images/176507.jpg",
    descricao: "INOX EXTRATOR CRAVOS VIVI GUARA 174",
    ean: "618341430174"
  },
  {
    imagem: "images/176513.jpg",
    descricao: "INOX LECRON CUTICULA VIVI GUARA REF 181",
    ean: "618341430181"
  },
  {
    imagem: "images/176520.jpg",
    descricao: "INOX PALITO CHANFRADO VIVI GUARA REF 198",
    ean: "618341430198"
  },
  {
    imagem: "images/176536.jpg",
    descricao: "INOX PALITO PONTA DUPLA VIVI GUARA R204",
    ean: "618341430204"
  },
  {
    imagem: "images/176542.jpg",
    descricao: "INOX PALITO LONGO VIVI GUARA REF 211",
    ean: "618341430211"
  },
  {
    imagem: "images/176559.jpg",
    descricao: "INOX RASPADOR CUTICULA VIVI GUARA RF 228",
    ean: "618341430228"
  },
  {
    imagem: "images/176565.jpg",
    descricao: "INOX BISTURI CURETA VIVI GUARA RF 684",
    ean: "618341348684"
  },
  {
    imagem: "images/176571.jpg",
    descricao: "INOX BISTURI ESTILETE VIVI GUARA REF 691",
    ean: "618341348691"
  },
  {
    imagem: "images/176588.jpg",
    descricao: "INOX BISTURI FORMÃO VIVI GUARA REF 707",
    ean: "618341348707"
  },
  {
    imagem: "images/176594.jpg",
    descricao: "INOX BIST MICRO NUCLEAR VIVI GUARA RF714",
    ean: "618341348714"
  },
  {
    imagem: "images/176601.jpg",
    descricao: "INOX BIST MICRO NUCLEA LG VIVI GUARA 721",
    ean: "618341348721"
  },
  {
    imagem: "images/176618.jpg",
    descricao: "INOX BISTU CALO DORSAL VIVI GUARA PEQ738",
    ean: "618341348738"
  },
  {
    imagem: "images/176624.jpg",
    descricao: "INOX BIST CALO DORSAL VIVI GUARA GD 745",
    ean: "618341348745"
  },
  {
    imagem: "images/176630.jpg",
    descricao: "INOX BISTU CALO DORSAL VIVI GUARA MD752",
    ean: "618341348752"
  },
  {
    imagem: "images/176647.jpg",
    descricao: "INOX BISTURI CALOS PLANTA VIVI GUARA 769",
    ean: "618341348769"
  },
  {
    imagem: "images/176653.jpg",
    descricao: "INOX BISTURI PONTEIRO VIVI GUARA REF 776",
    ean: "618341348776"
  },
  {
    imagem: "images/176787.jpg",
    descricao: "XUXINHA MEIA VIVI GUARA COLOR C6",
    ean: "618341430280"
  },
  {
    imagem: "images/176869.jpg",
    descricao: "LIXA PE PLAST CONCAVA PQ VIVI GUARA 297R",
    ean: "618341430297"
  },
  {
    imagem: "images/176898.jpg",
    descricao: "LIXA PE EVA PEZINHO VIVI GUARA R327 RS",
    ean: "618341430327"
  },
  {
    imagem: "images/176905.jpg",
    descricao: "LIXA PE EVA GD QUADRADA VIVI GUARA 303RS",
    ean: "618341430303"
  },
  {
    imagem: "images/176911.jpg",
    descricao: "LIXA PE EVA PQ QUADRADA VIVI GUARA 310RS",
    ean: "618341430310"
  },
  {
    imagem: "images/176928.jpg",
    descricao: "ESPONJA BANHO NYLON GD VIVI GUARA 334 RS",
    ean: "618341430334"
  },
  {
    imagem: "images/176934.jpg",
    descricao: "ESPONJA BANHO NYLON MD VIVI GUARA 341 RS",
    ean: "618341430341"
  },
  {
    imagem: "images/176940.jpg",
    descricao: "ESPONJA BANHO NYLON PQ VIVI GUARA 358 RS",
    ean: "618341430358"
  },
  {
    imagem: "images/176957.jpg",
    descricao: "ESPONJA BANHO CURVA VIVI GUARA 365 RS",
    ean: "618341430365"
  },
  {
    imagem: "images/176963.jpg",
    descricao: "ESPONJA BANHO ANATOM VIVI GUARA 372 RS",
    ean: "618341430372"
  },
  {
    imagem: "images/176970.jpg",
    descricao: "ESPONJA BANHO OVAL VIVI GUARA R389 RS",
    ean: "618341430389"
  },
  {
    imagem: "images/176986.jpg",
    descricao: "ESPONJA BANHO CRESPA VIVI GUARA R396 RS",
    ean: "618341430396"
  },
  {
    imagem: "images/176992.jpg",
    descricao: "ESPONJA BANHO BABY VIVI GUARA R402 RS",
    ean: "618341430402"
  },
  {
    imagem: "images/177890.jpg",
    descricao: "PALITO PT ACO JATOB C012 VIVI GUARA",
    ean: "618341430426"
  },
  {
    imagem: "images/177908.jpg",
    descricao: "PALITO PT+CHANF JATOB C012 VIVI GUARA",
    ean: "618341430433"
  },
  {
    imagem: "images/177914.jpg",
    descricao: "PALITO PT DUPLA PARAJ C012 VIVI GUARA",
    ean: "618341430440"
  },
  {
    imagem: "images/177937.jpg",
    descricao: "PALITO PT+CHANF PARAC C012 VIVI GUARA",
    ean: "618341430457"
  },
  {
    imagem: "images/177943.jpg",
    descricao: "PALITO PT DUPLA TUCUN C012 VIVI GUARA",
    ean: "618341430464"
  },
  {
    imagem: "images/177950.jpg",
    descricao: "PALITO PT ACO TUCUN C012 VIVI GUARA",
    ean: "618341430471"
  },
  {
    imagem: "images/177966.jpg",
    descricao: "PALITO PT+CHANF TUCUM C012 VIVI GUARA",
    ean: "618341430488"
  },
  {
    imagem: "images/177972.jpg",
    descricao: "PALITO PT+CHANF MARFIN C04 VIVI GUARA",
    ean: "618341430495"
  },
  {
    imagem: "images/178414.jpg",
    descricao: "BUCHA VEGETAL OVAL VIVI GUARA R 501",
    ean: "618341430501"
  },
  {
    imagem: "images/178420.jpg",
    descricao: "BUCHA VEGETAL LUVINHA VIVI GUARA R518",
    ean: "618341430518"
  },
  {
    imagem: "images/178437.jpg",
    descricao: "BUCHA VEGETAL QUADRADA VIVI GUARA R525",
    ean: "618341430525"
  },
  {
    imagem: "images/178443.jpg",
    descricao: "BUCHA VEGETAL FACIAL VIVI GUARA R532",
    ean: "618341430532"
  },
  {
    imagem: "images/178450.jpg",
    descricao: "BUCHA VEGETAL LAVA COSTA VIVI GUARA 549",
    ean: "618341430549"
  },
  {
    imagem: "images/178466.jpg",
    descricao: "BUCHA VEGETAL OVAL PERA VIVI GUARA 556",
    ean: "618341430556"
  },
  {
    imagem: "images/178472.jpg",
    descricao: "BUCHA VEGETAL REDONDA VIVI GUARA R563",
    ean: "618341430563"
  },
  {
    imagem: "images/178495.jpg",
    descricao: "BUCHA VEGETAL PEDACO GR VIVI GUARA R8011",
    ean: "7899085758011"
  },
  {
    imagem: "images/179113.jpg",
    descricao: "ELAST SILIC POUCHETE C160 VIVI GUARA 073",
    ean: "7899085758073"
  },
  {
    imagem: "images/179400.jpg",
    descricao: "TOUCA BANHO ESTAMPADA VIVI GUARA R8110TB",
    ean: "7899085758110"
  },
  {
    imagem: "images/179417.jpg",
    descricao: "TOUCA BANHO PVC LISA VIVI GUARA R8127 TB",
    ean: "7899085758127"
  },
  {
    imagem: "images/179423.jpg",
    descricao: "TOUCA METALIZADA VIVI GUARA R8134 TB",
    ean: "7899085758134"
  },
  {
    imagem: "images/179674.jpg",
    descricao: "ELAST SILIC PCT C100 NEON VIVI GUARA 141",
    ean: "7899085758141"
  },
  {
    imagem: "images/180272.jpg",
    descricao: "TOUCA BANHO LISA VIVI GUARA 8158 TB",
    ean: "7899085758158"
  },
  {
    imagem: "images/180289.jpg",
    descricao: "TOUCA BANHO LISA PC C2 VIVI GUARA 8165TB",
    ean: "7899085758165"
  },
  {
    imagem: "images/180442.jpg",
    descricao: "ESPONJA PENT AFR NUDREAD M VIVI GUARA",
    ean: "7899085758172"
  },
  {
    imagem: "images/181790.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA GRANDE R8240 TB",
    ean: "7899085758240"
  },
  {
    imagem: "images/183124.jpg",
    descricao: "PALITO PT+CHANF BAMBU C100 VIVI GUARA 70",
    ean: "7899085758370"
  },
  {
    imagem: "images/183130.jpg",
    descricao: "PALITO PT+CHANF BAMBU C050 VIVI GUARA",
    ean: "7899085758387"
  },
  {
    imagem: "images/183147.jpg",
    descricao: "PALITO PT DUPLA PINUS C050 VIVI GUARA",
    ean: "7899085758394"
  },
  {
    imagem: "images/183153.jpg",
    descricao: "PALITO PT+CHANF PINUS C100 VIVI GUARA 84",
    ean: "7899085758400"
  },
  {
    imagem: "images/183160.jpg",
    descricao: "PALITO PT DUPLA BAMBU C100 VIVI GUARA",
    ean: "7899085758417"
  },
  {
    imagem: "images/183176.jpg",
    descricao: "LIXA UNHA 16CM EST LG C072 VIVI GUARA 24",
    ean: "7899085758424"
  },
  {
    imagem: "images/183182.jpg",
    descricao: "ESPATULA P/DEPIL 14CM C100 VIVI GUARA 31",
    ean: "7899085758431"
  },
  {
    imagem: "images/183199.jpg",
    descricao: "PALITO PT+CHANF PINUS C050 VIVI GUARA",
    ean: "7899085758448"
  },
  {
    imagem: "images/183950.jpg",
    descricao: "TOUCA BANHO ESTAM PC C2 VIVI GUARA 479TB",
    ean: "7899085758479"
  },
  {
    imagem: "images/184747.jpg",
    descricao: "PENT BOLSO MASCULIN VIVI GUARA C3 R8486",
    ean: "7899085758486"
  },
  {
    imagem: "images/185107.jpg",
    descricao: "TIARA CETIM COLORS C2 VIVI GUARA R8509",
    ean: "7899085758509"
  },
  {
    imagem: "images/185120.jpg",
    descricao: "PRESILHA BABY COEL CT C20 VIVI GUARA 523",
    ean: "7899085758523"
  },
  {
    imagem: "images/185903.jpg",
    descricao: "PENT PENTÃO DESEMBAR VIVI GUARA R8608 LD",
    ean: "7899085758608"
  },
  {
    imagem: "images/185910.jpg",
    descricao: "PENT PATA PATA OVAL VIVI GUARA RF8615 LD",
    ean: "7899085758615"
  },
  {
    imagem: "images/185926.jpg",
    descricao: "PORTA ESCOVA DENTAL VIVI GUARA R8622 LD",
    ean: "7899085758622"
  },
  {
    imagem: "images/185949.jpg",
    descricao: "TOUCA REFLEX SILIC NAT VIVI GUARA 8646SO",
    ean: "7899085758646"
  },
  {
    imagem: "images/185955.jpg",
    descricao: "TOUCA REFLEX SILIC DOU VIVI GUARA 8653SO",
    ean: "7899085758653"
  },
  {
    imagem: "images/185961.jpg",
    descricao: "TOUCA REFLEX SILIC 2300F BR VIVI GUARA",
    ean: "7899085758660"
  },
  {
    imagem: "images/185978.jpg",
    descricao: "TOUCA REFLEX SILIC 2300F DOU VIVI GUARA",
    ean: "7899085758677"
  },
  {
    imagem: "images/186005.jpg",
    descricao: "PENT TROIA VIVI GUARA REF 8707 MB",
    ean: "7899085758707"
  },
  {
    imagem: "images/186011.jpg",
    descricao: "PENT HIGIBELLE VIVI GUARA REF 8714 MB",
    ean: "7899085758714"
  },
  {
    imagem: "images/186028.jpg",
    descricao: "PENT CENTAURO VIVI GUARA REF 8721 LD",
    ean: "7899085758721"
  },
  {
    imagem: "images/186122.jpg",
    descricao: "ESC CAP MAGICA VIVI GUARA R8745 ACR",
    ean: "7899085758745"
  },
  {
    imagem: "images/186139.jpg",
    descricao: "ESC CAP MAGICA C CABO VIVI GUARA R8752",
    ean: "7899085758752"
  },
  {
    imagem: "images/186151.jpg",
    descricao: "PENT PIOLHO C CABO C1 VIVI GUARA 776 MB",
    ean: "7899085758776"
  },
  {
    imagem: "images/186227.jpg",
    descricao: "ESC CAP VAZA OVAL POP VIVI GUARA 8783 RB",
    ean: "7899085758783"
  },
  {
    imagem: "images/186233.jpg",
    descricao: "ESC CAP VAZAD RETA POP VIVI GUARA 790 RB",
    ean: "7899085758790"
  },
  {
    imagem: "images/186240.jpg",
    descricao: "SABONETEIRA TRAD COLOR VIVI GUARA 8806RB",
    ean: "7899085758806"
  },
  {
    imagem: "images/186285.jpg",
    descricao: "TOUCA ISOPOR METALIZ VIVI GUARA 8813 TB",
    ean: "7899085758813"
  },
  {
    imagem: "images/186291.jpg",
    descricao: "TOUCA METALIZ ISOTÉRMI VIVI GUARA 8820TB",
    ean: "7899085758820"
  },
  {
    imagem: "images/186490.jpg",
    descricao: "PENT PIOLHO S CABO C1 VIVI GUARA 844 MB",
    ean: "7899085758844"
  },
  {
    imagem: "images/186508.jpg",
    descricao: "PENT PIOLHO S CABO C6 VIVI GUARA 851 MB",
    ean: "7899085758851"
  },
  {
    imagem: "images/187640.jpg",
    descricao: "LIXA UNHA 08CM COL C012 VIVI GUARA 561",
    ean: "7899085758882"
  },
  {
    imagem: "images/187700.jpg",
    descricao: "LIXA PE MAD DIPLOMATA VIVI GUARA REF8899",
    ean: "7899085758899"
  },
  {
    imagem: "images/187980.jpg",
    descricao: "AVENTAL DESC PCT C10 BRAN VIVI GUARA 905",
    ean: "7899085758905"
  },
  {
    imagem: "images/187996.jpg",
    descricao: "SAPATILHA DESCART TNT C100 BR VIVI GUARA",
    ean: "7899085758912"
  },
  {
    imagem: "images/188000.jpg",
    descricao: "TOUCA DESC TNT C12 BRANCA VIVI GUARA",
    ean: "7899085758929"
  },
  {
    imagem: "images/188105.jpg",
    descricao: "XUXINHA VELUDO VIVI GUARA C3 8943",
    ean: "7899085758943"
  },
  {
    imagem: "images/188111.jpg",
    descricao: "XUXINHA VELUDO VIVI GUARA 8950",
    ean: "7899085758950"
  },
  {
    imagem: "images/188128.jpg",
    descricao: "ESC CAP DOBRA C/ESPEL RED VIVI GUARA 967",
    ean: "7899085758967"
  },
  {
    imagem: "images/188134.jpg",
    descricao: "ESC CAP DOBRA C/ESPEL QUA VIVI GUARA 974",
    ean: "7899085758974"
  },
  {
    imagem: "images/188140.jpg",
    descricao: "PRESILHA TIC TAC CT C12 VIVI GUARA 8981",
    ean: "7899085758981"
  },
  {
    imagem: "images/188510.jpg",
    descricao: "ESPONJA PENT AFR NUDREAD G VIVI GUARA",
    ean: "618341348561"
  },
  {
    imagem: "images/190969.jpg",
    descricao: "INOX SILIC AFASTADOR CUT VIVI GUARA 8455",
    ean: "7899085758455"
  },
  {
    imagem: "images/190975.jpg",
    descricao: "INOX SILIC AFASTA/PALITO VIVI GUARA 8592",
    ean: "7899085758592"
  },
  {
    imagem: "images/190981.jpg",
    descricao: "INOX SILIC BASTAO VIVI GUARA REF 9018",
    ean: "7893095259018"
  },
  {
    imagem: "images/190998.jpg",
    descricao: "INOX SILIC DESENCRAVAD DP VIVI GUARA 025",
    ean: "7893095259025"
  },
  {
    imagem: "images/191002.jpg",
    descricao: "INOX SILIC APARAD CUTIC VIVI GUARA R9032",
    ean: "7893095259032"
  },
  {
    imagem: "images/191165.jpg",
    descricao: "ESC CAP HEXA DESEMB VIVI GUARA R9049 ACR",
    ean: "7893095259049"
  },
  {
    imagem: "images/191171.jpg",
    descricao: "ESC CAP OVAL DESEMB  VIVI GUARA 9056 ACR",
    ean: "7893095259056"
  },
  {
    imagem: "images/191188.jpg",
    descricao: "ESC CAP QUAD DESEMB VIVI GUARA 9063 ACR",
    ean: "7893095259063"
  },
  {
    imagem: "images/191194.jpg",
    descricao: "ESC CAP RAQUET DESEMB LX VIVI GUARA 9070",
    ean: "7893095259070"
  },
  {
    imagem: "images/191201.jpg",
    descricao: "ESC CAP MAGICA BOLSO VIVI GUARA 9087 ACR",
    ean: "7893095259087"
  },
  {
    imagem: "images/191218.jpg",
    descricao: "ESC CAP POLVO DESEMB VIVI GUARA 9094 ACR",
    ean: "7893095259094"
  },
  {
    imagem: "images/192309.jpg",
    descricao: "LIXA UNHA 16CM PRETA C050 VIVI GUARA 100",
    ean: "7893095259100"
  },
  {
    imagem: "images/192315.jpg",
    descricao: "LIXA UNHA 16CM PRETA C100 VIVI GUARA 117",
    ean: "7893095259117"
  },
  {
    imagem: "images/192321.jpg",
    descricao: "LIXA UNHA 08CM ROSA C100 VIVI GUARA 9124",
    ean: "7893095259124"
  },
  {
    imagem: "images/192338.jpg",
    descricao: "LIXA UNHA 16CM ROSA C100 VIVI GUARA 9131",
    ean: "7893095259131"
  },
  {
    imagem: "images/192344.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C072 VIVI GUARA",
    ean: "7893095259148"
  },
  {
    imagem: "images/192572.jpg",
    descricao: "LIXA UNHA 16CM ROSA C050 VIVI GUARA 9155",
    ean: "7893095259155"
  },
  {
    imagem: "images/192589.jpg",
    descricao: "LIXA UNHA 16CM ROSA C012 VIVI GUARA 9162",
    ean: "7893095259162"
  },
  {
    imagem: "images/192595.jpg",
    descricao: "LIXA UNHA 16CM ROSA C006 VIVI GUARA 9179",
    ean: "7893095259179"
  },
  {
    imagem: "images/192602.jpg",
    descricao: "LIXA UNHA 16CM ROSA C003 VIVI GUARA 9186",
    ean: "7893095259186"
  },
  {
    imagem: "images/192619.jpg",
    descricao: "LIXA UNHA 16CM PRETA C020 VIVI GUARA 193",
    ean: "7893095259193"
  },
  {
    imagem: "images/192625.jpg",
    descricao: "LIXA UNHA 16CM PRETA C006 VIVI GUARA 209",
    ean: "7893095259209"
  },
  {
    imagem: "images/192631.jpg",
    descricao: "LIXA UNHA 16CM PRETA C003 VIVI GUARA 216",
    ean: "7893095259216"
  },
  {
    imagem: "images/192648.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C020 VIVI GUARA",
    ean: "7893095259223"
  },
  {
    imagem: "images/192654.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C012 VIVI GUARA",
    ean: "7893095259230"
  },
  {
    imagem: "images/192660.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C006 VIVI GUARA",
    ean: "7893095259247"
  },
  {
    imagem: "images/192677.jpg",
    descricao: "LIXA UNHA 16CM ROSA LARG C003 VIVI GUARA",
    ean: "7893095259254"
  },
  {
    imagem: "images/193014.jpg",
    descricao: "LIXA PE REFIL C12 G80 AMA VIVI GUARA 278",
    ean: "7893095259278"
  },
  {
    imagem: "images/193043.jpg",
    descricao: "LIXA UNHA 08CM PARDA C012 VIVI GUARA 285",
    ean: "7893095259285"
  },
  {
    imagem: "images/193050.jpg",
    descricao: "LIXA UNHA 16CM EST LG C012 VIVI GUARA 92",
    ean: "7893095259292"
  },
  {
    imagem: "images/193066.jpg",
    descricao: "LIXA UNHA 08CM AMA C012 VIVI GUARA 9308",
    ean: "7893095259308"
  },
  {
    imagem: "images/193879.jpg",
    descricao: "TIARA COLORS AC C3 VIVI GUARA UNICÓRNIO",
    ean: "7893095259391"
  },
  {
    imagem: "images/193885.jpg",
    descricao: "MAOZINHA COLORS VIVI GUARA 9407 IT",
    ean: "7893095259407"
  },
  {
    imagem: "images/193891.jpg",
    descricao: "MAOZINHA COLORS C12 VIVI GUARA 9414 IT",
    ean: "7893095259414"
  },
  {
    imagem: "images/193944.jpg",
    descricao: "LIXA PE MAD MD ROSA PEDRA POM VIVI GUARA",
    ean: "7893095259421"
  },
  {
    imagem: "images/193950.jpg",
    descricao: "LIXA PE REFIL C012 G100 ROSA VIVI GUARA",
    ean: "7893095259438"
  },
  {
    imagem: "images/194069.jpg",
    descricao: "ELAST SILIC PCT C150 COL VIVI GUARA 9445",
    ean: "7893095259445"
  },
  {
    imagem: "images/194503.jpg",
    descricao: "MAQ ESPONJA GOTA VIVI GUARA R9452",
    ean: "7893095259452"
  },
  {
    imagem: "images/194510.jpg",
    descricao: "MAQ ESPONJA 360 VIVI GUARA R9469",
    ean: "7893095259469"
  },
  {
    imagem: "images/194526.jpg",
    descricao: "MAQ ESPONJA PIZZA VIVI GUARA R9476",
    ean: "7893095259476"
  },
  {
    imagem: "images/194532.jpg",
    descricao: "BLOCO POLIDOR 4 FACES VIVI GUARA R9483",
    ean: "7893095259483"
  },
  {
    imagem: "images/194549.jpg",
    descricao: "BLOCO POLIDOR BRANCO VIVI GUARA R9490",
    ean: "7893095259490"
  },
  {
    imagem: "images/194608.jpg",
    descricao: "ESPONJA PENT DUPLA NUDREAD G VIVI GUARA",
    ean: "7893095259506"
  },
  {
    imagem: "images/194614.jpg",
    descricao: "ESPONJA PENT DUPLA NUDREAD M VIVI GUARA",
    ean: "7899085758998"
  },
  {
    imagem: "images/194620.jpg",
    descricao: "ESPONJA PENT DUPLA NUDREAD P VIVI GUARA",
    ean: "7899085758189"
  },
  {
    imagem: "images/194637.jpg",
    descricao: "TIARA GLITTER ACRI PC C6 VIVI GUARA 8462",
    ean: "7899085758462"
  },
  {
    imagem: "images/194836.jpg",
    descricao: "ENVEL ESTERILIZ C20 9X23 VIVI GUARA 9322",
    ean: "7893095259322"
  },
  {
    imagem: "images/194842.jpg",
    descricao: "ENVEL ESTERILIZ C100 9X23 VIVI GUARA",
    ean: "7893095259315"
  },
  {
    imagem: "images/194859.jpg",
    descricao: "PROT BACIA PEDICURE C50 VIVI GUARA 9384",
    ean: "7893095259384"
  },
  {
    imagem: "images/194865.jpg",
    descricao: "PROT BACIA PEDICURE C100 VIVI GUARA 9377",
    ean: "7893095259377"
  },
  {
    imagem: "images/194871.jpg",
    descricao: "PROT BACIA MANICURE C50 VIVI GUARA R9360",
    ean: "7893095259360"
  },
  {
    imagem: "images/194888.jpg",
    descricao: "PROT BACIA MANICURE C100 VIVI GUARA 9353",
    ean: "7893095259353"
  },
  {
    imagem: "images/194894.jpg",
    descricao: "TOALHA MANIC DESC 20X30 VIVI GUARA C50",
    ean: "7893095259346"
  },
  {
    imagem: "images/194901.jpg",
    descricao: "TOALHA MANIC DESC 20X30 VIVI GUARA C100",
    ean: "7893095259339"
  },
  {
    imagem: "images/194924.jpg",
    descricao: "LAÇO FAIXA BABY SORTIDOS VIVI GUARA 257",
    ean: "7899085758257"
  },
  {
    imagem: "images/195120.jpg",
    descricao: "ESC CAP RAQUET OVA DESEMB VIVI GUARA 264",
    ean: "7899085758264"
  },
  {
    imagem: "images/195137.jpg",
    descricao: "PENT CABIDE VIVI GUARA 8219",
    ean: "7899085758219"
  },
  {
    imagem: "images/195189.jpg",
    descricao: "PALITO PT DUPLA BAMBU C012 VIVI GUARA",
    ean: "7899085758356"
  },
  {
    imagem: "images/195195.jpg",
    descricao: "PALITO PT DUPLA BAMBU C050 VIVI GUARA",
    ean: "7899085758233"
  },
  {
    imagem: "images/195202.jpg",
    descricao: "PALITO PT DUPLA PINUS C012 VIVI GUARA",
    ean: "7899085758271"
  },
  {
    imagem: "images/196322.jpg",
    descricao: "PALITO PT+CHANF PARAJ C006 VIVI GUARA",
    ean: "7899085758318"
  },
  {
    imagem: "images/198217.jpg",
    descricao: "TIARA BEL C3 VIVI GUARA REF 8028",
    ean: "7899085758028"
  },
  {
    imagem: "images/198230.jpg",
    descricao: "PENT KIT C/10 PRETO VIVI GUARA REF 8035",
    ean: "7899085758035"
  },
  {
    imagem: "images/198246.jpg",
    descricao: "KIT NECESSAIRE C5 VIVI GUARA 8103",
    ean: "7899085758103"
  },
  {
    imagem: "images/199699.jpg",
    descricao: "XUXINHA MEIA VIVI GUARA PRET C50 POUCHET",
    ean: "7899085758295"
  },
  {
    imagem: "images/199817.jpg",
    descricao: "BACIA TINT C/PORTA PINC GLITT VIVI GUARA",
    ean: "7899085758226"
  },
  {
    imagem: "images/200924.jpg",
    descricao: "ESC CAP RAQUET DESEMB VIVI GUARA 8332 AC",
    ean: "7899085758332"
  },
  {
    imagem: "images/200976.jpg",
    descricao: "LIXA UNHA 16CM PARDA C12 VIVI GUARA 8066",
    ean: "7899085758066"
  },
  {
    imagem: "images/201283.jpg",
    descricao: "SAPATILHA DESCART TNT C12 BR VIVI GUARA",
    ean: "7899085758059"
  },
  {
    imagem: "images/204340.jpg",
    descricao: "TIARA OCULOS PAC C6 VIVI GUARA REF 8554",
    ean: "7899085758554"
  },
  {
    imagem: "images/204357.jpg",
    descricao: "PENT CABO FINO PROF C2 VIVI GUARA RF 769",
    ean: "7899085758769"
  },
  {
    imagem: "images/204363.jpg",
    descricao: "LIXA PE MAD RALIXA VIVI GUARA C2 R419",
    ean: "618341430419"
  },
  {
    imagem: "images/204370.jpg",
    descricao: "PENT CABO FINO PROF C3 VIVI GUARA RF 936",
    ean: "7899085758936"
  },
  {
    imagem: "images/204497.jpg",
    descricao: "PINCEL TINT GR VIVI GUARA C2 REF 964 RP",
    ean: "618231826964"
  },
  {
    imagem: "images/204703.jpg",
    descricao: "NAVALHETE BARBEAR INOX VIVI GUARA R547",
    ean: "7899085758547"
  },
  {
    imagem: "images/169615.jpg",
    descricao: "TOUCA CETIM SIMP C/VIES VIVI GUARA 889TB",
    ean: "618231826889"
  },
  {
    imagem: "images/178489.jpg",
    descricao: "BUCHA VEGETAL PEDACO MD VIVI GUARA 193",
    ean: "7898761090193"
  },
  {
    imagem: "images/181790.jpg",
    descricao: "XUXINHA CETIM VIVI GUARA GRANDE R8240 TB",
    ean: "7899085758240"
  },
  {
    imagem: "images/185932.jpg",
    descricao: "PENT PIOLHO C CABO C6 VIVI GUARA 223",
    ean: "7898761090223"
  },
  {
    imagem: "images/185984.jpg",
    descricao: "PENT HYDRA VIVI GUARA REF 216",
    ean: "7898761090216"
  },
  {
    imagem: "images/186122.jpg",
    descricao: "ESC CAP MAGICA VIVI GUARA R8745 ACR",
    ean: "7899085758745"
  },
  {
    imagem: "images/194918.jpg",
    descricao: "ELAST SILIC PCT C250 PRET VIVI GUARA%",
    ean: "7898761090209"
  },
  {
    imagem: "images/204540.jpg",
    descricao: "INOX SILIC DESENCRAVADOR VIVI GUARA R070",
    ean: "7898761090070"
  },
  {
    imagem: "images/204556.jpg",
    descricao: "INOX SILIC RASPADOR CUTIC VIVI GUARA R56",
    ean: "7898761090056"
  },
  {
    imagem: "images/204562.jpg",
    descricao: "INOX SILIC BIST M NUCLEAR VIVI GUARA R63",
    ean: "7898761090063"
  },
  {
    imagem: "images/204579.jpg",
    descricao: "INOX SILIC BIST PONTEIRO VIVI GUARA RF49",
    ean: "7898761090049"
  },
  {
    imagem: "images/204638.jpg",
    descricao: "INOX SILIC M NUCLEO LARG VIVI GUARA R131",
    ean: "7898761090131"
  },
  {
    imagem: "images/204644.jpg",
    descricao: "INOX SILIC CURETA VIVI GUARA RF087",
    ean: "7898761090087"
  },
  {
    imagem: "images/204650.jpg",
    descricao: "INOX SILIC BIST CL DORSAL VIVI GUARA R18",
    ean: "7898761090018"
  },
  {
    imagem: "images/204667.jpg",
    descricao: "INOX SILIC BIST ESTILETE VIVI GUARA R025",
    ean: "7898761090025"
  },
  {
    imagem: "images/204673.jpg",
    descricao: "INOX SILIC BIST FORMÃO VIVI GUARA RF032",
    ean: "7898761090032"
  },
  {
    imagem: "images/204680.jpg",
    descricao: "INOX SILIC BOLIADOR VIVI GUARA RF100",
    ean: "7898761090100"
  },
  {
    imagem: "images/204696.jpg",
    descricao: "INOX SILIC ESPATULA PONTA VIVI GUARA R24",
    ean: "7898761090124"
  },
  {
    imagem: "images/204710.jpg",
    descricao: "INOX SILIC BIST GOIVA VIVI GUARA RF117",
    ean: "7898761090117"
  },
  {
    imagem: "images/206463.jpg",
    descricao: "INOX SILIC REFLEXO VIVI GUARA RF094",
    ean: "7898761090094"
  },
  {
    imagem: "images/206486.jpg",
    descricao: "ELAST SILIC PCT C060 PRET VIVI GUARA R01",
    ean: "7898761090001"
  },
  {
    imagem: "images/207519.jpg",
    descricao: "KIT BACIA TINT+ PINCEL PRETA VIVI GUARA",
    ean: "7898761090155"
  },
  {
    imagem: "images/207531.jpg",
    descricao: "KIT BACIA TINT+PINCEL GLITTER VIVI GUARA",
    ean: "7898761090162"
  },
  {
    imagem: "images/207613.jpg",
    descricao: "ESC CAP VAZAD RETA POP C2 VIVI GUARA R79",
    ean: "7898761090179"
  },
  {
    imagem: "images/207981.jpg",
    descricao: "BUCHA VEGETAL PEDACO MINI VIVI GUARA",
    ean: "7898761090186"
  },
  {
    imagem: "images/208557.jpg",
    descricao: "PENT HYDRA C2 VIVI GUARA RF247",
    ean: "7898761090247"
  },
  {
    imagem: "images/208762.jpg",
    descricao: "ESPONJA BANHO INF ZOO VIVI GUARA",
    ean: "7898761090261"
  },
  {
    imagem: "images/208779.jpg",
    descricao: "ESPONJA BANHO NYLON LUXO VIVI GUARA",
    ean: "7898761090278"
  },
  {
    imagem: "images/208844.jpg",
    descricao: "XUXINHA MEIA VIVI GUARA PCT BABY C12 R92",
    ean: "7898761090292"
  },
  {
    imagem: "images/208850.jpg",
    descricao: "ELAST SILIC SORVETE C120 KIDS VIVI GUARA",
    ean: "7898761090285"
  },
  {
    imagem: "images/208910.jpg",
    descricao: "PINCEL SEREIA KIT C4 VIVI GUARA",
    ean: "7898761090308"
  },
  {
    imagem: "images/208926.jpg",
    descricao: "ESPONJA BANHO INF DOG VIVI GUARA 15",
    ean: "7898761090315"
  },
  {
    imagem: "images/209484.jpg",
    descricao: "ESPONJA PENT NUDREAD POP G VIVI GUARA",
    ean: "7898761090322"
  },
  {
    imagem: "images/209490.jpg",
    descricao: "ESPONJA PENT NUDREAD POP M VIVI GUARA",
    ean: "7898761090339"
  },
  {
    imagem: "images/209508.jpg",
    descricao: "ESPONJA PENT NUDREAD POP P VIVI GUARA",
    ean: "7898761090346"
  },
  {
    imagem: "images/209514.jpg",
    descricao: "SEPARADOR DEDOS EVA 8MM C1 VIVI GUARA",
    ean: "7898761090353"
  },
  {
    imagem: "images/209520.jpg",
    descricao: "SEPARADOR DEDOS EVA 8MM C2 VIVI GUARA",
    ean: "7898761090360"
  },
  {
    imagem: "images/209595.jpg",
    descricao: "ESC CAP DESEMB FIOS TERAPIA VIVI GUARA",
    ean: "7898761090452"
  },
  {
    imagem: "images/209602.jpg",
    descricao: "ESC CAP TEXT C ESTAMPA VIVI GUARA R391",
    ean: "7898761090391"
  },
  {
    imagem: "images/209619.jpg",
    descricao: "PENT IONIZ PONTA FINA VIVI GUARA R0629",
    ean: "7898761090629"
  },
  {
    imagem: "images/209625.jpg",
    descricao: "ESC CAP FLEX OVAL VIVI GUARA R0414",
    ean: "7898761090414"
  },
  {
    imagem: "images/209631.jpg",
    descricao: "ESC CAP KEIKO VIVI GUARA R0513",
    ean: "7898761090513"
  },
  {
    imagem: "images/209648.jpg",
    descricao: "ESC CAP ALMOF PREMIUM TERAPIA VIVI GUARA",
    ean: "7898761091145"
  },
  {
    imagem: "images/209654.jpg",
    descricao: "ESC CAP MINI ALMOFADADA VIVI GUARA",
    ean: "7898761090568"
  },
  {
    imagem: "images/209660.jpg",
    descricao: "ESC CAP PROF TERM DOURAD 25M VIVI GUARA",
    ean: "7898761090483"
  },
  {
    imagem: "images/209677.jpg",
    descricao: "ESC CAP E PENTE KIT BEBE VIVI GUARA R520",
    ean: "7898761090520"
  },
  {
    imagem: "images/209683.jpg",
    descricao: "ESC CAP RAQUET DESEMB EVOL VIVI GUARA",
    ean: "7898761090674"
  },
  {
    imagem: "images/209690.jpg",
    descricao: "ESC CAP PREMIUM TERAPIA VIVI GUARA",
    ean: "7898761090681"
  },
  {
    imagem: "images/209707.jpg",
    descricao: "ESC CAP PROF MAD REDONDA VIVI GUARA% 445",
    ean: "7898761090445"
  },
  {
    imagem: "images/209713.jpg",
    descricao: "ESC CAP BELA OVAL VIVI GUARA R537%",
    ean: "7898761090537"
  },
  {
    imagem: "images/209720.jpg",
    descricao: "ESC CAP MAD MEIA LUA VIVI GUARA R0438",
    ean: "7898761090438"
  },
  {
    imagem: "images/209736.jpg",
    descricao: "ESC CAP PROF TERM AMA 26M VIVI GUARA",
    ean: "7898761090469"
  },
  {
    imagem: "images/209742.jpg",
    descricao: "PENT BOLSO DOBRAVEL VIVI GUARA R0599",
    ean: "7898761090599"
  },
  {
    imagem: "images/209759.jpg",
    descricao: "ESC CAP PROF TERM AMA 33M VIVI GUARA",
    ean: "7898761090476"
  },
  {
    imagem: "images/209765.jpg",
    descricao: "ESC CAP PROF TERM DOURAD 44M VIVI GUARA%",
    ean: "7898761090490"
  },
  {
    imagem: "images/209771.jpg",
    descricao: "ESC CAP UNHA USO GERAL VIVI GUARA R0582",
    ean: "7898761090582"
  },
  {
    imagem: "images/209801.jpg",
    descricao: "ESC CAP DOB ESPELHO BORBO VIVI GUARA 551",
    ean: "7898761090551"
  },
  {
    imagem: "images/209818.jpg",
    descricao: "ESC CAP FLEX RETANGULAR VIVI GUARA R0421",
    ean: "7898761090421"
  },
  {
    imagem: "images/209824.jpg",
    descricao: "ESC CAP INJETADA VIVI GUARA R0506",
    ean: "7898761090506"
  },
  {
    imagem: "images/209830.jpg",
    descricao: "ESC CAP BELA QUADRADA VIVI GUARA R152",
    ean: "7898761091152"
  },
  {
    imagem: "images/209853.jpg",
    descricao: "PENT IONIZ DENTES GD VIVI GUARA R0605",
    ean: "7898761090605"
  },
  {
    imagem: "images/209860.jpg",
    descricao: "PENT IONIZ GD BARBEIRO VIVI GUARA R0612",
    ean: "7898761090612"
  },
  {
    imagem: "images/209876.jpg",
    descricao: "ESC SILIC MASSAGEADORA VIVI GUARA",
    ean: "7898761090643"
  },
  {
    imagem: "images/211033.jpg",
    descricao: "LIXA UNHA 08CM PRETA C012 VIVI GUARA R67",
    ean: "7898761090667"
  },
  {
    imagem: "images/211040.jpg",
    descricao: "INOX SILIC BISTURI CALOS BL VIVI GUARA",
    ean: "7898761090698"
  },
  {
    imagem: "images/211210.jpg",
    descricao: "KIT BANHO ERIKA ADULTO VIVI GUARA R704",
    ean: "7898761090704"
  },
  {
    imagem: "images/211226.jpg",
    descricao: "PENT FAMILIA VIVI GUARA RF 735",
    ean: "7898761090735"
  },
  {
    imagem: "images/211232.jpg",
    descricao: "PENT AFRO JACARE VIVI GUARA RF 711",
    ean: "7898761090711"
  },
  {
    imagem: "images/211249.jpg",
    descricao: "PENT AFRO GARFO VIVI GUARA RF 728",
    ean: "7898761090728"
  },
  {
    imagem: "images/211255.jpg",
    descricao: "KIT BANHO INF ZOO VIVI GUARA R759",
    ean: "7898761090759"
  },
  {
    imagem: "images/211261.jpg",
    descricao: "KIT BANHO INF + PENT  VIVI GUARA R766",
    ean: "7898761090766"
  },
  {
    imagem: "images/211278.jpg",
    descricao: "TOUCA BANHO ESTAM+LISA PC VIVI GUARA R",
    ean: "7898761090742"
  },
  {
    imagem: "images/211284.jpg",
    descricao: "TOUCA BANHO CRISTAL VIVI GUARA RF",
    ean: "7898761090773"
  },
  {
    imagem: "images/211601.jpg",
    descricao: "SABONETEIRA INF GLITER AZUL VIVI GUARA",
    ean: "7898761090797"
  },
  {
    imagem: "images/211618.jpg",
    descricao: "SABONETEIRA INF GLITER ROSA VIVI GUARA",
    ean: "7898761090827"
  },
  {
    imagem: "images/211624.jpg",
    descricao: "SABONETEIRA INF GLITER TRANSP VIVI GUARA",
    ean: "7898761090834"
  },
  {
    imagem: "images/211630.jpg",
    descricao: "ESTOJO MULTIUSO GLITER TRANSP VIVI GUARA",
    ean: "7898761090810"
  },
  {
    imagem: "images/211647.jpg",
    descricao: "ESTOJO MULTIUSO GLITER AZUL VIVI GUARA",
    ean: "7898761090780"
  },
  {
    imagem: "images/211653.jpg",
    descricao: "ESTOJO MULTIUSO GLITER ROSA VIVI GUARA",
    ean: "7898761090803"
  },
  {
    imagem: "images/211787.jpg",
    descricao: "MASSAGEADOR FAC FRASCO ESPUMA VIVI GUARA",
    ean: "7898761090841"
  },
  {
    imagem: "images/212545.jpg",
    descricao: "ESC CAP VAZA OVAL POP C2 VIVI GUARA",
    ean: "7898761091114"
  },
  {
    imagem: "images/213296.jpg",
    descricao: "LUVA VINIL VIVI GUARA C/3 PARES C/PO M",
    ean: "7898761090889"
  },
  {
    imagem: "images/213303.jpg",
    descricao: "LUVA VINIL VIVI GUARA C/10 PARES C/PO M",
    ean: "7898761090896"
  },
  {
    imagem: "images/213310.jpg",
    descricao: "LUVA VINIL VIVI GUARA C/10 PARES S/PO M",
    ean: "7898761090872"
  },
  {
    imagem: "images/213326.jpg",
    descricao: "LUVA VINIL VIVI GUARA C/3 PARES S/PO M",
    ean: "7898761090865"
  },
  {
    imagem: "images/213642.jpg",
    descricao: "LIXA UNHA 10CM GLT CHUMB C100 VIVI GUARA",
    ean: "7898761091046"
  },
  {
    imagem: "images/213659.jpg",
    descricao: "LIXA UNHA 08CM GLT CHUMB C100 VIVI GUARA",
    ean: "7898761090964"
  },
  {
    imagem: "images/213665.jpg",
    descricao: "LIXA UNHA 10CM GLT CINZA C100 VIVI GUARA",
    ean: "7898761091039"
  },
  {
    imagem: "images/213671.jpg",
    descricao: "LIXA UNHA 08CM GLT CINZA C100 VIVI GUARA",
    ean: "7898761090957"
  },
  {
    imagem: "images/213688.jpg",
    descricao: "LIXA UNHA 10CM GLT NUDE C100 VIVI GUARA",
    ean: "7898761091022"
  },
  {
    imagem: "images/213694.jpg",
    descricao: "LIXA UNHA 08CM GLT NUDE C100 VIVI GUARA",
    ean: "7898761090995"
  },
  {
    imagem: "images/213701.jpg",
    descricao: "LIXA UNHA 16CM GLT NUDE C100 VIVI GUARA",
    ean: "7898761090902"
  },
  {
    imagem: "images/213718.jpg",
    descricao: "LIXA UNHA 16CM GLT NUDE C012 VIVI GUARA",
    ean: "7898761090919"
  },
  {
    imagem: "images/213724.jpg",
    descricao: "LIXA UNHA 16CM GLT NUDE C020 VIVI GUARA",
    ean: "7898761090926"
  },
  {
    imagem: "images/213730.jpg",
    descricao: "LIXA UNHA 08CM GLT NUDE C012 VIVI GUARA",
    ean: "7898761091008"
  },
  {
    imagem: "images/213747.jpg",
    descricao: "LIXA UNHA 08CM GLT NUDE C020 VIVI GUARA",
    ean: "7898761091015"
  },
  {
    imagem: "images/213753.jpg",
    descricao: "LIXA UNHA 10CM GLT NUDE C012 VIVI GUARA",
    ean: "7898761091053"
  },
  {
    imagem: "images/213760.jpg",
    descricao: "LIXA UNHA 10CM GLT NUDE C020 VIVI GUARA",
    ean: "7898761091107"
  },
  {
    imagem: "images/213776.jpg",
    descricao: "LIXA UNHA 08CM GLT CINZA C012 VIVI GUARA",
    ean: "7898761090933"
  },
  {
    imagem: "images/213782.jpg",
    descricao: "LIXA UNHA 08CM GLT CINZA C020 VIVI GUARA",
    ean: "7898761090940"
  },
  {
    imagem: "images/213799.jpg",
    descricao: "LIXA UNHA 10CM GLT CINZA C012 VIVI GUARA",
    ean: "7898761091060"
  },
  {
    imagem: "images/213806.jpg",
    descricao: "LIXA UNHA 10CM GLT CINZA C020 VIVI GUARA",
    ean: "7898761091091"
  },
  {
    imagem: "images/213812.jpg",
    descricao: "LIXA UNHA 08CM GLT CHUMB C012 VIVI GUARA",
    ean: "7898761090988"
  },
  {
    imagem: "images/213829.jpg",
    descricao: "LIXA UNHA 08CM GLT CHUMB C020 VIVI GUARA",
    ean: "7898761090971"
  },
  {
    imagem: "images/213835.jpg",
    descricao: "LIXA UNHA 10CM GLT CHUMB C012 VIVI GUARA",
    ean: "7898761091077"
  },
  {
    imagem: "images/213841.jpg",
    descricao: "LIXA UNHA 10CM GLT CHUMB C020 VIVI GUARA",
    ean: "7898761091084"
  },
  {
    imagem: "images/214054.jpg",
    descricao: "PORTA ESCOVA DENTAL VIVI GUARA C2",
    ean: "7898761091121"
  },
  {
    imagem: "images/214060.jpg",
    descricao: "PENT AFRO GARFO VIVI GUARA C2",
    ean: "7898761091138"
  },
  {
    imagem: "images/214697.jpg",
    descricao: "PROT BACIA MANICURE C12 VIVI GUARA",
    ean: "7898761091374"
  },
  {
    imagem: "images/215461.jpg",
    descricao: "LIXA UNHA 16CM BANANA CINZA C12 VIVI G",
    ean: "7898761091381"
  },
  {
    imagem: "images/215478.jpg",
    descricao: "LIXA UNHA 16CM BANANA CHUMBO C12 VIVI G",
    ean: "7898761091398"
  },
  {
    imagem: "images/215484.jpg",
    descricao: "LIXA UNHA 16CM LARG NUDE C72 VIVI GUARA",
    ean: "7898761091428"
  },
  {
    imagem: "images/215490.jpg",
    descricao: "LIXA UNHA 16CM GLT CINZA C100 VIVI GUARA",
    ean: "7898761091404"
  },
  {
    imagem: "images/215508.jpg",
    descricao: "LIXA UNHA 16CM GLT CINZA C012 VIVI GUARA",
    ean: "7898761091411"
  },
  {
    imagem: "images/215514.jpg",
    descricao: "LIXA UNHA 16CM LARG NUDE C12 VIVI GUARA",
    ean: "7898761091435"
  },
  {
    imagem: "images/215619.jpg",
    descricao: "ESC CAP MEGA VIVI GUARA RF 442",
    ean: "7898761091442"
  },
  {
    imagem: "images/215964.jpg",
    descricao: "SAPATILHA DESCART TNT C050 BR VIVI GUARA",
    ean: "7898761091459"
  },
  {
    imagem: "images/215970.jpg",
    descricao: "ELAST SILIC PCT C120 PRET VIVI GUARA R",
    ean: "7898761091466"
  },
  {
    imagem: "images/216190.jpg",
    descricao: "PALITO PT+CHANF PARAJ C012 VIVI GUARA",
    ean: "7898761091473"
  },
  {
    imagem: "images/216207.jpg",
    descricao: "PALITO PT+CHANF PARAJ C020 VIVI GUARA",
    ean: "7898761091480"
  },
  {
    imagem: "images/216797.jpg",
    descricao: "ESC CAP RAQUET ORELHINHAS VIVI GUARA 497",
    ean: "7898761091497"
  },
  {
    imagem: "images/216810.jpg",
    descricao: "ESC CAP ALMOF RED TERAPIA VIVI GUARA R45",
    ean: "7898761091503"
  },
  {
    imagem: "images/216856.jpg",
    descricao: "KIT PRESENTE TOUCA+XUXINH+ESC VIVI GUARA",
    ean: "7898761091510"
  },
  {
    imagem: "images/217532.jpg",
    descricao: "PALITO PT+CHANF BAMBU C012 VIVI GUARA",
    ean: "7898761091527"
  },
  {
    imagem: "images/217894.jpg",
    descricao: "BOTA PLASTICA DESC VIVI GUARA PCT C/100",
    ean: "7898761091534"
  }
];
