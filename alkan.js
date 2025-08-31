function dishWash(selectElement) {
    const otherInput = document.getElementById("h_dish_wash");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}


function waterHeigen(selectElement) {
    const otherInput = document.getElementById("h_water_heigen");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}

function washHandWith(selectElement) {
    const otherInput = document.getElementById("h_wash_hand_with");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}

function handleToilet(selectElement) {
    const otherInput = document.getElementById("h_handle_toilet");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}

function fwater1(selectElement) {
    const otherInput1 = document.getElementById("h_river_water");
    const otherInput = document.getElementById("li-river-water");
    const otherInput2 = document.getElementById("li-no-minute");
    if (selectElement.value === "ካልተጠበቀ የውሃ ጉድጓድ /ምንጭ") {
        otherInput.style.display = 'block';
        otherInput2.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
        otherInput1.style.display = 'none';
        otherInput1.value = '';
        otherInput2.style.display = 'none';
        otherInput2.value = '';
    }
}




function typeToilet(selectElement) {
    const otherInput = document.getElementById("h_type_toilet");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}



function bouchingPlace(selectElement) {
    const otherInput = document.getElementById("h_bouching_place");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}


function pregnantWomen(selectElement) {

    const otherInput4 = document.getElementById("li-pregnacy-checkup");

    const otherInput5 = document.getElementById("li-pregnacy-checkup-reason");

    const otherInput6 = document.getElementById("li-cuase-of-desease");

    const otherInput19 = document.getElementById("h_pregnacy_checkup_reason");

    if (selectElement.value > 0) {
        otherInput4.style.display = 'block';
        otherInput5.style.display = 'block';
    } else {
        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';
        otherInput6.style.display = 'none';
        otherInput6.value = '';
        otherInput19.style.display = 'none';
        otherInput19.value = '';
    }
}


function pregnacyCheckupReason(selectElement) {

    const otherInput19 = document.getElementById("h_pregnacy_checkup_reason");

    if (selectElement.value === "ሌላ") {
        otherInput19.style.display = 'block';
    } else {
        otherInput19.style.display = 'none';
        otherInput19.value = '';
    }
}

function happenedAbortion(selectElement) {

    const otherInput9 = document.getElementById("li-no-abortion");

    if (selectElement.value === "አዎ") {
        otherInput9.style.display = 'block';
    } else {
        otherInput9.style.display = 'none';
        otherInput9.value = '';
    }
}

function homeBirth(selectElement) {

    const otherInput14 = document.getElementById("li-reason-for-home-birth");

    if (selectElement.value > 0) {
        otherInput14.style.display = 'block';
    } else {
        otherInput14.style.display = 'none';
        otherInput14.value = '';
    }
}



function afterBirthCheckup(selectElement) {

    const otherInput18 = document.getElementById("li-after-birth-checkup-no");

    if (selectElement.value > 0) {
        otherInput18.style.display = 'block';
    } else {
        otherInput18.style.display = 'none';
        otherInput18.value = '';
    }
}
console.log(document.createElement('input'));
console.log(document.getElementById('family-1-member-level'));


