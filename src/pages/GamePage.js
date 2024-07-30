import React from "react";
import GameInfo from "../components/GameInfo";
import GameBody from "../components/GameBody";

function GamePage() {
  return (
    <div className="bg-[#0f0728] p-8">
      <GameInfo
        gameName="TAJ"
        bettingOpenTime="5:40 PM"
        bettingCloseTime="6:30 PM"
        lastWinnerNumber="93"
        royalWinnerText="The Royal Winner"
        yellowColor="#FFD700" // Use any color you want here
      />
      <div className="pt-20">
        <GameBody
          initialTotalAmount={500}
          maxAmount={5000}
          numbers={Array.from({ length: 100 }, (_, i) => i)} // Pass numbers
          primaryColor="#FFD700" // Gold
          hoverColor="#FFA500" // Orange
          headerTitles={["Jodi", "Harup", "Crossing"]}
          betButtonText="Place a Bet"
        />
      </div>
    </div>
  );
}

export default GamePage;
