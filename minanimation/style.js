$(window).on("load", sidenErLoadet);

function sidenErLoadet() {
    console.log("klar");
    $("#skal_prinsessen_dele").hide();
    $("#princess_container").addClass("princess_move_left");
    $("#princess_sprite").addClass("princess_walkcycle");

    $("#princess_container").on("animationend", princessStaa);

}

function princessStaa() {
    console.log("princessStaa");

    $("#princess_container").off("animationend", princessStaa);

    $("#princess_sprite").removeClass("princess_walkcycle");
    $("#princess_sprite").addClass("princess_staa");


    $("#bonde_container").on("animationend", bondeStaa);

    $("#bonde_container").addClass("bonde_move_right");
    $("#bonde_sprite").addClass("bonde_walkcycle");



    $("#bonde_sprite").addClass("bonde_staa");

}

function bondeStaa() {
    console.log("bondeStaa");

    $("#bonde_container").off("animationend", bondeStaa);

    $("#bonde_sprite").removeClass("bonde_walkcycle");

    $("#bonde_sprite").addClass("bonde_staa");


    // Gør at spørgsmålet kommer 2 sekunder senere frem, når bonden har "placeret" sig
    setTimeout(function () {

        $("#skal_prinsessen_dele").show();

        $("#skal_prinsessen_dele_ja").on("click", svarJa);
        $("#skal_prinsessen_dele_nej").on("click", svarNej);

    }, 3000);


}

function svarJa() {
    console.log("svarJa");
    $("#skal_prinsessen_dele_ja").off("click", svarJa);

    // fjerner spørgsmålet med svar
    $("#skal_prinsessen_dele").hide();



    //Starter walkcycle mod hinanden


    $("#princess_container").addClass("princess_move_to_mid");
    $("#princess_sprite").addClass("princess_walkcycle");
    $("#princess_sprite").addClass("princess_med_mad");

    $("#bonde_container").addClass("bonde_move_to_mid");
    $("#bonde_sprite").addClass("bonde_walkcycle");
    $("#bonde_sprite").addClass("bonde_med_mad");



    //Få bonden til at gå ind mod midten (brug samme princip som med prinseen der går længere ind)

    // Holder hånd med prinsssen, lav ny css sprite for bonden, og tilføj den her også så den matcher med prinsessens hånd

}

function svarNej() {
    console.log("svarNej");
    $("#skal_prinsessen_dele_Nej").off("click", svarNej);

    // fjerner spørgsmålet med svar
    $("#skal_prinsessen_dele").hide();

    //Prinsessen bliver tyk og ensom


    //Bonden walkcycle out (lav walkcycle modsatte vej)


}
