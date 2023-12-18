// Sample percentage value (change this to your actual percentage)
var percentage = 99;

// Set up the chart dimensions
var width = 500;
var height = 30;

// Create an SVG container
var svg = d3.select("#chart-container")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create the background bar (in a different color)
svg.append("rect")
  .attr("width", width)
  .attr("height", height)
  .attr("fill", "#e0e0e0");

function changeContent() {
  // Get the selected value from the dropdown
  var selectedValue = document.getElementById("myDropdown").value;
  console.log("Selected Value: " + selectedValue);
}
  
  // Define content for each page
  var pageContent = {
    'Common': 
      <img src="gingerbrave.jpg" alt="Common Cookie"
        width="400"
      '<p>Common cookies are what you get when you first start off the game. Common Cookies are those of the lowest, most obtainable Cookie Rarity in Cookie Run: Kingdom. The odds for obtaining them or their respective Soulstones in the Gacha are very high, making them the likeliest Cookies for players to promote to maximum. Their Stats are notably lower than those of Cookies from other Cookie Rarities, but that does not mean they are without use. Common Cookies can hold their own in the early chapters of the World Exploration, and they can be adequate placeholders while working towards obtaining higher Rarity Cookies. Still, investing Toppings and Skill Powders may not be worth it for most of these Cookies in the long-run.' 
    <img src="Common.JPG" alt="Common Numbers"
      width="400",
    'Rare': 
      <img src="rarecookies" alt="Rare Cookie"
        width="400"
        '<p>Rare Cookies are those of the second lowest Cookie Rarity in Cookie Run: Kingdom. The odds for obtaining them or their respective Soulstones in the Gacha are average. The utility of different Cookies in this Rarity vary greatly; some can outperform Epic Cookies in certain roles, while others can be less effective than even Common Cookies. For new players, Rare Cookies will do the job of substituting for missing team roles as they clear through World Exploration Stages, as well as in the first few tiers of Kingdom Arena. While players are expected to replace them with Epic Cookies over time, higher Trays in the Tower of Sweet Chaos will restrict the number of higher-Rarity Cookies that a team can use, necessitating at least one or two high-level Rare Cookies to progress.'
    <img src="Rare.JPG" alt="Rare Numbers"
      width="400",
    'Special': '<p>Special Cookies are limited-edition Cookies that can only be acquired through special Events. They are not available in the Gacha, the shops, or any of the other ways a player can normally acquire Cookies. Despite their exclusivity, they are not necessarily stronger than Cookies of other Rarities, as their Skills are often very general in utility. They are helpful for new players progressing through World Exploration, and because the Special Rarity is ranked between Epic and Rare, they can be used to get through higher Trays of Tower of Sweet Chaos that restrict Epic+ Cookies.',
    'Epic': '<p>Epic Cookies are those of the middle Cookie Rarity in Cookie Run: Kingdom. Being a high yet accessible rarity, most Epic Cookies are very effective at performing their respective roles. They have strong Skills and higher base Stats than Cookies from lower Rarities, especially relative to their types. They can easily get a player through most content in the game, and several of these Cookies are essential for high-end Arena battles.',
    'Super Epic': '<p>Super Epic Cookies are those of a Rarity of Cookies above Epic Cookies. Super Epic Cookies possess Skills with substantially-unique qualities, putting them above the average Epic Cookie. While they are still listed below Legendary and Ancient Cookies in terms of power, they are nevertheless able to easily clear through PvE content and can be a valuable investment should the right strategy arise for them.',
    'Legendary': '<p>Legendary Cookies, as their name suggests, are Cookies of mythical, godlike status and power. They each have significant influence on Earthbread and its denizens. Legendaries are on par with the Ancient Rarities in that they also have a very low chance of being pulled from the Cookie Gacha. ',
    'Ancient': '<p>The Ancient Heroes, often referred to as the Five, are a group of ageless Cookies graced with Soul Jam of the purest kind. Guardians of peace, they face off against the harbinger of chaos Dark Enchantress Cookie Dark Enchantress Cookie at the beginning of the game during the Final Battle. Each except White Lily Cookie White Lily Cookie is stated to have once ruled over a Kingdom of their own. They were defeated by Dark Enchantress Cookie and their Soul Jams were shattered, setting off the events of World Exploration.',
  };
  // Update the content based on the selected page
  document.getElementById("content").innerHTML = pageContent[selectedValue];
  if (selectedValue == 'Common') {
     var percentage = 99;
  } else if (selectedValue == 'Rare') {
     var percentage = 96;
  } else if (selectedValue == 'Special') {
     var percentage = 99;
  } else if (selectedValue == 'Epic') {
     var percentage = 99;
  } else if (selectedValue == 'Super Epic') {
     var percentage = 99;
  } else if (selectedValue == 'Legendary') {
     var percentage = 99;
  } else if (selectedValue == 'Ancient') {
     var percentage = 99;
  svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "#e0e0e0");

    svg.selectAll("*").remove();
    svg.append("rect")
        .attr("width", percentage + "%")
        .attr("height", height)
        .attr("fill", "#69b3a2"); // You can customize the fill color
    }

