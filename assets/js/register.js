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

//setup submit button
let subButton = document.getElementById('submit')

subButton.addEventListener("click",ev =>{
    ev.preventDefault()

    //get form data
    let institute = document.getElementById('institute-name').value
    let team_name = document.getElementById('team-name').value
    let members = document.getElementById('members').value

    let mem_1_name = document.getElementById('mem-1-name').value
    let mem_1_age = document.getElementById('mem-1-age').value
    let mem_1_email = document.getElementById('mem-1-email').value
    let mem_1_phone = document.getElementById('mem-1-mob').value

    let mem_2_name = document.getElementById('mem-2-name').value
    let mem_2_age = document.getElementById('mem-2-age').value
    let mem_2_email = document.getElementById('mem-2-email').value
    let mem_2_phone = document.getElementById('mem-2-mob').value

    let mem_3_name = document.getElementById('mem-3-name').value
    let mem_3_age = document.getElementById('mem-3-age').value
    let mem_3_email = document.getElementById('mem-3-email').value
    let mem_3_phone = document.getElementById('mem-3-mob').value

    let mem_4_name = document.getElementById('mem-4-name').value
    let mem_4_age = document.getElementById('mem-4-age').value
    let mem_4_email = document.getElementById('mem-4-email').value
    let mem_4_phone = document.getElementById('mem-4-mob').value

    console.log(institute,
        team_name,
        members,
        mem_1_name,
        mem_1_age,
        mem_1_email,
        mem_1_phone,
        mem_2_name,
        mem_2_age,
        mem_2_email,
        mem_2_phone,
        mem_3_name,
        mem_3_age,
        mem_3_email,
        mem_3_phone,
        mem_4_name,
        mem_4_age,
        mem_4_email,
        mem_4_phone)
    //save data to firestore
    db.doc().set({
        institute:institute,
        team_name:team_name,
        members:members,
        mem_1_name:mem_1_name,
        mem_1_age:mem_1_age,
        mem_1_email:mem_1_email,
        mem_1_phone:mem_1_phone,
        mem_2_name:mem_2_name,
        mem_2_age:mem_2_age,
        mem_2_email:mem_2_email,
        mem_2_phone:mem_2_phone,
        mem_3_name:mem_3_name,
        mem_3_age:mem_3_age,
        mem_3_email:mem_3_email,
        mem_3_phone:mem_3_phone,
        mem_4_name:mem_4_name,
        mem_4_age:mem_4_age,
        mem_4_email:mem_4_email,
        mem_4_phone:mem_4_phone

    }).then( () => {
        console.log("data saved")
        document.querySelector('.sent-message').style.display = 'block';
        document.getElementById('registration-form').reset();

    }).catch((error)=> {
        console.log(error,institute,
        team_name,
        members,
        mem_1_name,
        mem_1_age,
        mem_1_email,
        mem_1_phone,
        mem_2_name,
        mem_2_age,
        mem_2_email,
        mem_2_phone,
        mem_3_name,
        mem_3_age,
        mem_3_email,
        mem_3_phone,
        mem_4_name,
        mem_4_age,
        mem_4_email,
        mem_4_phone)

    })
})


document.getElementById('members').addEventListener('change',(e)=>{
    console.log(document.getElementById('members').value)
    if (document.getElementById('members').value == 4 ){
        console.log("running")
        addRequired("mem-4-name")
        addRequired("mem-4-age")
        addRequired("mem-4-email")
        addRequired("mem-4-mob")
    }else {
        removeRequired("mem-4-name")
        removeRequired("mem-4-age")
        removeRequired("mem-4-email")
        removeRequired("mem-4-mob")
    }
})


function addRequired(id){
    document.getElementById(id).setAttribute("required","");
}
function removeRequired(id){
    document.getElementById(id).removeAttribute("required");
}