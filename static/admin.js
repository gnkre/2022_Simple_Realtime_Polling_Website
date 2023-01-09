var dataPoints = [
    { label: "Left", y: 0 },
    { label: "Right", y: 0 },
  ]
  var clicks = 0;
  //var OutputSeconds = document.getElementById("second");
  var buttonStart = document.getElementById("btn-start");
  
  var chartContainer = document.querySelector('#chartContainer');
  var lft = 0;
  var can_vote = 1;
  var rgt = 0;
  var prev_state = 0;
  var curr_state = 0;
  var itr_mode = 0;
  var Interval;
  tens = 7;
  document.getElementById("Left").innerHTML = lft;
  document.getElementById("Right").innerHTML = rgt;
  document.getElementById("details").innerHTML = "今天是主角史戴分非常重要的一天<br>他要去遊戲公司提交他改編自同名小說<br>“潘達斯奈基”的遊戲。<br><br>潘達斯奈基是一本擁有許多情節可供<br>玩家選擇的小說"
  buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);  // millisecond 10 = 0.01 second
  });
  function startTimer()
  {
    tens--;
    if (tens == -1)
    {
      lifeMustGoOn();
    }
    document.getElementById("second").innerHTML = tens;
  }
  function onClick() {
    lft = 0;
    rgt = 0;
    document.getElementById("Left").innerHTML = lft;
    document.getElementById("Right").innerHTML = rgt;
    //document.getElementById("clicks").innerHTML = clicks;
  };
  function stateUp()
  {
    curr_state = curr_state + 1;
    itr_mode = 1;
  }
  function stateDown()
  {
    curr_state = curr_state - 1;
    itr_mode = 1;
  }
  function load()
  {
    curr_state = 13;
    lft = 0;
    rgt = 0;
    lifeMustGoOn()
  }

  function lifeMustGoOn()
  {
    clearInterval(Interval);
    if (prev_state == 0 && curr_state == 0)
    {
      curr_state = 1;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/r55bJAZ.png";
      document.getElementById("details").innerHTML = "史戴分順利的得到賞賜，拿下了開發合同<br>他有兩個月的時間在家獨自開發遊戲";
    }
    else if (curr_state == 1)
    {
      curr_state = 2;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/cLooo7V.png";
      document.getElementById("details").innerHTML = "然而開發過程並不順利<br>主角的遊戲時常遇到bug<br>同時他的心理狀況也越來越糟<br><br>此時他已經把自己關在房間裡幾個禮拜了";//    }
    }
    else if (curr_state == 2)
    {
      curr_state = 3;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/A0FnkkD.png";
      document.getElementById("details").innerHTML = "在一次遇到bug時，老爸剛好進來關心他<br><br>史戴分的心理狀況也剛好在此時達到臨<br>界點..."
    }
    else if (curr_state == 3)
    {
      if (lft >= rgt)
      {
        curr_state = 2;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/cLooo7V.png";
        document.getElementById("details").innerHTML = "在原版netflix影集裡，選擇潑<br>茶會直接loop會上個情節，要推進<br>劇情只能吼老爸<br><br>༼ つ ◕_◕ ༽つ 🧔🏻‍♂️ 沒關cㄉ老爸，只是一場戲"
      }
      else
      {
        curr_state = 4;
        can_vote = 1;
        document.getElementById("image0").src = "https://imgur.com/4lsTeoi.png";
        document.getElementById("details").innerHTML = "吼完老爸後，史戴分被老爸假借吃飯名義<br>帶往心理醫生的診所<br><br>途中他瞄到在電玩公司認識的同事科林<br>從一旁的路上走過去...";
      }
    }
    else if (curr_state == 4)
    {
      if (lft >= rgt)
      {
        curr_state = 45;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/ibm49j4.png";
        document.getElementById("details").innerHTML = "在診間裡，史戴分敘述了最近的狀況<br>提到他發現他的選擇不是由他主導的<br><br>包含他吃什麼早餐、會不會對老爸大吼<br>似乎都不是自己的選擇";
      }
      else
      {
        curr_state = 6;
        can_vote = 1;
        document.getElementById("image0").src = "https://imgur.com/a7ouN0G.png";
        document.getElementById("details").innerHTML = "跟著科林走了以後，科林把他帶到自己家<br><br>這時他拿出了迷幻藥，<br>問史戴分要不要來一點";
      }
    }
    else if (curr_state == 45)
    {
      curr_state = 5;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/v7eZLtm.png";
      document.getElementById("details").innerHTML = "心理醫生給史戴分開了一些藥，<br>但他開始對吃些藥感到猶豫..."
    }
    else if (curr_state == 5)
    {
      if (lft >= rgt)
      {
        curr_state = 7;
        can_vote = 3;
        document.getElementById("image0").src = "https://imgur.com/yzoNVyc.png";
        document.getElementById("details").innerHTML = "這些藥似乎影響了史戴分開發時的狀況<br>雖然遊戲如期上市，但評價非常糟糕<br><br>如果時間還夠可以回到上個情節";
      }
      else
      {
        curr_state = 8;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/aYB0X7L.png";
        document.getElementById("details").innerHTML = "丟了藥以後，史戴分仍不停地趕工開發<br>但遇到bug的情況似乎沒有得到緩解";
      }
    }
    else if (curr_state == 6)
    {
      curr_state = 65;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/ViaOO0k.png";
      if (lft >= rgt)
      {
        document.getElementById("details").innerHTML = "史戴分和科林開始一起貼迷幻藥，<br>兩個人都開始徹底ㄎㄧㄤ掉";
      }
      else
      {
        document.getElementById("details").innerHTML = "雖然史戴分拒絕了，但科林偷把迷幻藥<br>加到咖啡裡，隨後科林也自己貼了一片<br><br>接著，兩個人都開始徹底ㄎㄧㄤ掉";
      }
    }
    else if (curr_state == 65)
    {
      curr_state = 9;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/ght8tkW.png";
      document.getElementById("details").innerHTML = "科林開始講一些超茫的話<br>大致上是說世界是由編碼和分支組成的<br><br>為了證明這點，科林走到陽台旁說：<br>「我們一個人要跳下去，因為我們還有<br>其他時間軸，所以一切都會沒事的」";
    }
    else if (curr_state == 7)
    {
      curr_state = 5;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/v7eZLtm.png";
      document.getElementById("details").innerHTML = "心理醫生給史戴分開了一些藥，<br>但他開始對吃些藥感到猶豫..."
    }
    else if (curr_state == 9)
    {
      if (lft >= rgt)
      {
        curr_state = 10;
        can_vote = 3;
        document.getElementById("image0").src = "https://imgur.com/IQRzZ1o.png";
        document.getElementById("details").innerHTML = "史戴分死了<br>遊戲的開發也胎死腹中<br><br>故事也到此落幕<br><br>如果時間還夠的話可以回到上個情節";
      }
      else
      {
        curr_state = 95;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/8MmNPBK.png";
        document.getElementById("details").innerHTML = "科林跳下去後，史戴分忽然驚醒<br>他回到了老爸車上的後座<br><br>原來他們還在去看心理醫生的路上";
      }
    }
    else if (curr_state == 95)
    {
      curr_state = 45;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/ibm49j4.png";
      document.getElementById("details").innerHTML = "這次史戴分乖乖的去看了醫生<br><br>在診間裡，史戴分敘述了最近的狀況<br>提到他發現他的選擇不是由他主導的<br><br>包含他吃什麼早餐、會不會對老爸大吼<br>似乎都不是自己的選擇";
    }
    else if (curr_state == 10)
    {
      curr_state = 9;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/ght8tkW.png";
      document.getElementById("details").innerHTML = "科林開始講一些超茫的話<br>大致上是說世界是由編碼和分支組成的<br><br>為了證明這點，科林走到陽台旁說：<br>「我們一個人要跳下去，因為我們還有<br>其他時間軸，所以一切都會沒事的」";
    }
    else if (curr_state == 8)
    {
      curr_state = 11;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/hBZkN1m.png";
      document.getElementById("details").innerHTML = "在某次又出現bug導致遊戲玩不了時<br>史戴分又來到了崩潰界線<br>請選擇他要怎麼發洩他的崩潰";
    }
    else if (curr_state == 11)
    {
      if (lft >= rgt)
      {
        curr_state = 12;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/IHIIVQU.png";
        document.getElementById("details").innerHTML = "史戴分突然意識到了這又是別人的選擇<br>而不是自己的，這次他選擇了反抗";
      }
      else
      {
        curr_state = 12;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/IHIIVQU.png";
        document.getElementById("details").innerHTML = "史戴分突然意識到了這又是別人的選擇<br>而不是自己的，這次他選擇了反抗";
      }
    }
    else if (curr_state == 12)
    {
      curr_state = 13;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/wRaUjv3.png";
      document.getElementById("details").innerHTML = "史戴分開始質問操控他的人";
    }
    else if (curr_state == 13)
    {
      curr_state = 14;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/zmeHl6l.png";
      document.getElementById("details").innerHTML = "史戴分希望我們給他一個交代<br>要給史戴分什麼符號好呢？";
    }
    else if (curr_state == 14)
    {
      if (lft >= rgt)
      {
        curr_state = 15;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/NW8mzb4.png";
        document.getElementById("details").innerHTML = "史戴分的螢幕上出現了我們的訊息";
      }
      else
      {
        curr_state = 145;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/okgCcZ8.png";
        document.getElementById("details").innerHTML = "史戴分的螢幕上出現了我們的訊息";
      }
    }
    else if (curr_state == 145)
    {
      curr_state = 20;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/ndwPRur.png";
      document.getElementById("details").innerHTML = "在看到我們給他的訊息後，史戴分瘋了<br>當老爸來關心的時候，他說自己失控了<br>並試圖跟老爸保持距離";
    }
    else if (curr_state == 15)
    {
      curr_state = 16;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/s6F11zW.png";
      document.getElementById("details").innerHTML = "史戴分去找了心理醫生，跟他講他的發現<br>這時醫生跟他說「如果這一切都是某種<br>影集，不是應該有更多動作場面嗎？」";
    }
    else if (curr_state == 16)
    {
      curr_state = 17;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/TxBGDQ0.png";
      document.getElementById("details").innerHTML = "史戴分聽了之後，拿了一杯水潑醫生<br>醫生也開始進入戒備狀態，劇情也在這<br>裡真的進入動作場面<br><br>選擇史戴分的下一步動作";
    }
    else if (curr_state == 17)
    {
      if (lft >= rgt)
      {
        curr_state = 19;
        can_vote = 3;
        document.getElementById("image0").src = "https://imgur.com/LDda1OQ.png";
        document.getElementById("details").innerHTML = "這時一個聲音出現，導演喊了「卡」<br>史戴分回神過來才發現，原來他們在一<br>個片場裡拍戲<br><br>此時故事也在一個這樣的<br>zoom out長鏡頭中宣告落幕";
      }
      else
      {
        curr_state = 18;
        can_vote = 3;
        document.getElementById("image0").src = "https://imgur.com/mmnxrUz.png";
        document.getElementById("details").innerHTML = "一番扭打以後，老爸衝進來加入戰場，<br>把暴走的史戴分拖走<br><br>史戴分到最後依舊掛念著影集的娛樂性<br><br>故事到此落幕<br><br>可以回到上一個選擇探索另一個分支";
      }
    }
    else if (curr_state == 18)
    {
      curr_state = 17;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/TxBGDQ0.png";
      document.getElementById("details").innerHTML = "史戴分聽了之後，拿了一杯水潑醫生<br>醫生也開始進入戒備狀態，劇情也在這<br>裡真的進入動作場面<br><br>選擇史戴分的下一步動作";
    }
    else if (curr_state == 20)
    {
      curr_state = 21;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/MDv5s4T.png";
      document.getElementById("details").innerHTML = "我們可以選的選項也越來越偏激<br>現在可以選擇要不要殺掉老爸";
    }
    else if (curr_state == 21)
    {
      if (lft >= rgt)
      {
        curr_state = 28;
        can_vote = 3;
        document.getElementById("image0").src = "https://imgur.com/9VxkV1w.png";
        document.getElementById("details").innerHTML = "史戴分跟老爸抱在一起<br>故事落幕<br><br>如果時間還夠可以回到上個情節";
      }
      else
      {
        curr_state = 22;
        can_vote = 1;
        document.getElementById("image0").src = "https://imgur.com/hQPOrkS.png";
        document.getElementById("details").innerHTML = "現在老爸死了<br>請選擇一個處理屍體的方式";
      }
    }
    else if (curr_state == 22)
    {
      if (lft >= rgt)
      {
        curr_state = 23; //bury
        can_vote = 3;
        document.getElementById("image0").src = "https://imgur.com/RXQ50LT.png";
        document.getElementById("details").innerHTML = "因為選擇了掩埋的方式，<br>屍體被隔壁家的狗挖出來<br>史戴分入獄，遊戲胎死腹中<br><br>時間夠的話可以玩分屍分支";
      }
      else
      {
        curr_state = 24;
        can_vote = 0;
        document.getElementById("image0").src = "https://imgur.com/1Ts3lCG.png";
        document.getElementById("details").innerHTML = "因為選擇了絞碎屍體的方式<br>短時間內沒人找到屍體<br><br>史戴分獲得了清靜的時間開發遊戲<br>遊戲的開發也變得非常順利";
      }
    }
    else if (curr_state == 23)
    {
      curr_state = 22;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/hQPOrkS.png";
      document.getElementById("details").innerHTML = "現在老爸死了<br>請選擇一個處理屍體的方式";
    }
    else if (curr_state == 24)
    {
      curr_state = 27;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/zJNfGbk.png";
      document.getElementById("details").innerHTML = "在結局時，本網飛影集的導演出現了<br>他想把潘達斯奈基的整個故事<br>做成一部互動影集";
    }
    else if (curr_state == 27)
    {
      curr_state = 25;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/uV9itaG.png";
      document.getElementById("details").innerHTML = "但不知道怎麼的，製作就是不順利<br>這時出現了選項給我們選擇...";
    }
    else if (curr_state == 25)
    {
      curr_state = 29;
      can_vote = 0;
      document.getElementById("image0").src = "https://imgur.com/OPTMptG.png";
      document.getElementById("details").innerHTML = "在結局時，本網站的開發者出現了<br>他想把潘達斯奈基的整個故事<br>做成一個互動網站";
    }
    else if (curr_state == 28)
    {
      curr_state = 21;
      can_vote = 1;
      document.getElementById("image0").src = "https://imgur.com/MDv5s4T.png";
      document.getElementById("details").innerHTML = "我們可以選的選項也越來越偏激<br>現在可以選擇要不要殺掉老爸";
    }
    else if (curr_state == 29)
    {
      curr_state = 30;
      can_vote = 3;
      document.getElementById("image0").src = "https://imgur.com/Flo0bR0.png";
      document.getElementById("details").innerHTML = "但不知道怎麼的，製作就是不順利<br>這時出現了選項給我們選擇...";
    }

    //init shit
    lft = 0;
    rgt = 0;
    document.getElementById("Left").innerHTML = lft;
    document.getElementById("Right").innerHTML = rgt;
    tens = 7;
    if(can_vote == 0)
    {
      document.getElementById("Title").innerHTML = "非投票段落 ༼ ºل͟º ༽";
      document.getElementById("Left").innerHTML = " ";
      document.getElementById("Right").innerHTML = " ";
      document.getElementById("Left_text").innerHTML = " ";
      document.getElementById("Right_text").innerHTML = " ";
    }
    else if (can_vote == 1)
    {
      document.getElementById("Title").innerHTML = "投票段落!! ᕕ ( ᐛ ) ᕗ";
      document.getElementById("Left_text").innerHTML = "Left: ";
      document.getElementById("Right_text").innerHTML = "Right: ";
    }
    else if (can_vote == 3)
    {
      document.getElementById("Title").innerHTML = "END!! ༼ 👍 ◕_◕ ༽👍";
      document.getElementById("Left").innerHTML = " ";
      document.getElementById("Right").innerHTML = " ";
      document.getElementById("Left_text").innerHTML = " ";
      document.getElementById("Right_text").innerHTML = " ";
    }
  }
  
  
  if(chartContainer) {
    var chart = new CanvasJS.Chart("chartContainer",
      {
        animationEnabled: true,
        theme: "theme2",
        data: [
        {
          type: "column",
          dataPoints: dataPoints
        }
        ]
      });
    //chart.render();
  }
  
  Pusher.logToConsole = true;
  
  // Configure Pusher instance
  var pusher = new Pusher('f38822c373812da34684', {
    cluster: 'ap3',
    encrypted: false
  });
  
  // Subscribe to poll trigger
  var channel = pusher.subscribe('poll');
  
  // Listen to vote event
  channel.bind('vote', function(data) {
    if (data.member == "Left" && can_vote == 1)
    {
      lft = lft + 1;
      document.getElementById("Left").innerHTML = lft;
    }
    if (data.member == "Right" && can_vote == 1)
    {
      rgt = rgt + 1;
      document.getElementById("Right").innerHTML = rgt;
    }
    /*dataPoints = dataPoints.map(dataPoint => );{
      console.log(data[2])
      if(dataPoint.label == data[2].name[0]) {
        // VOTE
        dataPoint.y += 10;
        if ("Right" == data[2].name[0])
        {
            rgt = rgt + 1;
        }
        if ("Left" == data[2].name[0])
        {
            lft = lft + 1;
        }
      }
      return dataPoint
    }*/
  
    // Re-render chart
    //chart.render()
  });