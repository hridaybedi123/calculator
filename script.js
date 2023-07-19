function calculate() {
  var speed = document.getElementById("speed").value;
  var distance = document.getElementById("distance").value;
  var time = document.getElementById("time").value;
  var result = document.getElementById("result");

  if (!speed && !distance) {
      result.innerHTML = "Please enter either speed or distance.";
  } else if (!time) {
      if (speed && distance) {
          time = distance / speed;
          result.innerHTML = "Time: " + time.toFixed(2) + " hours";
      } else {
          result.innerHTML = "Please enter both speed and distance.";
      }
  } else if (!speed) {
      if (distance && time) {
          speed = distance / time;
          result.innerHTML = "Speed: " + speed.toFixed(2) + " mph";
      } else {
          result.innerHTML = "Please enter both distance and time.";
      }
  } else if (!distance) {
      if (speed && time) {
          distance = speed * time;
          result.innerHTML = "Distance: " + distance.toFixed(2) + " miles";
      } else {
          result.innerHTML = "Please enter both speed and time.";
      }
  } else {
      result.innerHTML = "All fields are filled. No calculation required.";
  }
}
