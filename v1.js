// document.querySelector('form').addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("done");
// });

// function ffamily1MemberLevel(selectElement) {
//     const otherInput = document.getElementById("h_family_1_member_level");
//     if (selectElement.value === "other") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }
console.log("done");

// function ffamily1Religion(selectElement) {
//     const otherInput = document.getElementById("hfamily-1-religion");
//     if (selectElement.value === "other") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }

// function fanimal(selectElement) {
//     const otherInput = document.getElementById("how-animal");
//     if (selectElement.value === "አዎ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }


// function fenergySource(selectElement) {
//     const otherInput = document.getElementById("li_wood");
//     const otherInput1 = document.getElementById("li_electric");
//     if (selectElement.value === "እንጨትና ኩበት") {
//         otherInput.style.display = 'block';
//         otherInput1.style.display = 'none';
//         otherInput1.value = '';
//     } else if (selectElement.value === "ኤላክትሪክ") {
//         otherInput1.style.display = 'block';
//         otherInput.style.display = 'none';
//         otherInput.value = '';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//         otherInput1.style.display = 'none';
//         otherInput1.value = ''; // Clear previous text if hidden
//     }
// }

// function friverWater(selectElement) {
//     const otherInput = document.getElementById("h_river_water");
//     if (selectElement.value === "ሌላ ካለ ይግለጹ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }

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

// function existToilet1(selectElement) {
//     const otherInput = document.getElementById("li-handle-toilet");
//     const otherInput1 = document.getElementById("li-yes-exist-toilet");
//     if (selectElement.value === "አዎ") {
//         otherInput.style.display = 'block';
//     } else if (selectElement.value === "አዎ") {
//         otherInput1.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//         otherInput1.style.display = 'none';
//         otherInput1.value = ''; // Clear previous text if hidden
//     }
// }



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

// function leftoverFood(selectElement) {
//     const otherInput = document.getElementById("li-leftover-food-yes");
//     if (selectElement.value === "እጠቀማለሁ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }

// function existToilet(selectElement) {
//     const otherInput = document.getElementById("li-leftover-food-yes");
//     const otherInput1 = document.getElementById("li-yes-exist-toilet");

//     const otherInput2 = document.getElementById("li-handle-toilet");

//     const otherInput3 = document.getElementById("li-use-toilet-properly");

//     const otherInput4 = document.getElementById("li-distance-toilet-home");

//     const otherInput5 = document.getElementById("li-distance-toilet-kitchen");

//     const otherInput6 = document.getElementById("li-distance-toilet-water");

//     const otherInput7 = document.getElementById("li-exist-siphon-toilet");

//     const otherInput8 = document.getElementById("li-type-toilet");

//     const otherInput9 = document.getElementById("li-clean-toilet");

//     const otherInput10 = document.getElementById("li-palce-family-use-toilet");

//     const otherInput11 = document.getElementById("li-reason-not-have-toilet");

//     const otherInput12 = document.getElementById("h_handle_toilet");

//     const otherInput13 = document.getElementById("h_type_toilet");


//     if (selectElement.value === "አዎ") {
//         otherInput.style.display = 'block';
//         otherInput1.style.display = 'block';
//         otherInput2.style.display = 'block';
//         otherInput3.style.display = 'block';
//         otherInput4.style.display = 'block';
//         otherInput5.style.display = 'block';
//         otherInput6.style.display = 'block';
//         otherInput7.style.display = 'block';
//         otherInput8.style.display = 'block';
//         otherInput9.style.display = 'block';
//         otherInput10.style.display = 'none';
//         otherInput10.value = '';
//         otherInput11.style.display = 'none';
//         otherInput11.value = '';

