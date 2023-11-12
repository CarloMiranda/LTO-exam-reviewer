import React, { useState } from "react";
import { Link } from "react-router-dom";

function Tagalogtest() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Sa panahon ng pagmamaneho, dapat mong tingnan ang iyong side at rear view mirror?",
      options: [
        { id: 0, text: "Agad", isCorrect: true },
        { id: 1, text: "Kung gusto mo", isCorrect: false },
        {
          id: 2,
          text: "Hindi bababa sa isang beses kada isang minuto",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Maari kang humigit-kumulang sa kanang bahagi ng iyong sasakyan kung?",
      options: [
        {
          id: 0,
          text: "Ang kalsada ay may dalawang o higit pang linya na papunta sa isang direksyon",
          isCorrect: true,
        },
        { id: 1, text: "Ang kalsada ay dalawang-daan", isCorrect: false },
        { id: 2, text: "Ang bangketa ay malawak", isCorrect: false },
      ],
    },
    {
      text: "Ang isang tao na nagmamaneho habang nasa ilalim ng epekto ng alak o droga ay parurusahan sa ilalim ng batas ng:",
      options: [
        { id: 0, text: "Suspension ng lisensya", isCorrect: false },
        { id: 1, text: "Multa at pagkakabilanggo", isCorrect: true },
        { id: 2, text: "Lahat ng sagot ay tama", isCorrect: false },
      ],
    },
    {
      text: "Bago lumabas sa pook ng paradahan, dapat mong:",
      options: [
        { id: 0, text: "Tingnan muna ang paligid", isCorrect: true },
        { id: 1, text: "Tumunog ng busina", isCorrect: false },
        { id: 2, text: "Agad na umalis", isCorrect: false },
      ],
    },
    {
      text: "Ang minimum na edad sa pag-apply para sa Non-Professional Driver’s License ay:",
      options: [
        { id: 0, text: "18 taong gulang", isCorrect: true },
        { id: 1, text: "16 taong gulang", isCorrect: false },
        { id: 2, text: "17 taong gulang", isCorrect: false },
      ],
    },
    {
      text: "Pagkatapos bumiyahe, gusto mong maayos na bumalik sa linya kung saan ka galing, dapat mong:",
      options: [
        {
          id: 0,
          text: "Gamitin ang rear view mirror upang suriin ang sasakyan na iyong inovertake",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Tingnan ang sasakyan na iyong inovertake sa pamamagitan ng pag-ikot ng iyong ulo",
          isCorrect: false,
        },
        { id: 2, text: "Huminto", isCorrect: false },
      ],
    },
    {
      text: "Sa isang krusan na may STOP sign, dapat mong:",
      options: [
        {
          id: 0,
          text: "Bagalan at magpatuloy kung walang panganib",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Huminto at magpatuloy kung walang panganib",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Magbigay-daan sa mga sasakyan na pumupunta mula sa kaliwa at kanan, magpatuloy kung walang panganib",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Ang pagkuha ng lisensya ng nagmamaneho ay:",
      options: [
        { id: 0, text: "Isang karangalan", isCorrect: false },
        { id: 1, text: "Isang pribilehiyo", isCorrect: true },
        { id: 2, text: "Isang karapatan", isCorrect: false },
      ],
    },
    {
      text: "Ang Non-Professional driver’s license ay angkop para sa:",
      options: [
        { id: 0, text: "Pribadong sasakyan", isCorrect: true },
        { id: 1, text: "Pampasaherong sasakyan", isCorrect: false },
        { id: 2, text: "Lahat ng uri ng sasakyan", isCorrect: false },
      ],
    },
    {
      text: "Ano ang dapat mong ihanda para sa isang mahabang biyahe?",
      options: [
        {
          id: 0,
          text: "Ihanda ang mga kinakailangang kagamitan na maaaring gamitin sa pagkumpuni ng sasakyan",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Planuhin ang iyong ruta at tiyakin na maayos ang kondisyon ng sasakyan",
          isCorrect: true,
        },
        { id: 2, text: "Lahat ng sagot ay tama", isCorrect: false },
      ],
    },
    {
      text: "Kapag nag-paparada sa paakyat at paralelo sa bangketa, dapat mong i-ikot ang gulong:",
      options: [
        { id: 0, text: "Papunta sa bangketa", isCorrect: false },
        { id: 1, text: "Palayo sa bangketa", isCorrect: false },
        { id: 2, text: "Paralelo sa bangketa", isCorrect: true },
      ],
    },
    {
      text: "Ang sasakyan ay itinuturing na naka-parka kapag:",
      options: [
        {
          id: 0,
          text: "Ang sasakyan ay hindi umaandar habang nagbababa ng pasahero",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Ang sasakyan ay hindi umaandar habang nag-aangkat ng pasahero",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Ang sasakyan ay nakatigil na may nakapatay na makina",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Ano ang kahulugan ng pag-blink ng pulang ilaw ng trapiko?",
      options: [
        { id: 0, text: "Maghintay sa berdeng signal", isCorrect: false },
        {
          id: 1,
          text: "Bagalan at magpatuloy kung wala nang panganib sa harap",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Huminto at magpatuloy kung wala nang panganib sa harap",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Ano ang dapat mong gawin bago mag-kaliwa o mag-kanan?",
      options: [
        {
          id: 0,
          text: "Derecho mag-kaliwa at tutunog ng busina",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Magbigay senyas ng hindi bababa sa 30 metro bago mag-kaliwa",
          isCorrect: true,
        },
        { id: 2, text: "Balewalain ang pagsenyas", isCorrect: false },
      ],
    },
    {
      text: "Sa pagbabago ng lane, dapat kang magbigay senyas, suriin ang iyong rear view mirror at:",
      options: [
        {
          id: 0,
          text: "Mag-ingat sa paparating na sasakyan",
          isCorrect: true,
        },
        { id: 1, text: "Tumunog ng busina", isCorrect: false },
        { id: 2, text: "I-on ang headlight ng sasakyan", isCorrect: false },
      ],
    },
    {
      text: "Maari kang humigit-kumulang kumaliwa sa isang highway kung ito ay may dalawang linya na mayroong:",
      options: [
        { id: 0, text: "Continuous na puting linya", isCorrect: false },
        { id: 1, text: "Broken na dilaw na linya", isCorrect: false },
        { id: 2, text: "Continuous na dilaw na linya", isCorrect: true },
      ],
    },
    {
      text: "Ang hindi pagsunod sa mga patakaran ng kalsada at trapiko:",
      options: [
        {
          id: 0,
          text: "Nagpapatunay na ikaw ay magaling na driver",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Maaaring magdulot sa iyo ng aksidente",
          isCorrect: true,
        },
        { id: 2, text: "Nakakatipid ng gasolina", isCorrect: false },
      ],
    },
    {
      text: "Mas mapanganib ang mag-kaliwa kaysa sa mag-kanan dahil:",
      options: [
        {
          id: 0,
          text: "Ang mga sasakyan na galing sa kaliwa ay mas mabilis",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Kailangan mong maging maingat sa mga sasakyan na galing sa kaliwa o kanan ng kalsada",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Ang kalsada ay may mas maraming linya",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ang pinakaligtas na tugon kahit may karapatan ka sa kalsada ay:",
      options: [
        { id: 0, text: "Huwag pilitin ang iyong karapatan", isCorrect: true },
        { id: 1, text: "Tumunog ng busina", isCorrect: false },
        { id: 2, text: "Pilitin ang iyong karapatan", isCorrect: false },
      ],
    },
    {
      text: "Sa isang rotunda (rotunda), sino ang may karapatan sa kalsada?",
      options: [
        {
          id: 0,
          text: "Ang mga sasakyan na papalapit sa rotunda",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Ang mga sasakyan sa loob ng rotunda",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Ang mga sasakyan na nakaharap sa berdeng ilaw",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Bawal kang humigit-kumulang sumalubong sa footbridge dahil:",
      options: [
        { id: 0, text: "Ang mga tao ay naglalakad", isCorrect: true },
        {
          id: 1,
          text: "Hindi mo makikita ang mga paparating na sasakyan",
          isCorrect: false,
        },
        { id: 2, text: "Makitid ang tulay", isCorrect: false },
      ],
    },
    {
      text: "Ano ang kahulugan ng pag-blink ng dilaw na ilaw ng trapiko nang tuloy-tuloy?",
      options: [
        {
          id: 0,
          text: "Bagalan at magpatuloy kung wala nang panganib",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Huminto at maghintay sa pag-ikot ng ilaw ng trapiko",
          isCorrect: false,
        },
        { id: 2, text: "Maghintay sa berdeng ilaw", isCorrect: false },
      ],
    },
    {
      text: "Ano ang kahulugan ng continuous na dilaw na linya sa kalsada?",
      options: [
        {
          id: 0,
          text: "Maari kang humigit-kumulang kumaliwa",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Bawal ang humigit-kumulang kumaliwa",
          isCorrect: true,
        },
        { id: 2, text: "Lahat ng sagot ay tama", isCorrect: false },
      ],
    },
    {
      text: "Ayon sa batas, hindi ka pinapayagang magmaneho ng mabilis, maliban kung:",
      options: [
        { id: 0, text: "Walang panganib sa daan", isCorrect: false },
        {
          id: 1,
          text: "Ang bilis ay ayon sa itinakdang speed limit",
          isCorrect: true,
        },
        { id: 2, text: "Lahat ng sagot ay tama", isCorrect: false },
      ],
    },
    {
      text: "Ang pagkakaroon ng lisensya ay nangangahulugang maaari kang magmaneho ng:",
      options: [
        { id: 0, text: "Lahat ng uri ng sasakyan", isCorrect: false },
        {
          id: 1,
          text: "Mga sasakyang pinapayagan ayon sa iyong lisensya",
          isCorrect: true,
        },
        { id: 2, text: "Pampasaherong sasakyan lamang", isCorrect: false },
      ],
    },
    {
      text: "Kung ang sasakyan sa harap mo ay may mataas na ilaw na nakaka-blind sa iyong paningin, ano ang dapat mong gawin?",
      options: [
        {
          id: 0,
          text: "I-on ang iyong headlight ng mataas din",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Huwag tignan ang maliwanag na ilaw, mabilis na tingnan ang kanan na bahagi ng kalsada",
          isCorrect: true,
        },
        { id: 2, text: "Tumitig sa maliwanag na ilaw", isCorrect: false },
      ],
    },
    {
      text: "Kung ikaw ay papalapit sa isang kurba, ano ang dapat mong gawin?",
      options: [
        { id: 0, text: "Bagalan", isCorrect: true },
        { id: 1, text: "Pabilisan", isCorrect: false },
        { id: 2, text: "Biglaang mag-apak ng preno", isCorrect: false },
      ],
    },
    {
      text: "Ano ang kahulugan ng isang triangle traffic sign na may pulang border color?",
      options: [
        { id: 0, text: "Paalala", isCorrect: false },
        { id: 1, text: "Babala", isCorrect: true },
        { id: 2, text: "Impormasyon", isCorrect: false },
      ],
    },
    {
      text: "Ano ang kahulugan ng square o rectangle traffic sign na may kulay na blue at puti?",
      options: [
        { id: 0, text: "Nagbibigay ng direksyon", isCorrect: false },
        { id: 1, text: "Babala", isCorrect: true },
        { id: 2, text: "Impormasyon", isCorrect: false },
      ],
    },
    {
      text: "Ano ang kahulugan ng circle, octagon, o inverted triangle traffic sign na may pulang border color?",
      options: [
        { id: 0, text: "Regulatory sign", isCorrect: true },
        { id: 1, text: "Babala", isCorrect: false },
        { id: 2, text: "Nagbibigay ng direksyon", isCorrect: false },
      ],
    },
    {
      text: "Ano ang kahulugan ng berdeng ilaw ng trapiko?",
      options: [
        { id: 0, text: "Go signal para sa sasakyan", isCorrect: true },
        { id: 1, text: "Huminto sa itinakdang linya", isCorrect: false },
        {
          id: 2,
          text: "Maari kang magpatuloy ng mabagal",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ano ang kahulugan ng blinking na pulang ilaw ng trapiko?",
      options: [
        { id: 0, text: "Huminto sa itinakdang linya", isCorrect: true },
        {
          id: 1,
          text: "Huminto ng sandali at magpatuloy kung wala nang panganib",
          isCorrect: false,
        },
        { id: 2, text: "Magmaneho ng mas mabilis", isCorrect: false },
      ],
    },
    {
      text: "Ano ang kahulugan ng dilaw na ilaw ng trapiko?",
      options: [
        { id: 0, text: "Huminto", isCorrect: false },
        {
          id: 1,
          text: "Maghanda na huminto, malapit nang mag-pula ang ilaw ng trapiko",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Maari kang magpatuloy, pero magpabagal",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ano ang kahulugan ng berdeng ilaw ng trapiko?",
      options: [
        {
          id: 0,
          text: "Ang sasakyan ay hindi dapat huminto",
          isCorrect: true,
        },
        { id: 1, text: "Ang sasakyan ay dapat huminto", isCorrect: false },
        {
          id: 2,
          text: "Ang sasakyan ay dapat magpabagal",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ano ang kahulugan ng berdeng arrow traffic light?",
      options: [
        {
          id: 0,
          text: "Bawal pumasok sa direksyon ng arrow",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Pinapayagan ang mga sasakyan na mag-right o mag-left",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Maaring tawirin ng mga pedestrian",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ano ang kahulugan ng dilaw na arrow traffic light?",
      options: [
        {
          id: 0,
          text: "Nagbibigay senyas para sa direksyon ng right o left",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Ang red arrow traffic light ay malapit nang mag-light up",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Pinapayagan ang mga sasakyan na mag-left, right, o magtuloy ng deretso",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ano ang mga puting guhit sa kalsada?",
      options: [
        {
          id: 0,
          text: "Naghihiwalay ng mga lane na papunta sa iisang direksyon",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Naghihiwalay ng trapiko na papunta sa iisang direksyon",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Senyas na pwede kang mag-left o mag-right",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ang broken yellow line sa kalsada ay nangangahulugang:",
      options: [
        {
          id: 0,
          text: "Maari kang humigit-kumulang kumaliwa",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Bawal humigit-kumulang kumaliwa o kumanan",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Maari kang humigit-kumulang kumaliwa sa kaliw or kanan",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ang broken white line sa kalsada ay nangangahulugang:",
      options: [
        {
          id: 0,
          text: "Maari kang humigit-kumulang kumaliwa o kumanan kung walang panganib",
          isCorrect: true,
        },
        { id: 1, text: "Bawal kumaliwa sa kaliwa", isCorrect: false },
        { id: 2, text: "Bawal kumaliwa sa kanan", isCorrect: false },
      ],
    },
    {
      text: "Kapag ikaw ay nagmamaneho sa gabi, ano ang dapat mong gawin upang makaiwas sa aksidente?",
      options: [
        { id: 0, text: "Hindi maglagay ng ilaw sa sasakyan", isCorrect: false },
        {
          id: 1,
          text: "Manatili sa tamang bilis at iwasan ang biglang pagliko",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Sumunod sa sasakyan na nasa harap kahit mabilis ito",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Ano ang ibig sabihin ng puting guhit sa gitna ng kalsada?",
      options: [
        {
          id: 0,
          text: "Maaring mag-overtake sa kaliwa o kanan",
          isCorrect: false,
        },
        { id: 1, text: "Bawal mag-overtake", isCorrect: true },
        { id: 2, text: "Bawal tumawid ang pedestrian", isCorrect: false },
      ],
    },
    {
      text: "Sa isang kahabaan ng kalsada, kailan mo dapat gamitin ang mga hazard lights?",
      options: [
        { id: 0, text: "Kapag gusto mo lang", isCorrect: false },
        { id: 1, text: "Kapag may emergency o aksidente", isCorrect: true },
        { id: 2, text: "Sa lahat ng pagkakataon", isCorrect: false },
      ],
    },
    {
      text: "Kapag ikaw ay magpaparada sa gilid ng kalsada, ano ang dapat mong gawin?",
      options: [
        {
          id: 0,
          text: "Basta't hindi nagbibigay ng sagabal sa ibang sasakyan",
          isCorrect: false,
        },
        { id: 1, text: "Iwanan ang sasakyan at maglakad", isCorrect: false },
        {
          id: 2,
          text: "Iwanan ang sasakyan ngunit patayin ang makina at ilagay ang parking brake",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Kailan mo dapat gamitin ang seatbelt?",
      options: [
        { id: 0, text: "Kapag malayo ang byahe", isCorrect: false },
        { id: 1, text: "Lahat ng pagkakataon", isCorrect: true },
        { id: 2, text: "Kapag mag-isa ka lang sa sasakyan", isCorrect: false },
      ],
    },
    {
      text: "Ano ang kahulugan ng blue na guhit sa kalsada?",
      options: [
        { id: 0, text: "Zone ng loading at unloading", isCorrect: false },
        { id: 1, text: "Motorcycle lane", isCorrect: true },
        { id: 2, text: "Bike lane", isCorrect: false },
      ],
    },
    {
      text: "Paano ka dapat mag-react kapag may nag-overtake sa iyo?",
      options: [
        { id: 0, text: "Bilisan para hindi ka matambakan", isCorrect: false },
        {
          id: 1,
          text: "Panatilihing steady ang takbo at bigyan ng puwang",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Sumunod sa sasakyan na nag-overtake",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Kapag ikaw ay natataranta habang nagmamaneho, ano ang dapat mong gawin?",
      options: [
        {
          id: 0,
          text: "Itigil ang sasakyan sa gitna ng kalsada",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Iwanan ang sasakyan at lumakad palayo",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Tumabi sa kalsada at huminga ng malalim upang magpakalma",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Kailan mo dapat gamitin ang ilaw sa ulo ng sasakyan?",
      options: [
        { id: 0, text: "Lahat ng pagkakataon", isCorrect: false },
        {
          id: 1,
          text: "Sa gabi o kahit anong oras na madilim",
          isCorrect: true,
        },
        { id: 2, text: "Kapag maulan", isCorrect: false },
      ],
    },
    {
      text: "Ano ang ibig sabihin ng puting guhit sa tapat ng pedestrian lane?",
      options: [
        {
          id: 0,
          text: "Maari kang maglakad kahit walang tseke",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Hintuan ang sasakyan at hayaang dumaan ang pedestrian",
          isCorrect: true,
        },
        { id: 2, text: "Lugar kung saan puwedeng magpark", isCorrect: false },
      ],
    },
    {
      text: "Kapag ikaw ay magtu-turn sa isang kanto, ano ang dapat mong gawin?",
      options: [
        {
          id: 0,
          text: "Hindi magbigay ng senyas para mas ligtas",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Magbigay ng senyas hindi bababa sa 30 metro bago mag-turn",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Biglang kumanan o kumaliwa nang walang senyas",
          isCorrect: false,
        },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <div className="fw-bold fs-2 shadow py-2 text-center rounded bg-light">
        <Link to="/" className="text-primary text-decoration-none">
          Home
        </Link>
      </div>

      {/* 1. Header  */}
      <h1 className="mt-5 fw-bold">LTO Reviewer</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Tagalogtest;
