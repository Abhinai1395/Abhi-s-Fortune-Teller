const synth = window.speechSynthesis;

document.querySelector("#tell").addEventListener("click",getFortune)

function getFortune (){
    const name = document.querySelector("#name").value.toLowerCase()
    let fortune

    switch (name) {
        case "abhi":
        case "abhinai":
            let arrA = [`${name} is destined to be a One Piece hero, just like Luffy! He will bravely embark on an epic journey to fulfill his dreams, and lead his crew to success and glory!`, `${name} is destined for greatness! He has the strength and courage of a true One Piece Hero, just like Luffy, and will be a force to be reckoned with in the future.`, `The journey of ${name}, like One Piece hero Luffy, will be full of exciting and challenging adventures that will help him reach his goals!`,`${name} is destined to become the next great pirate king, just like Luffy! With determination and courage, there's no journey too difficult for him!`,`${name} is destined to be a hero like Luffy, achieving great feats and overcoming all odds to become a champion of justice!`,`${name}, like Luffy and Zoro, has the potential to become a great leader with courage, strength, and a never-give-up attitude`,`With ${name} at the helm, nothing can stand in the way of One Piece's Luffy and Zoro! He is a fearless leader who will guide them to greatness.`]
            let i = Math.floor(Math.random() * arrA.length)
            fortune = arrA[i]
            break

        case "dhanu":
        case "dhanu paul":
            let arrB = [`${name}, the warrior of the seas, will find strength and courage to bravely face any obstacle and emerge victorious!`,`A ${name} born with the spirit of Luffy or Zoro will be unstoppable in their pursuit of greatness`,`${name} is destined to become a powerful warrior and protector, just like the beloved swordsman Zoro from One Piece`,`${name} has the courage of a lion and the tenacity of a pirate - just like Luffy from One Piece. The adventures ahead of Dhanu will be filled with triumph and success`,`The luck of ${name}, as embodied by One Piece's Luffy and Zoro, is said to be a great fortune that will bring them to the top of their dreams.`]
            let b = Math.floor(Math.random() * arrB.length)
            fortune = arrB[b]
            break
        case "dheeru":
        case "dheeraj":
            let arrC = [`${name}'s deep philosophical understanding has made him a wise sage, able to offer guidance to those seeking clarity and direction.`,`${name} is a philosopher of the modern age, whose thought-provoking insights have helped to shape our understanding of the world around us`,`${name}'s philosophy is that life is an ever-evolving journey of self-discovery. With every step, we must strive to learn and grow as individuals, and to be the best versions of ourselves possible`]
            let c = Math.floor(Math.random() * arrC.length)
            fortune = arrC[c]
            break
        case "naveena":
        case "navi":
        case "navee":
            let arrD = [`${name}'s kindness and beauty will bring her much joy and success in life.`,` ${name}'s inner beauty radiates outward, drawing people to her with admiration.`,` ${name}'s gentle nature and compassionate heart will open up many doors of opportunity.`,` ${name}'s beauty and grace will be remembered for generations to come.`,`${name} is blessed with a kind heart and beautiful spirit.`,`${name}'s kindness will bring her a lifetime of success and happiness.`,`By being her true self, ${name} will unlock a world of possibilities.`]
            let d = Math.floor(Math.random() * arrD.length)
            fortune = arrD[d]
            break
        case "mercy":
        case "shrenita":
        case "shrenitha":
            let arrE = [`${name}'s beauty is matched only by her generosity and her love of good food.`,`${name} is a talented chef who whips up delicious meals with an extra dose of mercy for everyone.`,`${name}'s generous heart will always be filled with the love of good food.`,`${name}'s passion for cooking and eating will always be rewarded with bountiful blessings of mercy.`,`${name}'s passion for food will be matched by her passion for life; she'll bring joy and mercy to all who are lucky enough to experience`,`${name}'s generosity of spirit will be matched by her generosity in the kitchen; she'll become a master chef known for her delicious dishes.`]
            let e = Math.floor(Math.random() * arrE.length)
            fortune = arrE[e]
            break
        case "nammu":
        case "namratha":
            let arrF = [`${name} will never give up in the face of adversity, and her beauty and stubbornness will make her unstoppable.`,`${name}'s beauty and tenacity will open doors that no one else can open.`,`${name} is a beautiful and stubborn girl with a heart of gold who will always find a way to get what she wants.`,`${name}'s beauty is matched only by her strength of will, making her a force to be reckoned with.`,`${name}'s stubbornness is both her strength and her most endearing quality, making her one of a kind.`,`With determination and grace, ${name} will always find a way to succeed in life, no matter what obstacles stand in her way`,`${name} is a determined and strong-willed girl who will always strive for success.`]
            let f = Math.floor(Math.random() * arrF.length)
            fortune = arrF[f]
            break
        default:
            let arr = [`You are destined for great things and are sure to achieve success in all your endeavors.`,`You are an inspiration to those around you and will soon be recognized as a leader in your field!`,`Congratulations! The future holds great things in store for you.`,`Fortune favors the brave! You have been blessed with the courage and determination to achieve great things in life.`,`Fortune favors you - you will find success in all of your future endeavors!`,`You are destined for great things in life, and you will find success and happiness as you pursue your goals.`,`You will soon receive a pleasant surprise that will lift your spirits.`,`You are on the cusp of achieving something great - don't give up!`,`You will soon be rewarded for all of your hard work and dedication.`]
            let g = Math.floor(Math.random() * arr.length)
            fortune = arr[g]
            document.querySelector("#note").innerText = "Note: This fortune teller works best for the particular group of six people, if you are one of them please enter the name that is used by friends and family"
            setTimeout(() => {
                document.querySelector("#note").innerText = ""
            }, 8000);
    }

    const utterThis = new SpeechSynthesisUtterance(fortune)
    synth.speak(utterThis)
    document.querySelector("#placeToYell").innerText = fortune

}