//     } else if (selectElement.value === "የለም") {
//         otherInput10.style.display = 'block';
//         otherInput11.style.display = 'block';
//         otherInput1.style.display = 'none';
//         otherInput1.value = '';
//         otherInput2.style.display = 'none';
//         otherInput2.value = '';
//         otherInput3.style.display = 'none';
//         otherInput3.value = '';
//         otherInput4.style.display = 'none';
//         otherInput4.value = '';
//         otherInput5.style.display = 'none';
//         otherInput5.value = '';
//         otherInput6.style.display = 'none';
//         otherInput6.value = '';
//         otherInput7.style.display = 'none';
//         otherInput7.value = '';
//         otherInput8.style.display = 'none';
//         otherInput8.value = '';
//         otherInput9.style.display = 'none';
//         otherInput9.value = '';
//         otherInput12.style.display = 'none';
//         otherInput12.value = '';
//         otherInput13.style.display = 'none';
//         otherInput13.value = '';
//     } else {
//         otherInput1.style.display = 'none';
//         otherInput1.value = '';
//         otherInput2.style.display = 'none';
//         otherInput2.value = '';
//         otherInput3.style.display = 'none';
//         otherInput3.value = '';
//         otherInput4.style.display = 'none';
//         otherInput4.value = '';
//         otherInput5.style.display = 'none';
//         otherInput5.value = '';
//         otherInput6.style.display = 'none';
//         otherInput6.value = '';
//         otherInput7.style.display = 'none';
//         otherInput7.value = '';
//         otherInput8.style.display = 'none';
//         otherInput8.value = '';
//         otherInput9.style.display = 'none';
//         otherInput9.value = '';
//         otherInput10.style.display = 'none';
//         otherInput10.value = '';
//         otherInput11.style.display = 'none';
//         otherInput11.value = '';
//         otherInput12.style.display = 'none';
//         otherInput12.value = '';
//         otherInput13.style.display = 'none';
//         otherInput13.value = '';

//     }
// }


function typeToilet(selectElement) {
    const otherInput = document.getElementById("h_type_toilet");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}

// function dryGarbage(selectElement) {
//     const otherInput = document.getElementById("h_dry_garbage");
//     if (selectElement.value === "ሌላ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }



function bouchingPlace(selectElement) {
    const otherInput = document.getElementById("h_bouching_place");
    if (selectElement.value === "ሌላ") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
}

// function adultFemale(selectElement) {
//     const otherInput2 = document.getElementById("li-maried-at");

//     const otherInput3 = document.getElementById("li-pregnant-women");

//     const otherInput4 = document.getElementById("li-pregnacy-checkup");

//     const otherInput5 = document.getElementById("li-pregnacy-checkup-reason");

//     const otherInput6 = document.getElementById("li-cuase-of-desease");

//     const otherInput7 = document.getElementById("li-first-birth-age");

//     const otherInput8 = document.getElementById("li-happened-abortion");

//     const otherInput9 = document.getElementById("li-no-abortion");

//     const otherInput10 = document.getElementById("li-no-maternal-dith");

//     const otherInput11 = document.getElementById("li-no-mothers-age-five");

//     const otherInput12 = document.getElementById("li-home-birth");

//     const otherInput13 = document.getElementById("li-hospital-birth");

//     const otherInput14 = document.getElementById("li-reason-for-home-birth");

//     const otherInput15 = document.getElementById("li-no-twin-birth");

//     const otherInput16 = document.getElementById("li-no-operation-birth");

//     const otherInput17 = document.getElementById("li-after-birth-checkup");

//     const otherInput18 = document.getElementById("li-after-birth-checkup-no");

//     const otherInput19 = document.getElementById("h_pregnacy_checkup_reason");


//     if (selectElement.value > 0) {
//         otherInput2.style.display = 'block';
//         otherInput3.style.display = 'block';
//         otherInput7.style.display = 'block';
//         otherInput8.style.display = 'block';
//         otherInput10.style.display = 'block';
//         otherInput11.style.display = 'block';
//         otherInput12.style.display = 'block';
//         otherInput13.style.display = 'block';
//         otherInput15.style.display = 'block';
//         otherInput17.style.display = 'block';

