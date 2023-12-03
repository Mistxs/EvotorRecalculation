document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('volumeForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var totalVolume = parseFloat(document.getElementById('totalVolume').value);
    var soldVolume = parseFloat(document.getElementById('soldVolume').value);

    if (isNaN(totalVolume) || isNaN(soldVolume)) {
      return;
    }

    var roundedVolume = calculateSoldVolume(totalVolume, soldVolume);

    document.getElementById('roundedVolume').innerText = "То значение объема, которое вам нужно списать: " + roundedVolume;
  });
});

function calculateSoldVolume(totalVolume, soldVolume) {
  var c = soldVolume / totalVolume;
  var d = Math.round(c * 1000) / 1000;
  var roundedVolume = d*totalVolume // округляем до 2 знаков после запятой
  return roundedVolume;
}