document.addEventListener("DOMContentLoaded", () => {

    function toggleOther(selectId, inputId) {
        const select = document.getElementById(selectId);
        const input = document.getElementById(inputId);
        if (!select || !input) return;

        select.addEventListener("click", () => {
            if (select.value.includes("ሌላ") || select.value.toLowerCase().includes("other")) {
                input.style.display = "block";
                input.setAttribute("required", "true");
            } else {
                input.style.display = "none";
                input.removeAttribute("required");
                input.value = "";
            }
        });
    }

    function toggleYes(selectId, elementId) {
        const select = document.getElementById(selectId);
        const element = document.getElementById(elementId);
        if (!select || !element) return;

        select.addEventListener("click", () => {
            if (select.value.includes("አዎ") || select.value.toLowerCase() === "yes") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
                element.querySelectorAll("input,select").forEach(el => {
                    el.value = "";
                });
            }
        });
    }

    function toggleNo(selectId, elementId) {
        const select = document.getElementById(selectId);
        const element = document.getElementById(elementId);
        if (!select || !element) return;

        select.addEventListener("click", () => {
            if (select.value.includes("የለም") || select.value.toLowerCase() === "yes") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
                element.querySelectorAll("input,select").forEach(el => {
                    el.value = "";
                });
            }
        });
    }

    function toggleSelected(selectId, elementId) {
        const select = document.getElementById(selectId);
        const element = document.getElementById(elementId);
        if (!select || !element) return;

        select.addEventListener("click", () => {
            if (select.value === "on" || select.value.toLowerCase() === "yes") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
                element.querySelectorAll("input,select").forEach(el => {
                    el.value = "";
                });
            }
        });
    }

    function toggle0(selectId, elementId) {
        const select = document.getElementById(selectId);
        const element = document.getElementById(elementId);
        if (!select || !element) return;

        select.addEventListener("input", () => {
            if (select.value > 0 || select.value.toLowerCase() === "yes") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
                element.querySelectorAll("input,select").forEach(el => {
                    el.value = "";
                });
            }
        });
    }

    toggleOther("use-birth-control", "yes-use-birth-control");
    toggleYes("use-birth-control", "yes-use-birth-control");
    toggleOther("family-1-job-status", "h-family-1-job-status");
    toggleSelected("have-other-child-2", "h_have_other_child_2");
    toggleYes("konow-controled-bith", "li-yes-konow-controled-bith");
    toggleYes("use-birth-control", "li-yes-use-birth-control");
    toggleYes("use-birth-control", "li-yes-use-birth-control");
    toggleNo("use-birth-control", "li-no-use-birth-control");
    toggleOther("no-use-birth-control", "h-no-use-birth-control");
    toggleYes("use-birth-control", "li-yes-use-birth-control");
    toggleYes("sick-under-five", "h-sick-under-five");
    toggleYes("sick-under-five", "li-yes-sick-under-five");
    toggleYes("sick-under-five", "li-yes-sick-under-five");
    toggleYes("in-14-days-diharea", "h-in-14-days-diharea");
    toggleOther("reason-take-ors", "h-reason-take-ors");
    toggleOther("family-mental-illness-medicated-at", "h-family-mental-illness-medicated-at");
    toggleYes("exist-drug-user", "h-exist-drug-user");
    toggleYes("exist-tracoma-victim", "h-exist-tracoma-victim");
    toggleSelected("write-symptom", "h-write-symptom");
    toggleOther("symptom-of-nemonea", "h-symptom-of-nemonea");
    toggleYes("lack-of-iron-in-prignancy", "li-yes-lack-of-iron-in-prignancy");
    toggleYes("type-of-food-no-pregnancy", "h-type-of-food-no-pregnancy");
    toggleYes("type-of-while-breast-feeding", "h-type-of-while-breast-feeding");
    // Example bindings
    toggleOther("use-birth-control", "yes-use-birth-control");
    toggleYes("use-birth-control", "yes-use-birth-control");
    toggleOther("family-1-job-status", "h-family-1-job-status");
    toggleSelected("have-other-child-2", "h_have_other_child_2");
    toggleYes("konow-controled-bith", "li-yes-konow-controled-bith");
    toggleYes("use-birth-control", "li-yes-use-birth-control");
    toggleYes("use-birth-control", "li-yes-use-birth-control");
    toggleNo("use-birth-control", "li-no-use-birth-control");
    toggleOther("no-use-birth-control", "h-no-use-birth-control");
    toggleYes("use-birth-control", "li-yes-use-birth-control");
    toggleYes("sick-under-five", "h-sick-under-five");
    toggleYes("sick-under-five", "li-yes-sick-under-five");




});

function noInfantVaccine(selectElement) {

    const otherInput2 = document.getElementById("li-no-infant-vaccine-with-card");

    const otherInput3 = document.getElementById("rp");

    const otherInput4 = document.getElementById("li-one-time-mengagakolf-vaccine");

    const otherInput5 = document.getElementById("li-two-times-mengagakolf-vaccine");

    const otherInput6 = document.getElementById("li-three-times-mengagakolf-vaccine");

    const otherInput7 = document.getElementById("li-four-times-mengagakolf-vaccine");

    const otherInput8 = document.getElementById("li-five-times-mengagakolf-vaccine");


    if (selectElement.value > 0) {
        otherInput2.style.display = 'block';

    } else {
        otherInput2.style.display = 'none';
        otherInput2.value = '';
        otherInput3.style.display = 'none';
        otherInput3.value = '';
        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';
        otherInput6.style.display = 'none';
        otherInput6.value = '';
        otherInput7.style.display = 'none';
        otherInput7.value = '';
        otherInput8.style.display = 'none';
        otherInput8.value = '';

    }
}

