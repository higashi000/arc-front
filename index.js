function SendData() {
  let data = {
    text: document.getElementById("sendText").value,
    mention: [],
    channel: document.getElementById("channelID").value,
  };

  for (let i = 0; i < cntFormNum; ++i) {
    let slackrnID = "slackrn" + String(i)
    let twitterID = "twitterid" + String(i)
    data["mention"].push({
      slackrn: document.getElementById(slackrnID).value,
      twitterid: document.getElementById(twitterID).value,
    })
  }

  fetch("https://higashi-arc.appspot.com/arc/AddMsg", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    },
    mode: 'no-cors'
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error));
}

var cntFormNum = 0;
function AddForm() {
  console.log(cntFormNum);
  var indentForm = '<div id = "languageIndnent' + String(cntFormNum) + '">'
    + '<div class = "cp_iptxt">'
    + '<p>Slack Real Name</p><input type="text" id = "slackrn' + String(cntFormNum) + '"/>'
    + '</div>'
    + '<div class = "cp_iptxt">'
    + '<p>TwitterID</p><input type="text" id = "twitterid' + String(cntFormNum) + '"/>'
    + '</div>'
    + '</div>';

  document.getElementById('User').insertAdjacentHTML('beforeend', indentForm);
  cntFormNum += 1;
}
