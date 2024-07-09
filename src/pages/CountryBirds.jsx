import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/CountryBirds.module.css";

// Example bird data
const birdData = {
  "France": ["European Robin", "Eurasian Sparrowhawk", "Eurasian Jay"],
  "United Kingdom": ["Common Pheasant", "Eurasian Wren", "European Robin", "Eurasian Bullfinch", "Common Blackbird"],
  "Germany": ["Eurasian Sparrowhawk", "Eurasian Blue Tit", "Eurasian Jay"],
  "Italy": ["Eurasian Jay", "Eurasian Blue Tit", "Eurasian Collared Dove"],
  "Spain": ["Eurasian Magpie", "Eurasian Jay", "Eurasian Sparrowhawk"],
  "Russia": ["Steller's Sea Eagle", "Siberian Jay", "Red-flanked Bluetail", "Siberian Crane"],
  "China": ["Chinese Bamboo Partridge", "Red-crowned Crane", "Chinese Thrush", "Chinese Nuthatch"],
  "Japan": ["Japanese White-eye", "Japanese Robin", "Japanese Cormorant", "Japanese Wagtail"],
  "India": ["Indian Peafowl", "Indian Roller", "Indian Pond Heron", "Painted Stork"],
  "Albania": ["Albanian Rock Sparrow", "Albanian Water Rail", "Albanian Yellow Wagtail"],
  "Andorra": ["Andorran Woodpecker", "Andorran Cuckoo", "Andorran Nightingale"],
  "Armenia": ["Armenian Gull", "Armenian Finch", "Armenian Wheatear"],
  "Austria": ["Austrian Blackbird", "Austrian Chaffinch", "Austrian Goldcrest"],
  "Azerbaijan": ["Azerbaijani Warbler", "Azerbaijani Sparrow", "Azerbaijani Nightjar"],
  "Belarus": ["Belarusian Swallow", "Belarusian Woodpecker", "Belarusian Thrush"],
  "Belgium": ["Belgian Wren", "Belgian Wagtail", "Belgian Pigeon"],
  "Bhutan": ["Bhutanese Eagle", "Bhutanese Partridge", "Bhutanese Thrush"],
  "Bosnia and Herzegovina": ["Bosnian Tit", "Bosnian Sparrow", "Bosnian Wagtail"],
  "Brunei": ["Bruneian Bulbul", "Bruneian Kingfisher", "Bruneian Pheasant"],
  "Bulgaria": ["Bulgarian Nightingale", "Bulgarian Finch", "Bulgarian Sparrow"],
  "Cambodia": ["Cambodian Falcon", "Cambodian Parakeet", "Cambodian Swift"],
  "Croatia": ["Croatian Nightjar", "Croatian Warbler", "Croatian Owl"],
  "Cyprus": ["Cypriot Warbler", "Cypriot Owl", "Cypriot Sparrow"],
  "Czech Republic": ["Czech Finch", "Czech Kingfisher", "Czech Magpie"],
  "Denmark": ["Danish Eagle", "Danish Nightingale", "Danish Swallow"], 
  "Estonia": ["Estonian Sparrow", "Estonian Woodpecker", "Estonian Wagtail"],
  "Finland": ["Finnish Robin", "Finnish Jay", "Finnish Pigeon"],
  "Georgia": ["Georgian Nightingale", "Georgian Sparrow", "Georgian Warbler"],
  "Greece": ["Greek Eagle", "Greek Nightingale", "Greek Swallow"],
  "Hungary": ["Hungarian Finch", "Hungarian Kingfisher", "Hungarian Sparrow"],
  "Iceland": ["Icelandic Falcon", "Icelandic Puffin", "Icelandic Raven"],
  "Iran": ["Iranian Bulbul", "Iranian Kingfisher", "Iranian Partridge"],
  "Iraq": ["Iraqi Finch", "Iraqi Jay", "Iraqi Nightingale"],
  "Ireland": ["Irish Sparrow", "Irish Robin", "Irish Wagtail"],
  "Israel": ["Israeli Sparrow", "Israeli Warbler", "Israeli Woodpecker"],
  "Jordan": ["Jordanian Eagle", "Jordanian Owl", "Jordanian Pheasant"],
  "Kazakhstan": ["Kazakh Eagle", "Kazakh Falcon", "Kazakh Nightingale"],
  "Kyrgyzstan": ["Kyrgyz Eagle", "Kyrgyz Finch", "Kyrgyz Sparrow"],
  "Latvia": ["Latvian Nightingale", "Latvian Sparrow", "Latvian Woodpecker"],
  "Lebanon": ["Lebanese Sparrow", "Lebanese Warbler", "Lebanese Woodpecker"],
  "Liechtenstein": ["Liechtenstein Finch", "Liechtenstein Nightingale", "Liechtenstein Owl"],
  "Lithuania": ["Lithuanian Eagle", "Lithuanian Finch", "Lithuanian Sparrow"],
  "Luxembourg": ["Luxembourg Sparrow", "Luxembourg Wagtail", "Luxembourg Nightingale"],
  "Macedonia": ["Macedonian Nightingale", "Macedonian Sparrow", "Macedonian Woodpecker"],
  "Malaysia": ["Malaysian Bulbul", "Malaysian Kingfisher", "Malaysian Pheasant"],
  "Maldives": ["Maldivian Finch", "Maldivian Kingfisher", "Maldivian Sparrow"],
  "Malta": ["Maltese Nightingale", "Maltese Sparrow", "Maltese Warbler"],
  "Moldova": ["Moldovan Eagle", "Moldovan Nightingale", "Moldovan Sparrow"],
  "Monaco": ["Monacan Sparrow", "Monacan Warbler", "Monacan Woodpecker"],
  "Mongolia": ["Mongolian Eagle", "Mongolian Finch", "Mongolian Sparrow"],
  "Montenegro": ["Montenegrin Nightingale", "Montenegrin Sparrow", "Montenegrin Woodpecker"],
  "Myanmar": ["Myanmar Eagle", "Myanmar Kingfisher", "Myanmar Nightingale"],
  "Nepal": ["Nepali Eagle", "Nepali Finch", "Nepali Nightingale"],
  "Netherlands": ["Dutch Sparrow", "Dutch Nightingale", "Dutch Woodpecker"],
  "North Korea": ["North Korean Eagle", "North Korean Finch", "North Korean Nightingale"],
  "Norway": ["Norwegian Eagle", "Norwegian Nightingale", "Norwegian Sparrow"],
  "Pakistan": ["Pakistani Eagle", "Pakistani Finch", "Pakistani Nightingale"],
  "Poland": ["Polish Eagle", "Polish Finch", "Polish Nightingale"],
  "Portugal": ["Portuguese Eagle", "Portuguese Finch", "Portuguese Nightingale"],
  "Romania": ["Romanian Eagle", "Romanian Finch", "Romanian Nightingale"],
  "San Marino": ["Sanmarinese Eagle", "Sanmarinese Nightingale", "Sanmarinese Sparrow"],
  "Serbia": ["Serbian Eagle", "Serbian Finch", "Serbian Nightingale"],
  "Slovakia": ["Slovakian Eagle", "Slovakian Finch", "Slovakian Nightingale"],
  "Slovenia": ["Slovenian Eagle", "Slovenian Finch", "Slovenian Nightingale"],
  "South Korea": ["South Korean Eagle", "South Korean Finch", "South Korean Nightingale"],
  "Sri Lanka": ["Sri Lankan Eagle", "Sri Lankan Finch", "Sri Lankan Nightingale"],
  "Sweden": ["Swedish Eagle", "Swedish Finch", "Swedish Nightingale"],
  "Switzerland": ["Swiss Eagle", "Swiss Finch", "Swiss Nightingale"],
  "Syria": ["Syrian Eagle", "Syrian Finch", "Syrian Nightingale"],
  "Tajikistan": ["Tajik Eagle", "Tajik Finch", "Tajik Nightingale"],
  "Thailand": ["Thai Eagle", "Thai Finch", "Thai Nightingale"],
  "Turkey": ["Turkish Eagle", "Turkish Finch", "Turkish Nightingale"],
  "Turkmenistan": ["Turkmen Eagle", "Turkmen Finch", "Turkmen Nightingale"],
  "Ukraine": ["Ukrainian Eagle", "Ukrainian Finch", "Ukrainian Nightingale"],
  "Uzbekistan": ["Uzbekistani Eagle", "Uzbekistani Finch", "Uzbekistani Nightingale"],
  "Vietnam": ["Vietnamese Eagle", "Vietnamese Finch", "Vietnamese Nightingale"],
};
const CountryBirds = () => {
  const { countryName } = useParams();

  // Retrieve bird list based on countryName
  const birds = birdData[countryName];

  return (
    <div className={styles.countryBirdsPage}>
      <h2>Look at all those pretty birds that live in {countryName}!</h2>
      {birds ? (
        <ul>
          {birds.map((bird, index) => (
            <li key={index}>{bird}</li>
          ))}
        </ul>
      ) : (
        <p>No bird data available for {countryName}.</p>
      )}

      {/* Back to Map button */}
      <div className={styles.backButton}>
        <Link to="/map" className={styles.backLink}>
          Back to Map
        </Link>
      </div>
    </div>
  );
};

export default CountryBirds;
