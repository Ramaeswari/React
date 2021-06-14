import { GET_RECIPE } from "../constant/types";

const initialState = {
    recipes: [
        {
            id: 1,
            title: "Chiken Sandwich Recipe",
            image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/chicken-sandwich-with-mayo-500x500.jpg",
            calories: "2201.9550349529163 kcal",
            fat: "37.81289187148946 g",
            type: "Non-Veg",
            instructions: "In a blender add mustard seeds and sugar. Grind it into fine powder. Keep it aside.Heat ½ tsp oil in a pan, to it ginger garlic paste, saute for few seconds then add chicken breast, salt snd pepper powder. Saute the chicken for a minute then add ¾ cup water. Let the chicken cook with lid on. This should take about 5 to 6 minutes. After 5 to 6 minutes when chicken is fully cooked and all the water has gone, put off the flame.Transfer the cooked chicken to a plate. Shred the chicken using fork as shown in the collage.Now to the shredded chicken add ground mustard powder and mayonnaise. Mix well. Keep it aside.Take a bread slice chop off its sides (brown part). Repeat the process for all the bread slices. Keep it aside.Place a bread slice on a plate, spread chicken mayonnaise mixture as required may he around 1 tbsp then over it place chopped lettuce over which place with another fresh bread.  Slice it diagonally or vertically and serve it."
        },
        {
            id: 2,
            title: "Apple Ice recipes",
            image: "https://www.edamam.com/web-img/dbd/dbd4bd58ebc7f049e17a320e18f72415",
            calories: "1258.557999999773 kcal",
            fat: "2.136839999997525 g",
            type: "Veg",
            instructions: "Quarter apples and juice them through a fruit juicer with peels on (this helps keep the color of the ice a nice bright green).Add rich simple syrup and lemon juice to taste. Pour into a shallow pan or a glass baking dish and place in the freezer. After 20 minutes, scrape the pan to break up the frozen bits and create slush. Do this again after 30 minutes, then put the pan in the freezer until you’re ready to serve. (You can also do this in an ice cream maker following the manufacturer’s directions.)"
        },
        {
            id: 3,
            title: "Egg Nests recipes",
            image: "https://www.edamam.com/web-img/4ea/4ea44da2c9c5b7f712b4a93840a2607d",
            calories: "259.27000000000004 kcal",
            fat: "18.8508 g",
            type: "Non-Veg",
            instructions: `Preheat the oven to 450°F (230°C) with a rack in the middle. Line a roasting pan, 
            or baking sheet that can take high temperatures without warping, with parchment paper or Silpat.
            Separate the egg yolks from the whites. Make sure there are no little pieces of egg yolk in the whites 
            or you will have difficulty getting the whites to beat properly. It helps if you are making more than one 
            egg nest to keep each egg yolk in a separate prep bowl.Place the egg whites in a very clean mixer bowl 
            (any residual oil in the mixer bowl will keep the egg whites from whipping up properly).Add a small pinch of
             salt to the egg whites. Beat the egg whites with a whisk attachment in a mixer (or using a hand mixer), 
             starting on low speed and then slowly increasing to high speed, until stiff peaks form.Gently fold in the 
             grated cheese, taking care not to deflate the egg whites.Create two mounds of the egg white mixture on the 
             lined baking sheet. Form the mounds so they look like nests, with indentations in the centers.`
        },
        {
            id: 4,
            title: "Apple-Gruyere Scone",
            image: "https://www.edamam.com/web-img/e4b/e4b9bf707dedd5f5b9fe7f786cf3ace3.jpg",
            calories: "5149.457999997889 kcal",
            fat: "309.46443 g" ,
            type: "Veg",
            instructions: `Preheat your oven to 375 degrees.
            Sift all dry ingredients together, dice cold butter, and toss in sifted dry ingredients. Chill this mixture for 25 minutes.
            
            While the mixture chills, whisk the apple butter and cream together. In a sauté pan, sweat diced apples over medium heat in a small amount of butter to release some of their juices, about 5 minutes (do not overcook, apples should not be soft). Remove apples from heat and let cool.
            
            Fit a stand mixer with a paddle and on medium-low speed paddle cold, diced butter and dry ingredients until butter has been broken down into pea-size pieces. Add apple butter-cream mixture, followed by diced apples until just incorporated, being careful to not overmix the dough.
            
            Turn dough out onto a lightly floured work surface and roll out 1.25" thick. Cut into 3.5" squares and then cut each square on the diagonal, forming two triangles per square.
            
            Garnish each triangle with Gruyere, layer thinly sliced apples over cheese, and give another sprinkling of Gruyere over the apple slices but not enough to cover completely (you want some apple to peek through).
            
            Bake 25 to 30 minutes or until golden brown and firm to the touch.`
        },
        {
            id: 5,
            title: "Rolled Egg recipes",
            image: "https://www.edamam.com/web-img/82c/82c413a96206893705fa57e626d122b4",
            calories: "127.50076969032132 kcal",
            fat: "10.762882619054478 g",
            type: "Non-Veg",
            instructions: `Egg Roll is the easiest thing to prepare as it is ready in very less time. Cut thick slices of onion and 
            capsicum, grate the carrots, mince the ginger and keep aside. Take a tawa or frying pan and put it on medium heat. When 
            it is sufficiently hot add one teaspoon of butter and the onions, carrots and capsicum. Cook on high flame for 2 
            minutes. Add salt, pepper, lemon juice, tomato ketchup, chilli sauce and cook for another one minute. Remove from fire 
            and keep aside.
            In a bowl, break the eggs. Add salt and pepper to taste and whisk well. Heat one tsp butter in the pan. Add half of the egg mixture and make an omelette. Put the chapati over it. Top it with the rest of the 
            egg mixture and flip so that it is cooked on both sides.
            Spoon the cooked capsicum, carrot and onion mixture at the centre of the chapati and fashion it into a roll. Serve hot with tomato ketchup.`
        },
        {
            id: 6,
            title: "Banana Cake recipes",
            image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/01/banana-cake-recipe-1.jpg',
            calories: "1258.557999999773 kcal",
            fat: "2.136839999997525 g",
            type: "Veg",
            instructions: `Mash 4 medium to large ripe or over-ripe bananas with a fork to a smooth consistency. I have used over-ripe bananas for this recipe.
            Add ½ cup of sugar, ⅔ cup of any neutral flavored oil and 1 teaspoon of vanilla extract to the mashed bananas.
            Stir well so the oil mixes with the banana puree and the sugar dissolves completely.Sieve 1½ cups of whole wheat flour, 1 teaspoon of baking soda,
             ½ teaspoon of baking powder and a pinch of salt directly in the bowl.Fold the dry ingredients thoroughly into the wet ingredients. Fold using the 
             cut and fold method. Check my video above or in the recipe card below to see how to form the batter with the cut and fold method.
             Add 10 halved or chopped walnuts and fold again. Pour the batter into a greased or lined loaf pan ( 7.5 x 4 x 2.5 inches) or round cake pan (7.5 x 2 inches).
             Bake in a preheated oven at 350 degrees F (180 degrees C) for 45 to 50 minutes or until a toothpick inserted in the cake comes out clean. The timing varies 
             from oven to oven, so keep a note of this.When warm or cooled, slice and serve Eggless Banana Cake plain with your tea or coffee.
             `
        },
        {
            id: 7,
            title: "Chiken Tikka Masala Recipe",
            image: "https://www.edamam.com/web-img/54d/54dab1e05119c8ac27960ac182f03ed8.jpg",
            calories: "2197.488084399862 kcal",
            fat: "133.03644855499863 g",
            type: "Non-Veg",
            instructions: `In a large bowl, combine yogurt, lemon juice, 2 teaspoons cumin, cinnamon, cayenne, black pepper, ginger, and salt. Stir in 
            chicken, cover, and refrigerate for 1 hour.Preheat a grill for high heat.
            Lightly oil the grill grate. Thread chicken onto skewers, and discard marinade. Grill until juices run clear, about 5 minutes on each side.
            Melt butter in a large heavy skillet over medium heat. Saute garlic and jalapeno for 1 minute. Season with 2 teaspoons cumin, paprika, 
            and 1 teaspoon salt. Stir in tomato sauce and cream. Simmer on low heat until sauce thickens, about 20 minutes. Add grilled chicken, 
            and simmer for 10 minutes. Transfer to a serving platter, and garnish with fresh cilantro.
            `
        },
        {
            id: 8,
            title: "Banana Doughnuts",
            image: "https://www.edamam.com/web-img/b3b/b3b5320f00cedfacc789b4ee8bccb51e.jpg",
            calories: "4757.3651",
            fat: "211.3233825 g",
            type: "Veg",
            instructions: `Begin by making the doughnuts. Preheat the oven to 350° and lightly oil a 12 cavity doughnut pan or a couple of 6 cavity pans.
            Place the bananas into a large mixing bowl and mash well with a fork or potato masher. Stir in the oil, milk, vanilla and sugar, until well mixed.            
            Add the flour to the bowl, then sprinkle the baking soda and salt on top. Stir just until the batter is thoroughly mixed, being careful not to overmix it.             
            Fold in the mini chocolate chips.            
            Distribute the batter among the doughnut cavities.             
            Bake until the doughnuts are fluffy and spring back when touched lightly with a finger.            
            Transfer the pan(s) to a cooling rack to cool.            
            While the doughnuts cool, make the frosting. Melt the chocolate chips by microwaving in 30 second increments, then stir in the peanut butter.            
            When the doughnuts are cool, dip the tops in frosting, then sprinkle with chopped peanuts. Serve immediately or cover with plastic and store at room temperature for up to 2 days.`
        },
        {
            id: 9,
            title: "Egg Sandwich",
            image: "https://www.edamam.com/web-img/4f3/4f37381ccbd1baec9281403d03555e53.jpg",
            calories: "557.0249857966313 kcal",
            fat: "38.52191830423663 g",
            type: "Non-Veg",
            instructions: `Cook the bacon in a large sauté pan set over medium-low heat until it reaches your desired level of crispiness. 
            Transfer the bacon to a paper towel-lined plate. Pour out all but 2 tablespoons of the bacon grease from the pan.
            Crack the eggs into the pan and increase the heat to medium. Sprinkle freshly cracked black pepper atop the eggs 
            and fry them until the whites are fully cooked and the yolks are barely set.
            Toast the bread then immediately place the cheese on one piece of bread and spread the jam on the other. Arrange 
            the bacon atop the cheese then place the eggs atop the bacon. Top the sandwich with the second piece of bread. Slice and serve immediately.`
        },
        {
            id: 10,
            title: "Apple Butter",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRYaGhweHRwcHBwaHBwcHBoaGhweHB4eIS4lHB4rIRoYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHzgrJSs0NDc0MTc0NDQ0ND00MTQ0NDc2NjQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABCEAACAQIDBQUFBQYFBAMBAAABAhEAAwQhMQUSQVFhInGBkaEGEzKxwRRS0eHwI0JigpLxBxUkcrIWM6LSU8LiQ//EABkBAAMBAQEAAAAAAAAAAAAAAAECAwQABf/EAC0RAAICAQMDAgUEAwEAAAAAAAABAhEDEiExBEFREyIUYXGRoTKBwfBSsdFC/9oADAMBAAIRAxEAPwBw1wCo99SZrp0JBgUMFOlZDSTFgdKJwGG37iLwkT3DOg1SKY7IuhX3uQNBuhoxcnSGPtHdAKpplpVfuZDWg7mMa9iHdjkMgOVTuJpIbqymWHpvS+e5GM6086V0sioiTNPRKyZbZitW61cumMqD98QdaARlhl3wRpFK7rdsryrYxG6SQdaGDEtIp0K7XIwRT4VyxnKahvXoQxrXCElJ40KOsOLFQOVYLknI0JhcUfhOdFraB01oPYZOyZrhAkGoUuMczQt26QY5VJbvda6jrC2uQNKg+0xqKje8TUfvOldR1hSXhrBrXvlqNL08K5e4OWddQLO/erUIdWaa09yMo1raOBwo0CyR3A4Gsw6DWhbmKMxFTIz8q6gphDLJqK4O1XSA8TUJc78CuSObJ/d1lddqt0dzrQW+M3Du61LccESNaX4u2SxI0qTAvKkGjSEtktlpnlTLB4csjle6aVAnTSrW8WcIJykeppMlaSuGTjJNclTw2HVJGpJzrZuZxWmczI41wqMxgAk9K5VGO4JylOTb5NPfAMUVs3DG64A0412dkOeQy6k+gp/7MYdbKtvkByePLvqUs0GqTV/U5JrdoZJsy0qgFVJjlQ+I2TZjJE8hR165NQPcyrLKa4CnLyBHZtogjcWD0FKsf7NoFLWyVYZgag9Kfg10c6mpVxsOptcs8wuMZIjjn0ru1cyg1fsZsu1cneQSeIyPmKru0/Z1bSF0ZiBwOeVbcfUXSkhZxjLeP2Edu4A2lFHFbooDjFd+7JEcq1OiJtGmWNaS8K792QuVcspjTOu2O3JVuACjsBsu4/a3d1T97XypvsTY6qFdhLdeFPvdhQzfurr0FYMnVSbqC/cqoJc8lZGwGAyb0rVr2eeZ3hVmDAgEQQdO6tMePKo/EZFyxtK8FI2jgvd3VRnALfvHJR+Na2pslrSKxuhixyAGUVdvco5AdQ3eJpL7SbJAUMmi/u8AOnKnhnlKSt7DulGktypW2gzqaMt4sHKobVsVsoNeNelsZbZz9qgkGo2xgDAgVw68ah9zJo0gWNPt3SsoTc/UVqupHWWkWd6ezXdjCkfuirBicIgJhYPSl27nlNco0tznK+DQwfEoD5Ur29fe/cSyJCDMx051Y1vQhk+FbwGDiWIzPp0rL1WRRSr7GrpmoRbkt+wqw+xd7WQo8CadWtnougAyoxa21YJtz3k7+XYTVWyIHQAULct8Iyo1xlQ9wxFQmkPEBFzcIAGRMR3nWpsTKiWEdaAxFu4zAqYKmf7UecQ7LDKogzPOkx6ZJqTa8eB5e12DJiZM7wiNKIW7lNLdo2FCm4nZKxvrwg6EVFhtoAjPhSvVjdN34Y1RkrQ4W6eNdm3vqV4UDhbu+ATRwukCB41qxTtW+CMo09ij4/Bbjldd069DWra9KulvYyM5e522MZfugdRx6zTG9suwy7ptIf5V9MvlXowy+1InLTZ50i61tIVlJ4GasG0fZ02wXsSyj4kJlhz3Dqw/hPgaSWwHIC5yYHfpFPrTDXdcFiwu0g0AZk6VYbFns7rDJh2vHIig9mbKW0inViRvHjHLuppPCvP0aZN3t2DKSfBWlwzWGYFptkkrPDp0qRrtMNroHQrq2RFI7LysnUZEcQetZsjp7fuWhTVvkYYedaKxdveRh0PyoPC3JMetGYzErbRnY5AedVxRVCSbvY8+yBI5VywFSuoLE8yT5mttbBr14ukQlvuAPb4VAmtMLlnjw4ngO/lXdjY9xzkuUTJB455c6LyRjywLHKW6QHWUb/lN37vpWqn8Ri8jejM9Cx6uZgiPWk7q2m8KebQCqstSDCAPcWOfyzqzZOK3GWEw5Eb2oz8Tp5UxStKtaiMzXi5ZuU2zS/B2BzqREmeVbVJEnIVmJuhQq6EnSr48N+6XH+yTfZAF6+BXKPvaVW8RimW8ymZDRTzBXgxEV5tycmpbfI1aaQX7njUbiMss+NFoBFD4ohELsQAMzNW0KrRPVuJcYrOSi8VaeUZRPjFJcJgHYHsyymCOtWLA2XaXI3d/SdQvDLnnPjTXA2FXeEZAZnmT84j1q8enTgtR3q6XsJMPZZAN8R4zHfFM3gJvZQBPfU+IVTOXlSTEW2DLHwb4YqBkSAY7u1B6xU7WJ0+Ar3bjuy/AZgcTPrxNEq80uwhkTxpglVwTbiiUludBozpNj8ALd37TaUMRm6RqIzZeTgedOHqLeg+dW1ULHZmW8erqrI0qwBB6GuxdnSqltf8A07jdJFtyWgaK37wHKZBjvp5su8CoPGss5vVpLOCUbQ0t2BIy/vS+yih3JAPa5UZiMQEQtyBPfFJdkk3UNxjBdiYHAaD61fElqUUie9NsYXLgGYHgKC9ocIbiW84KuCRwI5GjlQKOZoHEu2bPmBoBWxwVcCJtO0K9pbLQ9pTutE/w5a91a2PskMd55jlw/Xfzou0GuuoK7qqN5gdc/hX6mnFlOdQyTbelFaUY78kCbPQHsoMueZA7zU0Cpnyrk61JpJi6myKRz/XnWVPvVldR1m8eodXU+FV3ZTblzPqPOrMB2jPGkeJwpW8oIyZq9DMmnsTxNVuPbedE2LUmTwoPZ1xWuvbE9gKf6p4+FNtwDSsuDppXqlVIOSdOkQXTEk8NKUqd+4DOSyfGmmIXKDmKXFgkhQBOsRWmUd9xIvYVbd3UZrm6GYrug8pME9SB5TQOx8TJ3Rwp0+Ea52XA92RmTkfDj4ikuKwSYd95Z3CdCZKnvOoNeZ1eF6ta4NWKSqi1W8gKT4y+ty7uMf2aZt/E3BfrQWK22xCqgIZ/hyMACN4k8Y+opjhbSbgCiTqZzYk6k+NdiWp7cIDjp3YVhritO6IGXeZolcgYyqGwpiIjP6VM06etVld7iAzkccqGvQAZo33ecxrUWJshgyzBGemn6k+dZs0ZOL4KRasXW8VuNkJB/X4U1TECAY1jnSC9cshtxnAJlYYgEhhz5R60b7PLdRXt3VbdU/s2YRIkjnlkAY6nlXYMc1F3tR2Rx7DmQQI9KgcZ1rf3cuZrVxjl16x+u6qar55J6aEftMAUAIk76x36fX51mEwVy0280wRJGpnrnTHEWiw0gnKTnE5eNdW3dwIGoEnh4c6MMSyPfnsU1tRo4x2Fa8hVXGQzX6Gh8FcYIVAgroB04UezpaBjN21jU0EjEKxjOtMcUYu1z3J6m1RKgc65Vq7dRPiO83Aa1Fec7u9nHGKGtYheC1W6FoK2bit5rq5SrLPcyyPkR4UxL1WsA/8ArLgI3QUUnXtRugceraU9S2zmB/b9cqySb1NJF8kUmn8l/oMVCyzMZ5dTUVq9kQR2pIIoncC226A59dSflS7HSrBxowlqOXG4xUlyuSUWm6J4bp5VlC/bulZWX1I+Sml+B2lrLeoPGYRrjqVjs55mjcS4Fs5xlXWzM0DcTx7q9/JHVRihLTua2bgvdhpgsxLMRx4AeAAFFXGgZ1IDUV011JLY625WwNsQpJAQkjmP1ND3MSRopHhUzK05D1FQsj8SkeJPpFQdlFQM9x2yANRPhVj9oRHIxHrRF66o4/SluIvBjBEk+NTdDqzeMdXAVRkuhrlbhUiDGoyrlcMx7TNuINRURcEwBCDSeJ50rGRjC4xkvEcqb4DEbwCFiXXrmRVX2orAlgzBctOH964wOxb14rethjuk7j74GYMGJaefDnWe/dpSbY7ScbbovK2d4xw49B+NcbTTeQkGCCBPMcR14GjrSFVg5mBJAiTABgVFid3c3a1eglFp9zOp7pnnO1dj3WuM6rvh2YiCMgSSAZiMsuVWzCYw+7VWMsqqGzmGCiSD51LYw09jfU9CCPSl74Io5gwDGWsEcuYrPmU1FKPHctFxb3D7zSw7qIAy0nT50Firo7J6ZSNaIw1yRWSNRkwvdEl1MjFLMNiSitbbLdYwZzKv2x3QS6gfwU54Uo2jaAu22Y9g76GdJ3S6/wDBv6jzrVjbUrXcVbqgVwxb9kJY670lR1nXwFGXIRd2d5zqY49BwFR3sYQN20s/xaAdw41AtxUzfeniYP8AatC/vgVhJXdQx0igcbi0sp7xlMSBkOJMDuzqfDX3eXK7iDJAfiY8WPLoKlXB+9QocgdTExnllxo88A45FWxe0966xzZiijugtHMZIJ/hq24CNyOJ+dCbM2LathYLNuzBYiM8yYAHHOmzoBBEUmLDJScpUUzZVJ0gXaDgKV4R86jYKyQdIreIYE6drhlnUmHtsFIcgzoOQ69avyyPYVf5Wv3h/TWUX9nTk3m341lS9GH+KG1PyOvdroRNSogGlRl+0BUtbrTe3Yz00jCaGus3A1M/WhrjLz8qnJ+RooEuq37zk90ChbtteJfz/Ci7lxOJPnQz30HCfEn61nkkVVgpS3OhJ7nJ+VEiyq6wOnH8q4bGcFEdwiotx3PIdaW64Q1eSPForRJOWnKgjhXuOoDkIplogA9JiaZXLKIJc+Z+Q41mHZ7mdtF3FZZDSCw1IAjpx58a6rdBTpWCDDC7c3B8DQD3Rn6VasPaW2oVVCqogAaAcAK6s3ZUEqV6Gu2IrRCCirT3Iyk3saZ+lB3kJPLvNd3xyNBXJ++Y8KEpM6KOrdlFIYwzDjEAdwoLGtvsFXMzPdU3uVcwGYnlnl3xlU9u0EGUTSVqVDXRX/aq+1tUVEZz2ixUTuiB8XL8qD2PtPeiTT3FQJM9o+dJMPsRkD3ncDNmChY5kDWvP6rC9WqPJoxyWmmWexc3lpT7SX1QWwRLF8ukI8k+BjxqXZ+PQIXZgFAkk6DKq3c2uj3zduuF3QVS2cyqmDvMAMmIg9xFHG1JJhUXbb4GeGZ30ECi3REgud48Bz7hVcxftSY3cPbk/ebsqO5RmfShcHtC+WDOFLE6z8hGQq+uK2sTRJ7lzw1o3DJIEaLnkPKnOGwpAjKehP4UrwuFJ7QYiKaoTWmO3YjI6NgARAEcshXMgDialLHlNRPbboPGmrwLYHcxhU7qoZPT6n8axS7ZZD1NEGyP3jPdl61gvqo7Iy9fEnM0teWNfhEf2M/ePpWV39qFapqQLYyuLnnUNwmMmI65fWiLxoC43Lip7pH6NTz+x7dzsfuF5sXBcDl3YA/CT2WBy0HGj3v24kr5j8KHuYg+7DDUEiP10iosTiYdFgHeIz010+lZoZNC2d3XO5dw1ckz4m3+gfwoO5jLYznLub8KjXFS7pGYE8IyifnQP+YoyO4BG5rlznTnpXS6h/1eDlhDH2paUT2j0CN9QKU7Q9proIFq0FH3nOfgq5DvJPdQ2Ixy+795HZmPHuoLHY4hEaJ95oOIAOc+lRl1GR8ItHDFchA2ncbNk7XElvyyq5eyLObJLrulmJAmZXdUA90zVX2BtOxavMl4bz9ndYKWAJ1AUAnezGcHllx9DV5EitfSxd6pPfwQzuval+50xqNiP1NdEmhb1a2zMkc3WQak+TUJ9qtn4QW/qNSlqiZ6m7KI5fFNoqHygetRy7dBXTFz8O9/T+VcfZrra3Ag6BS31FDcOxgtopBbMnIDUk8gP1HGoNoKXBDr2eCg/PmfSi7VhLc7slj8TsSzGNJJ0HQQOlQXm3jA4+ldKNrcCe+xV9mbOa45U7wsK0hW1kGRJBzAOlb9ocPNvfAAZIkn7meXnHrVrWwETdHxNPrqaq/tfdCYZ1A7TCOsL2p9B51nWGMU0VWSTaKUmKZrTXAQChgjvIjv19Kt+xdhI6oz3jIg7qARORjeOvgBXnFi9Ft1nUr6Gfwq0ew9svdUFmCKG0MBjIgdYG8fKlWOKfBaTk1yes4a2qiAT4n8KJKzo0UHhbUAZk0SFrXFmJkN+285OY4iAaw2j98+n4V26daheyp1bOuaX9YUzk2jzNdCyq5n863bKroSf9xn+1cm4NZmuSOZr3y8m8vzrK370foVlNQBliGAzNBYhdCNAZ75oHHY8sWYfCCQvhq1E4K7v2VbjEHvWR9Kn1cbjYcTpkdxIBA0kEfL8KX4wNvWzyK+h/KmZ4dRHl/al2JbshuRPpB+pry5OvwbIiuyx9+7Hir/APEx9KTq8Wbw5lB4dsn9dasXux74gcm+R/OkDJ2LvLL5/wB6ncl+Sypv7C/E3P8ATovO4T4bsVBtB5NleSDzJJP0qTEp+yQdWrjGJ+2QclX0FVUmw0ht7F4cXcW91h8AJA47zHdU/wBIb0r1Ra8i9j8WLeIMnsOxTxJle8yAP5jXo64ksoIYrO9ppKkg/I1t6fKoJtrkx9RBuQzdgBJMDrQb41D8PaHMZj0qtbX2UL3xs7cYZiVHcug8qO2B/p7ZRhCAypg5TqOZE5jvNFdXrlpapeRHh0xtO34DGxmfwHy/GtHGHkfKor+0bYPH+lvwoJ9rIJhWP8sfOn9WC/8ASF0SfYPOKY8DWt5z0pWdtCckeOfZ9M65bbTRK28/4miPIGlefGu4Vil4GpsTqSahuYy2hA31B5EgD86rOOvYi72XfdT7qSq+JBlu4k1EuAVeA6mpS6uN+1FFgfdljubUtiSXUnpn6CqttjFG6xYiFAhR04nvP0HKpLroojp40j2zjSEYrllkcs5Bj5HyqMs08r0pF4Yox9zKtiUA3wum/HdqasnszfZChWN5cxOh3pBmP1lVTB7H830p7snF7p3eIUEemXzrROL07PcFpnpD7WxJA3BbUcTusx8JaPSoLd/Ghpe9vr93dVB4FQI8ZqPBY2N4HQbviDn9KYjFpAY5A6frzrM8kr3bF0JcImTaIylLhPQz82FSnaNv95GAyzK6T3E1EGSYn9TWmCn9cjlVFnkvAjxoOt4qyYh18SAfI1lzG2V1uIOgYE+QzpQ+FQkTmVMjloR8j+orfuV4+VU+JdcIX0l5GP8AnWH++f6Ln/pWqXe7Tp5VlL8TL5B9JAmMxLLuqDluj1E089l7+/bdTqrT4MPxBpDjUDIrrmsGCOInTvU5eVMvZMEM5HwwAR4mI7s/Ot2RXGmQjzsOQdO8rSzEz7tujfMflTZ7ckkfeU/Q0uxwi3dH3XHlwry8mNo1wkr+wIzRd/kn/wAZqvI02rp6j5/nVhxFuXQab1k+cEZ+FVlMsPd/3Ad2hqMou6fzNEKoDxAJtWyeZHrNd4oTiSP4fLs13cUThkPGCe6ZoV8QvvrzzoGjxMVSMWBsA98URXXJ/eBlPIrmD5x5V6ZYxihVcGFdldRGQF1YI7hr3mvJcTfG6nSSfGvQ/ZPEe+wSiZKl0b+U7yj+llqz1RjaElTluNMBdEX1YyUMyJzGYb6VHjsbu2bTAyGUZHTs5HPvBFbdd3fyA30bLvhj6g0pxW97hFOis0eMH5k+dZZTSjVdv5HULd/P+P8AoftTFFCkwd/d8mgzp1qC67JdWzA3mkjPIHP/ANTSzb91itoHRbaxGvwj8KlxOJY4tWIzDCAOROceZ86bTBt3fKBUkl9CR7zC77qBvkeGk1BYxLPcdIAKDnMxkYHDWobt4/ag/XIHkFj8fOh7N1hfusMiwbrqR+Azplix335/B1yJ7eMZw7ZDdFC3b7tbLSZ3wvzJ+Q865w4ID9YHrPzrXuzAHCaXTFdvI1s4ZzvTH7ka8Spz8z6Uh2uYAXv9BFWVrQzJ5TOuXKqb7QXGNwAHRc/GfwrThTlKiWSVRFwb9n/NTPBvFwdy0mQHcInKRlRlhYeZ0ANbJwtGdSdnomBWQBMbwjr2T6aUyuqSgHAT6/o0v2UJCN0+eVNUHZIHOvKkmrRqT4ONovvFG/2+fGtYlv8AUoeGcgZZR+vKpcYOyn8tbvJ+1Q9T8jQbb58hVIFtu3vWJmN09mTHlpXeCu/tHLEwAcpMag0Rh7f7Vv8Ab+FQWE/7p/iP1opNNAbTFn2m7981lSbw61lUpAEvsV7TojGxiT+xuHJvuPpvdAeP969O2fhTaLaMrQVYaHp0OdfO1t+FeqexW27mHthLu/cU/u5HcXkJ1HGPKvYaUlTMShJu0i74hwd6f4QCMiJ5EZ8aW4ksq3oZiqwIMHe7yRPrTe3at3137DggwY6jPvU9DSzaOHZVuKykb0MOsagHj+VYssJR5XncrGSuvwKsTevb9sqUzTsypgCNDDZ1Wcbfc2XACbu/nAaZ6Z6a1aXYB7HLcI/5VXFTetXR1BjxqDplo2Lb1y4blr4Zhd0wcsoE550re3cJcbxnUxGcGnV6dy23FTHgDNc4hAL55NP/AJf3qkTmVp8NoTJnmSfnV9/w7vwl9OCujjxlW9FWqq9vsno0U99iLgTElD//AEtsvjAcf8CPGml7otC8MvZ+IdCV8CfzPlSd1O66ngynu1B+lMsQCA5zyCt4xDHzPpQrpNy6vNSY7mB+QPnXmyi7r6miLFW1UBRG/hHoSv0reJT9uhH8Pj2RUmMWbKE6yw6ZOT9a3jUh7Ea9n5x8svCnS7/QLfb6gETdBy0JPLiKjsJFx+7+9SplejkrfWucP8bk8vnTpCtkeHPYaedbmSvQE/Wh3uEI0c/yrq2c1nlpTaQGrx7Phx65VSMY+9cc9fpVu2riAqn9cMvnVOT42nrWrAqtkcjIFTskdaKRc+9a0gAB76IRxlWhkUW/2YvbyKOI7/1/arJbYSwB5fOqN7NY8K5Ux08v71crJ48SBn3AisGWNSNMXaCMQuSnu+lSXU/bW+8/8TUGJuHsgZj56VNiATcTmG+lRq3+4XwTWU/aPnnu/WhcOvYu/wC4/KjbR7TnoPmaCw6wl08S30qlbpkxTJ51lde6br5Vqk3KWim+yWwDcIdh3Cr8dnbqbqiW40ZsbDLatqhXOIpPtj2gS1d3HS5ugfEBALcp4gdK9pukdaVJcL8h+AwN62d5X923T5EaEVZMLtpwAt9VYfeQSPFT9Ce6qGmP96QQ8jkOVWbYuKVSd7MNA7qSGRXR2XGpRvljz7Bhr+dpwGH3TME67ynMd2VIcX7K3VD7gDqwOhzB7jr+taG9odlbp30JUjMFSQR3EZikGH9tcbZJ7S3UGocSQOMMpDT1O9SzWO6kq+gIdLlcdWN38maxeBuIhRkIYNOYIy6ULjE7Vthpurn3a1ZsJ/ihh3hcRYdOoi4vedG8gaY2cRsnFfBcthm4b3u3J6I8Sdf3aX0Yv9LISc4bTTR526fGOef1pl7L4ctibRHDeb+lSR4TA8aumJ9h0bNLrCfvAH1EZeFcbI9l7mHuF5VhulRukyJIM9qOAoPDJdgLLF9xldYMrBxuMUjMyJnLdbQ59x6UFeskX2Ma2mPed0A6daKuI4kFGPYYZCRPDTLOll14cKu8ga3wyho0C6AyI0qMsafKHjKuBdiW/wBOjcd9gR5EVLj0/bWF4wp9CaFxF9vs8kyBcI3So1iZyiONDYm7e9+hJQmBuFVZQBBgNLmY8KksW32K6/5JsO0u5OoU9OPWobbDtnnAHzpdZuXu3BSSpnIxEiYz1qBRcIPaAzzhdcus0yxbCue4Wbg3InifnUF/HKmpzy8dJga0KuHYgksx4RMD0rdvArlA/WVMsaQNbFOOvPd5hdfl+VLbanfNWu5hP130oOCIcdfrVorbYnJ7i5FyNEImlSpgyJ7jU2HwpK6cR607QDnCYSXkZEHXlxqz4TaNxEUbm+B13W8og+lAbPwxHypxatjiKz5FbHgwhds22ADK6N/Eh/5LK+tMDtK01xGFxCADPaGWRGdLrpG7pnUtyypdQVkHWRrINT0oa33Jn2oktDKQSNCOE1GdootsjeG8xYx6Cl1zZKS0Ku6DrArq3sxWWVSWzjdEnXoK6MASkgr/ADBPvL5rWVr/ACZ//iuf0t+FZT+n8ga15GV/HAE8ADE8KU7Txa3AQYYda724zhyqnLIjuqtYm8F1JLdKtmUm6N6xaopxFeMX3bb9skDlOVWH2P29v3hbPxNw7qUWcD9obdEgnT8+VWP2f2baww3yAz5jf7+C1OEL55XczOElKkXfaOKQpBYSBpXk23YLsRpPCnvtDtMHIHpAyIqpXcUM5hpBGeo5Hvq01qNmBrHFoW3GoZxNFhJNdNg6aESeWSZxgNp4iyQLV65bz0R2UeIBg+NWfDf4gbQtkA3lccnRD6oFJ8TVTa3uMJrq9dBqqbMMoRb3R6rgv8R3KgvaRjx3WZB671Mbf+IeHbJrTgcd3cYDzK15HgX3hHKi90/rSl1tHejBrg9VHtXs9/ikf7rbH5Ag1I2P2c4B94gA0JG5HdIEV5KrE6efCpJOuvU6V2vykL8PHs2eqJYwLEst62Z5OCTOs9qpv8qwh+F4nk4j1FeSe9nr1OlSCdfU/Sjqj4R3oPyz1L/p/DwYc5/xD8KgPs8g0uacyPwrzrDhichJ5n6V6H7G4KbyLqLa7zf7jTRUZPglki4K7NN7Pg/vj+qP/rUX/Sgmd9T/AD//AIr0w1VPadwLNxeLPPhAEelUjji+xncpLuIl9lkGZ3J6u3/rXY9l0iAyKOhJ+db/AMOAQbnUA+pq5Yiu0RXY7XLyU5dgImZuIOpn5lxXQwuGX4sRa8GX/wBzUvtBhN+04iSMx4VQEBA06AVOWldkaMONzXLL37/Ag9q6GjlJ+QqQ+0GAWCEBPDsMT/5CqATH1rZSSDxPoKTVXCX2NC6ZPlv7l4b21w6/BZbXgiKPnPpQr/4hN+7ZgTAJefQKI86qQt8vCtPZAjp6ml9Rjx6bH3X5Lb/1zd+6n/l+Naqp+4asrvUkH4fF4L/tbZMw/f5VRtr4ZQ0EQY1FehYbbdu6jbxCiIzquf53hWLo4DQSA0ajSrTjGW4MGacbUlwZ7MYNDbB0M9NCMq7x+Cdp3AFUcScoFBYnb9i0iraEGc49DVexftHdZd0NkD558aVKMVQ2qcm5LgU7WBDtJkzrSpw058c/Cicfc3mPKhVWCKDikFzb5CbKtyNTXbsCK0+KAyFB3n5Vwmq+SHEvNDk1JdadaiArkLNDnYySTlOVNzZnXPpwoP2aSFZjxp6NwZk0kuR4r2i9cORwk+grTYZjwn5UW+LTgK5bHiNK6gukRrgsxxPoKnbCDjmaiGOXr5Uw2aj3TkOx96PQczXULqS5MwlgKC50TQcCeFejf4f4QrZa43xOflr6/Kqjh8Ab15MOvwg9o9dc+6vUrSLaRUGQUAAd1aYR0x+p5+XJrl8kTsYFUL2jxW9vDgWJq17QxxVCeJrzramJJNOtkS5Y39jH3XYDiAPI1br5rzvZOJKNINPE2o41MrxmgFoZYlcz1rz7auHNu4yGd0mR416AMQj/AAMCeXGkvtPs73lvfUdtM+pXjSSjaK4p6ZFHd+HoPrXVt5y+VatWd4xMfWt3uwMhWc9Je5WjV3eB7J/KuVxYkbwzrdjEg668qhxNosZBoB9wb9rWspb9lfrWVx24x/cPhSNvjrKyqLgPdkF3WoXrKyg+Ro/pIblQtWVlEi+5wtdisrK4XsC3da4rKyuFkWjYv/bFSYnU91brKXuOuECPUdusrKIr4C00q+bE+G33VlZXdyU/0sc+wv8A3bv+8/WrVj9aysrX/wAMPYUbU+CqLj9aysoMMTeD1o27pWVlKM+TnZX/AHV76traN3H5VlZRYO55W3xfzGusVpWVlZZcnp9P+kVD4qaYbQVlZSl0MKysrK44/9k=",
            calories: "711.4947627868356 kcal",
            fat: "2.0337693953400002 g",
            type: "Veg",
            instructions: `Preheat oven to 350°F (176°C) and prepare a cupcake pan with cupcake liners.
            In a large mixing bowl, cream butter and sugar together until light in color and fluffy, about 3-4 minutes.
            Add sour cream and vanilla extract and mix until well combined.
            Add egg whites in two batches, mixing until well combined after each. Scrape down the sides of the bowl as needed to be sure all ingredients are well incorporated.
            Combine the flour, baking powder and salt in a separate bowl, set aside. Combine the apple butter and milk in a small measuring cup.
            Add half of the dry ingredients to the batter and mix until well combined. Add the apple butter mixture and mix until well combined. Add remaining dry ingredients and mix until well combined. Scrape down the sides of the bowl as needed to be sure all ingredients are well incorporated.
            Fill the cupcake liners about halfway. Bake for 17-19 minutes, or until a toothpick inserted comes out with a few crumbs.`
        },
        {
            id: 11,
            title: "Thomato Chicken",
            image: "https://www.edamam.com/web-img/a23/a2300a1c6b33bee0963f380782d48e27.jpg",
            calories: "2029.1895792685948 kcal",
            fat: "174.63305556185102 g",
            type: "Non-Veg",
            instructions: `First cook the tomato puree with a bit of oil and water for about 2 hours on a medium flame and keep aside.
            In a separate vessel, heat the ghee, add the onions and stir for a bit.
            Add the chicken, ginger paste and garlic paste.
            Cook for for 15 to 20 minutes while stirring all the time.
            Pour in the tomato puree and mix.
            Then add the turmeric powder, red chilli powder, chopped green chillies and salt.
            Stir, cover and cook for about 10-15 minutes.
            Garnish with coriander leaves and serve.`
        },
        {
            id: 12,
            title: "Chocolate & Banana",
            image: "https://www.edamam.com/web-img/a2c/a2cb2a29a29eb7e08b5b0f7719457f9d.jpg",
            calories: "114.66149999893197 kcal",
            fat: "3.6309674999418435 g",
            type: "Veg",
            instructions: `In a blender, combine milk, flour, sugar, salt, 1 teaspoon vanilla, eggs and melted butter. Blend until mixture is 
            smooth and foamy. If possible, let batter sit for 15 minutes at room temperature (or up to overnight in the fridge).
            Heat a medium nonstick skillet over medium heat. Lightly coat with more butter or vegetable oil. Add about one-quarter to one-third 
            cup batter and swirl the batter to completely cover bottom of skillet. Cook until the bottom of the crepe is golden, 2 to 3 minutes. 
            Using a rubber spatula (or chopsticks) loosen edge of crepe then quickly flip. Cook for 1 minute more then slide crepe out of skillet. 
            Repeat with remaining batter, adding more butter or oil to the pan as necessary.
            Fold crepes into quarters. Drizzle with melted chocolate and top with banana slices.`
        },
        {
            id: 13,
            title: "Chocolate Dipped Strawberries",
            image: "https://www.edamam.com/web-img/3c5/3c558709195198381a8d5c535d72a265.jpg",
            calories: "2389.1287641625004 kcal",
            fat: "152.35548549037503 g",
            type: "Veg",
            instructions: `To begin with, wash your strawberries. Pat them dry keeping the stork intact.
            Chop up your chocolate into smallish pieces, this will ensure that it melts correctly. Melt chocolate in batches over a double boiler. 
            A bowl over a saucepan will work perfectly.
            If you use a microwave, melt chocolate in 30-second bursts using half power. You will need to stir between.
            Place the strawberry on a toothpick or skewer or use your fingers. Lower into the chocolate and dip until sufficiently covered.`
        },
    ],
    recipe: null,
    filter: "",
    aboutDetails: {
        aboutImg: "https://i.pinimg.com/originals/ea/aa/f2/eaaaf2bbdce3d0dc7126d308949b7d7c.jpg",
        paragraph: "Food in the south is intrinsically connected to life in the south. It is through eating, sharing, and creating food that pleasure is evoked,connections are forged, context is offerd, and history is created. Across southern states, individual interpretations of food are as varied and compelling as the people who live in our unique cities and towns. Yet ",
        quotation: "We celebrate people, reveal processes, share receipes, and most of all, we have fun."
    }
}

export const recipeReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_RECIPE:
            let arr = state.recipes.filter(recipe => recipe.id == action.payload);
            arr = arr.values();
            for(let val of arr){
                arr =val;
            }
            return {
                ...state,
                recipe: arr
            }
        default:
            return state;
    }
}