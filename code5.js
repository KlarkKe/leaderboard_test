gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDNewSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewSpriteObjects2= [];
gdjs.LeaderboardCode.GDLeaderboardObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardObjects2= [];
gdjs.LeaderboardCode.GDplayerNameObjects1= [];
gdjs.LeaderboardCode.GDplayerNameObjects2= [];
gdjs.LeaderboardCode.GDuserNameObjects1= [];
gdjs.LeaderboardCode.GDuserNameObjects2= [];


gdjs.LeaderboardCode.userFunc0x24bdb40 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function () {
  // Получаем объект Telegram WebApp из глобального контекста
  const tg = window.Telegram && window.Telegram.WebApp;

  // Если WebApp API недоступен, выводим сообщение в консоль и выходим из скрипта
  if (!tg) {
    console.log("Telegram WebApp API недоступен (не открыт из Telegram?)");
    return;
  }
  
  // Инициализируем API: уведомляем Telegram, что приложение готово
  tg.ready();
  
  // Добавляем короткую задержку для уверенности, что данные успели загрузиться
  setTimeout(function () {
    // Получаем разобранные данные из Telegram
    const data = tg.initDataUnsafe;
    
    if (data && data.user) {
      // Если есть first_name – сохраняем в переменную "PlayerName"
      if (data.user.first_name) {
        const firstName = data.user.first_name;
        runtimeScene.getGame().getVariables().get("PlayerName").setString(firstName);
        console.log("Успешно получено имя пользователя:", firstName);
      } else {
        console.log("user.first_name отсутствует.");
      }

      // Если есть username – сохраняем в переменную "Username"
      if (data.user.username) {
        const userName = data.user.username;
        runtimeScene.getGame().getVariables().get("Username").setString(userName);
        console.log("Успешно получено username:", userName);
      } else {
        console.log("user.username отсутствует.");
      }
    } else {
      console.log("Нет данных пользователя или объект user отсутствует.");
    }
  }, 500);
})();

};
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.LeaderboardCode.userFunc0x24bdb40(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("playerName"), gdjs.LeaderboardCode.GDplayerNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("userName"), gdjs.LeaderboardCode.GDuserNameObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDplayerNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDplayerNameObjects1[i].getBehavior("Text").setText("Привеет, " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + ", !");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDuserNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDuserNameObjects1[i].getBehavior("Text").setText("Твой username " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects1.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects2.length = 0;
gdjs.LeaderboardCode.GDuserNameObjects1.length = 0;
gdjs.LeaderboardCode.GDuserNameObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects1.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects2.length = 0;
gdjs.LeaderboardCode.GDuserNameObjects1.length = 0;
gdjs.LeaderboardCode.GDuserNameObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
