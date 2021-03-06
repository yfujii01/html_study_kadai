function make_news() {
    let msg = "";

    let nowdate = new Date(); //現在の時間
    let hour = nowdate.getHours(); //時間
    let min = nowdate.getMinutes(); //分

    //いつ
    let when = hour + "時" + min + "分、"; //時間と分を使って文章を作成

    //誰が
    let rand = Math.floor(Math.random() * 5); //0～4の乱数を発生
    const who = ["小林", "川口", "植田", "中山", "ジェイ"];
    msg = when + who[rand] + "君が";

    //どこで
    rand = Math.floor(Math.random() * 5);
    const where = ["オフィス", "自宅", "トイレ", "マラソン大会", "紅白歌合戦"];
    msg = msg + where[rand] + "で";

    //どうした
    rand = Math.floor(Math.random() * 5);
    const what = [
        "歴史に名を残した。",
        "カレーを食べた。",
        "バグを取り除いた。",
        "採用活動をした。",
        "この場では言えないようなことをした。"
    ]
    msg = msg + what[rand];

    // 出力
    document.querySelector("#msg").innerText = msg;
}
