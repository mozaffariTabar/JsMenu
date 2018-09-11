function jsMenu(jsonStr) {
    var jsonList = JSON.parse(jsonStr);
    var target = "_blank";

    for (i in jsonList) {
        var path = jsonList[i]["p"].split(",").map(x => parseInt(x));
        var elm = $("#jsMenu");
        for (j = 0 ; j < path.length ; j++) {
            if (elm.find("> ul").length == 0) elm.append('<ul><li><a href="'+jsonList[i]["l"]+'" target="'+target+'">'+jsonList[i]["t"]+'</a></li></ul>');
            elm = elm.find("> ul");
            while (elm.find("> li").eq(path[j]).length == 0) elm.append('<li><a href="'+jsonList[i]["l"]+'" target="'+target+'">'+jsonList[i]["t"]+'</a></li>');
            elm = elm.find("> li").eq(path[j]);
        }
    }
}