//         //otherInput17.style.display = 'block';
//     } else {
//         otherInput2.style.display = 'none';
//         otherInput2.value = '';
//         otherInput3.style.display = 'none';
//         otherInput3.value = '';
//         otherInput4.style.display = 'none';
//         otherInput4.value = '';
//         otherInput5.style.display = 'none';
//         otherInput5.value = '';
//         otherInput6.style.display = 'none';
//         otherInput6.value = '';
//         otherInput7.style.display = 'none';
//         otherInput7.value = '';
//         otherInput8.style.display = 'none';
//         otherInput8.value = '';
//         otherInput9.style.display = 'none';
//         otherInput9.value = '';
//         otherInput10.style.display = 'none';
//         otherInput10.value = '';
//         otherInput11.style.display = 'none';
//         otherInput11.value = '';
//         otherInput12.style.display = 'none';
//         otherInput12.value = '';
//         otherInput13.style.display = 'none';
//         otherInput13.value = '';
//         otherInput14.style.display = 'none';
//         otherInput14.value = '';
//         otherInput15.style.display = 'none';
//         otherInput15.value = '';
//         otherInput16.style.display = 'none';
//         otherInput16.value = '';
//         otherInput17.style.display = 'none';
//         otherInput17.value = '';
//         otherInput18.style.display = 'none';
//         otherInput18.value = '';
//         otherInput19.style.display = 'none';
//         otherInput19.value = '';

//     }
// }

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

// function pregnacyCheckup(selectElement) {

//     const otherInput6 = document.getElementById("li-cuase-of-desease");

//     if (selectElement.value > 0) {
//         otherInput6.style.display = 'block';
//     } else {
//         otherInput6.style.display = 'none';
//         otherInput6.value = '';
//     }
// }



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

// function hospitalBirth(selectElement) {

//     const otherInput16 = document.getElementById("li-no-operation-birth");

//     if (selectElement.value > 0) {
//         otherInput16.style.display = 'block';
//     } else {
//         otherInput16.style.display = 'none';
//         otherInput16.value = '';
//     }
// }


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
// document.querySelector('form').addEventListener("submit", function(e) {
//     e.preventDefault();
//     console.log("done");
// });

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

// function dishWash(selectElement) {
//     const otherInput = document.getElementById("h_dish_wash");
//     if (selectElement.value === "ሌላ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }


// function waterHeigen(selectElement) {
//     const otherInput = document.getElementById("h_water_heigen");
//     if (selectElement.value === "ሌላ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }

// function washHandWith(selectElement) {
//     const otherInput = document.getElementById("h_wash_hand_with");
//     if (selectElement.value === "ሌላ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }

// function existToilet(selectElement) {
//     const otherInput = document.getElementById("li-handle-toilet");
//     const otherInput1 = document.getElementById("li-yes-exist-toilet");
//     if (selectElement.value === "አዎ") {
//         otherInput.style.display = 'block';
//     } else if (selectElement.value === "አዎ") {
//         otherInput1.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//         otherInput1.style.display = 'none';
//         otherInput1.value = ''; // Clear previous text if hidden
//     }
// }



// function handleToilet(selectElement) {
//     const otherInput = document.getElementById("h_handle_toilet");
//     if (selectElement.value === "ሌላ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }

// function fwater1(selectElement) {
//     const otherInput1 = document.getElementById("h_river_water");
//     const otherInput = document.getElementById("li-river-water");
//     const otherInput2 = document.getElementById("li-no-minute");
//     if (selectElement.value === "ካልተጠበቀ የውሃ ጉድጓድ /ምንጭ") {
//         otherInput.style.display = 'block';
//         otherInput2.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//         otherInput1.style.display = 'none';
//         otherInput1.value = '';
//         otherInput2.style.display = 'none';
//         otherInput2.value = '';
//     }
// }

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



// function bouchingPlace(selectElement) {
//     const otherInput = document.getElementById("h_bouching_place");
//     if (selectElement.value === "ሌላ") {
//         otherInput.style.display = 'block';
//     } else {
//         otherInput.style.display = 'none';
//         otherInput.value = ''; // Clear previous text if hidden
//     }
// }

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

// function pregnantWomen(selectElement) {

//     const otherInput4 = document.getElementById("li-pregnacy-checkup");

