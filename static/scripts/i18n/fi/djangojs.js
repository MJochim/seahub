

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%curr% of %total%": "%curr% kokonaism\u00e4\u00e4r\u00e4st\u00e4 %total%",
    "(current version)": "(nykyinen versio",
    "1 month ago": "1 kuukausi sitten",
    "1 week ago": "1 viikko sitten",
    "3 days ago": "3 p\u00e4iv\u00e4\u00e4 sitten",
    "<a href=\"%url%\" target=\"_blank\">The image</a> could not be loaded.": " href=\"%url%\" target=\"_blank\">Kuvaa</a> ei voitu ladata.",
    "A file with the same name already exists in this folder.": "Hakemistossa on jo saman niminen tiedosto.",
    "About": "Tietoa",
    "About Us": "Tietoa meist\u00e4",
    "Accepted": "Hyv\u00e4ksytty",
    "Access Log": "K\u00e4ytt\u00f6logi",
    "Action": "Toiminto",
    "Actions": "Toiminnot",
    "Active": "Aktiivinen",
    "Active Users": "Aktiiviset k\u00e4ytt\u00e4j\u00e4t",
    "Activities": "Aktiviteetit",
    "Add Admins": "Lis\u00e4\u00e4 Yll\u00e4pit\u00e4j\u00e4t",
    "Add Library": "Lis\u00e4\u00e4 kirjasto",
    "Add Member": "Lis\u00e4\u00e4 J\u00e4seni\u00e4",
    "Add User": "Lis\u00e4\u00e4 K\u00e4ytt\u00e4j\u00e4",
    "Add admin": "Lis\u00e4\u00e4 yll\u00e4pit\u00e4j\u00e4",
    "Add auto expiration": "Lis\u00e4\u00e4 automaattinen vanheneminen",
    "Add password protection": "Lis\u00e4\u00e4 salasanasuojaus",
    "Add user": "Lis\u00e4\u00e4 k\u00e4ytt\u00e4j\u00e4",
    "Added user {user}": "Lis\u00e4tty k\u00e4ytt\u00e4j\u00e4 {user}",
    "Admin": "Yll\u00e4pit\u00e4j\u00e4",
    "Admin Logs": "Admin Logit",
    "All": "Kaikki",
    "All Groups": "Kaikki ryhm\u00e4t",
    "All Public Links": "Kaikki julkiset linkit",
    "All file types": "Kaikki tiedostotyypit",
    "An integer that is greater than 0 or equal to -2.": "Integer joka on suurempi kuin 0 tai samansuuruinen kuin -2.",
    "Anonymous User": "Anonyymi k\u00e4ytt\u00e4j\u00e4",
    "Are you sure to delete": "Haluatko varmasti poistaa",
    "Are you sure you want to clear trash?": "Oletko varma, ett\u00e4 haluat tyhjent\u00e4\u00e4 roskakorin?",
    "Are you sure you want to delete %s ?": "Haluatko varmasti poistaa %s ?",
    "Are you sure you want to delete %s completely?": "Oletko varma, ett\u00e4 haluat poistaa %s kokonaan?",
    "Are you sure you want to delete all %s's libraries?": "Oletko varma, ett\u00e4 haluat poistaa kaikki %s's kirjastot?",
    "Are you sure you want to delete these selected items?": "Oletko varma, ett\u00e4 haluat poistaa n\u00e4m\u00e4 kohteet?",
    "Are you sure you want to quit this group?": "Oletko varma, ett\u00e4 haluat lopettaa t\u00e4m\u00e4n ryhm\u00e4n?",
    "Are you sure you want to restore %s?": "Oletko varma, ett\u00e4 haluat palauttaa %s?",
    "Are you sure you want to restore this library?": "Oletko varma, ett\u00e4 haluat palauttaa t\u00e4m\u00e4n kirjaston?",
    "Are you sure you want to unlink this device?": "Oletko varma, ett\u00e4 haluat poistaa yhdistetyn laitteen?",
    "Are you sure you want to unshare %s ?": "Oletko varma, ett\u00e4 haluat poistaa jaon %s ?",
    "Audio": "Audio",
    "Avatar": "Avatar",
    "Avatar:": "Avatar:",
    "Back": "Takaisin",
    "Broken (please contact your administrator to fix this library)": "Virheellinen (ole hyv\u00e4 ja ota yhteytt\u00e4 j\u00e4rjestelm\u00e4n yll\u00e4pit\u00e4j\u00e4\u00e4n korjataksesi t\u00e4m\u00e4n kirjaston)",
    "Can not copy directory %(src)s to its subdirectory %(des)s": "Hakemistoa %(src)s ei voi kopioida sen alihakemistoon %(des)s",
    "Can not move directory %(src)s to its subdirectory %(des)s": "Hakemistoa %(src)s ei voi siirt\u00e4\u00e4 sen alihakemistoon %(des)s",
    "Cancel": "Peruuta",
    "Cancel All": "Peruuta kaikki",
    "Canceled.": "Peruutettu.",
    "Change Password": "Vaihda salasana",
    "Change Password of Library {placeholder}": "Vaihda kirjaston {placeholder} salasana",
    "Clean": "Siivoa",
    "Clear Trash": "Tyhjenn\u00e4 Roskakori",
    "Clear files in trash and history\uff1a": "Poista historia ja tiedostot roskakorista :",
    "Clients": "Asiakasohjelmat",
    "Close": "Sulje",
    "Close (Esc)": "Sulje (Esc)",
    "Comment": "Kommentti",
    "Comments": "Kommentit",
    "Confirm Password": "Vahvista salasana",
    "Contact Email": "Yhteyss\u00e4hk\u00f6posti",
    "Contact Email:": "S\u00e4hk\u00f6posti",
    "Copy": "Kopioi",
    "Copy selected item(s) to:": "Kopioi valitut kohteet:",
    "Copy {placeholder} to:": "Kopioi {placeholder} kohteeseen:",
    "Copying %(name)s": "Kopioidaan %(name)s",
    "Copying file %(index)s of %(total)s": "Kopioidaan tiedostoa %(index)s kokonaism\u00e4\u00e4r\u00e4st\u00e4 %(total)s",
    "Count": "M\u00e4\u00e4r\u00e4",
    "Create At / Last Login": "Luotu / Kirjautunut",
    "Create Group": "Luo Ryhm\u00e4",
    "Create Library": "Luo Kirjasto",
    "Created At": "Luotu",
    "Created group {group_name}": "Luotu ryhm\u00e4 {group_name}",
    "Created library": "Luotiin kirjasto",
    "Created library {library_name} with {owner} as its owner": "Kirjasto {library_name} luotu omistajana {owner} ",
    "Creator": "Luoja",
    "Current Library": "Nykyinen kirjasto",
    "Current Path: ": "Nykyinen polku:",
    "Current Version": "Nykyinen versio",
    "Current path: ": "Nykyinen polku:",
    "Custom file types": "Muokatut tiedostotyypit",
    "Date": "P\u00e4iv\u00e4ys",
    "Delete": "Poista",
    "Delete Account": "Poista tili",
    "Delete Department": "Poista Osasto.",
    "Delete Group": "Tuhoa Ryhm\u00e4",
    "Delete Items": "Poista kohteita",
    "Delete Library": "Tuhoa Kirjasto",
    "Delete Library By Owner": "Poista kirjasto omistajalla",
    "Delete Member": "Poista J\u00e4sen",
    "Delete Time": "Poistoaika",
    "Delete User": "Poista k\u00e4ytt\u00e4j\u00e4",
    "Delete failed": "Poisto ep\u00e4onnistui",
    "Delete files from this device the next time it comes online.": "Poista tiedostot t\u00e4st\u00e4 laitteesta kun se seuraavan kerran tulee verkkoon.",
    "Deleted Libraries": "Poistetut Kirjastot",
    "Deleted Time": "Poistoaika",
    "Deleted directories": "Poistetut hakemistot",
    "Deleted files": "Poistetut tiedostot",
    "Deleted group {group_name}": "Tuhottu ryhm\u00e4 {group_name}",
    "Deleted library": "Poistettu kirjasto",
    "Deleted library {library_name}": "Poistettu kirjasto {library_name}",
    "Deleted user {user}": "Poistettu k\u00e4ytt\u00e4j\u00e4 {user}",
    "Departments": "Osastot",
    "Description": "Kuvaus",
    "Detail": "Selite",
    "Details": "Yksityiskohdat",
    "Device": "Laite",
    "Device Name": "Laitteen nimi",
    "Devices": "Laitteet",
    "Diff": "Erot",
    "Directory": "Hakemisto",
    "Disable Two-Factor Authentication": "Poista kaksisuuntainen tunnistautuminen k\u00e4yt\u00f6st\u00e4",
    "Dismiss Group": "Poistu ryhm\u00e4st\u00e4",
    "Document convertion failed.": "Dokumentin konversio ep\u00e4onnistui.",
    "Documents": "Dokumentit",
    "Don't keep history": "\u00c4l\u00e4 pid\u00e4 historiaa",
    "Don't replace": "\u00c4l\u00e4 korvaa",
    "Download": "Lataa",
    "Edit": "Muokkaa",
    "Edit failed": "Muokkaus ep\u00e4onnistui",
    "Edit failed.": "Muokkaus ep\u00e4onnistui.",
    "Edit labels": "Muokkaa etikettej\u00e4",
    "Edit on cloud and download": "Muokkaa pilvess\u00e4 ja lataa",
    "Email": "S\u00e4hk\u00f6posti",
    "Emails, separated by ','": "S\u00e4hk\u00f6postit, erotellaan ',' merkill\u00e4",
    "Empty file upload result": "Tiedoston l\u00e4hetys oli tulokseton",
    "Enable Two-Factor Authentication": "Ota k\u00e4ytt\u00f6\u00f6n Kaksisuuntainen Tunnistautuminen",
    "Encrypt": "Salattu",
    "Encrypted library": "Salattu kirjasto",
    "Error": "Virhe",
    "Expiration": "P\u00e4\u00e4ttyminen",
    "Expired": "Vanhentunut",
    "Failed to copy %(name)s": "%(name)s kopiointi ep\u00e4onnistui.",
    "Failed to delete %(name)s and %(amount)s other items.": "Ep\u00e4onnistuttiin poistamaan %(name)s ja %(amount)s muuta kohdetta.",
    "Failed to delete %(name)s and 1 other item.": "Ep\u00e4onnistuttiin poistamaan %(name)s ja 1 muu kohde.",
    "Failed to delete %(name)s.": "%(name)s poistaminen ep\u00e4onnistui.",
    "Failed to move %(name)s": "%(name)s siirt\u00e4minen ep\u00e4onnistui",
    "Failed to send to {placeholder}": "L\u00e4hett\u00e4minen kohteeseen {placeholder} ep\u00e4onnistui",
    "Failed.": "Ep\u00e4onnistui.",
    "Failed. Please check the network.": "Ep\u00e4onnistui. Ole hyv\u00e4 ja tarkista verkkoyhteys.",
    "Favorites": "Suosikit",
    "File": "Tiedosto",
    "File Access": "Tiedoston k\u00e4ytt\u00f6oikeudet",
    "File Update": "Tiedosto p\u00e4ivitys",
    "File Upload": "Tiedoston l\u00e4hett\u00e4minen ",
    "File Upload canceled": "Tiedoston l\u00e4hetys peruutettu",
    "File Upload complete": "Tiedoston l\u00e4hetys valmistui",
    "File Upload failed": "Tiedoston l\u00e4hetys ep\u00e4onnistui",
    "File Uploading...": "Tiedostoa l\u00e4hetet\u00e4\u00e4n...",
    "File download is disabled: the share link traffic of owner is used up.": "Tiedoston lataus on suljettu: linkin omistajan kaista on t\u00e4ynn\u00e4.",
    "File is locked": "Tiedosto on lukittu",
    "File is too big": "Tiedosto on liian suuri",
    "File is too small": "Tiedosto on liian pieni",
    "Files": "Tiedostot",
    "Filetype not allowed": "Tiedostotyyppi ei ole sallittu",
    "Folder": "Hakemisto",
    "Folder Permission": "Hakemiston oikeudet",
    "Folders": "Hakemistot",
    "Generate": "Luo",
    "Global Address Book": "Globaali Osoitekirja",
    "Grid": "Ruudukko",
    "Group": "Ryhm\u00e4",
    "Group Permission": "Ryhm\u00e4n oikeudet",
    "Groups": "Ryhm\u00e4t",
    "Groups allow multiple people to collaborate on libraries. Groups you join will be listed here.": "Ryhm\u00e4t sallivat useamman ihmisen tehd\u00e4 yhteisty\u00f6t\u00e4 kirjastoissa. Ryhm\u00e4t joihin liityt listataan t\u00e4ss\u00e4.",
    "Groups allow multiple people to collaborate on libraries. You can create a group by clicking the \"New Group\" button.": "Ryhm\u00e4t sallivat useamman ihmisen tehd\u00e4 yhteisty\u00f6t\u00e4 kirjastoissa. Voit luoda ryhm\u00e4n klikkaamalla \"Uusi Ryhm\u00e4\" nappia.",
    "Help": "Tuki",
    "Hide": "Piilota",
    "History": "Historia",
    "History Setting": "Historian asetukset",
    "IP": "IP",
    "If you don't have any device with you, you can access your account using backup codes.": "Jos teill\u00e4 ei ole mit\u00e4\u00e4n laitteita mukana, voit p\u00e4\u00e4st\u00e4 k\u00e4ytt\u00e4m\u00e4\u00e4n tili\u00e4si varakoodeilla.",
    "Image": "Kuva",
    "Images": "Kuvat",
    "In all libraries": "Kaikissa kirjastoissa",
    "Inactive": "Ei aktiivinen",
    "Info": "Info",
    "Input file extensions here, separate with ','": "Sy\u00f6t\u00e4 tiedostop\u00e4\u00e4tteet t\u00e4nne, erotettuna merkill\u00e4 ','",
    "Institutions": "Instituutiot",
    "Internal Server Error": "Sis\u00e4inen palvelinvirhe",
    "Internal error. Failed to copy %(name)s and %(amount)s other item(s).": "Sis\u00e4inen virhe. Ep\u00e4onnistuttiin kopioimaan %(name)s ja %(amount)s muuta kohdetta.",
    "Internal error. Failed to copy %(name)s.": "Sis\u00e4inen virhe. %(name)s kopiointi ep\u00e4onnistui.",
    "Internal error. Failed to move %(name)s and %(amount)s other item(s).": "Sis\u00e4inen virhe. Ep\u00e4onnistuttiin siirt\u00e4m\u00e4\u00e4n %(name)s ja %(amount)s muuta kohdetta.",
    "Internal error. Failed to move %(name)s.": "Sis\u00e4inen virhe. %(name)s siirt\u00e4minen ep\u00e4onnistui.",
    "Invalid destination path": "Virheellinen kohdepolku",
    "Invalid quota.": "Virheellinen kiinti\u00f6.",
    "Invitations": "Kutsut",
    "Invite People": "Kutsu Ihmisi\u00e4",
    "Invite Time": "Kutsu Aika",
    "It is required.": "Vaaditaan",
    "Just now": "Juuri nyt",
    "Keep full history": "Pid\u00e4 t\u00e4ysi historia",
    "Labels": "Etiketit",
    "Language": "Kieli",
    "Language Setting": "Kieliasetus",
    "Last Access": "Viimeisin k\u00e4ytt\u00f6",
    "Last Update": "Viimeisin p\u00e4ivitys",
    "Leave Share": "Poistu jaosta",
    "Libraries": "Kirjastot",
    "Libraries shared as writable can be downloaded and synced by other group members. Read only libraries can only be downloaded, updates by others will not be uploaded.": "Kirjastot jaettuna kirjoitusoikeudella voidaan ladata ja synkronoida ryhm\u00e4n j\u00e4senten johdosta. Lukuoikeudella jaetut kirjastot voidaan ainoastaan ladata, muiden tekemi\u00e4 p\u00e4ivityksi\u00e4 ei p\u00e4ivitet\u00e4 niihin.",
    "Library": "Kirjasto",
    "Library Type": "Kirjaston tyyppi",
    "Limits": "Rajat",
    "Link": "Linkki",
    "Linked Devices": "Yhdistetyt Laitteet",
    "Links": "Linkit",
    "List": "Listaa",
    "List your account in global address book, so that others can find you by typing your name.": "Listaa tilisi globaalissa osoitelistassa, jotta muut l\u00f6yt\u00e4v\u00e4t teid\u00e4t kirjoittamalla nimenne.",
    "Loading failed": "Lataus ep\u00e4onnistui",
    "Loading...": "Ladataan...",
    "Location": "Sijainti",
    "Lock": "Lukitse",
    "Log in": "Kirjaudu sis\u00e4\u00e4n",
    "Log out": "Kirjaudu ulos",
    "Logs": "Logi",
    "Manage Members": "Hallitse j\u00e4seni\u00e4",
    "Maximum number of files exceeded": "Tiedostojen maksimim\u00e4\u00e4r\u00e4 on ylitetty",
    "Member": "J\u00e4sen",
    "Members": "J\u00e4senet",
    "Message (optional):": "Viesti (valinnainen)",
    "Modification Details": "Muokkauksen yksityiskohdat",
    "Modified files": "Muokatut tiedostot",
    "Modifier": "Muokkaaja",
    "More": "Lis\u00e4\u00e4",
    "More Operations": "Lis\u00e4\u00e4 toimintoja",
    "Move": "Siirr\u00e4",
    "Move selected item(s) to:": "Siirr\u00e4 valitut kohteet:",
    "Move {placeholder} to:": "Siirr\u00e4 {placeholder} kohteeseen:",
    "Moving %(name)s": "Siirret\u00e4\u00e4n %(name)s",
    "Moving file %(index)s of %(total)s": "Siirret\u00e4\u00e4n tiedostoa %(index)s kokonaism\u00e4\u00e4r\u00e4st\u00e4 %(total)s",
    "My Groups": "Omat ryhm\u00e4t",
    "My Libraries": "Minun Kirjastot",
    "Name": "Nimi",
    "Name is required": "Nimi vaaditaan",
    "Name is required.": "Nimi vaaditaan.",
    "Name should not include '/'.": "Nimi ei voi sis\u00e4lt\u00e4\u00e4 '/'",
    "Network error": "Verkkovirhe",
    "New": "Uusi",
    "New Department": "Uusi Osasto",
    "New Department Library": "Uusi Osastokirjasto",
    "New Excel File": "Uusi Excel tiedosto",
    "New File": "Uusi Tiedosto",
    "New Folder": "Uusi Hakemisto",
    "New Group": "Uusi ryhm\u00e4",
    "New Library": "Uusi Kirjasto",
    "New Markdown File": "Uusi Markdown tiedosto",
    "New Password": "Uusi salasana",
    "New Password Again": "Uusi salasana uudestaan",
    "New PowerPoint File": "Uusi PowerPoint tiedosto",
    "New Sub-department": "Uusi Aliosasto",
    "New Wiki": "Uusi Wiki",
    "New Word File": "Uusi Word tiedosto",
    "New directories": "Uudet hakemistot",
    "New files": "Uudet tiedostot",
    "New password is too short": "Uusi salasana on liian lyhyt",
    "New passwords don't match": "Uudet salasanat eiv\u00e4t t\u00e4sm\u00e4\u00e4",
    "Next": "Seuraava",
    "Next (Right arrow key)": "Seuraava (Oikea nuolin\u00e4pp\u00e4in)",
    "No comment yet.": "Ei kommentteja viel\u00e4.",
    "No deleted libraries.": "Ei poistettuja kirjastoja.",
    "No departments": "Ei osastoja",
    "No libraries": "Ei kirjastoja",
    "No libraries have been shared directly with you. You can find more shared libraries at \"Shared with groups\".": "Kirjastoja ei ole sinulle henkil\u00f6kohtaisesti jaettu. Voit l\u00f6yt\u00e4\u00e4 lis\u00e4\u00e4 jaettuja kirjastoja kohdasta \"Jaettu ryhmille\".",
    "No libraries have been shared with you": "Sinun kanssasi ei ole jaettu kirjastoja",
    "No library is shared to this group": "Mit\u00e4\u00e4n kirjastoa ei ole jaettu t\u00e4lle ryhm\u00e4lle",
    "No matches": "Ei osumia",
    "No members": "Ei j\u00e4seni\u00e4",
    "No public libraries": "Ei julkisia kirjastoja",
    "No result": "Ei tulosta",
    "No sub-departments": "Ei aliosastoja",
    "None": "Ei mit\u00e4\u00e4n",
    "Notifications": "Ilmoitukset",
    "Old Password": "Vanha salasana",
    "Only Show": "N\u00e4yt\u00e4 vain",
    "Only an extension there, please input a name.": "Ainoastaan p\u00e4\u00e4tteet t\u00e4h\u00e4n, ole hyv\u00e4 ja anna nimi.",
    "Only keep a period of history:": "Pid\u00e4 historia ainoastaan tietyn ajan:",
    "Open in New Tab": "Avaa uudessa v\u00e4lilehdess\u00e4",
    "Open parent folder": "Avaa is\u00e4nt\u00e4kansio",
    "Open via Client": "Avaa asiakasohjelmassa",
    "Operation": "Toimenpide",
    "Operations": "Toiminnot",
    "Organization": "Organisaatio",
    "Organization Admin": "Organisaation hallinnoija",
    "Organizations": "Organisaatiot",
    "Other Libraries": "Muut kirjastot",
    "Owner": "Omistaja",
    "Packaging...": "Pakataan...",
    "Password": "Salasana",
    "Password again": "Salasana uudestaan",
    "Password is required.": "Salasana vaaditaan",
    "Password is too short": "Salasana on liian lyhyt",
    "Password:": "Salasana:",
    "Passwords don't match": "Salasanat eiv\u00e4t t\u00e4sm\u00e4\u00e4",
    "Permission": "Oikeus",
    "Permission denied": "Lupa ev\u00e4tty",
    "Permission error": "Virhe oikeuksissa",
    "Platform": "Alusta",
    "Please check the network.": "Ole hyv\u00e4 ja tarkista verkko.",
    "Please choose a CSV file": "Ole hyv\u00e4 ja valitse CSV-tiedosto",
    "Please click and choose a directory.": "Ole hyv\u00e4 ja valitse hakemisto.",
    "Please enter 1 or more character": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 1 tai useampi merkki",
    "Please enter a new password": "Ole hyv\u00e4 ja anna uusi salasana",
    "Please enter days": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 p\u00e4iv\u00e4t",
    "Please enter days.": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 p\u00e4iv\u00e4t.",
    "Please enter password": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 salasana",
    "Please enter the new password again": "Ole hyv\u00e4 ja anna uusi salasana uudelleen",
    "Please enter the old password": "Ole hyv\u00e4 ja anna vanha salasana",
    "Please enter the password again": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 salasana uudelleen",
    "Please enter valid days": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 validit p\u00e4iv\u00e4t",
    "Please input at least an email.": "Ole hyv\u00e4 ja sy\u00f6t\u00e4 ainakin s\u00e4hk\u00f6posti.",
    "Preview and download": "Esikatsele ja lataa",
    "Preview only": "Esikatselu ainoastaan",
    "Previous": "J\u00e4lkimm\u00e4inen",
    "Previous (Left arrow key)": "Edellinen (Vasen nuolin\u00e4pp\u00e4in)",
    "Processing...": "K\u00e4sitell\u00e4\u00e4n...",
    "Profile": "Profiili",
    "Profile Setting": "Profiilin asetus",
    "Quit Group": "Lopeta ryhm\u00e4",
    "Quota": "Kiinti\u00f6",
    "Read-Only": "Vain-Luku",
    "Read-Only library": "Vain luku kirjasto",
    "Read-Write": "Luku-Kirjoitus",
    "Read-Write library": "Luku-kirjoitus kirjasto",
    "Really want to delete your account?": "Haluatko varmasti poistaa tilin?",
    "Really want to dismiss this group?": "Haluatko varmasti poistua ryhm\u00e4st\u00e4?",
    "Refresh": "P\u00e4ivit\u00e4",
    "Remove": "Poista",
    "Removed all items from trash.": "Poistettu kaikki kohteet roskiksesta.",
    "Removed items older than {n} days from trash.": "Poistettu kohteita roskiksesta jotka ovat vanhempia kuin {n} p\u00e4iv\u00e4\u00e4.",
    "Rename": "Nime\u00e4 uudelleen",
    "Rename File": "Nime\u00e4 tiedosto uudelleen",
    "Rename Folder": "Nime\u00e4 kansio uudelleen",
    "Renamed or Moved files": "Uudelleen nimetyt tai siirretyt tiedostot",
    "Replace": "Korvaa",
    "Replace file {filename}?": "Korvaa tiedosto {filename}?",
    "Replacing it will overwrite its content.": "Korvaaminen kirjoittaa sis\u00e4ll\u00f6n yli.",
    "Reset Password": "Nollaa salasana",
    "ResetPwd": "Nollaa salasana",
    "Restore": "Palauta",
    "Restore Library": "Palauta Kirjasto",
    "Revoke Admin": "Kumoa yll\u00e4pit\u00e4j\u00e4",
    "Role": "Rooli",
    "Saving...": "Tallennetaan...",
    "Seafile": "Seafile",
    "Search Files": "Etsi tiedostoja",
    "Search files in this library": "Etsi tiedostoja t\u00e4st\u00e4 kirjastosta",
    "Search groups": "Etsi ryhmi\u00e4",
    "Search user or enter email and press Enter": "Etsi k\u00e4ytt\u00e4j\u00e4 tai sy\u00f6t\u00e4 s\u00e4hk\u00f6posti ja paina Enter",
    "Search users or enter emails and press Enter": "Etsi k\u00e4ytt\u00e4ji\u00e4 tai sy\u00f6t\u00e4 s\u00e4hk\u00f6postit ja paina Enter",
    "Searching...": "Etsit\u00e4\u00e4n...",
    "See All Notifications": "Katso kaikki ilmoitukset",
    "Select a group": "Valitse ryhm\u00e4",
    "Select groups": "Valitse ryhm\u00e4t",
    "Select libraries to share": "Valitse jaettavat kirjastot",
    "Send": "L\u00e4het\u00e4",
    "Send to:": "L\u00e4het\u00e4 kohteeseen:",
    "Sending...": "L\u00e4hett\u00e4\u00e4...",
    "Server Version: ": "Palvelimen versio:",
    "Set Quota": "Aseta kiinti\u00f6",
    "Set permission": "Aseta oikeudet",
    "Set user contact email": "Aseta k\u00e4ytt\u00e4j\u00e4n s\u00e4hk\u00f6posti yhteystieto",
    "Set user name": "Aseta k\u00e4ytt\u00e4j\u00e4tunnus",
    "Set {placeholder}'s permission": "Aseta oikeudet kohteelle {placeholder} ",
    "Settings": "Asetukset",
    "Share": "Jaa",
    "Share Admin": "Jakojen hallinta",
    "Share From": "Jaettu kohteesta",
    "Share Link": "Jakolinkki",
    "Share Links": "Jakolinkit",
    "Share To": "Jaa",
    "Share existing libraries": "Jaa olemassa olevia kirjastoja",
    "Share to group": "Jaa ryhm\u00e4lle",
    "Share to user": "Jaa k\u00e4ytt\u00e4j\u00e4lle",
    "Share {placeholder}": "Jaa {placeholder}",
    "Shared By": "Jakaja",
    "Shared by: ": "Jakaja:",
    "Shared with all": "Jaettu kaikille",
    "Shared with groups": "Jaettu ryhmille",
    "Shared with me": "Jaettu minulle",
    "Show": "N\u00e4yt\u00e4",
    "Show Codes": "N\u00e4yt\u00e4 Koodit",
    "Side Nav Menu": "Sivu Navigointi -valikko",
    "Size": "Koko",
    "Space Used": "Tilaa k\u00e4ytetty",
    "Space Used / Quota": "K\u00e4ytetty Tila / Kiinti\u00f6",
    "Start": "Aloita",
    "Start date should be earlier than end date.": "Aloitusp\u00e4iv\u00e4 tulee olla aikaisempi kuin p\u00e4\u00e4ttymisp\u00e4iv\u00e4.",
    "Statistic": "Tilastot",
    "Status": "Tila",
    "Sub-departments": "Aliosastot",
    "Submit": "Hyv\u00e4ksy",
    "Success": "Onnistui",
    "Successfully added label(s) for library {placeholder}": "Onnistuneesti lis\u00e4tty etiketti(t) kirjastolle {placeholder}",
    "Successfully changed library password.": "Kirjaston salasana vaihdettu onnistuneesti.",
    "Successfully clean all errors.": "Kaikki virheet on poistettu onnistuneesti.",
    "Successfully copied %(name)s": "Kohde %(name)s kopioitu onnistuneesti",
    "Successfully copied %(name)s and %(amount)s other items.": "Kopioitiin onnistuneesti %(name)s ja %(amount)s muuta kohdetta.",
    "Successfully copied %(name)s and 1 other item.": "Kopioitiin onnistuneesti %(name)s ja 1 muu kohde.",
    "Successfully copied %(name)s.": "%(name)s kopioitiin onnistuneesti.",
    "Successfully deleted %(name)s": "%(name)s poistettu onnistuneesti",
    "Successfully deleted %(name)s and %(amount)s other items.": "Poistettu onnistuneesti %(name)s ja %(amount)s muuta kohdetta.",
    "Successfully deleted %(name)s and 1 other item.": "Poistettu onnistuneesti %(name)s ja 1 muu kohde.",
    "Successfully deleted %(name)s.": "Poistettu onnistuneesti %(name)s",
    "Successfully deleted %s": "Poistettu onnistuneesti %s",
    "Successfully deleted 1 item": "Onnistuneesti tuhottu 1 kohde",
    "Successfully deleted 1 item.": "Onnistuneesti tuhottu 1 kohde.",
    "Successfully deleted library {placeholder}": "Onnistuneesti poistettu kirjasto {placeholder}",
    "Successfully deleted member {placeholder}": "Onnistuneesti poistettu j\u00e4sen {placeholder}",
    "Successfully deleted.": "Onnistuneesti tuhottu.",
    "Successfully edited labels.": "Onnistuneesti muokattu etikettej\u00e4.",
    "Successfully imported.": "Tuonti onnistui.",
    "Successfully invited %(email) and %(num) other people.": "Onnistuneesti kutsuttu %(email) ja %(num) muuta k\u00e4ytt\u00e4j\u00e4\u00e4.",
    "Successfully invited %(email).": "Onnistuneesti kutsuttu %(email).",
    "Successfully modified permission": "Oikeuksia muokattu onnistuneesti",
    "Successfully moved %(name)s": "Kohde %(name)s siirretty onnistuneesti",
    "Successfully moved %(name)s and %(amount)s other items.": "Siirrettiin onnistuneesti %(name)s ja %(amount)s muuta kohdetta.",
    "Successfully moved %(name)s and 1 other item.": "Siirrettiin onnistuneesti %(name)s ja 1 muu kohde.",
    "Successfully moved %(name)s.": "%(name)s siirretty onnistuneesti.",
    "Successfully reset password to %(passwd)s for user %(user)s.": "Salasana nollattu onnistuneesti. Uusi salasana k\u00e4ytt\u00e4j\u00e4lle %(user)s on %(passwd)s.",
    "Successfully restored 1 item.": "Onnistuneesti palautettu 1 kohde.",
    "Successfully restored library {placeholder}": "Onnistuneesti palautettu kirjasto {placeholder}",
    "Successfully restored the library.": "Kirjasto palautettu onnistuneesti.",
    "Successfully revoke the admin permission of %s": "Yll\u00e4pit\u00e4j\u00e4n oikeudet poistettu onnistuneesti k\u00e4ytt\u00e4j\u00e4lt\u00e4 %s",
    "Successfully sent to {placeholder}": "L\u00e4hetetty onnistuneesti kohteeseen {placeholder}",
    "Successfully set %s as admin.": "Onnistuneesti asetettu %s yll\u00e4pit\u00e4j\u00e4ksi",
    "Successfully set library history.": "Kirjaston historia asetettu onnistuneesti.",
    "Successfully transferred the group.": "Ryhm\u00e4 siirrettiin onnistuneesti.",
    "Successfully transferred the group. You are now a normal member of the group.": "Ryhm\u00e4n vaihto onnistui. Olet nyt ryhm\u00e4n perusk\u00e4ytt\u00e4j\u00e4.",
    "Successfully transferred the library.": "Kirjasto siirretty onnistuneesti.",
    "Successfully unlink %(name)s.": "Kohteen %(name)s linkki poistettu onnistuneesti",
    "Successfully unshared 1 item.": "Onnistuneesti poistettu jako 1 kohteesta.",
    "Successfully unshared library {placeholder}": "Kirjaston jako {placeholder} poistettiin onnistuneesti",
    "Successfully unstared {placeholder}": "Suosikki {placeholder} poistettu onnistuneesti",
    "System Admin": "J\u00e4rjestelm\u00e4n hallinta",
    "Tag should not include ','.": "Tagi ei voi sis\u00e4lt\u00e4\u00e4 ','.",
    "Tags": "Tagit",
    "Terms and Conditions": "K\u00e4ytt\u00f6ehdot",
    "Text": "Teksti",
    "Text files": "Tekstitiedostot",
    "The password will be kept in the server for only 1 hour.": "Salasanaa pidet\u00e4\u00e4n palvelimella vain 1 tunti.",
    "This is a special group representing a department.": "T\u00e4m\u00e4 on erityisryhm\u00e4, joka edustaa osastoa.",
    "This library is password protected": "T\u00e4m\u00e4 hakemisto on suojattu salasanalla",
    "This operation will not be reverted. Please think twice!": "T\u00e4t\u00e4 toimintoa ei voi perua. Ole hyv\u00e4 ja harkitse kahdesti!",
    "Time": "Aika",
    "Tip: -2 means no limit.": "Vinkki: -2 tarkoittaa ei rajaa.",
    "Tip: 0 means default limit": "Vinkki: 0 tarkoittaa oletuskiinti\u00f6t\u00e4",
    "Tip: a snapshot will be generated after modification, which records the library state after the modification.": "Vinkki: Kirjaston tilannekuva tallennetaan muokkauksen j\u00e4lkeen.",
    "Tip: libraries deleted 30 days ago will be cleaned automatically.": "Vinkki: 30 p\u00e4iv\u00e4\u00e4 sitten poistetut kirjastot siivotaan automaattisesti.",
    "Tools": "Ty\u00f6kalut",
    "Total Users": "K\u00e4ytt\u00e4ji\u00e4 yhteens\u00e4",
    "Transfer": "Siirr\u00e4",
    "Transfer Group": "Siirr\u00e4 Ryhm\u00e4",
    "Transfer Group {group_name} To": "Siirr\u00e4 ryhm\u00e4 {group_name}",
    "Transfer Library": "Siirr\u00e4 Kirjasto",
    "Transfer Library {library_name} To": "Siirr\u00e4 kirjasto {library_name} kohteeseen",
    "Transferred group {group_name} from {user_from} to {user_to}": "Siirr\u00e4 ryhm\u00e4 {group_name} k\u00e4ytt\u00e4j\u00e4lt\u00e4 {user_from} k\u00e4ytt\u00e4j\u00e4lle {user_to}",
    "Transferred library {library_name} from {user_from} to {user_to}": "Siirr\u00e4 kirjasto {library_name} k\u00e4ytt\u00e4j\u00e4lt\u00e4 {user_from} k\u00e4ytt\u00e4j\u00e4lle {user_to}",
    "Trash": "Roskakori",
    "Two-Factor Authentication": "Kaksisuuntainen tunnistautuminen",
    "Two-factor authentication is not enabled for your account. Enable two-factor authentication for enhanced account security.": "Kaksitasoinen todennus ei ole k\u00e4yt\u00f6ss\u00e4 tiliss\u00e4si. Ota kaksitasoinen tunnistus k\u00e4ytt\u00f6\u00f6n suojataksesi paremmin tilisi.",
    "Type": "Tyyppi",
    "Unknown": "Tuntematon",
    "Unlink": "Poista linkki",
    "Unlink device": "Poista yhdistetty laite",
    "Unlock": "Poista lukitus",
    "Unshare": "Poista jako",
    "Unshare Library": "Poista kirjaton jako",
    "Unstar": "Poista merkint\u00e4",
    "Update": "P\u00e4ivit\u00e4",
    "Upload": "Lis\u00e4\u00e4",
    "Upload Files": "Lis\u00e4\u00e4 tiedostoja",
    "Upload Folder": "Lis\u00e4\u00e4 kansio",
    "Upload Link": "L\u00e4hetyslinkki",
    "Upload Links": "L\u00e4hetyslinkit",
    "Uploaded bytes exceed file size": "L\u00e4htetyt tavut ylitt\u00e4v\u00e4t tiedoston koon",
    "Used:": "K\u00e4ytetty:",
    "User": "K\u00e4ytt\u00e4j\u00e4",
    "User Permission": "K\u00e4ytt\u00e4j\u00e4n oikeudet",
    "Username:": "K\u00e4ytt\u00e4j\u00e4nimi:",
    "Users": "K\u00e4ytt\u00e4j\u00e4t",
    "Version": "Versiot",
    "Video": "Video",
    "View": "Katso",
    "View Snapshot": "Katso tilannekuva",
    "Virus Scan": "Virusskannaus",
    "Visits": "Vierailut",
    "Wrong password": "V\u00e4\u00e4r\u00e4 salasana",
    "You are not in any groups": "Et ole miss\u00e4\u00e4n ryhm\u00e4ss\u00e4",
    "You can create a library to organize your files. For example, you can create one for each of your projects. Each library can be synchronized and shared separately.": "Voida luoda kirjaston j\u00e4rjest\u00e4\u00e4ksesi tiedostot. Esimerkiksi, voit luoda yhden kirjaston jokaiselle projektillesi. Jokaisen kirjaston voi synkronoida ja jakaa erikseen.",
    "You can create a public library by clicking the \"New Library\" button, others can view and download this library.": "Voit luoda julkisen kirjaston klikkaamalla \"Lis\u00e4\u00e4 kirjasto\" painiketta, muut voivat katsella ja ladata t\u00e4st\u00e4 kirjastosta.",
    "You can create libraries by clicking the \"New Library\" button above.": "Voit luoda kirjastoja painamalla \"Uusi Kirjasto\" nappia ylh\u00e4\u00e4ll\u00e4.",
    "You can generate an upload link from any folder. Anyone who receives this link can upload files to this folder.": "Voit luoda l\u00e4hetyslinkin mist\u00e4 tahansa hakemistosta. Kaikki jotka saavat t\u00e4m\u00e4n linkin voivat l\u00e4hett\u00e4\u00e4 tiedostoja t\u00e4h\u00e4n hakemistoon.",
    "You can only select 1 item": "Voit valita vain yhden kohteen",
    "You can share a single folder with a registered user if you don't want to share a whole library.": "Voit jakaa hakemiston rekister\u00f6ityneen k\u00e4ytt\u00e4j\u00e4n kanssa, jos et halua jakaa koko kirjastoa.",
    "You can share libraries by clicking the \"New Library\" button above or the \"Share\" icon on your libraries list.": "Voit jakaa kirjastoja klikkaamalla ylh\u00e4\u00e4ll\u00e4 \"Uusi Kirjasto\"-painiketta tai \"Jaa\"-ikonia kirjastolistauksessa.",
    "You can share libraries with your friends and colleagues by clicking the share icon of your own libraries in your home page or creating a new library in groups you are in.": "Voit jakaa kirjastoja yst\u00e4villesi ja kollegoillesi klikkaamalla jaa ikonia kotisivusi omista kirjastoista tai lis\u00e4\u00e4m\u00e4ll\u00e4 uuden kirjaston ryhmiin johon kuulut.",
    "You can use this field at login.": "Voit k\u00e4ytt\u00e4\u00e4 t\u00e4t\u00e4 kentt\u00e4\u00e4 kirjautumisessa.",
    "You cannot select any more choices": "Et voi tehd\u00e4 enemp\u00e4\u00e4 valintoja",
    "You do not have connected devices": "Sinulla ei ole yhdistettyj\u00e4 laitteita",
    "You don't have any upload links": "Sinulla ei ole yht\u00e4\u00e4n l\u00e4hetyslinkki\u00e4",
    "You have logged out.": "Olet kirjautunut ulos.",
    "You have not created any libraries": "Et ole luonut yht\u00e4\u00e4n kirjastoa",
    "You have not invited any people.": "Et ole kutsunut yht\u00e4\u00e4n ihmist\u00e4.",
    "You have not shared any libraries": "Et ole jakanut yht\u00e4\u00e4n kirjastoa",
    "Your clients (Desktop/Android/iOS) will be listed here.": "Sinun asiakasohjelmat (Ty\u00f6p\u00f6yt\u00e4/Android/iOS) listataan t\u00e4ss\u00e4.",
    "Your notifications will be sent to this email.": "Sinun ilmoitukset l\u00e4hetet\u00e4\u00e4n t\u00e4h\u00e4n s\u00e4hk\u00f6postiin.",
    "all": "kaikki",
    "all members": "kaikki k\u00e4ytt\u00e4j\u00e4t",
    "canceled": "peruutettu",
    "days": "p\u00e4iv\u00e4\u00e4",
    "file": "tiedosto",
    "icon": "ikoni",
    "locked": "lukittu",
    "locked by {placeholder}": "lukittu {placeholder} toimesta",
    "name": "nimi",
    "starred": "suosikki",
    "to": "vastaanottaja",
    "unstarred": "ei suosikki",
    "uploaded": "l\u00e4hetetty",
    "you can also press \u2190 ": "voit painaa my\u00f6s \u2190 ",
    "{placeholder} Folder Permission": "{placeholder} Kansion oikeus",
    "{placeholder} History Setting": "{placeholder} Historia-asetukset",
    "{placeholder} Members": "{placeholder} J\u00e4senet",
    "{placeholder} Share Links": "{placeholder} Jakolinkit"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j. E Y \\k\\e\\l\\l\\o G.i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H.%M.%S",
      "%d.%m.%Y %H.%M.%S.%f",
      "%d.%m.%Y %H.%M",
      "%d.%m.%Y",
      "%d.%m.%y %H.%M.%S",
      "%d.%m.%y %H.%M.%S.%f",
      "%d.%m.%y %H.%M",
      "%d.%m.%y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j. E Y",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": "1",
    "MONTH_DAY_FORMAT": "j. F",
    "NUMBER_GROUPING": "3",
    "SHORT_DATETIME_FORMAT": "j.n.Y G.i",
    "SHORT_DATE_FORMAT": "j.n.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "G.i",
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S",
      "%H.%M.%S.%f",
      "%H.%M",
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

