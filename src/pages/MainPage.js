import React, {useState} from 'react'
// import { open, close } from 'fs';
// import gapi from 'gapi'; 

const MainPage = () => {

    const funcClick = () => {
        console.log('object');
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            
            var myArr = JSON.parse(this.responseText);
            console.log('jsdno0 debug1', myArr);
            console.log('jsdno0 debug2', Array.isArray(myArr));

            // console.log('jsdno0 debug1', this.responseText)
          }
        };
        xhttp.open("GET", "myTutorials.txt", true);
        // xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();
    }

    return (
        <div>
            <h2>Main Page</h2>
            <button onClick = {()=>funcClick()}>click</button>

        </div>
    )
}

export default MainPage
