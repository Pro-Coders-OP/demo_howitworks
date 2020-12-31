import React from 'react';


var createReactClass = require('create-react-class');

var Intro = createReactClass({
        render: function() {
          return (
            <div>
              <h1>Music recommendation using sentiment analysis!</h1>
              <p>
              </p><h2>
                WELCOME
              </h2>
              <p />
              <p style={{fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
                <img src="E:\demo_howitworks\howitworks\public\howitworks.png" alt="" width={800} height={300} />
                Hello pal. We, the group"Pro-coders" welcome you at our experiment. This is our project based on Machine Learning algorithms to recommend playlists according to your current taste. <br />
              </p>
              <p>
              </p><h2>
                HOW TO USE :
              </h2>
              <p />
              <p style={{fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
                1.Sign up or Log in to the service.<br />
                2.Here comes the homepage. You can navigate through our project from here. <br />
                3. What else?
                We have a survey updating every second about a ton of information based on various age groups.<br />
                4.Appreciate our work?
                Please fill in the remarks and suggestions while you log out after enjoying some music.<br /> 
              </p>
              <p>
              </p><h2>
                Why did we start?
              </h2>
              <p />
              <p style={{fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
                Here you go. We wanted to know the general mental state of people in various age groups, also their taste in music.<br /> Let's face it, we all are music lovers. 
                So we did it.<br /> We want you to have a melodious journey with us.
              </p>
              <p>
              </p><h2>
                Interested in behind the scenes?
              </h2>
              <p />
              <p style={{fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
                Well, we capture your face and our algorithms recognise your present mood. 
                Our playlists are then served you hot.<br /><br />As named Pro-coders, we coded our way here.
                We used React, HTML and some creativity to develop our front-end part.<br />
                Now telling about back-end, we used advanced machine learning algorithms. We have coded the facial emotion recogniser using keras with tensorflow backend.<br /> We trained the model using humongous dataset consisting of thousands pf images. This dataset contains images of facial expressions of people. This trained model then recognises your pretty face and current mood. 
                Then a suitable music playlist is served to you.
                The survey consists of various visually appealing information about mental state of people in each age group and their music taste as well.
                Note: We collect your information to power our survey. All the data is safe and passwords are stored encrypted.
                So you, our uses, are safe.    
              </p>
              <p>
              </p><h2>
                How it works: 
              </h2>
              <p />
              <p style={{fontFamily: 'georgia,garamond,serif', fontSize: '16px', fontStyle: 'italic'}}>
                we collect Sign n Login data (data categories)
                data gets entered in signup n login table simultaneously
                This data gets saved on a created Node server 
                For security purposes, password hashing id used(encrypted)
                When logged in,
                a page displays webcam. 
                The current emotion of user's face is captured
                and recognised
                this works by capturing the image and passing the image to our ML algo. (CNN n Neural networks)
                this emotion is passed to survey table along with the user's basic details
                User is then redirected to homepage 
                User gets various options displayed on the homepage 
                When the user opts to listen some music,
                we recommend him a music playlist based on his recently recognised    
              </p>
            </div>
          );
        }
      });
   
  export default Intro ;