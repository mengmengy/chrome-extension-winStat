//Window Statistic
//This extension will display the number of windows open; number of tabs in each window.
//For each tab in the window, its url and title and if it's the selected tab.
//Author: Mengmeng Yang  G29987789   mengmeng_y@gwmail.gwu.edu

chrome.widget.getWindows(
    function(windows){
        //How many windows opened.
        var winNum = windows.length;
        //console.log(winNum);

        //Number of windows open
        if(winNum == 1){
        	document.getElementById("headline").innerHTML = " Only 1 Window Open. ";
        }
        else{
        	document.getElementById("headline").innerHTML =  winNum + " Windows Open";
        }

        //All the id of the opened window.
        for(i = 0; i < winNum; i++){
            var winCount = 1;
            chrome.widget.getTabsForWindow(
                windows[i], 
                function(tabs){
                    var tabNum = tabs.length;

                    document.getElementById("win").innerHTML += "<div id = " + winCount + " class = 'eachWin'>";

                    //Show how many tabs open in each window.
                    if(tabNum == 1){
                        document.getElementById(winCount).innerHTML += "<div id='sum'>" + " Window " + winCount + " -> " + " Only 1 tab open." +"</div>";
                    }
                    else{
                        document.getElementById(winCount).innerHTML += "<div id='sum'>" + " Window " + winCount + " -> " + tabNum + " tabs open." + "</div>";
                    }

                    //Find out the selected tab show at the very beginnning.
                    for(i = 0; i < tabNum; i++){
                        if(tabs[i].isSelected == true){
                            document.getElementById(winCount).innerHTML += "<div id = 'isSelected'>" + tabs[i].title + " is selected" +"</div>";
                        }
                    }

                    //Deal with each tab.
                    for(j = 0; j < tabNum; j++){

                        document.getElementById(winCount).innerHTML += "<hr>";
                        if(tabs[j].isSelected == true){
                           var status = "Selected";
                        }
                        else{
                            status = "Not selected";
                        }

                        //Output the URL, title and whether selected of each tab.
                        document.getElementById(winCount).innerHTML += "<div id = 'container'>" + "<div id='title'>" + tabs[j].title + "</div>" + "<div id='status'>" + status + "</div>"+"</div>";
                        document.getElementById(winCount).innerHTML += "<div id = 'url'>" + tabs[j].url +"</div>";
                        document.getElementById("win").innerHTML += "</div>";
                    } 

                    winCount++;
                }
            );
        }  
    }

);















