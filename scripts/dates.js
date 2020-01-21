let d = new Date();

window.addEventListener('load', () => {

  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {}
  xhttp.open('POST', '../reqestData.php', true);
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhttp.send('req=dataRequest');

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {

      let dates = JSON.parse(this.responseText);

      let todaysIndex = getTodaysIndex(dates);
      let nextPlay = dates[todaysIndex][0];
      let nextDate = dates[todaysIndex][1];
      console.log(nextPlay + " " + nextDate);

      changeInfo(nextPlay);

      switch (nextPlay) {
        case "Le Prophète":
          writeCast(castLeProphete);
          document.body.style.backgroundImage = "url('../img/stueckbilder/le_prophete.png')";
          break;

        case "Sister Act":
          writeCast(castSisteract);
          document.body.style.backgroundImage = "url('../img/stueckbilder/sisteract.png')";
          break;

        case "Der Bettelstudent":
          writeCast(castDerBettelstudent);
          document.body.style.backgroundImage = "url('../img/stueckbilder/der_bettelstudent.png')";
          break;

        case "Le Sacre Du Printemps":
          writeCast(castLeSacreDuPrintemps);
          document.body.style.backgroundImage = "url('../img/stueckbilder/lesacredeprintemps.png')";
          break;

        case "Die Entführung aus dem Serail":
          writeCast(castDieEntfuehrungAusDemSerail);
          document.body.style.backgroundImage = "url('../img/stueckbilder/dieentfuehrungausdemserail.png')";
          break;

        case "Carmina Burana":
          writeCast(castCarminaBurana);
          break;

        case "Il Trovatore":
          writeCast(castIlTrovatore);
          document.body.style.backgroundImage = "url('../img/stueckbilder/il_trovatore.png')";
          break;

        case "Die spinnen die Römer":
          writeCast(castDieSpinnenDieRoemer);
          document.body.style.backgroundImage = "url('../img/stueckbilder/diespinnendieroemer.png')";
          break;

        case "Wir sind Musical!":
          writeCast(castWirSindMusical);
          document.body.style.backgroundImage = "url('../img/stueckbilder/wirSindMusical.png')";
          break;

        case "Unter dem Gletscher":
          writeCast(castUnterDemGletscher);
          document.body.style.backgroundImage = "url('../img/stueckbilder/noImageYet.png')";
          break;

        case "Parsifal":
          writeCast(castParsifal);
          document.body.style.backgroundImage = "url('../img/stueckbilder/noImageYet.png')";
          break;

        case "Cinderekka":
          writeCast(castCinderella);
          document.body.style.backgroundImage = "url('../img/stueckbilder/noImageYet.png')";
          break;
      }

      for (let i = todaysIndex+1; i < dates.length; i++) {
        const contentWrapper = document.getElementById('events');
        const newRow = document.createElement('div');
        const play = document.createElement('p');
        const date = document.createElement('p');

        play.textContent = dates[i][0];
        date.textContent = dates[i][1];

        play.style.fontWeight = 'bold';
        play.style.textAlign = 'right';
        date.style.textAlign = 'left';

        newRow.appendChild(play);
        newRow.appendChild(date);
        newRow.classList.add('dateRow');
        contentWrapper.appendChild(newRow);
      }
    }
  };

  const castLeProphete = [
    {name: 'Jeffrey Hartman', role: 'Jean de Leyde'},
    {name: 'Dominik Nekel', role: 'Zacharie'},
    {name: 'Matthäus Schmidlechner', role: 'Jonas'},
    {name: 'Adam Kim', role: 'Mathisen'},
    {name: 'Martin Achrainer', role: 'Graf von Oberthal'},
    {name: 'Markus Schulz', role: 'Ein Bauer'},
    {name: 'Csaba Grünfeld', role: 'Ein Soldat'},
    {name: 'Marius Mocan', role: 'Ein Bürger'},
    {name: 'Tomaz Kovacic', role: 'Ein Offizier'},
    {name: 'Katharine Lerner', role: 'Fidès'},
    {name: 'Brigitte Geller', role: 'Berthe'},
    {name: 'Danuta Moskalik', role: 'Bäuerin'},
    {name: 'Yoon Mi Kim-Ernst', role: 'Bäuerin'},
    {name: 'Jonathan Whiteley', role: 'Erster Wiederläufer'},
    {name: 'Markus Raab', role: 'Zweiter Wiederläufer'}
  ];

  const castSisteract = [
    {role: 'Deloris Van Cartier', name: 'Tertia Botha'},
    {role: 'Mutter Oberin, Äbtissin des Klosters', name: 'Daniela Dett'},
    {role: 'Mary Robert, Postulantin', name: 'Hanna Kastner'},
    {role: 'Mary Lazarus', name: 'Viktornameia Schubert'},
    {role: 'Mary Patrick / Michelle', name: 'Sanne Mieloo'},
    {role: 'Curtis Jackson, Unterweltboss', name: 'Karsten Kenzel'},
    {role: 'Eddie Fritzinger, Police Officer', name: 'Gernot Romic'},
    {role: 'TJ, Gefolgsmann von Curtis', name: 'Lukas Sandmann'},
    {role: 'Joey, Gefolgsmann von Curtis', name: 'David Arnsperger'},
    {role: 'Pablo, Gefolgsmann von Curtis', name: 'Christian Fröhlich'},
    {role: "Monsignore O'Hara", name: 'William Mason'},
    {role: 'Mary Olympia', name: 'Silke Braas-Wolter'},
    {role: 'Mary Honorata', name: 'Dawn Bullock'},
    {role: 'Mary Curata', name: 'Susanna Hirschler'},
    {role: 'Mary Theresa', name: 'Anja Karmanski'},
    {role: 'Mary Passionata', name: 'Isabella Prühs'},
    {role: 'Mary Pieta', name: 'Celina dos Santos'},
    {role: 'Mary Nirvana / Tina', name: 'Lynsey Thurgar'},
    {role: 'Mary vom göttlichen Herzen Jesu', name: 'Nina Weiß'},
    {role: 'Ensemble', name: 'Carlo Schiavone'},
    {role: 'Ensemble', name: 'Cedric Lee Bradley'}
  ];

  const castDerBettelstudent = [
    {role: 'Palmatica, Gräfin Nowalska', name: 'Vaida Raginskytė'},
    {role: 'Laura, ihre Tochter', name: 'Fenja Lukas'},
    {role: 'Bronislawa, ihre Tochter', name: 'Martina Fender'},
    {role: 'Oberst Ollendorf, Gouverneur von Krakau', name: 'Hans Gröning'},
    {role: 'von Wangenheim, Major', name: 'Domen Fajfar'},
    {role: 'von Henrici, Rittmeister', name: 'Siegfried Dietrich'},
    {role: 'von Schweinitz, Leutnant', name: 'Tomaz Kovacic'},
    {role: 'von Richthofen, Kornett im sächsischen Heer', name: 'Gotho Griesmeier'},
    {role: 'Jan Janicki, Student der jagellonischen Universität Krakau', name: 'Mathias Frey'},
    {role: 'Symon Rymanowicz, Student der jagellonischen Universität Krakau', name: 'Hans Schöpflin'},
    {role: 'Enterich, Kerkermeister', name: 'Alfred Rauch'},
    {role: 'Onuphrie, Palmaticas Leibeigener', name: 'Boris Daskalov'},
    {role: 'Wirtin', name: 'Ulrike Weixelbaumer'}
  ];

  const castLeSacreDuPrintemps = [
    {role: 'SIE', name: 'Lara Bonnel Almonem'},
    {role: 'ER', name: 'Nimrod Poles'},
    {role: 'Die Macht (Regime)', name: 'Andrea Schuler'},
    {role: 'Paar', name: 'Kayla May Corbin'},
    {role: 'Bürger', name: 'Rie Akiyama'},
    {role: 'Bürger', name: 'Kayla May Corbin'},
    {role: 'Bürger', name: 'Julie Endo'},
    {role: 'Bürger', name: 'Núria Giménez Villarroya'},
    {role: 'Bürger', name: 'Núria Giménez Villarroya'}
  ];

  const castDieEntfuehrungAusDemSerail = [
    {name: 'Hans Schöpflin', role: 'Selim, Bassa'},
    {name: 'Brigitte Geller', role: 'Konstanze'},
    {name: 'Theresa Grabner', role: 'Blonde'},
    {name: 'Johannes Strauß', role: 'Belmonte'},
    {name: 'Matthäus Schmidlechner', role: 'Pedrillo'},
    {name: 'Dominik Nekel', role: 'Osmin'}
  ];

  const castCarminaBurana = [
    {name: 'Fenja Lukas', role: 'Sopran'},
    {name: 'Etelka Sellei', role: 'Sopran'},
    {name: 'Matthäus Schmidlechner', role: 'Tenor'},
    {name: 'Martin Achrainer', role: 'Bariton'},
    {name: 'Timothy Connor', role: 'Bariton'},
    {name: 'Julio Andrés Escudero', role: 'Schicksal (Fortuna)'}
  ];

  const castIlTrovatore = [
    {role: 'Graf Luna', name: 'Federico Longhi'},
    {role: 'Leonora', name: 'Izabela Matuła'},
    {role: 'Azucena', name: 'Katherine Lerner'},
    {role: 'Manrico', name: 'Sung-Kyu Park'},
    {role: 'Ferrando', name: 'Dominik Nekel'},
    {role: 'Ines', name: 'Gotho Griesmeier'},
    {role: 'Ruiz', name: 'Csaba Grünfelder'},
    {role: 'Ein alter Zigeuner', name: 'Markus Raab'},
    {role: 'Ein Bote', name: 'Domen Fajfar'}
  ];

  const castDieSpinnenDieRoemer = [
    {role: 'Senex', name: 'Klaus Brantzen'},
    {role: 'Domina', name: 'Sanne Mieloo'},
    {role: 'Hero', name: 'Lukas Sandmann'},
    {role: 'Hysterium', name: 'Gernot Romic'},
    {role: 'Pseudolus', name: 'David Arnsperger'},
    {role: 'Erronius', name: 'William Mason'},
    {role: 'Miles Gloriosus', name: 'Christian Fröhlich'},
    {role: 'Lycus', name: 'Karsten Kenzel'},
    {role: 'Philia', name: 'Hanna Kastner'},
    {role: 'Der Chor', name: 'Daniela Dett'},
    {role: 'Der Chor', name: 'Celina dos Santos'},
    {role: 'Der Chor', name: 'Lynsey Thurgar'},
    {role: 'Tintinabula', name: 'Timo Radünz'},
    {role: 'Panacea', name: 'Hannah Moana Paul'},
    {role: 'Die Geminae', name: 'Yuri Yoshimura'},
    {role: 'Die Geminae', name: 'Beate Chui'},
    {role: 'Vibrata', name: 'Brittany Young'},
    {role: 'Gymnasia', name: 'Maria Gschwandtner'}
  ];

  const castWirSindMusical = [
    {role: 'Sopran', name: 'Celina dos Santos'},
    {role: 'Sopran ', name: 'Hannah Kastner'},
    {role: 'Mezzosopran', name: 'Sanne Mielo'},
    {role: 'Alt', name: 'Daniela Dett'},
    {role: 'Alt', name: 'Lynsey Thurgar'},
    {role: 'Tenor', name: 'Karzten Kenzel'},
    {role: 'Tenor', name: 'Gernot Romic'},
    {role: 'Tenor', name: 'Lukas Sandmann'},
    {role: 'Bariton', name: 'Christian Fröhlich'},
    {role: 'Bass', name: 'David Arnsperger'}
  ];

  const castUnterDemGletscher = [
    {role: 'Vebi', name: 'Florence Losseau'},
    {role: 'Tumi Jonson', name: 'Dominik Nekel'},
    {role: 'Mutter Jonson', name: 'Jessica Eccleston'},
    {role: 'Fina Jonson', name: 'Theresa Grabner'},
    {role: 'Sira Jon', name: 'Michael Wagner'},
    {role: 'Ua', name: 'Gotho Griesmeier'},
    {role: 'Helgi', name: 'Matthäus Schmidlechner'},
    {role: 'Alfberg', name: 'Martin Achrainer'},
    {role: 'Saknussem II', name: 'Philipp Kranjc'},
    {role: 'Epimenides', name: 'Timothy Connor'},
    {role: 'Der Tropfen', name: 'Rafael Helbig-Kostka'},
    {role: 'Stößeldora', name: 'Fenja Lukas'},
    {role: 'Syngman', name: 'Hans Schöpflin'}
  ];

  const castParsifal = [
    {role: 'no cast yet', name: ''},
  ];

  const castCinderella = [
    {role: 'Cinderella (Kind)', name: 'Rie Akiyama'},
    {role: 'Cinderella (Frau)', name: 'Kayla May Corbin'},
    {role: 'Mutter', name: 'Núria Giménez Villarroya'},
    {role: 'Vater', name: 'Vincenzo Rosario Minervini'},
    {role: 'Stiefmutter', name: 'Mireia González Fernández'},
    {role: 'Stiefschwester 1', name: 'Rie Akiyama'},
    {role: 'Stiefschwester 2', name: 'Julie Endo'}
  ];

});