function ffamily1MemberLevel(selectElement) {
    const otherInput = document.getElementById("h_family_1_member_level");
    if (selectElement.value === "other") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}
console.log("done");

function ffamily1Religion(selectElement) {
    const otherInput = document.getElementById("hfamily-1-religion");
    if (selectElement.value === "other") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}

function fanimal(selectElement) {
    const otherInput = document.getElementById("how-animal");
    if (selectElement.value === "አዎ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}


function fenergySource(selectElement) {
    const otherInput = document.getElementById("li_wood");
    const otherInput1 = document.getElementById("li_electric");
    if (selectElement.value === "እንጨትና ኩበት") {
        otherInput.style.display = 'block';
        otherInput1.style.display = 'none';
        otherInput1.value = '';
    } else if (selectElement.value === "ኤላክትሪክ") {
        otherInput1.style.display = 'block';
        otherInput.style.display = 'none';
        otherInput.value = '';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
        otherInput1.style.display = 'none';
        otherInput1.value = ''; // Clear previous text if hidden
    }
}

function friverWater(selectElement) {
    const otherInput = document.getElementById("h_river_water");
    if (selectElement.value === "ሌላ ካለ ይግለጹ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}


function leftoverFood(selectElement) {
    const otherInput = document.getElementById("li-leftover-food-yes");
    if (selectElement.value === "እጠቀማለሁ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}

function existToilet(selectElement) {
    const otherInput = document.getElementById("li-leftover-food-yes");
    const otherInput1 = document.getElementById("li-yes-exist-toilet");

    const otherInput2 = document.getElementById("li-handle-toilet");

    const otherInput3 = document.getElementById("li-use-toilet-properly");

    const otherInput4 = document.getElementById("li-distance-toilet-home");

    const otherInput5 = document.getElementById("li-distance-toilet-kitchen");

    const otherInput6 = document.getElementById("li-distance-toilet-water");

    const otherInput7 = document.getElementById("li-exist-siphon-toilet");

    const otherInput8 = document.getElementById("li-type-toilet");

    const otherInput9 = document.getElementById("li-clean-toilet");

    const otherInput10 = document.getElementById("li-palce-family-use-toilet");

    const otherInput11 = document.getElementById("li-reason-not-have-toilet");

    const otherInput12 = document.getElementById("h_handle_toilet");

    const otherInput13 = document.getElementById("h_type_toilet");


    if (selectElement.value === "አዎ") {
        otherInput.style.display = 'block';
        otherInput1.style.display = 'block';
        otherInput2.style.display = 'block';
        otherInput3.style.display = 'block';
        otherInput4.style.display = 'block';
        otherInput5.style.display = 'block';
        otherInput6.style.display = 'block';
        otherInput7.style.display = 'block';
        otherInput8.style.display = 'block';
        otherInput9.style.display = 'block';
        otherInput10.style.display = 'none';
        otherInput10.value = '';
        otherInput11.style.display = 'none';
        otherInput11.value = '';

    } else if (selectElement.value === "የለም") {
        otherInput10.style.display = 'block';
        otherInput11.style.display = 'block';
        otherInput1.style.display = 'none';
        otherInput1.value = '';
        otherInput2.style.display = 'none';
        otherInput2.value = '';
        otherInput3.style.display = 'none';
        otherInput3.value = '';
        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';
        otherInput6.style.display = 'none';
        otherInput6.value = '';
        otherInput7.style.display = 'none';
        otherInput7.value = '';
        otherInput8.style.display = 'none';
        otherInput8.value = '';
        otherInput9.style.display = 'none';
        otherInput9.value = '';
        otherInput12.style.display = 'none';
        otherInput12.value = '';
        otherInput13.style.display = 'none';
        otherInput13.value = '';
    } else {
        otherInput1.style.display = 'none';
        otherInput1.value = '';
        otherInput2.style.display = 'none';
        otherInput2.value = '';
        otherInput3.style.display = 'none';
        otherInput3.value = '';
        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';
        otherInput6.style.display = 'none';
        otherInput6.value = '';
        otherInput7.style.display = 'none';
        otherInput7.value = '';
        otherInput8.style.display = 'none';
        otherInput8.value = '';
        otherInput9.style.display = 'none';
        otherInput9.value = '';
        otherInput10.style.display = 'none';
        otherInput10.value = '';
        otherInput11.style.display = 'none';
        otherInput11.value = '';
        otherInput12.style.display = 'none';
        otherInput12.value = '';
        otherInput13.style.display = 'none';
        otherInput13.value = '';

    }
}


function typeToilet(selectElement) {
    const otherInput = document.getElementById("h_type_toilet");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}

function dryGarbage(selectElement) {
    const otherInput = document.getElementById("h_dry_garbage");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}


function adultFemale(selectElement) {
    const otherInput2 = document.getElementById("li-maried-at");

    const otherInput3 = document.getElementById("li-pregnant-women");

    const otherInput4 = document.getElementById("li-pregnacy-checkup");

    const otherInput5 = document.getElementById("li-pregnacy-checkup-reason");

    const otherInput6 = document.getElementById("li-cuase-of-desease");

    const otherInput7 = document.getElementById("li-first-birth-age");

    const otherInput8 = document.getElementById("li-happened-abortion");

    const otherInput9 = document.getElementById("li-no-abortion");

    const otherInput10 = document.getElementById("li-no-maternal-dith");

    const otherInput11 = document.getElementById("li-no-mothers-age-five");

    const otherInput12 = document.getElementById("li-home-birth");

    const otherInput13 = document.getElementById("li-hospital-birth");

    const otherInput14 = document.getElementById("li-reason-for-home-birth");

    const otherInput15 = document.getElementById("li-no-twin-birth");

    const otherInput16 = document.getElementById("li-no-operation-birth");

    const otherInput17 = document.getElementById("li-after-birth-checkup");

    const otherInput18 = document.getElementById("li-after-birth-checkup-no");

    const otherInput19 = document.getElementById("h_pregnacy_checkup_reason");


    if (selectElement.value > 0) {
        otherInput2.style.display = 'block';
        otherInput3.style.display = 'block';
        otherInput7.style.display = 'block';
        otherInput8.style.display = 'block';
        otherInput10.style.display = 'block';
        otherInput11.style.display = 'block';
        otherInput12.style.display = 'block';
        otherInput13.style.display = 'block';
        otherInput15.style.display = 'block';
        otherInput17.style.display = 'block';

        //otherInput17.style.display = 'block';
    } else {
        otherInput2.style.display = 'none';
        otherInput2.value = '';
        otherInput3.style.display = 'none';
        otherInput3.value = '';
        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';
        otherInput6.style.display = 'none';
        otherInput6.value = '';
        otherInput7.style.display = 'none';
        otherInput7.value = '';
        otherInput8.style.display = 'none';
        otherInput8.value = '';
        otherInput9.style.display = 'none';
        otherInput9.value = '';
        otherInput10.style.display = 'none';
        otherInput10.value = '';
        otherInput11.style.display = 'none';
        otherInput11.value = '';
        otherInput12.style.display = 'none';
        otherInput12.value = '';
        otherInput13.style.display = 'none';
        otherInput13.value = '';
        otherInput14.style.display = 'none';
        otherInput14.value = '';
        otherInput15.style.display = 'none';
        otherInput15.value = '';
        otherInput16.style.display = 'none';
        otherInput16.value = '';
        otherInput17.style.display = 'none';
        otherInput17.value = '';
        otherInput18.style.display = 'none';
        otherInput18.value = '';
        otherInput19.style.display = 'none';
        otherInput19.value = '';

    }
}



function pregnacyCheckup(selectElement) {

    const otherInput6 = document.getElementById("li-cuase-of-desease");

    if (selectElement.value > 0) {
        otherInput6.style.display = 'block';
    } else {
        otherInput6.style.display = 'none';
        otherInput6.value = '';
    }
}


function hospitalBirth(selectElement) {

    const otherInput16 = document.getElementById("li-no-operation-birth");

    if (selectElement.value > 0) {
        otherInput16.style.display = 'block';
    } else {
        otherInput16.style.display = 'none';
        otherInput16.value = '';
    }
}


console.log(document.createElement('input'));
console.log(document.getElementById('family-1-member-level'));


function noInfantVaccineWithCard(selectElement) {

    const otherInput3 = document.getElementById("li-bcg-vaccine");

    const otherInput4 = document.getElementById("li-polio-vaccine");

    const otherInput5 = document.getElementById("li-pentavalent-vaccine");

    const otherInput6 = document.getElementById("li-pcv-vaccine");

    const otherInput7 = document.getElementById("li-rota-vaccine");

    const otherInput8 = document.getElementById("li-kufgn-vaccine");

    const otherInput9 = document.getElementById("rp");

    if (selectElement.value > 0) {
        otherInput3.style.display = 'block';
        otherInput4.style.display = 'block';
        otherInput5.style.display = 'block';
        otherInput6.style.display = 'block';
        otherInput7.style.display = 'block';
        otherInput8.style.display = 'block';
        otherInput9.style.display = 'block';

    } else {

        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';
        otherInput6.style.display = 'none';
        otherInput6.value = '';
        otherInput7.style.display = 'none';
        otherInput7.value = '';
        otherInput8.style.display = 'none';
        otherInput8.value = '';
        otherInput9.style.display = 'none';
        otherInput9.value = '';

    }
}

function mengagakolfVaccine(selectElement) {

    const otherInput3 = document.getElementById("li-from-mengagakolf-vaccine");

    const otherInput4 = document.getElementById("li-one-time-mengagakolf-vaccine");

    const otherInput5 = document.getElementById("li-two-times-mengagakolf-vaccine");

    const otherInput6 = document.getElementById("li-three-times-mengagakolf-vaccine");

    const otherInput7 = document.getElementById("li-four-times-mengagakolf-vaccine");

    const otherInput8 = document.getElementById("li-five-times-mengagakolf-vaccine");

    if (selectElement.value > 0) {
        otherInput3.style.display = 'block';

    } else {

        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';
        otherInput6.style.display = 'none';
        otherInput6.value = '';
        otherInput7.style.display = 'none';
        otherInput7.value = '';
        otherInput8.style.display = 'none';
        otherInput8.value = '';

    }
}

function fromMengagakolfVaccine(selectElement) {


    const otherInput4 = document.getElementById("li-one-time-mengagakolf-vaccine");

    const otherInput5 = document.getElementById("li-two-times-mengagakolf-vaccine");

    const otherInput6 = document.getElementById("li-three-times-mengagakolf-vaccine");

    const otherInput7 = document.getElementById("li-four-times-mengagakolf-vaccine");

    const otherInput8 = document.getElementById("li-five-times-mengagakolf-vaccine");

    if (selectElement.value > 0) {
        otherInput4.style.display = 'block';
        otherInput5.style.display = 'block';
        otherInput6.style.display = 'block';
        otherInput7.style.display = 'block';
        otherInput8.style.display = 'block';
    } else {

        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';
        otherInput6.style.display = 'none';
        otherInput6.value = '';
        otherInput7.style.display = 'none';
        otherInput7.value = '';
        otherInput8.style.display = 'none';
        otherInput8.value = '';

    }
}

function konwTracoma(selectElement) {


    const otherInput4 = document.getElementById("li-yes-know-tracoma-reason");

    const otherInput5 = document.getElementById("h-yes-know-tracoma-reason");

    if (selectElement.value == "አዎ") {
        otherInput4.style.display = 'block';

    } else {

        otherInput4.style.display = 'none';
        otherInput4.value = '';
        otherInput5.style.display = 'none';
        otherInput5.value = '';

    }
}

function yesKnowTracomaReason(selectElement) {

    const otherInput5 = document.getElementById("h-yes-know-tracoma-reason");

    if (selectElement.value == "ሌላ") {
        otherInput5.style.display = 'block';

    } else {

        otherInput5.style.display = 'none';
        otherInput5.value = '';

    }
}
let a = 0;
document.addEventListener("DOMContentLoaded", () => {


    function toggleShater(selectId, inputId) {
        const select = document.getElementById(selectId);
        const input = document.getElementById(inputId);
        if (!select || !input) return;

        select.addEventListener("click", () => {
            if (a % 2 === 0) {
                input.style.display = "block";
                a = 1;
            } else {
                input.style.display = "none";
                a = 0;
            }
        });

    }

    toggleShater("shater1", "section1");
    toggleShater("shater2", "section2");
    toggleShater("shater3", "section3");
    toggleShater("shater4", "section4");
    toggleShater("shater5", "section5");


});
let socio = 2;

document.addEventListener("DOMContentLoaded", () => {
    let add_btn = document.querySelector("#btn-socio_population");
    add_btn.addEventListener("click", function() {
        while (socio < 10) {
            let element_ul = document.createElement("ul");
            element_ul.innerHTML = '<ul id="uld-' + socio + '">' + '<li id="li-family-' + socio + '-name">' +
                '<label for="family-' + socio + '-name">የቤተሰብ ስም </label>' +
                '<input type="text" name="family-' + socio + '-name" id="family-' + socio + '-name">' +
                '</li><li id="li-family-' + socio + '-sex">' +
                '<label for="family-' + socio + '-sex">ጾታ</label>' +
                '<select id="family-' + socio + '-sex" name="family-' + socio + '-sex">' +
                '<option value="ወንድ">ወንድ</option>' +
                '<option value="ሴት">ሴት</option>' +
                '</select>' +
                '</li><li class="class-family-' + socio + '-member-level">' +
                '<label for="family-' + socio + '-member-level">የሃላፊነት ሁኔታ</label>' +
                '<select id="family-' + socio + '-member-level" name="family-' + socio + '-member-level" onchange="ffamily' + socio + 'MemberLevel(this)">' +
                ' <option value=" አባት ">አባት (የቤቱባለቤት)</option>' +
                '<option value="እናት ">እናት (የቤቱባለቤት)</option>' +
                ' <option value="ልጅ ">ሌጅ</option>' +
                '<option value="የልጅ-ልጅ ">የልጅ-ልጅ</option>' +
                '<option value="አያት ">አያት</option>' +
                '<option value="ሌላ ዘመድ ">ላሊ ዘመድ</option>' +
                '<option value="other"> ሌላ ዘመድ ካለ ይግለጹ </option>' +
                ' </select>' +
                '<input type="text" name="h_family_' + socio + '_member_level" id="h_family_' + socio + '_member_level" style="display:none;">' +
                '  </></li><li class="class-family-' + socio + '-religion">' +
                '<label for="family-' + socio + '-religion">ሃይማኖት</label>' +
                ' <select name="family-' + socio + '-religion" id="family-' + socio + '-religion" onchange="ffamily' + socio + 'Religion(this)">' +
                '<option value="ኦርቶዶክስ ">ኦርቶዶክስ</option>' +
                '<option value="እስልምና ">እስልምና</option>' +
                '<option value="ፕሮቴስታንት ">ፕሮቴስታንት</option>' +
                '<option value="other">ሌላ</option>' +
                ' </select>' +
                '<input type="text" name="hfamily-' + socio + '-religion" id="hfamily-' + socio + '-religion" style="display:none;">' +
                ' </></li><li class="class-family-' + socio + '-education-level">' +
                ' <label for="family-' + socio + '-education-level">የትምህርት ደረጃ</label>' +
                '<select id="family-' + socio + '-education-level" name="family-' + socio + '-education-level">' +
                '<option value="ማንበብና መፃፍ የማትችል/የማይችል">ማንበብና መፃፍ የማትችል/የማይችል</option>' +
                '<option value="ማንበብና መፃፍ የምትችል/የሚችል ">ማንበብና መፃፍ የምትችል/የሚችል</option>' +
                '<option value="ከ1-8ኛ ክፍል ">ከ1-8ኛ ክፍል</option>' +
                '<option value="የከ9-12ኛ ክፍል ">ከ9-12ኛ ክፍል</option>' +
                '<option value="ከ12 በላይ ">ከ12 በላይ</option>' +
                '<optgroup label="ዕድሜ ከ7 ዓመት በታች ">' +
                '<option value="መዋዕለ ህፃናት ያልገባ ">መዋዕለ ህፃናት ያልገባ</option>' +
                '<option value="መዋዕለ ህፃናት /ቄስ/ት/ቤት የሚማር ">መዋዕለ ህፃናት /ቄስ/ት/ቤት የሚማር</option>' +
                '<option value="መደበኛ ት/ቤት የሚማር ">መደበኛ ት/ቤት የሚማር</option>' +
                '</optgroup>' +
                '</select>' +
                '</li><li class="class-family-1-job-status">' +
                '<label for="family-' + socio + '-job-status">ስራ ሁኔታ</label>' +
                '<select id="family-' + socio + '-job-status" name="family-' + socio + '-job-status">' +
                '<option value="ግብርና ">ግብርና</option>' +
                '<option value="ንድግ ">ንድግ</option>' +
                '<option value="የመንግስት ሰራተኛ ">የመንግስት ሰራተኛ</option>' +
                '<option value="የቤት ዕመቤ ">የቤት ዕመቤት</option>' +
                '<option value="ለስራ ያልደረሰ ከ18 ዓመት በታች ">ለስራ ያልደረሰ ከ18 ዓመት በታች</option>' +
                '<option value="ከ18 ዓመት በታች የሆነ ግን የሚሰራ ">ከ18 ዓመት በታች የሆነ ግን የሚሰራ</option>' +
                '<option value="ተማሪ ">ተማሪ</option>' +
                '<option value="ሌላ">ሌላ ካለ ይግለጹ</option>' +
                '</select>' +
                '</li><li>' +
                '<input type="text" name="h-family-' + socio + '-job-status" id="h-family-' + socio + '-job-status" style="display: none;">' +
                ' </></li><li class="class-family-' + socio + '-marital-status">' +
                '<label for="family-' + socio + '-marital-status">የጋብቻ ሁኔታ</label>' +
                '<select id="family-' + socio + '-marital-status" name="family-' + socio + '-marital-status">' +
                '<option value="ያላገባ /ች ከ18 ዓመት በላይ ">ያላገባ /ች ከ18 ዓመት በላይ</option>' +
                '<option value="ያገባ /ች ">ያገባ /ች</option>' +
                '<option value="ተጋብተው ለየብቻ የሚኖሩ ">ተጋብተው ለየብቻ የሚኖሩ</option>' +
                '<option value="የፈታ/ች ">የፈታ/ች</option>' +
                '<option value="የሞተበት /ባት ">የሞተበት /ባት</option>' +
                '<option value="ለጋብቻ ያልደረሰ/ች ከ18 ዓመት በታች ">ለጋብቻ ያልደረሰ/ች ከ18 ዓመት በታች</option>' +
                '<option value="ከ18 ዓመት በታች ሁና ያገባች ">ከ18 ዓመት በታች ሁና ያገባች</option>' +
                '</select>' +
                '<button type="button" id="rmv' + socio + '">remove</button>' +
                "</li></ul>";
            // 
            let nl = document.createElement("ul");
            let socio_population = document.querySelector("#socio_population");
            socio_population.insertAdjacentElement("afterend", element_ul);
            socio++;
            let rmv2 = document.querySelector("#rmv2");
            let uld2 = document.querySelector("#uld-2");
            rmv2.addEventListener("click", function() {
                uld2.remove();
                socio--;
            });
            let rmv3 = document.querySelector("#rmv3");
            let uld3 = document.querySelector("#uld-3");
            rmv3.addEventListener("click", function() {
                uld3.remove();
                socio--;
            });
            let rmv4 = document.querySelector("#rmv4");
            let uld4 = document.querySelector("#uld-4");
            rmv4.addEventListener("click", function() {
                uld4.remove();
                socio--;
            });
            let rmv5 = document.querySelector("#rmv5");
            let uld5 = document.querySelector("#uld-5");
            rmv5.addEventListener("click", function() {
                uld5.remove();
                socio--;
            });
            let rmv6 = document.querySelector("#rmv6");
            let uld6 = document.querySelector("#uld-6");
            rmv6.addEventListener("click", function() {
                uld6.remove();
                socio--;
            });
            let rmv7 = document.querySelector("#rmv7");
            let uld7 = document.querySelector("#uld-7");
            rmv7.addEventListener("click", function() {
                uld7.remove();
                socio--;
            });
            let rmv8 = document.querySelector("#rmv8");
            let uld8 = document.querySelector("#uld-8");
            rmv8.addEventListener("click", function() {
                uld8.remove();
                socio--;
            });
            let rmv9 = document.querySelector("#rmv9");
            let uld9 = document.querySelector("#uld-9");
            rmv9.addEventListener("click", function() {
                uld9.remove();
                socio--;
            });
            let rmv10 = document.querySelector("#rmv10");
            let uld10 = document.querySelector("#uld-10");
            rmv10.addEventListener("click", function() {
                uld10.remove();
                socio--;
            });


        }
    });
});