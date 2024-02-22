window.onload = function (event) {
  const topCategory = localStorage.getItem("topCategory");
  const personaExplanation = localStorage.getItem("personaExplanation");
  const result = JSON.parse(personaExplanation);
  document.getElementById("topCategory").innerHTML = topCategory;
  document.getElementById("luckyDay").innerHTML = result.luckyDay;
  document.getElementById("description").innerHTML = result.description;
  document.getElementById("businessRecomendation").innerHTML =
    result.businessRecomendation;
  document.getElementById("businessPartnerPersona").innerHTML =
    result.businessPartner.persona;
  document.getElementById("businessPartnerDescription").innerHTML =
    result.businessPartner.description;
  document.getElementById("radar").setAttribute("src", result?.radarChart);
  document.getElementById("animation").innerHTML = `
        <lottie-player
                src="${result.animation}"
                background="##FFFFFF"
                speed="1"
                style="width: 200px; height: 200px"
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
  `;
};
