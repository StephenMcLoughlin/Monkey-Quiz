(function(){

	angular
		.module("monkeyFacts")
		.factory("dataService", DataFactory);
		
		function DataFactory() {
			var dataObj = {
				monkeyList: monkeyList,
				quizQuestions: quizQuestions,
				correctAnswers: correctAnswers
			};
			return dataObj;	
		}
		
	var correctAnswers = [2, 3, 0, 1, 2];
	
	var monkeyList = [
			{ 
				name: "Proboscis Monkey", 
				image: "http://sayomg.wpengine.netdna-cdn.com/wp-content/uploads/2013/12/omg-proboscis-monkey-eating-200x200.jpg",
				length: "66 - 76.2cm",
				weight: "7 - 12kg",
				native_to: "Asia",
				description: "The proboscis monkey (Nasalis larvatus) or long-nosed monkey, known as the bekantan in Indonesia, is a reddish-brown arboreal Old World monkey that is endemic to the southeast Asian island of Borneo." +
				"This species co-exists with the Bornean orangutan. It belongs in the monotypic genus Nasalis, although the pig-tailed langur has traditionally also been included in this genus." +
				"The monkey also goes by the Indonesian name monyet belanda (Dutch monkey), or even orang belanda (Dutchman), as Indonesians remarked that the Dutch colonisers often had similarly large bellies and noses." +
				"This species of monkey is easily identifiable because of its unusually large nose."
			},
			{ 
				name: "Emperor Tamarin", 
				image: "https://www.durrell.org/_cache/0_0_200_0_0_emperor-tamarin.jpg",
				length: "23 - 26cm",
				weight: "500g",
				native_to: "South America",
				description: "The emperor tamarin (Saguinus imperator), is a species of tamarin allegedly named for its resemblance to the German emperor Wilhelm II.[2] It lives in the southwest Amazon Basin, in east Peru, north Bolivia and in the west Brazilian states of Acre and Amazonas." +
							"The fur of the emperor tamarin is predominantly grey colored, with yellowish speckles on its chest. The hands and feet are black and the tail is brown. Outstanding is its long, white mustache, which extends to both sides beyond the shoulders." +
							"The animal reaches a length of 23–26 centimetres (9–10 in), plus a 35–41.5 cm (13.8–16.3 in) long tail. It weighs approximately 500 grams (18 oz)."
			},
			{ 
				name: "White-headed Capuchin", 
				image: "http://rs223.pbsrc.com/albums/dd52/rgdmac/Costa%20Rica%20Birdwatching%20Mar%202009/CR2684White-facedCapuchinMonkey.jpg~c200",
				length: "33.5 - 45.3cm",
				weight: "3.9kg",
				native_to: "Central America",
				description: "The white-headed capuchin (Cebus capucinus), also known as the white-faced capuchin or white-throated capuchin, is a medium-sized New World monkey of the family Cebidae, subfamily Cebinae. Native to the forests of Central America and the extreme north-western portion of South America, the white-headed capuchin is important to rainforest ecology for its role in dispersing seeds and pollen." +
							"Among the best known monkeys, the white-headed capuchin is recognized as the typical companion to the organ grinder. In recent years the species has become popular in North American media. It is a highly intelligent monkey and has been trained to assist paraplegic persons. It is a medium-sized monkey, weighing up to 3.9 kg (8.6 lb). It is mostly black, but with a pink face and white on much of the front part of the body, giving it its common name. It has a distinctive prehensile tail that is often carried coiled up and is used to help support the monkey when it is feeding beneath a branch."
			},
			{ 
				name: "Crab-eating Macaque", 
				image: "http://rs724.pbsrc.com/albums/ww247/Makanature/DSC_9535-1.jpg~c200",
				length: "38 – 55cm",
				weight: "5 - 9kg",
				native_to: "Southeast Asia",
				description: "The crab-eating macaque (Macaca fascicularis), also known as the long-tailed macaque, is a cercopithecine primate native to Southeast Asia. It is referred to as the cynomolgus monkey in laboratories. It has a long history alongside humans; they have been alternately seen as agricultural pests, sacred animals in some temples, and more recently, the subject of medical experiments. The crab-eating macaque lives in matrilineal social groups with a female dominance hierarchy, and male members leave the group when they reach puberty. They are opportunistic omnivores and have been documented using tools to obtain food in Thailand and Myanmar. The crab-eating macaque is a known invasive species and a threat to biodiversity in several locations, including Hong Kong and western New Guinea. The significant overlap in macaque and human living space has resulted in greater habitat loss, synanthropic living, and inter- and intraspecies conflicts over resources."
			},
			{ 
				name: "Bald Uakari", 
				image: "http://rs225.pbsrc.com/albums/dd250/mickeysangeleyes/odds%20and%20ends/uakai.jpg~c200",
				length: "45.6cm",
				weight: "2.75 - 3.45kg",
				native_to: "South America",
				description: "The bald uakari (Cacajao calvus) or bald-headed uakari is a small New World monkey characterized by a very short tail; bright, crimson face; a bald head; and long coat. The bald uakari is restricted to várzea forests and other wooded habitats near water in the western Amazon of Brazil and Peru."
			},
			{ 
				name: "Brown Spider Monkey", 
				image: "http://www.colombia.co/en/wp-content/uploads/2015/04/spider-monkey-colombian-animal.jpg",
				length: "50cm ",
				weight: "7.9 and 9.1kg",
				native_to: "South America",
				description: "The brown spider monkey or variegated spider monkey (Ateles hybridus) is a critically endangered species of spider monkey, a type of New World monkey, from forests in northern Colombia and northwestern Venezuela." +
							"Its taxonomic history has been confusing, and in the past it has been treated as a subspecies of either the Geoffroy's spider monkey or the white-fronted spider monkey. Like all spider monkeys, it has very long, spindly limbs and a lengthy prehensile tail which can almost be called a fifth limb. The brown spider monkey has a whitish belly and patch on the forehead, and – highly unusual among spider monkeys – the eyes are sometimes pale blue."
			},
			{ 
				name: "Red-shanked Douc", 
				image: "http://i0.wp.com/atozanimals.net/wp-content/uploads/2015/12/Red-Shanked-Douc-Langur.png?fit=400%2C216&resize=200%2C200",
				length: "61cm",
				weight: "11kg",
				native_to: "Southeast Asia",
				description: "The red-shanked douc (Pygathrix nemaeus) is a species of Old World monkey, among the most colourful of all primates. This monkey is sometimes called the \"costumed ape\" for its extravagant appearance. From its knees to its ankles it sports maroon-red \"stockings\", and it appears to wear white forearm length gloves. Its attire is finished with black hands and feet. The golden face is framed by a white ruff, which is considerably fluffier in males. The eyelids are a soft powder blue. The tail is white with a triangle of white hair at the base. Males of all ages have a white spot on both sides of the corners of the rump patch, and red and white genitals." +
							"The word \"douc\" (pronounced 'dook') is a Vietnamese word meaning \"monkey\". The douc is an arboreal and diurnal monkey that eats and sleeps in the trees of the forest."
			},
			{ 
				name: "Black Howler", 
				image: "http://rs1133.pbsrc.com/albums/m587/nightscrawlers/Howler%20Monkey%20Memes/black-howler-monkey_467_600x450.jpg~c200",
				length: "61cm",
				weight: "11kg",
				native_to: "Southeast Asia",
				description: "The black howler (Alouatta caraya) is a species of howler monkey, a large New World monkey, from northeastern Argentina, eastern Bolivia, eastern and southern Brazil, and Paraguay. Together with the brown howler, it is the southernmost member of the Alouatta genus. Only the adult male is black; adult females and juveniles of both genders are overall whitish to yellowish-buff. However, variations occur even among the adult males; some have patches of reddish-brown or buff fur." + 
							"They live in groups of three to 19 individuals (usually seven to 9). The sex ratio is usually one to three males for every seven to nine females in a group. When mating, males and females within a single group pair off." +
							"Named for their vocalizations, they may be heard most often around sunrise. This \"dawn chorus\" sounds much more like roaring than howling, and it announces the howlers' position as a means to avoiding conflict with other groups. The call can be heard up to 5 km away." +
							"These monkeys commonly sleep or rest up to 70% of the day, making it one of the least active monkeys in the New World. Their habitat is forest, especially semideciduous and gallery. Black howlers are folivorous, eating mostly leaves, and occasionally fruit, such as figs. They generally prefer walking and climbing to running or leaping. The prehensile tail is very strong and acts as a fifth limb, allowing the monkeys greater versatility when climbing and allowing them greater safety in the occasional fall from a high branch. Because their limb structure makes terrestrial movement awkward, they spend most of their time in the trees and only come down for water during dry spells. Otherwise, the monkeys drink by wetting their hands on moist leaves, and then licking the water off their hands. Their lifespans are up to 20 years, but more commonly 15 years in the wild."
			}
		];
		
		
	var quizQuestions = [
		{
			type: "text",
			text: "What is the weight of the Proboscis Monkey?",
			possibilities: [
				{
					answer: "7.9 and 9.1kg"
				},
				{
					answer: "11kg"
				},
				{
					answer: "7 - 12kg"
				},
				{
					answer: "500g"
				}
			],
			selected: null,
			correct: null		
		},
		{
			type: "text",
			text: "Where is the Emperor Tamarin native to?",
			possibilities: [
				{
					answer: "Europe"
				},
				{
					answer: "Asia"
				},
				{
					answer: "Africa"
				},
				{
					answer: "South America"
				}
			],
			selected: null,
			correct: null
		},
		{
			type: "image",
			text: "Which of these is the Black Howler?",
			possibilities: [
				{
					answer: "http://rs1133.pbsrc.com/albums/m587/nightscrawlers/Howler%20Monkey%20Memes/black-howler-monkey_467_600x450.jpg~c200"
				},
				{
					answer: "http://i0.wp.com/atozanimals.net/wp-content/uploads/2015/12/Red-Shanked-Douc-Langur.png?fit=400%2C216&resize=200%2C200"
				},
				{
					answer: "https://www.durrell.org/_cache/0_0_200_0_0_emperor-tamarin.jpg"
				},
				{
					answer: "http://rs225.pbsrc.com/albums/dd250/mickeysangeleyes/odds%20and%20ends/uakai.jpg~c200"
				}
			],
			selected: null,
			correct: null
		},
		{
			type: "image",
			text: "Which of these is the Bald Uakari?",
			possibilities: [
				{
					answer: "http://sayomg.wpengine.netdna-cdn.com/wp-content/uploads/2013/12/omg-proboscis-monkey-eating-200x200.jpg"
				},
				{
					answer: "http://rs225.pbsrc.com/albums/dd250/mickeysangeleyes/odds%20and%20ends/uakai.jpg~c200"
				},
				{
					answer: "http://rs223.pbsrc.com/albums/dd52/rgdmac/Costa%20Rica%20Birdwatching%20Mar%202009/CR2684White-facedCapuchinMonkey.jpg~c200"
				},
				{
					answer: "http://www.colombia.co/en/wp-content/uploads/2015/04/spider-monkey-colombian-animal.jpg"
				}
			],
			selected: null,
			correct: null
		},
		{
			type: "text",
			text: "Which monkey weighs around 500g?",
			possibilities: [
				{
					answer: "Brown Spider Monkey"
				},
				{
					answer: "Red-shanked Douc"
				},
				{
					answer: "Emperor Tamarin"
				},
				{
					answer: "White-headed Capuchin"
				}
			],
			selected: null,
			correct: null
		}
		
	];
	
	
})();