//     const otherInput5 = document.getElementById("li-pregnacy-checkup-reason");

//     const otherInput6 = document.getElementById("li-cuase-of-desease");

//     const otherInput19 = document.getElementById("h_pregnacy_checkup_reason");

//     if (selectElement.value > 0) {
//         otherInput4.style.display = 'block';
//         otherInput5.style.display = 'block';
//     } else {
//         otherInput4.style.display = 'none';
//         otherInput4.value = '';
//         otherInput5.style.display = 'none';
//         otherInput5.value = '';
//         otherInput6.style.display = 'none';
//         otherInput6.value = '';
//         otherInput19.style.display = 'none';
//         otherInput19.value = '';
//     }
// }

function pregnacyCheckup(selectElement) {

    const otherInput6 = document.getElementById("li-cuase-of-desease");

    if (selectElement.value > 0) {
        otherInput6.style.display = 'block';
    } else {
        otherInput6.style.display = 'none';
        otherInput6.value = '';
    }
}

// function pregnacyCheckupReason(selectElement) {

//     const otherInput19 = document.getElementById("h_pregnacy_checkup_reason");

//     if (selectElement.value === "ሌላ") {
//         otherInput19.style.display = 'block';
//     } else {
//         otherInput19.style.display = 'none';
//         otherInput19.value = '';
//     }
// }

// function pregnacyCheckupReason(selectElement) {

//     const otherInput19 = document.getElementById("h_pregnacy_checkup_reason");

//     if (selectElement.value === "ሌላ") {
//         otherInput19.style.display = 'block';
//     } else {
//         otherInput19.style.display = 'none';
//         otherInput19.value = '';
//     }
// }

// function happenedAbortion(selectElement) {

//     const otherInput9 = document.getElementById("li-no-abortion");

//     if (selectElement.value === "አዎ") {
//         otherInput9.style.display = 'block';
//     } else {
//         otherInput9.style.display = 'none';
//         otherInput9.value = '';
//     }
// }

// function homeBirth(selectElement) {

//     const otherInput14 = document.getElementById("li-reason-for-home-birth");

//     if (selectElement.value > 0) {
//         otherInput14.style.display = 'block';
//     } else {
//         otherInput14.style.display = 'none';
//         otherInput14.value = '';
//     }
// }

function hospitalBirth(selectElement) {

    const otherInput16 = document.getElementById("li-no-operation-birth");

    if (selectElement.value > 0) {
        otherInput16.style.display = 'block';
    } else {
        otherInput16.style.display = 'none';
        otherInput16.value = '';
    }
}


// function afterBirthCheckup(selectElement) {

//     const otherInput18 = document.getElementById("li-after-birth-checkup-no");

//     if (selectElement.value > 0) {
//         otherInput18.style.display = 'block';
//     } else {
//         otherInput18.style.display = 'none';
//         otherInput18.value = '';
//     }
// }
console.log(document.createElement('input'));
console.log(document.getElementById('family-1-member-level'));


// document.addEventListener("DOMContentLoaded", () => {

//     function toggleOther(selectId, inputId) {
//         const select = document.getElementById(selectId);
//         const input = document.getElementById(inputId);
//         if (!select || !input) return;

//         select.addEventListener("click", () => {
//             if (select.value.includes("ሌላ") || select.value.toLowerCase().includes("other")) {
//                 input.style.display = "block";
//                 input.setAttribute("required", "true");
//             } else {
//                 input.style.display = "none";
//                 input.removeAttribute("required");
//                 input.value = "";
//             }
//         });
//     }

//     function toggleYes(selectId, elementId) {
//         const select = document.getElementById(selectId);
//         const element = document.getElementById(elementId);
//         if (!select || !element) return;

//         select.addEventListener("click", () => {
//             if (select.value.includes("አዎ") || select.value.toLowerCase() === "yes") {
//                 element.style.display = "block";
//             } else {
//                 element.style.display = "none";
//                 element.querySelectorAll("input,select").forEach(el => {
//                     el.value = "";
//                 });
//             }
//         });
//     }

