import React, { useState } from "react";
import { Link } from "react-router-dom";

function Englishtest() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "While driving, you should look at your side and rear view mirror?",
      options: [
        { id: 0, text: "Quickly", isCorrect: true },
        { id: 1, text: "If you want", isCorrect: false },
        { id: 2, text: "Not less than once per one minute", isCorrect: false },
      ],
    },
    {
      text: "You can overtake in the right side of your vehicle if?",
      options: [
        {
          id: 0,
          text: "The road has two or more lanes going in one direction",
          isCorrect: true,
        },
        { id: 1, text: "The road is two-way", isCorrect: false },
        { id: 2, text: "The sidewalk is wide", isCorrect: false },
      ],
    },
    {
      text: "A person who drives while under the influence of alcohol or drugs is punishable by law with:",
      options: [
        { id: 0, text: "Suspension of license", isCorrect: false },
        { id: 1, text: "Fines and imprisonment", isCorrect: true },
        { id: 2, text: "All answers are correct", isCorrect: false },
      ],
    },
    {
      text: "Before leaving the parking area, you should:",
      options: [
        { id: 0, text: "Look around first", isCorrect: true },
        { id: 1, text: "Sound your horn", isCorrect: false },
        { id: 2, text: "Immediately go", isCorrect: false },
      ],
    },
    {
      text: "The minimum age in the application for Non-Professional Driver’s License is:",
      options: [
        { id: 0, text: "18 years old", isCorrect: true },
        { id: 1, text: "16 years old", isCorrect: false },
        { id: 2, text: "17 years old", isCorrect: false },
      ],
    },
    {
      text: "After overtaking, you want to safely go back to the lane where you were, you should:",
      options: [
        {
          id: 0,
          text: "Use the rear view mirror to check the vehicle you have overtaken",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Look at the vehicle you have overtaken by turning your head",
          isCorrect: false,
        },
        { id: 2, text: "Stop", isCorrect: false },
      ],
    },
    {
      text: "In an intersection with a STOP sign, you should:",
      options: [
        {
          id: 0,
          text: "Slow down and proceed if there is no danger",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Stop and proceed if there is no danger",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Give way to vehicles going from left and right, proceed if there is no danger",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Obtaining a driver’s license is:",
      options: [
        { id: 0, text: "An honor", isCorrect: false },
        { id: 1, text: "A privilege", isCorrect: true },
        { id: 2, text: "A right", isCorrect: false },
      ],
    },
    {
      text: "A Non-Professional driver’s license is suited for:",
      options: [
        { id: 0, text: "Private vehicles", isCorrect: true },
        { id: 1, text: "Public utility vehicles", isCorrect: false },
        { id: 2, text: "All types of vehicles", isCorrect: false },
      ],
    },
    {
      text: "What should you prepare for a long trip?",
      options: [
        {
          id: 0,
          text: "Prepare the necessary tools that can be used to repair the vehicle",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Plan your route and make sure the vehicle is running in good condition",
          isCorrect: true,
        },
        { id: 2, text: "All answers are correct", isCorrect: false },
      ],
    },
    {
      text: "When parking uphill and parallel to the sidewalk, you should turn the wheel:",
      options: [
        { id: 0, text: "To the sidewalk curb", isCorrect: false },
        { id: 1, text: "Away from the sidewalk curb", isCorrect: false },
        { id: 2, text: "Parallel with the sidewalk curb", isCorrect: true },
      ],
    },
    {
      text: "The vehicle is parked if:",
      options: [
        {
          id: 0,
          text: "The vehicle is not moving while unloading passengers",
          isCorrect: false,
        },
        {
          id: 1,
          text: "The vehicle is not moving while loading passengers",
          isCorrect: false,
        },
        {
          id: 2,
          text: "The vehicle is stationary with the engine turned off",
          isCorrect: true,
        },
      ],
    },
    {
      text: "What is the meaning of blinking red traffic light?",
      options: [
        { id: 0, text: "Wait for the green signal", isCorrect: false },
        {
          id: 1,
          text: "Slow down and proceed if there is no danger ahead",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Stop and proceed if there is no danger ahead",
          isCorrect: true,
        },
      ],
    },
    {
      text: "What should you do before turning left or right?",
      options: [
        {
          id: 0,
          text: "Immediately turn and sound your horn",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Give signal not less than 30 meters before turning",
          isCorrect: true,
        },
        { id: 2, text: "Ignore giving a signal", isCorrect: false },
      ],
    },
    {
      text: "While changing lanes, you should give signal, check your rear view mirror and:",
      options: [
        { id: 0, text: "Watch out for oncoming vehicles", isCorrect: true },
        { id: 1, text: "Sound your horn", isCorrect: false },
        { id: 2, text: "Turn on the vehicle’s headlight", isCorrect: false },
      ],
    },
    {
      text: "You can overtake in a highway if it has two lanes with:",
      options: [
        { id: 0, text: "Continuous white line", isCorrect: false },
        { id: 1, text: "Broken yellow line", isCorrect: false },
        { id: 2, text: "Continuous yellow line", isCorrect: true },
      ],
    },
    {
      text: "Not following road and traffic rules:",
      options: [
        { id: 0, text: "Proves that you are a good driver", isCorrect: false },
        { id: 1, text: "May engage you in an accident", isCorrect: true },
        { id: 2, text: "Saves fuel", isCorrect: false },
      ],
    },
    {
      text: "It is more dangerous to turn left than to turn right because:",
      options: [
        {
          id: 0,
          text: "Vehicles coming from left is faster",
          isCorrect: false,
        },
        {
          id: 1,
          text: "You have to be aware and cautious from vehicles coming from left or right sides of the road",
          isCorrect: true,
        },
        { id: 2, text: "The road has more lanes", isCorrect: false },
      ],
    },
    {
      text: "The safest response even if you have rights on the road is:",
      options: [
        { id: 0, text: "Don’t force your rights", isCorrect: true },
        { id: 1, text: "Sound your horn", isCorrect: false },
        { id: 2, text: "Force your rights", isCorrect: false },
      ],
    },
    {
      text: "In a roundabout (rotunda), which has road rights?",
      options: [
        {
          id: 0,
          text: "The vehicles approaching the roundabout",
          isCorrect: false,
        },
        { id: 1, text: "The vehicles in the roundabout", isCorrect: true },
        {
          id: 2,
          text: "The vehicles facing the green light",
          isCorrect: false,
        },
      ],
    },
    {
      text: "You are not allowed to overtake at the footbridge because:",
      options: [
        { id: 0, text: "People are crossing", isCorrect: true },
        { id: 1, text: "You cannot see oncoming vehicles", isCorrect: false },
        { id: 2, text: "The bridge is narrow", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of blinking yellow traffic light?",
      options: [
        {
          id: 0,
          text: "Slow down and proceed if there is no danger",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Stop and wait for the traffic light to change",
          isCorrect: false,
        },
        { id: 2, text: "Wait for the green light", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of continuous yellow line on the road?",
      options: [
        { id: 0, text: "You are allowed to overtake", isCorrect: false },
        { id: 1, text: "It is prohibited to overtake", isCorrect: true },
        { id: 2, text: "All answers are correct", isCorrect: false },
      ],
    },
    {
      text: "According to the law, you are not allowed to drive fast, except when:",
      options: [
        { id: 0, text: "There is no danger in the road", isCorrect: false },
        {
          id: 1,
          text: "Speed is in accordance with the given speed limit",
          isCorrect: true,
        },
        { id: 2, text: "All answers are correct", isCorrect: false },
      ],
    },
    {
      text: "Having a license means you can drive:",
      options: [
        { id: 0, text: "All types of vehicle", isCorrect: false },
        {
          id: 1,
          text: "Vehicles allowed indicated in your license",
          isCorrect: true,
        },
        { id: 2, text: "Public utility vehicle only", isCorrect: false },
      ],
    },
    {
      text: "If a vehicle in front of you has a high beam light which is blinding your vision, what should you do?",
      options: [
        { id: 0, text: "Switch your headlight on high also", isCorrect: false },
        {
          id: 1,
          text: "Do not look at glaring light, quickly look on the right side of the road",
          isCorrect: true,
        },
        { id: 2, text: "Stare at the glaring light", isCorrect: false },
      ],
    },
    {
      text: "If you are approaching a curve, what should you do?",
      options: [
        { id: 0, text: "Slow down", isCorrect: true },
        { id: 1, text: "Speed up", isCorrect: false },
        { id: 2, text: "Abruptly push the brake", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of a triangle traffic sign with a red border color?",
      options: [
        { id: 0, text: "Reminder sign", isCorrect: false },
        { id: 1, text: "Warning sign", isCorrect: true },
        { id: 2, text: "Information sign", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of a square or rectangle traffic sign with blue and white color?",
      options: [
        { id: 0, text: "Giving direction", isCorrect: false },
        { id: 1, text: "Warning sign", isCorrect: true },
        { id: 2, text: "Information sign", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of a circle, octagon, or inverted triangle traffic sign with a red border color?",
      options: [
        { id: 0, text: "Regulatory sign", isCorrect: true },
        { id: 1, text: "Warning sign", isCorrect: false },
        { id: 2, text: "Giving direction", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of green traffic light?",
      options: [
        { id: 0, text: "Go signal for the vehicle", isCorrect: true },
        { id: 1, text: "Stop at the given line", isCorrect: false },
        {
          id: 2,
          text: "You are allowed to proceed by slowing down",
          isCorrect: false,
        },
      ],
    },
    {
      text: "What is the meaning of blinking red traffic light?",
      options: [
        { id: 0, text: "Stop at the given line", isCorrect: true },
        {
          id: 1,
          text: "Stop for a while and continue if there is no danger",
          isCorrect: false,
        },
        { id: 2, text: "Drive faster", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of yellow traffic light?",
      options: [
        { id: 0, text: "Stop", isCorrect: false },
        {
          id: 1,
          text: "Prepare to stop, red traffic light is about to light up",
          isCorrect: true,
        },
        { id: 2, text: "You can go, but slow down", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of green traffic light?",
      options: [
        { id: 0, text: "The vehicle should not stop", isCorrect: true },
        { id: 1, text: "The vehicle should stop", isCorrect: false },
        { id: 2, text: "The vehicle should slow down", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of green arrow traffic light?",
      options: [
        {
          id: 0,
          text: "It is prohibited to enter on the direction of the arrow",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Allowing vehicles to go right or left",
          isCorrect: true,
        },
        { id: 2, text: "Pedestrians can cross", isCorrect: false },
      ],
    },
    {
      text: "What is the meaning of yellow arrow traffic light?",
      options: [
        {
          id: 0,
          text: "Giving signal for right or left direction",
          isCorrect: true,
        },
        {
          id: 1,
          text: "The red arrow traffic light is about to light up",
          isCorrect: false,
        },
        {
          id: 2,
          text: "Allowing vehicles to go left, right or straight",
          isCorrect: false,
        },
      ],
    },
    {
      text: "What are white lines in the road for?",
      options: [
        {
          id: 0,
          text: "Divides lanes going in one direction",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Separates traffic going in one direction",
          isCorrect: false,
        },
        { id: 2, text: "Sign that you can go left or right", isCorrect: false },
      ],
    },
    {
      text: "Broken yellow line on the road means:",
      options: [
        {
          id: 0,
          text: "You are allowed to overtake on the right side",
          isCorrect: false,
        },
        {
          id: 1,
          text: "It is prohibited to overtake on the left or right side",
          isCorrect: true,
        },
        {
          id: 2,
          text: "You are allowed to overtake on the left side",
          isCorrect: false,
        },
      ],
    },
    {
      text: "Broken white line on the road means:",
      options: [
        {
          id: 0,
          text: "You are allowed to overtake on left or right side if there is no danger",
          isCorrect: true,
        },
        {
          id: 1,
          text: "It is prohibited to overtake on the left side",
          isCorrect: false,
        },
        {
          id: 2,
          text: "It is prohibited to overtake on the right side",
          isCorrect: false,
        },
      ],
    },
    {
      text: "When should a driver make a decision?",
      options: [
        { id: 0, text: "If there is a heavy traffic", isCorrect: false },
        { id: 1, text: "If he is a good driver", isCorrect: false },
        {
          id: 2,
          text: "While driving to anticipate other driver’s actions",
          isCorrect: true,
        },
      ],
    },
    {
      text: "A continuous parallel double yellow line on the road means:",
      options: [
        {
          id: 0,
          text: "You are allowed to overtake on the right side",
          isCorrect: false,
        },
        { id: 1, text: "It is dangerous to overtake", isCorrect: true },
        {
          id: 2,
          text: "You are allowed to overtake on the left side",
          isCorrect: false,
        },
      ],
    },
    {
      text: "If the driver of a vehicle in front of you is giving a hand signal by pointing his left hand upwards, he will surely:",
      options: [
        { id: 0, text: "Turn left", isCorrect: false },
        { id: 1, text: "Turn right", isCorrect: false },
        { id: 2, text: "Stop", isCorrect: true },
      ],
    },
    {
      text: "A driver should give a signal when turning left or right on the road intersection in no less than:",
      options: [
        { id: 0, text: "15 meters", isCorrect: false },
        { id: 1, text: "60 meters", isCorrect: false },
        { id: 2, text: "30 meters", isCorrect: true },
      ],
    },
    {
      text: "Before changing lanes on a highway, you must give a signal for:",
      options: [
        { id: 0, text: "Ten seconds before doing it", isCorrect: false },
        { id: 1, text: "Five minutes before doing it", isCorrect: false },
        { id: 2, text: "One minute before doing it", isCorrect: true },
      ],
    },
    {
      text: "When riding a motorcycle and you would like to turn right, you should signal with:",
      options: [
        { id: 0, text: "Your left hand pointing upward", isCorrect: false },
        {
          id: 1,
          text: "Your right hand pointing to the right",
          isCorrect: true,
        },
        { id: 2, text: "Your right hand pointing upward", isCorrect: false },
      ],
    },
    {
      text: "The necessary distance between you and a vehicle you are following should be:",
      options: [
        {
          id: 0,
          text: "The same length as three full vehicles",
          isCorrect: false,
        },
        { id: 1, text: "The same length as a full vehicle", isCorrect: false },
        {
          id: 2,
          text: "The same length as two full vehicles",
          isCorrect: true,
        },
      ],
    },
    {
      text: "Which place should you not overtake?",
      options: [
        { id: 0, text: "In an intersection", isCorrect: true },
        { id: 1, text: "At the foot of the bridge", isCorrect: true },
        { id: 2, text: "All answers are correct", isCorrect: true },
      ],
    },
    {
      text: "Driving with a fake license is prohibited and punishable by:",
      options: [
        {
          id: 0,
          text: "Php 1,500.00 and six months suspension in obtaining a license",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Not more than six months imprisonment",
          isCorrect: false,
        },
        { id: 2, text: "Php 300.00", isCorrect: false },
      ],
    },
    {
      text: "What should you do if a policeman stops you?",
      options: [
        {
          id: 0,
          text: "Stop and give the license and other papers for the vehicle if the policeman asks for it.",
          isCorrect: true,
        },
        {
          id: 1,
          text: "Don’t mind the cop and drive faster.",
          isCorrect: false,
        },
        { id: 2, text: "Stop and argue with the policeman.", isCorrect: false },
      ],
    },
    {
      text: "Double broken yellow line in the road means:",
      options: [
        {
          id: 0,
          text: "It is prohibited to overtake on the left side",
          isCorrect: false,
        },
        {
          id: 1,
          text: "You are allowed to overtake on the left or right side if there is no danger",
          isCorrect: false,
        },
        {
          id: 2,
          text: "It is prohibited to overtake on the right side",
          isCorrect: true,
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

export default Englishtest;
