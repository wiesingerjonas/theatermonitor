let d = new Date();

window.addEventListener('load', () => {
  const dates = [
    {play: 'Der Bettelstudent', date: '29.11.2019'},
    {play: 'Sister Act', date: '30.11.2019'},
    {play: 'Carmina Burana', date: '1.12.2019'},
    {play: 'Die Entführung Aus Dem Serail', date: '3.12.2019'},
    {play: 'Der Bettelstudent', date: '4.12.2019'},
    {play: 'Die Entführung Aus Dem Serail', date: '6.12.2019'},
    {play: 'Le Sacre Du Printemps', date: '7.12.2019'},
    {play: 'Die Entführung Aus Dem Serail', date: '8.12.2019'},
    {play: 'Die Entführung Aus Dem Serail', date: '10.12.2019'},
    {play: 'Le Sacre Du Printemps', date: '11.12.2019'},
    {play: 'Le Prophète', date: '12.12.2019'},
    {play: 'Der Bettelstudent', date: '13.12.2019'},
    {play: 'Sister Act', date: '15.12.2019'},
    {play: 'Carmina Burana', date: '17.12.2019'},
    {play: 'Sister Act', date: '19.12.2019'},
    {play: 'Sister Act', date: '20.12.2019'},
    {play: 'Die Entführung Aus Dem Serail', date: '21.12.2019'},
    {play: 'Der Bettelstudent', date: '22.12.2019'},
    {play: 'Der Bettelstudent', date: '25.12.2019'},
    {play: 'Die Entführung Aus Dem Serail', date: '26.12.2019'},
    {play: 'Sister Act', date: '27.12.2019'},
    {play: 'Carmina Burana', date: '28.12.2019'},
    {play: 'Der Bettelstudent', date: '31.12.2019'}
  ];

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

  const castDieEntführungAusDemSerail = [
    {name: 'Hans SChöpflin', role: 'Selim, Bassa'},
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

  let todaysIndex = getTodaysIndex(dates)
  let nextPlay = dates[todaysIndex].play;
  let nextDate = dates[todaysIndex].date;

  changeBgimg(nextPlay);

  changeInfo(nextPlay);

  switch (nextPlay) {
    case "Le Prophète":
      writeCast(castLeProphete);
      break;

    case "Sister Act":
      writeCast(castSisteract);
      break;

    case "Der Bettelstudent":
      writeCast(castDerBettelstudent);
      break;

    case "Le Sacre Du Printemps":
      writeCast(castLeSacreDuPrintemps);
      break;

    case "Die Entführung aus dem Serail":
      writeCast(castDieEntführungAusDemSerail);
      break;

    case "Carmina Burana":
      writeCast(castCarminaBurana);
      break;
  }


  for (let i = todaysIndex; i < dates.length; i++) {
    const contentWrapper = document.getElementById('events');
    const newRow = document.createElement('div');
    const play = document.createElement('p');
    const date = document.createElement('p');

    play.textContent = dates[i].play;
    date.textContent = dates[i].date;

    play.style.fontWeight = 'bold';
    play.style.textAlign = 'right';
    date.style.textAlign = 'left';

    newRow.appendChild(play);
    newRow.appendChild(date);
    newRow.classList.add('dateRow');
    contentWrapper.appendChild(newRow);
  }
});

function getTodaysIndex(dates) {
  const thisMonth = d.getMonth()+1;
  const thisDay = d.getDate();

  for (let i = 0; i < dates.length; i++) {
    let month = dates[i].date.split('.')[1];
    if(month == thisMonth){
      for (let j = i; i < dates.length; j++) {
        let day = dates[j].date.split('.')[0];
        if(day >= thisDay){
          return i;
        }
      }
    }
  }
}

function changeBgimg(play){
  switch (play) {
    case "Le Prophète":
      document.body.style.backgroundImage = "url('../img/stueckbilder/le_prophete.png')";
      break;

    case "Sister Act":
      document.body.style.backgroundImage = "url('../img/stueckbilder/sisteract.png')";
      break;

    case "Der Bettelstudent":
      document.body.style.backgroundImage = "url('../img/stueckbilder/der_bettelstudent.png')";
      break;

    case "Le Sacre Du Printemps":
      document.body.style.backgroundImage = "url('../img/stueckbilder/lesacredeprintemps.png')";
      break;

    case "Die Entführung aus dem Serail":
      document.body.style.backgroundImage = "url('../img/stueckbilder/dieentfuehrungausdemserail.png')";
      break;
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
      let infoDieEntführungAusDemSerail = document.createElement("p");
      let infoTextDieEntführungAusDemSerail = document.createTextNode("1911. Konstanze reist mit ihrer Assistentin Blonde und dem Kameramann Pedrillo in die Sahara Nordafrikas, " +
      "um atemberaubende Bilder der Wüste und umherziehender Nomaden aufzunehmen. " +
      "Dabei geraten sie in die Gefangenschaft einheimischer Beduinenstämme, " +
      "die ein hohes Lösegeld erpressen wollen. Bassa Selim, der als militärischer Gouverneur einen Teil des Osmanischen Reiches regiert," +
      " kauft die Geiseln frei und überführt sie in seinen Palast. Dort leben Konstanze, " +
      "Blonde und Pedrillo mehr oder weniger unter Hausarrest, bis Belmonte, Konstanzes Verlobter, " +
      "mit einem Schiff zu einem waghalsigen Befreiungsmanöver ansetzt …");

      infoDieEntführungAusDemSerail.appendChild(infoTextDieEntführungAusDemSerail);
      infoBox.appendChild(infoDieEntführungAusDemSerail);
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