//     function toggleNo(selectId, elementId) {
//         const select = document.getElementById(selectId);
//         const element = document.getElementById(elementId);
//         if (!select || !element) return;

//         select.addEventListener("click", () => {
//             if (select.value.includes("የለም") || select.value.toLowerCase() === "yes") {
//                 element.style.display = "block";
//             } else {
//                 element.style.display = "none";
//                 element.querySelectorAll("input,select").forEach(el => {
//                     el.value = "";
//                 });
//             }
//         });
//     }

//     function toggleSelected(selectId, elementId) {
//         const select = document.getElementById(selectId);
//         const element = document.getElementById(elementId);
//         if (!select || !element) return;

//         select.addEventListener("click", () => {
//             if (select.value === "on" || select.value.toLowerCase() === "yes") {
//                 element.style.display = "block";
//             } else {
//                 element.style.display = "none";
//                 element.querySelectorAll("input,select").forEach(el => {
//                     el.value = "";
//                 });
//             }
//         });
//     }

//     function toggle0(selectId, elementId) {
//         const select = document.getElementById(selectId);
//         const element = document.getElementById(elementId);
//         if (!select || !element) return;

//         select.addEventListener("input", () => {
//             if (select.value > 0 || select.value.toLowerCase() === "yes") {
//                 element.style.display = "block";
//             } else {
//                 element.style.display = "none";
//                 element.querySelectorAll("input,select").forEach(el => {
//                     el.value = "";
//                 });
//             }
//         });
//     }


//     // Example bindings





// });

// function noInfantVaccineWithCard(selectElement) {

//     const otherInput2 = document.getElementById("li-no-infant-vaccine-with-card");

//     const otherInput3 = document.getElementById("li-bcg-vaccine");

//     const otherInput4 = document.getElementById("li-polio-vaccine");

//     const otherInput5 = document.getElementById("li-pentavalent-vaccine");

//     const otherInput6 = document.getElementById("li-pcv-vaccine");

//     const otherInput7 = document.getElementById("li-rota-vaccine");

//     const otherInput8 = document.getElementById("li-kufgn-vaccine");

//     const otherInput9 = document.getElementById("rp");

//     if (selectElement.value > 0) {
//         otherInput2.style.display = "block";
//     } else {

//         otherInput3.style.display = 'none';
//         otherInput3.value = '';
//         otherInput4.style.display = 'none';
//         otherInput4.value = '';
//         otherInput5.style.display = 'none';
//         otherInput5.value = '';
//         otherInput6.style.display = 'none';
//         otherInput6.value = '';
//         otherInput7.style.display = 'none';
//         otherInput7.value = '';
//         otherInput8.style.display = 'none';
//         otherInput8.value = '';
//         otherInput9.style.display = 'none';
//         otherInput9.value = '';

