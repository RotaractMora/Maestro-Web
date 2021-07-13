// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAscGIgvh8t4TBEsaxyjeLWpyYaha90HGI",
    authDomain: "maestrotest-e1684.firebaseapp.com",
    projectId: "maestrotest-e1684",
    storageBucket: "maestrotest-e1684.appspot.com",
    messagingSenderId: "1075019959077",
    appId: "1:1075019959077:web:955ed58fa689105763e8cc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//access database
const db = firestore.collection("teamRegister")

db.get().then((results) =>{
    results.forEach((doc) =>{
        createCard(doc.data().team_name,doc.data().institute,doc.data().members,doc.data().mem_1_name,
            doc.data().mem_1_age,doc.data().mem_1_email,doc.data().mem_1_phone,doc.data().mem_2_name,
            doc.data().mem_2_age,doc.data().mem_2_email,doc.data().mem_2_phone,doc.data().mem_3_name,
            doc.data().mem_3_age,doc.data().mem_3_email,doc.data().mem_3_phone,doc.data().mem_4_name,
            doc.data().mem_4_age,doc.data().mem_4_email,doc.data().mem_4_phone,)
    })
})


function createCard(teamName, institute, members, mem1name, mem1age, mem1email, mem1mob,
                    mem2name, mem2age, mem2email, mem2mob,
                    mem3name, mem3age, mem3email, mem3mob,
                    mem4name, mem4age, mem4email, mem4mob,) {
 var card = document.createElement('div')
    card.innerHTML = `
<div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link title-card" type="button" onclick="showCollapse(this)" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">${teamName}</button>
                    </h5>
                </div>

                <div id="${teamName}" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample" >
                    <div class="card-body">
                        <h3>Basic info</h3>
                        <div class="row details-row">
                            <div class="col-sm">${teamName}</div>
                            <div class="col-sm">${institute}</div>
                            <div class="col-sm">${members}</div>
                        </div>

                        <h5>Team Captain</h5>
                        <div class="row details-row">
                            <div class="col-sm">${mem1name}</div>
                            <div class="col-sm">${mem1age}</div>
                            <div class="col-sm">${mem1email}</div>
                            <div class="col-sm">${mem1mob}</div>
                        </div>

                        <h5>Team member 2</h5>
                        <div class="row details-row">
                            <div class="col-sm">${mem2name}</div>
                            <div class="col-sm">${mem2age}</div>
                            <div class="col-sm">${mem2email}</div>
                            <div class="col-sm">${mem2mob}</div>
                        </div>

                        <h5>Team member 3</h5>
                        <div class="row details-row">
                            <div class="col-sm">${mem3name}</div>
                            <div class="col-sm">${mem3age}</div>
                            <div class="col-sm">${mem3email}</div>
                            <div class="col-sm">${mem3mob}</div>
                        </div>

                        <h5>Team member 4</h5>
                        <div class="row details-row">
                            <div class="col-sm">${mem4name}</div>
                            <div class="col-sm">${mem4age}</div>
                            <div class="col-sm">${mem4email}</div>
                            <div class="col-sm">${mem4mob}</div>
                        </div>
                    </div>
                </div>
            </div>`
    document.getElementById('accordion').append(card)

}

function showCollapse(ele) {
    if (document.getElementById(ele.innerHTML).classList.contains("show")){
        document.getElementById(ele.innerHTML).classList.remove("show")
    }else {
        document.getElementById(ele.innerHTML).classList.add("show")
    }
}