function getTodaysIndex(dates) {
  const thisMonth = d.getMonth()+1;
  const thisDay = d.getDate();

  for (let i = 0; i < dates.length; i++) {
    let month = dates[i][1].split('.')[1];
    if(month == thisMonth){
      for (let j = i; i < dates.length; j++) {
        let day = dates[j][1].split('.')[0];
        if(day >= thisDay){
          return j;
        }
      }
    }
  }
}

function changeInfo(play){
  let infoBox = document.getElementById('info');

  let title = document.createElement("h1");
  let titleText = document.createTextNode(play);
  title.appendChild(titleText);
  infoBox.appendChild(title);

  switch (play) {
    case "Le Prophète":
      let infoLeProphete = document.createElement("p");
      let infoTextLeProphete = document.createTextNode("Zu seinen Lebzeiten beherrschte Giacomo Meyerbeer (1791–1864) die Opernspielpläne weltweit." +
        "Doch dann schmähten ihn andere Komponisten wie etwa Richard Wagner, da sie erkannt hatten," +
        "dass sie nur Erfolg haben können, wenn sie ihn vom Thron stoßen. Und so schlugen sie auf ihn," +
        "den Juden, ein. Mit Erfolg! Als oberflächlich diffamiert verschwanden seine Werke aus dem Repertoire." +
        "Doch am Ende des 20. Jahrhunderts erinnerte man sich wieder an ihn. Und da entdeckte man," +
        "welch visionärer Musikdramatiker Giacomo Meyerbeer gewesen ist." +
        "Musikalisch packend, ja sein Publikum nachgerade überfahrend mit der Wucht seiner Kompositionen sind Meyerbeers Opern totales Theater." +
        "Denn er war nicht nur ein Komponist süffiger Musik," +
        "sondern auch ein kluger Dramaturg und ordnete alle Komponenten des Musiktheaters wie Ausstattung, Komposition, Instrumentation," +
        "Text und Darstellung einer übergeordneten inhaltlichen Gesamtidee unter." +
        "Davon kann man sich nun im Landestheater bei der 1849 in Paris mit sensationellem Erfolg uraufgeführten Oper Le Prophète überzeugen," +
        "die von Aufstieg und Fall der sozialrevolutionären Wiedertäuferbewegung im 16. Jahrhundert erzählt.");
      infoLeProphete.appendChild(infoTextLeProphete);
      infoBox.appendChild(infoLeProphete);

      break;

    case "Sister Act":
      let infoSisterAct = document.createElement("p");
      let infoTextSisterAct = document.createTextNode("Sängerin Deloris wird unfreiwillig Zeugin, " +
      "wie ihr zwielichtiger Chef Curtis einen seiner „Mitarbeiter“ erschießen lässt, " +
      "weil der bei der Polizei gesungen hat. Ihr ehemaliger Schulkamerad Eddie, " +
      "inzwischen Police Officer, denkt sich ein spezielles Zeugenschutzprogramm für sie aus: " +
      "Als „Schwester Mary Clarence“ gibt er sie in die Obhut eines Nonnenklosters. " +
      "Dessen berüchtigt talentarmen Chor bringt Deloris binnen kurzem so auf Vordermann, " +
      "dass die Gottesdienste plötzlich gesteckt voll sind und die Presse das Thema aufgreift " +
      "– keine gute Idee, wenn man nicht gefunden werden will … ");
      infoSisterAct.appendChild(infoTextSisterAct);
      infoBox.appendChild(infoSisterAct);
      break;

    case "Der Bettelstudent":
      let infoDerBettelstudent = document.createElement("p");
      let infoTextDerBettelstudent = document.createTextNode("Liebe und Freiheit – daraus lässt sich für jede Epoche, " +
      "jeden Ort und jede Gesellschaft eine mitreißende Geschichte stricken, die die Zeichen der Zeit übersteht. " +
      "Was heißt echte Liebe? Was bedeutet persönliche Freiheit in einer im Grunde unfreien Gesellschaft? " +
      "Und wieso wird der arme Student Symon für einen kleinlichen Rachefeldzug plötzlich zum edlen Grafen erklärt?");
      infoDerBettelstudent.appendChild(infoTextDerBettelstudent);
      infoBox.appendChild(infoDerBettelstudent);
      break;

    case "Le Sacre Du Printemps":
      let infoLeSacreDuPrintemps = document.createElement("p");
      let infoTextLeSacreDuPrintemps = document.createTextNode("Am Vorabend des ersten Weltkrieges wurde ein Werk geboren, " +
      "das nicht nur den Tanz revolutionierte. Mit Le Sacre du printemps (Das Frühlingsopfer) " +
      "provozierte Igor Strawinsky einen der größten Skandale der Tanzgeschichte. " +
      "Legendär ist das Fiasko der Uraufführung und ungebrochen die Faszination, " +
      "die von diesem inzwischen kanonischen Werk der anbrechenden Moderne ausgeht. " +
      "In seiner Rückbesinnung auf eine Welt des Primitiven bricht Strawinsky mit den Vorstellungen der Aufklärung. " +
      "Er konfrontiert uns roh und brutal mit der Behauptung des regenerativen Potenzials, " +
      "der Verjüngung und Erneuerung einer Gesellschaft durch ein menschliches Opfer. ");
      infoLeSacreDuPrintemps.appendChild(infoTextLeSacreDuPrintemps);
      infoBox.appendChild(infoLeSacreDuPrintemps);
      break;

    case "Die Entführung aus dem Serail":
      let infoDieEntfuehrungAusDemSerail = document.createElement("p");
      let infoTextDieEntfuehrungAusDemSerail = document.createTextNode("1911. Konstanze reist mit ihrer Assistentin Blonde und dem Kameramann Pedrillo in die Sahara Nordafrikas, " +
      "um atemberaubende Bilder der Wüste und umherziehender Nomaden aufzunehmen. " +
      "Dabei geraten sie in die Gefangenschaft einheimischer Beduinenstämme, " +
      "die ein hohes Lösegeld erpressen wollen. Bassa Selim, der als militärischer Gouverneur einen Teil des Osmanischen Reiches regiert," +
      " kauft die Geiseln frei und überführt sie in seinen Palast. Dort leben Konstanze, " +
      "Blonde und Pedrillo mehr oder weniger unter Hausarrest, bis Belmonte, Konstanzes Verlobter, " +
      "mit einem Schiff zu einem waghalsigen Befreiungsmanöver ansetzt …");

      infoDieEntfuehrungAusDemSerail.appendChild(infoTextDieEntfuehrungAusDemSerail);
      infoBox.appendChild(infoDieEntfuehrungAusDemSerail);
      break;

    case "Carmina Burana":
      let infoCarminaburana = document.createElement("p");
      let infoTextCarminaBurana = document.createTextNode("Mit Carmina Burana schuf Carl Orff eines der populärsten Werke der ernsten Musik. " +
      "In der kommenden Saison steht Mei Hong Lins als Gesamtkunstwerk umjubelte Interpretation des monumentalen Klassikers der Moderne wieder auf dem Spielplan. " +
      "In dem spartenübergreifenden Großprojekt wirken neben der Kompanie TANZLIN.Z auch Chor, Extrachor, Kinder- und Jugendchor des Landestheaters " +
      "sowie Solistinnen und Solisten des Sängerensembles und das Bruckner Orchester Linz mit.");

      infoCarminaburana.appendChild(infoTextCarminaBurana);
      infoBox.appendChild(infoCarminaburana);
      break;

    case "Il Trovatore":
      let infoIlTrovatore = document.createElement("p");
      let infoTextIlTrovatore = document.createTextNode("Mit Carmina Burana schuf Carl Orff eines der populärsten Werke der ernsten Musik. " +
      "In der kommenden Saison steht Mei Hong Lins als Gesamtkunstwerk umjubelte Interpretation des monumentalen Klassikers der Moderne wieder auf dem Spielplan. " +
      "In dem spartenübergreifenden Großprojekt wirken neben der Kompanie TANZLIN.Z auch Chor, Extrachor, Kinder- und Jugendchor des Landestheaters " +
      "sowie Solistinnen und Solisten des Sängerensembles und das Bruckner Orchester Linz mit.");

      infoIlTrovatore.appendChild(infoTextIlTrovatore);
      infoBox.appendChild(infoIlTrovatore);
      break;

    case "Die spinnen die Römer":
      let infoDieSpinnenDieRoemer = document.createElement("p");
      let infoTextDieSpinnenDieRoemer = document.createTextNode("" +
          "Rom, im 3. Jahrhundert vor Christus. Sklave Pseudolus hofft nur auf eines: " +
          "dass er endlich freikommt! Dafür ist er sogar bereit, seinen jungen Herrn, " +
          "den ebenso hübschen wie einfältigen Hero, " +
          "mit der jungfräulichen Kurtisane Philia aus dem benachbarten Freudenhaus zusammenzubringen. " +
          "Diese ist jedoch bereits dem berühmten Krieger Miles Gloriosus versprochen, " +
          "und auch Heros Eltern Domina und Senex sind von der Liaison alles andere als begeistert. " +
          "Um Miles loszuwerden, erfindet Pseudolus eine schlimme Seuche, " +
          "der die hübsche Philia leider zum Opfer gefallen sei, und erpresst Haussklave Hysterium, " +
          "die tote Schönheit darzustellen. Doch dann will Miles den Schleier der Braut lüften, " +
          "um ihr einen letzten Kuss auf die roten Lippen zu drücken …");

      infoDieSpinnenDieRoemer.appendChild(infoTextDieSpinnenDieRoemer);
      infoBox.appendChild(infoDieSpinnenDieRoemer);
      break;

    case "Wir sind Musical!":
      let infoWirSindMusical = document.createElement("p");
      let infoTextWirSindMusical = document.createTextNode("" +
          "Nach den konzertant dargebotenen Musicals On The Town und Chess im Großen Saal des Musiktheaters " +
          "und den komplett ausverkauften „Showtimes“ Seven in Heaven, " +
          "The World Goes ’Round und Forever Young in der BlackBox und BlackBox Lounge " +
          "machen wir endlich unseren Wunsch wahr, " +
          "mit dem Bruckner Orchester ein Highlight-Konzert in den Großen Saal des Musiktheaters zu bringen. " +
          "Tom Bitterlich, Musikalischer Leiter Musical am Landestheater Linz, " +
          "bringt seine große Erfahrung in der Konzeption von Musical- und Popkonzerten mit großem Orchester " +
          "in dieses Projekt ein. Mit eigenen Arrangements für das um Rockmusiker erweiterte Bruckner Orchester Linz " +
          "präsentieren die Solistinnen und Solisten des Linzer Musicalensembles Hymnen, Hits und heimliche Favoriten " +
          "aus 100 Jahren Musical, Filmmusik, Pop und Rock – Überraschungen inbegriffen!");

      infoWirSindMusical.appendChild(infoTextWirSindMusical);
      infoBox.appendChild(infoWirSindMusical);
      break;

    case "Unter dem Gletscher":
      let infoUnterDemGletscher = document.createElement("p");
      let infoTextUnterDemGletscher = document.createTextNode("" +
          "Nachdem der isländische Autor Halldór Laxness 1955 den Literaturnobelpreis erhalten hatte, " +
          "erschien nach vielen weiteren lesenswerten und viel beachteten Werken 1968 sein Roman Am Gletscher. " +
          "Hier wird man Zeuge einer Reise in die isländische Provinz, " +
          "die mit einem ganzen Arsenal an schrullig-liebenswerten Charakteren aufwartet: Ein Pfarrer, " +
          "der seine Kirche zugenagelt hat und lieber Haushaltsgeräte repariert; ein dichtender LKW-Fahrer; " +
          "ein Turbokapitalist in einer Umgebung, in der Geld eine untergeordnete Rolle spielt; drei Hirten, " +
          "die sich so merkwürdig aufführen, dass man das, was sie sich allem Anschein nach eingeworfen haben, " +
          "auch gerne kosten würde; ein Lachs in einer Holzkiste auf dem Gletscher etc.");

      infoUnterDemGletscher.appendChild(infoTextUnterDemGletscher);
      infoBox.appendChild(infoUnterDemGletscher);
      break;

    case "Parsifal":
      let infoParsifal = document.createElement("p");
      let infoTextParsifal = document.createTextNode("" +
          "Parsifal – das ist die Schöpfung, mit der sich Richard Wagner als Künstler von der Welt verabschiedete. " +
          "Als er sich dieses Werks annahm, befand er sich an einem Wendepunkt seines Lebens: " +
          "1876 hatte er mit dem Festspielhaus in Bayreuth ein Theater eröffnen können, " +
          "das nur den Aufführungen seiner Werke gewidmet sein sollte. " +
          "Er hatte sich nun endgültig – wenn auch als Person und Künstler immer noch heftig umstritten " +
          "– als feste Größe im deutschen Kulturleben  etabliert. Und das merkt man seiner letzten Oper auch an. " +
          "Denn hier brauchte Wagner keinerlei Rücksichten mehr zu nehmen und war als Künstler ganz bei sich. " +
          "Und so ist dieses Bühnenweihfestspiel „echtester“ Wagner: authentisch, ausladend, magisch, packend, " +
          "fordernd und Erkenntnis fördernd.");

      infoParsifal.appendChild(infoTextParsifal);
      infoBox.appendChild(infoParsifal);
      break;

    case "Cinderella":
      let infoCinderella = document.createElement("p");
      let infoTextCinderella = document.createTextNode("" +
          "Ausgerechnet unter der strengen Knute des Stalinismus schrieb Sergej Prokofjew Anfang der 1940er-Jahre " +
          "eine der stärksten Ballettmusiken überhaupt. " +
          "Unter dem Titel Soluschka (Aschenputtel) " +
          "wurde das heute als Cinderella bekannte Ballett 1945 in Moskau uraufgeführt. " +
          "Nach der Vorlage von Charles Perraults Text entfaltet sich " +
          "das in fast allen Sprachen und Kulturkreisen erzählte, " +
          "zeitlose Märchen vom Aschenputtel als aufregendes Abenteuer der Selbstfindung einer jungen Frau " +
          "und als Parabel der Möglichkeit persönlicher Veränderung. " +
          "Weder Stiefmutter noch Stiefschwestern können einen Menschen aufhalten, " +
          "der unbeirrt den eigenen Träumen vertraut und sich von ihnen leiten lässt.");

      infoParsifal.appendChild(infoTextParsifal);
      infoBox.appendChild(infoParsifal);
      break;
  }
}

function writeCast(names){
  for (let i = 0; i < names.length; i++) {
    const contentWrapper = document.getElementById('cast');
    const newRow = document.createElement('div');
    const role = document.createElement('p');
    const name = document.createElement('p');

    role.textContent = names[i].role;
    name.textContent = names[i].name;

    role.style.fontWeight = 'bold';
    role.style.textAlign = 'right';
    name.style.textAlign = 'left';

    newRow.appendChild(role);
    newRow.appendChild(name);
    newRow.classList.add('castRow');
    contentWrapper.appendChild(newRow);
  }
}