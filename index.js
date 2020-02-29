let data = {text: "hogehoge", mention: [{slackrn: "ほげ", twitterid: "ふが"}, {slackrn: "ひがし", twitterid: "higashi136_2"}]};
let method = "POST";
let body = JSON.stringify(data);
let headers = {
  'Content-Type': 'application/json',
}

fetch("https://higashi-arc.appspot.com/arc/AddMsg", {
  method,
  headers,
  body,
}).then(res => res.json()).catch(error => console.error('Error:', error));
