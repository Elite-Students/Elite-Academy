let form = document.getElementById("Apply-Form")
form.addEventListener('submit', craetProfile)

function Profile(path,name,experince,skill) {
    this.source=path;
    this.theName=name;
    this.experince=experince
    this.skills=skill
    Profile.all.push(this)

}
Profile.all=[]
console.log(Profile.all,'befor');
let divProfiles=document.getElementById('theProfils')


function craetProfile(event) {
    event.preventDefault();
    console.log(event.target);
    let imgPart = event.target.Photo.value;
    
    let namePart = event.target.name.value;

    let experiencePart = event.target.experience.value;
    let skillsPart = event.target.skills.value;

    console.log(imgPart,namePart,experiencePart,skillsPart);

    let profileJob=new Profile(imgPart,namePart,experiencePart,skillsPart)
    // profilesArr.push(profileJob)
  console.log(profileJob);
  // theprofile()
  saveTeProfile()
  profileJob.renderProfile ()

}



function loadProfile() {
    let profileLoad=localStorage.getItem('profile');

    let parsedArr=JSON.parse(profileLoad)

    if (parsedArr!==null) {

for (let i = 0; i < parsedArr.length; i++) {
  new Profile (parsedArr[i].source,parsedArr[i].theName,parsedArr[i].experince,parsedArr[i].skills)

  
}    }

    console.log(profileLoad);
}

let profilesArr=[];
console.log(profilesArr);

// render . prototype 

Profile.prototype.renderProfile= function (){



// for (let i = 0; i < Profile.all.length; i++) {
let imgElemnt=document.createElement('img')

divProfiles.appendChild(imgElemnt)
imgElemnt.src =` ${ this.source}`

    let ulEleent=document.createElement('ul');
    divProfiles.appendChild(ulEleent);

  let li1Element= document.createElement('li')
  ulEleent.appendChild(li1Element)
  li1Element.textContent=`your name is  ${ this.theName} `;
  let li2Element= document.createElement('li')
  ulEleent.appendChild(li2Element)
  li2Element.textContent=`the experince per year  ${this.experince} `;
  let li3Element= document.createElement('li')
  ulEleent.appendChild(li3Element)
  li3Element.textContent=`the skills ${this.skills} `;
    
}
// }

// Profile.prototype.saveTeProfile=function () {
//     localStorage.setItem('profile',JSON.stringify(Profile.all))
// }
function saveTeProfile() {
  
    let stringArr=JSON.stringify(Profile.all);
    console.log(stringArr);
  
    localStorage.setItem('profile',stringArr);
  
  }


  loadProfile()


  for (let i = 0; i < Profile.all.length; i++) {
Profile.all[i].renderProfile()
  }
