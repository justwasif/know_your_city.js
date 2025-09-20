import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count1, setcount1] = useState(0)
  const [messege1,setmessege1]=useState('')

  const [count2, setcount2] = useState(0);
  const [messege2, setmessege2] = useState("");

  const [count3, setcount3] = useState(0);
  const [messege3, setmessege3] = useState("");

  const [count4, setcount4] = useState(0);
  const [messege4, setmessege4] = useState("");

  const [count5, setcount5] = useState(0);
  const [messege5, setmessege5] = useState("");

  const [count6, setcount6] = useState(0);
  const [messege6, setmessege6] = useState("");

  const [count7, setcount7] = useState(0);
  const [messege7, setmessege7] = useState("");

  const [count8, setcount8] = useState(0);
  const [messege8, setmessege8] = useState("");

  const [count9, setcount9] = useState(0);
  const [messege9, setmessege9] = useState("");

  const [count10, setcount10] = useState(0);
  const [messege10, setmessege10] = useState("");

  const [count11, setcount11] = useState(0);
  const [messege11, setmessege11] = useState("");

  const [count12, setcount12] = useState(0);
  const [messege12, setmessege12] = useState("");

  const [count13, setcount13] = useState(0);
  const [messege13, setmessege13] = useState("");

  const [count14, setcount14] = useState(0);
  const [messege14, setmessege14] = useState("");

  const [count15, setcount15] = useState(0);
  const [messege15, setmessege15] = useState("");

  const [count16, setcount16] = useState(0);
  const [messege16, setmessege16] = useState("");

  const [count17, setcount17] = useState(0);
  const [messege17, setmessege17] = useState("");

  const [count18, setcount18] = useState(0);
  const [messege18, setmessege18] = useState("");

  const [count19, setcount19] = useState(0);
  const [messege19, setmessege19] = useState("");

  const [count20, setcount20] = useState(0);
  const [messege20, setmessege20] = useState("");

  const click1=()=>{
    setmessege1('')
    if(count1==0){
      setmessege1("Indore: The Commercial Capital with a Royal Past Indore, the commercial hub of Madhya Pradesh, was the capital of the Holkar dynasty. The city owes much of its planning and development to Maharani Ahilyabai Holkar, a wise and just ruler. The Rajwada Palace, a fine example of Maratha and Mughal architectural styles, stands as a testament to the city's royal past. Indore is also a food lover's paradise, famous for its bustling Sarafa Bazaar, a night street food market.")
      setcount1(1)
      console.log(count1)
      console.log(messege1)
    }
    else if(count1>1){
      //setmessege("messege aaya")
      setcount1(2)
      console.log(count1)
      console.log(messege1)
    }
  };

   const click2 = () => {
    if (count2 === 0) {
      setmessege2("Ujjain: The Spiritual Capital One of the seven sacred cities of the Hindus, Ujjain is a place of great religious significance. It is home to the Mahakaleshwar Jyotirlinga, one of the twelve most sacred Shiva temples. The city has a rich history and was a prominent center of learning during the time of King Vikramaditya. The Kumbh Mela, one of the largest religious gatherings in the world, is held here every 12 years.");
      setcount2(1);
    } else {
      setmessege2("");
      setcount2(0);
    }
  };

  const click3 = () => {
    if (count3 === 0) {
      setmessege3("Dhar: The Learned Capital of the Paramaras Located in the Malwa region, Dhar (historically known as Dhārā Nagara) is an ancient city that rose to prominence as the capital of the powerful Paramara dynasty from the 9th to the 14th century. Its golden age, however, was under the reign of the legendary scholar-king, Raja Bhoj (c. 1010-1055 CE), who transformed the city into a formidable political and cultural hub of medieval India.");
      setcount3(1);
    } else {
      setmessege3("");
      setcount3(0);
    }
  };

  const click4 = () => {
    if (count4 === 0) {
      setmessege4("Khargone: The Heart of Nimar and the Holkar Legacy Khargone is a significant city located in the Nimar region of southwestern Madhya Pradesh, situated on the banks of the Kunda River. The district's history is deeply intertwined with the nearby historical town of Maheshwar, which, under the rule of Maharani Ahilyabai Holkar, became the capital of the Holkar kingdom and a beacon of culture, religion, and craftsmanship.");
      setcount4(1);
    } else {
      setmessege4("");
      setcount4(0);
    }
  };

  const click5 = () => {
    if (count5 === 0) {
      setmessege5("Orchha: The Hidden Gem Located on the banks of the Betwa River, Orchha was the capital of the Bundela Rajputs. The town is known for its magnificent palaces, temples, and cenotaphs (chhatris) that reflect the grandeur of Bundela architecture. The Jahangir Mahal, Raj Mahal, and the Ram Raja Temple are the major attractions of this historic town.");
      setcount5(1);
    } else {
      setmessege5("");
      setcount5(0);
    }
  };

  const click6 = () => {
    if (count6 === 0) {
      setmessege6("Gwalior: The City of Forts and Music Gwalior is dominated by its magnificent hill fort, which has been described as the 'pearl among the fortresses of Hind.' The fort has witnessed the rule of several dynasties, including the Tomars, Mughals, Marathas, and Scindias. The city is also renowned as the birthplace of the legendary musician Tansen and has been a significant center for Hindustani classical music. The Jai Vilas Palace, a part of which is a museum, showcases the opulent lifestyle of the Scindia dynasty.");
      setcount6(1);
    } else {
      setmessege6("");
      setcount6(0);
    }
  };

  const click7 = () => {
    if (count7 === 0) {
      setmessege7("Satna: Gateway to Ancient History, Epic Tales, and Musical Legends Satna is a prominent city in the Baghelkhand region of Madhya Pradesh. While the modern city is a major industrial hub, particularly known for its cement factories, its true value for a historical and cultural project lies in the extraordinary heritage sites located in its vicinity. The district serves as a custodian to some of India's most important ancient Buddhist art, a deeply revered pilgrimage landscape from the Ramayana, and a world-renowned center for classical music.");
      setcount7(1);
    } else {
      setmessege7("");
      setcount7(0);
    }
  };

  const click8 = () => {
    if (count8 === 0) {
      setmessege8("Jabalpur: The Marble City Situated on the banks of the river Narmada, Jabalpur is famous for its spectacular Marble Rocks at Bhedaghat. The city has a rich history, having been a center of the Kalachuri and Gond dynasties. The Madan Mahal Fort, built by the Gond ruler Raja Madan Shah, offers panoramic views of the city. Jabalpur also played a significant role in India's freedom struggle.");
      setcount8(1);
    } else {
      setmessege8("");
      setcount8(0);
    }
  };

  const click9 = () => {
    if (count9 === 0) {
      setmessege9("Bhopal: The City of Lakes and Begums The capital city of Madhya Pradesh, Bhopal, has a fascinating history. While its origins can be traced back to the 11th century, the modern city was shaped by Dost Mohammad Khan in the 18th century. A unique aspect of Bhopal's history is the rule of the Begums for over a century, who were great patrons of art and architecture. The city is known for its two beautiful lakes, the Upper Lake and the Lower Lake, and its stunning mosques, including the Taj-ul-Masajid, one of the largest in Asia. The old city with its bustling bazaars and Havelis stands in contrast to the well-planned new city.");
      setcount9(1);
    } else {
      setmessege9("");
      setcount9(0);
    }
  };

  const click10 = () => {
    if (count10 === 0) {
      setmessege10("Vidisha: The Crucible of Empires and Faiths Vidisha, known in antiquity as Besnagar, is a prime example of an ancient Indian metropolis. Located at the fertile confluence of the Betwa and Bes rivers, it was a wealthy commercial and administrative hub for over a thousand years. Its importance is not just in its own ruins, but in its direct connection to the rise of Buddhism under Ashoka, the Indo-Greek interactions that followed, and the artistic flourishing of the Gupta Empire");
      setcount10(1);
    } else {
      setmessege10("");
      setcount10(0);
    }
  };

  const click11 = () => {
    if (count11 === 0) {
      setmessege11("Morena: Land of the Rediscovered Temples Morena and its surrounding region were a major cultural and religious hub between the 8th and 12th centuries, primarily under the patronage of the Gurjara-Pratihara dynasty and their feudatories, the Kachchhapaghata kings. These rulers were prolific builders, and the area became a canvas for some of the most spectacular temple architecture of its time. Many of these sites lay hidden or in ruins for centuries, and are only now being recognized for their immense historical value.");
      setcount11(1);
    } else {
      setmessege11("");
      setcount11(0);
    }
  };

  const click12 = () => {
    if (count12 === 0) {
      setmessege12("Chhindwara: The Heart of Tribal Culture and Natural Wonders Nestled in the lush Satpura mountain range, Chhindwara is a district whose history is inseparable from its forests and its indigenous communities, primarily the Gond and Bharia tribes. Its story is not one of grand empires but of powerful tribal kingdoms, deep-rooted traditions, and a unique relationship between people and nature.");
      setcount12(1);
    } else {
      setmessege12("");
      setcount12(0);
    }
  };

  const click13 = () => {
    if (count13 === 0) {
      setmessege13("Jhabua: The Vibrant Heartland of the Bhil Tribe Jhabua is a district located in the far western part of Madhya Pradesh, sharing borders with Gujarat and Rajasthan. This geographical crossroads has enriched its culture, but its core identity is that of a quintessential tribal heartland. Jhabua is synonymous with the Bhil tribe, and its history and culture are a reflection of their art, festivals, and resilient spirit.");
      setcount13(1);
    } else {
      setmessege13("");
      setcount13(0);
    }
  };

  const click14 = () => {
    if (count14 === 0) {
      setmessege14("Chhatarpur: Home of Temples and Warriors Chhatarpur is a major city and district in the heart of the historic Bundelkhand region of Madhya Pradesh. Its identity is uniquely twofold. On one hand, it is the administrative home of the world-renowned Khajuraho Group of Monuments, a testament to the architectural genius of the Chandela dynasty. On the other, the city itself was founded by and named after the legendary Bundela warrior-king, Maharaja Chhatrasal, a symbol of Bundeli pride and defiance");
      setcount14(1);
    } else {
      setmessege14("");
      setcount14(0);
    }
  };

  const click15 = () => {
    if (count15 === 0) {
      setmessege15("Khandwa: A Confluence of Faith, Art, and Spirituality Khandwa, the administrative headquarters of the East Nimar district, is a city with a multifaceted identity. It is a land of immense spiritual and religious significance, being the home of the sacred Omkareshwar Jyotirlinga. Simultaneously, it is celebrated in modern Indian history as a cradle of arts and literature, having given the country some of its most beloved poets and cinematic personalities. Its culture is a unique blend of ancient faith, ascetic spirituality, and creative genius.");
      setcount15(1);
    } else {
      setmessege15("");
      setcount15(0);
    }
  };

  const click16 = () => {
    if (count16 === 0) {
      setmessege16("Narsinghpur: A Land of Saints, Warriors, and Gurus Located in the heart of the Narmada River valley, Narsinghpur is a land of immense fertility and deep historical significance. Its identity has been shaped by the sacred river that flows through it, nurturing not only its rich agriculture but also a remarkable legacy of spirituality. From being a part of the valiant Gond kingdom to, astoundingly, being the birthplace of two of the 20th century's most influential global spiritual leaders, Narsinghpur's story is a unique blend of devotion, philosophy, and valour.");
      setcount16(1);
    } else {
      setmessege16("");
      setcount16(0);
    }
  };

  const click17 = () => {
    if (count17 === 0) {
      setmessege17("Narmadapuram (Hoshangabad): Gateway to the Satpuras Narmadapuram, formerly known as Hoshangabad, is a historic city situated on the southern banks of the Narmada River. Its identity is a rich tapestry woven from threads of prehistoric art, a medieval strategic past, and its modern role as the primary gateway to the stunning natural and wildlife heritage of the Satpura hills, including Madhya Pradesh's only hill station, Pachmarhi.");
      setcount17(1);
    } else {
      setmessege17("");
      setcount17(0);
    }
  };

  const click18 = () => {
    if (count18 === 0) {
      setmessege18("Anuppur: The Sacred Source of the Narmada Anuppur is a district in the eastern part of Madhya Pradesh, located where the great Vindhya and Satpura mountain ranges meet. Its historical and cultural identity is overwhelmingly defined by one sacred place within its borders: Amarkantak. Known as the Tirtharaj (the king of pilgrimages), Amarkantak is the hallowed ground from where the holy Narmada River, the lifeline of Central India, begins its journey to the sea.");
      setcount18(1);
    } else {
      setmessege18("");
      setcount18(0);
    }
  };

  const click19 = () => {
    if (count19 === 0) {
      setmessege19("Umaria: Where History and Wilderness Converge Umaria is a district located in the eastern part of Madhya Pradesh, and its identity is almost entirely synonymous with the magnificent Bandhavgarh National Park. This celebrated tiger reserve is unique because it is not merely a sanctuary for wildlife; it is a landscape steeped in mythology and history, dominated by an ancient fort that is as legendary as the royal tigers that prowl its foothills.");
      setcount19(1);
    } else {
      setmessege19("");
      setcount19(0);
    }
  };

  const click20 = () => {
    if (count20 === 0) {
      setmessege20("Rewa: The Land of Tansen and the White Tiger Rewa is a major city in the Baghelkhand region of northeastern Madhya Pradesh. For centuries, it served as the capital of the powerful Baghel dynasty. Its historical and cultural identity is remarkably rich, famed in medieval times as a great center of arts that nurtured the legendary musician Tansen, and celebrated in the modern era as the Land of the White Tiger,from where all the world's white tigers in captivity trace their lineage");
      setcount20(1);
    } else {
      setmessege20("");
      setcount20(0);
    }
  };
  

  return (
    <>
     <h1>MY STATE MADHYA PRADESH</h1>
     <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/Madhya_Pradesh_district_map.svg" width="800" height="400"></img><video width="600" height="500" controls><source src="/kyc.mp4" type="video/mp4" /></video>
     <br />
     <button onClick={click1}>number 1</button>
     <p>{messege1}</p>
     
     <button onClick={click2}>Number 2</button>
      <p>{messege2}</p>

      <button onClick={click3}>Number 3</button>
      <p>{messege3}</p>

      <button onClick={click4}>Number 4</button>
      <p>{messege4}</p>

      <button onClick={click5}>Number 5</button>
      <p>{messege5}</p>

      <button onClick={click6}>Number 6</button>
      <p>{messege6}</p>

      <button onClick={click7}>Number 7</button>
      <p>{messege7}</p>

      <button onClick={click8}>Number 8</button>
      <p>{messege8}</p>

      <button onClick={click9}>Number 9</button>
      <p>{messege9}</p>

      <button onClick={click10}>Number 10</button>
      <p>{messege10}</p>

      <button onClick={click11}>Number 11</button>
      <p>{messege11}</p>

      <button onClick={click12}>Number 12</button>
      <p>{messege12}</p>

      <button onClick={click13}>Number 13</button>
      <p>{messege13}</p>

      <button onClick={click14}>Number 14</button>
      <p>{messege14}</p>

      <button onClick={click15}>Number 15</button>
      <p>{messege15}</p>

      <button onClick={click16}>Number 16</button>
      <p>{messege16}</p>

      <button onClick={click17}>Number 17</button>
      <p>{messege17}</p>

      <button onClick={click18}>Number 18</button>
      <p>{messege18}</p>

      <button onClick={click19}>Number 19</button>
      <p>{messege19}</p>

      <button onClick={click20}>Number 20</button>
      <p>{messege20}</p>

     
    </>
  );
}


export default App
