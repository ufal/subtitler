var input  = document.getElementById("myFile");
var output = document.getElementById("output");

async function receive(lines) {
  let lastTimestamp = 0;
  for (let line of lines) {
    console.log(line);
    let [timestamp, rest] = splitWithRest(line, " ", 1);
    try {
      data = JSON.parse(rest);
    } catch {
      data = rest;
    }

    await new Promise(res =>
      setTimeout(res, parseFloat(timestamp - lastTimestamp)));
    lastTimestamp = timestamp;

    Subtitler.update(data);
  }
}

Subtitler.start();
input.addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var myFile = this.files[0];
    var reader = new FileReader();
    
    reader.addEventListener('load', function (e) {
      lines = e.target.result.split("\n");
      
      if (cf.logTime) console.log(new Date().getTime());
      receive(lines);
    });
    
    reader.readAsText(myFile);
  }   
});