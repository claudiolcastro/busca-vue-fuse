const data = [
  {
    aviao_nome: " 14-bis | Alberto Santos Dumont ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/142-14bis"
  },
  {
    aviao_nome: " AERO BOERO 180 - G-180 | Aero Boero SA ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/365-aero-boero"
  },
  {
    aviao_nome: " Albatross - GRUMMAN G-64 (SA-16A) | Grumman Aircraft ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/318-sa-16a"
  },
  {
    aviao_nome: " AMX (YA-1) | AERITALIA/AERMACCHI/EMBRAER	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/297-amx-a1"
  },
  {
    aviao_nome: " Asa Delta | Geiser	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/315-asa-geiser"
  },
  {
    aviao_nome: " Avro (C-91) - HAWKER SIDDELEY 748 | Hawker Siddeley Aviation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/322-c-91"
  },
  {
    aviao_nome: " Bandeirante C-95 - EMB-110 | EMBRAER	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/296-emb-110"
  },
  {
    aviao_nome: " Bandeirante Patrulha - P-95A | EMBRAER	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/302-p-95a"
  },
  {
    aviao_nome: " Bandeirante YC-95 IPD/PAR-6504 - EMB 100 | CTA (Centro Técnico de Aeronáutica)	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/298-6504-bandeirante"
  },
  {
    aviao_nome: " BELL 205 (H-1H) - Iroquois | Bell Helicopter Company	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/368-iroquois"
  },
  {
    aviao_nome: " BELL 206A (VH-4) - Jetranger | Bell Helicopter Company ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/204-vh-4"
  },
  {
    aviao_nome: " BELL 47G-2 (H-13H) “Sioux” | Bell Helicopter Corporation ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/389-h-13h"
  },
  {
    aviao_nome: " BELL 47J (H-13J) - Ranger | Bell Helicopter Corporation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/388-ranger"
  },
  {
    aviao_nome: " Bensen B-8M AutoGiro | Bensen Aircraft Corporation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/205-b-8m"
  },
  {
    aviao_nome: " BOEING 737-200 - VC-96 | Boeing Commercial Airplane	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/369-vc-96"
  },
  {
    aviao_nome: " BOEING STEARMAN A75L3 - Kaydet | Stearman Aircraft Company	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/354-kaydet"
  },
  {
    aviao_nome: " BOEING STEARMAN A76C3 | Stearman Aircraft Company	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/353-stearman"
  },
  {
    aviao_nome: " Buffalo C-115 - DHC-5 | DE HAVILLAND CANADA ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/384-buffalo"
  },
  {
    aviao_nome: " C-130H Hércules | Lockheed Aircraft Corporation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/391-c-130"
  },
  {
    aviao_nome: " C.N.N.A. HL-6B - Cauré | Companhia Nacional de Navegação Aérea ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/376-caure"
  },
  {
    aviao_nome: " Catalina - Consolidated Vultee 28 (PBY-5A/C-10A) | Boeing Aircraft of Canada	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/378-catalina"
  },
  {
    aviao_nome: " CAUDRON G-3 | Réné Caudron	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/371-caudron"
  },
  {
    aviao_nome: " CBA-123 Vector | EMBRAER - FMA ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/305-vector"
  },
  {
    aviao_nome: " CESSNA (AT-17/UC-78) - Bobcat | Cessna Aircraft Company	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/375-bobcat"
  },
  {
    aviao_nome: " CESSNA 305C (L-19E) - Bird Dog | Cessna Aircraft Company ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/372-bird-dog"
  },
  {
    aviao_nome: " CESSNA 318 (T-37C) - Dragonfly | Cessna Aircraft Company	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/373-dragonfly"
  },
  {
    aviao_nome: " Curtiss Fledgling J-2 | Curtiss-Wright Corporation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/380-fledgling"
  },
  {
    aviao_nome: " CURTISS P-40N - Warhawk | Curtiss-Wright Corporation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/379-warhawk"
  },
  {
    aviao_nome: " D.H.82 - Tiger Moth | De Havilland Aircraft Co.	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/383-tiger-moth"
  },
  {
    aviao_nome: " Demoiselle | Santos Dumont	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/143-demoiselle"
  },
  {
    aviao_nome: " DH-89A - Dragon Rapide | De Havilland Aircraft Co.	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/382-dragon-rapide"
  },
  {
    aviao_nome: " Douglas A-20K - Havoc | Douglas Aircraft Company	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/385-havoc"
  },
  {
    aviao_nome: " DOUGLAS A-26B - Invader | Douglas Aircraft Company	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/386-invader"
  },
  {
    aviao_nome: " Douglas DC-3 (C-47B) Skytrain | Douglas Aircraft	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/294-douglas-dc-3"
  },
  {
    aviao_nome: " ERJ 140 | EMBRAER	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/301-erj-140"
  },
  {
    aviao_nome: " Executive - Beechcraft D18S (C-45) | Beech Aircraft Corporation ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/203-d18s"
  },
  {
    aviao_nome: " FAIRCHILD 22-C7G | Fairchild Engine and Airplane Corporation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/310-22-c7g-2"
  },
  {
    aviao_nome: " FAIRCHILD 24-W41 Forwarder | Fairchild Engine and Airplane Corporation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/308-forwarder"
  },
  {
    aviao_nome: " FAIRCHILD C-119G - Flying Boxcar | Fairchild Eng and Airp Corporation ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/387-flying-boxcar"
  },
  {
    aviao_nome: " FAIRCHILD M-62 Cornell | Fábrica do Galeão – Brasil	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/307-cornell"
  },
  {
    aviao_nome: " FAIRCHILD-HILLER FH-1100 | Fairchild Industries	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/311-hiller"
  },
  {
    aviao_nome: " FOCKE-WULF Fw 44J Stieglitz | Fabrica Militar de Aviones	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/313-fw-44j"
  },
  {
    aviao_nome: " FOCKE-WULF FW 58 B-2 Weihe | Fábrica do Galeão	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/312-weihe"
  },
  {
    aviao_nome: " Fouga C.M.170 (T-24) Magister | Aeroespatiale	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/199-cm170"
  },
  {
    aviao_nome: " GLOSTER G.41K (F-8) METEOR F.Mk.8 | Gloster Aircraft ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/316-f-8"
  },
  {
    aviao_nome: " GLOSTER G.43 (TF-7) METEOR T.Mk.7 | Gloster Aircraft	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/317-tf-7"
  },
  {
    aviao_nome: " GRUMMAN G-44A (J4F-2) “Widgeon” | Grumman Aircraft	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/321-j4f-2"
  },
  {
    aviao_nome: " GRUMMAN G-89 (S2F-1/S-2A/P-16A) - Tracker | Grumman Aircraft	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/320-p-16a"
  },
  {
    aviao_nome: " GRUMMAN G-89 (S2F-3S/S2E/P-16E) - Tracker | Grumman Aircraft	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/319-p-16e"
  },
  {
    aviao_nome: " HAWKER SIDDELEY HS-125 (VU-93) | Hawker Siddeley Aviation	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/323-vu-93"
  },
  {
    aviao_nome: " Impala II - AERMACCHI MB-326 KC (AT-26A) | Atlas Aircraft ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/366-at-26a"
  },
  {
    aviao_nome: " Ipanema - EMB-201 R | EMBRAER	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/299-201-ipanema"
  },
  {
    aviao_nome: " IPD/PAR-6505 - Urupema | CTA (Centro Técnico de Aeronáutica) ",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/381-urupema"
  },
  {
    aviao_nome: " IPT-0 “Bichinho II” | Instituto de Pesq. Tec. de SP	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/325-bichinho"
  },
  {
    aviao_nome: " Jungmann - Bücker Bu.131 | Bücker Flugzeugbau G.m.b.H.	",
    aviao_url: "http://www2.fab.mil.br/musal/index.php/anvs/206-bu131"
  },
];

export default data;
