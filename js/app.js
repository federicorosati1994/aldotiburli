// Import the favicon
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-57x57.png';
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-60x60.png';
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-72x72.png';
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-76x76.png';
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-114x114.png';
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-120x120.png';
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-144x144.png';
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-152x152.png';
import '!file-loader?name=[name].[ext]!../favicons/apple-touch-icon-180x180.png';
import '!file-loader?name=[name].[ext]!../favicons/favicon-32x32.png';
import '!file-loader?name=[name].[ext]!../favicons/favicon-194x194.png';
import '!file-loader?name=[name].[ext]!../favicons/android-chrome-192x192.png';
import '!file-loader?name=[name].[ext]!../favicons/favicon-16x16.png';

// Import the manifest.json file
import '!file-loader?name=[name].[ext]!../favicons/manifest.json';

//Import css
import "bootstrap/dist/css/bootstrap.min.css"
import "fancybox/dist/css/jquery.fancybox.css" 
import "../css/flickity.css"
import "../css/animate.css"
import "font-awesome/css/font-awesome.min.css"
import "../css/styles.css" 
import "../css/queries.css" 
import "../css/aldo.css" 

//Import Js
import 'Modernizr'
import $ from 'jquery';
require('fancybox')($); //mini workaround per fare funzionare fancybox (che e' super vecchia)
import 'bootstrap';
import 'flickity';
import './retina'
import './waypoints.min'
//import './wow'
import './min/toucheffects-min'
import './scripts'
//Hotjar
//Google Analytics