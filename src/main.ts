import './style.css'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Team SEA Slugs</h1>  
    
    <h1>Raptoroids</h1>
    
    <img class = "title-image" src ="img/CombatNodeSprite.png" alt="">
    
    <div class = "bullet_a">
      <h2>
        About this Game Project
      </h2>
      <p>
        We made a vertical slice of a game for a university course on game preproduction.
      </p>
    </div>

    <div class = "bullet_b">
      <h2>
        Raptoroids Gameplay
      </h2>
      <video width = "480" height = "640" controls>
        <source src = "video/RaptoroidsLongplay.webm" type = "video/webm">
        <source src = "video/RaptoroidsShortplayNewCompressed.mp4" type = "video/mp4">
      </video>
    </div>

    <div class = "bullet_a">
      <h2>
        About Our Team
      </h2>
      
      <center>
      <div class = "team_roster">
        <div class = "team_member">
          <h3>Wichapas "Harry" Pichetpongsa</h3>
          <img src = "img/IMG-6365.jpg" width = "240" height = "320">
          <p><b>Role:</b> Design Lead + Playtest lead</p>
          <p><b>Contribution Highlights:</b> scene flow, splash experience, player combat abilities programming</p>
        </div>

        <div class = "team_member">
          <h3 font-size = "16px">Sirapat "Poom" Phunjamaneechot</h3>
          <img src = "img/poom.jpg" width = "226" height = "302">
          <p><b>Role:</b> Production lead</p>
          <p><b>Contribution Highlights:</b> movement and combat systems programming, map procedural generation programming, implementation of accessibility features</p>
        </div>
      
        <div class = "team_member">
        <h3>Nhan Nguyen</h3>
        <img src = "img/nhan.png" width = "169" height = "217">
        <p><b>Role:</b> Engine lead, Tools lead</p>
        <p><b>Contribution Highlights:</b> in charge of game deployment options, and help with the programming of general game system, miscellaneous aspects of the game</p>
        </div>
      </div>
      </center>
    </div>

    <div class = "bullet_b">
      <h2>
        Externally Imposed Contraints For the Game
      </h2>

      <h3>Accessibility</h3>
        
      <h4>
        Constraint 1: Game must be completable even when simulating vision limitations: contrast and color sensitivity.
      </h4>
      <p>
        We tested our game's compliance with this constraint by maximizing the contrast in a screenshot.<br> 
        We also desaturated the screenshots to see what the game looks like in grayscale.<br>
        In either case, we found that the colors we have chosen for the game do not suffer from information loss.<br>
        We have also included a grayscale mode in our game to ensure maximum accessibility for people who are color blind. 
      </p>

      <h4>
        Constraint 2: Game must be completable by a player using just one hand on the controls at a time.
      </h4>
      <p>
        We designed our game to be playable with just one hand. The only input the game takes from the player <br>
        is touch input from a single digit.
      </p>
      <h4>
        Constraint 3: Game must be completable by a player who cannot hear any sounds from the game.
      </h4>
      <p>
        From playtests, our early prototypes didn't have any sound effects but the playtesters were able to <br>
        tell what was going on in the game.
      </p>
      <h4>
        Constraint 4: Gameplay should always reach a natural resting point within two minutes of active play.
      </h4>
      <p>
        Our game was designed to have short bursts of action.<br>
        Each stage should not take more than 2 minutes to complete so there is no need for a pause button during gameplay.
      </p>

      <h3> Localization </h3>

      <h4>Constraint: Game must support players to use two different written languages, <br>
          one of which must be logographic or written from right to left.
      </h4>
      <p>Using Unity's localization package, we built string tables to translate the game's text from US English to Japanese. <br>
        Game assets also must be localized if applicable, but none of our game assets bear language-based information.
      </p>

      <h3> Game Format </h3>
      
      <h4>Constraint: Offline Digital Game</h4>
     
      <li>Game must be entirely completable while the player's device is disconnected from the internet</li>
      <li>Total data transfer involved in downloading the game must be less than 100 MiB</li>
      <li>The game must target the platform of the team's choice. If iOS is supported, Android must be supported too.</li>

      <p>As of now, our game only requires that you initially load the game. <br>
        Our game does communicate with a server so this makes our game an offline digital game. <br>
        The total data transfer involved when we checked is only 7.9 MiB so we still have a lot of room for content. <br>
        Our game is targeted at the mobile platform, though it currently exists on the browser platform.
      </p>
    </div>
    
    

    <div class = "bullet_a">
      <h2>Showcase of our Prototypes</h2>
      <div style = "border: solid black">
        <h3>Sprint 1</h3>
        <img src = "img/Team 18.png">
        <img src = "img/Team 18 (1).png">
        <img src = "img/Team 18 (2).png">
      </div>

      <div style = "border: solid black">
        <h3>Sprint 2</h3>
        <img src = "img/sprint2-1.png">
        <img src = "img/sprint2-2.png">
        <img src = "img/sprint2-3.png">
      </div>
      <div style = "border: solid black">
        <h3>Sprint 3</h3>
        <img src = "img/sprint3-1.png">
      </div>
    </div>

    <div class = "bullet_b">
      <h2>Play Our Game!</h2>
      <a href="https://ataru2002.github.io/RaptoroidsPrototype/">Play Our Game Here!</a>
    </div>
  </div>
  <div>
    
  </div>
`;