//     }
// }


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


        let element_ul = document.createElement("ul");
        // let li_family_2_name = document.createElement("li");
        // let family_2_name = document.createElement("label");
        // let family_2_namebtn = document.createElement("input");
        // let li_family_2_sex = document.createElement("li");
        // let family_2_sex = document.createElement("label");
        // let family_2_sexbtn = document.createElement("select");
        // element_ul.setAttribute("id", "socio_population2");
        // li_family_2_name.setAttribute("id", "li_family_2_name");
        // family_2_name.setAttribute("for", "family_2_name");
        // family_2_name.innerText = "የቤተሰብ 1 ስም";
        // family_2_namebtn.setAttribute("type", "text");
        // family_2_namebtn.setAttribute("name", "family_2_name");
        // family_2_namebtn.setAttribute("id", "family_2_name");
        // family_2_namebtn.setAttribute("placeholder", "abebe");
        // li_family_2_name.appendChild(family_2_name);
        // li_family_2_name.appendChild(family_2_namebtn);
        // family_2_sex.innerText = "ጾታ";
        // element_ul.appendChild(li_family_2_name);
        // family_2_sexbtn.innerHTML = "<option <option value='ወንድ'>ወንድ</option><option value='ሴት'>ሴት</option>";
        // li_family_2_sex.appendChild(family_2_sex);
        // li_family_2_sex.appendChild(family_2_sexbtn);
        // element_ul.appendChild(li_family_2_sex);
        //
        element_ul.innerHTML = '<li id="li-family-1-name">' +
            '<label for="family-1-name">የቤተሰብ 1 ስም </label>' +
            '<input type="text" name="family-1-name" id="family-1-name">' +
            '</li><li id="li-family-1-sex">' +
            '<label for="family-1-sex">ጾታ</label>' +
            '<select id="family-1-sex" name="family-1-sex">' +
            '<option value="ወንድ">ወንድ</option>' +
            '<option value="ሴት">ሴት</option>' +
            '</select>' +
            '</li><li class="class-family-1-member-level">' +
            '<label for="family-1-member-level">የሃላፊነት ሁኔታ</label>' +
            '<select id="family-1-member-level" name="family-1-member-level" onchange="ffamily1MemberLevel(this)">' +
            ' <option value=" አባት ">አባት (የቤቱባለቤት)</option>' +
            '<option value="እናት ">እናት (የቤቱባለቤት)</option>' +
            ' <option value="ልጅ ">ሌጅ</option>' +
            '<option value="የልጅ-ልጅ ">የልጅ-ልጅ</option>' +
            '<option value="አያት ">አያት</option>' +
            '<option value="ሌላ ዘመድ ">ላሊ ዘመድ</option>' +
            '<option value="other"> ሌላ ዘመድ ካለ ይግለጹ </option>' +
            ' </select>' +
            '<input type="text" name="h_family_1_member_level" id="h_family_1_member_level" style="display:none;">' +
            '  </></li><li class="class-family-1-religion">' +
            '<label for="family-1-religion">ሃይማኖት</label>' +
            ' <select name="family-1-religion" id="family-1-religion" onchange="ffamily1Religion(this)">' +
            '<option value="ኦርቶዶክስ ">ኦርቶዶክስ</option>' +
            '<option value="እስልምና ">እስልምና</option>' +
            '<option value="ፕሮቴስታንት ">ፕሮቴስታንት</option>' +
            '<option value="other">ሌላ</option>' +
            ' </select>' +
            '<input type="text" name="hfamily-1-religion" id="hfamily-1-religion" style="display:none;">' +
            ' </></li><li class="class-family-1-education-level">' +
            ' <label for="family-1-education-level">የትምህርት ደረጃ</label>' +
            '<select id="family-1-education-level" name="family-1-education-level">' +
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
            '<label for="family-1-job-status">ስራ ሁኔታ</label>' +
            '<select id="family-1-job-status" name="family-1-job-status">' +
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
            '<input type="text" name="h-family-1-job-status" id="h-family-1-job-status" style="display: none;">' +
            ' </></li><li class="class-family-1-marital-status">' +
            '<label for="family-1-marital-status">የጋብቻ ሁኔታ</label>' +
            '<select id="family-1-marital-status" name="family-1-marital-status">' +
            '<option value="ያላገባ /ች ከ18 ዓመት በላይ ">ያላገባ /ች ከ18 ዓመት በላይ</option>' +
            '<option value="ያገባ /ች ">ያገባ /ች</option>' +
            '<option value="ተጋብተው ለየብቻ የሚኖሩ ">ተጋብተው ለየብቻ የሚኖሩ</option>' +
            '<option value="የፈታ/ች ">የፈታ/ች</option>' +
            '<option value="የሞተበት /ባት ">የሞተበት /ባት</option>' +
            '<option value="ለጋብቻ ያልደረሰ/ች ከ18 ዓመት በታች ">ለጋብቻ ያልደረሰ/ች ከ18 ዓመት በታች</option>' +
            '<option value="ከ18 ዓመት በታች ሁና ያገባች ">ከ18 ዓመት በታች ሁና ያገባች</option>' +
            '</select>' +
            "</li></>";



        //
        let socio_population = document.querySelector("#socio_population");

        socio_population.insertAdjacentElement("afterend", element_ul);

        console.log(0);
        socio++;

    });




});