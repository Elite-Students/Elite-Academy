// ahmad part 


let form = document.getElementById("Apply-Form")
form.addEventListener('submit', craetProfile)

// ahmad part + abedalraheem update 
function Profile(path, name, experince, skill, Mobile, Email) {
  this.source = path;
  this.theName = name;
  this.experince = experince
  this.skills = skill
  this.mobile = Mobile
  this.email = Email
  Profile.all.push(this)

}
Profile.all = []
console.log(Profile.all, 'befor');
let divProfiles = document.getElementById('theProfils')

// ahmad part + abedalraheem update 

function craetProfile(event) {
  event.preventDefault();
  console.log(event.target);
  let imgPart = event.target.Photo.value;

  let namePart = event.target.name.value;

  let experiencePart = event.target.experience.value;
  let skillsPart = event.target.skills.value;
  let mobilepart = event.target.mobile.value;
  let emailpart = event.target.email.value;

  console.log(imgPart, namePart, experiencePart, skillsPart);

  // ahmad part + abedalraheem update 

  let profileJob = new Profile(imgPart, namePart, experiencePart, skillsPart, mobilepart, emailpart)
  // profilesArr.push(profileJob)
  console.log(profileJob);
  // theprofile()
  saveTeProfile()
  profileJob.renderProfile()


  
  Swal.fire(
    'thanks for your intrest',
    'Our consulting team will contact you soon',
    'success'
  )
 
}

// ahmad part 

function loadProfile() {
  let profileLoad = localStorage.getItem('profile');

  let parsedArr = JSON.parse(profileLoad)

  if (parsedArr !== null) {

    // abedalraheem part 

    for (let i = 0; i < parsedArr.length; i++) {
      new Profile(parsedArr[i].source, parsedArr[i].theName, parsedArr[i].experince, parsedArr[i].skills, parsedArr[i].mobile, parsedArr[i].email)


    }
  }

  console.log(profileLoad);
}



// render . prototype 
  //abedalraheem part 

Profile.prototype.renderProfile = function () {


  let newDiv = document.createElement('div')
  divProfiles.appendChild(newDiv)
  newDiv.setAttribute('id','profileDiv')

  // for (let i = 0; i < Profile.all.length; i++) {
  let imgElemnt = document.createElement('img')
// ahmad + abedalraheem part 
  newDiv.appendChild(imgElemnt)
  imgElemnt.src = ` ${this.source}`
  imgElemnt.setAttribute('id','imgProfile')

  let ulEleent = document.createElement('ul');
  newDiv.appendChild(ulEleent);

  ulEleent.setAttribute('id','ulprofile')

  let li1Element = document.createElement('li')
  ulEleent.appendChild(li1Element)
  li1Element.setAttribute("class","liProfil")
  li1Element.textContent = `User Name : ${this.theName} `;
  let li2Element = document.createElement('li')
  ulEleent.appendChild(li2Element)
  li2Element.setAttribute("class","liProfil")

  li2Element.textContent = ` Skills that you have : ${this.skills} `;
  let li3Element = document.createElement('li')
  ulEleent.appendChild(li3Element)
  li3Element.setAttribute("class","liProfil")

  li3Element.textContent = ` Years of Experience : ${this.experince} `;

  let li4Element = document.createElement('li')
  ulEleent.appendChild(li4Element)
  li4Element.setAttribute("class","liProfil")

  li4Element.textContent = `Mobile.No : ${this.mobile} `;

  let li5Element = document.createElement('li')
  ulEleent.appendChild(li5Element)
  li5Element.setAttribute("class","liProfil")

  li5Element.textContent = `EmailID  : ${this.email} `;

}
// }

// Profile.prototype.saveTeProfile=function () {
//     localStorage.setItem('profile',JSON.stringify(Profile.all))
// }

// ahmad part 
function saveTeProfile() {

  let stringArr = JSON.stringify(Profile.all);
  console.log(stringArr);

  localStorage.setItem('profile', stringArr);

}


loadProfile()

// abedalraheem part 
for (let i = 0; i < Profile.all.length; i++) {
  Profile.all[i].renderProfile()
}
