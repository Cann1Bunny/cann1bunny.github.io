//linking  Source Sans Pro font
var font = document.createElement("LINK");
font.href = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro';
font.rel = 'stylesheet';
document.head.appendChild(font);

//setting font family for document
document.body.style.fontFamily = 'Source Sans Pro, sans-serif';

//setting colors body tag
document.body.style.backgroundColor = '#333';
document.body.style.color = '#969486';

//setting margin for body tag
document.body.style.marginTop = '80px';

//making the body a flex-container
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.textAlign = 'center';

//generating header tag
var header = document.createElement('HEADER');

//generating header logotype
var logo = document.createElement('IMG');
header.appendChild(logo);

//generating  header title
var title = document.createElement('H1');
var titleText = document.createTextNode('Club Suffering Idiocy');
header.appendChild(title);
title.appendChild(titleText);

//generating header subtitle
var subtitle = document.createElement('H2');
var subtitleText = document.createTextNode('Soon fucking up the monitor, maybe...');
header.appendChild(subtitle);
subtitle.appendChild(subtitleText);

//setting attributes for logotype
logo.setAttribute('src', 'files/logo.svg');
logo.setAttribute('height', '256');

//setting attributes for title
title.style.marginTop = '0px';
title.style.marginBottom = '40px';
title.style.fontSize = '64px';

//setting attributes for subtitle
subtitle.style.marginTop = '0px';
subtitle.style.fontSize = '24px';

//inserting header and footer blocks in document
document.body.appendChild(header);