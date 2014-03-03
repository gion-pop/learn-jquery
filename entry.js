function Entry() {
    this.title = "";
    this.author = "";
    this.body = "";
}

var entry_array = new Array();
for (i = 0; i < 3; i++) {
    entry_array[i] = new Entry();
}

entry_array[0].title = "テストだよ";
entry_array[0].author = "gion_U";
entry_array[0].body = "これはテストではありません";

entry_array[1].title = "あいうえお";
entry_array[1].author = "わたし";
entry_array[1].body = "内容";

entry_array[2].title = "abc";
entry_array[2].author = "me";
entry_array[2].body = "contents";

function put_entry(ary) {
//    var entry, current;
    for (i = 0; ary[i] != undefined ; i++) {
	var entry = $(
	    '<div>'
		+ '<p class="title">' + ary[i].title + '</p>'
		+ '<p class="author">' + ary[i].author + '</p>'
		+ '<p class="body">' + ary[i].body + '</p>'
		+ '</div>'
	)[0]; // <- 配列で返るのが納得いかない
//	console.log(entry);
	var current = $('div');
	for (var j = 0; current[j] != undefined; j++) {
//	    console.log(current[j].isEqualNode(entry[0]));
	    if (current[j].isEqualNode(entry))
		$('div')[j].remove();
	}
	$('body').append(entry);
    }
}

$(function() {
    put_entry(entry_array);
    put_entry(entry_array);
});

