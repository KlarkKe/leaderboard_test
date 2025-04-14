gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDNewSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewSpriteObjects2= [];
gdjs.LeaderboardCode.GDLeaderboardObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardObjects2= [];
gdjs.LeaderboardCode.GDplayerNameObjects1= [];
gdjs.LeaderboardCode.GDplayerNameObjects2= [];


gdjs.LeaderboardCode.userFunc0xf840b8 = function GDJSInlineCode(runtimeScene) {
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
    
    // Если данные есть и объект user присутствует, считываем имя
    if (data && data.user && data.user.first_name) {
      const firstName = data.user.first_name;
      // Сохраняем значение в глобальную переменную GDevelop (создайте переменную "PlayerName" в настройках игры)
      runtimeScene.getGame().getVariables().get("PlayerName").setString(firstName);
      console.log("Успешно получено имя пользователя:", firstName);
    } else {
      console.log("Нет данных пользователя или user.first_name отсутствует.");
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


gdjs.LeaderboardCode.userFunc0xf840b8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("playerName"), gdjs.LeaderboardCode.GDplayerNameObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDplayerNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDplayerNameObjects1[i].getBehavior("Text").setText("Привеет, " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + ", !");
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

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects1.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
